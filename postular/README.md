# Postular — Buscar empleos y adaptar el CV por puesto

Sistema semi-automático para **descubrir avisos**, **rankearlos** contra tu perfil real y
**generar un CV adaptado** a cada uno, reusando tu generador (`generador/` + `data/perfil.json`).

Combina dos piezas:
- **`ai-job-search/`** (repo de MadsLorentzen, clonado) → solo lo usamos por sus buscadores
  de LinkedIn y freehire, ya probados.
- **Tu generador** (`generador/build.js` + `perfil.json`) → produce el CV en `.docx`.

## ⚠️ Qué hace y qué NO hace

- ✅ Busca avisos en **LinkedIn (Perú)** y **freehire (remoto LATAM/US)**.
- ✅ Los rankea por qué tanto encajan contigo, con honestidad (no infla nada).
- ✅ Genera un **CV adaptado por puesto** (español o inglés según el aviso) y lo archiva.
- ❌ **No envía postulaciones por ti.** Tú revisas el CV y lo subes. El auto-envío masivo
  va contra los términos de LinkedIn/portales y puede **banear tu cuenta**; por eso el
  flujo es semi-automático: la máquina prepara, tú das el clic final.

## Requisitos (ya instalados en esta máquina)

- **Node** (para el generador y el buscador) · **Bun** (para los CLIs de búsqueda).
- No necesita LaTeX ni API keys.

Instala una vez las dependencias del generador (si no están):
```bash
cd generador && npm install && cd ..
```

## Flujo en 3 pasos

```
/buscar full stack .net     →   /rankear            →   /postular 3
(descubre avisos)               (los puntúa)             (adapta el CV al #3)
```

### 1) `/buscar <palabras clave>`
Corre los buscadores y guarda los avisos nuevos en `postular/trabajos.json`.
Ejemplos:
```
/buscar full stack .net angular
/buscar backend java spring --dias 14
/buscar react frontend --limit 15
```
Por debajo llama a:
```bash
node postular/buscar.js "full stack .net" --dias 30 --limit 12
```
Flags útiles: `--dias N`, `--limit N`, `--ubicacion "Lima, Peru,Peru"`,
`--sin-freehire`, `--fh-region latam,us,eu`.

### 2) `/rankear`
Puntúa cada aviso contra `data/perfil.json` (tu stack real: .NET, Angular, Java/Spring,
React, SQL Server/Oracle, Docker/CI-CD…). Marca compuertas honestas:
- **Idioma:** avisos que exigen inglés fluido se marcan ⚠ (tu inglés es A1).
- **Ubicación:** presencial fuera de Perú se marca como "reubicación".

Devuelve un shortlist numerado con fortalezas reales y el gap honesto de cada uno.

### 3) `/postular <#>`
Adapta el CV al aviso elegido siguiendo `INSTRUCCIONES_AGENTE.md`:
ajusta el titular, filtra los bullets por área, reordena habilidades, rellena
placeholders — **sin inventar nada**. Genera el `.docx` y lo archiva en
`postular/aplicaciones/<empresa_rol>/` junto con el aviso y un resumen de cambios.
Registra la postulación en `postular/tracker.csv` como `borrador` (pendiente de que tú
la envíes). Puedes pasar varios: "postula al 2, 5 y 7".

## Archivos

| Ruta | Qué es |
|------|--------|
| `postular/buscar.js` | Orquestador de búsqueda multi-portal. |
| `postular/trabajos.json` | Cartera de avisos (estado + ranking). Se regenera. |
| `postular/tracker.csv` | Registro de postulaciones. |
| `postular/aplicaciones/<slug>/` | Un CV adaptado + aviso + resumen por puesto. |
| `.claude/commands/{buscar,rankear,postular}.md` | Los comandos slash. |

## Notas y extensiones

- **Cobertura Perú + remoto:** LinkedIn-Perú ya trae los "Remote Work" posteados a Perú;
  freehire cubre remoto LATAM/US tech. Con eso tienes buena cobertura sin ruido.
- **Agregar Computrabajo/Bumeran:** se puede construir después como buscadores propios,
  pero son frágiles (anti-bot). Hoy no están; LinkedIn + freehire cubren bien.
- **Actualizar el repo de búsqueda:** `cd ai-job-search && git pull`.
- **Uso responsable:** mantén el volumen bajo (los CLIs son para uso personal, no masivo).
