import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * SpecialistProductCard
 * Follows the existing website's vertical industrial product card aesthetic.
 * Clean, readable, balanced height, and fully interactive.
 */
function SpecialistProductCard({ product, onNavigate }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (e) => {
    if (product?.route && onNavigate) {
      e.preventDefault();
      onNavigate(product.route);
    }
  };

  return (
    <article
      className="product-card specialist-card"
      tabIndex={0}
      aria-label={product.name}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
    >
      {/* 1. Technical Visual Area */}
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.alt || product.name}
          className={`product-card-img ${imageLoaded ? 'is-loaded' : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="product-card-overlay" aria-hidden="true" />

        {/* Floating Standard Badge (Top-Left) */}
        {product.standard && (
          <div className="product-spec-badge">
            <span className="badge-pulse-dot" aria-hidden="true" />
            <span className="badge-text">{product.standard}</span>
          </div>
        )}

        {/* Specialist Division Chip (Top-Right) */}
        <div className="product-division-chip specialist-chip">
          <span className="division-chip-text">SPECIALIST ALLOY</span>
        </div>

        {/* Bottom Image Hairline Seam */}
        <div className="product-image-seam" aria-hidden="true" />
      </div>

      {/* 2. Structured Technical Body */}
      <div className="product-card-body">
        <div className="product-title-group">
          <h3 className="product-name">
            <a
              href={product.route || '/products'}
              className="product-name-link"
              onClick={handleClick}
            >
              {product.name}
            </a>
          </h3>

          {/* Grades String */}
          {product.grades && (
            <div className="specialist-grades-badge">
              <span className="grades-badge-label">Available Grades:</span>
              <span className="grades-badge-text">{product.grades}</span>
            </div>
          )}

          {/* Short Technical Description */}
          {product.shortDesc && (
            <p className="specialist-desc-text">{product.shortDesc}</p>
          )}
        </div>

        {/* Card Footer Bar */}
        <div className="product-card-bottom-bar">
          <span className="product-action-label">VIEW DETAILS</span>
          <a
            href={product.route || '/products'}
            className="product-explore-btn"
            aria-label={`View ${product.name} specification`}
            onClick={handleClick}
          >
            <ArrowUpRight size={17} className="explore-icon" />
          </a>
        </div>
      </div>

      {/* Laser Hover Line */}
      <div className="product-card-hover-line" aria-hidden="true" />
    </article>
  );
}

export default React.memo(SpecialistProductCard);
