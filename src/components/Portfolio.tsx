import './Portfolio.css'

const portfolioItems = [
  {
    title: 'Restaurant Menükarte',
    category: 'Print Design',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Firmenschild Außenwerbung',
    category: 'Beschilderung',
    image: 'https://images.pexels.com/photos/7412081/pexels-photo-7412081.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Event Flyer',
    category: 'Werbematerial',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Corporate Broschüre',
    category: 'Corporate Design',
    image: 'https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
