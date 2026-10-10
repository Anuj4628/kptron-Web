import React, { useState, useMemo, useEffect } from 'react';
import { FASTENERS_CATEGORIES } from '../../../data/fastenersData';
import { 
  getFastenerTypesForMaterial, 
  getFastenerMaterialBySlug,
  getFastenerGradesForMaterial,
  getFastenerGradesForType,
  getFastenerTypesForGrade,
  normalizeFastenerMaterialSlug 
} from '../../../data/fastenerTypesData';
import FastenersSidebarNav from '../FastenersSidebarNav';
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
import { formatProductUrl } from '../../../utils/urlUtils';
import './FastenersProductPage.css';

/**
 * Dedicated Fasteners Product Section Page
 * 
 * - When materialSlug is null or 'all' (/products/fasteners):
 *   Renders the "Materials in Fasteners" Category Material Listing Page!
 * - When materialSlug is provided (/products/fasteners/:material):
 *   Renders the Material Detail Page for that metal with:
 *   1. Main material heading and specs
 *   2. Dedicated "Types of Fasteners" sidebar with material-specific imagery
 *   3. Horizontal "Available Grades" section with clickable chips
 *   4. Types of Fasteners showcase grid (Hex Bolts, Hex Nuts, Stud Bolts, Socket Screws, Washers)
 *   5. Certified Grades view tab
 */
