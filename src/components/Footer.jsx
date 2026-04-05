import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const nav = t.nav
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  const links = [
    { id: 'home', label: nav.home },
    { id: 'about', label: nav.about },
    { id: 'gallery', label: nav.gallery },
    { id: 'services', label: nav.services },
    { id: 'process', label: nav.process },
    { id: 'contact', label: nav.contact },
  ]

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="ornament">✦</span>
            <span>فن الخط</span>
            <span className="ornament">✦</span>
          </div>
          <p className="footer-tagline">{f.tagline}</p>
          <div className="social-icons">
            {['𝕏', 'ⓘ', 'ⓟ', 'ⓛ'].map((icon, i) => (
              <button key={i} className="social-btn">{icon}</button>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">{f.quickLinks}</h4>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <button className="footer-link" onClick={() => scrollTo(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-heading">{f.newsletter}</h4>
          <p className="newsletter-desc">{f.newsletterDesc}</p>
          {subscribed ? (
            <p className="subscribed-msg">✦ Thank you for subscribing!</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder={f.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="subscribe-btn">{f.subscribe}</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">{f.copyright}</p>
        <p className="made-with">
          <span className="ornament">✦</span> {f.madeWith} <span className="ornament">✦</span>
        </p>
      </div>
    </footer>
  )
}
