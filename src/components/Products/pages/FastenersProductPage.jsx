import React, { useState, useMemo } from 'react';
import { FASTENERS_CATEGORIES } from '../../../data/fastenersData';
import { Search, X, Layers, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import './FastenersProductPage.css';

/**
 * Dedicated Fasteners Product Collection Page
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
export default function FastenersProductPage({ onNavigate, onOpenQuoteModal }) {
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
    if (!searchQuery.trim()) return FASTENERS_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return FASTENERS_CATEGORIES.map(cat => {
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
      onNavigate(`/products/fasteners/${catSlug}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`/products/fasteners/${catSlug}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-fasteners-page">
      {/* 1. Header & Breadcrumb Section */}
      <section className="fasteners-header-section">
        <div className="fasteners-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="fasteners-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Fasteners</span>
          </nav>

          <div className="fasteners-header-badge-row">
            <span className="fasteners-badge-tag">HIGH TENSILE BOLTING &amp; FASTENERS DIVISION</span>
            <span className="fasteners-badge-count">{FASTENERS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="fasteners-main-title">Fasteners</h1>

          <p className="fasteners-lead-text">
            High-tensile industrial fasteners, continuous-threaded stud bolts, heavy hex nuts, socket screws, and refractory anchors in Stainless Steel, Duplex &amp; Super Duplex, Alloy Steel (B7, B16, 8.8), Inconel, Monel, Hastelloy, Nickel, Copper Nickel, Titanium, and Heat-Resistant Refractory Alloys. Conforming strictly to ASTM A193, ASTM A194, ASTM A320, DIN, and ISO specifications with EN 10204 3.1 &amp; 3.2 mill test certifications.
          </p>

          {/* Quick Specifications Strip */}
          <div className="fasteners-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Diameter Spectrum:</strong> M3 to M100 | 1/4" to 4" Diameter (Custom Cut-to-Length)
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Standards &amp; Grades:</strong> ASTM A193 B7/B16/B8/B8M, A194 2H/8, Class 8.8/10.9/12.9
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Coating Options:</strong> PTFE / Xylan Blue, Hot Dip Galvanized, Cadmium, Zinc-Nickel
            </div>
          </div>

          {/* Search Bar */}
          <div className="fasteners-search-wrapper">
            <div className="fasteners-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search fasteners & grades (e.g., B7, B16, SS 316, Inconel 625, Refractory Anchor)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="fasteners-search-input"
                aria-label="Search fasteners and grades"
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

      {/* 2. Main 10-Category Products Grid (Exact Match to Design System) */}
      <section className="fasteners-grid-section">
        <div className="fasteners-grid-container">
          {filteredCategories.length > 0 ? (
            <div className="fasteners-cards-grid">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCards[cat.id];
                const displayGrades = searchQuery.trim() && cat.highlightGrades
                  ? cat.highlightGrades
                  : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                const remainingCount = cat.grades.length - 5;

                return (
                  <article
                    key={cat.id}
                    className="fastener-product-card"
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
            <div className="fasteners-empty-state">
              <p>No fasteners matched your search term <strong>"{searchQuery}"</strong>.</p>
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
      <section className="fasteners-bottom-banner">
        <div className="fasteners-bottom-container">
          <div className="banner-left">
            <span className="banner-tag">HIGH-INTEGRITY BOLTING SOLUTIONS</span>
            <h3 className="banner-title">Need Custom Stud Lengths, PTFE Coating or High-Temp Furnace Anchors?</h3>
            <p className="banner-desc">
              We manufacture precision stud bolts, high-tensile structural bolts, heavy nuts, and ceramic fiber refractory anchors with full chemical analysis, tensile testing, Charpy V-notch verification, and EN 10204 3.1 &amp; 3.2 mill test certifications.
            </p>
          </div>
          <div className="banner-right">
            <button
              type="button"
              id="fasteners-quote-btn"
              className="banner-rfq-btn"
              onClick={() => {
                if (onOpenQuoteModal) {
                  onOpenQuoteModal({ product: 'Industrial Fasteners & Bolting (All Types)', source: 'Fasteners Product Page' });
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
