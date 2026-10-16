import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Layers, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// Authentic images for the 6 core product divisions
import img_pipes from '../../assets/New Product img/Pipes/pipes-showcase.jpg';
import img_sheets from '../../assets/our product new images/sheet and plates.webp';
import img_bars from '../../assets/our product new images/bars.webp';
import img_fittings from '../../assets/our product new images/buttweld fittings.webp';
import img_flanges from '../../assets/our product new images/flanges.webp';
import img_fasteners from '../../assets/our product new images/fasteners.webp';

// Live category & verified grades databases
import { PIPE_CATEGORIES } from '../../data/pipesData';
import { SHEETS_PLATES_COILS_CATEGORIES } from '../../data/sheetsPlatesCoilsData';
import { BARS_CATEGORIES } from '../../data/barsData';
import { PIPE_FITTINGS_CATEGORIES } from '../../data/pipeFittingsData';
import { FLANGES_CATEGORIES } from '../../data/flangesData';
import { FASTENERS_CATEGORIES } from '../../data/fastenersData';

import './ProductsSection.css';
import { formatProductUrl } from '../../utils/urlUtils';

gsap.registerPlugin(ScrollTrigger);

/**
 * EXACT 6 PRODUCTS SPECIFIED:
 * 1. PIPES
 * 2. SHEETS, PLATES, COILS
 * 3. BARS
 * 4. PIPE FITTINGS
 * 5. FLANGES
 * 6. FASTENERS
 */
const PRODUCTS_SHOWCASE_DATA = [
  {
    id: 'pipes',
    name: 'Pipes & Tubes',
    url: '/products/pipes-manufactured-in-mumbai',
    image: img_pipes,
    imageFit: 'cover',
    standards: 'ASTM A335 / ASME SA335, ASTM A312, ASTM A106, API 5L',
    shortDesc: 'Ferritic chrome-moly alloy steel, stainless steel, and carbon steel seamless and welded pipes engineered for high creep-rupture strength, elevated temperatures, and severe process piping.',
    categoriesList: PIPE_CATEGORIES,
    categoryUrlPrefix: '/products/pipes/'
  },
  {
    id: 'sheets-plates-coils',
    name: 'Sheets, Plates, Coils',
    url: '/products/sheets-plates-coils-manufactured-in-mumbai',
    image: img_sheets,
    imageFit: 'cover',
    standards: 'ASTM A240 / SA240, ASTM A516, ASTM A387, EN 10028',
    shortDesc: 'Cold-rolled sheets, hot-rolled pickled plates, and precision strip coils in stainless steel, boiler-quality carbon steel, chrome-moly, and corrosion-resistant alloys conforming to ASTM A240.',
    categoriesList: SHEETS_PLATES_COILS_CATEGORIES,
    categoryUrlPrefix: '/products/sheets-plates-coils/'
  },
  {
    id: 'bars',
    name: 'Bars & Rods',
    url: '/products/bars-manufactured-in-mumbai',
    image: img_bars,
    imageFit: 'cover',
    standards: 'ASTM A276 / SA276, ASTM A479, EN 10088-3, DIN 1013',
    shortDesc: 'Precision cold drawn, centerless ground, and hot rolled solid round bars, hex shafts, and square profiles with tight diameter tolerances (h8/h9) and superior surface finishes.',
    categoriesList: BARS_CATEGORIES,
    categoryUrlPrefix: '/products/bars/'
  },
  {
    id: 'buttweld-fittings',
    name: 'Buttweld Fitting / Pipe Fitting',
    url: '/products/buttweld-fittings-manufactured-in-mumbai',
    image: img_fittings,
    imageFit: 'cover',
    standards: 'ASME B16.9, MSS SP-43, ASTM A403, ASTM A234',
    shortDesc: 'Seamless and welded buttweld fittings including 45°/90° elbows, equal & reducing tees, concentric & eccentric reducers, caps, and stub ends conforming to ASME B16.9 and MSS SP-43.',
    categoriesList: PIPE_FITTINGS_CATEGORIES,
    categoryUrlPrefix: '/products/buttweld-fittings/'
  },
  {
    id: 'flanges',
    name: 'Flanges',
    url: '/products/flanges-manufactured-in-mumbai',
    image: img_flanges,
    imageFit: 'cover',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, EN 1092-1',
    shortDesc: 'Drop-forged and precision CNC machined industrial pipe flanges in weld neck, slip-on, blind, socket weld, and RTJ configurations rated from Class 150# to 2500# and PN6 to PN400.',
    categoriesList: FLANGES_CATEGORIES,
    categoryUrlPrefix: '/products/flanges/'
  },
  {
    id: 'fasteners',
    name: 'Fasteners',
    url: '/products/fasteners-manufactured-in-mumbai',
    image: img_fasteners,
    imageFit: 'cover',
    standards: 'ASTM A193 / A194, ASTM A320, DIN 933 / 934, ISO 3506',
    shortDesc: 'High-tensile, elevated-temperature, and corrosion-resistant threaded stud bolts, heavy hex nuts, socket cap screws, and washers certified to ASTM A193 B7/B8/B16 and A194 2H/Gr. 8.',
    categoriesList: FASTENERS_CATEGORIES,
    categoryUrlPrefix: '/products/fasteners/'
  }
];

