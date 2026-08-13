// ============================================================================
//  contenido_en.js  —  CV CONTENT in English. Agent edits this to tailor.
//  Same rules as contenido_es.js (adjust "titular", filter bullets per role,
//  reorder skills, fill [placeholders], never invent experience).
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  // >>> AGENT: adjust headline to the target role <<<
  titular: "Mid-Senior Full Stack | Java | .NET | React | Angular | DevOps | 3+ years exp.",
  contacto: {
    ubicacion: "Peru",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack and DevOps Developer with over 3 years of experience, specialized in .NET and Angular. I lead the end-to-end design and development of systems for the financial sector, covering solution architecture, data modeling on SQL Server and Oracle, and deployment. I combine a solid full stack foundation with DevOps practices (Docker, CI/CD) and agile methodologies to deliver scalable, high-impact solutions.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer .NET / Angular", fechas: "November 2025 – June 2026",
      bullets: [
        "Led the end-to-end design and development of the Income, Human Resources, and Personnel Selection System on the corporate Caja 360 platform, defining the solution architecture (.NET on the backend and Angular on the frontend) and the team's technical standards.",
        "Modeled and optimized the persistence layer on SQL Server and Oracle, ensuring transactional integrity and the performance of critical HR and payroll processes within a regulated financial institution.",
        "Set up server infrastructure and environments and automated application deployment, reducing release times and minimizing manual configuration errors.",
      ],
      contacto: "[Reference name] · [Role]. +51 000 000 000",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2025",
      bullets: [
        "Led the development of an educational e-commerce platform with Laravel and React/TypeScript, integrating enrollments, online payments, and automatic certificate issuance into a single end-to-end flow.",
        "Optimized academic management and user experience, increasing revenue by 20% to 23% during the first 3 months and strengthening institutional visibility.",
      ],
      contacto: "[Reference name] · [Role]. +51 000 000 000",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed UNASAM's Resolution Management System with Spring Boot and Angular, optimizing document registration, control, and lookup and reducing search times by over 40%.",
        "Implemented the Visitor Control System with access registration, validation, and reporting, strengthening institutional security and entry traceability.",
      ],
      contacto: "[Reference name] · [Role]. +51 000 000 000",
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Peru",
      cargo: "Web Developer", fechas: "July 2022 – November 2023",
      bullets: [
        "Designed, developed, and maintained the corporate website applying development best practices, SEO strategies, and performance optimization, increasing organic visibility and strengthening the brand's digital presence.",
      ],
      contacto: "[Reference name] · [Role]. +51 000 000 000",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Professional Degree (Titulado)", fechas: "June 2020 – June 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Graduate (Egresado)", fechas: "June 2020 – June 2025" },
    { institucion: "Language Center – UNASAM", ubicacion: "Huaraz, Peru", detalle: "Basic English Course (A1)", fechas: "June 2023 – June 2024" },
  ],

  skillsAdicionales: [
    "Experience with automation tools and DevOps methodologies (Docker, CI/CD).",
    "Knowledge of artificial intelligence and its application in software projects.",
    "Ability to create and lead technology projects from early stages.",
    "Native Spanish and intermediate English.",
    "Interest in teaching and technology outreach.",
  ],

  desarrollo: [
    { anio: "2025", items: [
      "Graduate Certificate — UNASAM | Aug. 2025",
      "Certificate of Achievement, Basic English — UNASAM | Aug. 2025",
      "Pre-Professional Internship Certificate — OGTISE | Aug. 2025",
    ]},
    { anio: "2024", items: [
      "English for IT — Cisco Networking Academy | Aug. 2024",
      "Java Programming — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Java Spring Boot Programming — Platzi | Aug. 2024",
      "Advanced Angular — Platzi | Aug. 2024",
      "HTML Essentials — Cisco Networking Academy | Aug. 2024",
      "CSS Essentials — Cisco Networking Academy | Aug. 2024",
      "JavaScript Essentials — Cisco Networking Academy | Aug. 2024",
      "JavaScript Advanced — Cisco Networking Academy | Aug. 2024",
      "Python Essentials — Cisco Networking Academy | Aug. 2024",
      "Python Advanced — Cisco Networking Academy | Aug. 2024",
      "Web Design (HTML & CSS) — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Learn WordPress the Easy Way — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Inspiring Study Conference — Google | Aug. 2024",
      "Fuzzy Logic in Python — UNASAM (International Congress) | May 2024",
      "Machine Learning — UNASAM (International Congress) | May 2024",
      "Precision Agriculture — UNASAM (International Congress) | May 2024",
      "AWS Cloud Fundamentals — Amazon Web Services (Training & Certification) | Apr. 2024",
    ]},
    { anio: "2022", items: [
      "Research, Development, Innovation, and Outreach Seminar — UNASAM | Nov. 2022",
    ]},
  ],

  habilidades: [
    { cat: "Backend:", bullets: [
      "C# (.NET — Jobs/Queues, Redis, Horizon), Java (Spring Boot — Spring Data, Spring Security, AMQP), Node.js (Express), Python (Flask/Django for microservices and automation scripts).",
      "REST/GraphQL API design, microservices, JWT/OAuth2 authentication, queue handling and asynchronous processing (RabbitMQ, Celery/Redis).",
      "Testing and quality: PHPUnit (PHP), JUnit (Java), integration and end-to-end testing.",
    ]},
    { cat: "Artificial Intelligence & Data:", bullets: [
      "Python data stack: Pandas, NumPy for data cleaning and ETL pipelines.",
      "Basic ML / prototyping: scikit-learn; integration of exported models (ONNX).",
      "Data processing for report generation and analysis (batch pipelines, async jobs).",
    ]},
    { cat: "Frontend:", bullets: [
      "Angular (v11–v22) and TypeScript — SPA development, advanced forms, RxJS, unit testing with Jasmine/Karma.",
      "React + TypeScript (components and dashboards), SSR/SEO optimization (Next.js, SSG/SSR).",
      "UI: Tailwind, Bootstrap, Material; accessibility (WCAG) and performance optimization (Lighthouse).",
    ]},
    { cat: "Databases & Search:", bullets: [
      "Relational: MySQL/MariaDB, PostgreSQL, Oracle, SQL Server; schema design, indexing, and query optimization.",
      "Search: Elasticsearch for full-text search and advanced filters.",
      "Cache & sessions: Redis.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "AWS: S3, EC2, RDS, IAM (deployments and storage).",
      "Azure: App Service, Functions, AKS; pipelines and corporate authentication.",
      "Storage and backups; monitoring (Prometheus, Grafana).",
    ]},
    { cat: "Containers & Orchestration:", bullets: [
      "Docker (optimized images), Kubernetes (deployment and basic configuration), Docker Compose for local environments.",
    ]},
    { cat: "Messaging & Real Time:", bullets: [
      "RabbitMQ, Redis (pub/sub), WebSockets / Socket.IO / Pusher for notifications and real-time dashboards.",
    ]},
    { cat: "CI/CD & Automation:", bullets: [
      "GitHub Actions, GitLab CI, Git Flow; test and automated deployment pipelines.",
      "Automation of bulk processes (account creation, certificate generation) with jobs and queues.",
    ]},
    { cat: "Integrations & Payments:", bullets: [
      "Payment gateways (Stripe / PayU), external APIs (WhatsApp/Twilio, SMTP), S3-compatible storage, and PDF generation (iText, Apache PDFBox).",
    ]},
    { cat: "Version Control & Collaboration:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review, branch management, and collaborative workflows.",
    ]},
    { cat: "Architecture & Best Practices:", bullets: [
      "Clean Architecture, DDD (applied concepts), SOLID principles, test-driven design (TDD/unit testing), performance and security review (CSP, HSTS).",
    ]},
  ],

  idiomas: [
    "Spanish — Native",
    "English — Basic/Intermediate (A1 certified)",
  ],

  labels: {
    experiencia: "PROFESSIONAL EXPERIENCE",
    educacion: "EDUCATION",
    skillsAdicionales: "ADDITIONAL SKILLS",
    desarrollo: "PROFESSIONAL DEVELOPMENT",
    habilidades: "SKILLS",
    idiomas: "LANGUAGES",
    contacto: "Reference",
    anexos: "Annexes",
    certificados: "Certificates",
    constancias: "Work Certificates",
  },
};
