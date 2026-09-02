// ============================================================================
//  contenido_en.js  —  CV CONTENT in English (working version).
//  >>> ADAPTED FOR: Deel — Fullstack Engineer, NodeJS & ReactJS (remote LATAM)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Fullstack Engineer | TypeScript | React | Node.js · Express | PostgreSQL | REST · Microservices | Docker | 3+ years exp.",
  contacto: {
    ubicacion: "Peru (remote)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Fullstack Engineer with 3+ years developing high-quality, responsive web applications with a focus on TypeScript. I build React front ends (function components, hooks, tests) and design server-side REST APIs, data models and business logic with Node.js/Express over PostgreSQL. I own features end-to-end across client, server and database, write reusable modular code, and thrive in a collaborative, remote-first environment with code reviews and CI/CD.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Fullstack Engineer", fechas: "November 2025 – June 2026",
      bullets: [
        "Owned full-stack features end-to-end (client, server and database) for the Caja 360 platform: React/Angular front end and REST back-end services, defining the solution architecture and coding standards.",
        "Designed and optimized the relational data layer (PostgreSQL/SQL Server/Oracle), ensuring transactional integrity and performance for critical processes.",
        "Automated deployment with Docker and CI/CD, reducing release times and configuration errors.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Fullstack Developer (React / Node)", fechas: "April 2024 – November 2025",
      bullets: [
        "Built responsive React + TypeScript interfaces (reusable function components, hooks, catalog/checkout) and Node/Laravel server-side APIs for an educational e-commerce platform.",
        "Designed REST APIs and data models over MySQL, integrating online payments; increased revenue 20–23% in the first 3 months.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Fullstack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed the Resolution Management System (back-end services + Angular), reducing document lookup times by over 40%.",
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
    "TypeScript-focused full-stack: React (hooks, components, tests) + Node.js/Express REST APIs over PostgreSQL.",
    "End-to-end feature ownership across client, server, service and database.",
    "Remote-first collaboration: code reviews, Pull Requests, Git, CI/CD; Docker and containerization.",
    "Native Spanish; basic English (A1 certified), actively improving.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "Bachelor's Degree in Systems and Computer Engineering — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Advanced Angular — Platzi | Aug. 2024",
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Aug. 2024",
      "AWS Cloud Fundamentals — Amazon Web Services | Apr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "React + TypeScript — function components, hooks, reusable modules, unit tests; Angular (v11–v22).",
      "UI: Tailwind, Bootstrap, Material; responsive design and performance optimization.",
    ]},
    { cat: "Backend (Node.js / Express):", bullets: [
      "Node.js with Express — server-side REST APIs, data models and business logic; also Java (Spring Boot), C# (.NET).",
      "RESTful APIs, microservices architecture, JWT/OAuth2 authentication, asynchronous programming.",
    ]},
    { cat: "Databases:", bullets: [
      "PostgreSQL (schemas, queries, optimization); SQL Server, MySQL, Oracle; MongoDB and Redis (NoSQL/cache).",
    ]},
    { cat: "Testing & Quality:", bullets: [
      "Unit and integration testing (Jasmine/Karma, JUnit, PHPUnit); code reviews and clean, maintainable code.",
    ]},
    { cat: "DevOps & Collaboration:", bullets: [
      "Docker, Kubernetes (basic), CI/CD (GitHub Actions/GitLab CI); Git, Pull Requests, remote-first agile teamwork.",
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
