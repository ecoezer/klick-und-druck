import './Services.css'

const services = [
  {
    title: 'Flyer Design',
    description: 'Professionelle Flyer, die Ihre Botschaft klar kommunizieren und Aufmerksamkeit erregen.'
  },
  {
    title: 'Firmenschilder',
    description: 'Hochwertige Beschilderung für Ihr Unternehmen, von Außenwerbung bis Innenraumgestaltung.'
  },
  {
    title: 'Werbematerial',
    description: 'Visitenkarten, Broschüren, Banner und alle Printmedien für Ihre Marketingkampagne.'
  },
  {
    title: 'Corporate Design',
    description: 'Konsistente visuelle Identität über alle Ihre Druckmaterialien hinweg.'
  }
]

function Services() {
  return (
    <section id="services" className="section services">
      <h2 className="section-title">Unsere Leistungen</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
