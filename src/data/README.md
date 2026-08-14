# src/data — contenido por página

Cada página del portfolio con contenido propio tiene su carpeta aquí dentro,
con un `index.js` que exporta un objeto `{ en, es, zh }`. Esto es una
extensión del patrón que ya usabas en `data/contact` y `data/projects`.

```
data/
  home/
    index.js     → textos del Hero de la página de inicio
  about/
    index.js     → bio, timeline, skills, idiomas, disponibilidad, intereses
  contact/
    index.js     → textos de la página de contacto (hero, form, info)
  projects/
    index.js     → registro de proyectos
    <slug>.js    → contenido de cada proyecto individual
```

## Regla de separación con `context/lang/*.js`

- `context/lang/en.js`, `es.js`, `zh.js` → **solo** textos de interfaz que se
  repiten en toda la web sin importar la página: hoy es únicamente el
  navbar (`nav`). En el futuro, un footer o textos de botones globales
  también irían aquí.
- `data/<pagina>/index.js` → **todo** el contenido editorial específico de
  esa página. Si el texto solo tiene sentido dentro de una página concreta
  (el hero de Home, la bio de About, el intro de Contact...), va aquí, no
  en `context/lang`.

## Cómo consumir estos datos en un componente

```jsx
import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

export function AboutHero() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return <h1>{a.title}</h1>
}
```

Nota que ya **no** se usa `t('about.title')` para contenido de página — el
`t()` de `LangContext` queda reservado para claves de `nav` (interfaz
global). Esto evita que `context/lang/*.js` crezca sin límite a medida que
se añade contenido, tal y como ya razonabas en `data/projects/README.md`.

## Cómo añadir/editar contenido de Home o About

1. Abre `src/data/home/index.js` o `src/data/about/index.js`.
2. Edita el texto en los tres idiomas (`en`, `es`, `zh`).
3. No toques `context/lang/*.js` para esto — esos archivos son solo para el
   navbar.

## Cómo añadir un texto nuevo de interfaz global (ej. footer)

1. Añade la clave dentro de `nav` (o crea una nueva clave raíz si no es de
   navegación) en `context/lang/en.js`, `es.js` y `zh.js`.
2. Consúmela con `t('tuClave')` desde `useLang()`.
