import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const nav = t.nav;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const links = [
    { id: "home", label: nav.home },
    { id: "about", label: nav.about },
    { id: "gallery", label: nav.gallery },
    { id: "services", label: nav.services },
    { id: "process", label: nav.process },
    { id: "contact", label: nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="ornament">✦</span>
            <span>DACC</span>
            <span className="ornament">✦</span>
          </div>
          <p className="footer-tagline">{f.tagline}</p>
          <div className="contact-socials">
            <p className="socials-label">Follow Us</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/faisal_al_hind"
                className="social-link"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="social-icon"
                  style={{ verticalAlign: "middle", marginRight: "0.4em" }}
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17" cy="7" r="1.1" fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1DH9hBYwTV/"
                className="social-link"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="social-icon"
                  style={{ verticalAlign: "middle", marginRight: "0.4em" }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15.36 8.44h-1.49c-.18 0-.37.21-.37.54v1.08h1.81l-.21 1.88h-1.6v5.08h-2.03V11.94H9.61v-1.85h1.06V8.89c0-1.11.8-2.19 2.38-2.19h1.35v1.74z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">{f.quickLinks}</h4>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className="footer-link"
                  onClick={() => scrollTo(link.id)}
                >
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="subscribe-btn">
                {f.subscribe}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">{f.copyright}</p>
        <p className="made-with">
          <span className="ornament">✦</span> {f.madeWith}{" "}
          <span className="ornament">✦</span>
        </p>
      </div>
    </footer>
  );
}
