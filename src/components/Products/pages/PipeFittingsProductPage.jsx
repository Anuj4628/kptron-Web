import React, { useState, useMemo } from 'react';
import { PIPE_FITTINGS_CATEGORIES } from '../../../data/pipeFittingsData';
import { Search, X, Layers, ChevronDown, ChevronUp, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './PipeFittingsProductPage.css';

/**
 * Dedicated Pipe Fittings Product Collection Page
 * Strictly adheres to the established design system:
 * - 3-column grid on desktop, 2 on tablet, 1 on mobile
 * - Top product image with crisp object-cover treatment
 * - Product Title & Standards metadata block
 * - Technical description snippet
 * - AVAILABLE GRADES (count) with Layers icon
 * - Individual grade pills with orange square bullet and uppercase text
 * - "+ X More Grades ∨" natural expander toggle
 * - Bottom full-width "View All Specifications" action button
 */
export default function PipeFittingsProductPage({ onNavigate, onOpenQuoteModal }) {
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
    if (!searchQuery.trim()) return PIPE_FITTINGS_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return PIPE_FITTINGS_CATEGORIES.map(cat => {
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
      onNavigate(`/products/pipe-fittings/${catSlug}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`/products/pipe-fittings/${catSlug}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-fittings-page">
      {/* 1. Header & Breadcrumb Section */}
      <section className="fittings-header-section">
        <div className="fittings-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="fittings-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Pipe Fittings</span>
          </nav>

          <div className="fittings-header-badge-row">
            <span className="fittings-badge-tag">PRESSURE PIPING &amp; FORGED FITTINGS DIVISION</span>
            <span className="fittings-badge-count">{PIPE_FITTINGS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="fittings-main-title">Pipe Fittings</h1>

          <p className="fittings-lead-text">
            Precision factory-manufactured butt-weld and high-pressure forged pipe fittings in Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy, Nickel, Copper Nickel, and Titanium. Conforming strictly to ASME B16.9, ASME B16.11, MSS SP-75, and ASTM A234 / A403 with EN 10204 3.1 &amp; 3.2 mill test certifications.
          </p>

          {/* Quick Specifications Strip */}
          <div className="fittings-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Size Spectrum:</strong> 1/2" NB to 60" NB (Seamless &amp; Welded) | Forged: 1/8" to 4" NB
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Pressure &amp; Schedules:</strong> SCH 10S to SCH XXS | Class 2000#, 3000#, 6000#, 9000#
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Configurations:</strong> 45°/90° Elbows, Tees, Reducers, End Caps, Stub Ends, Unions
            </div>
          </div>

          {/* Search Bar */}
          <div className="fittings-search-wrapper">
            <div className="fittings-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search fittings & grades (e.g., SS 304, WPB, WP91, Inconel, Monel, Hastelloy)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="fittings-search-input"
                aria-label="Search pipe fittings and grades"
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

      {/* 2. Main 9-Category Products Grid (Exact Match to Design System) */}
      <section className="fittings-grid-section">
        <div className="fittings-grid-container">
          {filteredCategories.length > 0 ? (
            <div className="fittings-cards-grid">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCards[cat.id];
                const displayGrades = searchQuery.trim() && cat.highlightGrades
                  ? cat.highlightGrades
                  : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                const remainingCount = cat.grades.length - 5;

                return (
                  <article
                    key={cat.id}
                    className="fitting-product-card"
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
                              {isExpanded ? 'Show Less Grades' : `+ ${remainingCount} More Grades`}
                            </span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>

                      {/* Bottom Action Button */}
                      <div className="card-action-box">
                        <button
                          type="button"
                          className="btn-card-specs"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(cat.slug);
                          }}
                        >
                          <span>View All Specifications</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="fittings-empty-state">
              <p>No pipe fitting products matched your search term <strong>"{searchQuery}"</strong>.</p>
              <button
                type="button"
                className="btn-clear-search-empty"
                onClick={() => setSearchQuery('')}
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Consultation & Quick RFQ Banner */}
      <section className="fittings-bottom-banner">
        <div className="fittings-bottom-container">
          <div className="banner-left">
            <span className="banner-tag">HIGH-INTEGRITY PIPING SOLUTIONS</span>
            <h3 className="banner-title">Need Custom Fitting Dimensions, Heavy Walls or Urgent Mill Dispatch?</h3>
            <p className="banner-desc">
              We stock and supply standard and non-standard ASME B16.9 butt-weld elbows, reducing tees, concentric reducers, and high-pressure forged fittings with complete EN 10204 3.1 &amp; 3.2 certification, radiography (RT), and 100% PMI verification.
            </p>
          </div>
          <div className="banner-right">
            <button
              type="button"
              id="fittings-quote-btn"
              className="banner-rfq-btn"
              onClick={() => {
                if (onOpenQuoteModal) {
                  onOpenQuoteModal({ product: 'Pipe Fittings & Butt Weld Fittings', source: 'Pipe Fittings Page' });
                } else if (onNavigate) {
                  onNavigate('/contact');
                }
              }}
            >
              <span>Submit RFQ / Inquiry</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
