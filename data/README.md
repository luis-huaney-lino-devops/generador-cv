# /data — Base de datos de experiencia (para la IA)

Texto/datos que el agente lee para adaptar el CV. No genera nada por sí solo;
es la **fuente de verdad** de la que la IA elige qué poner.

## Archivos
- **`perfil.json`** → ⭐ **FUENTE PRINCIPAL (machine-readable, bilingüe es/en).**
  Consolida TODO en un solo lugar y ordenado: datos personales, experiencia con
  bullets etiquetados (`tags`) y marcados `verificar`, certificados, constancias
  (con enlace a las imágenes de `/evidencias`), educación, habilidades y el orden
  de skills por rol. **Empieza por aquí.** Tiene un bloque `_meta` que explica
  cómo usarlo y qué falta por completar (`_meta.pendientesDeLuis`).
- `experiencia_detallada.md` → misma info de experiencia en formato humano (referencia rápida).
- `habilidades_por_rol.md` → misma info de skills-por-rol en formato humano (referencia rápida).

> Los `.md` se mantienen como lectura rápida para humanos, pero **si hay
> diferencia, manda `perfil.json`**. Al agregar experiencia nueva, actualiza
> primero `perfil.json`.

## Formato del banco de bullets
Cada bullet empieza con una o más etiquetas entre corchetes y luego el texto:

```
- `[frontend][liderazgo]` Lideré el desarrollo de la plataforma con React/TypeScript…
- `[backend]` Implementé servicios REST en .NET… `[verificar]`
```

### Etiquetas válidas
`[frontend]` `[backend]` `[devops]` `[data]` `[bd]` `[liderazgo]`

### Marcador especial
- `[verificar]` al final = es un ángulo plausible del mismo trabajo real, pero
  **Luis debe confirmarlo** antes de usarlo. La IA no lo pone sin confirmación.

## Cómo la IA usa esto
1. Lee el aviso → detecta el área (ej. Frontend).
2. Toma del banco los bullets con esa etiqueta, máx. 3–4 por empleo.
3. Los copia (adaptando redacción) a `contenido_*.js`.

## Cómo agregar experiencia nueva (tú)
- Añade un bloque con: empresa, ciudad/fechas y bullets etiquetados.
- Regla de oro: **solo hechos reales**. Si dudas, márcalo `[verificar]`.
- Mantén el mismo formato para que el agente lo lea sin errores.
