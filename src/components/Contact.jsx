import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.project) e.project = true
    if (!form.message.trim()) e.message = true
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSent(true)
  }

  const reset = () => {
    setForm({ name: '', email: '', phone: '', project: '', message: '' })
    setSent(false)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-label">{c.sectionLabel}</p>
          <h2 className="section-heading">{c.heading}</h2>
          <p className="contact-sub">{c.subheading}</p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉</span>
              <span>hello@artofcalligraphy.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">◎</span>
              <span>Worldwide Commissions</span>
            </div>
            <div className="info-item">
              <span className="info-icon">◷</span>
              <span>Reply within 24 hours</span>
            </div>
          </div>

          <div className="contact-arabic-deco">فن الخط</div>
        </div>

        <div className="contact-right">
          {sent ? (
            <div className="success-box">
              <div className="success-icon">✦</div>
              <h3 className="success-title">{c.successTitle}</h3>
              <p className="success-msg">{c.successMsg}</p>
              <button className="btn-gold" onClick={reset}>{c.sendAnother}</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <input
                    type="text"
                    placeholder={c.namePlaceholder}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <input
                    type="email"
                    placeholder={c.emailPlaceholder}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder={c.phonePlaceholder}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className={`form-group ${errors.project ? 'error' : ''}`}>
                  <select
                    value={form.project}
                    onChange={e => setForm({ ...form, project: e.target.value })}
                  >
                    <option value="">{c.projectLabel}</option>
                    {c.projectTypes.map((pt, i) => (
                      <option key={i} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`form-group ${errors.message ? 'error' : ''}`}>
                <textarea
                  placeholder={c.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-gold submit-btn">
                {c.submit} <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
