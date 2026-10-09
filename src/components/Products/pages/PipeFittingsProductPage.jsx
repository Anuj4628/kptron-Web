import React, { useState, useMemo, useEffect } from 'react';
import { 
  PIPE_FITTINGS_CATEGORIES, 
  getPipeFittingsCategoryBySlug, 
  getPipeFittingsMaterialList 
} from '../../../data/pipeFittingsData';
import ProductMaterialFilterBar from '../ProductMaterialFilterBar';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import { Search, X, Layers, ChevronDown, ChevronUp, FileText, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import './PipeFittingsProductPage.css';

/**
 * Dedicated Pipe Fittings Product Collection Page
 * Supports 3-level material hierarchy, material-specific visuals, and direct SEO URLs.
 */
export default function PipeFittingsProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Pipe Fittings" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="pipe-fittings"
        categoryName="Pipe Fittings"
        mainHeading="Materials in Pipe Fittings"
        leadText="Seamless and welded buttweld pipe fittings and high-pressure forged fittings including 45°/90° elbows, equal tees, reducers, and stub ends conforming to ASME B16.9 and B16.11."
        materials={PIPE_FITTINGS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(
    materialSlug.toLowerCase().trim()
  );

  useEffect(() => {
    if (materialSlug) {
      setSelectedMaterial(materialSlug.toLowerCase().trim());
    } else {
      setSelectedMaterial('all');
    }
  }, [materialSlug]);

  const materialsList = useMemo(() => {
    return getPipeFittingsMaterialList();
  }, []);

  const activeMaterialObj = useMemo(() => {
    if (!selectedMaterial || selectedMaterial === 'all') return null;
    const cat = getPipeFittingsCategoryBySlug(selectedMaterial);
    if (cat) return { slug: cat.materialSlug || selectedMaterial, name: cat.materialName || cat.name };
    const found = materialsList.find(m => m.slug === selectedMaterial);
    return found || null;
  }, [selectedMaterial, materialsList]);

  useEffect(() => {
    const matName = activeMaterialObj ? activeMaterialObj.name : 'Buttweld & Forged';
    document.title = isManufacturedInMumbai
      ? `${matName} Pipe Fittings Manufactured in Mumbai | Redcore Steels`
      : `${matName} Pipe Fittings | ASME B16.9 / B16.11 | Redcore Steels`;
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
        onNavigate(`/products/pipe-fittings${suffix}`);
      } else {
        onNavigate(`/products/pipe-fittings/${matSlug}${suffix}`);
      }
    }
  };

  // Filter categories and grades based on selected material & real-time search
  const filteredCategories = useMemo(() => {
    let list = PIPE_FITTINGS_CATEGORIES;

    if (selectedMaterial && selectedMaterial !== 'all') {
      const targetCat = getPipeFittingsCategoryBySlug(selectedMaterial);
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
      onNavigate(`/products/pipe-fittings/${catSlug}${suffix}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/pipe-fittings/${catSlug}/${gradeSlug}${suffix}`);
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
            <span 
              className={activeMaterialObj ? "crumb-link" : "crumb-current"} 
              onClick={() => activeMaterialObj && handleSelectMaterial('all')}
            >
              Pipe Fittings
            </span>
            {activeMaterialObj && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activeMaterialObj.name}</span>
              </>
            )}
          </nav>

          <div className="fittings-header-badge-row">
            <span className="fittings-badge-tag">PRESSURE PIPING &amp; FORGED FITTINGS DIVISION</span>
            {isManufacturedInMumbai && (
              <span className="fittings-badge-mumbai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '3px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="fittings-badge-count">{PIPE_FITTINGS_CATEGORIES.length} Core Material Lines</span>
          </div>

          <h1 className="fittings-main-title">
            {activeMaterialObj ? `${activeMaterialObj.name} Pipe Fittings` : 'Pipe Fittings'}
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

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

          {/* Material Filter Bar */}
          <ProductMaterialFilterBar
            materials={materialsList}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={handleSelectMaterial}
            categoryName="Pipe Fittings"
          />

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

      {/* 2. Main Products Grid */}
      <section className="fittings-grid-section">
        <div className="fittings-grid-container">
          {/* SECTION C: HORIZONTAL AVAILABLE GRADES SECTION */}
          {activeMaterialObj && filteredCategories.length > 0 && (
            <div className="cat-horizontal-grades-section" aria-label="Available Grades">
              <div className="horizontal-grades-header-row">
                <div className="grades-row-left">
                  <Layers size={15} className="grades-row-icon" />
                  <h3 className="grades-row-title">Available Grades in {activeMaterialObj.name} Pipe Fittings</h3>
                </div>
                <span className="grades-row-hint">Click any grade to view detailed specifications</span>
              </div>
              <div className="horizontal-grades-chips-track">
                {filteredCategories.flatMap(c => c.grades.map(g => ({ ...g, catSlug: c.slug }))).map((grade, gIdx) => (
                  <button
                    key={grade.id || grade.slug || `g-${gIdx}`}
                    type="button"
                    className="horizontal-grade-nav-pill"
                    title={`View specifications for ${grade.name}`}
                    onClick={(e) => handleGradeClick(e, grade.catSlug, grade.slug)}
                  >
                    <span className="pill-dot">•</span>
                    <span className="pill-name">{grade.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

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
