import '../../styles/Home/Hero.css'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Marcos Zhou</h1>
        <p className="hero__role">Full Stack Developer</p>
        <p className="hero__desc">
          Construyo aplicaciones web con React y Python.
          Apasionado por Linux e infraestructura. Basado en Madrid.
        </p>
        <div className="hero__cta">
          <a href="/projects">Ver proyectos</a>
          <a href="#contact">Contactar</a>
        </div>
      </div>
    </section>
  )
}