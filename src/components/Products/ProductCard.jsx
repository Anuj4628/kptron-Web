import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

function ProductCard({ product, onNavigate }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (e) => {
    if (product?.route && onNavigate) {
      e.preventDefault();
      onNavigate(product.route);
    }
  };

  const standardCode = product.specTag ? product.specTag.split('//')[0].trim() : null;
  const specSubText = product.specTag && product.specTag.includes('//') ? product.specTag.split('//')[1].trim() : null;
  const divisionLabel = product.route && product.route.includes('/manufacturer/') ? 'MANUFACTURING' : 'SUPPLIER DIV';

  return (
    <article
      className="product-card"
      tabIndex={0}
      aria-label={product.name}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
    >
      {/* 1. High-Impact Technical Visual Image Area (~62% height) */}
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
        
        {/* Floating Technical Specification Badge in Top-Left */}
        {standardCode && (
          <div className="product-spec-badge">
            <span className="badge-pulse-dot" aria-hidden="true" />
            <span className="badge-text">{standardCode}</span>
          </div>
        )}

        {/* Division Indicator in Top-Right */}
        <div className="product-division-chip">
          <span className="division-chip-text">{divisionLabel}</span>
        </div>

        {/* Bottom Image Hairline Seam */}
        <div className="product-image-seam" aria-hidden="true" />
      </div>

      {/* 2. Structured Lower Engineering Panel */}
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
          {specSubText && (
            <p className="product-spec-sub">{specSubText}</p>
          )}
        </div>

        <div className="product-card-bottom-bar">
          <span className="product-action-label">EXPLORE SPECS</span>
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

      {/* Precision Bottom Hover Laser Accent */}
      <div className="product-card-hover-line" aria-hidden="true" />
    </article>
  );
}

export default React.memo(ProductCard);

