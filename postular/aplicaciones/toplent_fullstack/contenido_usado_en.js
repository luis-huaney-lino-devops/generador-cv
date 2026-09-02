// ============================================================================
//  contenido_en.js  —  CV CONTENT in English (working version).
//  >>> ADAPTED FOR: Toplent — Full-Stack Developer (remote LATAM)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Full Stack Developer | React · Angular | Node.js · Java (Spring) · PHP (Laravel) | SQL/NoSQL | AWS · Docker | 3+ years exp.",
  contacto: {
    ubicacion: "Peru (remote)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack Developer with 3+ years building and maintaining scalable web applications end-to-end. Comfortable across front-end (React, Angular, TypeScript) and back-end (Node.js, Java/Spring Boot, PHP/Laravel, C#/.NET), designing and integrating RESTful APIs over SQL and NoSQL databases. I follow clean, reusable coding standards, work with cloud (AWS/Azure) and Docker, and collaborate through code reviews and CI/CD.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer", fechas: "November 2025 – June 2026",
      bullets: [
        "Built full-stack features for the Income, HR and Personnel Selection System on the Caja 360 platform: Angular front end (reusable components, reactive forms, REST consumption) and back-end services.",
        "Modeled and optimized the relational data layer (SQL Server/Oracle), ensuring transactional integrity and performance in a regulated financial institution.",
        "Automated application deployment (Docker, CI/CD), reducing release times and manual configuration errors.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Laravel / React)", fechas: "April 2024 – November 2025",
      bullets: [
        "Led an educational e-commerce platform with Laravel (PHP) and React/TypeScript over MySQL, integrating enrollments, online payments and automatic certificate issuance into a single end-to-end flow.",
        "Designed and consumed REST/JSON web services between the Laravel back end and the front end; increased revenue 20–23% in the first 3 months.",
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
    "End-to-end full-stack delivery across React/Angular front ends and Node/Java/PHP back ends.",
    "RESTful API design and integration, third-party services and payment gateways.",
    "Cloud (AWS/Azure), Docker and CI/CD; code review, Pull Requests, SOLID and Clean Architecture.",
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
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Aug. 2024",
      "AWS Cloud Fundamentals — Amazon Web Services | Apr. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend:", bullets: [
      "React + TypeScript (components, dashboards, catalog/checkout); Angular (v11–v22, RxJS, reactive forms).",
      "UI: Tailwind, Bootstrap, Material; responsive design, accessibility (WCAG) and performance (Lighthouse).",
    ]},
    { cat: "Backend:", bullets: [
      "Node.js (Express), Java (Spring Boot — Spring Data, Spring Security), PHP (Laravel), C# (.NET), Python (Flask/Django).",
      "RESTful API design and integration, microservices, JWT/OAuth2 authentication, async processing (RabbitMQ, Redis).",
    ]},
    { cat: "Databases (SQL & NoSQL):", bullets: [
      "MySQL/MariaDB, PostgreSQL, SQL Server, Oracle; schema design, indexing and query optimization.",
      "MongoDB (NoSQL); Redis (cache & sessions); Elasticsearch (full-text).",
    ]},
    { cat: "Cloud, Containers & DevOps:", bullets: [
      "AWS (S3, EC2, RDS, IAM) and Azure (App Service, Functions, AKS); Docker, Kubernetes (basic), Docker Compose.",
      "CI/CD with GitHub Actions / GitLab CI; automated test and deployment pipelines.",
    ]},
    { cat: "Architecture & Collaboration:", bullets: [
      "Clean Architecture, SOLID, TDD/unit testing, security review; Git, Pull Requests, code review, agile workflows.",
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
