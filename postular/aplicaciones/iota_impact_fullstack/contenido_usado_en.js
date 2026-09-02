// ============================================================================
//  contenido_en.js  —  CV CONTENT in English (working version).
//  >>> ADAPTED FOR: IOTA Impact — Full Stack Developer (remote, Colombia)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Full Stack Developer | Angular · React · Next.js | Node.js · Java · Python | GraphQL/REST · Microservices | Docker | 3+ years exp.",
  contacto: {
    ubicacion: "Peru (remote)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack Developer with 3+ years designing, building and maintaining high-performing web applications. Strong across front-end (Angular, React, Next.js, TypeScript) and back-end (Node.js, Java/Spring, Python/Flask), designing RESTful and GraphQL APIs, applying design patterns and microservices, and using Docker and Git across the delivery process. Focused on scalability, performance and a clean user experience.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer", fechas: "November 2025 – June 2026",
      bullets: [
        "Designed and delivered full-stack features for the Caja 360 platform: Angular front end (reusable components, reactive forms) and back-end services, defining the solution architecture and technical standards.",
        "Modeled the data layer (relational and NoSQL) and ensured transactional integrity and performance for critical processes in a regulated financial institution.",
        "Set up environments and automated deployment with Docker and CI/CD, reducing release times and configuration errors.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2025",
      bullets: [
        "Led an educational e-commerce platform with React/TypeScript and Node/Laravel, integrating online payments and automatic certificate issuance into a single end-to-end flow.",
        "Designed and consumed REST APIs between front and back end, increasing revenue 20–23% in the first 3 months.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed the Resolution Management System with Java/Spring Boot and Angular, reducing document lookup times by over 40%.",
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
    "Front-end across Angular, React and Next.js; back-end with Node.js, Java/Spring and Python/Flask.",
    "REST and GraphQL API design, microservices and design patterns; Docker and Git.",
    "Clean Architecture, SOLID and agile methodologies (Scrum/Kanban).",
    "Native Spanish; basic English (A1 certified), actively improving.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "Bachelor's Degree in Systems and Computer Engineering — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Advanced Angular — Platzi | Aug. 2024",
      "Java Spring Boot Programming — Platzi | Aug. 2024",
      "Python Advanced / Essentials — Cisco Networking Academy | Aug. 2024",
      "AWS Cloud Fundamentals — Amazon Web Services | Apr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "Angular (v11–v22), React + TypeScript, Next.js (SSR/SSG) — reusable components, dashboards, responsive UI.",
      "UI: Tailwind, Bootstrap, Material; accessibility (WCAG) and performance (Lighthouse).",
    ]},
    { cat: "Backend & APIs:", bullets: [
      "Node.js (Express), Java (Spring Boot), Python (Flask/Django), C# (.NET).",
      "REST and GraphQL API design, microservices, JWT/OAuth2 authentication.",
    ]},
    { cat: "Architecture & Best Practices:", bullets: [
      "Design patterns, Clean Architecture, SOLID, microservices, TDD/unit testing.",
    ]},
    { cat: "Databases:", bullets: [
      "MySQL, PostgreSQL, SQL Server, Oracle; MongoDB (NoSQL); Redis (cache).",
    ]},
    { cat: "DevOps & Collaboration:", bullets: [
      "Docker, CI/CD (GitHub Actions/GitLab CI); Git, Pull Requests, code review, agile (Scrum/Kanban).",
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
