import { useLang } from "../context/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* Left Section - Contact Info */}
        <div className="contact-left">
          <p className="section-label">{c.sectionLabel}</p>
          <h2 className="section-heading">{c.heading}</h2>
          <p className="contact-sub">{c.subheading}</p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉</span>
              <div className="info-content">
                <span className="info-label">Email</span>
                <span>faisalart08@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div className="info-content">
                <span className="info-label">Phone</span>
                <span>+91 9880987187</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💬</span>
              <div className="info-content">
                <span className="info-label">WhatsApp</span>
                <span>+91 9880987187</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <span className="info-label">Address</span>
                <span>
                  No. 29/1, 3rd Cross, Old Guddadahall, Mysore Road,
                  Vinayakanagar, Bangalore-26
                </span>
              </div>
            </div>
          </div>

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

        {/* Right Section - Instagram QR */}
        <div className="contact-right">
          <div className="qr-section">
            <p className="qr-label">Follow on Instagram</p>
            <div className="qr-container">
              <img
                src="/image/insta-qr.jpg"
                alt="Instagram QR Code"
                className="qr-code"
              />
            </div>
            <p className="qr-text">Scan to follow our work</p>
            <a href="#" className="instagram-link">
              @faisla_al_hind
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
