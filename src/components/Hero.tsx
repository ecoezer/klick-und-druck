import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">KLICK-UND-DRUCK</div>

          <div className="nav-left">
            <a href="#services" className="nav-item">Leistungen</a>
            <a href="#portfolio" className="nav-item">Portfolio</a>
            <a href="#contact" className="nav-item">Kontakt</a>
          </div>

          <div className="nav-right">
            <a href="#contact" className="nav-btn">Anfragen</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <p className="hero-subtitle">
          Von der Speisekarte bis zum QR-Bestellsystem – <span className="gradient-text">alles aus einer Hand</span>.<br />
          Professionelle Drucklösungen für Gastronomie und Unternehmen.
        </p>
        <a href="#contact" className="hero-cta">
          Jetzt anfragen
        </a>
      </div>
    </section>
  )
}

export default Hero
