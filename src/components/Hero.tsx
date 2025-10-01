import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">PRINT DESIGN</div>
          <div className="nav-links">
            <a href="#services">Leistungen</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Kontakt</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Professionelles<br />
          Print Design
        </h1>
        <p className="hero-subtitle">
          Wir gestalten Ihre Werbematerialien mit Präzision und Kreativität.<br />
          Flyer, Schilder, Firmenwerbung und mehr.
        </p>
        <a href="#contact" className="hero-cta">
          Projekt starten
        </a>
      </div>
    </section>
  )
}

export default Hero
