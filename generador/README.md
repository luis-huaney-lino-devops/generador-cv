# /generador — El motor (código)

Aquí vive el código que genera los `.docx`. La IA edita **solo el contenido**
(`contenido_es.js` / `contenido_en.js`); el estilo (`cv_lib.js`) no se toca.

## Archivos
| Archivo | Qué es | ¿Editar? |
|---|---|---|
| `cv_lib.js` | Diseño/estilo del CV (fuentes, márgenes, anexos). | Solo para cambiar estética. |
| `contenido_es.js` | Contenido del CV en español. | **Sí** (aquí adapta la IA). |
| `contenido_en.js` | Contenido del CV en inglés. | **Sí**. |
| `build.js` | Comando para generar los docx. | No. |
| `package.json` | Dependencias (docx, image-size). | No. |

## Cómo correr
```bash
npm install        # solo la primera vez
node build.js all  # genera las 4 versiones (es/en × simple/completo)
```

## Esquema del contenido (formato exacto)
Cada `contenido_*.js` exporta un objeto con esta forma. Respeta los tipos:

```js
module.exports = {
  nombre:  "string",
  titular: "string",            // rol + stack + años. Ajústalo al puesto.
  contacto: {
    ubicacion: "string",        // ej. "Perú"
    portafolioUrl: "https://…",
    portafolioTexto: "string",
    telefono: "string",
    email: "string",
  },
  perfil: "string (2–4 frases)",

  experiencia: [                // orden cronológico inverso (más reciente 1º)
    {
      empresa: "string",
      ubicacion: "string",      // "Ciudad, País"
      cargo: "string",
      fechas: "string",         // "Mes AAAA – Mes AAAA"
      subtitulo: "string",      // OPCIONAL (ej. nombre largo de la oficina)
      bullets: ["string", …],   // 3–4 máx. Verbo en pasado + resultado/métrica.
      contacto: "string",       // "Nombre · Cargo. +51 …"  (referencia)
    },
  ],

  educacion: [ { institucion, ubicacion, detalle, fechas } ],
  skillsAdicionales: ["string", …],
  desarrollo: [ { anio: "2024", items: ["string", …] } ],
  habilidades: [ { cat: "Categoría:", bullets: ["string", …] } ],
  idiomas: ["string", …],
  labels: { … }                 // títulos de sección. No cambiar salvo idioma.
};
```

## Reglas de formato (para que no se rompa)
- Es **JavaScript**: usa comillas rectas `"…"`. Si el texto lleva comillas dobles,
  escápalas `\"` o usa comillas simples exteriores `'…'`.
- Cada elemento de un array termina en coma. No dejes comas colgando fuera de `[]`.
- Fechas siempre con el mismo formato dentro de un mismo idioma.
- Bullets: 1 idea por bullet, empieza con verbo, incluye resultado si existe.
- **No inventes** datos. Rellena los `[placeholders]` antes de entregar.
- Grafía correcta: `.NET`, `PHPUnit`, `Essentials`, `OGTISE`.

## Errores comunes
- "Unexpected token" al correr → falta una coma o una comilla sin cerrar.
- El anexo sale vacío → no hay imágenes válidas en `../evidencias/` (usa PNG/JPG).
