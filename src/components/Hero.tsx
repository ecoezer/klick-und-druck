import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">KLICK-UND-DRUCK</div>
          <div className="nav-links">
            <a href="#services">Leistungen</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Kontakt</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Von der Speisekarte<br />
          bis zum QR-Bestellsystem
        </h1>
        <p className="hero-subtitle">
          Alles aus einer Hand – professionelle Drucklösungen<br />
          für Gastronomie und Unternehmen.
        </p>
        <a href="#contact" className="hero-cta">
          Projekt starten
        </a>
      </div>
    </section>
  )
}

export default Hero
