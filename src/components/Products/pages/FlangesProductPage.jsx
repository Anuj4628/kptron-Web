import React, { useState, useMemo, useEffect } from 'react';
import { FLANGES_CATEGORIES } from '../../../data/flangesData';
import { 
  getFlangeTypesForMaterial, 
  getFlangeMaterialBySlug,
  getFlangeGradesForMaterial,
  getFlangeGradesForType,
  getFlangeTypesForGrade,
  normalizeMaterialSlug 
} from '../../../data/flangeTypesData';
import FlangesSidebarNav from '../FlangesSidebarNav';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import { 
  Search, 
  X, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  BookmarkCheck,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import './FlangesProductPage.css';

/**
 * Dedicated Flanges Product Section Page
 * 
 * - When materialSlug is null (/products/flanges):
 *   Renders the "Materials in Flanges" Category Material Listing Page!
 * - When materialSlug is provided (/products/flanges/:material):
 *   Renders the Material Detail Page for that metal with:
 *   1. Main material heading and specs
 *   2. Dedicated "Types of Flanges" sidebar with material-specific imagery
 *   3. Horizontal "Available Grades" section with clickable dark navy blue chips
 *   4. Types of Flanges showcase grid
 */
export default function FlangesProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false,
  onNavigate, 
  _onOpenQuoteModal 
}) {
  // If no specific material is requested, show "Materials in Flanges" listing page
  if (!materialSlug) {
    return (
      <CategoryMaterialListingView
        categorySlug="flanges"
        categoryName="Flanges"
        mainHeading="Materials in Flanges"
        leadText="Drop-forged and precision CNC machined industrial pipe flanges manufactured in accordance with ASME B16.5, ASME B16.47 Series A & B, DIN, and EN standards. Explore our inventory by metallurgical material classification below."
        materials={FLANGES_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={_onOpenQuoteModal}
      />
    );
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});
  const [catalogViewTab, setCatalogViewTab] = useState('types'); // 'types' | 'grades'
  const [selectedMaterialSlug, setSelectedMaterialSlug] = useState(
    normalizeMaterialSlug(materialSlug)
  );

  // Sync state if URL prop changes
  useEffect(() => {
    if (materialSlug) {
      setSelectedMaterialSlug(normalizeMaterialSlug(materialSlug));
    }
  }, [materialSlug]);

  const activeMaterial = useMemo(() => {
    return getFlangeMaterialBySlug(selectedMaterialSlug);
  }, [selectedMaterialSlug]);

  // Update document title and meta description
  useEffect(() => {
    const titleText = isManufacturedInMumbai
      ? `${activeMaterial.name} Flanges Manufactured in Mumbai | Redcore Steels`
      : `${activeMaterial.name} Flanges | ASME B16.5 & B16.47 Manufacturer | Redcore Steels`;
    document.title = titleText;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `${activeMaterial.name} Flanges manufactured in Mumbai, India conforming strictly to ASME B16.5, ASME B16.47 Series A & B, DIN, and EN standards. Verified geometries for Threaded, Weld Neck, Slip-On, Blind, Socket Weld, and Lap Joint flanges.`;
  }, [activeMaterial, isManufacturedInMumbai]);

  // Types of Flanges available for the active material
  const activeMaterialTypes = useMemo(() => {
    const types = getFlangeTypesForMaterial(selectedMaterialSlug);
    if (!searchQuery.trim()) return types;
    const q = searchQuery.toLowerCase().trim();
    return types.filter(t => 
      t.name.toLowerCase().includes(q) ||
      t.technicalDesignation.toLowerCase().includes(q) ||
      t.categoryClassification.toLowerCase().includes(q) ||
      t.shortDesc.toLowerCase().includes(q) ||
      t.applicableStandards.toLowerCase().includes(q)
    );
  }, [selectedMaterialSlug, searchQuery]);

  // Certified Grades available for the active material
  const activeMaterialGrades = useMemo(() => {
    const grades = getFlangeGradesForMaterial(selectedMaterialSlug);
    if (!searchQuery.trim()) return grades;
    const q = searchQuery.toLowerCase().trim();
    return grades.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.shortName.toLowerCase().includes(q) ||
      g.code.toLowerCase().includes(q) ||
      g.standard.toLowerCase().includes(q) ||
      (g.uns && g.uns.toLowerCase().includes(q)) ||
      g.shortDesc.toLowerCase().includes(q)
    );
  }, [selectedMaterialSlug, searchQuery]);

  const toggleExpand = (catId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Filter existing material categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return FLANGES_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return FLANGES_CATEGORIES.map(cat => {
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

  const handleMaterialCardClick = (catSlug) => {
    const norm = normalizeMaterialSlug(catSlug);
    setSelectedMaterialSlug(norm);
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/flanges/${norm}${suffix}`);
    }
  };

  const handleTypeCardClick = (typeSlug) => {
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/flanges/${selectedMaterialSlug}/${typeSlug}${suffix}`);
    }
  };

  const handleTypeWithGradeClick = (e, typeSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/flanges/${selectedMaterialSlug}/${typeSlug}/${gradeSlug}${suffix}`);
    }
  };

  const handleGradeCardClick = (gradeSlug) => {
    if (onNavigate) {
      const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
      const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
      onNavigate(`/products/flanges/${selectedMaterialSlug}/grades/${gradeSlug}${suffix}`);
    }
  };

  return (
    <div className="clean-flanges-page">
      {/* ===================================================
          1. HEADER BANNER & BREADCRUMBS
          =================================================== */}
      <section className="flanges-header-section">
        <div className="flanges-header-container">
          <nav className="flanges-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/flanges')}>Flanges</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{activeMaterial.name} Flanges</span>
          </nav>

          <div className="flanges-header-badge-row">
            <span className="flanges-badge-tag">PRESSURE PIPING &amp; FORGED FLANGES DIVISION</span>
            {isManufacturedInMumbai && (
              <span className="flanges-badge-mumbai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '3px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="flanges-badge-count">
              14 Flange Types • {activeMaterial.name} Active • ASME B16.5 &amp; B16.47 Certified
            </span>
          </div>

          <h1 className="flanges-main-title">
            {activeMaterial.name} <span className="text-highlight-red">Flanges &amp; Types</span>
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

          <p className="flanges-lead-text">
            {activeMaterial.materialDesc} Manufactured strictly conforming to {activeMaterial.standard}, ASME B16.5, ASME B16.47, ASME B16.36, and MSS SP-65. Fully certified with 100% Ultrasonic &amp; PMI testing and EN 10204 3.1 &amp; 3.2 mill test reports.
          </p>

          {/* Quick Specifications Strip */}
          <div className="flanges-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>14 Core Types:</strong> Threaded, Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Orifice, Long Weld Neck, Spectacle Blind, Reducing, Expander, Square, Elbow, Cast
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Certified Grades in {activeMaterial.name}:</strong> {activeMaterial.primaryGrades}
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Sealing Facings:</strong> Raised Face (125-250 RMS), Ring Type Joint (RTJ), Flat Face (FF)
            </div>
          </div>

          {/* Search Bar */}
          <div className="flanges-search-wrapper">
            <div className="flanges-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={`Search ${activeMaterial.name} types or grades (e.g. Weld Neck, Blind, 316L, A105, F11)...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flanges-search-input"
                aria-label="Search flanges and grades"
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
          </div>
        </div>
      </section>

      {/* ===================================================
          2. 3-LEVEL PRIMARY LAYOUT: SIDEBAR + TYPES GRID
          =================================================== */}
      <section className="flanges-catalog-body-section" aria-label={`${activeMaterial.name} Flanges Catalog`}>
        <div className="flanges-header-container">
          <div className="flanges-main-layout-grid">
            
            {/* SIDEBAR NAVIGATION: Materials + Types + Grades */}
            <div className="flanges-sidebar-column">
              <FlangesSidebarNav
                currentMaterialSlug={selectedMaterialSlug}
                currentTypeSlug={null}
                currentGradeSlug={null}
                onNavigate={onNavigate}
              />
            </div>

            {/* MAIN CONTENT COLUMN */}
            <div className="flanges-content-column">
              
              {/* Active Material Header Bar & Tabs Switcher */}
              <div className="active-material-showcase-header">
                <div className="active-mat-title-box">
                  <div className="active-mat-badge">
                    <span className="active-dot" />
                    <span>CURRENT SELECTION: {activeMaterial.name.toUpperCase()} FLANGES</span>
                  </div>
                  <h2 className="active-mat-heading">
                    {activeMaterial.name} Flanges Catalog
                    {isManufacturedInMumbai && ' (Manufactured in Mumbai)'}
                  </h2>
                  <p className="active-mat-desc">
                    Displaying authentic <strong>{activeMaterial.name}</strong> product imagery across all 14 supported flange configurations. Select any card to inspect full dimensional ratings and metallurgical specifications.
                  </p>
                </div>

                {/* Dual Navigation Switcher: Types vs Grades */}
                <div className="flanges-view-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={catalogViewTab === 'types'}
                    className={`flange-tab-btn ${catalogViewTab === 'types' ? 'is-active' : ''}`}
                    onClick={() => setCatalogViewTab('types')}
                  >
                    <Layers size={16} />
                    <span>Types of Flanges ({activeMaterialTypes.length})</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={catalogViewTab === 'grades'}
                    className={`flange-tab-btn ${catalogViewTab === 'grades' ? 'is-active' : ''}`}
                    onClick={() => setCatalogViewTab('grades')}
                  >
                    <BookmarkCheck size={16} />
                    <span>Certified Grades ({activeMaterialGrades.length})</span>
                  </button>
                </div>
              </div>

              {/* SECTION C: HORIZONTAL AVAILABLE GRADES SECTION */}
              <div className="flange-horizontal-grades-section" aria-label="Available Grades">
                <div className="horizontal-grades-header-row">
                  <div className="grades-row-left">
                    <Layers size={15} className="grades-row-icon" />
                    <h3 className="grades-row-title">Available Grades in {activeMaterial.name}</h3>
                    <span className="grades-row-count">({activeMaterialGrades.length} Specifications)</span>
                  </div>
                  <span className="grades-row-hint">Click any grade to open dedicated specifications</span>
                </div>
                <div className="horizontal-grades-chips-track">
                  {activeMaterialGrades.map((grade) => (
                    <button
                      key={grade.id || grade.slug}
                      type="button"
                      className="horizontal-grade-nav-pill"
                      title={`View specifications for ${grade.name}`}
                      onClick={() => handleGradeCardClick(grade.slug)}
                    >
                      <span className="pill-dot">•</span>
                      <span className="pill-name">{grade.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ===================================================
                  TAB 1: TYPES OF FLANGES SHOWCASE GRID
                  =================================================== */}
              {catalogViewTab === 'types' && (
                <section className="types-of-flanges-showcase-box" aria-label="Types of Flanges">
                  <div className="section-title-strip">
                    <h3 className="section-title-text">
                      Types of Flanges in {activeMaterial.name}
                    </h3>
                    <span className="section-title-sub">
                      Showing all {activeMaterialTypes.length} supported configurations for {activeMaterial.name}
                    </span>
                  </div>

                  {activeMaterialTypes.length > 0 ? (
                    <div className="flange-types-cards-grid">
                      {activeMaterialTypes.map((type) => {
                        const supportedGrades = getFlangeGradesForType(selectedMaterialSlug, type.slug);

                        return (
                          <article 
                            key={type.id} 
                            className="type-card-item"
                            onClick={() => handleTypeCardClick(type.slug)}
                          >
                            <div className="type-card-top-accent" aria-hidden="true" />
                            
                            <div className="type-card-media">
                              <img
                                src={type.displayImage}
                                alt={`${activeMaterial.name} ${type.name}`}
                                className="type-card-img"
                                loading="lazy"
                              />
                              <span className="type-card-num-badge">{type.number}</span>
                              <span className="type-card-mat-badge">{activeMaterial.name}</span>
                            </div>

                            <div className="type-card-body">
                              <div className="type-card-header-info">
                                <span className="type-classification-tag">{type.categoryClassification}</span>
                                <h3 className="type-card-title">{type.name}</h3>
                                <p className="type-card-desc">{type.shortDesc}</p>
                              </div>

                              <div className="type-card-specs-strip">
                                <div className="type-spec-mini">
                                  <span className="mini-label">Standards:</span>
                                  <span className="mini-val">{type.applicableStandards.split(',')[0]}</span>
                                </div>
                                <div className="type-spec-mini">
                                  <span className="mini-label">Sizes:</span>
                                  <span className="mini-val">{type.standardSizes.split('(')[0]}</span>
                                </div>
                              </div>

                              {/* Available Grades Quick-Links Row */}
                              {supportedGrades && supportedGrades.length > 0 && (
                                <div className="type-card-grades-row">
                                  <span className="grades-row-label">Available Grades:</span>
                                  <div className="grades-row-pills">
                                    {supportedGrades.slice(0, 5).map(g => (
                                      <button
                                        key={g.id}
                                        type="button"
                                        className="card-grade-subpill"
                                        title={`Open ${activeMaterial.name} ${type.name} Grade ${g.shortName} Detail`}
                                        onClick={(e) => handleTypeWithGradeClick(e, type.slug, g.slug)}
                                      >
                                        {g.shortName}
                                      </button>
                                    ))}
                                    {supportedGrades.length > 5 && (
                                      <span className="card-grade-more">+{supportedGrades.length - 5} more</span>
                                    )}
                                  </div>
                                </div>
                              )}

                              <div className="type-card-footer">
                                <span className="type-view-link">
                                  <span>View Details</span>
                                  <ArrowRight size={14} />
                                </span>
                                <span className="type-arrow-bubble" aria-hidden="true">&rarr;</span>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flanges-empty-state">
                      <h3>No flange types match your search in {activeMaterial.name}</h3>
                      <p>Try searching for Weld Neck, Slip-On, Blind, Threaded, or Orifice.</p>
                      <button
                        type="button"
                        className="btn-clear-search-empty"
                        onClick={() => setSearchQuery('')}
                      >
                        Clear Search Filter
                      </button>
                    </div>
                  )}
                </section>
              )}

              {/* ===================================================
                  TAB 2: CERTIFIED GRADES SHOWCASE GRID
                  =================================================== */}
              {catalogViewTab === 'grades' && (
                <section className="certified-grades-showcase-box" aria-label="Certified Grades">
                  <div className="section-title-strip">
                    <h3 className="section-title-text">
                      Certified Grades for {activeMaterial.name}
                    </h3>
                    <span className="section-title-sub">
                      Conforming strictly to ASTM / ASME standards with EN 10204 3.1 &amp; 3.2 mill test certs
                    </span>
                  </div>

                  {activeMaterialGrades.length > 0 ? (
                    <div className="material-grades-cards-grid">
                      {activeMaterialGrades.map((grade) => {
                        const supportedTypes = getFlangeTypesForGrade(selectedMaterialSlug, grade.slug);

                        return (
                          <article 
                            key={grade.id} 
                            className="grade-card-item"
                            onClick={() => handleGradeCardClick(grade.slug)}
                          >
                            <div className="grade-card-top-accent" aria-hidden="true" />

                            <div className="grade-card-header">
                              <span className="grade-card-mat-tag">{activeMaterial.name}</span>
                              <span className="grade-card-code-tag">{grade.code}</span>
                            </div>

                            <div className="grade-card-body">
                              <h3 className="grade-card-title">{grade.name}</h3>
                              
                              <div className="grade-card-matrix">
                                <div className="matrix-item">
                                  <span className="matrix-label">Standard:</span>
                                  <span className="matrix-val">{grade.standard}</span>
                                </div>
                                {grade.uns && (
                                  <div className="matrix-item">
                                    <span className="matrix-label">UNS:</span>
                                    <span className="matrix-val">{grade.uns}</span>
                                  </div>
                                )}
                              </div>

                              <p className="grade-card-desc">{grade.shortDesc}</p>

                              {/* Available Types Quick-Links Row */}
                              {supportedTypes && supportedTypes.length > 0 && (
                                <div className="grade-card-types-row">
                                  <span className="types-row-label">Supported Flange Types:</span>
                                  <div className="types-row-pills">
                                    {supportedTypes.slice(0, 4).map(t => (
                                      <button
                                        key={t.id}
                                        type="button"
                                        className="card-type-subpill"
                                        title={`Open ${grade.shortName} ${t.name} Product Page`}
                                        onClick={(e) => handleTypeWithGradeClick(e, t.slug, grade.slug)}
                                      >
                                        {t.name}
                                      </button>
                                    ))}
                                    {supportedTypes.length > 4 && (
                                      <span className="card-type-more">+{supportedTypes.length - 4} more</span>
                                    )}
                                  </div>
                                </div>
                              )}

                              <div className="grade-card-footer">
                                <span className="grade-view-link">
                                  <span>View Grade Specifications</span>
                                  <ArrowRight size={14} />
                                </span>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flanges-empty-state">
                      <h3>No certified grades match &ldquo;{searchQuery}&rdquo; in {activeMaterial.name}</h3>
                      <button
                        type="button"
                        className="btn-clear-search-empty"
                        onClick={() => setSearchQuery('')}
                      >
                        Clear Search Filter
                      </button>
                    </div>
                  )}
                </section>
              )}

              {/* Bottom Section: Material Technical Overview & Switcher */}
              <div className="active-mat-overview-card">
                <div className="mat-overview-top">
                  <span className="overview-badge">METALLURGICAL CONFORMANCE</span>
                  <h3 className="overview-title">ASME B16.5 &amp; B16.47 Quality Assurance for {activeMaterial.name}</h3>
                  <p className="overview-text">
                    All {activeMaterial.name} flanges are manufactured from prime certified forgings with complete traceability according to EN 10204 3.1 &amp; 3.2 mill test reports. 100% inspected with ultrasonic testing per ASTM A388 and positive material identification (PMI).
                  </p>
                </div>

                <div className="mat-switch-prompt">
                  <span className="prompt-label">Need a different flange material?</span>
                  <div className="mat-switch-buttons">
                    {FLANGES_CATEGORIES.filter(c => normalizeMaterialSlug(c.slug) !== selectedMaterialSlug).slice(0, 5).map(c => (
                      <button
                        key={c.id}
                        type="button"
                        className="mat-quick-switch-btn"
                        onClick={() => handleMaterialCardClick(c.slug)}
                      >
                        <span>{c.name}</span>
                        <ArrowRight size={12} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ===================================================
                  3. ALL MATERIAL CLASSIFICATIONS OVERVIEW (CARDS GRID)
                  =================================================== */}
              <div className="all-materials-overview-wrapper" style={{ marginTop: '2rem' }}>
                <div className="catalog-section-heading-box">
                  <div className="heading-tag-line">
                    <span className="tag-accent" />
                    <span className="tag-text">MATERIAL SPECIFICATIONS DIRECTORY</span>
                  </div>
                  <h3 className="catalog-section-title" style={{ fontSize: '1.4rem' }}>
                    All Flange Material Classifications
                  </h3>
                  <p className="catalog-section-desc">
                    Quickly switch to any alloy classification or drill down directly into individual certified grade sheets.
                  </p>
                </div>

                {filteredCategories.length > 0 && (
                  <div className="flanges-cards-grid">
                    {filteredCategories.map((cat) => {
                      const isExpanded = !!expandedCards[cat.id];
                      const displayGrades = searchQuery.trim() && cat.highlightGrades
                        ? cat.highlightGrades
                        : (isExpanded ? cat.grades : cat.grades.slice(0, 5));

                      const remainingCount = cat.grades.length - 5;
                      const normSlug = normalizeMaterialSlug(cat.slug);

                      return (
                        <article
                          key={cat.id}
                          className="flange-product-card"
                          onClick={() => handleMaterialCardClick(cat.slug)}
                        >
                          <div className="card-top-accent" aria-hidden="true" />

                          <div className="card-media-wrapper">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="card-product-img"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="card-category-badge">
                              <ShieldCheck size={12} />
                              <span>ASME / ASTM CERTIFIED</span>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="card-top-info">
                              <h3 className="card-title">{cat.title}</h3>

                              <div className="card-standards-line">
                                <span className="standards-label">STANDARDS:</span>
                                <span className="standards-value">{cat.standards}</span>
                              </div>

                              <p className="card-desc">{cat.shortDesc}</p>
                            </div>

                            {/* Available Grades with Clickable Buttons */}
                            <div className="card-grades-section">
                              <div className="grades-header-row">
                                <span className="grades-heading-label">
                                  <Layers size={13} className="label-icon" />
                                  AVAILABLE GRADES ({cat.grades.length})
                                </span>
                              </div>

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
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (onNavigate) {
                                          const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
                                          const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
                                          onNavigate(`/products/flanges/${normSlug}/grades/${gradeSlug}${suffix}`);
                                        }
                                      }}
                                    >
                                      <span className="pill-dot" aria-hidden="true">•</span>
                                      <span className="pill-text">{gradeName.toUpperCase()}</span>
                                    </button>
                                  );
                                })}
                              </div>

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

                            <div className="card-action-box">
                              <button
                                type="button"
                                className="btn-card-specs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMaterialCardClick(cat.slug);
                                }}
                              >
                                <span>Explore {cat.name} Types</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
