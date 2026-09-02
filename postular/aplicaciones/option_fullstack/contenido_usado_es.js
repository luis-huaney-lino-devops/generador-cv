// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: OPTION — Full Stack Engineer Senior (Chile, remoto)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Full Stack Engineer | React | Node.js | Microservicios | Azure | OAuth2 · CI/CD | IA Generativa (Claude) | +3 años exp.",
  contacto: {
    ubicacion: "Perú (remoto)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack Engineer con más de 3 años construyendo aplicaciones web con React en el frontend y Node.js en el backend bajo arquitectura de microservicios. Modelo bases de datos relacionales y NoSQL, implemento autenticación segura (OAuth2/JWT) y entrego con CI/CD sobre la nube (Azure). Trabajo a diario con IA generativa (Claude API, MCP, agentes) para acelerar el desarrollo, con foco en buenas prácticas de UX e ingeniería.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Full Stack Engineer", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Diseñé y desarrollé de extremo a extremo el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360: frontend en Angular/React y servicios de backend, definiendo la arquitectura de la solución.",
        "Modelé la capa de datos (relacional y NoSQL) e implementé autenticación y seguridad para procesos críticos de una entidad financiera regulada.",
        "Configuré infraestructura y automaticé el despliegue (Docker, CI/CD), reduciendo tiempos de publicación y errores de configuración.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Full Stack Developer", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Lideré una plataforma de e-commerce educativo con React/TypeScript y Node/Laravel, integrando pagos en línea y emisión automática de certificados en un flujo de extremo a extremo.",
        "Construí y consumí APIs REST entre frontend y backend, incrementando los ingresos entre 20% y 23% en los primeros 3 meses.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé el Sistema de Gestión de Resoluciones (backend + Angular), reduciendo los tiempos de búsqueda documental en más del 40%.",
      ],
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Desarrollé y mantuve el sitio web corporativo con HTML, CSS y JavaScript, aplicando buenas prácticas de rendimiento y SEO.",
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
    "Frontend con React y backend con Node.js sobre arquitectura de microservicios.",
    "Autenticación OAuth2/JWT, APIs REST/GraphQL y CI/CD sobre Azure.",
    "IA generativa aplicada: Claude API, MCP y agentes para acelerar el desarrollo.",
    "Español nativo; inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Building with the Claude API — Anthropic | Ago. 2026",
      "Model Context Protocol (MCP) + Advanced Topics — Anthropic | Ago. 2026",
      "Claude with Amazon Bedrock · Claude on Google Cloud — Anthropic | Ago. 2026",
    ]},
    { anio: "2024", items: [
      "Angular Avanzado — Platzi | Ago. 2024",
      "Java Spring Boot Programming — Platzi | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "React + TypeScript — componentes, dashboards y consumo de APIs; UI con Material y Tailwind.",
      "Angular (v11–v22), RxJS, formularios reactivos; accesibilidad y performance.",
    ]},
    { cat: "Backend & Microservicios:", bullets: [
      "Node.js (Express) — APIs REST/GraphQL, microservicios, autenticación OAuth2/JWT.",
      "Java (Spring Boot), C# (.NET); procesamiento asíncrono con colas (RabbitMQ/Redis).",
    ]},
    { cat: "IA Generativa & Agentes:", bullets: [
      "Integración de LLMs con la Claude API; Model Context Protocol (MCP), agentes y subagentes.",
      "Despliegue de soluciones de IA sobre Amazon Bedrock y Google Cloud.",
    ]},
    { cat: "Cloud & CI/CD:", bullets: [
      "Azure (App Service, Functions, AKS) y AWS; Docker; pipelines CI/CD (GitHub Actions/GitLab CI).",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "Relacionales (PostgreSQL, SQL Server, MySQL, Oracle) y NoSQL (MongoDB, Redis); diseño y optimización.",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, SOLID, TDD; Git, Pull Requests, code review y metodologías ágiles (Scrum/Kanban).",
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
