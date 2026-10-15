import React, { useState, useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Search, 
  X, 
  CheckCircle2, 
  FileText
} from 'lucide-react';

// Authentic images for the 6 core product divisions
import img_pipes from '../../../assets/New Product img/Pipes/alloy-steel-pipes.jpg';
import img_sheets from '../../../assets/New Product img/sheet plates coil/ss-sheet.jpg';
import img_bars from '../../../assets/New Product img/Bars/ss-bars.jpg';
import img_fittings from '../../../assets/New Product img/pipe fittings/ss-pipe-fittings.jpg';
import img_flanges from '../../../assets/New Product img/flanges/ss-flanges.jpg';
import img_fasteners from '../../../assets/New Product img/fasteners/ss-fasteners.jpg';

// Live category & verified grades databases
import { PIPE_CATEGORIES } from '../../../data/pipesData';
import { SHEETS_PLATES_COILS_CATEGORIES } from '../../../data/sheetsPlatesCoilsData';
import { BARS_CATEGORIES } from '../../../data/barsData';
import { PIPE_FITTINGS_CATEGORIES } from '../../../data/pipeFittingsData';
import { FLANGES_CATEGORIES } from '../../../data/flangesData';
import { FASTENERS_CATEGORIES } from '../../../data/fastenersData';

import './ProductsLandingView.css';

/**
 * EXACT 6 PRODUCTS SPECIFIED:
 * 1. PIPES & TUBES
 * 2. SHEETS, PLATES, COILS
 * 3. BARS & RODS
 * 4. BUTTWELD FITTINGS
 * 5. FLANGES
 * 6. FASTENERS
 */
const PRODUCTS_DATA = [
  {
    id: 'pipes',
    name: 'Pipes & Tubes',
    url: '/products/pipes',
    image: img_pipes,
    standards: 'ASTM A335 / ASME SA335, ASTM A312, ASTM A106, API 5L',
    shortDesc: 'Ferritic chrome-moly alloy steel, stainless steel, and carbon steel seamless and welded pipes engineered for high creep-rupture strength, elevated temperatures, and severe process piping.',
    categoriesList: PIPE_CATEGORIES,
    categoryUrlPrefix: '/products/pipes/'
  },
  {
    id: 'sheets-plates-coils',
    name: 'Sheets, Plates, Coils',
    url: '/products/sheets-plates-coils',
    image: img_sheets,
    standards: 'ASTM A240 / SA240, ASTM A516, ASTM A387, EN 10028',
    shortDesc: 'Cold-rolled sheets, hot-rolled pickled plates, and precision strip coils in stainless steel, boiler-quality carbon steel, chrome-moly, and corrosion-resistant alloys conforming to ASTM A240.',
    categoriesList: SHEETS_PLATES_COILS_CATEGORIES,
    categoryUrlPrefix: '/products/sheets-plates-coils/'
  },
  {
    id: 'bars',
    name: 'Bars & Rods',
    url: '/products/bars',
    image: img_bars,
    standards: 'ASTM A276 / SA276, ASTM A479, EN 10088-3, DIN 1013',
    shortDesc: 'Precision cold drawn, centerless ground, and hot rolled solid round bars, hex shafts, and square profiles with tight diameter tolerances (h8/h9) and superior surface finishes.',
    categoriesList: BARS_CATEGORIES,
    categoryUrlPrefix: '/products/bars/'
  },
  {
    id: 'buttweld-fittings',
    name: 'Buttweld Fittings',
    url: '/products/buttweld-fittings',
    image: img_fittings,
    standards: 'ASME B16.9, MSS SP-43, ASTM A403, ASTM A234',
    shortDesc: 'Seamless and welded buttweld fittings including 45°/90° elbows, equal & reducing tees, concentric & eccentric reducers, caps, and stub ends conforming to ASME B16.9 and MSS SP-43.',
    categoriesList: PIPE_FITTINGS_CATEGORIES,
    categoryUrlPrefix: '/products/buttweld-fittings/'
  },
  {
    id: 'flanges',
    name: 'Flanges',
    url: '/products/flanges',
    image: img_flanges,
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, EN 1092-1',
    shortDesc: 'Drop-forged and precision CNC machined industrial pipe flanges in weld neck, slip-on, blind, socket weld, and RTJ configurations rated from Class 150# to 2500# and PN6 to PN400.',
    categoriesList: FLANGES_CATEGORIES,
    categoryUrlPrefix: '/products/flanges/'
  },
  {
    id: 'fasteners',
    name: 'Fasteners',
    url: '/products/fasteners',
    image: img_fasteners,
    standards: 'ASTM A193 / A194, ASTM A320, DIN 933 / 934, ISO 3506',
    shortDesc: 'High-tensile, elevated-temperature, and corrosion-resistant threaded stud bolts, heavy hex nuts, socket cap screws, and washers certified to ASTM A193 B7/B8/B16 and A194 2H/Gr. 8.',
    categoriesList: FASTENERS_CATEGORIES,
    categoryUrlPrefix: '/products/fasteners/'
  }
];

