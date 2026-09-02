// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español (versión de trabajo).
//  >>> ADAPTADO PARA: Stefanini — Frontend Developer (Angular) (San Borja, Lima)
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  titular: "Frontend Developer Angular | TypeScript · RxJS | Componentes reutilizables · Librerías | APIs REST | +3 años exp.",
  contacto: {
    ubicacion: "Perú (Lima)",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Frontend con más de 3 años construyendo aplicaciones con Angular (v11 a v22) y TypeScript para los sectores financiero y público. Desarrollo componentes reutilizables, servicios y librerías compartidas, integro APIs REST y trabajo la evolución y actualización de versiones de Angular bajo metodologías ágiles. Complemento el frontend con base backend en .NET y Java, aportando una visión full stack.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Frontend Angular", fechas: "Noviembre 2025 – Junio 2026",
      bullets: [
        "Desarrollé la interfaz en Angular del Sistema de Ingresos, RR. HH. y Selección de Personal (plataforma Caja 360): componentes reutilizables, formularios reactivos y consumo de APIs REST, en una entidad financiera regulada.",
        "Definí estándares técnicos del frontend y colaboré con líderes técnicos y equipos multidisciplinarios para garantizar calidad y arquitectura.",
        "Integré el frontend con servicios backend en .NET, cubriendo el flujo de extremo a extremo.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Frontend Angular", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Desarrollé las vistas en Angular (formularios, tablas y filtros de búsqueda) del Sistema de Gestión de Resoluciones, reduciendo los tiempos de búsqueda documental en más del 40%.",
      ],
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (React / Laravel)", fechas: "Abril 2024 – Noviembre 2025",
      bullets: [
        "Construí interfaces con React + TypeScript (componentes reutilizables, vistas de catálogo/checkout) enfocadas en conversión y experiencia de usuario, consumiendo APIs REST.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Desarrollé y mantuve el sitio web corporativo con HTML5, CSS3 y JavaScript, aplicando buenas prácticas de rendimiento y SEO.",
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
    "Angular en múltiples versiones (v11–v22) y evolución/actualización del framework.",
    "Componentes reutilizables, servicios y librerías compartidas; integración con APIs REST.",
    "Diferencial: backend en .NET y Java; experiencia en sector financiero y público.",
    "Git, metodologías ágiles y pruebas unitarias; español nativo, inglés básico (A1).",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
    ]},
    { anio: "2024", items: [
      "Angular Avanzado — Platzi | Ago. 2024",
      "JavaScript Advanced / Essentials — Cisco Networking Academy | Ago. 2024",
      "Diseño Web (HTML y CSS) — Fundación Telefónica del Perú | Ago. 2024",
    ]},
  ],

  habilidades: [
    { cat: "Frontend (Angular):", bullets: [
      "Angular (v11–v22) y TypeScript — SPAs, componentes reutilizables, servicios, librerías, formularios reactivos y RxJS.",
      "Experiencia en migración y actualización de versiones de Angular; consumo e integración de APIs REST.",
    ]},
    { cat: "Web & UI:", bullets: [
      "HTML5, CSS3, JavaScript (ES6+); UI con Bootstrap, Tailwind y Material; accesibilidad y performance (Lighthouse).",
      "React + TypeScript como frontend complementario.",
    ]},
    { cat: "Calidad & Testing:", bullets: [
      "Pruebas unitarias en Angular (Jasmine/Karma); code review y buenas prácticas de arquitectura frontend.",
    ]},
    { cat: "Backend (diferencial):", bullets: [
      "C# (.NET / ASP.NET Core) y Java (Spring Boot) para servicios y APIs REST.",
    ]},
    { cat: "Versionado & Ágil:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review; metodologías ágiles (Scrum/Kanban); Docker y CI/CD.",
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
