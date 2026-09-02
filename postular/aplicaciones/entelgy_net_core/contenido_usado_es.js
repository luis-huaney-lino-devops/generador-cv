// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Entelgy — Analista Desarrollador .NET Core (Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Backend .NET Core | C# · ASP.NET Core Web API | Entity Framework · SQL Server | Azure | Microservicios · Clean Architecture | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Backend .NET Core con más de 3 años creando servicios y APIs REST escalables con C# y ASP.NET Core Web API para el sector financiero. Trabajo el acceso a datos con Entity Framework Core sobre SQL Server (consultas, procedimientos y optimización), implemento autenticación JWT/OAuth2 y despliego sobre Microsoft Azure. Aplico Clean Architecture, DDD y patrones como CQRS, con Git/GitHub Actions y CI/CD.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Backend .NET", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé y mantuve servicios backend y APIs REST con C# y .NET (ASP.NET Core Web API) para el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360, definiendo la arquitectura de la solución.",
        "Diseñé y optimicé el acceso a datos sobre SQL Server y Oracle (consultas, procedimientos almacenados y rendimiento), garantizando integridad transaccional en una entidad financiera regulada.",
        "Implementé autenticación y seguridad (JWT/OAuth2) y automaticé el despliegue con Docker y CI/CD, aplicando Clean Architecture y SOLID.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Backend (Spring Boot)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé servicios backend y APIs con Spring Boot (Spring Data) para el Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
      ],
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Construí y consumí APIs REST entre backend y frontend, integrando pagos en línea y emisión automática de certificados; incrementé los ingresos entre 20% y 23% en los primeros 3 meses.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
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
    "Backend con C# y .NET Core (ASP.NET Core Web API) y acceso a datos con Entity Framework Core sobre SQL Server.",
    "APIs REST y microservicios; autenticación JWT/OAuth2 (Azure AD / Entra ID).",
    "Azure (App Service, Functions), Git/GitHub Actions y CI/CD.",
    "Clean Architecture, DDD y CQRS; español nativo, inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Angular Avanzado — Platzi | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend .NET:", bullets: [
      "C# y .NET Core / ASP.NET Core Web API; Entity Framework Core para acceso y persistencia de datos.",
      "Diseño de APIs REST y microservicios; también Java (Spring Boot) y Node.js (Express).",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "SQL Server (consultas complejas, procedimientos almacenados, optimización); Oracle, PostgreSQL, MySQL; Redis (caché).",
    ]},
    { cat: "Seguridad & Cloud:", bullets: [
      "Autenticación JWT, OAuth2 y Azure AD / Entra ID; Microsoft Azure (App Service, Functions).",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, Domain-Driven Design (DDD) y patrones como CQRS; principios SOLID y TDD.",
    ]},
    { cat: "CI/CD & Versionado:", bullets: [
      "Git y GitHub (branching, pull requests), GitHub Actions y automatización de despliegues; Docker.",
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
