// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: EVOL (TSnet) — Backend Java/.NET Semi Senior + IA (Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Backend Developer Java / .NET | Spring Boot · ASP.NET Core | IA Generativa · LLM (Claude API) | SQL Server · Azure | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima / híbrido)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Backend Developer con más de 3 años desarrollando aplicaciones empresariales con Java (Spring Boot) y .NET (C# / ASP.NET Core) para el sector financiero. Diseño APIs REST y microservicios sobre SQL Server, aplico buenas prácticas y patrones de diseño, y trabajo en equipos ágiles (Scrum). Integro soluciones de IA generativa desde .NET/Java consumiendo APIs de modelos LLM (Claude API, MCP), con prácticas DevOps y CI/CD sobre Azure.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Backend Developer .NET", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé servicios backend y APIs REST en .NET (C#) para el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360, definiendo la arquitectura de la solución en una entidad financiera regulada.",
        "Modelé y optimicé la persistencia sobre SQL Server y Oracle (consultas, procedimientos y rendimiento) garantizando integridad transaccional en procesos críticos.",
        "Automaticé el despliegue (Docker, CI/CD) y apliqué buenas prácticas de arquitectura (Clean Architecture, SOLID).",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Backend Developer (Java / Spring Boot)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Diseñé y desarrollé servicios backend con Java y Spring Boot (Spring Data) para el Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
      ],
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Construí y consumí APIs REST entre backend (Node/Laravel) y frontend, integrando pagos en línea y emisión automática de certificados; incrementé los ingresos entre 20% y 23% en los primeros 3 meses.",
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
    "Backend empresarial con Java (Spring Boot) y .NET (C# / ASP.NET Core) para el sector financiero.",
    "Integración de IA generativa desde .NET/Java vía APIs de modelos LLM (Claude API), MCP y agentes.",
    "APIs REST, SQL Server, Azure, Docker y CI/CD (GitHub Actions / Azure DevOps).",
    "Metodologías ágiles (Scrum/Kanban); español nativo, inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Building with the Claude API — Anthropic | Ago. 2026",
      "Model Context Protocol (MCP) + Advanced Topics — Anthropic | Ago. 2026",
      "Claude with Amazon Bedrock · Claude on Google Cloud — Anthropic | Ago. 2026",
      "Introduction to subagents / agent skills — Anthropic | Ago. 2026",
    ]},
    { anio: "2024", items: [
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Programación Java — Fundación Telefónica del Perú | Ago. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services | Abr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend (Java & .NET):", bullets: [
      "Java (Spring Boot, Spring Data, Spring Security) y C# (.NET / ASP.NET Core — Web API, Entity Framework).",
      "Diseño de APIs REST y microservicios, autenticación JWT/OAuth2, procesamiento asíncrono con colas (RabbitMQ/Redis).",
      "Testing y calidad: JUnit (Java), PHPUnit; pruebas de integración.",
    ]},
    { cat: "IA Generativa & LLM:", bullets: [
      "Integración de IA generativa desde .NET/Java consumiendo APIs de modelos LLM (Claude API).",
      "Model Context Protocol (MCP), agentes y subagentes; despliegue de soluciones de IA sobre Bedrock / Google Cloud.",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "SQL Server y Oracle (consultas, procedimientos, optimización); PostgreSQL, MySQL; Redis (caché).",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "Azure (App Service, Functions, AKS) y AWS; Docker, Kubernetes (básico); CI/CD con GitHub Actions / Azure DevOps.",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, DDD (conceptos), SOLID, patrones de diseño, TDD; Git, Pull Requests, code review; ágil (Scrum/Kanban).",
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
