import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">PRINT DESIGN</h4>
          <p className="footer-text">
            Professionelle Drucklösungen für Ihr Unternehmen.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Leistungen</h4>
          <ul className="footer-links">
            <li><a href="#services">Flyer Design</a></li>
            <li><a href="#services">Firmenschilder</a></li>
            <li><a href="#services">Werbematerial</a></li>
            <li><a href="#services">Corporate Design</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Kontakt</h4>
          <ul className="footer-links">
            <li>info@printdesign.de</li>
            <li>+49 123 456 7890</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Print Design Agency. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}

export default Footer
