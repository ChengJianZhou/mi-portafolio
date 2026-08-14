import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

export function AboutPersonal() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__section">
      <h2 className="about__section-title">{a.personal_title}</h2>
      <p className="about__personal">{a.personal}</p>
    </section>
  )
}