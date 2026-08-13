import { ProjectsHero } from '../components/Projects/ProjectsHero'
import { ProjectsGrid } from '../components/Projects/ProjectsGrid'
import '../styles/projects.css'

export default function ProjectsPage() {
  return (
    <main className="projects">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}