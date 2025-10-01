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
            <a href="#contact" className="nav-btn">Jetzt starten</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-subtitle">
          Nosu is your natural shield against sweet temptations
        </h1>
        <a href="#contact" className="hero-cta">
          Get Nosu
        </a>
      </div>
    </section>
  )
}

export default Hero
