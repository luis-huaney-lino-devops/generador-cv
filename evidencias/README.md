# /evidencias — Imágenes de certificados y constancias

De aquí el motor toma las imágenes para la versión **_COMPLETO** del CV (sección
ANEXOS). Reemplaza los ejemplos por tus archivos reales.

## Subcarpetas
- `certificados/` → tus certificados (cursos, diplomas).
- `constancias_laborales/` → constancias de trabajo, cartas de referencia.

## Formato de las imágenes (importante)
| Regla | Detalle |
|---|---|
| Formato | **PNG o JPG** (también gif). Nada de PDF: primero conviértelo a imagen. |
| Nombre = título | El nombre del archivo se vuelve el pie de foto en el CV. |
| Guiones/underscores | `_` y `-` se convierten en espacios. |
| Orden | Usa prefijos `01_`, `02_`, `03_` para controlar el orden. |
| Una por archivo | Un certificado por imagen (no juntes varios en una). |
| Legibilidad | Escaneo o foto **derecha, nítida y completa**. Ancho ideal ≥ 1000 px. |
| Peso | Comprime si pesa mucho; el CV completo no debe volverse gigante. |

### Ejemplos de nombres correctos
```
certificados/01_AWS_Cloud_Fundamentos.png      → "AWS Cloud Fundamentos"
certificados/02_Java_Spring_Boot_Platzi.jpg    → "Java Spring Boot Platzi"
constancias_laborales/01_Constancia_Caja_Arequipa.png → "Constancia Caja Arequipa"
```

## Pasos
1. Borra las imágenes de **EJEMPLO** que vienen incluidas.
2. Copia aquí tus imágenes reales con nombres claros y prefijos de orden.
3. Regenera: `cd ../generador && node build.js all`.

## Privacidad
Las constancias suelen traer nombres, DNI o firmas. Comparte la versión COMPLETO
solo con quien te la pida y por canales confiables; para portales públicos usa la
versión SIMPLE.
