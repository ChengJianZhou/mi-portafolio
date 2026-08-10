export const es = {
  nav: {
    home:     'Inicio',
    projects: 'Proyectos',
    about:    'Sobre mí',
    contact:  'Contacto',
  },
  hero: {
    badge:         'Disponible para trabajar',
    title:         'Hola, soy Marcos Zhou',
    role:          'Full Stack Developer',
    desc:          'Construyo apps web con React y Python. Apasionado por Linux, Docker e infraestructura. Basado en Madrid 🇪🇸',
    cta_primary:   'Ver proyectos',
    cta_secondary: 'Contáctame',
  },
  about: {
    title: 'Sobre mí',
    bio_1: 'Soy estudiante de Ingeniería Informática en la Escuela Técnica Superior de Ingenieros Informáticos (ETSIINF), Universidad Politécnica de Madrid (UPM), y desarrollador full-stack/DevOps junior con experiencia práctica en Java, Spring Boot, React y Docker. Diseño APIs RESTful orientadas a microservicios, gestiono despliegues con contenedores y reverse proxy con Nginx, y administro infraestructura en entornos Linux.',
    bio_2: 'Actualmente exploro también el despliegue de sistemas de IA generativa: he construido un pipeline RAG completo (chunking, embeddings, base de datos vectorial y LLMs locales con Ollama). Busco oportunidades de prácticas o un puesto junior donde pueda seguir creciendo como desarrollador.',
    read_more: 'Más sobre mí',
    timeline_title: 'Experiencia y formación',
    timeline: [
      {
        year: '2023 – previsión 2027',
        title: 'Ingeniería Informática — ETSIINF, UPM',
        desc: 'Grado en la Escuela Técnica Superior de Ingenieros Informáticos (ETSIINF), Universidad Politécnica de Madrid. Último año de carrera (4º curso).',
      },
      {
        year: '2023 – Actualidad',
        title: 'Delegación de Alumnos TIC — ETSIINF (UPM)',
        desc: 'Miembro de la Delegación de Alumnos desde 2023 y en 2025 fui nombrado Subdelegado TIC. Administro un servidor VPS institucional (ciclo de vida de contenedores Docker, escalado de recursos en picos de tráfico), además despliego mantengo la web de la delegación (WordPress) y el gestor de contraseñas Vaultwarden vía Docker con Nginx, gestiono acceso SSH, control de versiones con Git junto copias de seguridad periódicas.',
      },
      {
        year: 'Ediciones 2025 – 2026',
        title: 'Coordinador del equipo web — Congreso Tryit (UPM)',
        desc: 'Lideré un equipo de hasta 10 estudiantes aplicando Scrum durante dos ediciones consecutivas. Desarrollé el frontend (Vue, React, TypeScript) y el backend (Python, Django) de la web oficial del congreso, implementé la gestión de datos sensibles de asistentes y la asignación automática de créditos ECTS, un sistema de validación de acceso por QR, y coordiné con Inetum el desarrollo de un dashboard a medida para su gincana corporativa.',
      },
    ],
    skills_title: 'Habilidades',
    skills: {
      frontend: { label: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'JavaScript'] },
      backend:  { label: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST'] },
      ai:       { label: 'IA / Machine Learning', items: ['RAG', 'LangChain', 'FastEmbed', 'Qdrant', 'Ollama', 'FastAPI'] },
      devops:   { label: 'DevOps e Infraestructura', items: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'Git', 'SSH', 'Cloudflare'] },
    },
    personal_title: 'Otros intereses',
    personal: 'Fuera del código, me interesa la programación de microcontroladores (Arduino, ESP32) y experimentar con sistemas operativos móviles alternativos — porté de forma estable postmarketOS (Linux) a una tablet Android. También administro varios servicios en un servidor casero con Docker.',

    languages_title: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Chino mandarín', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
    ],

    availability_title: 'Disponibilidad',
    availability: 'Disponible para prácticas o un puesto junior, en modalidad presencial, híbrida o remota. Compatible con mis estudios actuales en la UPM (previsión de finalización: junio 2027).',
    cv_download: 'Descargar CV',
  }
}