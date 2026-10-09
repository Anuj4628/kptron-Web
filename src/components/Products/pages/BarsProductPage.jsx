import React, { useState, useMemo, useEffect } from 'react';
import { 
  BARS_CATEGORIES, 
  getBarsCategoryBySlug, 
  getBarsMaterialList 
} from '../../../data/barsData';
import ProductMaterialFilterBar from '../ProductMaterialFilterBar';
import { Search, X, Layers, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import './BarsProductPage.css';

/**
 * Dedicated Bars Product Collection Page
 * Supports 3-level material hierarchy, material-specific visuals, and direct SEO URLs.
 */
export default function BarsProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(
    materialSlug ? materialSlug.toLowerCase().trim() : 'all'
  );

  useEffect(() => {
    if (materialSlug) {
      setSelectedMaterial(materialSlug.toLowerCase().trim());
    } else {
      setSelectedMaterial('all');
    }
  }, [materialSlug]);

  const materialsList = useMemo(() => {
    return getBarsMaterialList();
  }, []);

  const activeMaterialObj = useMemo(() => {
    if (!selectedMaterial || selectedMaterial === 'all') return null;
    const cat = getBarsCategoryBySlug(selectedMaterial);
    if (cat) return { slug: cat.materialSlug || selectedMaterial, name: cat.materialName || cat.name };
    const found = materialsList.find(m => m.slug === selectedMaterial);
    return found || null;
  }, [selectedMaterial, materialsList]);

  useEffect(() => {
    const matName = activeMaterialObj ? activeMaterialObj.name : 'Precision Solid';
    document.title = isManufacturedInMumbai
      ? `${matName} Bars & Rods Manufactured in Mumbai | Redcore Steels`
      : `${matName} Round Bars, Hex & Flat Bars | ASTM A276 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeMaterialObj]);

  const toggleExpand = (catId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleSelectMaterial = (matSlug) => {
    setSelectedMaterial(matSlug);
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      if (matSlug === 'all') {
        onNavigate(`/products/bars${suffix}`);
      } else {
        onNavigate(`/products/bars/${matSlug}${suffix}`);
      }
    }
  };

  // Filter categories and grades based on selected material & real-time search
  const filteredCategories = useMemo(() => {
    let list = BARS_CATEGORIES;

    if (selectedMaterial && selectedMaterial !== 'all') {
      const targetCat = getBarsCategoryBySlug(selectedMaterial);
      if (targetCat) {
        list = list.filter(cat => cat.id === targetCat.id || cat.slug === targetCat.slug);
      }
    }

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();

    return list.map(cat => {
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
  }, [searchQuery, selectedMaterial]);

  const handleCardClick = (catSlug) => {
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/bars/${catSlug}${suffix}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/bars/${catSlug}/${gradeSlug}${suffix}`);
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
            <span 
              className={activeMaterialObj ? "crumb-link" : "crumb-current"} 
              onClick={() => activeMaterialObj && handleSelectMaterial('all')}
            >
              Bars
            </span>
            {activeMaterialObj && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activeMaterialObj.name}</span>
              </>
            )}
          </nav>

          <div className="bars-header-badge-row">
            <span className="bars-badge-tag">PRECISION SOLID BARS &amp; SHAFTING DIVISION</span>
            {isManufacturedInMumbai && (
              <span className="bars-badge-mumbai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '3px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="bars-badge-count">{BARS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="bars-main-title">
            {activeMaterialObj ? `${activeMaterialObj.name} Bars & Rods` : 'Bars & Rods'}
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

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

          {/* Material Filter Bar */}
          <ProductMaterialFilterBar
            materials={materialsList}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={handleSelectMaterial}
            categoryName="Bars & Rods"
          />

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
