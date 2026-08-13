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
  titular: "Mid-Senior Full Stack | Java | .NET | React | Angular | DevOps | +3 años exp.",
  contacto: {
    ubicacion: "Perú",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Full Stack y DevOps con más de 3 años de experiencia, especializado en .NET y Angular. Lidero el diseño y desarrollo de extremo a extremo de sistemas para el sector financiero, abarcando arquitectura, modelado de datos en SQL Server y Oracle, y despliegue de la solución. Combino una sólida base full stack con prácticas DevOps (Docker, CI/CD) y metodologías ágiles para entregar soluciones escalables y de alto impacto.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Full Stack .NET / Angular", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Lideré el diseño y desarrollo de extremo a extremo del Sistema de Ingresos, Recursos Humanos y Selección de Personal sobre la plataforma corporativa Caja 360, definiendo la arquitectura de la solución (.NET en el backend y Angular en el frontend) y los estándares técnicos del equipo.",
        "Modelé y optimicé la capa de persistencia sobre SQL Server y Oracle, garantizando la integridad transaccional y el rendimiento de procesos críticos de RR. HH. y nómina en una entidad financiera regulada.",
        "Configuré la infraestructura de servidores y entornos, y automaticé el despliegue de la aplicación, reduciendo los tiempos de publicación y minimizando los errores de configuración manual.",
      ],
      contacto: "[Nombre del referente] · [Cargo]. +51 000 000 000",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Lideré el desarrollo de una plataforma de e-commerce educativo con Laravel y React/TypeScript, integrando matrículas, pagos en línea y emisión automática de certificados en un único flujo de extremo a extremo.",
        "Optimicé la gestión académica y la experiencia de usuario, incrementando los ingresos entre un 20% y 23% durante los primeros 3 meses y fortaleciendo la visibilidad institucional.",
      ],
      contacto: "[Nombre del referente] · [Cargo]. +51 000 000 000",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (Spring Boot / Angular)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Diseñé y desarrollé el Sistema de Gestión de Resoluciones de la UNASAM con Spring Boot y Angular, optimizando el registro, control y consulta de documentos y reduciendo los tiempos de búsqueda en más del 40%.",
        "Implementé el Sistema de Control de Visitas con registro, validación y reportes de accesos, reforzando la seguridad institucional y la trazabilidad de ingresos.",
      ],
      contacto: "[Nombre del referente] · [Cargo]. +51 000 000 000",
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Diseñé, desarrollé y mantuve el sitio web corporativo aplicando buenas prácticas de desarrollo, estrategias de SEO y optimización de rendimiento, incrementando la visibilidad orgánica y fortaleciendo la presencia digital de la marca.",
      ],
      contacto: "[Nombre del referente] · [Cargo]. +51 000 000 000",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Titulado", fechas: "junio 2020 – junio 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Egresado", fechas: "junio 2020 – junio 2025" },
    { institucion: "Centro de Idiomas – UNASAM", ubicacion: "Huaraz, Perú", detalle: "Curso de Inglés Básico (A1)", fechas: "junio 2023 – junio 2024" },
  ],

  skillsAdicionales: [
    "Experiencia en herramientas de automatización y metodologías DevOps (Docker, CI/CD).",
    "Conocimientos en inteligencia artificial y su aplicación en proyectos de software.",
    "Habilidad en la creación y liderazgo de proyectos tecnológicos desde etapas tempranas.",
    "Español nativo y manejo intermedio de inglés.",
    "Interés en la docencia y la divulgación tecnológica.",
  ],

  desarrollo: [
    { anio: "2025", items: [
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
    { cat: "Backend:", bullets: [
      "C# (.NET — Jobs/Queues, Redis, Horizon), Java (Spring Boot — Spring Data, Spring Security, AMQP), Node.js (Express), Python (Flask/Django para microservicios y scripts de automatización).",
      "Diseño de APIs REST/GraphQL, microservicios, autenticación JWT/OAuth2, manejo de colas y procesamiento asíncrono (RabbitMQ, Celery/Redis).",
      "Testing y calidad: PHPUnit (PHP), JUnit (Java), pruebas de integración y end-to-end.",
    ]},
    { cat: "Inteligencia Artificial & Data:", bullets: [
      "Python data stack: Pandas, NumPy para limpieza y pipelines ETL.",
      "ML básico / prototipos: scikit-learn; integración de modelos exportados (ONNX).",
      "Procesamiento de datos para generación de reportes y análisis (pipelines batch, jobs asíncronos).",
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
    { cat: "Mensajería & Tiempo Real:", bullets: [
      "RabbitMQ, Redis (pub/sub), WebSockets / Socket.IO / Pusher para notificaciones y paneles en tiempo real.",
    ]},
    { cat: "CI/CD & Automatización:", bullets: [
      "GitHub Actions, GitLab CI, Git Flow; pipelines de tests y despliegue automatizado.",
      "Automatización de procesos masivos (creación de cuentas, generación de certificados) con jobs y colas.",
    ]},
    { cat: "Integraciones & Pagos:", bullets: [
      "Pasarelas de pago (Stripe / PayU), APIs externas (WhatsApp/Twilio, SMTP), almacenamiento S3-compatible y generación de PDFs (iText, Apache PDFBox).",
    ]},
    { cat: "Control de Versiones & Colaboración:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review, gestión de ramas y flujos colaborativos.",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Clean Architecture, DDD (conceptos aplicados), principios SOLID, diseño orientado a pruebas (TDD/unit testing), revisión de performance y seguridad (CSP, HSTS).",
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
    contacto: "Contacto",
    anexos: "Anexos",
    certificados: "Certificados",
    constancias: "Constancias de Trabajo",
  },
};
