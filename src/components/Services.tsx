import './Services.css'

const services = [
  {
    title: 'Flyer Design',
    description: 'Professionelle Flyer, die Ihre Botschaft klar kommunizieren und Aufmerksamkeit erregen.',
    icon: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    title: 'Firmenschilder',
    description: 'Hochwertige Beschilderung für Ihr Unternehmen, von Außenwerbung bis Innenraumgestaltung.',
    icon: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    title: 'Werbematerial',
    description: 'Visitenkarten, Broschüren, Banner und alle Printmedien für Ihre Marketingkampagne.',
    icon: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    title: 'Corporate Design',
    description: 'Konsistente visuelle Identität über alle Ihre Druckmaterialien hinweg.',
    icon: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  }
]

function Services() {
  return (
    <section id="services" className="section services">
      <h2 className="section-title">Unsere Leistungen</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
