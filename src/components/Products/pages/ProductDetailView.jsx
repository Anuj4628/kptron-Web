import React, { useState, useMemo, useEffect, useRef } from 'react';
import ProductBreadcrumb from '../ProductBreadcrumb';
import SpecsTable from '../SpecsTable';
import InquiryForm from '../InquiryForm';
import RelatedProducts from '../RelatedProducts';
import { getProductCategory, getRelatedProducts, DIVISIONS } from '../../../data/productCatalogData';
import { getProductGrades } from '../../../data/productGradesData';
import { 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  FileText,
  Compass,
  ArrowRight,
  Cpu,
  Search
} from 'lucide-react';
import './ProductDetailView.css';

/**
 * Generate a clean, URL-safe slug for a grade object
 */
export function getGradeSlug(grade) {
  if (!grade) return '';
  if (grade.slug) return grade.slug;
  if (grade.id && !grade.id.startsWith('grade-')) {
    return grade.id.toLowerCase().trim();
  }
  return (grade.name || grade.code || grade.id || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Find matching grade from array using slug, id, or aliases
 */
export function findGradeBySlug(grades, slug) {
  if (!slug || !grades || grades.length === 0) return null;
  const target = decodeURIComponent(slug).toLowerCase().trim();

  // 1. Direct match with grade.id
  let found = grades.find(g => (g.id || '').toLowerCase() === target);
  if (found) return found;

  // 2. Match with computed slug
  found = grades.find(g => getGradeSlug(g) === target);
  if (found) return found;

  // 3. Match with aliases
  found = grades.find(g => Array.isArray(g.aliases) && g.aliases.some(a => a.toLowerCase() === target));
  if (found) return found;

  // 4. Match with code or name
  found = grades.find(g => (g.code || '').toLowerCase() === target || (g.name || '').toLowerCase() === target);
  if (found) return found;

  // 5. Loose alphanumeric match
  const alphaTarget = target.replace(/[^a-z0-9]/g, '');
  if (alphaTarget) {
    found = grades.find(g => {
      const gId = (g.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const gName = (g.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const gCode = (g.code || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const aliasMatch = Array.isArray(g.aliases) && g.aliases.some(a => a.toLowerCase().replace(/[^a-z0-9]/g, '') === alphaTarget);
      return gId === alphaTarget || gName === alphaTarget || gCode === alphaTarget || aliasMatch;
    });
  }

  return found || null;
}

/**
 * Premium Industrial Product Detail View
 * Fully data-driven from the selected product card.
 * Displays the exact product card image, specifications, dynamic grade sidebar,
 * chemistry, mechanical properties, and RFQ form.
 */
export default function ProductDetailView({
  divisionSlug,
  groupSlug,
  productSlug,
  onNavigate
}) {
  // 1. Retrieve the exact selected product data from catalog
  const product = useMemo(() => {
    return getProductCategory(divisionSlug, groupSlug, productSlug);
  }, [divisionSlug, groupSlug, productSlug]);

  // 2. Compatible related products in the same group
  const related = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product.groupSlug, product.slug, 4);
  }, [product]);

  // 3. Division details
  const division = useMemo(() => {
    if (!product) return null;
    return DIVISIONS[product.divisionSlug] || null;
  }, [product]);

  // 4. Retrieve data-driven grades/variants for this exact product
  const grades = useMemo(() => {
    return getProductGrades(product);
  }, [product]);

  // URL -> Grade State initialization on first load
  const [selectedGradeId, setSelectedGradeId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const gradeSlug = params.get('grade');
      if (gradeSlug && grades && grades.length > 0) {
        const matched = findGradeBySlug(grades, gradeSlug);
        if (matched) return matched.id;
      }
    }
    return grades[0]?.id || 'grade-0';
  });

  const [searchFilter, setSearchFilter] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const gradeDetailRef = useRef(null);

  // Sync selected grade if product changes or direct URL navigation occurs
  useEffect(() => {
    if (!grades || grades.length === 0) return;

    const params = new URLSearchParams(window.location.search);
    const gradeSlug = params.get('grade');

    if (gradeSlug) {
      const matched = findGradeBySlug(grades, gradeSlug);
      if (matched) {
        setSelectedGradeId(matched.id);
        return;
      } else {
        // Requirement 13: Invalid grade in URL -> fallback to default and clean URL
        setSelectedGradeId(grades[0].id);
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);
        return;
      }
    }

    // Requirement 12: Clean URL without grade param -> default to first grade
    setSelectedGradeId(grades[0].id);
    setSearchFilter('');
  }, [product?.id, grades]);

  // Requirement 8: Listen to popstate for browser Back / Forward grade switching
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const gradeSlug = params.get('grade');
      if (gradeSlug && grades && grades.length > 0) {
        const matched = findGradeBySlug(grades, gradeSlug);
        if (matched) {
          setSelectedGradeId(matched.id);
          return;
        }
      }
      if (grades && grades.length > 0) {
        setSelectedGradeId(grades[0].id);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [grades]);

  // Active selected grade object
  const activeGrade = useMemo(() => {
    return grades.find(g => g.id === selectedGradeId) || grades[0];
  }, [grades, selectedGradeId]);

  // Filtered grades for sidebar search
  const filteredGrades = useMemo(() => {
    if (!searchFilter.trim()) return grades;
    const q = searchFilter.toLowerCase().trim();
    return grades.filter(g => 
      g.name.toLowerCase().includes(q) ||
      (g.code && g.code.toLowerCase().includes(q)) ||
      (g.uns && g.uns.toLowerCase().includes(q)) ||
      (g.shortDesc && g.shortDesc.toLowerCase().includes(q))
    );
  }, [grades, searchFilter]);

  // Requirements 1, 2, 3, 5, 7, 9: Select grade & push URL state WITHOUT full page reload
  const handleGradeSelect = (gradeId) => {
    if (gradeId === selectedGradeId) return;

    const gradeObj = grades.find(g => g.id === gradeId);
    const slug = getGradeSlug(gradeObj) || gradeId;

    // Dynamically update address bar without reloading or jumping
    const newUrl = `${window.location.pathname}?grade=${encodeURIComponent(slug)}`;
    window.history.pushState({ gradeId, slug, type: 'grade-change' }, '', newUrl);

    setIsTransitioning(true);
    setSelectedGradeId(gradeId);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 240);
  };

  const scrollToRFQ = () => {
    const el = document.getElementById('product-rfq-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <div className="not-found-card">
          <h2>Product Specification Not Found</h2>
          <p>
            The requested product specification could not be located. It may have been updated or restructured.
          </p>
          <div className="not-found-actions">
            <button
              type="button"
              className="btn-back-cat"
              onClick={() => onNavigate && onNavigate(`/products/${divisionSlug}/${groupSlug}`)}
            >
              Back to Product Family
            </button>
            <button
              type="button"
              className="btn-back-all"
              onClick={() => onNavigate && onNavigate('/products')}
            >
              All Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Products', path: '/products' },
    {
      label: division ? division.title : (product.divisionSlug === 'manufacturer' ? 'Manufacturer Division' : 'Supplier Division'),
      path: `/products/${product.divisionSlug}`
    },
    {
      label: product.groupName || 'Pipes & Tubes',
      path: `/products/${product.divisionSlug}/${product.groupSlug}`
    },
    { label: product.name, path: null }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about ${product.name} (Grade: ${activeGrade?.name || product.grade || 'Standard'}). Please share pricing, availability, and MTC documentation.`
  );

  return (
    <div className="bright-detail-view">
      <main className="detail-main-content">
        <div className="detail-container">
          
          {/* Breadcrumb Navigation */}
          <div className="detail-breadcrumb-wrap">
            <ProductBreadcrumb items={breadcrumbItems} onNavigate={onNavigate} />
          </div>

          {/* =========================================================================
              TWO-COLUMN MASTER GRID (Aligned from the exact same top baseline)
              Left Column: Main Product Area & Selected Grade Details
              Right Column: Sticky Grade / Product Variant Navigation Sidebar
              ========================================================================= */}
          {/* 1. Product Header Information Block (Full Container Width) */}
          <div className="product-header-block">
            <div className="header-meta-row">
              <span className="badge-division">
                {product.divisionSlug === 'manufacturer' ? 'MANUFACTURER DIVISION' : 'SUPPLIER DIVISION'}
              </span>
              <span className="badge-group">
                {product.groupName || 'INDUSTRIAL CATALOGUE'}
              </span>
              <span className="badge-standard">
                {product.specs?.standards ? product.specs.standards.split(',')[0].trim() : 'ASTM / ASME CERTIFIED'}
              </span>
            </div>

            <h1 className="main-product-title">{product.name}</h1>

            <p className="main-product-lead">
              {product.description || product.shortDesc}
            </p>

            {/* Quick Metallurgy Specs Matrix (4 Equal-Height Cards) */}
            <div className="quick-specs-grid">
              <div className="spec-stat-card">
                <span className="stat-label">Size Coverage</span>
                <strong className="stat-value">{product.specs?.size || '1/8" to 36" NB'}</strong>
                <span className="stat-sub">Seamless & Large OD Welded</span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-label">Wall Thickness</span>
                <strong className="stat-value">{product.specs?.schedule || product.specs?.thickness || 'SCH 5S to SCH XXS'}</strong>
                <span className="stat-sub">Light to Heavy Wall</span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-label">Governing Code</span>
                <strong className="stat-value">
                  {product.specs?.standards ? product.specs.standards.split(',')[0].trim() : 'ASME / ASTM'}
                </strong>
                <span className="stat-sub">IBR Form III-C Approved</span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-label">Stock Status</span>
                <strong className="stat-value text-stock">Ready Ex-Stock</strong>
                <span className="stat-sub">Mill Make & Immediate Dispatch</span>
              </div>
            </div>
          </div>

          {/* 2. Main Product Image Section (Full Width Hero Card) */}
          <div className="product-hero-media-card">
            <div className="media-image-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-hero-img"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Floating Technical Verification Badges (Non-overlapping) */}
              <div className="media-badge-tag tag-top-left">
                <ShieldCheck size={14} className="tag-icon" />
                <span>100% PMI SPECTRO TESTED</span>
              </div>

              <div className="media-badge-tag tag-bottom-right">
                <span>EN 10204 3.1 & 3.2 INSPECTION CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              3. STICKY GRADE NAVIGATION & SPECIFICATION MASTER LAYOUT
              LEFT: Sticky Available Grades Navigation Panel (All grades visible, no scrollbar)
              RIGHT: Scrolling Selected Grade Details, Tables, Compliance & RFQ Form
              ========================================================================= */}
          <div className="grade-specs-master-layout">
            
            {/* ---------------------------------------------------------------------
                LEFT COLUMN: STICKY AVAILABLE GRADES NAVIGATION PANEL
                Stays sticky in the viewport while user scrolls right-side details
                --------------------------------------------------------------------- */}
            <aside className="grades-sticky-sidebar" aria-label="Available Product Grades Navigation">
              <div className="sticky-grades-card">
                
                {/* Sidebar Header Block */}
                <div className="sidebar-header-box">
                  <div className="sidebar-tag">
                    <Layers size={13} className="text-accent" />
                    <span>METALLURGY CATALOGUE</span>
                  </div>
                  <h2 className="sidebar-title">Available Grades</h2>
                  <p className="sidebar-desc">
                    Click any grade below to inspect technical chemistry, mechanical specs, and applications.
                  </p>

                  {/* Filter Search Input */}
                  {grades.length > 5 && (
                    <div className="sidebar-search-wrap">
                      <Search size={14} className="search-ico" />
                      <input
                        type="text"
                        placeholder="Search grades (304, 316, P11)..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="sidebar-search-field"
                        aria-label="Filter product grades"
                      />
                      {searchFilter && (
                        <button
                          type="button"
                          className="search-clear-cross"
                          onClick={() => setSearchFilter('')}
                          aria-label="Clear filter"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Grade Rows List — ALL GRADES VISIBLE TOGETHER, ZERO INTERNAL SCROLLER */}
                <div className="sidebar-grades-list" role="list">
                  {filteredGrades.map((grade, index) => {
                    const isSelected = selectedGradeId === grade.id;
                    return (
                      <button
                        key={grade.id}
                        type="button"
                        role="listitem"
                        className={`grade-row-button ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleGradeSelect(grade.id)}
                        aria-selected={isSelected}
                      >
                        <div className="grade-row-left">
                          <span className="grade-num-badge">#{String(index + 1).padStart(2, '0')}</span>
                          <span className="grade-name-text">{grade.name}</span>
                        </div>

                        <div className="grade-row-right">
                          {isSelected ? (
                            <span className="active-tag-chip">ACTIVE</span>
                          ) : (
                            <ChevronRight size={14} className="row-arrow-icon" />
                          )}
                        </div>
                      </button>
                    );
                  })}

                  {filteredGrades.length === 0 && (
                    <div className="sidebar-empty-state">
                      <p>No grades found matching "{searchFilter}"</p>
                      <button
                        type="button"
                        className="btn-reset-sidebar-filter"
                        onClick={() => setSearchFilter('')}
                      >
                        Show All {grades.length} Grades
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </aside>

            {/* ---------------------------------------------------------------------
                RIGHT COLUMN: SCROLLING SELECTED GRADE DETAILS & SPECIFICATIONS
                Flows naturally down the page as the primary scrollable content
                --------------------------------------------------------------------- */}
            <div className="grade-details-content-col">
              
              {/* Selected Grade Technical Deep Profile */}
              {activeGrade && (
                <section
                  ref={gradeDetailRef}
                  className={`selected-grade-section ${isTransitioning ? 'is-transitioning' : ''}`}
                  aria-live="polite"
                >
                  {/* Grade Identity Card */}
                  <div className="grade-identity-card">
                    <div className="grade-header-row">
                      <div className="grade-tag-group">
                        <span className="grade-pill-active">SELECTED SPECIFICATION</span>
                        <span className="grade-pill-type">{activeGrade.badge || 'ALLOY GRADE'}</span>
                      </div>
                      <span className="grade-code-pill">{activeGrade.standards || activeGrade.specification || 'ASTM / ASME'}</span>
                    </div>

                    <div className="grade-title-row">
                      <div>
                        <h2 className="grade-title-text">{activeGrade.name}</h2>
                        <span className="grade-sub-text">
                          {activeGrade.specification ? (
                            <>
                              SPEC: <strong>{activeGrade.specification}</strong>
                              {activeGrade.grade && (
                                <> | GRADE: <strong>{activeGrade.grade}</strong></>
                              )}
                              {activeGrade.productForm && (
                                <> | FORM: <strong>{activeGrade.productForm}</strong></>
                              )}
                              {activeGrade.uns && activeGrade.uns !== '—' && (
                                <> | UNS: <strong>{activeGrade.uns}</strong></>
                              )}
                            </>
                          ) : (
                            <>
                              UNS: <strong>{activeGrade.uns || 'Standard UNS'}</strong> | DIN / EN: <strong>{activeGrade.din || 'Standard Equivalent'}</strong>
                            </>
                          )}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="btn-grade-quote"
                        onClick={scrollToRFQ}
                      >
                        <span>Quote For This Grade</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>

                    <p className="grade-description-text">
                      {activeGrade.fullDesc || activeGrade.shortDesc}
                    </p>
                  </div>

                  {/* Key Features & Advantages */}
                  {activeGrade.features && activeGrade.features.length > 0 && (
                    <div className="detail-panel-box">
                      <h3 className="panel-title">
                        <CheckCircle2 size={18} className="title-icon" />
                        Key Metallurgical & Service Advantages — {activeGrade.name}
                      </h3>
                      <div className="features-two-col-grid">
                        {activeGrade.features.map((feat, idx) => (
                          <div key={idx} className="feature-row-item">
                            <CheckCircle2 size={16} className="feat-check" />
                            <span className="feat-text">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mechanical & Physical Properties */}
                  {activeGrade.mechanical && (
                    <div className="detail-panel-box">
                      <h3 className="panel-title">
                        <Cpu size={18} className="title-icon" />
                        Mechanical & Physical Properties (Minimum Specified at 20°C)
                      </h3>
                      <div className="mechanical-matrix-grid">
                        {activeGrade.mechanical.tensile && (
                          <div className="mech-stat-card">
                            <span className="mech-label">Tensile Strength (Rm)</span>
                            <strong className="mech-value">{activeGrade.mechanical.tensile}</strong>
                            <span className="mech-sub">ASTM minimum test</span>
                          </div>
                        )}
                        {activeGrade.mechanical.yield && (
                          <div className="mech-stat-card">
                            <span className="mech-label">Yield Strength (Rp 0.2%)</span>
                            <strong className="mech-value">{activeGrade.mechanical.yield}</strong>
                            <span className="mech-sub">0.2% Offset proof</span>
                          </div>
                        )}
                        {activeGrade.mechanical.elongation && (
                          <div className="mech-stat-card">
                            <span className="mech-label">Elongation (A5)</span>
                            <strong className="mech-value">{activeGrade.mechanical.elongation}</strong>
                            <span className="mech-sub">Gauge length 50 mm</span>
                          </div>
                        )}
                        {activeGrade.mechanical.hardness && (
                          <div className="mech-stat-card">
                            <span className="mech-label">Hardness (Max)</span>
                            <strong className="mech-value">{activeGrade.mechanical.hardness}</strong>
                            <span className="mech-sub">Specified by standard</span>
                          </div>
                        )}
                        {activeGrade.mechanical.impact && (
                          <div className="mech-stat-card card-impact">
                            <span className="mech-label">Charpy V-Notch Impact</span>
                            <strong className="mech-value text-accent">{activeGrade.mechanical.impact}</strong>
                            <span className="mech-sub">Mandatory Sub-Zero Test</span>
                          </div>
                        )}
                        {activeGrade.mechanical.maxTemp && (
                          <div className="mech-stat-card card-temp">
                            <span className="mech-label">Service Temp Limit</span>
                            <strong className="mech-value text-red">{activeGrade.mechanical.maxTemp}</strong>
                            <span className="mech-sub">Continuous design limit</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Nominal Chemical Composition Table */}
                  {activeGrade.chemistry && Object.keys(activeGrade.chemistry).length > 0 && (
                    <div className="detail-panel-box">
                      <div className="chem-box-head">
                        <div>
                          <h3 className="panel-title" style={{ margin: 0 }}>Nominal Chemical Composition (% Weight)</h3>
                          <span className="chem-note">Heat Analysis verified per applicable ASTM / ASME specifications</span>
                        </div>
                        <span className="chem-grade-badge">
                          {activeGrade.grade ? `GRADE / SPEC: ${activeGrade.grade}` : `SPECIFICATION: ${activeGrade.name}`}
                        </span>
                      </div>

                      <div className="chem-table-scroll">
                        <table className="chem-data-table">
                          <thead>
                            <tr>
                              {Object.keys(activeGrade.chemistry).map((elem) => (
                                <th key={elem}>{elem.toUpperCase()}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {Object.values(activeGrade.chemistry).map((val, idx) => (
                                <td key={idx} className={val !== '—' && (val.includes('Cr') || val.includes('Ni') || val.includes('Mo') || idx < 3) ? 'cell-highlight' : ''}>
                                  {val}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Target Industrial Applications */}
                  {activeGrade.applications && activeGrade.applications.length > 0 && (
                    <div className="detail-panel-box">
                      <h3 className="panel-title">
                        <Compass size={18} className="title-icon" />
                        Target Industrial Applications for {activeGrade.name}
                      </h3>
                      <div className="apps-chips-grid">
                        {activeGrade.applications.map((app, idx) => (
                          <div key={idx} className="app-chip-item">
                            <span className="chip-dot" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Full Engineering Specifications Table */}
              <section className="detail-panel-box full-specs-panel">
                <SpecsTable
                  specs={product.specs}
                  standards={product.standards || ['ASTM', 'ASME', 'DIN', 'ISO', 'EN', 'IBR']}
                />
              </section>

              {/* Master Compliance & Quality Testing Section */}
              <section className="detail-panel-box compliance-panel">
                <div className="compliance-head">
                  <span className="comp-eyebrow">GLOBAL COMPLIANCE PROTOCOLS</span>
                  <h3 className="comp-title">Manufacturing, Inspection & Testing Standards</h3>
                  <p className="comp-desc">
                    Every production lot of {product.name.toLowerCase()} is subjected to strict dimensional verification, non-destructive examinations, and third-party inspections.
                  </p>
                </div>

                <div className="comp-cards-grid">
                  <div className="comp-card">
                    <div className="comp-icon-box">
                      <FileText size={20} className="text-accent" />
                    </div>
                    <h4>Governing Specifications</h4>
                    <p>{product.specs?.standards || 'ASTM A312, ASTM A358, ASME SA312, ANSI B36.19M dimensional standards.'}</p>
                  </div>

                  <div className="comp-card">
                    <div className="comp-icon-box">
                      <ShieldCheck size={20} className="text-accent" />
                    </div>
                    <h4>Pressure Verification</h4>
                    <p>{product.specs?.testing || '100% Hydrostatic testing up to 400 Bar or calibrated Eddy Current inspection per ASTM E426.'}</p>
                  </div>

                  <div className="comp-card">
                    <div className="comp-icon-box">
                      <Sparkles size={20} className="text-accent" />
                    </div>
                    <h4>Statutory Certification</h4>
                    <p>{product.specs?.certification || 'EN 10204 3.1 & 3.2 inspection certificates, IBR Form III-C, NACE MR0175 compliance.'}</p>
                  </div>
                </div>
              </section>

              {/* Integrated Request For Quotation (RFQ) Form */}
              <section id="product-rfq-section" className="detail-panel-box rfq-panel">
                <div className="rfq-head">
                  <span className="rfq-eyebrow">DIRECT MILL & STOCKIST QUOTATION</span>
                  <h3 className="rfq-title">Request an Instant Quote for {product.name}</h3>
                  <p className="rfq-desc">
                    Specify your required grade ({activeGrade?.name || product.grade || 'Standard'}), schedule, quantity, and destination port. Our piping engineering team responds within 2 business hours.
                  </p>
                </div>

                <InquiryForm
                  productName={product.name}
                  materialGrade={activeGrade?.name || product.grade || 'Standard'}
                  division={product.division || 'Supplier Division'}
                />

                {/* Direct WhatsApp Callout */}
                <div className="direct-contact-banner">
                  <div className="contact-text">
                    <strong>Need immediate stock verification or project-specific schedules?</strong>
                    <span>Connect directly with our export engineering desk on WhatsApp for live mill inventory status.</span>
                  </div>
                  <a
                    href={`https://wa.me/919967616124?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-direct"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Instant WhatsApp Inquiry</span>
                  </a>
                </div>
              </section>

            </div>

          </div>

          {/* 7. Compatible Related Products (Full Width) */}
          {related && related.length > 0 && (
            <section className="detail-related-section">
              <RelatedProducts
                products={related}
                title={`Related Components in ${product.groupName || 'Piping'}`}
                onSelect={onNavigate}
              />
            </section>
          )}

        </div>
      </main>
    </div>
  );
}