export default function ProductsSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  // Expand / collapse state for grade lists per card
  const [expandedCardIds, setExpandedCardIds] = useState({});

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedCardIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCardClick = (url) => {
    if (onNavigate) {
      onNavigate(formatProductUrl(url));
    }
  };

  const handleGradeClick = (e, url) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(formatProductUrl(url));
    }
  };

  // GSAP ScrollTrigger animations on section entrance
  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
      if (headerRef.current) {
        const eyebrowBar = headerRef.current.querySelector('.eyebrow-accent-bar');
        const eyebrowText = headerRef.current.querySelector('.eyebrow-text');
        const heading = headerRef.current.querySelector('.section-display-heading');
        const desc = headerRef.current.querySelector('.section-description');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });

        if (eyebrowBar) {
          gsap.set(eyebrowBar, { scaleX: 0, transformOrigin: 'left center' });
          tl.to(eyebrowBar, { scaleX: 1, duration: 0.55, ease: 'power3.out' }, 0);
        }
        if (eyebrowText) {
          gsap.set(eyebrowText, { opacity: 0, x: -14 });
          tl.to(eyebrowText, { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' }, 0.1);
        }
        if (heading) {
          gsap.set(heading, { opacity: 0, y: 28 });
          tl.to(heading, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.16);
        }
        if (desc) {
          gsap.set(desc, { opacity: 0, y: 18 });
          tl.to(desc, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.26);
        }
      }

      // 2. Product cards reveal
      const cards = gridRef.current.querySelectorAll('.pipe-product-card');
      if (cards.length > 0) {
        gsap.set(cards, {
          opacity: 0,
          y: 35,
          scale: 0.97
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none'
          }
        });
      }

      // 3. CTA button reveal
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="products-section" aria-label="Our Products">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="products-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">ENGINEERING INVENTORY &amp; PRODUCTION</span>
          </div>

          <h2 className="section-display-heading">
            OUR <span className="text-highlight-red">PRODUCTS</span>
          </h2>

          <p className="section-description">
            Precision-engineered steel piping components, sheets, bars, fittings, flanges, and fasteners manufactured to international ASTM and ASME standards.
          </p>
        </div>

        {/* 6 Product Cards Grid (Matching the exact product card design from reference) */}
        <div ref={gridRef} className="products-grid">
          {PRODUCTS_SHOWCASE_DATA.map((prod) => {
            const isExpanded = !!expandedCardIds[prod.id];
            const allGrades = prod.categoriesList.map((cat) => ({
              id: cat.id,
              name: cat.name || cat.title,
              url: `${prod.categoryUrlPrefix}${cat.slug}`
            }));
            const displayGrades = isExpanded ? allGrades : allGrades.slice(0, 5);
            const remainingCount = allGrades.length - 5;

            return (
              <article
                key={prod.id}
                className="pipe-product-card"
                onClick={() => handleCardClick(prod.url)}
              >
                {/* Top Red-Orange Accent Bar */}
                <div className="card-top-accent" aria-hidden="true" />

                {/* Product Image Frame */}
                <div className={`card-media-wrapper media-wrapper-${prod.id}`}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={`card-product-img img-fit-${prod.imageFit || 'contain'}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="card-img-badge">
                    <ShieldCheck size={12} />
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

                  {/* Available Grades Section */}
                  <div className="card-grades-section">
                    <div className="grades-header-row">
                      <span className="grades-heading-label">
                        <Layers size={13} className="label-icon" />
                        AVAILABLE GRADES ({allGrades.length})
                      </span>
                    </div>

                    <div className="grades-pills-list">
                      {displayGrades.map((grade) => (
                        <button
                          key={grade.id}
                          type="button"
                          className="grade-pill-btn"
                          title={`View ${grade.name} Specifications`}
                          onClick={(e) => handleGradeClick(e, grade.url)}
                        >
                          <span className="pill-dot">•</span>
                          <span className="pill-text">{grade.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* Show More / Show Less Toggle Button */}
                    {remainingCount > 0 && (
                      <button
                        type="button"
                        className="btn-toggle-grades"
                        onClick={(e) => toggleExpand(prod.id, e)}
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

        {/* Clean & Premium "All Products" Button */}
        <div ref={ctaRef} className="products-action-center">
          <a
            href="/products"
            className="all-products-main-btn"
            aria-label="View All Products"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/products');
              }
            }}
          >
            <span>All Products</span>
            <ArrowRight size={18} className="btn-arrow-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
