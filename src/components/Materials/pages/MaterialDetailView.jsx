import React, { useState, useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getMaterialBySlug, getProductsByMaterial, getMaterialCategories } from '../../../data/materialsData';
import { ArrowRight, Layers, Search, X, ShieldCheck, ChevronDown, ChevronUp, Package } from 'lucide-react';
import './MaterialDetailView.css';

/**
 * Dedicated Material Page
 * Displays ALL genuine products from the complete website associated with the selected material.
 * Reuses the exact product-card design, typography, colors, spacing, and 3-column responsive grid.
 */
export default function MaterialDetailView({ materialSlug, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const heroRef = useRef(null);
  const gridContainerRef = useRef(null);

  // Lookup canonical material
  const material = useMemo(() => {
    return getMaterialBySlug(materialSlug);
  }, [materialSlug]);

  // ALL products strictly belonging to this material across all 6 product divisions
  const allMaterialProducts = useMemo(() => {
    if (!material) return [];
    return getProductsByMaterial(material.slug);
  }, [material]);

  // Product categories/families that actually contain products for this material
  const categoryFilters = useMemo(() => {
    if (!material) return [];
    return getMaterialCategories(material.slug);
  }, [material]);

  // Filter products by selected product family and search query
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allMaterialProducts.filter(item => {
      // Family filter
      if (selectedCategory !== 'ALL' && item.productTypeSlug !== selectedCategory) {
        return false;
      }

      // Search filter
      if (q) {
        const matchTitle = (item.title || item.name || '').toLowerCase().includes(q);
        const matchType = (item.productType || '').toLowerCase().includes(q);
        const matchStandards = (item.standards || '').toLowerCase().includes(q);
        const matchDesc = (item.shortDesc || '').toLowerCase().includes(q);

        const matchGrades = (item.grades || []).some(g => {
          const gName = typeof g === 'string' ? g : (g.name || g.code || '');
          return gName.toLowerCase().includes(q);
        });

        return matchTitle || matchType || matchStandards || matchDesc || matchGrades;
      }

      return true;
    }).map(item => {
      if (!q) return item;

      // Extract matching grades when searching
      const matchingGrades = (item.grades || []).filter(g => {
        const gName = typeof g === 'string' ? g : (g.name || g.code || '');
        return gName.toLowerCase().includes(q);
      });

      return {
        ...item,
        highlightGrades: matchingGrades.length > 0 ? matchingGrades : null
      };
    });
  }, [allMaterialProducts, selectedCategory, searchQuery]);

  // Toggle card grade expansion
  const toggleExpand = (cardId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Navigate to product category page
  const handleCardClick = (product) => {
    if (onNavigate) {
      onNavigate(product.productUrl);
    }
  };

  // Navigate to grade detail page
  const handleGradeClick = (e, product, gradeItem) => {
    e.stopPropagation();
    const gradeSlug = typeof gradeItem === 'string'
      ? (product.grades.find(g => typeof g === 'object' && g.name === gradeItem)?.slug || gradeItem.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
      : (gradeItem.slug || (gradeItem.name ? gradeItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''));

    if (onNavigate) {
      if (gradeSlug) {
        onNavigate(`${product.productUrl}/${gradeSlug}`);
      } else {
        onNavigate(product.productUrl);
      }
    }
  };

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        );
      }
    });
    return () => ctx.revert();
  }, [materialSlug]);

  // Animate grid cards when category or search changes
  useEffect(() => {
    if (!gridContainerRef.current) return;
    const cards = gridContainerRef.current.querySelectorAll('.material-catalog-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' }
      );
    }
  }, [selectedCategory, searchQuery, materialSlug]);

  if (!material) {
    return (
      <div className="material-not-found-view">
        <div className="material-not-found-card">
          <h2>Material Category Not Found</h2>
          <p>We couldn't locate the requested material. Please select from our available materials.</p>
          <button
            type="button"
            className="btn-back-to-materials"
            onClick={() => onNavigate && onNavigate('/materials')}
          >
            Explore All Materials
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="clean-material-page">
      {/* 1. Header & Hero Area with Breadcrumb */}
      <section className="material-header-section" ref={heroRef}>
        <div className="material-header-container">

          {/* Breadcrumb Navigation */}
          <nav className="material-breadcrumb" aria-label="Breadcrumb">
            <a
              href="/"
              className="crumb-link"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
              }}
            >
              Home
            </a>
            <span className="crumb-sep">/</span>
            <a
              href="/materials"
              className="crumb-link"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('/materials');
              }}
            >
              Materials
            </a>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{material.name}</span>
          </nav>

          {/* Header Badges */}
          <div className="material-header-badge-row">
            <span className="material-badge-tag">{material.badge}</span>
            <span className="material-badge-count">{allMaterialProducts.length} Verified Products</span>
            <span className="material-badge-tested">
              <ShieldCheck size={13} className="inline-icon" /> 100% PMI Tested
            </span>
          </div>

          {/* Main Title & Lead Text */}
          <h1 className="material-main-title">
            {material.name} <span className="title-highlight">Products</span>
          </h1>

          <p className="material-lead-text">
            {material.shortDesc}
          </p>

          {/* Quick Specifications Strip */}
          <div className="material-quick-spec-strip">
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Primary Grades:</strong> {material.grade}
            </div>
            <div className="quick-spec-item">
              <span className="spec-item-bullet">•</span>
              <strong>Key Standards:</strong> {material.standards.join(', ')}
            </div>
          </div>

          {/* Search Bar */}
          <div className="material-search-wrapper">
            <div className="material-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={`Search ${material.name} products & grades (e.g., 304, 316L, Pipes, Flanges, ASTM)...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="material-search-input"
                aria-label={`Search ${material.name} products`}
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
                Found {filteredProducts.length} matching products for "{searchQuery}"
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="material-filter-pills-row">
            <span className="filter-pills-label">FILTER BY FAMILY:</span>
            <div className="filter-pills-list">
              <button
                type="button"
                className={`filter-pill-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('ALL')}
              >
                ALL ({allMaterialProducts.length})
              </button>
              {categoryFilters.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  className={`filter-pill-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.slug)}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Products Grid (Exact Match to Catalog Design System) */}
      <section className="material-grid-section" aria-label={`${material.name} Products Catalog`}>
        <div className="material-grid-container" ref={gridContainerRef}>
          {filteredProducts.length > 0 ? (
            <div className="material-cards-grid">
              {filteredProducts.map((prod) => {
                const isExpanded = !!expandedCards[prod.id];
                const displayGrades = searchQuery.trim() && prod.highlightGrades
                  ? prod.highlightGrades
                  : (isExpanded ? prod.grades : (prod.grades || []).slice(0, 5));

                const remainingCount = (prod.grades || []).length - 5;

                return (
                  <article
                    key={prod.id}
                    className="material-catalog-card"
                    onClick={() => handleCardClick(prod)}
                  >
                    {/* Top Red-Orange Accent Bar */}
                    <div className="card-top-accent" aria-hidden="true" />

                    {/* 1. Large Product Image on Top */}
                    <div className="card-media-wrapper">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="card-product-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="card-division-badge">{prod.productType}</span>
                    </div>

                    {/* 2. Card Content Body */}
                    <div className="card-body">
                      {/* Product Title & Standards */}
                      <div className="card-top-info">
                        <h2 className="card-title">{prod.title}</h2>

                        {prod.standards && (
                          <div className="card-standards-line">
                            <span className="standards-label">STANDARDS:</span>
                            <span className="standards-value">{prod.standards}</span>
                          </div>
                        )}

                        <p className="card-desc">{prod.shortDesc}</p>
                      </div>

                      {/* Available Grades Section */}
                      {prod.grades && prod.grades.length > 0 && (
                        <div className="card-grades-section">
                          <div className="grades-header-row">
                            <span className="grades-heading-label">
                              <Layers size={13} className="label-icon" />
                              AVAILABLE GRADES ({prod.grades.length})
                            </span>
                          </div>

                          {/* Grade Pills List with Orange Dot and Uppercase Text */}
                          <div className="grades-pills-list">
                            {displayGrades.map((gradeItem, idx) => {
                              const gradeName = typeof gradeItem === 'string' ? gradeItem : (gradeItem.name || gradeItem.code);

                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  className="grade-pill-btn"
                                  title={`View ${gradeName} Specifications`}
                                  onClick={(e) => handleGradeClick(e, prod, gradeItem)}
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
                              onClick={(e) => toggleExpand(prod.id, e)}
                              aria-expanded={isExpanded}
                            >
                              <span>
                                {isExpanded ? 'Show Less Grades' : `+ ${remainingCount} More Grades`}
                              </span>
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          )}
                        </div>
                      )}

                      {/* Bottom Action Button */}
                      <div className="card-action-box">
                        <button
                          type="button"
                          className="btn-card-action"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(prod);
                          }}
                        >
                          <span>View All Specifications</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="material-empty-box">
              <Package size={42} className="empty-box-icon" />
              <h3>No {material.name} Products Found</h3>
              <p>No products matched your search or category filter. Reset to view all {material.name} products.</p>
              <button
                type="button"
                className="btn-empty-reset"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
              >
                Show All {material.name} Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom RFQ Direct Sourcing Strip */}
      <section className="material-bottom-cta">
        <div className="material-cta-container">
          <div className="material-rfq-banner">
            <div className="material-rfq-info">
              <span className="rfq-eyebrow">CUSTOM SIZES &amp; MILL DISPATCH</span>
              <h3>Need Custom Specifications or Bulk Mill Dispatch in {material.name}?</h3>
              <p>
                KPTRON PIPING SOLUTIONS INC. maintains extensive ready inventory and provides customized cutting, beveling, ultrasonic inspection, and full EN 10204 3.1 &amp; 3.2 certification for {material.name} products.
              </p>
            </div>
            <div className="material-rfq-btns">
              <a
                href={`https://wa.me/919967616124?text=Hello%20KPTRON,%20I%20need%20a%20quote%20for%20${encodeURIComponent(material.name)}%20products`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rfq-wa"
              >
                <span>WhatsApp Inquiry</span>
              </a>
              <a
                href={`mailto:kptronpipingsolutionsinc@gmail.com?subject=Material%20Specification%20RFQ%20-%20${encodeURIComponent(material.name)}`}
                className="btn-rfq-mail"
              >
                <span>Email RFQ</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
