// Datos LIGEROS para la página de listado (/projects).
// El contenido detallado de cada proyecto (para /projects/:slug) vivirá
// aparte, en Markdown, cuando construyamos las subpáginas de detalle.
//
// cover.type acepta 'image' | 'gif' | 'video':
//  - 'image' / 'gif' → se renderiza con <img>
//  - 'video'          → se renderiza con <video autoPlay loop muted>

export const projects = [
  {
    slug: 'restaurant-management-system',
    title: 'Restaurant Management System',
    summary:
      'Sistema full-stack para gestionar pedidos, mesas y menús de un restaurante, con backend en Spring Boot y despliegue con Docker.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'React'],
    cover: {
      type: 'image', // cambia a 'gif' o 'video' cuando tengas la demo grabada
      src: 'src/assets/projects/Restaurant/Restaurant.png',
    },
    links: {
      github: 'https://github.com/ChengJianZhou/Restaurant-Backend',
      demo: '',
    },
  },

  // Copia este objeto para añadir un proyecto nuevo al listado.
  // {
  //   slug: 'otro-proyecto',
  //   title: 'Nombre del proyecto',
  //   summary: 'Resumen corto de una o dos frases.',
  //   stack: ['Tech1', 'Tech2'],
  //   cover: { type: 'gif', src: '/projects/otro-proyecto.gif' },
  //   links: { github: '', demo: '' },
  // },
]