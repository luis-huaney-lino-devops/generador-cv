---
description: Busca empleos (LinkedIn Perú + freehire remoto LATAM/US) y los guarda en la cartera
argument-hint: <palabras clave> [--dias N] [--limit N] [--ubicacion "a,b"] [--sin-freehire]
---

# /buscar — Descubrir avisos de empleo

Corre la búsqueda multi-portal con las palabras clave que da Luis en `$ARGUMENTS` y
guarda los avisos en `postular/trabajos.json` (la "cartera").

## Pasos

1. Si `$ARGUMENTS` está vacío, pide a Luis las palabras clave del rol que busca
   (ej. `full stack .net`, `backend java spring`, `react frontend`, `devops`).
2. Ejecuta:
   ```bash
   node postular/buscar.js $ARGUMENTS
   ```
   El script consulta **LinkedIn (Perú)** y **freehire (remoto LATAM/US)**, deduplica
   contra lo ya visto, y agrega solo lo nuevo.
3. Lee `postular/trabajos.json` y presenta un resumen en tabla de los avisos **nuevos**:
   `#`, portal, título, empresa, ubicación, remoto. Numera las filas para que Luis
   pueda decir "postula al 3".
4. Cierra con: «Corre `/rankear` para ver cuáles encajan mejor contigo, o
   `/postular <#>` para adaptar tu CV a uno.»

## Reglas

- **No inventes avisos.** Muestra únicamente lo que devolvió el script.
- Si Luis quiere más resultados o menos antigüedad, reusa los flags:
  `--limit 15`, `--dias 14`, `--ubicacion "Lima, Peru,Peru"`, `--sin-freehire`,
  `--fh-region latam,us,eu`.
- Correr `/buscar` de nuevo con otras palabras clave **acumula** en la misma cartera.
