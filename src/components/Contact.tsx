import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Kontakt</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-info-title">Lassen Sie uns sprechen</h3>
          <p className="contact-info-text">
            Haben Sie ein Projekt im Kopf? Wir helfen Ihnen gerne dabei,
            Ihre Vision in beeindruckende Druckmaterialien zu verwandeln.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <strong>Email</strong>
              <p>info@klick-und-druck.de</p>
            </div>
            <div className="contact-detail">
              <strong>Telefon</strong>
              <p>+49 123 456 7890</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Ihre Nachricht"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
