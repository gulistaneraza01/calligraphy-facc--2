import React, { useState } from "react";
import "./AllArtwork.css";

const IMAGES_PER_PAGE = 12;

const SIZES = ["large", "small", "medium"];

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

function AllArtwork({ onBackToHome, t = {} }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Generate image array from 1 to 107 with random sizes
  const allImages = Array.from({ length: 107 }, (_, i) => ({
    id: i + 1,
    filename: `${i + 1}.JPG`,
    url: `/image/showcase/${i + 1}.JPG`,
    size: SIZES[Math.floor(Math.random() * SIZES.length)],
  }));

  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = allImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section className="all-artwork">
      <div className="all-artwork-container">
        <div className="artwork-header">
          <div className="artwork-title-section">
            <h1 className="artwork-title">All Artwork Collection</h1>
            <p className="artwork-subtitle">
              Explore our complete collection of {allImages.length} calligraphic
              works
            </p>
          </div>
          <button className="back-to-home-btn" onClick={onBackToHome}>
            ← Back to Home
          </button>
        </div>

        <div className="artwork-grid">
          {currentImages.map((image, i) => {
            const p = PALETTES[image.id % PALETTES.length];
            return (
              <div
                key={image.id}
                className={`artwork-card size-${image.size}`}
                style={{
                  "--card-bg": p.bg,
                  "--card-accent": p.accent,
                  animationDelay: i * 0.08 + "s",
                }}
              >
                <div className="card-art">
                  {image.url && (
                    <img
                      src={image.url}
                      alt={`Artwork ${image.id}`}
                      className="card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                  <div className="card-geo-bg" />
                  <div className="card-corners">
                    <span className="cc tl" />
                    <span className="cc tr" />
                    <span className="cc bl" />
                    <span className="cc br" />
                  </div>
                </div>
                <div className="card-info">
                  <span className="card-meta">#{image.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pagination">
          <button
            className="pagination-btn prev-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className="pagination-numbers">
            {getPageNumbers().map((page, idx) => (
              <button
                key={idx}
                className={`page-number ${
                  page === currentPage ? "active" : ""
                } ${page === "..." ? "ellipsis" : ""}`}
                onClick={() =>
                  typeof page === "number" && handlePageClick(page)
                }
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="pagination-btn next-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>

        <div className="pagination-info">
          <p>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>{" "}
            (Showing {currentImages.length} of {allImages.length} images)
          </p>
        </div>
      </div>
    </section>
  );
}

export default AllArtwork;
