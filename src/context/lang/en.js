export const en = {
  nav: {
    home:     'Home',
    projects: 'Projects',
    about:    'About',
    contact:  'Contact',
  },
  hero: {
    badge:         'Available for work',
    title:         'Hi, I\'m Marcos Zhou',
    role:          'Full Stack Developer',
    desc:          'Building web apps with React and Python. Passionate about Linux, Docker and infrastructure. Based in Madrid 🇪🇸',
    cta_primary:   'View projects',
    cta_secondary: 'Contact me',
  },
  about: {
    title: 'About me',
    bio_1: 'I\'m a Computer Engineering student at the Higher Technical School of Computer Engineers (ETSIINF), Universidad Politécnica de Madrid (UPM), and a junior full-stack/DevOps developer with hands-on experience in Java, Spring Boot, React and Docker. I design microservice-oriented RESTful APIs, manage container deployments with Nginx as a reverse proxy, and administer infrastructure on Linux environments.',
    bio_2: 'I\'m also currently exploring generative AI deployment: I\'ve built a full RAG pipeline (chunking, embeddings, vector database and local LLMs served with Ollama). I\'m looking for internship or junior opportunities where I can keep growing as a developer.',
    read_more: 'More about me',
    timeline_title: 'Experience & Education',
    timeline: [
      {
        year: '2023 – expected 2027',
        title: 'Computer Engineering — ETSIINF, UPM',
        desc: 'Bachelor\'s degree at the Higher Technical School of Computer Engineers (ETSIINF), Universidad Politécnica de Madrid. Final year of the degree (4th year).',
      },
      {
        year: '2023 – Present',
        title: 'IT Student Delegation — ETSIINF (UPM)',
        desc: 'Member of the Student Delegation since 2023, and appointed IT Delegate in 2025. I administer an institutional VPS (Docker container lifecycle, resource scaling during traffic spikes), and I also deploy and maintain the delegation\'s WordPress site and the Vaultwarden password manager via Docker with Nginx, manage SSH access, Git version control and periodic backups.',
      },
      {
        year: '2025 – 2026 editions',
        title: 'Web Team Coordinator — Tryit Congress (UPM)',
        desc: 'Led a team of up to 10 students applying Scrum across two consecutive editions. Built the frontend (Vue, React, TypeScript) and backend (Python, Django) of the official congress website, implemented sensitive attendee data management and automatic ECTS credit allocation, a QR-based access validation system, and coordinated with Inetum on a custom dashboard for their corporate team-building event.',
      },
    ],
    skills_title: 'Skills',
    skills: {
      frontend: { label: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'JavaScript'] },
      backend:  { label: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST'] },
      ai:       { label: 'AI / Machine Learning', items: ['RAG', 'LangChain', 'FastEmbed', 'Qdrant', 'Ollama', 'FastAPI'] },
      devops:   { label: 'DevOps & Infrastructure', items: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'Git', 'SSH', 'Cloudflare'] },
    },
    personal_title: 'Other interests',
    personal: 'Outside of code, I\'m into microcontroller programming (Arduino, ESP32) and experimenting with alternative mobile operating systems — I ported postmarketOS (Linux) to an Android tablet with a stable result. I also self-host several services on a home server with Docker.',

    languages_title: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Mandarin Chinese', level: 'Native' },
      { name: 'English', level: 'B2' },
    ],

    availability_title: 'Availability',
    availability: 'Available for internships or a junior position, on-site, hybrid or remote. Compatible with my current studies at UPM (expected graduation: June 2027).',
    cv_download: 'Download CV',
  }
}