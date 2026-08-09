# Portfolio TODO

Portafolio como página estática, sin backend propio. Foco 100% en frontend.

## ✅ Done
- [x] Global styles (fonts, colors, reset, buttons)
- [x] Light / dark mode
- [x] Language switcher (EN, ES, ZH)
- [x] Navbar
- [x] Hero section
- [x] About page (Hero, Timeline, Skills, Personal)

---

## ✍️ Prioridad 1 — Revisar y corregir contenido

El texto actual está mal redactado / con información incorrecta o desactualizada. Antes de añadir nada nuevo, limpiar lo que ya existe.

- [ ] Reescribir textos de `context/lang/es.js` (idioma base) — bio, timeline, skills, personal
- [ ] Revisar que `en.js` y `zh.js` sean traducciones fieles del texto corregido en `es.js`, no textos inventados aparte
- [ ] Actualizar timeline con experiencia real y actual (revisar fechas, títulos y descripciones)
- [ ] Actualizar sección de skills con el stack real actual (Spring Boot, Docker, PostgreSQL, etc. si aplica)
- [ ] Sustituir el placeholder de avatar (iniciales "MZ") por foto real o ilustración definitiva
- [ ] Revisar tono y coherencia entre secciones (que no suene a plantilla genérica)

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

- [ ] Preparar/actualizar el contenido base que indexa el RAG (bio, timeline, skills, proyectos corregidos)
- [ ] Construir el componente de chat (widget flotante) en React
- [ ] Conectar el widget a la API del proyecto RAG (fetch simple desde el frontend)
- [ ] Manejar estados de carga / error de la llamada a la API
- [ ] Testear en los 3 idiomas del portafolio

---

## ✨ Nice to have

- [ ] Animaciones de scroll al entrar secciones en el viewport
- [ ] Filtro de proyectos por tecnología
- [ ] Botón de descarga de CV (PDF)
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