export default function ProductsLandingView({ onNavigate, onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Toggle category pills expand
  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter products or categories based on search and active tab
  const activeProduct = useMemo(() => {
    if (activeTab === 'all') return null;
    return PRODUCTS_DATA.find(p => p.id === activeTab) || null;
  }, [activeTab]);

  // Filtered list when browsing "all"
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCTS_DATA;
    const q = searchQuery.toLowerCase().trim();

    return PRODUCTS_DATA.filter(prod => {
      const matchProd = prod.name.toLowerCase().includes(q) ||
                        prod.shortDesc.toLowerCase().includes(q) ||
                        prod.standards.toLowerCase().includes(q);

      const matchCat = prod.categoriesList.some(cat => 
        cat.name.toLowerCase().includes(q) ||
        (cat.shortDesc && cat.shortDesc.toLowerCase().includes(q)) ||
        (cat.standards && cat.standards.toLowerCase().includes(q)) ||
        (cat.grades && cat.grades.some(g => 
          g.name.toLowerCase().includes(q) ||
          (g.code && g.code.toLowerCase().includes(q)) ||
          (g.standard && g.standard.toLowerCase().includes(q))
        ))
      );

      return matchProd || matchCat;
    });
  }, [searchQuery]);

  // Specific category cards if viewing a single division or searching inside a division
  const currentCategoryCards = useMemo(() => {
    if (!activeProduct) return [];
    if (!searchQuery.trim()) return activeProduct.categoriesList;
    const q = searchQuery.toLowerCase().trim();

    return activeProduct.categoriesList.filter(cat => 
      cat.name.toLowerCase().includes(q) ||
      (cat.shortDesc && cat.shortDesc.toLowerCase().includes(q)) ||
      (cat.standards && cat.standards.toLowerCase().includes(q)) ||
      (cat.grades && cat.grades.some(g => 
        g.name.toLowerCase().includes(q) ||
        (g.code && g.code.toLowerCase().includes(q))
      ))
    );
  }, [activeProduct, searchQuery]);

  // GSAP animation on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Animate grid cards when tab or search changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.product-catalog-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeTab, searchQuery]);

  const handleProductCardClick = (url) => {
    if (onNavigate) {
      onNavigate(url);
    }
  };

  const handleCategoryPillClick = (e, url) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(url);
    }
  };

  const handleGradePillClick = (e, catUrl, gradeSlug) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(`${catUrl}/${gradeSlug}`);
    }
  };

  return (
    <div className="clean-products-catalog-page">
      {/* 1. Header Section */}
      <section className="catalog-header-section">
        <div className="catalog-header-container" ref={headerRef}>
          {/* Breadcrumb Navigation */}
          <nav className="catalog-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Products</span>
            {activeProduct && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activeProduct.name}</span>
              </>
            )}
          </nav>

          {/* Badge Tag */}
          <div className="catalog-badge-row">
            <span className="catalog-badge-tag">COMPLETE INDUSTRIAL CATALOGUE</span>
            <span className="catalog-badge-count">6 DIVISIONS • 36 SPECIALIZED CATEGORIES</span>
          </div>

          {/* Main Title */}
          <h1 className="catalog-main-title">
            All Products &amp; <span className="text-highlight-red">Engineering Categories</span>
          </h1>

          {/* Subtitle */}
          <p className="catalog-lead-text">
            Complete inventory of precision steel piping components, sheets, plates, bars, fittings, flanges, and fasteners manufactured to ASTM, ASME, EN, DIN, and ISO standards. Select any product division to explore certified categories and technical grades.
          </p>

          {/* Search Box */}
          <div className="catalog-search-bar">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search products, categories, or grades (e.g. Inconel, 316L, Flanges, Butt Weld, A335)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search catalog"
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
      </section>

      {/* 2. Division Navigation Filter Bar */}
      <nav className="catalog-filter-navbar" aria-label="Product Divisions">
        <div className="catalog-filter-container">
          <button
            type="button"
            className={`catalog-filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>All Products (6)</span>
          </button>
          {PRODUCTS_DATA.map((prod) => (
            <button
              key={prod.id}
              type="button"
              className={`catalog-filter-tab ${activeTab === prod.id ? 'active' : ''}`}
              onClick={() => setActiveTab(prod.id)}
            >
              <span>{prod.name} (6)</span>
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Products / Categories Grid Area */}
      <section className="catalog-content-section">
        <div className="catalog-content-container">

          {/* Section Sub-heading Info Bar */}
          <div className="catalog-status-bar">
            <div className="status-left">
              <span className="status-label">
                {activeTab === 'all' ? (
                  <>Showing <strong>{filteredProducts.length}</strong> Industrial Product Divisions with All Categories</>
                ) : (
                  <>Showing <strong>{currentCategoryCards.length}</strong> Categories for <strong>{activeProduct?.name}</strong></>
                )}
              </span>
            </div>

            {searchQuery && (
              <div className="status-right">
                <span className="search-query-tag">Search query: "{searchQuery}"</span>
                <button
                  type="button"
                  className="btn-text-clear"
                  onClick={() => setSearchQuery('')}
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>

          {/* VIEW A: All Products Overview (6 Core Products with their Categories) */}
          {activeTab === 'all' && (
            filteredProducts.length > 0 ? (
              <div ref={gridRef} className="catalog-cards-grid">
                {filteredProducts.map((prod) => {
                  const isExpanded = !!expandedCards[prod.id];
                  const allCategories = prod.categoriesList.map(cat => ({
                    id: cat.id,
                    name: cat.name,
                    slug: cat.slug,
                    url: `${prod.categoryUrlPrefix}${cat.slug}`
                  }));
                  const displayCategories = isExpanded ? allCategories : allCategories.slice(0, 5);
                  const remainingCount = allCategories.length - 5;

                  return (
                    <article
                      key={prod.id}
                      className="product-catalog-card"
                      onClick={() => handleProductCardClick(prod.url)}
                    >
                      {/* Top Red-Orange Accent Bar */}
                      <div className="card-top-accent" aria-hidden="true" />

                      {/* Product Media Wrapper */}
                      <div className="card-media-wrapper">
                        <img
                          src={prod.image}
                          alt={prod.name}
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
                          <h2 className="card-title">{prod.name}</h2>

                          <div className="card-standards-line">
                            <span className="standards-label">STANDARDS:</span>
                            <span className="standards-value">{prod.standards}</span>
                          </div>

                          <p className="card-desc">{prod.shortDesc}</p>
                        </div>

                        {/* Available Categories Section */}
                        <div className="card-categories-section">
                          <div className="categories-header-row">
                            <span className="categories-heading-label">
                              <Layers size={13} className="label-icon" />
                              CATEGORIES ({allCategories.length})
                            </span>
                          </div>

                          <div className="categories-pills-list">
                            {displayCategories.map((cat) => (
                              <button
                                key={cat.id}
                                type="button"
                                className="category-pill-btn"
                                title={`View ${cat.name}`}
                                onClick={(e) => handleCategoryPillClick(e, cat.url)}
                              >
                                <span className="pill-dot">•</span>
                                <span className="pill-text">{cat.name}</span>
                              </button>
                            ))}
                          </div>

                          {/* Toggle Expand */}
                          {remainingCount > 0 && (
                            <button
                              type="button"
                              className="btn-toggle-pills"
                              onClick={(e) => toggleExpand(prod.id, e)}
                            >
                              <span>{isExpanded ? 'Show Less' : `+ ${remainingCount} More Categories`}</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Card Footer Action Bar */}
                      <div className="card-footer-bar">
                        <span className="card-action-text">EXPLORE ALL 6 CATEGORIES</span>
                        <div className="card-arrow-circle" aria-hidden="true">
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="catalog-empty-state">
                <Search size={44} className="empty-icon" />
                <h3>No matching products found</h3>
                <p>We couldn't find any products or categories matching "{searchQuery}".</p>
                <button
                  type="button"
                  className="btn-empty-reset"
                  onClick={() => setSearchQuery('')}
                >
                  View All 6 Product Divisions
                </button>
              </div>
            )
          )}

          {/* VIEW B: Individual Division View (6 Categories of the selected Division) */}
          {activeTab !== 'all' && activeProduct && (
            currentCategoryCards.length > 0 ? (
              <div ref={gridRef} className="catalog-cards-grid">
                {currentCategoryCards.map((cat) => {
                  const isExpanded = !!expandedCards[cat.id];
                  const grades = cat.grades || [];
                  const displayGrades = isExpanded ? grades : grades.slice(0, 5);
                  const remainingGrades = grades.length - 5;
                  const catUrl = `${activeProduct.categoryUrlPrefix}${cat.slug}`;

                  return (
                    <article
                      key={cat.id}
                      className="product-catalog-card category-level-card"
                      onClick={() => handleProductCardClick(catUrl)}
                    >
                      {/* Top Red-Orange Accent Bar */}
                      <div className="card-top-accent" aria-hidden="true" />

                      {/* Category Media Wrapper */}
                      <div className="card-media-wrapper">
                        <img
                          src={cat.image || activeProduct.image}
                          alt={cat.name}
                          className="card-product-img"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="card-img-badge">
                          <ShieldCheck size={13} />
                          <span>EN 10204 3.1</span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="card-body">
                        <div className="card-top-info">
                          <span className="card-parent-pill">{activeProduct.name}</span>
                          <h2 className="card-title">{cat.name}</h2>

                          {cat.standards && (
                            <div className="card-standards-line">
                              <span className="standards-label">STANDARDS:</span>
                              <span className="standards-value">{cat.standards}</span>
                            </div>
                          )}

                          <p className="card-desc">{cat.shortDesc}</p>
                        </div>

                        {/* Grades Section */}
                        {grades.length > 0 && (
                          <div className="card-categories-section">
                            <div className="categories-header-row">
                              <span className="categories-heading-label">
                                <Layers size={13} className="label-icon" />
                                AVAILABLE GRADES ({grades.length})
                              </span>
                            </div>

                            <div className="categories-pills-list">
                              {displayGrades.map((grade) => (
                                <button
                                  key={grade.id || grade.slug}
                                  type="button"
                                  className="category-pill-btn"
                                  title={`View ${grade.name} Specifications`}
                                  onClick={(e) => handleGradePillClick(e, catUrl, grade.slug)}
                                >
                                  <span className="pill-dot">•</span>
                                  <span className="pill-text">{grade.name}</span>
                                </button>
                              ))}
                            </div>

                            {remainingGrades > 0 && (
                              <button
                                type="button"
                                className="btn-toggle-pills"
                                onClick={(e) => toggleExpand(cat.id, e)}
                              >
                                <span>{isExpanded ? 'Show Less' : `+ ${remainingGrades} More Grades`}</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Card Footer Action Bar */}
                      <div className="card-footer-bar">
                        <span className="card-action-text">VIEW SPECIFICATIONS &amp; MTC</span>
                        <div className="card-arrow-circle" aria-hidden="true">
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="catalog-empty-state">
                <Search size={44} className="empty-icon" />
                <h3>No categories match "{searchQuery}"</h3>
                <p>Try searching for a different grade or clear your search term.</p>
                <button
                  type="button"
                  className="btn-empty-reset"
                  onClick={() => setSearchQuery('')}
                >
                  View All Categories in {activeProduct.name}
                </button>
              </div>
            )
          )}

        </div>
      </section>

      {/* 4. Industrial Quality Assurance Banner */}
      <section className="catalog-quality-banner">
        <div className="catalog-content-container">
          <div className="quality-banner-box">
            <div className="quality-text-side">
              <span className="quality-eyebrow">QUALITY ASSURANCE &amp; MATERIAL TRACEABILITY</span>
              <h3 className="quality-title">100% Certified Mill Test Reports &amp; PMI Verification</h3>
              <p className="quality-desc">
                Every piping component, flange, plate, and fastener is dispatched with complete EN 10204 3.1 &amp; 3.2 inspection certificates, chemical batch analysis, mechanical testing data, and third-party inspection (TPI) acceptance.
              </p>
            </div>

            <div className="quality-badges-grid">
              <div className="q-badge-card">
                <CheckCircle2 size={18} className="q-badge-icon" />
                <div>
                  <strong>EN 10204 3.1 &amp; 3.2</strong>
                  <span>MTC Certification</span>
                </div>
              </div>
              <div className="q-badge-card">
                <CheckCircle2 size={18} className="q-badge-icon" />
                <div>
                  <strong>100% PMI Tested</strong>
                  <span>Positive Metal Verification</span>
                </div>
              </div>
              <div className="q-badge-card">
                <CheckCircle2 size={18} className="q-badge-icon" />
                <div>
                  <strong>ISO 9001:2015</strong>
                  <span>Certified Quality Standard</span>
                </div>
              </div>
              <div className="q-badge-card">
                <CheckCircle2 size={18} className="q-badge-icon" />
                <div>
                  <strong>Hydro &amp; UT Tested</strong>
                  <span>100% NDT Inspection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct RFQ Banner */}
      <section className="catalog-rfq-banner">
        <div className="catalog-content-container">
          <div className="rfq-banner-box">
            <div className="rfq-text-side">
              <span className="rfq-badge">ENGINEERING SUPPORT</span>
              <h3 className="rfq-title">Need Custom Schedules, Heavy Walls, or Exotic Metallurgy?</h3>
              <p className="rfq-desc">
                Our metallurgical engineers can evaluate your bill of materials, project drawings, and custom specifications to provide formal quotations with guaranteed lead times.
              </p>
            </div>
            <div className="rfq-action-side">
              <button
                type="button"
                className="btn-catalog-rfq"
                onClick={() => {
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal({
                      productName: activeProduct ? activeProduct.name : 'Industrial Piping & Steel Products'
                    });
                  } else if (onNavigate) {
                    onNavigate('/contact');
                  }
                }}
              >
                <FileText size={17} />
                <span>Request Technical Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
