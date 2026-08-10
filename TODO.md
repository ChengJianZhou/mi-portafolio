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

---

## ✍️ About — pendientes de contenido

- [ ] Crear sección **Motivaciones** en About (nuevo componente `AboutMotivations.jsx` o similar)
- [ ] Mover a Motivaciones el texto: "Actualmente exploro también el despliegue de sistemas de IA generativa: he construido un pipeline RAG completo (chunking, embeddings, base de datos vectorial y LLMs locales con Ollama). Busco oportunidades de prácticas o un puesto junior donde pueda seguir creciendo como desarrollador." (hoy vive dentro de `bio_2`, hay que sacarlo de la bio)
- [ ] Separar **Idiomas** y **Disponibilidad** en dos secciones independientes (hoy están juntas en un mismo `AboutAvailability` con dos bloques en grid — separarlas en dos `<section className="about__section">` propias, una detrás de otra)
- [ ] Añadir a Disponibilidad una frase tipo "Aquí tienes mi CV para descargar" justo antes/junto al botón de descarga
- [ ] Actualizar `es.js` / `en.js` / `zh.js` con las nuevas claves (`motivations_title`, `motivations`, frase de CV) y quitar el texto movido de `bio_2`
- [ ] Actualizar `about.css`: separar estilos de `.about__availability` (grid de dos bloques) en reglas independientes para idiomas y disponibilidad, y añadir estilos del nuevo bloque de motivaciones
- [ ] Sustituir el placeholder de avatar (iniciales "MZ") por foto real o ilustración definitiva
- [ ] Revisar tono y coherencia entre secciones (que no suene a plantilla genérica)
- [ ] Subir el PDF real del CV a `public/cv/marcos-zhou-cv.pdf` (el botón de descarga ya apunta ahí pero el archivo no existe todavía)

---

## 🚧 Secciones y rutas faltantes

- [ ] Crear página `Projects.jsx` — cards con título, descripción, stack, links a GitHub y demo en vivo
- [ ] Crear página `Contact.jsx` — email, GitHub, LinkedIn, y opcionalmente formulario (ver "Nice to have")
- [ ] Añadir las rutas `/projects` y `/contact` en `App.jsx` (el Navbar ya enlaza a ellas pero no existen — están rotas ahora mismo)
- [ ] Eliminar `hooks/useLang.js` (implementación de traducciones duplicada y sin usar; el proyecto usa `context/LangContext.jsx`)
- [ ] Añadir textos de Projects y Contact a `es.js` / `en.js` / `zh.js`

---

## 🤖 Chatbot "pregúntame sobre mí"

Se reutiliza el proyecto RAG propio ya existente — el portafolio solo consume esa API, sin lógica adicional de backend aquí.

- [ ] Preparar/actualizar el contenido base que indexa el RAG (bio, timeline, skills, motivaciones, proyectos corregidos)
- [ ] Construir el componente de chat (widget flotante) en React
- [ ] Conectar el widget a la API del proyecto RAG (fetch simple desde el frontend)
- [ ] Manejar estados de carga / error de la llamada a la API
- [ ] Testear en los 3 idiomas del portafolio

---

## ✨ Nice to have

- [ ] Animaciones de scroll al entrar secciones en el viewport
- [ ] Filtro de proyectos por tecnología
- [ ] Página 404
- [ ] Favicon y título de página por ruta
- [ ] Meta tags Open Graph (preview al compartir en redes)
- [ ] Menú hamburguesa para móvil en el Navbar
- [ ] Formulario de contacto sin backend propio (Formspree / Getform)

---

## 🚀 Deploy (estático)

- [x] Dominio comprado (marcoszhou.dev)
- [x] Dockerizar frontend con multi-stage build (Node → serve)
- [x] Nginx reverse proxy en servidor local
- [x] Deploy en red local vía marcoszhou.es
- [ ] Alias `deploy` en servidor para ejecutar deploy.sh desde cualquier carpeta
- [ ] Auto-deploy con GitHub webhook (pull + build automático en cada `git push`, sin SSH manual)
- [ ] HTTPS (Let's Encrypt / Cloudflare)
- [ ] Apuntar marcoszhou.dev a IP pública cuando esté listo

---

## 💡 Futuro (no ahora)

- [ ] Backend propio — solo si en algún momento se hace un blog con contenido gestionable. De momento descartado.
