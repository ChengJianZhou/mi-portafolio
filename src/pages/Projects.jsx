import { ProjectsHero } from '../components/Projects/ProjectsHero'
import { ProjectsGrid } from '../components/Projects/ProjectsGrid'
import '../styles/projects.css'

export default function ProjectsPage() {
  return (
    <main className="projects">
      <section className="projects__hero">
        <h1 className="projects__title">Proyectos</h1>
        <p className="projects__subtitle">
          Una selección de proyectos que he construido, desde APIs backend
          hasta despliegues completos con Docker. Cada tarjeta lleva a una
          página con el detalle completo, capturas y demos.
        </p>
      </section>
      
      <ProjectsGrid />
    </main>
  )
}