import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

export function AboutHero() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__hero">
      {/* Avatar placeholder — replace with <img src="..."> when you have a photo */}
      <div className="about__avatar">
        <span className="about__avatar-initials">MZ</span>
      </div>
      <div className="about__intro">
        <h1 className="about__title">{a.title}</h1>
        <p>{a.bio_1}</p>
        <p>{a.bio_2}</p>
      </div>
    </section>
  )
}