// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Inetum — .NET Developer (Lima) [pide 2 años]
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Desarrollador .NET | C# (.NET 8 · Framework) | Azure (SaaS/PaaS) | Microservicios · Docker/Kubernetes | SQL · Git | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador .NET con más de 3 años programando en C# (.NET 8 y .NET Framework 4.x) para el sector financiero. Desarrollo y despliego microservicios con Docker/Kubernetes sobre entornos Cloud Azure (SaaS/PaaS), modelo datos en SQL Server y aplico Clean Code, SOLID, TDD y patrones de diseño. Manejo Git y trabajo con soltura en línea de comandos Windows/Linux.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador .NET", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé servicios backend y APIs en C# / .NET para el Sistema de Ingresos, RR. HH. y Selección de Personal de la plataforma Caja 360, en una entidad financiera regulada.",
        "Modelé y optimicé el acceso a datos sobre SQL Server y Oracle (consultas, procedimientos, rendimiento), garantizando integridad transaccional.",
        "Desplegué microservicios con Docker/CI-CD sobre infraestructura Cloud, aplicando Clean Code, SOLID y patrones de diseño.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Backend (Spring Boot)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé servicios backend y APIs con Java/Spring Boot para el Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
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
    "C# con .NET 8 y .NET Framework 4.x; microservicios con Docker y Kubernetes.",
    "Entornos Cloud Azure (SaaS/PaaS: almacenamiento y cómputo); bases de datos SQL Server.",
    "Clean Code, SOLID, TDD/BDD y patrones de diseño; Git; CLI Windows/Linux y redes básicas (DNS, TCP/IP).",
    "Español nativo; inglés básico (A1).",
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
      "C# con .NET 8 y .NET Framework 4.x; ASP.NET Core (Web API), Entity Framework; también Java (Spring Boot).",
      "Diseño y despliegue de microservicios; APIs REST; autenticación JWT/OAuth2.",
    ]},
    { cat: "Cloud & Contenedores:", bullets: [
      "Azure (SaaS/PaaS: almacenamiento y cómputo); Docker y Kubernetes; CI/CD (GitHub Actions/Azure DevOps).",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "SQL Server (consultas, procedimientos, optimización); Oracle, PostgreSQL, MySQL.",
    ]},
    { cat: "Buenas Prácticas & Herramientas:", bullets: [
      "Clean Code, SOLID, TDD/BDD, patrones de diseño; Git; CLI Windows/Linux, redes básicas (OSI, DNS, TCP/IP).",
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
