#!/usr/bin/env node
// ============================================================================
//  buscar.js  —  Orquestador de búsqueda de empleo multi-portal.
//
//  Corre los CLIs del repo ai-job-search (LinkedIn + freehire) para varias
//  ubicaciones, junta y deduplica los resultados, y los guarda en
//  postular/trabajos.json (preservando estado/fit de avisos ya vistos).
//
//  USO:
//    node postular/buscar.js "full stack developer"
//    node postular/buscar.js "backend .net" --dias 14 --limit 15
//    node postular/buscar.js "react" --ubicacion "Peru,Lima, Peru,Remote"
//    node postular/buscar.js "devops" --sin-freehire
//    node postular/buscar.js "data engineer" --fh-region latam,us --fh-remote remote
//
//  FLAGS:
//    --dias N            Avisos publicados en los últimos N días (default 30).
//    --limit N           Máx. resultados por ubicación/portal (default 12).
//    --ubicacion "a,b"   Ubicaciones LinkedIn separadas por coma
//                        (default "Peru,Remote").
//    --sin-linkedin      No consultar LinkedIn.
//    --sin-freehire      No consultar freehire.
//    --fh-region x,y     Región freehire (default "latam,us"; ej. eu,us,latam).
//    --fh-remote mode    freehire work_mode: remote|hybrid|onsite (default remote).
//
//  Depende de: bun (para los CLIs) y Node. No modifica el repo clonado.
// ============================================================================
'use strict';

const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

const RAIZ = path.join(__dirname, '..');
const REPO = path.join(RAIZ, 'ai-job-search');
const CLI_LINKEDIN = '.agents/skills/linkedin-search/cli/src/cli.ts';
const CLI_FREEHIRE = '.agents/skills/freehire-search/cli/src/cli.ts';
const ARCHIVO = path.join(__dirname, 'trabajos.json');

// --- parseo de argumentos -------------------------------------------------
function parseArgs(argv) {
  const out = { _: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) {
        out.flags[key] = true; // flag booleano
      } else {
        out.flags[key] = next;
        i++;
      }
    } else {
      out._.push(a);
    }
  }
  return out;
}

