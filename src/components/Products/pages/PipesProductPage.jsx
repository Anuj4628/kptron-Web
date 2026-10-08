import React, { useState, useMemo } from 'react';
import { PIPE_CATEGORIES } from '../../../data/pipesData';
import { Search, X, ArrowRight, Layers, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import './PipesProductPage.css';

/**
 * Clean, Dedicated Pipes Product Listing Page
 * Features exactly the 6 required pipe categories:
 * 1. Alloy Steel Pipe
 * 2. Inconel Pipe
 * 3. Monel Pipe
 * 4. Stainless Steel Pipe
 * 5. Super & Duplex Steel Pipe
 * 6. Carbon Steel Pipe
 */
export default function PipesProductPage({ onNavigate, onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (catId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return PIPE_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return PIPE_CATEGORIES.map(cat => {
      const matchCat = cat.name.toLowerCase().includes(q) ||
                       cat.shortDesc.toLowerCase().includes(q) ||
                       (cat.standards && cat.standards.toLowerCase().includes(q));

      const matchingGrades = cat.grades.filter(g =>
        g.name.toLowerCase().includes(q) ||
        (g.code && g.code.toLowerCase().includes(q)) ||
        (g.standard && g.standard.toLowerCase().includes(q)) ||
        (g.shortDesc && g.shortDesc.toLowerCase().includes(q))
      );

      if (matchCat || matchingGrades.length > 0) {
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
      onNavigate(`/products/pipes/${catSlug}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`/products/pipes/${catSlug}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-pipes-page">
      {/* 1. Header Section */}
      <section className="pipes-header-section">
        <div className="pipes-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="pipes-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Pipes</span>
          </nav>

          <div className="pipes-header-badge-row">
            <span className="pipes-badge-tag">INDUSTRIAL PIPING DIVISION</span>
            <span className="pipes-badge-count">{PIPE_CATEGORIES.length} Core Product Categories</span>
          </div>

          <h1 className="pipes-main-title">Pipes &amp; Tubes</h1>

          <p className="pipes-lead-text">
            Extensive mill inventory and precision manufactured industrial pipes conforming strictly to ASTM, ASME, DIN, EN, and API 5L specifications. Supplied in seamless, ERW, and EFW configurations with 100% PMI verification and complete EN 10204 3.1 &amp; 3.2 certification.
          </p>

          {/* Search Bar */}
          <div className="pipes-search-wrapper">
            <div className="pipes-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search pipe grades (e.g., P11, 304L, Inconel 625, A106, 2205)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pipes-search-input"
                aria-label="Search pipe grades"
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
                Found {filteredCategories.length} matching categories for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main 6-Category Products Grid (3 Columns on Desktop) */}
      <section className="pipes-grid-section">
        <div className="pipes-grid-container">
          {filteredCategories.length > 0 ? (
            <div className="pipes-cards-grid">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCards[cat.id];
                const displayGrades = searchQuery.trim() && cat.highlightGrades
                  ? cat.highlightGrades
                  : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                const remainingCount = cat.grades.length - 5;

                return (
                  <article
                    key={cat.id}
                    className="pipe-product-card"
                    onClick={() => handleCardClick(cat.slug)}
                  >
                    {/* Top Red-Orange Accent Bar */}
                    <div className="card-top-accent" aria-hidden="true" />

                    {/* Product Image Frame */}
                    <div className="card-media-wrapper">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="card-product-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-img-badge">
                        <ShieldCheck size={13} />
                        <span>MILL CERTIFIED</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="card-body">
                      <div className="card-top-info">
                        <h2 className="card-title">{cat.name}</h2>
                        
                        <div className="card-standards-line">
                          <span className="standards-label">Standards:</span>
                          <span className="standards-value">{cat.standards.split(',').slice(0, 3).join(', ')}</span>
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

                        <div className="grades-pills-list">
                          {displayGrades.map((grade) => (
                            <button
                              key={grade.id}
                              type="button"
                              className="grade-pill-btn"
                              title={`View ${grade.name} Specifications`}
                              onClick={(e) => handleGradeClick(e, cat.slug, grade.slug)}
                            >
                              <span className="pill-dot">•</span>
                              <span className="pill-text">{grade.name}</span>
                            </button>
                          ))}
                        </div>

                        {/* Show More / Show Less Toggle Button */}
                        {!searchQuery.trim() && remainingCount > 0 && (
                          <button
                            type="button"
                            className="btn-toggle-grades"
                            onClick={(e) => toggleExpand(cat.id, e)}
                          >
                            <span>{isExpanded ? 'Show Less Grades' : `+ ${remainingCount} More Grades`}</span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="card-footer-bar">
                      <span className="card-action-text">EXPLORE ALL GRADES</span>
                      <div className="card-arrow-circle" aria-hidden="true">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="pipes-empty-state">
              <h3>No pipe specifications match "{searchQuery}"</h3>
              <p>Try searching for a different grade code (such as 304, 316, P11, P22, 625, or 2205).</p>
              <button
                type="button"
                className="btn-reset-search"
                onClick={() => setSearchQuery('')}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Industrial Assistance Strip */}
      <section className="pipes-rfq-strip">
        <div className="pipes-grid-container">
          <div className="rfq-strip-box">
            <div className="rfq-strip-content">
              <span className="rfq-strip-tag">TECHNICAL INQUIRIES &amp; MILL SOURCING</span>
              <h3>Need Custom Heavy-Wall Schedules or Project Mill Runs?</h3>
              <p>
                Our metallurgy engineers provide full technical documentation, MTC 3.1 &amp; 3.2 inspections, and global export packaging.
              </p>
            </div>
            <div className="rfq-strip-actions">
              <a
                href="https://wa.me/919967616124?text=Hello%20KPTRON,%20I%20am%20inquiring%20about%20Pipes%20and%20Tubes%20specifications"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-strip-wa"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
              <button
                type="button"
                id="pipes-quote-btn"
                className="btn-strip-quote"
                onClick={() => {
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal({ product: 'Pipes & Tubes (All Grades)', source: 'Pipes Product Page' });
                  } else if (onNavigate) {
                    onNavigate('contact');
                  }
                }}
              >
                <span>Request Formal Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
