import { useState } from 'react'
import { useLang } from '../context/LangContext'
import '../styles/Navbar.css'

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
]

export default function Navbar({ theme, toggleTheme }) {
  const { lang, setLang, t } = useLang()
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="navbar">
      {/* Logo */}
      <a href="/" className="navbar__logo">
        MZ<span className="navbar__logo-dot">.</span>
      </a>

      {/* Links */}
      <nav className="navbar__links">
        <a href="#hero"     className="navbar__link">{t('nav.home')}</a>
        <a href="#projects" className="navbar__link">{t('nav.projects')}</a>
        <a href="#about"    className="navbar__link">{t('nav.about')}</a>
        <a href="#contact"  className="navbar__link">{t('nav.contact')}</a>
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