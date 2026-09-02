// ============================================================================
//  contenido_en.js  —  CV CONTENT in English (working version).
//  >>> ADAPTED FOR: EPAM — Senior AI Integration .NET Full-Stack Dev w/ Angular
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "AI Integration .NET Full-Stack Developer | C# · .NET | Angular | AI/Agentic Integration (Claude, MCP) | SQL Server · REST/gRPC | 3+ years exp.",
  contacto: {
    ubicacion: "Peru (remote)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full-Stack Developer with 3+ years architecting and building .NET (C#) backend services and Angular front ends for the financial sector, with hands-on AI integration. I expose AI/model capabilities via REST APIs, design Angular UIs that surface AI-driven features, and model and optimize SQL Server data. I work daily with generative AI and agentic tooling (Claude API, MCP, agents/subagents) to accelerate development and validate outputs, and I hold multiple Anthropic AI certifications.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full-Stack Developer (.NET / Angular)", fechas: "November 2025 – June 2026",
      bullets: [
        "Architected and built backend services in .NET (C#) exposing REST APIs, and Angular UI components, defining the solution architecture and technical standards in a regulated financial institution.",
        "Designed and optimized SQL Server data (queries, stored procedures, performance) and the persistence layer for critical business processes.",
        "Owned deployment quality through Docker and CI/CD pipelines, applying Clean Architecture, SOLID and code reviews while mentoring on technical standards.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full-Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed the Resolution Management System (back-end services + Angular UI), reducing document lookup times by over 40%.",
      ],
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2025",
      bullets: [
        "Built React/Angular front ends and back-end REST APIs for an educational e-commerce platform, integrating payments and automated certificate issuance; increased revenue 20–23% in the first 3 months.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
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
    ".NET (C#) backend services + Angular front ends, integrating AI/model capabilities via REST APIs.",
    "Generative AI / agentic development: Claude API, MCP, agents/subagents; reviewing and validating AI-generated output.",
    "Microsoft SQL Server (stored procedures, query optimization); Docker and CI/CD.",
    "Native Spanish; basic English (A1 certified), actively improving.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "Building with the Claude API — Anthropic | Aug. 2026",
      "Model Context Protocol (MCP) + Advanced Topics — Anthropic | Aug. 2026",
      "Introduction to subagents · agent skills — Anthropic | Aug. 2026",
      "AI Capabilities and Limitations — Anthropic | Aug. 2026",
    ]},
    { anio: "2024", items: [
      "Advanced Angular — Platzi | Aug. 2024",
      "AWS Cloud Fundamentals — Amazon Web Services | Apr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Backend (.NET):", bullets: [
      "C# and .NET / ASP.NET Core — REST APIs, services and architecture; also Java (Spring Boot), Node.js.",
      "Secure, scalable integration patterns between services; JWT/OAuth2 authentication.",
    ]},
    { cat: "Frontend (Angular):", bullets: [
      "Angular (v11–v22) and TypeScript — components, dashboards and UIs surfacing AI-driven features (chat/recommendation panels).",
    ]},
    { cat: "AI / Agentic Integration:", bullets: [
      "Generative AI integration via the Claude API; MCP, agents and subagents; deployment on Amazon Bedrock and Google Cloud.",
      "Reviewing AI-generated code for correctness and security; Gen-AI-assisted development (Claude Code).",
    ]},
    { cat: "Data & Quality:", bullets: [
      "Microsoft SQL Server — stored procedures, query optimization, data modeling; unit/integration testing (Jasmine/Karma, JUnit).",
    ]},
    { cat: "DevOps & Architecture:", bullets: [
      "Docker, CI/CD (GitHub Actions/GitLab CI); Clean Architecture, SOLID; Git, Pull Requests, code review, mentoring.",
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
