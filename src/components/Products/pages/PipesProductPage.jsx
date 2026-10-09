import React, { useState, useMemo, useEffect } from 'react';
import { 
  PIPE_CATEGORIES, 
  getPipeCategoryBySlug, 
  getPipeMaterialList 
} from '../../../data/pipesData';
import ProductMaterialFilterBar from '../ProductMaterialFilterBar';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import { Search, X, ArrowRight, Layers, ShieldCheck, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import './PipesProductPage.css';

/**
 * Clean, Dedicated Pipes Product Listing Page
 * Supports material-specific filtering, genuine product images, and SEO URLs.
 */
export default function PipesProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Pipes & Tubes" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="pipes"
        categoryName="Pipes & Tubes"
        mainHeading="Materials in Pipes & Tubes"
        leadText="Extensive mill inventory and precision manufactured industrial pipes conforming strictly to ASTM, ASME, DIN, EN, and API 5L specifications. Supplied in seamless, ERW, and EFW configurations with 100% PMI verification and complete EN 10204 3.1 & 3.2 certification."
        materials={PIPE_CATEGORIES}
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
    return getPipeMaterialList();
  }, []);

  const activeMaterialObj = useMemo(() => {
    if (!selectedMaterial || selectedMaterial === 'all') return null;
    const cat = getPipeCategoryBySlug(selectedMaterial);
    if (cat) return { slug: cat.materialSlug || selectedMaterial, name: cat.materialName || cat.name };
    const found = materialsList.find(m => m.slug === selectedMaterial);
    return found || null;
  }, [selectedMaterial, materialsList]);

  useEffect(() => {
    const matName = activeMaterialObj ? activeMaterialObj.name : 'Seamless & Welded';
    document.title = isManufacturedInMumbai
      ? `${matName} Pipes & Tubes Manufactured in Mumbai | Redcore Steels`
      : `${matName} Pipes & Tubes | ASTM / ASME Line Pipes | Redcore Steels`;
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
        onNavigate(`/products/pipes${suffix}`);
      } else {
        onNavigate(`/products/pipes/${matSlug}${suffix}`);
      }
    }
  };

  const filteredCategories = useMemo(() => {
    let list = PIPE_CATEGORIES;

    if (selectedMaterial && selectedMaterial !== 'all') {
      const targetCat = getPipeCategoryBySlug(selectedMaterial);
      if (targetCat) {
        list = list.filter(cat => cat.id === targetCat.id || cat.slug === targetCat.slug);
      }
    }

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();

    return list.map(cat => {
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
  }, [searchQuery, selectedMaterial]);

  const handleCardClick = (catSlug) => {
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/pipes/${catSlug}${suffix}`);
    }
  };

  const handleGradeClick = (e, catSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/pipes/${catSlug}/${gradeSlug}${suffix}`);
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
            <span 
              className={activeMaterialObj ? "crumb-link" : "crumb-current"} 
              onClick={() => activeMaterialObj && handleSelectMaterial('all')}
            >
              Pipes
            </span>
            {activeMaterialObj && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activeMaterialObj.name}</span>
              </>
            )}
          </nav>

          <div className="pipes-header-badge-row">
            <span className="pipes-badge-tag">INDUSTRIAL PIPING DIVISION</span>
            {isManufacturedInMumbai && (
              <span className="pipes-badge-mumbai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '3px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="pipes-badge-count">{PIPE_CATEGORIES.length} Core Product Categories</span>
          </div>

          <h1 className="pipes-main-title">
            {activeMaterialObj ? `${activeMaterialObj.name} Pipes & Tubes` : 'Pipes & Tubes'}
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

          <p className="pipes-lead-text">
            Extensive mill inventory and precision manufactured industrial pipes conforming strictly to ASTM, ASME, DIN, EN, and API 5L specifications. Supplied in seamless, ERW, and EFW configurations with 100% PMI verification and complete EN 10204 3.1 &amp; 3.2 certification.
          </p>

          {/* Material Filter Bar */}
          <ProductMaterialFilterBar
            materials={materialsList}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={handleSelectMaterial}
            categoryName="Pipes & Tubes"
          />

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

      {/* 2. Main Products Grid */}
      <section className="pipes-grid-section">
        <div className="pipes-grid-container">
          {/* SECTION C: HORIZONTAL AVAILABLE GRADES SECTION */}
          {activeMaterialObj && filteredCategories.length > 0 && (
            <div className="cat-horizontal-grades-section" aria-label="Available Grades">
              <div className="horizontal-grades-header-row">
                <div className="grades-row-left">
                  <Layers size={15} className="grades-row-icon" />
                  <h3 className="grades-row-title">Available Grades in {activeMaterialObj.name} Pipes &amp; Tubes</h3>
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
