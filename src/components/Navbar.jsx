import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const { t, language, setLanguage } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = [
        "home",
        "about",
        "gallery",
        "services",
        "process",
        // "reviews",
        "contact",
      ];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "gallery", label: t.nav.gallery },
    { id: "services", label: t.nav.services },
    { id: "process", label: t.nav.process },
    // { id: "reviews", label: t.nav.reviews },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo("home")}>
          <img
            src="/image/logo.png"
            alt="Arabic Calligraphy Logo"
            className="logo-img"
          />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="lang-switcher hide-on-mobile">
            {["en", "ar", "ur"].map((lang) => (
              <button
                key={lang}
                className={`lang-btn ${language === lang ? "active" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                {lang === "en" ? "EN" : lang === "ar" ? "AR" : "UR"}
              </button>
            ))}
          </div>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-langs">
            {["en", "ar", "ur"].map((lang) => (
              <button
                key={lang}
                className={`lang-btn ${language === lang ? "active" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                {lang === "en" ? "English" : lang === "ar" ? "العربية" : "اردو"}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
