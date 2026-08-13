# Kit de CV — Luis Alberto Huaney Lino

Paquete reutilizable para que un **agente de IA** genere y adapte rápidamente el CV a un puesto concreto (ej. *Frontend Senior React*), a partir de una base de datos de experiencia y plantillas en Word que se regeneran por código.

> **Cada carpeta tiene su propio `README.md`** explicando el formato correcto de
> lo que va dentro (para que la IA y tú no tengan que adivinar). Empieza por este,
> luego mira el de la carpeta que vayas a tocar.

## Estructura

```
kit-cv/
├── README.md                     ← estás aquí
├── INSTRUCCIONES_AGENTE.md       ← cómo el agente adapta el CV a un puesto (LÉEME)
│
├── generador/                    ← MOTOR (código). Genera los .docx
│   ├── cv_lib.js                 ← diseño/estilo (no tocar salvo cambiar estética)
│   ├── contenido_es.js           ← CONTENIDO español  ← el agente edita ESTO
│   ├── contenido_en.js           ← CONTENIDO inglés    ← el agente edita ESTO
│   ├── build.js                  ← CLI para generar (ver abajo)
│   └── package.json / node_modules
│
├── cv/                           ← SALIDAS (.docx ya generados)
│   ├── es/  CV_Luis_Huaney_ES.docx  ·  CV_Luis_Huaney_ES_COMPLETO.docx
│   └── en/  CV_Luis_Huaney_EN.docx  ·  CV_Luis_Huaney_EN_COMPLETO.docx
│
├── data/                         ← BASE DE DATOS (texto plano para el agente)
│   ├── experiencia_detallada.md  ← banco de bullets etiquetados por área
│   └── habilidades_por_rol.md    ← qué resaltar según el rol objetivo
│
├── evidencias/                   ← TUS IMÁGENES (reemplaza los ejemplos)
│   ├── certificados/             ← pon aquí PNG/JPG de tus certificados
│   └── constancias_laborales/    ← pon aquí PNG/JPG de tus constancias
│
└── ejemplos/
    └── ejemplo_frontend_senior_react.md
```

## Dos versiones de cada CV
- **Simple** (solo texto): para portales ATS y envíos rápidos.
- **Completo** (`_COMPLETO`): el mismo CV + una sección final de **ANEXOS** con las imágenes de tus certificados y constancias incrustadas. Ideal para adjuntar cuando piden pruebas.

## Cómo generar (requiere Node.js)

```bash
cd generador
npm install                 # solo la primera vez
node build.js all           # genera las 4 versiones
# o individual:
node build.js es simple
node build.js en completo
```

Las imágenes del anexo se toman solas de `evidencias/certificados/` y
`evidencias/constancias_laborales/`. El **nombre del archivo** se usa como
título de cada imagen (ej. `AWS_Cloud_Fundamentos.png` → "AWS Cloud Fundamentos").
Ordénalos con prefijos `01_`, `02_`, …

## Flujo típico con tu agente
1. Le pasas el aviso del puesto + este kit.
2. El agente lee `INSTRUCCIONES_AGENTE.md` y `data/`.
3. Edita `contenido_es.js` / `contenido_en.js` (titular, orden de bullets y skills).
4. Corre `node build.js all`.
5. Entrega el `.docx` adaptado (simple para ATS, completo si piden evidencias).

## Pendientes tuyos (una sola vez)
- Reemplazar las imágenes de ejemplo en `evidencias/` por las reales.
- Rellenar los `[Nombre del referente] · [Cargo]. +51 000 000 000` de cada experiencia (o borrarlos si prefieres "Referencias a solicitud").
- Confirmar **OGTISE** vs OGITISE y el nivel real de inglés (A1 vs intermedio).
- Agregar LinkedIn / GitHub en `contacto` si los tienes.
