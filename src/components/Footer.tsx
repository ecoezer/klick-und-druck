import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">KLICK-UND-DRUCK</h4>
          <p className="footer-text">
            Von der Speisekarte bis zum QR-Bestellsystem – alles aus einer Hand.
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
            <li>info@klick-und-druck.de</li>
            <li>+49 123 456 7890</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Klick-und-Druck. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}

export default Footer
