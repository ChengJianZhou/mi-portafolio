export const zh = {
  nav: {
    home:     '首页',
    projects: '项目',
    about:    '关于我',
    contact:  '联系',
  },
  hero: {
    badge:         '正在找工作',
    title:         '你好，我是 Marcos Zhou',
    role:          'Full Stack 开发者',
    desc:          '使用 React 和 Python 构建 Web 应用。热爱 Linux、Docker 和基础设施。定居马德里 🇪🇸',
    cta_primary:   '查看项目',
    cta_secondary: '联系我',
  },
  about: {
    title: '关于我',
    bio_1: '我是马德里理工大学（UPM）计算机工程高级技术学院（ETSIINF）的学生，同时也是一名初级全栈 / DevOps 开发者，在 Java、Spring Boot、React 和 Docker 方面有实践经验。我设计面向微服务架构的 RESTful API，使用 Nginx 作为反向代理管理容器化部署，并在 Linux 环境中进行基础设施管理。',
    bio_2: '目前我也在探索生成式 AI 的部署：我构建了一个完整的 RAG 流程（分块、嵌入、向量数据库，以及通过 Ollama 部署的本地大语言模型）。我正在寻找实习或初级职位机会，以便继续成长为一名开发者。',
    read_more: '了解更多',
    timeline_title: '经历与教育',
    timeline: [
      {
        year: '2023 – 预计 2027',
        title: '计算机工程 — ETSIINF, UPM',
        desc: '就读于马德里理工大学计算机工程高级技术学院（ETSIINF）本科，目前为最后一学年（大四）。',
      },
      {
        year: '2023 – 至今',
        title: 'IT 学生代表团 — ETSIINF（UPM）',
        desc: '自 2023 年起担任学生代表团成员，并于 2025 年被任命为 IT 代表。负责管理学校的 VPS 服务器（Docker 容器生命周期管理、流量高峰期资源扩容），同时通过 Docker 和 Nginx 部署并维护代表团的 WordPress 网站及 Vaultwarden 密码管理工具，负责 SSH 远程访问、Git 版本控制及定期备份。',
      },
      {
        year: '2025 – 2026 届',
        title: '技术团队负责人 — Tryit 大会（UPM）',
        desc: '连续两届采用 Scrum 方法带领最多 10 人的团队。使用 Vue、React、TypeScript 开发大会官网前端，使用 Python、Django 开发后端，实现了参会者敏感信息管理与 ECTS 学分自动分配系统、基于二维码的入场验证系统，并与 Inetum 公司合作为其企业团建活动开发定制看板。',
      },
    ],
    skills_title: '技能',
    skills: {
      frontend: { label: '前端', items: ['React', 'Vue', 'TypeScript', 'JavaScript'] },
      backend:  { label: '后端', items: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST'] },
      ai:       { label: 'AI / 机器学习', items: ['RAG', 'LangChain', 'FastEmbed', 'Qdrant', 'Ollama', 'FastAPI'] },
      devops:   { label: 'DevOps 与基础设施', items: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'Git', 'SSH', 'Cloudflare'] },
    },
    personal_title: '其他兴趣',
    personal: '不写代码的时候，我喜欢研究微控制器编程（Arduino、ESP32），并尝试移植另类的移动操作系统——我成功将 postmarketOS（Linux）稳定移植到了一台 Android 平板电脑上。我还在家庭服务器上使用 Docker 自托管多个服务。',

    languages_title: '语言',
    languages: [
      { name: '西班牙语', level: '母语' },
      { name: '中文（普通话）', level: '母语' },
      { name: '英语', level: 'B2' },
    ],

    availability_title: '可参与情况',
    availability: '可接受实习或初级职位，工作方式可现场、混合或远程。与我目前在 UPM 的学业兼容（预计毕业时间：2027 年 6 月）。',
    cv_download: '下载简历',
  }
}