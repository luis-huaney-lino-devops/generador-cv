// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: SEIDOR — FullStack Developer PHP (Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Desarrollador Full Stack | PHP · Laravel | JavaScript · Node.js | Angular | MySQL · REST | +3 años exp.",
  contacto: {
    ubicacion: "Perú",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Full Stack con más de 3 años construyendo aplicaciones web de extremo a extremo con PHP/Laravel, JavaScript/Node.js y Angular sobre MySQL. Diseño y consumo servicios web REST/JSON, integro pasarelas de pago y modelo bases de datos relacionales. Combino una sólida base full stack con Git y buenas prácticas (code review, SOLID, Clean Architecture) para entregar soluciones mantenibles y de alto impacto.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé la interfaz en Angular (componentes reutilizables, formularios y consumo de APIs REST) y servicios de backend para el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma corporativa Caja 360.",
        "Modelé y optimicé la capa de persistencia en base de datos relacional (SQL Server/Oracle), garantizando integridad transaccional y rendimiento en procesos críticos de una entidad financiera regulada.",
        "Automaticé el despliegue de la aplicación (Docker, CI/CD), reduciendo tiempos de publicación y errores de configuración manual.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (Laravel / React)", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Lideré el desarrollo de una plataforma de e-commerce educativo con Laravel (PHP) y React/TypeScript sobre MySQL, integrando matrículas, pagos en línea (Stripe/PayU) y emisión automática de certificados en un flujo de extremo a extremo.",
        "Construí y consumí servicios web REST/JSON entre el backend Laravel y el frontend, e incrementé los ingresos entre 20% y 23% en los primeros 3 meses.",
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
    "Desarrollo web full stack con PHP/Laravel, JavaScript/Node.js y Angular sobre MySQL.",
    "Servicios web REST/JSON, integración de pasarelas de pago y APIs de terceros.",
    "Git, code review, Pull Requests, principios SOLID y Clean Architecture.",
    "Español nativo; inglés básico (A1).",
    "Certificación en desarrollo ágil (Scrum) y metodologías colaborativas.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Angular Avanzado — Platzi | Ago. 2024",
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Diseño Web (HTML y CSS) — Fundación Telefónica del Perú | Ago. 2024",
      "Aprende WordPress de forma sencilla — Fundación Telefónica del Perú | Ago. 2024",
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend:", bullets: [
      "PHP (Laravel — Eloquent, APIs REST, Jobs/Queues), JavaScript/Node.js (Express), C# (.NET), Java (Spring Boot).",
      "Diseño y consumo de servicios web REST/JSON (SOA), autenticación JWT/OAuth2, procesamiento asíncrono con colas.",
      "Testing y calidad: PHPUnit (PHP), JUnit (Java), pruebas de integración.",
    ]},
    { cat: "Frontend:", bullets: [
      "Angular (v11–v22) y TypeScript — SPAs, formularios reactivos, RxJS, pruebas con Jasmine/Karma.",
      "React + TypeScript (componentes y vistas de catálogo/checkout); UI con Tailwind, Bootstrap y Material.",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "MySQL/MariaDB, PostgreSQL, SQL Server, Oracle; diseño de esquemas, índices y optimización de queries.",
      "MongoDB (NoSQL) para casos documentales; Redis para caché y sesiones.",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, principios SOLID, diseño orientado a pruebas (TDD), revisión de performance y seguridad.",
    ]},
    { cat: "CI/CD & DevOps:", bullets: [
      "Git (GitHub/GitLab), Git Flow, GitHub Actions/GitLab CI; Docker y despliegue automatizado.",
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
