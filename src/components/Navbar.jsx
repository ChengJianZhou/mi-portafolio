import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GB, ES, CN } from 'country-flag-icons/react/3x2'
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { useLang } from '../context/LangContext'
import '../styles/Navbar.css'

const LANGS = [
  { code: 'en', label: 'EN', Flag: GB },
  { code: 'es', label: 'ES', Flag: ES },
  { code: 'zh', label: '中文', Flag: CN },
]

// Helper para aplicar la clase activa
const navLinkClass = ({ isActive }) =>
  `navbar__link ${isActive ? 'navbar__link--active' : ''}`

export default function Navbar({ theme, toggleTheme }) {
  const { lang, setLang, t } = useLang()
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentLang = LANGS.find(l => l.code === lang)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="navbar">
      {/* Logo — to="/" con end para que solo sea activo en la ruta exacta */}
      <NavLink to="/" className={navLinkClass} end onClick={closeMobile}>
        MZ<span className="navbar__logo-dot">.</span>
      </NavLink>

      {/* Links desktop */}
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
            aria-expanded={langOpen}
          >
            {currentLang && (
              <currentLang.Flag className="lang-flag" title={currentLang.label} />
            )}
            {currentLang?.label}
            <ChevronDown
              size={14}
              className={`lang-selector__arrow-icon ${langOpen ? 'is-open' : ''}`}
            />
          </button>

          {langOpen && (
            <div className="lang-selector__dropdown">
              {LANGS.map(l => (
                <button
                  key={l.code}
                  className={`lang-selector__option ${lang === l.code ? 'lang-selector__option--active' : ''}`}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                >
                  <l.Flag className="lang-flag" title={l.label} />
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Toggle tema — cross-fade animado entre Sun y Moon */}
        <button
          className="navbar__theme-btn"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          <span className="theme-icon-swap">
            <Sun
              size={18}
              className={`theme-icon theme-icon--sun ${theme === 'dark' ? 'is-visible' : ''}`}
            />
            <Moon
              size={18}
              className={`theme-icon theme-icon--moon ${theme === 'light' ? 'is-visible' : ''}`}
            />
          </span>
        </button>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          className="navbar__burger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <Menu
            size={22}
            className={`burger-icon burger-icon--menu ${mobileOpen ? 'is-hidden' : ''}`}
          />
          <X
            size={22}
            className={`burger-icon burger-icon--close ${mobileOpen ? 'is-visible' : ''}`}
          />
        </button>
      </div>

      {/* Panel de navegación móvil — reemplaza a .navbar__links cuando está oculto */}
      <nav className={`navbar__mobile-panel ${mobileOpen ? 'is-open' : ''}`}>
        <NavLink to="/" className={navLinkClass} end onClick={closeMobile}>{t('nav.home')}</NavLink>
        <NavLink to="/projects" className={navLinkClass} onClick={closeMobile}>{t('nav.projects')}</NavLink>
        <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>{t('nav.about')}</NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>{t('nav.contact')}</NavLink>
      </nav>
    </header>
  )
}