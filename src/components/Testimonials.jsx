import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import './Testimonials.css'

export default function Testimonials() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const items = t.testimonials.items

  const prev = () => setActive(a => (a - 1 + items.length) % items.length)
  const next = () => setActive(a => (a + 1) % items.length)

  return (
    <section className="testimonials" id="reviews">
      <div className="testimonials-inner">
        <div className="test-header">
          <p className="section-label">{t.testimonials.sectionLabel}</p>
          <h2 className="section-heading">{t.testimonials.heading}</h2>
          <p className="section-subheading">{t.testimonials.subheading}</p>
        </div>

        <div className="test-stage">
          <div className="test-quote-mark">"</div>
          <div className="test-cards">
            {items.map((item, i) => (
              <div
                key={i}
                className={`test-card ${i === active ? 'active' : i === (active - 1 + items.length) % items.length ? 'prev' : i === (active + 1) % items.length ? 'next' : 'hidden'}`}
              >
                <div className="test-stars">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <span key={j} className="star">★</span>
                  ))}
                </div>
                <p className="test-text">{item.text}</p>
                <div className="test-author">
                  <div className="author-avatar">
                    <span>{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="author-name">{item.name}</p>
                    <p className="author-loc">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="test-controls">
            <button className="test-btn" onClick={prev}>←</button>
            <div className="test-dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`test-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
            <button className="test-btn" onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
