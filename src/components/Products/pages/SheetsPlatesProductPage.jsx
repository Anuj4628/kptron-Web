import React, { useState, useMemo } from 'react';
import { SHEETS_PLATES_COILS_CATEGORIES } from '../../../data/sheetsPlatesCoilsData';
import { Search, X, Layers, ShieldCheck, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import './SheetsPlatesProductPage.css';

/**
 * Dedicated Sheets, Plates & Coils Product Catalog Page
 * High-performance industrial design with 3-column desktop grid,
 * verified grade catalog, dark navy typography, and genuine mill specifications.
 */
export default function SheetsPlatesProductPage({ onNavigate }) {
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
    if (!searchQuery.trim()) return SHEETS_PLATES_COILS_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return SHEETS_PLATES_COILS_CATEGORIES.map(cat => {
      const matchCat = cat.name.toLowerCase().includes(q) ||
                       cat.shortDesc.toLowerCase().includes(q) ||
                       (cat.standards && cat.standards.toLowerCase().includes(q)) ||
                       (cat.finishes && cat.finishes.toLowerCase().includes(q));

      const matchingGrades = cat.grades.filter(g =>
        g.name.toLowerCase().includes(q) ||
        (g.code && g.code.toLowerCase().includes(q)) ||
        (g.standard && g.standard.toLowerCase().includes(q)) ||
        (g.shortDesc && g.shortDesc.toLowerCase().includes(q)) ||
        (g.uns && g.uns.toLowerCase().includes(q))
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
      onNavigate(`/products/sheets-plates-coils/${catSlug}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`/products/sheets-plates-coils/${catSlug}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-sheets-page">
      {/* 1. Header & Breadcrumb Section */}
      <section className="sheets-header-section">
        <div className="sheets-header-container">
          {/* Breadcrumb Navigation */}
          <nav className="sheets-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Sheets, Plates &amp; Coils</span>
          </nav>

          <div className="sheets-header-badge-row">
            <span className="sheets-badge-tag">FLAT ROLLED STEEL &amp; HIGH ALLOY DIVISION</span>
            <span className="sheets-badge-count">{SHEETS_PLATES_COILS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="sheets-main-title">Sheets, Plates &amp; Coils</h1>

          <p className="sheets-lead-text">
            Extensive mill supply of cold-rolled sheets, heavy hot-rolled pressure vessel plates, and precision slit coils in Stainless Steel, Super &amp; Duplex, Carbon Steel, Alloy Steel, Inconel, Hastelloy, and Titanium. Conforming strictly to ASTM, ASME, EN 10028, and IS specifications with EN 10204 3.1 &amp; 3.2 mill test certifications.
          </p>

          {/* Quick Specifications Strip */}
          <div className="sheets-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Thickness Range:</strong> 0.4 mm to 120 mm
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Finishes:</strong> 2B, No. 1, No. 4 Satin, BA, Chequered
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Verification:</strong> 100% PMI &amp; Ultrasonic Tested
            </div>
          </div>

          {/* Search Bar */}
          <div className="sheets-search-wrapper">
            <div className="sheets-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search sheets, plates & coils (e.g., 304L, A516 Gr 70, A387, Inconel 625, Titanium Gr 5)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sheets-search-input"
                aria-label="Search sheets, plates and coils grades"
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

      {/* 2. Main 7-Category Products Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <section className="sheets-grid-section">
        <div className="sheets-grid-container">
          {filteredCategories.length > 0 ? (
            <div className="sheets-cards-grid">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCards[cat.id];
                const displayGrades = searchQuery.trim() && cat.highlightGrades
                  ? cat.highlightGrades
                  : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                const remainingCount = cat.grades.length - 5;

                return (
                  <article
                    key={cat.id}
                    className="sheet-product-card"
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
                            aria-expanded={isExpanded}
                          >
                            <span>
                              {isExpanded ? 'Show Fewer Grades' : `+ ${remainingCount} More Grades`}
                            </span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>

                      {/* Card Action Button */}
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
            <div className="sheets-no-results">
              <h3>No Material Specifications Found</h3>
              <p>We could not find any sheets, plates or coils matching "{searchQuery}".</p>
              <button
                type="button"
                className="btn-reset-search"
                onClick={() => setSearchQuery('')}
              >
                Reset Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Information & Supply Capabilities */}
      <section className="sheets-features-bar">
        <div className="sheets-features-container">
          <div className="feature-item">
            <ShieldCheck size={20} className="feature-icon" />
            <div>
              <div className="feature-title">Prime Certified Material</div>
              <div className="feature-sub">Complete EN 10204 3.1 &amp; 3.2 MTC with full trace chemical &amp; physical testing</div>
            </div>
          </div>
          <div className="feature-item">
            <Sparkles size={20} className="feature-icon" />
            <div>
              <div className="feature-title">Precision Processing</div>
              <div className="feature-sub">Custom shearing, plasma &amp; laser cutting, de-coiling and surface polishing</div>
            </div>
          </div>
          <div className="feature-item">
            <CheckCircle2 size={20} className="feature-icon" />
            <div>
              <div className="feature-title">Rapid Export Dispatch</div>
              <div className="feature-sub">Wooden pallet &amp; seaworthy steel strapped packing ready for immediate export</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
