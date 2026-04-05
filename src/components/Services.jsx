import { useLang } from '../context/LanguageContext'
import './Services.css'

export default function Services() {
  const { t } = useLang()

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="section-label">{t.services.sectionLabel}</p>
          <h2 className="section-heading">{t.services.heading}</h2>
          <p className="section-subheading">{t.services.subheading}</p>
        </div>

        <div className="services-grid">
          {t.services.items.map((item, i) => (
            <div key={i} className="service-card">
              {item.tag && <span className="service-tag">{item.tag}</span>}
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-name">{item.name}</h3>
              <p className="service-desc">{item.desc}</p>
              <div className="service-footer">
                <span className="service-price">{item.price}</span>
                <span className="service-arrow">→</span>
              </div>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