export default function FastenersProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false,
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no specific material is requested or 'all', show "Materials in Fasteners" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="fasteners"
        categoryName="Fasteners"
        mainHeading="Materials in Fasteners"
        leadText="High-tensile, high-temperature, and corrosion-resistant industrial fasteners manufactured in accordance with ASTM A193, ASTM A194, ASTM A320, ASTM A325, DIN, and ISO standards. Explore our inventory by metallurgical alloy classification below."
        materials={FASTENERS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [catalogViewTab, setCatalogViewTab] = useState('types'); // 'types' | 'grades'
  const [selectedMaterialSlug, setSelectedMaterialSlug] = useState(
    normalizeFastenerMaterialSlug(materialSlug)
  );

  // Sync state if URL prop changes
  useEffect(() => {
    if (materialSlug) {
      setSelectedMaterialSlug(normalizeFastenerMaterialSlug(materialSlug));
    }
  }, [materialSlug]);

  const activeMaterial = useMemo(() => {
    return getFastenerMaterialBySlug(selectedMaterialSlug);
  }, [selectedMaterialSlug]);

  // Update document title and meta description
  useEffect(() => {
    const titleText = isManufacturedInMumbai
      ? `${activeMaterial.name} Fasteners Manufactured in Mumbai | KPTRON`
      : `${activeMaterial.name} Fasteners | ASTM A193 & A194 Bolting Manufacturer | KPTRON`;
    document.title = titleText;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `${activeMaterial.name} Fasteners manufactured in Mumbai, India conforming strictly to ASTM A193, ASTM A194, ASTM A320, ASTM A325, DIN, and ISO standards. High-tensile Hex Head Bolts, Heavy Hex Nuts, Continuous Stud Bolts, Socket Head Cap Screws, and Washers.`;
  }, [activeMaterial, isManufacturedInMumbai]);

  // Types of Fasteners available for the active material (5 Core Types)
  const activeMaterialTypes = useMemo(() => {
    const types = getFastenerTypesForMaterial(selectedMaterialSlug);
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
    const grades = getFastenerGradesForMaterial(selectedMaterialSlug);
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

  const handleTypeCardClick = (typeSlug) => {
    if (onNavigate) {
      onNavigate(formatProductUrl(`/products/fasteners/${selectedMaterialSlug}/${typeSlug}`));
    }
  };

  const handleTypeWithGradeClick = (e, typeSlug, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(formatProductUrl(`/products/fasteners/${selectedMaterialSlug}/${typeSlug}/${gradeSlug}`));
    }
  };

  const handleGradeCardClick = (gradeSlug) => {
    if (onNavigate) {
      onNavigate(formatProductUrl(`/products/fasteners/${selectedMaterialSlug}/grades/${gradeSlug}`));
    }
  };

  return (
    <div className="clean-fasteners-page">
      {/* ===================================================
          1. HEADER BANNER & BREADCRUMBS
          =================================================== */}
      <section className="fasteners-header-section">
        <div className="fasteners-header-container">
          <nav className="fasteners-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/fasteners')}>Fasteners</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{activeMaterial.name} Fasteners</span>
          </nav>

          <div className="fasteners-header-badge-row">
            <span className="fasteners-badge-tag">INDUSTRIAL FASTENING &amp; BOLTING DIVISION</span>
            {isManufacturedInMumbai && (
              <span className="fasteners-badge-mumbai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '3px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="fasteners-badge-count">
              5 Fastener Types • {activeMaterial.name} Active • ASTM &amp; ASME Certified
            </span>
          </div>

          <h1 className="fasteners-main-title">
            {activeMaterial.name} <span className="text-highlight-red">Fasteners &amp; Types</span>
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

          <p className="fasteners-lead-text">
            {activeMaterial.materialDesc} Conforming strictly to {activeMaterial.standard}, ASME B18.2.1, ASME B18.2.2, DIN, and ISO standards. Fully certified with 100% PMI verification, wedge tensile proof load testing, and EN 10204 3.1 &amp; 3.2 mill test inspection reports.
          </p>

          {/* Quick Specifications Strip */}
          <div className="fasteners-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>5 Core Types:</strong> Hex Head Bolts, Hex Nuts, Stud Bolts / Threaded Studs, Socket Head Cap Screws, Washers
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Certified Grades in {activeMaterial.name}:</strong> {activeMaterial.primaryGrades}
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Thread Series &amp; Finishes:</strong> UNC, UNF, Metric 6g/6H, 8-UN Series | Black Oxide, Zinc, Hot-Dip Galv, PTFE Xylan
            </div>
          </div>

          {/* Search Bar */}
          <div className="fasteners-search-wrapper">
            <div className="fasteners-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={`Search ${activeMaterial.name} fastener types or grades (e.g. Hex Bolts, Studs, B7, 316, 2H, A325)...`}
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
          </div>
        </div>
      </section>

      {/* ===================================================
          2. 3-LEVEL PRIMARY LAYOUT: SIDEBAR + TYPES GRID
          =================================================== */}
      <section className="fasteners-catalog-body-section" aria-label={`${activeMaterial.name} Fasteners Catalog`}>
        <div className="fasteners-header-container">
          <div className="fasteners-main-layout-grid">
            
            {/* SIDEBAR NAVIGATION: Materials + Types + Grades */}
            <div className="fasteners-sidebar-column">
              <FastenersSidebarNav
                currentMaterialSlug={selectedMaterialSlug}
                currentTypeSlug={null}
                currentGradeSlug={null}
                onNavigate={onNavigate}
              />
            </div>

            {/* MAIN CONTENT COLUMN */}
            <div className="fasteners-content-column">
              
              {/* Active Material Header Bar & Tabs Switcher */}
              <div className="active-material-showcase-header">
                <div className="active-mat-title-box">
                  <div className="active-mat-badge">
                    <span className="active-dot" />
                    <span>CURRENT SELECTION: {activeMaterial.name.toUpperCase()} FASTENERS</span>
                  </div>
                  <h2 className="active-mat-heading">
                    {activeMaterial.name} Fasteners Catalog
                    {isManufacturedInMumbai && ' (Manufactured in Mumbai)'}
                  </h2>
                  <p className="active-mat-desc">
                    Displaying authentic <strong>{activeMaterial.name}</strong> product imagery across all 5 supported fastener configurations. Select any card to inspect full dimensional ratings, thread standards, and mechanical properties.
                  </p>
                </div>

                {/* Dual Navigation Switcher: Types vs Grades */}
                <div className="fasteners-view-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={catalogViewTab === 'types'}
                    className={`fastener-tab-btn ${catalogViewTab === 'types' ? 'is-active' : ''}`}
                    onClick={() => setCatalogViewTab('types')}
                  >
                    <Layers size={16} />
                    <span>5 Fastener Types ({activeMaterialTypes.length})</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={catalogViewTab === 'grades'}
                    className={`fastener-tab-btn ${catalogViewTab === 'grades' ? 'is-active' : ''}`}
                    onClick={() => setCatalogViewTab('grades')}
                  >
                    <BookmarkCheck size={16} />
                    <span>Certified Grades ({activeMaterialGrades.length})</span>
                  </button>
                </div>
              </div>

              {/* SECTION C: HORIZONTAL AVAILABLE GRADES SECTION */}
              <div className="fastener-horizontal-grades-section" aria-label="Available Grades">
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
                      <span className="pill-name">{grade.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ===================================================
                  TAB 1: 5 TYPES OF FASTENERS SHOWCASE GRID
                  =================================================== */}
              {catalogViewTab === 'types' && (
                <section className="types-of-fasteners-showcase-box" aria-label="Types of Fasteners">
                  <div className="section-title-strip">
                    <h3 className="section-title-text">
                      Types of Fasteners in {activeMaterial.name}
                    </h3>
                    <span className="section-title-sub">
                      Showing all {activeMaterialTypes.length} supported configurations for {activeMaterial.name}
                    </span>
                  </div>

                  {activeMaterialTypes.length > 0 ? (
                    <div className="fastener-types-cards-grid">
                      {activeMaterialTypes.map((type) => {
                        const supportedGrades = getFastenerGradesForType(selectedMaterialSlug, type.slug);

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
                                  <span className="mini-val">{type.standardSizes.split('|')[0]}</span>
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
                    <div className="fasteners-empty-state">
                      <h3>No fastener types match your search in {activeMaterial.name}</h3>
                      <p>Try searching for Hex Bolts, Hex Nuts, Stud Bolts, Socket Screws, or Washers.</p>
                      <button
                        type="button"
                        className="empty-clear-btn"
                        onClick={() => setSearchQuery('')}
                      >
                        Reset Search
                      </button>
                    </div>
                  )}
                </section>
              )}

              {/* ===================================================
                  TAB 2: CERTIFIED GRADES SHOWCASE GRID
                  =================================================== */}
              {catalogViewTab === 'grades' && (
                <section className="grades-showcase-box" aria-label={`Certified Grades in ${activeMaterial.name}`}>
                  <div className="section-title-strip">
                    <h3 className="section-title-text">
                      Certified Grades in {activeMaterial.name}
                    </h3>
                    <span className="section-title-sub">
                      Displaying {activeMaterialGrades.length} verified metallurgy specifications with full mill certification
                    </span>
                  </div>

                  <div className="grades-showcase-grid">
                    {activeMaterialGrades.map((grade) => (
                      <article 
                        key={grade.id} 
                        className="catalog-grade-card"
                        onClick={() => handleGradeCardClick(grade.slug)}
                      >
                        <div className="grade-card-top-tag">
                          <span className="grade-pill-badge">{grade.shortName}</span>
                          <span className="grade-code-badge">{grade.code}</span>
                        </div>

                        <h3 className="grade-card-heading">{grade.name}</h3>
                        <p className="grade-card-desc">{grade.shortDesc}</p>

                        <div className="grade-card-specs-matrix">
                          <div className="spec-row">
                            <span className="spec-k">Standards:</span>
                            <span className="spec-v">{grade.standard}</span>
                          </div>
                          {grade.uns && (
                            <div className="spec-row">
                              <span className="spec-k">UNS / DIN:</span>
                              <span className="spec-v">{grade.uns} {grade.din ? `/ ${grade.din}` : ''}</span>
                            </div>
                          )}
                          {grade.specs?.tensile && (
                            <div className="spec-row">
                              <span className="spec-k">Tensile Strength:</span>
                              <span className="spec-v">{grade.specs.tensile}</span>
                            </div>
                          )}
                        </div>

                        <div className="grade-card-footer">
                          <span className="grade-link-text">Inspect Specifications</span>
                          <ArrowRight size={14} className="grade-arrow" />
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
