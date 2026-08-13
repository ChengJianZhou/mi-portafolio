import { AboutHero }     from '../components/About/AboutHero'
import { AboutTimeline } from '../components/About/AboutTimeline'
import { AboutSkills }   from '../components/About/AboutSkills'
import { AboutAvailability } from '../components/About/AboutAvailability'
import { AboutLanguages } from '../components/About/AboutLanguages'
import { AboutPersonal } from '../components/About/AboutPersonal'
import '../styles/about.css'

export default function AboutPage() {
  return (
    <main className="about">
      <AboutHero />
      <AboutTimeline />
      <AboutSkills />
      <AboutAvailability />
      <AboutLanguages />
      <AboutPersonal />
    </main>
  )
}