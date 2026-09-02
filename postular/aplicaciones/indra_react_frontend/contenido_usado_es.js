// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Indra — Desarrollador Frontend Senior (ReactJS) (Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Frontend Developer Senior React | TypeScript · Next.js | Redux · RxJS | SPA | Node.js · Azure | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Frontend Senior con más de 3 años construyendo aplicaciones SPA con ReactJS, Next.js y TypeScript para el sector financiero. Manejo gestión de estado (Redux/RxJS), componentes reutilizables y consumo de APIs REST, con base en Node.js y despliegue sobre Azure. Aporto también experiencia con Angular y una sólida visión full stack, priorizando rendimiento y experiencia de usuario.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Frontend", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé interfaces SPA (Angular/React) del Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360 en una entidad financiera (banca): componentes reutilizables, formularios y consumo de APIs REST.",
        "Definí estándares técnicos del frontend e integré con servicios backend, cubriendo el flujo de extremo a extremo.",
        "Desplegué sobre infraestructura corporativa con Docker y CI/CD.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Frontend (React / TypeScript)", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Construí la interfaz con React + TypeScript (componentes reutilizables, vistas de catálogo/checkout) enfocada en conversión y experiencia de usuario, consumiendo APIs REST.",
        "Integré el frontend con el backend en un flujo de e-commerce completo (pagos y certificados), incrementando los ingresos entre 20% y 23% en los primeros 3 meses.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Frontend Angular", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé las vistas en Angular (formularios, tablas y filtros) del Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
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
    "ReactJS y Next.js con TypeScript; SPA, gestión de estado (Redux/RxJS) y componentes reutilizables.",
    "HTML5, CSS3, JavaScript (ES6+); Bootstrap; base en Node.js y despliegue en Azure.",
    "Experiencia en sector Banca/financiero y visión full stack (Angular, .NET, Java).",
    "Git, ágil y pruebas unitarias; español nativo, inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Ago. 2024",
      "Angular Avanzado — Platzi | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend (React / Next.js):", bullets: [
      "ReactJS y Next.js con TypeScript (4+) — SPA, componentes reutilizables, hooks; gestión de estado con Redux/RxJS.",
      "JavaScript (ES6+), HTML5, CSS3; Bootstrap y Material; optimización de rendimiento y experiencia de usuario.",
    ]},
    { cat: "Frontend (Angular):", bullets: [
      "Angular (v11–v22), RxJS y formularios reactivos como frontend complementario.",
    ]},
    { cat: "Base Backend & Cloud:", bullets: [
      "Node.js (Express) y APIs REST; despliegue y servicios en Azure; también .NET y Java.",
    ]},
    { cat: "Calidad & Colaboración:", bullets: [
      "Pruebas unitarias (Jasmine/Karma), code review; Git (GitHub/GitLab), Pull Requests; metodologías ágiles.",
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
