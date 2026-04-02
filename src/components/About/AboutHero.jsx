import { useLang } from '../../context/LangContext'

export function AboutHero() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__hero">
      {/* Avatar placeholder — replace with <img src="..."> when you have a photo */}
      <div className="about__avatar">
        <span className="about__avatar-initials">MZ</span>
      </div>
      <div className="about__intro">
        <h1 className="about__title">{about.title}</h1>
        <p>{about.bio_1}</p>
        <p>{about.bio_2}</p>
      </div>
    </section>
  )
}
