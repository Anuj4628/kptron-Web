import React, { useState, useMemo } from 'react';
import { BARS_CATEGORIES } from '../../../data/barsData';
import { Search, X, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import './BarsProductPage.css';

/**
 * Dedicated Bars Product Collection Page
 * Matches the exact card design system from the Sheets, Plates & Coils reference screenshot:
 * - Clean full-width product image
 * - Product Title
 * - STANDARDS: metadata block
 * - Technical description snippet
 * - AVAILABLE GRADES (count) with orange Layers icon
 * - Clean individual grade pills with orange square dot and uppercase text
 * - Direct navigation to grade description pages
 * - "+ X More Grades ∨" expander toggle
 * - Full-width "View All Specifications" bottom action button
 */
export default function BarsProductPage({ onNavigate, onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (catId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Filter categories and grades based on real-time search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return BARS_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return BARS_CATEGORIES.map(cat => {
      const matchTitle = cat.title.toLowerCase().includes(q) ||
                         cat.name.toLowerCase().includes(q) ||
                         (cat.standards && cat.standards.toLowerCase().includes(q)) ||
                         (cat.shortDesc && cat.shortDesc.toLowerCase().includes(q));

      const matchingGrades = cat.grades.filter(grade => {
        const gradeName = typeof grade === 'string' ? grade : grade.name;
        return gradeName.toLowerCase().includes(q);
      });

      if (matchTitle || matchingGrades.length > 0) {
        return {
          ...cat,
          highlightGrades: matchingGrades.length > 0 ? matchingGrades : null
        };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  const handleCardClick = (catSlug) => {
    if (onNavigate) {
      onNavigate(`/products/bars/${catSlug}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`/products/bars/${catSlug}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-bars-page">
      {/* 1. Header & Breadcrumb Section */}
      <section className="bars-header-section">
        <div className="bars-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="bars-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Bars</span>
          </nav>

          <div className="bars-header-badge-row">
            <span className="bars-badge-tag">PRECISION SOLID BARS &amp; SHAFTING DIVISION</span>
            <span className="bars-badge-count">{BARS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="bars-main-title">Bars</h1>

          <p className="bars-lead-text">
            Extensive mill inventory and precision manufactured solid round bars, hex bars, and square bars in Stainless Steel, Super &amp; Duplex Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy, Nickel, Copper Nickel, Titanium, and Maraging steel grades. Conforming strictly to ASTM A276, ASTM A479, ASTM A182, DIN 1013, and EN 10088-3 with complete EN 10204 3.1 &amp; 3.2 mill test certifications.
          </p>

          {/* Quick Specifications Strip */}
          <div className="bars-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Diameter Range:</strong> 2 mm to 350 mm Dia (Round, Hex, Square)
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Supply Conditions:</strong> Cold Drawn, Centerless Ground, Peeled, Rough Turned, Forged
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Quality Assurance:</strong> 100% Ultrasonic &amp; PMI Tested, EN 10204 3.1 MTC
            </div>
          </div>

          {/* Search Bar */}
          <div className="bars-search-wrapper">
            <div className="bars-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search bars & grades (e.g., SS 316L, 17-4 PH, F91, Inconel 718, Maraging 350)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bars-search-input"
                aria-label="Search bars and grades"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="search-indicator-text">
                Found {filteredCategories.length} matching material categories for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main 11-Category Products Grid (Exact Match to Reference Screenshot) */}
      <section className="bars-grid-section">
        <div className="bars-grid-container">
          {filteredCategories.length > 0 ? (
            <div className="bars-cards-grid">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCards[cat.id];
                const displayGrades = searchQuery.trim() && cat.highlightGrades
                  ? cat.highlightGrades
                  : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                const remainingCount = cat.grades.length - 5;

                return (
                  <article
                    key={cat.id}
                    className="bar-product-card"
                    onClick={() => handleCardClick(cat.slug)}
                  >
                    {/* Top Red-Orange Accent Bar */}
                    <div className="card-top-accent" aria-hidden="true" />

                    {/* 1. Large Product Image on Top */}
                    <div className="card-media-wrapper">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="card-product-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* 2. Card Content Body */}
                    <div className="card-body">
                      {/* Product Title & Standards */}
                      <div className="card-top-info">
                        <h2 className="card-title">{cat.title}</h2>

                        <div className="card-standards-line">
                          <span className="standards-label">STANDARDS:</span>
                          <span className="standards-value">{cat.standards}</span>
                        </div>

                        <p className="card-desc">{cat.shortDesc}</p>
                      </div>

                      {/* Available Grades Section */}
                      <div className="card-grades-section">
                        <div className="grades-header-row">
                          <span className="grades-heading-label">
                            <Layers size={13} className="label-icon" />
                            AVAILABLE GRADES ({cat.grades.length})
                          </span>
                        </div>

                        {/* Grade Pills List with Orange Dot and Uppercase Text */}
                        <div className="grades-pills-list">
                          {displayGrades.map((gradeItem, idx) => {
                            const gradeName = typeof gradeItem === 'string' ? gradeItem : gradeItem.name;
                            const gradeSlug = typeof gradeItem === 'string' 
                              ? (cat.grades.find(g => (typeof g === 'object' && g.name === gradeItem))?.slug || gradeItem.toLowerCase().replace(/[^a-z0-9]+/g, '-')) 
                              : gradeItem.slug;

                            return (
                              <button
                                key={idx}
                                type="button"
                                className="grade-pill-btn"
                                title={`View ${gradeName} Specifications`}
                                onClick={(e) => handleGradeClick(e, cat.slug, gradeSlug)}
                              >
                                <span className="pill-dot" aria-hidden="true">▪</span>
                                <span className="pill-text">{gradeName.toUpperCase()}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Show More / Show Less Toggle Button */}
                        {!searchQuery.trim() && remainingCount > 0 && (
                          <button
                            type="button"
                            className="btn-toggle-grades"
                            onClick={(e) => toggleExpand(cat.id, e)}
                            aria-expanded={isExpanded}
                          >
                            <span>
                              {isExpanded ? 'Show Fewer Grades' : `+ ${remainingCount} More Grades`}
                            </span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>

                      {/* Card Action Button: Full Width "View All Specifications" */}
                      <div className="card-footer-action">
                        <button
                          type="button"
                          className="btn-card-explore"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(cat.slug);
                          }}
                        >
                          View All Specifications
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="bars-no-results">
              <p>No bars or grades matching "{searchQuery}"</p>
              <button
                type="button"
                className="btn-reset-search"
                onClick={() => setSearchQuery('')}
              >
                Clear Search &amp; View All Bars
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Mill Trust & RFQ Banner */}
      <section className="bars-bottom-banner-section">
        <div className="bars-bottom-banner-container">
          <div className="bottom-banner-content">
            <div className="banner-badge">DIRECT MILL SOURCE &amp; STOCKIST</div>
            <h2 className="banner-title">Need Custom Cut Lengths or Precision Ground Tolerances?</h2>
            <p className="banner-desc">
              All bars are supplied with original mill test certificates (EN 10204 3.1 &amp; 3.2), full heat traceability, ultrasonic inspection reports, and custom cut-to-length service upon request.
            </p>
          </div>
          <div className="banner-actions">
            <button
              type="button"
              id="bars-quote-btn"
              className="btn-banner-rfq"
              onClick={() => {
                if (onOpenQuoteModal) {
                  onOpenQuoteModal({ product: 'Steel Bars & Rods (All Grades)', source: 'Bars Product Page' });
                } else if (onNavigate) {
                  onNavigate('/contact?product=Bars');
                }
              }}
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
