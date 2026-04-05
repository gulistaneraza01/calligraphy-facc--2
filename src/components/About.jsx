import { useLang } from '../context/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLang()

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-visual">
          <div className="about-frame">
            <div className="frame-corner fc-tl" />
            <div className="frame-corner fc-tr" />
            <div className="frame-corner fc-bl" />
            <div className="frame-corner fc-br" />
            <div className="calligraphy-demo">
              <span className="demo-text">بِسْمِ اللهِ</span>
              <span className="demo-sub">Al-Thuluth Script</span>
            </div>
          </div>
          <div className="experience-badge">
            <span className="badge-num">١٢</span>
            <span className="badge-label">{t.about.badge}</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">{t.about.sectionLabel}</p>
          <h2 className="section-heading">{t.about.heading}</h2>
          <p className="about-subheading">{t.about.subheading}</p>
          <p className="about-p">{t.about.p1}</p>
          <p className="about-p">{t.about.p2}</p>

          <div className="about-tags-group">
            <p className="tags-label">{t.about.stylesLabel}</p>
            <div className="tags">
              {t.about.styles.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="about-tags-group">
            <p className="tags-label">{t.about.mediumsLabel}</p>
            <div className="tags">
              {t.about.mediums.map(m => (
                <span key={m} className="tag tag-outline">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
