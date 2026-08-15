# Portfolio TODO

Portafolio como página estática, sin backend propio. Foco 100% en frontend.

## ✅ Done

- [x] Global styles (fonts, colors, reset, buttons)
- [x] Light / dark mode
- [x] Language switcher (EN, ES, ZH)
- [x] Navbar
- [x] Hero section
- [x] About page (Hero, Timeline, Skills, Personal)
- [x] Reescribir bio, timeline y skills de About con info real de los CVs (fechas y datos corregidos)
- [x] Corregir nombre del centro (ETSIINF, no ETSISI) y timeline por ediciones/años según corresponda
- [x] Añadir grupo de skills de IA/Machine Learning (RAG, LangChain, Qdrant, Ollama, FastAPI)
- [x] Mover intereses de Hardware/ROMs/Arduino a la sección Personal
- [x] Traducir todo el contenido corregido a `en.js` y `zh.js`
- [x] Añadir sección de Idiomas y Disponibilidad en About (`AboutAvailability.jsx`) con botón de descarga de CV
- [x] Crear página `Projects.jsx` — cards con título, descripción, stack, links a GitHub y demo en vivo
- [x] Crear página `Contact.jsx` — email, GitHub, LinkedIn y formulario
- [x] Añadir las rutas `/projects`, `/projects/:slug` y `/contact` en `App.jsx`
- [x] Añadir textos de Projects y Contact a `es.js` / `en.js` / `zh.js`
- [x] Eliminar `hooks/useLang.js` (ya no existe en el código — se usa únicamente `context/LangContext.jsx`)
- [x] Menú hamburguesa para móvil en el Navbar (antes los links solo desaparecían bajo 640px sin alternativa de navegación)
- [x] Migrar iconos del Navbar a `lucide-react` (Menu, X, ChevronDown, Sun, Moon) con animaciones CSS (cross-fade tema, rotación flecha/hamburguesa)
- [x] Sustituir emojis de bandera por SVG de `country-flag-icons` (las banderas-emoji no se renderizaban en Edge/Chrome sobre Windows)
- [x] Migrar iconos sociales de ContactInfo a `@tabler/icons-react` (IconBrandGithub, IconBrandLinkedin), con color vía `currentColor` para adaptarse a modo claro/oscuro
- [x] Desinstalar `@icons-pack/react-simple-icons` (reemplazado por Lucide + Tabler)
- [x] Formulario de contacto sin backend propio (endpoint externo vía `mail.marcoszhou.dev`)

## ✍️ About — pendientes de contenido

- [ ] Crear sección **Motivaciones** en About (nuevo componente `AboutMotivations.jsx` o similar)
- [ ] Mover a Motivaciones el texto: "Actualmente exploro también el despliegue de sistemas de IA generativa: he construido un pipeline RAG completo (chunking, embeddings, base de datos vectorial y LLMs locales con Ollama). Busco oportunidades de prácticas o un puesto junior donde pueda seguir creciendo como desarrollador." (hoy vive dentro de `bio_2`, hay que sacarlo de la bio)
- [ ] Separar **Idiomas** y **Disponibilidad** en dos secciones independientes (hoy están juntas en un mismo `AboutAvailability` con dos bloques en grid — separarlas en dos `<section className="about__section">` propias, una detrás de otra)
- [ ] Añadir a Disponibilidad una frase tipo "Aquí tienes mi CV para descargar" justo antes/junto al botón de descarga
- [ ] Actualizar `es.js` / `en.js` / `zh.js` con las nuevas claves (`motivations_title`, `motivations`, frase de CV) y quitar el texto movido de `bio_2`
- [ ] Actualizar `about.css`: separar estilos de `.about__availability` (grid de dos bloques) en reglas independientes para idiomas y disponibilidad, y añadir estilos del nuevo bloque de motivaciones
- [ ] Sustituir el placeholder de avatar (iniciales "MZ") por foto real o ilustración definitiva
- [ ] Revisar tono y coherencia entre secciones (que no suene a plantilla genérica)
- [ ] Confirmar que el PDF real del CV está subido en `src/assets/cv/` con el nombre exacto que espera el import (el botón de descarga ya apunta ahí)

## 🤖 Chatbot "pregúntame sobre mí"

Se reutiliza el proyecto RAG propio ya existente — el portafolio solo consume esa API, sin lógica adicional de backend aquí.

- [ ] Preparar/actualizar el contenido base que indexa el RAG (bio, timeline, skills, motivaciones, proyectos corregidos)
- [ ] Construir el componente de chat (widget flotante) en React
- [ ] Conectar el widget a la API del proyecto RAG (fetch simple desde el frontend)
- [ ] Manejar estados de carga / error de la llamada a la API
- [ ] Adaptar el widget a modo claro/oscuro y a los tres idiomas del portafolio
- [ ] Testear el widget en el nuevo layout móvil (verificar que no choque con el panel de navegación ni el botón hamburguesa)

## 🧹 Limpieza técnica

- [ ] Revisar si `public/icons.svg` (sprite con bluesky, discord, documentation, github, social, x-icon) sigue siendo necesario ahora que GitHub/LinkedIn se migraron a `@tabler/icons-react` — eliminar símbolos no usados
- [ ] Auditar que no queden imports residuales de `@icons-pack/react-simple-icons` en el código
- [ ] Probar el menú móvil y el selector de idioma en dispositivos reales (iOS Safari, Android Chrome), no solo en DevTools
- [ ] Verificar contraste de las banderas SVG y los iconos de Tabler en ambos temas con una herramienta de accesibilidad (Lighthouse o axe)
- [ ] Cerrar el dropdown del selector de idioma y el panel móvil al hacer click fuera (actualmente solo se cierran al seleccionar una opción)

## ✨ Nice to have

- [ ] Animaciones de scroll al entrar secciones en el viewport
- [ ] Filtro de proyectos por tecnología
- [ ] Página 404
- [ ] Favicon y título de página por ruta
- [ ] Meta tags Open Graph (preview al compartir en redes)
- [ ] Añadir más redes sociales al footer/contacto si aplica (Bluesky, Discord, X ya tienen icono en el sprite legacy)

## 🚀 Deploy (estático)

- [x] Dominio comprado (marcoszhou.dev)
- [x] Dockerizar frontend con multi-stage build (Node → serve)
- [x] Nginx reverse proxy en servidor local
- [x] Deploy en red local vía marcoszhou.es
- [x] Alias `deploy` en servidor para ejecutar deploy.sh desde cualquier carpeta
- [x] Auto-deploy con GitHub webhook (pull + build automático en cada `git push`, sin SSH manual)
- [x] HTTPS (Let's Encrypt / Cloudflare)
- [x] Apuntar marcoszhou.dev a IP pública

## 💡 Futuro (no ahora)

- [ ] Backend propio — solo si en algún momento se hace un blog con contenido gestionable. De momento descartado.
