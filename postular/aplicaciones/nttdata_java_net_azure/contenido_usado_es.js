// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: NTT DATA — Backend Developer Java/.NET - Azure Cloud (Perú)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Backend Developer Java / .NET | Microservicios · APIs REST | Azure (AKS, Functions) | Docker · CI/CD | +3 años exp.",
  contacto: {
    ubicacion: "Perú",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Backend Developer con más de 3 años desarrollando soluciones con Java y .NET bajo arquitectura de microservicios. Diseño e integro APIs REST sobre bases de datos SQL y NoSQL, despliego aplicaciones cloud-native en Azure (App Service, AKS, Functions) con Docker y pipelines CI/CD (GitHub Actions / Azure DevOps), y aplico testing automatizado. Uso herramientas de IA como apoyo en el desarrollo.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Backend Developer .NET", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé y mantuve soluciones backend y APIs REST en .NET (C#) para la plataforma Caja 360, diseñando servicios escalables en una entidad financiera regulada.",
        "Modelé la capa de datos SQL (SQL Server/Oracle) e integré NoSQL/Redis, garantizando integridad transaccional y rendimiento.",
        "Contenericé aplicaciones con Docker y construí pipelines CI/CD, implementando buenas prácticas de testing y calidad de código.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Backend Developer (Java / Spring Boot)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé servicios backend con Java y Spring Boot (Spring Data) para el Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
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
    "Backend con Java (Spring Boot) y .NET (C#) bajo arquitectura de microservicios.",
    "Azure cloud-native (App Service, AKS, Functions), Docker y CI/CD (GitHub Actions / Azure DevOps).",
    "Bases de datos SQL y NoSQL; testing automatizado (unitario e integración).",
    "Herramientas de IA aplicadas al desarrollo; español nativo, inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Building with the Claude API · Claude Code — Anthropic | Ago. 2026",
    ]},
    { anio: "2024", items: [
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Programación Java — Fundación Telefónica del Perú | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend (Java & .NET):", bullets: [
      "Java (Spring Boot, Spring Data, Spring Security) y C# (.NET / ASP.NET Core); Node.js (Express).",
      "Diseño e integración de APIs REST y microservicios escalables; autenticación JWT/OAuth2.",
    ]},
    { cat: "Cloud Native & DevOps:", bullets: [
      "Azure: App Service, AKS, Functions (serverless), Container Apps; Docker.",
      "Pipelines CI/CD con GitHub Actions y/o Azure DevOps; monitoreo (Application Insights, Azure Monitor).",
    ]},
    { cat: "Bases de Datos (SQL & NoSQL):", bullets: [
      "SQL Server, Oracle, PostgreSQL, MySQL; NoSQL (MongoDB) y Redis; diseño y optimización.",
    ]},
    { cat: "Testing & Calidad:", bullets: [
      "Testing automatizado unitario e integración (JUnit, Jasmine/Karma, PHPUnit); buenas prácticas de calidad.",
    ]},
    { cat: "Arquitectura & IA en el desarrollo:", bullets: [
      "Clean Architecture, SOLID, cloud-native; uso de herramientas de IA (Claude Code, Claude API) para acelerar el desarrollo.",
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
