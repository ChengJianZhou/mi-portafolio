# mi-portfolio

Personal portfolio built with React + Vite. Supports light/dark mode and three languages (EN, ES, ZH).

## Stack

- **React 19** + **Vite 6**
- **React Router DOM 7** — page routing
- **CSS Variables** — design tokens, no CSS framework

## Project Structure

```
src/
├── styles/          # Global CSS (fonts, theme, reset, buttons)
├── context/
│   └── LangContext.jsx   # All translations + useLang() hook — edit here to add/change texts
├── hooks/
│   └── useTheme.js       # Light/dark mode logic
├── pages/           # One file per route (Home, etc.)
├── components/      # UI pieces (Navbar, Hero, etc.)
├── App.jsx          # Providers + router setup
└── main.jsx         # Entry point — imports global styles
```

## Key Files

| File | What it does |
|---|---|
| `context/LangContext.jsx` | All translations for EN, ES and ZH. Add new text keys here |
| `hooks/useTheme.js` | Handles theme toggle and saves preference to localStorage |
| `pages/Home.jsx` | Add new sections here as the portfolio grows |

## Getting Started

```bash
npm install
npm run dev
```

## License

Feel free to use this project as inspiration for your own portfolio.  
If you do, a credit or mention to [Marcos Zhou](https://github.com/ChengJianZhou) would be appreciated 🙂
