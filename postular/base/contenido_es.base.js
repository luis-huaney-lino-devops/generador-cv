// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español.
//  ESTE es el archivo que la IA/agente edita para adaptar el CV a un puesto.
//  Reglas rápidas para el agente:
//   - Cambia "titular" según el rol (ej. "Senior Frontend Developer | React ...").
//   - Reordena/filtra los bullets de cada experiencia según el puesto (ver
//     data/experiencia_detallada.md, que tiene MÁS bullets etiquetados por área).
//   - Reordena las categorías de "habilidades" poniendo primero las del rol.
//   - No inventes experiencia que no exista. Rellena los [placeholders].
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  // >>> AGENTE: ajusta el titular al puesto objetivo <<<
  titular: "Líder Técnico / Tech Lead | .NET | Angular | Java (Spring Boot) | Arquitectura de Software | DevOps | +3 años exp.",
  contacto: {
    ubicacion: "Perú",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Líder Técnico / Tech Lead con más de 3 años de experiencia liderando el diseño y desarrollo de extremo a extremo de sistemas para el sector financiero y público. Defino la arquitectura de las soluciones (.NET, Angular y Java/Spring Boot), establezco los estándares técnicos del equipo y modelo la capa de datos en SQL Server y Oracle. Combino una sólida base full stack con prácticas DevOps (Docker, CI/CD) y metodologías ágiles para guiar equipos y entregar soluciones escalables, seguras y de alto impacto.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Full Stack .NET / Angular", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Lideré el diseño y desarrollo de extremo a extremo del Sistema de Ingresos, Recursos Humanos y Selección de Personal sobre la plataforma corporativa Caja 360, definiendo la arquitectura de la solución (.NET en el backend y Angular en el frontend) y los estándares técnicos del equipo.",
        "Modelé y optimicé la capa de persistencia sobre SQL Server y Oracle, garantizando la integridad transaccional y el rendimiento de procesos críticos de RR. HH. y nómina en una entidad financiera regulada.",
        "Configuré la infraestructura de servidores y entornos, y automaticé el despliegue de la aplicación, reduciendo los tiempos de publicación y minimizando los errores de configuración manual.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Lideré el desarrollo de una plataforma de e-commerce educativo con Laravel y React/TypeScript, integrando matrículas, pagos en línea y emisión automática de certificados en un único flujo de extremo a extremo.",
        "Optimicé la gestión académica y la experiencia de usuario, incrementando los ingresos entre un 20% y 23% durante los primeros 3 meses y fortaleciendo la visibilidad institucional.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (Spring Boot / Angular)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Diseñé y desarrollé el Sistema de Gestión de Resoluciones de la UNASAM con Spring Boot y Angular, optimizando el registro, control y consulta de documentos y reduciendo los tiempos de búsqueda en más del 40%.",
        "Implementé el Sistema de Control de Visitas con registro, validación y reportes de accesos, reforzando la seguridad institucional y la trazabilidad de ingresos.",
      ],
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Diseñé, desarrollé y mantuve el sitio web corporativo aplicando buenas prácticas de desarrollo, estrategias de SEO y optimización de rendimiento, incrementando la visibilidad orgánica y fortaleciendo la presencia digital de la marca.",
      ],
      contacto: "Ing. Gerardo Rodriguez · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Titulado", fechas: "junio 2020 – abril 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Bachiller", fechas: "junio 2020 – octubre 2025" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Egresado", fechas: "junio 2020 – junio 2025" },
    { institucion: "Centro de Idiomas – UNASAM", ubicacion: "Huaraz, Perú", detalle: "Curso de Inglés Básico (A1)", fechas: "junio 2023 – junio 2024" },
  ],

  skillsAdicionales: [
    "Liderazgo técnico de proyectos tecnológicos desde etapas tempranas: definición de arquitectura, estándares de código y guía del equipo.",
    "Experiencia en herramientas de automatización y metodologías DevOps (Docker, CI/CD).",
    "Prácticas de calidad: code review, Pull Requests, principios SOLID y Clean Architecture.",
    "Conocimientos en inteligencia artificial y su aplicación en proyectos de software.",
    "Español nativo y manejo intermedio de inglés.",
    "Interés en la docencia y la divulgación tecnológica.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "AI Fluency: Framework & Foundations (10/10) — Anthropic | Ago. 2026",
      "AI Fluency for Builders — Anthropic | Ago. 2026",
      "Building with the Claude API — Anthropic | Ago. 2026",
      "Claude with Amazon Bedrock — Anthropic | Ago. 2026",
      "Claude on Google Cloud — Anthropic | Ago. 2026",
      "Claude Code 101 — Anthropic | Ago. 2026",
      "Claude Code in Action — Anthropic | Ago. 2026",
      "Claude 101 — Anthropic | Ago. 2026",
      "Claude Platform 101 — Anthropic | Ago. 2026",
      "Introduction to Model Context Protocol (MCP) — Anthropic | Ago. 2026",
      "Model Context Protocol: Advanced Topics — Anthropic | Ago. 2026",
      "Introduction to subagents — Anthropic | Ago. 2026",
      "Introduction to agent skills — Anthropic | Ago. 2026",
      "Introduction to Claude Cowork — Anthropic | Ago. 2026",
      "AI Capabilities and Limitations — Anthropic | Ago. 2026",
      "AI Fluency for students — Anthropic | Ago. 2026",
      "AI Fluency for educators — Anthropic | Ago. 2026",
      "AI Fluency for nonprofits — Anthropic | Ago. 2026",
      "AI Fluency for Small Businesses — Anthropic | Ago. 2026",
      "Teaching AI Fluency — Anthropic | Ago. 2026",
    ]},
    { anio: "2025", items: [
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
      "Certificado de Egresado — UNASAM | Ago. 2025",
      "Certificado de Superación, Inglés Básico — UNASAM | Ago. 2025",
      "Constancia de Prácticas Preprofesionales — OGTISE | Ago. 2025",
    ]},
    { anio: "2024", items: [
      "English for IT — Cisco Networking Academy | Ago. 2024",
      "Programación Java — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Angular Avanzado — Platzi | Ago. 2024",
      "HTML Essentials — Cisco Networking Academy | Ago. 2024",
      "CSS Essentials — Cisco Networking Academy | Ago. 2024",
      "JavaScript Essentials — Cisco Networking Academy | Ago. 2024",
      "JavaScript Advanced — Cisco Networking Academy | Ago. 2024",
      "Python Essentials — Cisco Networking Academy | Ago. 2024",
      "Python Advanced — Cisco Networking Academy | Ago. 2024",
      "Diseño Web (HTML y CSS) — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Aprende WordPress de forma sencilla — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Inspiring Study Conference — Google | Ago. 2024",
      "Lógica Difusa en Python — UNASAM (Congreso Internacional) | May. 2024",
      "Machine Learning — UNASAM (Congreso Internacional) | May. 2024",
      "Agricultura de Precisión — UNASAM (Congreso Internacional) | May. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services (Training & Certification) | Abr. 2024",
    ]},
    { anio: "2022", items: [
      "Seminario de Investigación, Desarrollo, Innovación y Divulgación — UNASAM | Nov. 2022",
    ]},
  ],

  // >>> AGENTE: pon primero la categoría del rol objetivo (ej. Frontend arriba para React) <<<
  habilidades: [
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, DDD (conceptos aplicados), principios SOLID, diseño orientado a pruebas (TDD/unit testing), revisión de performance y seguridad (CSP, HSTS).",
      "Definición de estándares técnicos del equipo, diseño de arquitectura de soluciones end-to-end y decisiones tecnológicas.",
    ]},
    { cat: "Liderazgo Técnico & Colaboración:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review, gestión de ramas y flujos colaborativos.",
      "Guía técnica de equipos, metodologías ágiles y coordinación del desarrollo de extremo a extremo.",
    ]},
    { cat: "IA Generativa & Agentes:", bullets: [
      "Integración de LLMs con la Claude API; despliegue sobre Amazon Bedrock y Google Cloud.",
      "Model Context Protocol (MCP), agentes y subagentes, Claude Code para automatización de desarrollo.",
    ]},
    { cat: "Backend:", bullets: [
      "C# (.NET — Jobs/Queues, Redis, Horizon), Java (Spring Boot — Spring Data, Spring Security, AMQP), Node.js (Express), Python (Flask/Django para microservicios y scripts de automatización).",
      "Diseño de APIs REST/GraphQL, microservicios, autenticación JWT/OAuth2, manejo de colas y procesamiento asíncrono (RabbitMQ, Celery/Redis).",
      "Testing y calidad: PHPUnit (PHP), JUnit (Java), pruebas de integración y end-to-end.",
    ]},
    { cat: "Frontend:", bullets: [
      "Angular (v11–v22) y TypeScript — desarrollo de SPAs, formularios avanzados, RxJS, pruebas unitarias con Jasmine/Karma.",
      "React + TypeScript (componentes y dashboards), SSR/optimización para SEO (Next.js, SSG/SSR).",
      "UI: Tailwind, Bootstrap, Material; accesibilidad (WCAG) y optimización de performance (Lighthouse).",
    ]},
    { cat: "Bases de Datos & Búsqueda:", bullets: [
      "Relacionales: MySQL/MariaDB, PostgreSQL, Oracle, SQL Server; diseño de esquemas, índices y optimización de queries.",
      "Búsqueda: Elasticsearch para full-text y filtros avanzados.",
      "Caché & sesiones: Redis.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "AWS: S3, EC2, RDS, IAM (despliegues y almacenamiento).",
      "Azure: App Service, Functions, AKS; pipelines y autenticación corporativa.",
      "Storage y backups; monitoreo (Prometheus, Grafana).",
    ]},
    { cat: "Contenedores & Orquestación:", bullets: [
      "Docker (imágenes optimizadas), Kubernetes (despliegue y configuración básica), Docker Compose para entornos locales.",
    ]},
    { cat: "CI/CD & Automatización:", bullets: [
      "GitHub Actions, GitLab CI, Git Flow; pipelines de tests y despliegue automatizado.",
      "Automatización de procesos masivos (creación de cuentas, generación de certificados) con jobs y colas.",
    ]},
  ],

  idiomas: [
    "Español — Nativo",
    "Inglés — Básico/Intermedio (A1 certificado)",
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
