// ============================================================================
//  contenido_en.js  —  CV CONTENT in English (working version).
//  >>> ADAPTED FOR: LunaJoy Health — Full Stack Developer (remote, health tech)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Full Stack Developer | React · TypeScript | AWS | Microservices · REST | CI/CD | AI/LLM Integration (Claude) | 3+ years exp.",
  contacto: {
    ubicacion: "Peru (remote)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack Developer with 3+ years building and scaling secure, user-centered web platforms with React/TypeScript on the front end and microservices/REST APIs on the back end. I deploy on AWS (EC2, RDS) with CI/CD, model SQL and NoSQL data, and integrate AI/LLM capabilities through APIs (Claude) — prompting, reviewing and validating generated output. I hold multiple Anthropic AI certifications and enjoy purpose-driven, collaborative product work.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer", fechas: "November 2025 – June 2026",
      bullets: [
        "Built full-stack features end-to-end for the Caja 360 platform (React/Angular front end, back-end REST services), defining the solution architecture in a secure, regulated financial environment.",
        "Modeled SQL and NoSQL data layers, ensuring transactional integrity, security and performance for critical processes.",
        "Deployed on cloud infrastructure with Docker and CI/CD, reducing release times and configuration errors.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2025",
      bullets: [
        "Led a user-centered educational platform with React/TypeScript and Node/Laravel, integrating online payments and automated certificate issuance into a single end-to-end flow.",
        "Designed and consumed REST APIs and automated bulk processes, increasing revenue 20–23% in the first 3 months.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed the Resolution Management System (back end + Angular), reducing document lookup times by over 40%.",
      ],
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Peru",
      cargo: "Web Developer", fechas: "July 2022 – November 2023",
      bullets: [
        "Developed and maintained the corporate website with HTML, CSS and JavaScript, applying performance and SEO best practices.",
      ],
      contacto: "Ing. Gerardo Rodriguez · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Professional Degree (Titulado)", fechas: "June 2020 – June 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Bachelor's Degree", fechas: "June 2020 – Oct. 2025" },
    { institucion: "Language Center – UNASAM", ubicacion: "Huaraz, Peru", detalle: "Basic English Course (A1)", fechas: "June 2023 – June 2024" },
  ],

  skillsAdicionales: [
    "React/TypeScript front ends with microservices/REST back ends deployed on AWS with CI/CD.",
    "AI/LLM integration via APIs (Claude); prompting, reviewing and validating generated output.",
    "Clean Architecture, SOLID, automated testing; secure handling of sensitive data.",
    "Native Spanish; basic English (A1 certified), actively improving.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "Building with the Claude API — Anthropic | Aug. 2026",
      "Claude with Amazon Bedrock · Claude on Google Cloud — Anthropic | Aug. 2026",
      "AI Capabilities and Limitations · Model Context Protocol (MCP) — Anthropic | Aug. 2026",
    ]},
    { anio: "2024", items: [
      "AWS Cloud Fundamentals — Amazon Web Services | Apr. 2024",
      "Advanced Angular — Platzi | Aug. 2024",
      "Machine Learning — UNASAM (International Congress) | May 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "React + TypeScript — reusable components, dashboards, responsive UI; Angular (v11–v22).",
      "UI: Tailwind, Bootstrap, Material; accessibility and performance optimization.",
    ]},
    { cat: "Backend & Microservices:", bullets: [
      "Node.js (Express), C# (.NET), Java (Spring Boot); REST API design, microservices, JWT/OAuth2, async processing.",
    ]},
    { cat: "AI / LLM Integration:", bullets: [
      "LLM integration via the Claude API; MCP, agents/subagents; deployment on Amazon Bedrock and Google Cloud.",
      "Basic ML / prototyping (scikit-learn); reviewing AI-generated code for correctness and security.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "AWS: EC2, RDS, S3, IAM; Docker; CI/CD (GitHub Actions/GitLab CI); monitoring (Prometheus, Grafana).",
    ]},
    { cat: "Databases:", bullets: [
      "SQL: PostgreSQL, SQL Server, MySQL, Oracle. NoSQL: MongoDB, Redis. Schema design and query optimization.",
    ]},
    { cat: "Architecture & Collaboration:", bullets: [
      "Clean Architecture, SOLID, TDD; Git, Pull Requests, code review, agile teamwork.",
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