// --- ejecutar un CLI del repo con bun y devolver results[] ----------------
function correrCli(cliRel, args, etiqueta) {
  const cmdArgs = ['run', cliRel, ...args];
  // shell:true para que 'bun' resuelva bien en Windows y en bash.
  const q = (s) => (/[\s"']/.test(String(s)) ? `"${String(s).replace(/"/g, '\\"')}"` : String(s));
  const linea = ['bun', ...cmdArgs].map(q).join(' ');
  const r = spawnSync(linea, { cwd: REPO, encoding: 'utf8', shell: true, maxBuffer: 1024 * 1024 * 32 });
  if (r.status !== 0) {
    process.stderr.write(`  ⚠ ${etiqueta}: el CLI devolvió código ${r.status}. ${(r.stderr || '').trim().slice(0, 300)}\n`);
    return [];
  }
  try {
    const data = JSON.parse(r.stdout);
    return Array.isArray(data.results) ? data.results : [];
  } catch (e) {
    process.stderr.write(`  ⚠ ${etiqueta}: no se pudo parsear la salida JSON. ${e.message}\n`);
    return [];
  }
}

// --- normalización + dedupe -----------------------------------------------
function slugEmpresaTitulo(empresa, titulo) {
  return `${empresa}|${titulo}`.toLowerCase().replace(/\s+/g, ' ').trim();
}

function normLinkedin(j) {
  return {
    id: `linkedin:${j.id}`,
    portal: 'linkedin',
    portalId: String(j.id),
    titulo: j.title || '',
    empresa: j.company || '',
    ubicacion: j.location || '',
    fecha: (j.date || '').slice(0, 10),
    url: j.url || '',
    remoto: /remote|remoto/i.test(`${j.title} ${j.location}`) || null,
    skills: [],
  };
}

function normFreehire(j) {
  return {
    id: `freehire:${j.id}`,
    portal: 'freehire',
    portalId: String(j.id),
    titulo: j.title || '',
    empresa: j.company || '',
    ubicacion: j.location || (Array.isArray(j.countries) ? j.countries.join(',') : ''),
    fecha: (j.date || '').slice(0, 10),
    url: j.url || '',
    remoto: j.work_mode === 'remote' ? true : j.work_mode ? false : null,
    skills: Array.isArray(j.skills) ? j.skills : [],
  };
}

// --- carga/merge de estado -------------------------------------------------
function cargarEstado() {
  if (!fs.existsSync(ARCHIVO)) return { trabajos: [] };
  try {
    return JSON.parse(fs.readFileSync(ARCHIVO, 'utf8'));
  } catch {
    return { trabajos: [] };
  }
}

function hoyISO() {
  return new Date().toISOString().slice(0, 10);
}

// ==========================================================================
async function main() {
  const { _, flags } = parseArgs(process.argv.slice(2));
  const query = _.join(' ').trim();
  if (!query) {
    console.error('Falta la búsqueda. Ej: node postular/buscar.js "full stack developer"');
    process.exit(1);
  }

  const dias = String(flags.dias || 30);
  const limit = String(flags.limit || 12);
  // LinkedIn Perú ya incluye los roles "Remote Work" posteados a Perú; el
  // remoto internacional lo cubre freehire (region latam,us + remote). La
  // ubicación LinkedIn "Remote" geocodifica mal (trae ruido de otros países),
  // por eso el default es solo "Peru". Se puede ampliar con --ubicacion.
  const ubicaciones = String(flags.ubicacion || 'Peru')
    .split(',').map((s) => s.trim()).filter(Boolean);
  const usarLinkedin = !flags['sin-linkedin'];
  const usarFreehire = !flags['sin-freehire'];
  const fhRegion = String(flags['fh-region'] || 'latam,us');
  const fhRemote = String(flags['fh-remote'] || 'remote');

  console.log(`\n🔎 Buscando: "${query}"  (últimos ${dias} días, hasta ${limit} por fuente)\n`);

  const crudos = [];

  if (usarLinkedin) {
    for (const loc of ubicaciones) {
      process.stdout.write(`  · LinkedIn @ ${loc} ... `);
      const res = correrCli(CLI_LINKEDIN,
        ['search', '-q', query, '-l', loc, '--jobage', dias, '--limit', limit, '--format', 'json'],
        `LinkedIn(${loc})`);
      console.log(`${res.length} avisos`);
      crudos.push(...res.map(normLinkedin));
    }
  }

  if (usarFreehire) {
    process.stdout.write(`  · freehire @ region=${fhRegion} remote=${fhRemote} ... `);
    const res = correrCli(CLI_FREEHIRE,
      ['search', '-q', query, '--jobage', dias, '--limit', limit,
       '--region', fhRegion, '--remote', fhRemote, '--no-description', '--format', 'json'],
      'freehire');
    console.log(`${res.length} avisos`);
    crudos.push(...res.map(normFreehire));
  }

  // --- dedupe por url y por empresa+titulo ---
  const estado = cargarEstado();
  const previos = estado.trabajos || [];
  const porUrl = new Map();
  const porEmpTit = new Map();
  for (const t of previos) {
    if (t.url) porUrl.set(t.url, t);
    porEmpTit.set(slugEmpresaTitulo(t.empresa, t.titulo), t);
  }

  let nuevos = 0;
  const nuevosLista = [];
  for (const j of crudos) {
    if (!j.titulo || !j.empresa) continue;
    const claveUrl = j.url;
    const claveEmp = slugEmpresaTitulo(j.empresa, j.titulo);
    if ((claveUrl && porUrl.has(claveUrl)) || porEmpTit.has(claveEmp)) continue; // ya existe
    const registro = {
      ...j,
      estado: 'nuevo',
      fit: null,
      primeraVez: hoyISO(),
      query,
    };
    previos.push(registro);
    if (claveUrl) porUrl.set(claveUrl, registro);
    porEmpTit.set(claveEmp, registro);
    nuevos++;
    nuevosLista.push(registro);
  }

  const salida = { actualizado: new Date().toISOString(), trabajos: previos };
  fs.mkdirSync(path.dirname(ARCHIVO), { recursive: true });
  fs.writeFileSync(ARCHIVO, JSON.stringify(salida, null, 2), 'utf8');

  // --- resumen ---
  console.log(`\n✅ ${nuevos} avisos nuevos (total en cartera: ${previos.length}).`);
  if (nuevosLista.length) {
    console.log('\n  NUEVOS:');
    for (const t of nuevosLista.slice(0, 40)) {
      const rem = t.remoto === true ? ' [remoto]' : '';
      console.log(`  · [${t.portal}] ${t.titulo} — ${t.empresa} (${t.ubicacion})${rem}`);
    }
    if (nuevosLista.length > 40) console.log(`  … y ${nuevosLista.length - 40} más.`);
  }
  const porRankear = previos.filter((t) => t.estado === 'nuevo').length;
  console.log(`\n➡  Siguiente paso: /rankear   (${porRankear} sin rankear)\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
