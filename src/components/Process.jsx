import { useLang } from '../context/LanguageContext'
import './Process.css'

export default function Process() {
  const { t } = useLang()

  return (
    <section className="process" id="process">
      <div className="process-inner">
        <div className="process-header">
          <p className="section-label">{t.process.sectionLabel}</p>
          <h2 className="section-heading">{t.process.heading}</h2>
          <p className="section-subheading">{t.process.subheading}</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line" />
          {t.process.steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-bubble">
                <span className="step-num">{step.num}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {i < t.process.steps.length - 1 && (
                <span className="step-ornament">✦</span>
              )}
            </div>
          ))}
        </div>

        <div className="process-timeline-mobile">
          {t.process.steps.map((step, i) => (
            <div key={i} className="process-step-v">
              <div className="step-v-left">
                <div className="step-dot" />
                {i < t.process.steps.length - 1 && <div className="step-vline" />}
              </div>
              <div className="step-v-content">
                <span className="step-num-v">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
