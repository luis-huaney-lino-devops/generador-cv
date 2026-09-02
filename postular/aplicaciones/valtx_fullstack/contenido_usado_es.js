// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Valtx Perú — Desarrollador FullStack Sr. (Node/React, Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Desarrollador Full Stack Sr. | Node.js | React | Microservicios · REST | Docker | SQL/NoSQL · AWS | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima / híbrido)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Full Stack con más de 3 años construyendo aplicaciones web con Node.js y React bajo arquitectura de microservicios. Diseño y consumo APIs REST, modelo bases de datos relacionales y NoSQL, y trabajo con Git y Docker aplicando buenas prácticas. Elaboro documentación y diagramas de arquitectura para facilitar el entendimiento de las soluciones, con base sólida full stack y prácticas DevOps.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé de extremo a extremo el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360 (frontend SPA y servicios de backend), definiendo la arquitectura de la solución y los estándares técnicos.",
        "Modelé la capa de datos relacional y NoSQL, garantizando integridad transaccional y rendimiento en procesos críticos de una entidad financiera regulada.",
        "Configuré infraestructura y automaticé el despliegue (Docker, CI/CD), reduciendo tiempos de publicación y errores de configuración.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (React / Node)", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Lideré una plataforma de e-commerce educativo con React/TypeScript y Node/Laravel, integrando pagos en línea y emisión automática de certificados en un flujo de extremo a extremo.",
        "Diseñé y consumí APIs REST entre frontend y backend, e incrementé los ingresos entre 20% y 23% en los primeros 3 meses.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (Spring Boot / Angular)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Diseñé y desarrollé el Sistema de Gestión de Resoluciones (backend + Angular), reduciendo los tiempos de búsqueda documental en más del 40%.",
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
    "Full stack con Node.js y React sobre arquitectura de microservicios.",
    "APIs REST, bases de datos relacionales y NoSQL, Git y Docker.",
    "Elaboración de diagramas de flujo y arquitectura, y documentación técnica.",
    "Español nativo; inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Angular Avanzado — Platzi | Ago. 2024",
      "Java Spring Boot Programming — Platzi | Ago. 2024",
      "Python Advanced / Essentials — Cisco Networking Academy | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend & Microservicios:", bullets: [
      "Node.js (Express) — APIs REST, microservicios; Python (Flask/Django para scripts y automatización).",
      "C# (.NET) y Java (Spring Boot); autenticación JWT/OAuth2; procesamiento asíncrono con colas (RabbitMQ/Redis).",
    ]},
    { cat: "Frontend:", bullets: [
      "React + TypeScript (componentes, dashboards) y Angular; UI con Tailwind, Bootstrap y Material.",
    ]},
    { cat: "Bases de Datos (SQL & NoSQL):", bullets: [
      "Relacionales: PostgreSQL, SQL Server, MySQL, Oracle. NoSQL: MongoDB, Redis. Diseño y optimización.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "AWS (S3, EC2, RDS, IAM) y mensajería (SNS/SQS); Docker; CI/CD (GitHub Actions/GitLab CI).",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, SOLID, TDD; diagramas de flujo/arquitectura y documentación técnica; Git, Pull Requests, code review.",
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
