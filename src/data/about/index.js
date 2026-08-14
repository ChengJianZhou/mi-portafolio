export const about = {
  en: {
    title: "About me",
    bio_1:
      "I'm a Computer Engineering student at the Higher Technical School of Computer Engineers (ETSIINF), Universidad Politécnica de Madrid (UPM), and a junior full-stack/DevOps developer with hands-on experience in Java, Spring Boot, React and Docker. I design microservice-oriented RESTful APIs, manage container deployments with Nginx as a reverse proxy, and administer infrastructure on Linux environments.",
    bio_2:
      "I care about the full lifecycle of a system: modeling the domain correctly, thinking through edge cases before writing code, and making sure whatever I build can actually be deployed and maintained, not just demoed once.",
    read_more: "More about me",

    motivations_title: "What I'm exploring right now",
    motivations:
      "I'm currently exploring generative AI deployment: I've built a full RAG pipeline (chunking, embeddings, vector database and local LLMs served with Ollama). I'm looking for internship or junior opportunities where I can keep growing as a developer.",

    timeline_title: "Experience & Education",
    timeline: [
      {
        year: "2023 – expected 2027",
        title: "Computer Engineering — ETSIINF, UPM",
        desc:
          "Bachelor's degree at the Higher Technical School of Computer Engineers (ETSIINF), Universidad Politécnica de Madrid. Final year of the degree (4th year).",
      },
      {
        year: "2023 – Present",
        title: "IT Student Delegation — ETSIINF (UPM)",
        desc:
          "Member of the Student Delegation since 2023, and appointed IT Delegate in 2025. I administer an institutional VPS (Docker container lifecycle, resource scaling during traffic spikes), and I also deploy and maintain the delegation's WordPress site and the Vaultwarden password manager via Docker with Nginx, manage SSH access, Git version control and periodic backups.",
      },
      {
        year: "2025 – 2026 editions",
        title: "Web Team Coordinator — Tryit Congress (UPM)",
        desc:
          "Led a team of up to 10 students applying Scrum across two consecutive editions. Built the frontend (Vue, React, TypeScript) and backend (Python, Django) of the official congress website, implemented sensitive attendee data management and automatic ECTS credit allocation, a QR-based access validation system, and coordinated with Inetum on a custom dashboard for their corporate team-building event.",
      },
    ],

    skills_title: "Skills",
    skills: {
      frontend: { label: "Frontend", items: ["React", "Vue", "TypeScript", "JavaScript"] },
      backend: { label: "Backend", items: ["Java", "Spring Boot", "Python", "Django", "Node.js", "REST"] },
      ai: { label: "AI / Machine Learning", items: ["RAG", "LangChain", "FastEmbed", "Qdrant", "Ollama", "FastAPI"] },
      devops: { label: "DevOps & Infrastructure", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "SSH", "Cloudflare"] },
    },

    personal_title: "Other interests",
    personal:
      "Outside of code, I'm into microcontroller programming (Arduino, ESP32) and experimenting with alternative mobile operating systems — I ported postmarketOS (Linux) to an Android tablet with a stable result. I also self-host several services on a home server with Docker.",

    languages_title: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "Mandarin Chinese", level: "Native" },
      { name: "English", level: "B2" },
    ],

    availability_title: "Availability",
    availability:
      "Available for internships or a junior position, on-site, hybrid or remote. Compatible with my current studies at UPM (expected graduation: June 2027).",
    cv_note: "Here's my CV if you'd like the full picture:",
    cv_download: "Download CV",
  },

  es: {
    title: "Sobre mí",
    bio_1:
      "Soy estudiante de Ingeniería Informática en la Escuela Técnica Superior de Ingenieros Informáticos (ETSIINF), Universidad Politécnica de Madrid (UPM), y desarrollador full-stack/DevOps junior con experiencia práctica en Java, Spring Boot, React y Docker. Diseño APIs RESTful orientadas a microservicios, gestiono despliegues con contenedores y reverse proxy con Nginx, y administro infraestructura en entornos Linux.",
    bio_2:
      "Me importa el ciclo de vida completo de un sistema: modelar bien el dominio, pensar los casos límite antes de escribir código, y asegurarme de que lo que construyo se pueda desplegar y mantener de verdad, no solo hacer una demo puntual.",
    read_more: "Más sobre mí",

    motivations_title: "Lo que estoy explorando ahora",
    motivations:
      "Actualmente exploro también el despliegue de sistemas de IA generativa: he construido un pipeline RAG completo (chunking, embeddings, base de datos vectorial y LLMs locales con Ollama). Busco oportunidades de prácticas o un puesto junior donde pueda seguir creciendo como desarrollador.",

    timeline_title: "Experiencia y formación",
    timeline: [
      {
        year: "2023 – previsión 2027",
        title: "Ingeniería Informática — ETSIINF, UPM",
        desc:
          "Grado en la Escuela Técnica Superior de Ingenieros Informáticos (ETSIINF), Universidad Politécnica de Madrid. Último año de carrera (4º curso).",
      },
      {
        year: "2023 – Actualidad",
        title: "Delegación de Alumnos TIC — ETSIINF (UPM)",
        desc:
          "Miembro de la Delegación de Alumnos desde 2023 y en 2025 fui nombrado Subdelegado TIC. Administro un servidor VPS institucional (ciclo de vida de contenedores Docker, escalado de recursos en picos de tráfico), además despliego y mantengo la web de la delegación (WordPress) y el gestor de contraseñas Vaultwarden vía Docker con Nginx, gestiono acceso SSH, control de versiones con Git y copias de seguridad periódicas.",
      },
      {
        year: "Ediciones 2025 – 2026",
        title: "Coordinador del equipo web — Congreso Tryit (UPM)",
        desc:
          "Lideré un equipo de hasta 10 estudiantes aplicando Scrum durante dos ediciones consecutivas. Desarrollé el frontend (Vue, React, TypeScript) y el backend (Python, Django) de la web oficial del congreso, implementé la gestión de datos sensibles de asistentes y la asignación automática de créditos ECTS, un sistema de validación de acceso por QR, y coordiné con Inetum el desarrollo de un dashboard a medida para su gincana corporativa.",
      },
    ],

    skills_title: "Habilidades",
    skills: {
      frontend: { label: "Frontend", items: ["React", "Vue", "TypeScript", "JavaScript"] },
      backend: { label: "Backend", items: ["Java", "Spring Boot", "Python", "Django", "Node.js", "REST"] },
      ai: { label: "IA / Machine Learning", items: ["RAG", "LangChain", "FastEmbed", "Qdrant", "Ollama", "FastAPI"] },
      devops: { label: "DevOps e Infraestructura", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "SSH", "Cloudflare"] },
    },

    personal_title: "Otros intereses",
    personal:
      "Fuera del código, me interesa la programación de microcontroladores (Arduino, ESP32) y experimentar con sistemas operativos móviles alternativos — porté de forma estable postmarketOS (Linux) a una tablet Android. También administro varios servicios en un servidor casero con Docker.",

    languages_title: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Chino mandarín", level: "Nativo" },
      { name: "Inglés", level: "B2" },
    ],

    availability_title: "Disponibilidad",
    availability:
      "Disponible para prácticas o un puesto junior, en modalidad presencial, híbrida o remota. Compatible con mis estudios actuales en la UPM (previsión de finalización: junio 2027).",
    cv_note: "Aquí tienes mi CV si quieres verlo con más detalle:",
    cv_download: "Descargar CV",
  },

  zh: {
    title: "关于我",
    bio_1:
      "我是马德里理工大学（UPM）计算机工程高级技术学院（ETSIINF）的学生，同时也是一名初级全栈 / DevOps 开发者，在 Java、Spring Boot、React 和 Docker 方面有实践经验。我设计面向微服务架构的 RESTful API，使用 Nginx 作为反向代理管理容器化部署，并在 Linux 环境中进行基础设施管理。",
    bio_2:
      "我关注的是系统的完整生命周期：正确地建模领域逻辑，在写代码之前先考虑边界情况，并确保我构建的东西真正能够被部署和维护，而不只是做一次演示。",
    read_more: "了解更多",

    motivations_title: "我目前正在探索的方向",
    motivations:
      "目前我也在探索生成式 AI 的部署：我构建了一个完整的 RAG 流程（分块、嵌入、向量数据库，以及通过 Ollama 部署的本地大语言模型）。我正在寻找实习或初级职位机会，以便继续成长为一名开发者。",

    timeline_title: "经历与教育",
    timeline: [
      {
        year: "2023 – 预计 2027",
        title: "计算机工程 — ETSIINF, UPM",
        desc: "就读于马德里理工大学计算机工程高级技术学院（ETSIINF）本科，目前为最后一学年（大四）。",
      },
      {
        year: "2023 – 至今",
        title: "IT 学生代表团 — ETSIINF（UPM）",
        desc:
          "自 2023 年起担任学生代表团成员，并于 2025 年被任命为 IT 代表。负责管理学校的 VPS 服务器（Docker 容器生命周期管理、流量高峰期资源扩容），同时通过 Docker 和 Nginx 部署并维护代表团的 WordPress 网站及 Vaultwarden 密码管理工具，负责 SSH 远程访问、Git 版本控制及定期备份。",
      },
      {
        year: "2025 – 2026 届",
        title: "技术团队负责人 — Tryit 大会（UPM）",
        desc:
          "连续两届采用 Scrum 方法带领最多 10 人的团队。使用 Vue、React、TypeScript 开发大会官网前端，使用 Python、Django 开发后端，实现了参会者敏感信息管理与 ECTS 学分自动分配系统、基于二维码的入场验证系统，并与 Inetum 公司合作为其企业团建活动开发定制看板。",
      },
    ],

    skills_title: "技能",
    skills: {
      frontend: { label: "前端", items: ["React", "Vue", "TypeScript", "JavaScript"] },
      backend: { label: "后端", items: ["Java", "Spring Boot", "Python", "Django", "Node.js", "REST"] },
      ai: { label: "AI / 机器学习", items: ["RAG", "LangChain", "FastEmbed", "Qdrant", "Ollama", "FastAPI"] },
      devops: { label: "DevOps 与基础设施", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "SSH", "Cloudflare"] },
    },

    personal_title: "其他兴趣",
    personal:
      "不写代码的时候，我喜欢研究微控制器编程（Arduino、ESP32），并尝试移植另类的移动操作系统——我成功将 postmarketOS（Linux）稳定移植到了一台 Android 平板电脑上。我还在家庭服务器上使用 Docker 自托管多个服务。",

    languages_title: "语言",
    languages: [
      { name: "西班牙语", level: "母语" },
      { name: "中文（普通话）", level: "母语" },
      { name: "英语", level: "B2" },
    ],

    availability_title: "可参与情况",
    availability:
      "可接受实习或初级职位，工作方式可现场、混合或远程。与我目前在 UPM 的学业兼容（预计毕业时间：2027 年 6 月）。",
    cv_note: "如需更完整的信息，可以查看我的简历：",
    cv_download: "下载简历",
  },
};