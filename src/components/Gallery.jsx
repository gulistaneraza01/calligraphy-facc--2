import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import './Gallery.css'

const PALETTE = [
  { bg: '#161616', accent: '#C9A84C' },
  { bg: '#0D1117', accent: '#6B9FD4' },
  { bg: '#120D0A', accent: '#C4703E' },
  { bg: '#0A0D12', accent: '#7BAF8E' },
  { bg: '#110A16', accent: '#9B6DC9' },
  { bg: '#0D1210', accent: '#4FAF7B' },
  { bg: '#16100A', accent: '#E8C97A' },
  { bg: '#0A1116', accent: '#5FA8D3' },
]

export default function Gallery() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const filterLabels = t.gallery.filters
  const styleKeys = ['All', 'Thuluth', 'Naskh', 'Diwani', 'Kufic', 'Nastaliq']
  const activeStyleKey = styleKeys[activeFilter]

  const filtered = activeStyleKey === 'All'
    ? t.gallery.items
    : t.gallery.items.filter(i => i.style === activeStyleKey)

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <p className="section-label">{t.gallery.sectionLabel}</p>
          <h2 className="section-heading">{t.gallery.heading}</h2>
          <p className="section-subheading">{t.gallery.subheading}</p>
        </div>

        <div className="gallery-filters">
          {filterLabels.map((label, i) => (
            <button
              key={i}
              className={`filter-btn ${activeFilter === i ? 'active' : ''}`}
              onClick={() => setActiveFilter(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, idx) => {
            const palette = PALETTE[item.id - 1] || PALETTE[0]
            return (
              <div
                key={item.id}
                className="gallery-card"
                style={{ background: palette.bg }}
                onClick={() => setLightbox(item)}
              >
                <div className="card-artwork" style={{ '--accent': palette.accent }}>
                  <span className="card-arabic" style={{ color: palette.accent }}>{item.arabic}</span>
                  <div className="card-ornament" style={{ borderColor: palette.accent }}>
                    <div className="card-ornament-inner" style={{ borderColor: palette.accent }} />
                  </div>
                </div>
                <div className="card-info">
                  <p className="card-title">{item.title}</p>
                  <p className="card-sub">{item.subtitle}</p>
                  <span className="card-style-tag" style={{ color: palette.accent, borderColor: palette.accent }}>
                    {item.style}
                  </span>
                </div>
                <div className="card-overlay">
                  <span className="view-icon">✦ View</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <div className="lightbox-artwork">
              <span className="lightbox-arabic">{lightbox.arabic}</span>
            </div>
            <div className="lightbox-info">
              <p className="lightbox-title">{lightbox.title}</p>
              <p className="lightbox-sub">{lightbox.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
