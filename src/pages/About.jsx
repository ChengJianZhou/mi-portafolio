import { AboutHero }     from '../components/About/AboutHero'
import { AboutTimeline } from '../components/About/AboutTimeline'
import { AboutSkills }   from '../components/About/AboutSkills'
import { AboutPersonal } from '../components/About/AboutPersonal'
import '../styles/about.css'

export default function AboutPage() {
  return (
    <main className="about">
      <AboutHero />
      <AboutTimeline />
      <AboutSkills />
      <AboutPersonal />
    </main>
  )
}