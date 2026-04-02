# Portfolio TODO

## ✅ Done
- [x] Global styles (fonts, colors, reset, buttons)
- [x] Light / dark mode
- [x] Language switcher (EN, ES, ZH)
- [x] Navbar
- [x] Hero section

---

## 🚧 Sections to build

- [ ] **About** — short bio, photo, personality beyond just tech skills
- [ ] **Projects** — cards with title, description, tech stack, links to GitHub and live demo
- [ ] **Skills** — technologies you know, grouped by category (frontend, backend, tools)
- [ ] **Experience / Timeline** — studies, jobs, or relevant personal projects with dates
- [ ] **Contact** — email form or just links (email, GitHub, LinkedIn)

---

## ⚙️ Backend (Django + Python)

### API REST
- [ ] Set up Django + Django REST Framework project
- [ ] Endpoint `GET /api/projects/` — returns projects list from a database
- [ ] Endpoint `GET /api/projects/:id/` — single project detail
- [ ] Admin panel to add/edit projects without touching code

### Contact form (real backend)
- [ ] Endpoint `POST /api/contact/` — receives name, email, message
- [ ] Send email notification on new message (SMTP / SendGrid)
- [ ] Basic spam protection (rate limiting or honeypot field)

### GitHub stats (fun touch)
- [ ] Endpoint `GET /api/github/` — fetches your public stats from GitHub API
- [ ] Show on frontend: repos, stars, top languages
- [ ] Cache the response so you don't hit GitHub rate limits

### Blog (optional but impressive)
- [ ] Post model in Django (title, content, date, slug)
- [ ] Endpoint `GET /api/posts/` and `GET /api/posts/:slug/`
- [ ] Blog section in the frontend
- [ ] Write at least 2-3 posts about things you've built or learned

### Deploy backend
- [ ] Dockerize the Django app
- [ ] Set up PostgreSQL (or SQLite for simplicity)
- [ ] Deploy API to Railway / Render / VPS
- [ ] Connect frontend to the live API URL via environment variable (VITE_API_URL)

---

## ✨ Nice to have

- [ ] Smooth scroll animations when sections enter the viewport
- [ ] Project filter by technology
- [ ] CV download button (PDF)
- [ ] 404 page
- [ ] Favicon and page title per route
- [ ] Open Graph meta tags (preview when sharing the URL on social media)
- [ ] Mobile hamburger menu for the navbar
- [ ] Visitor counter (stored in backend)

---

## 🚀 Deploy

- [ ] Buy or set up a domain
- [ ] Deploy frontend to Vercel / Netlify / GitHub Pages
- [ ] Deploy backend (see above)
- [ ] Set up HTTPS
- [ ] Add CORS config in Django to allow frontend domain

