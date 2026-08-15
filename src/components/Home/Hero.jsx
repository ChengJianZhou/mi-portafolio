import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { home } from '../../data/home'
import '../../styles/Hero.css'

export function Hero() {
  const { lang } = useLang()
  const h = home[lang] ?? home.en

  return (
    <section id="hero" className="hero">
      {/* Círculos decorativos de fondo */}
      <div className="glow-circle glow-circle--purple" />
      <div className="glow-circle glow-circle--cyan" />

      <div className="hero__content">
        <span className="hero__badge">{h.badge}</span>

        <h1 className="hero__title">
          {h.title.split('Marcos Zhou')[0]}
          <span className="hero__name">Marcos Zhou</span>
        </h1>

        <p className="hero__role">{h.role}</p>
        <p className="hero__desc">{h.desc}</p>

        <div className="hero__cta">
          <Link to="/projects" className="btn btn-solid">{h.cta_primary}</Link>
          <Link to="/contact" className="btn btn-outline">{h.cta_secondary}</Link>
        </div>

        <div className="hero__stack">
          {h.stack.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}