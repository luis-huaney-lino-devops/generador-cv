// ============================================================================
//  contenido_en.js  —  CV CONTENT in English. Agent edits this to tailor.
//  Same rules as contenido_es.js (adjust "titular", filter bullets per role,
//  reorder skills, fill [placeholders], never invent experience).
//  >>> ADAPTED FOR: GlobalLogic — Full-stack Software Developer (React.JS & .Net)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Mid-Senior Full Stack Developer | React | TypeScript | .NET | C# | CI/CD | AI-Assisted Development (Claude) | 3+ years exp.",
  contacto: {
    ubicacion: "Peru",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack Developer with 3+ years building and owning features end-to-end across React/TypeScript front ends and .NET/C# back ends. I define solution architecture, REST APIs and data models (SQL Server, Oracle), and ship through Docker and CI/CD pipelines. I work daily with AI coding assistants (Claude Code, Claude API) — prompting, reviewing and validating generated code against architectural and security constraints — and hold multiple Anthropic AI certifications.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer .NET / Angular", fechas: "November 2025 – June 2026",
      bullets: [
        "Owned the end-to-end design and development of the Income, HR and Personnel Selection System on the corporate Caja 360 platform, defining the solution architecture (.NET / C# on the back end, SPA on the front end) and the team's technical standards.",
        "Designed REST services and modeled the persistence layer on SQL Server and Oracle, ensuring transactional integrity and performance of critical processes in a regulated financial institution.",
        "Automated application deployment across environments (Docker, CI/CD), reducing release times and minimizing manual configuration errors.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2025",
      bullets: [
        "Built the front end with React + TypeScript (reusable components, catalog and checkout views) for an educational e-commerce platform, focused on conversion and user experience.",
        "Owned the platform end-to-end with Laravel and React/TypeScript, integrating enrollments, online payments and automatic certificate issuance into a single flow; increased revenue 20–23% in the first 3 months.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed the Resolution Management System (Spring Boot back end, SPA front end), owning API definition through UI delivery and reducing document lookup times by over 40%.",
      ],
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Peru",
      cargo: "Web Developer", fechas: "July 2022 – November 2023",
      bullets: [
        "Designed, developed and maintained the corporate website (HTML/CSS/JavaScript), applying performance and SEO best practices to grow organic visibility.",
      ],
      contacto: "Ing. Gerardo Rodriguez · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Professional Degree (Titulado)", fechas: "June 2020 – June 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Graduate (Egresado)", fechas: "June 2020 – June 2025" },
    { institucion: "Language Center – UNASAM", ubicacion: "Huaraz, Peru", detalle: "Basic English Course (A1)", fechas: "June 2023 – June 2024" },
  ],

  skillsAdicionales: [
    "Daily use of AI coding assistants (Claude Code, Claude API) within a spec → generate → validate → refine loop, critically reviewing generated code for correctness and security.",
    "End-to-end feature ownership: from UI design and API definition through service integration, state management and delivery.",
    "DevOps automation (Docker, CI/CD) and collaborative practices (code review, Pull Requests, SOLID, Clean Architecture).",
    "Native Spanish; basic English (A1 certified), actively improving.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "Building with the Claude API — Anthropic | Aug. 2026",
      "Introduction to Model Context Protocol (MCP) — Anthropic | Aug. 2026",
      "Model Context Protocol: Advanced Topics — Anthropic | Aug. 2026",
      "Claude Code 101 / Claude Code in Action — Anthropic | Aug. 2026",
      "Claude with Amazon Bedrock · Claude on Google Cloud — Anthropic | Aug. 2026",
      "AI Fluency for Builders · AI Capabilities and Limitations — Anthropic | Aug. 2026",
    ]},
    { anio: "2024", items: [
      "Advanced Angular — Platzi | Aug. 2024",
      "Java Spring Boot Programming — Platzi | Aug. 2024",
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Aug. 2024",
      "English for IT — Cisco Networking Academy | Aug. 2024",
      "AWS Cloud Fundamentals — Amazon Web Services (Training & Certification) | Apr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "React + TypeScript — reusable components, dashboards, catalog/checkout flows; SSR/SEO (Next.js, SSG/SSR).",
      "Angular (v11–v22) and TypeScript — SPA development, advanced forms, RxJS, unit testing (Jasmine/Karma).",
      "UI: Tailwind, Bootstrap, Material; accessibility (WCAG) and performance optimization (Lighthouse).",
    ]},
    { cat: "Backend:", bullets: [
      "C# (.NET — Jobs/Queues, Redis), Java (Spring Boot — Spring Data, Spring Security), Node.js (Express), Python (Flask/Django).",
      "REST/GraphQL API design and service integration, microservices, JWT/OAuth2 authentication, async processing (RabbitMQ, Redis).",
    ]},
    { cat: "AI-Assisted Development:", bullets: [
      "AI coding assistants (Claude Code, Claude API) across a spec → generate → validate → refine loop; reviewing generated code for correctness, security and architectural fit.",
      "Model Context Protocol (MCP), agents/subagents; LLM integration deployed on Amazon Bedrock and Google Cloud.",
    ]},
    { cat: "Architecture & Best Practices:", bullets: [
      "Clean Architecture, DDD (applied concepts), SOLID principles, TDD/unit testing, performance and security review (CSP, HSTS).",
      "Configuration-driven and contract-first API work; end-to-end feature ownership across the stack.",
    ]},
    { cat: "CI/CD & Automation:", bullets: [
      "GitHub Actions, GitLab CI, Git Flow; test and automated deployment pipelines; multi-project solution structures.",
      "Docker (optimized images), Kubernetes (basic), Docker Compose for local environments.",
    ]},
    { cat: "Databases & Search:", bullets: [
      "Relational: SQL Server, Oracle, MySQL/MariaDB, PostgreSQL; schema design, indexing and query optimization.",
      "Elasticsearch (full-text); Redis (cache & sessions).",
    ]},
    { cat: "Cloud:", bullets: [
      "AWS: S3, EC2, RDS, IAM. Azure: App Service, Functions, AKS. Monitoring (Prometheus, Grafana).",
    ]},
    { cat: "Version Control & Collaboration:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review, branch management and async collaborative workflows.",
    ]},
  ],

  idiomas: [
    "Spanish — Native",
    "English — Basic (A1 certified), actively improving",
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
