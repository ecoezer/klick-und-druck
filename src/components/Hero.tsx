import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#" className="nav-item">Home</a>
            <a href="#services" className="nav-item">Leistungen</a>
            <a href="#portfolio" className="nav-item">Portfolio</a>
            <a href="#contact" className="nav-item">Kontakt</a>
          </div>

          <div className="logo">KLICK-UND-DRUCK</div>

          <div className="nav-right">
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <a href="#contact" className="hero-cta">
          Jetzt anfragen
        </a>
        <p className="hero-subtitle">
          Von der Speisekarte bis zum QR-Bestellsystem – alles aus einer Hand.<br />
          Professionelle Drucklösungen für Gastronomie und Unternehmen.
        </p>
      </div>
    </section>
  )
}

export default Hero
