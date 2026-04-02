import { useLang } from '../../context/LangContext'

export function AboutPersonal() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__section">
      <h2 className="about__section-title">{about.personal_title}</h2>
      <p className="about__personal">{about.personal}</p>
    </section>
  )
}
