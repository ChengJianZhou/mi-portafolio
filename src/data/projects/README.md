# data/projects/

Cada proyecto del portfolio vive en su propio archivo dentro de esta carpeta, aislado de `context/lang/*.js`. Las traducciones de interfaz general (nav, hero, about) siguen viviendo en `context/LangContext.jsx`; las traducciones de contenido de cada proyecto viven exclusivamente aquí, dentro de `content: { en, es, zh }`.

## Cómo añadir un proyecto nuevo

1. Crea `src/data/projects/<tu-slug>.js` copiando esta plantilla:

```js
import cover from '../../assets/projects/<carpeta>/<archivo>'

export const tuProyecto = {
  slug: 'tu-slug',
  stack: ['Tech1', 'Tech2'],
  cover: {
    type: 'image', // 'image' | 'gif' | 'video'
    src: cover,
  },
  links: {
    github: '',
    demo: '',
  },

  content: {
    en: {
      title: '',
      summary: '',   // 1-2 frases, se usa en la tarjeta del listado
      description: '', // texto largo, se usa en la subpágina de detalle
    },
    es: {
      title: '',
      summary: '',
      description: '',
    },
    zh: {
      title: '',
      summary: '',
      description: '',
    },
  },
}
```

2. Importa el objeto en `index.js` y añádelo al array `projects`:

```js
import { tuProyecto } from './tu-slug'

export const projects = [
  restaurantManagementSystem,
  tuProyecto,
]
```

3. No toques `context/LangContext.jsx` ni `context/lang/en.js`, `es.js`, `zh.js` — esas traducciones son solo para textos fijos de interfaz, no para contenido de proyectos.

## Por qué esta estructura

- **Aislamiento**: cada proyecto es autocontenido — borrar o mover un proyecto es borrar o mover un solo archivo.
- **`index.js` como único punto de entrada**: el resto de la app (`ProjectsGrid`, `ProjectCard`, futuro `ProjectDetail`) sigue importando `{ projects }` desde `data/projects` sin saber que por dentro hay varios archivos.
- **`content` por idioma dentro de cada proyecto**: evita que `context/lang/*.js` crezca sin límite a medida que se añaden proyectos, y mantiene el contenido de cada proyecto junto a sus propios metadatos (stack, links, cover).
