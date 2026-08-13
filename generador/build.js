#!/usr/bin/env node
// ============================================================================
//  build.js  —  Genera el CV en docx.
//  Uso:
//    node build.js es simple      -> CV español, solo texto
//    node build.js en simple      -> CV inglés,  solo texto
//    node build.js es completo    -> CV español + anexos (imágenes de evidencias/)
//    node build.js en completo    -> CV inglés  + anexos
//    node build.js all            -> genera las 4 versiones
//
//  Las imágenes se leen de:  ../evidencias/certificados/  y
//                            ../evidencias/constancias_laborales/
//  (formatos png, jpg, jpeg, gif). El nombre del archivo se usa como pie de foto.
// ============================================================================
const path = require('path');
const { buildDoc, writeDoc } = require('./cv_lib');

const OUT = {
  es: path.join(__dirname, '..', 'cv', 'es'),
  en: path.join(__dirname, '..', 'cv', 'en'),
};
const EVID = path.join(__dirname, '..', 'evidencias');

async function gen(lang, tipo) {
  const contenido = require(`./contenido_${lang}.js`);
  const completo = tipo === 'completo';
  const doc = buildDoc(contenido, { completo, evidenciasDir: EVID });
  const nombre = `CV_Luis_Huaney_${lang.toUpperCase()}${completo ? '_COMPLETO' : ''}.docx`;
  const out = path.join(OUT[lang], nombre);
  await writeDoc(doc, out);
  console.log('✓', nombre);
}

(async () => {
  const [lang, tipo] = process.argv.slice(2);
  if (lang === 'all' || !lang) {
    for (const l of ['es', 'en']) for (const t of ['simple', 'completo']) await gen(l, t);
  } else {
    await gen(lang, tipo || 'simple');
  }
})();
