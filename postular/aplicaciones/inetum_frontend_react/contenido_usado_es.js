// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Inetum — Analista Frontend Semi Senior (React/TS, remoto)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Desarrollador Frontend Semi Senior | React (Vite) · TypeScript | SPA · Hooks | TailwindCSS | Azure · CI/CD | +3 años exp.",
  contacto: {
    ubicacion: "Perú (remoto)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Frontend Semi Senior con más de 3 años construyendo aplicaciones SPA con React (Vite) y TypeScript para los sectores financiero y público. Domino Hooks, manejo de estado y renderizado (CSR/SSR), estilos con TailwindCSS y consumo de microservicios/APIs REST. Trabajo con Git/Azure DevOps, pipelines CI/CD y TDD bajo metodologías ágiles, y uso asistentes de IA para generar y optimizar código.",

  experiencia: [
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Frontend (React / TypeScript)", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Construí la interfaz con React + TypeScript (componentes reutilizables, Hooks, vistas de catálogo/checkout) para una plataforma de e-commerce, enfocada en conversión y experiencia de usuario.",
        "Consumí microservicios y APIs REST e integré el frontend con el backend en un flujo completo (pagos y certificados), incrementando los ingresos entre 20% y 23% en los primeros 3 meses.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Frontend", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé interfaces SPA (React/Angular) del Sistema de Ingresos, RR. HH. y Selección de Personal (plataforma Caja 360): componentes reutilizables, formularios y consumo de APIs REST en una entidad financiera regulada.",
        "Trabajé con despliegue en Azure y pipelines CI/CD, definiendo estándares técnicos del frontend.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Frontend Angular", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé las vistas (formularios, tablas y filtros) del Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
      ],
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Desarrollé y mantuve el sitio web corporativo con HTML5, CSS3 y JavaScript (ES6+), aplicando buenas prácticas de rendimiento y SEO.",
      ],
      contacto: "Ing. Gerardo Rodriguez · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Titulado", fechas: "junio 2020 – abril 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Bachiller", fechas: "junio 2020 – octubre 2025" },
    { institucion: "Centro de Idiomas – UNASAM", ubicacion: "Huaraz, Perú", detalle: "Curso de Inglés Básico (A1)", fechas: "junio 2023 – junio 2024" },
  ],

  skillsAdicionales: [
    "React 16+ con Vite y TypeScript; SPA, Hooks (useState/useEffect/useMemo/useCallback) y CSR/SSR.",
    "TailwindCSS; consumo de microservicios y APIs REST; componentes en la nube de Azure.",
    "Git/GitHub, Azure DevOps, CI/CD y TDD; asistentes de IA (Claude Code) para generar y optimizar código.",
    "Español nativo; inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Claude Code 101 · Building with the Claude API — Anthropic | Ago. 2026",
    ]},
    { anio: "2024", items: [
      "Angular Avanzado — Platzi | Ago. 2024",
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend (React / TypeScript):", bullets: [
      "React 16+ con Vite y TypeScript — SPA, componentes reutilizables, Hooks (useState/useEffect/useMemo/useCallback).",
      "Renderizado CSR/SSR (Next.js); estilos con TailwindCSS, Bootstrap y Material; rendimiento y accesibilidad.",
    ]},
    { cat: "Integración & Cloud:", bullets: [
      "Consumo de microservicios y APIs REST; componentes de Azure (EntraID/B2C, App Service, Key Vault, Storage, AKS).",
    ]},
    { cat: "Calidad & DevOps:", bullets: [
      "TDD y pruebas unitarias (Jasmine/Karma); Git/GitHub, Azure DevOps, pipelines CI/CD; metodologías ágiles (Scrum/Kanban).",
    ]},
    { cat: "IA en el desarrollo:", bullets: [
      "Uso de asistentes de IA (Claude Code, Claude API) para generación y optimización de código y automatización.",
    ]},
    { cat: "Frontend complementario:", bullets: [
      "Angular (v11–v22) y RxJS; JavaScript (ES6+), HTML5, CSS3.",
    ]},
  ],

  idiomas: [
    "Español — Nativo",
    "Inglés — Básico (A1 certificado)",
  ],

  labels: {
    experiencia: "EXPERIENCIA PROFESIONAL",
    educacion: "EDUCACIÓN",
    skillsAdicionales: "SKILLS ADICIONALES",
    desarrollo: "DESARROLLO PROFESIONAL",
    habilidades: "HABILIDADES",
    idiomas: "IDIOMAS",
    contacto: "Referido",
    anexos: "Anexos",
    certificados: "Certificados",
    constancias: "Constancias de Trabajo",
  },
};
