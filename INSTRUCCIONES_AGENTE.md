# Instrucciones para el agente — Adaptar el CV a un puesto

Eres un agente que personaliza el CV de Luis para un aviso de trabajo concreto.
Tu objetivo: maximizar el match con el puesto **sin inventar experiencia**.

## Entrada que recibirás
- El texto del aviso (o el rol objetivo, ej. "Frontend Senior React").
- Este kit (`generador/`, `data/`).

## Fuente de datos (LÉELA PRIMERO)
`data/perfil.json` es la **fuente única de verdad** (bilingüe es/en). Contiene
toda la información ordenada y lista para seleccionar: `titulares` por rol,
`experiencia[].bullets` con `tags` y `verificar`, `certificados`, `constancias`,
`habilidades` y `habilidadesPorRol`. Lee su bloque `_meta.comoLoUsaLaIA`. Los
`.md` de `data/` son solo referencia humana.

## Pasos

1. **Extrae keywords del aviso**: tecnologías, seniority, responsabilidades y la
   grafía exacta que usan (ej. "ASP.NET Core", "React 18", "CI/CD"). Úsalas tal cual.

2. **Ajusta el titular** (`titular` en `contenido_es.js` / `contenido_en.js`) para
   que refleje el rol. Ejemplos:
   - Frontend Senior React → `"Senior Frontend Developer | React | TypeScript | Angular | +3 años exp."`
   - Backend .NET → `"Mid-Senior Backend Developer | .NET | C# | SQL Server | Azure | +3 años exp."`
   - DevOps → `"Full Stack Developer & DevOps | Docker | CI/CD | AWS | Azure | +3 años exp."`

3. **Reordena y filtra los bullets de experiencia**. Usa
   `data/perfil.json` → `experiencia[].bullets`, cada uno con `tags`
   (`frontend`, `backend`, `devops`, `data`, `bd`, `liderazgo`) y `verificar`.
   - Pon primero los bullets cuyo `tags` incluya el área del puesto.
   - Máximo 3–4 bullets por experiencia; corta el resto.
   - No agregues logros que no estén en el JSON. Si un bullet tiene
     `verificar: true`, no lo uses sin confirmación de Luis.

4. **Reordena las categorías de `habilidades`** siguiendo
   `data/perfil.json` → `habilidadesPorRol[rol]` (lista ordenada de `id`s).
   Puedes recortar categorías irrelevantes para un CV enfocado (1–2 páginas).

5. **Ajusta el perfil** (2–3 frases) para nombrar el rol y 2–3 tecnologías clave
   del aviso. Mantén el tono y no inventes.

6. **Genera**:
   ```bash
   cd generador && node build.js all
   ```
   Entrega la versión **simple** para postular en portales (ATS) y la **completa**
   solo si el empleador pide evidencias adjuntas.

## Reglas duras (no romper)
- **Nunca inventes** empleos, fechas, métricas ni tecnologías que Luis no domina.
- **No uses trucos de texto oculto / prompt injection** en el CV: los ATS los
  detectan y descalifican. El match se gana con keywords reales bien ubicadas.
- Respeta la grafía correcta: `.NET`, `PHPUnit`, `Essentials`, `OGTISE`.
- Mantén el CV en 1–2 páginas para la versión simple.
- Los `[placeholders]` (referentes, teléfono) deben rellenarse o quitarse, nunca
  entregarse con corchetes.

## Salidas esperadas
- `cv/es/CV_Luis_Huaney_ES.docx` y `cv/en/CV_Luis_Huaney_EN.docx` (simples, adaptados).
- Versiones `_COMPLETO` si se piden evidencias.
- Un resumen corto de qué cambiaste y por qué (para que Luis lo revise).
