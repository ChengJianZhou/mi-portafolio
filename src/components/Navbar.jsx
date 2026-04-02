import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import '../styles/Navbar.css'

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
]

// Helper para aplicar la clase activa
const navLinkClass = ({ isActive }) =>
  `navbar__link ${isActive ? 'navbar__link--active' : ''}`

export default function Navbar({ theme, toggleTheme }) {
  const { lang, setLang, t } = useLang()
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="navbar">
      {/* Logo — to="/" con end para que solo sea activo en la ruta exacta */}
      <NavLink to="/" className={navLinkClass} end>
        MZ<span className="navbar__logo-dot">.</span>
      </NavLink>

      {/* Links */}
      <nav className="navbar__links">
        <NavLink to="/"         className={navLinkClass} end>{t('nav.home')}</NavLink>
        <NavLink to="/projects" className={navLinkClass}>{t('nav.projects')}</NavLink>
        <NavLink to="/about"    className={navLinkClass}>{t('nav.about')}</NavLink>
        <NavLink to="/contact"  className={navLinkClass}>{t('nav.contact')}</NavLink>
      </nav>

      {/* Controles */}
      <div className="navbar__controls">

        {/* Selector de idioma */}
        <div className="lang-selector">
          <button
            className="lang-selector__btn"
            onClick={() => setLangOpen(o => !o)}
            aria-label="Cambiar idioma"
          >
            {LANGS.find(l => l.code === lang)?.flag}{' '}
            {LANGS.find(l => l.code === lang)?.label}
            <span className="lang-selector__arrow">{langOpen ? '▲' : '▼'}</span>
          </button>

          {langOpen && (
            <div className="lang-selector__dropdown">
              {LANGS.map(l => (
                <button
                  key={l.code}
                  className={`lang-selector__option ${lang === l.code ? 'lang-selector__option--active' : ''}`}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Toggle tema */}
        <button
          className="navbar__theme-btn"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

      </div>
    </header>
  )
}