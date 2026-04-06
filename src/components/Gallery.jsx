import React, { useState } from "react";
import { useLang } from "../context/LanguageContext";
import "./Gallery.css";

const GALLERY_DATA = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    en: "Bismillah",
    style: "Thuluth",
    size: "large",
    url: "/image/Thuluth-1.jpg",
  },
  {
    id: 2,
    arabic: "الصَّبْرُ مِفْتَاحُ الْفَرَجِ",
    en: "Patience is Key",
    style: "Naskh",
    size: "small",
    url: "/image/Naskh-1.jpg",
  },
  {
    id: 3,
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    en: "Quranic Verse",
    style: "Naskh",
    size: "small",
    url: "/image/Naskh-2.jpg",
  },
  {
    id: 4,
    arabic: "الْحُبُّ وَالسَّلَامُ",
    en: "Love & Peace",
    style: "Nastaliq",
    size: "medium",
    url: "/image/Nastaliq-1.jpg",
  },
  {
    id: 5,
    arabic: "يَا رَبِّ",
    en: "O Lord",
    style: "Ruq'ah",
    size: "medium",
    url: "/image/ Ruqah-1.jpg",
  },
  {
    id: 6,
    arabic: "أَهْلاً وَسَهْلاً",
    en: "Welcome",
    style: "Ruq'ah",
    size: "large",
    url: "/image/ Ruqah-2.jpg",
  },
  {
    id: 7,
    arabic: "الْأَمَلُ",
    en: "Hope",
    style: "Thuluth",
    size: "small",
    url: "/image/Thuluth-2.jpg",
  },
  {
    id: 8,
    arabic: "نُورٌ عَلَى نُورٍ",
    en: "Light upon Light",
    style: "Nastaliq",
    size: "small",
    url: "/image/Nastaliq-2.jpg",
  },
];

const PALETTES = [
  { bg: "#1A1200", accent: "#C9A84C" },
  { bg: "#0A1520", accent: "#7AADCA" },
  { bg: "#150A20", accent: "#C97AB5" },
  { bg: "#0A1A10", accent: "#7AC98A" },
  { bg: "#1A0A0A", accent: "#C97A7A" },
  { bg: "#151510", accent: "#C9C07A" },
  { bg: "#0A1518", accent: "#7AC9C0" },
  { bg: "#18100A", accent: "#C9A07A" },
];

const STYLE_FILTERS = ["Thuluth", "Naskh", "Nastaliq", "Ruq'ah"];

function Gallery({ t, onViewAllClick }) {
  const { t: langT } = useLang();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.style === filter);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="section-tag">
            <span>✦</span> Gallery <span>✦</span>
          </div>
          <h2 className="gallery-heading">
            <span className="gh-en">Calligraphy Works</span>
            <span className="gh-ar">أجمل الأعمال</span>
          </h2>
          <p className="gallery-sub">
            A collection of handcrafted calligraphy — each stroke a meditation
          </p>
        </div>

        <div className="gallery-filters">
          <button
            className={"filter-btn" + (filter === "all" ? " active" : "")}
            onClick={() => setFilter("all")}
          >
            All Works
          </button>
          {STYLE_FILTERS.map((s) => (
            <button
              key={s}
              className={"filter-btn" + (filter === s ? " active" : "")}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => {
            const p = PALETTES[item.id % PALETTES.length];
            return (
              <div
                key={item.id}
                className={"gallery-card size-" + item.size}
                style={{
                  "--card-bg": p.bg,
                  "--card-accent": p.accent,
                  animationDelay: i * 0.08 + "s",
                }}
                // onClick={() => setLightbox({ item, palette: p })}
              >
                <div className="card-art">
                  {item.url && (
                    <img src={item.url} alt={item.en} className="card-image" />
                  )}
                  <div className="card-geo-bg" />
                  {/* <span className="card-arabic-text">{item.style}</span> */}
                  <div className="card-corners">
                    <span className="cc tl" />
                    <span className="cc tr" />
                    <span className="cc bl" />
                    <span className="cc br" />
                  </div>
                </div>
                <div className="card-info">
                  {/* <span className="card-title-text">{item.arabic}</span> */}
                  <span className="card-meta">{item.style}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="gallery-footer">
          <button 
            className="view-all-btn"
            onClick={onViewAllClick}
          >
            View All Arts Work
          </button>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <div
              className="lightbox-art"
              style={{
                background: lightbox.palette.bg,
                color: lightbox.palette.accent,
              }}
            >
              {lightbox.item.url && (
                <img
                  src={lightbox.item.url}
                  alt={lightbox.item.en}
                  className="lightbox-image"
                />
              )}
              <span>{lightbox.item.arabic}</span>
            </div>
            <div className="lightbox-info">
              <h3>{lightbox.item.arabic}</h3>
              <p>{lightbox.item.en}</p>
              <span className="lb-style-tag">{lightbox.item.style} Style</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
