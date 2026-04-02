import { useLang } from '../context/LangContext'
import '../styles/Hero.css'

export function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="hero">
      {/* Círculos decorativos de fondo */}
      <div className="glow-circle glow-circle--purple" />
      <div className="glow-circle glow-circle--cyan" />

      <div className="hero__content">
        <span className="hero__badge">✦ {t('hero.badge')}</span>

        <h1 className="hero__title">
          {t('hero.title').split('Marcos Zhou')[0]}
          <span className="hero__name">Marcos Zhou</span>
        </h1>

        <p className="hero__role">{t('hero.role')}</p>
        <p className="hero__desc">{t('hero.desc')}</p>

        <div className="hero__cta">
          <button className="btn btn-solid">{t('hero.cta_primary')}</button>
          <button className="btn btn-outline">{t('hero.cta_secondary')}</button>
        </div>

        <div className="hero__stack">
          {['React', 'Python', 'Docker', 'Linux'].map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}