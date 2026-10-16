import React, { useState, useMemo } from 'react';
import { Search, X, ShieldCheck, Layers, ChevronDown, ChevronUp, ArrowRight, MapPin } from 'lucide-react';
import { formatProductUrl } from '../../utils/urlUtils';
import './CategoryMaterialListingView.css';

/**
 * Material Priority Sorting Order:
 * 1. Stainless Steel
 * 2. Carbon Steel
 * 3. Alloy Steel
 * 4. Remaining available materials in logical order
 */
const MATERIAL_PRIORITY = {
  'stainless-steel': 1,
  'carbon-steel': 2,
  'alloy-steel': 3,
  'duplex-steel': 4,
  'super-duplex-steel': 5,
  'inconel': 6,
  'monel': 7,
  'hastelloy': 8,
  'nickel-alloys': 9,
  'copper-nickel': 10,
  'titanium': 11,
  'aluminum': 12,
  'maraging-steel': 13,
  'is-grades': 14,
  'api-5l': 15,
  'en-standards': 16
};

function getMaterialSortRank(mat) {
  const slug = (mat.materialSlug || mat.slug || mat.id || '').toLowerCase();
  for (const [key, rank] of Object.entries(MATERIAL_PRIORITY)) {
    if (slug === key || slug.startsWith(key) || slug.includes(key)) {
      return rank;
    }
  }
  return 99;
}

/**
 * Formats material card titles across the website to display:
 * [Material Name] [Product Category]
 * 
 * Examples:
 * - Pipes: Stainless Steel Pipes, Carbon Steel Pipes, Alloy Steel Pipes, Titanium Pipes, Duplex Steel Pipes, Super Duplex Steel Pipes
 * - Bars: Stainless Steel Bars, Carbon Steel Bars, Alloy Steel Bars, Titanium Bars, and other available materials followed by 'Bars'
 * - Flanges: Stainless Steel Flanges, Carbon Steel Flanges, Alloy Steel Flanges, Titanium Flanges, and other available materials followed by 'Flanges'
 * - Fasteners: Stainless Steel Fasteners, Carbon Steel Fasteners, Alloy Steel Fasteners, Titanium Fasteners, and other available materials followed by 'Fasteners'
 * - Buttweld Fittings: Stainless Steel Fittings, Carbon Steel Fittings, Alloy Steel Fittings, Titanium Fittings, and all other available materials followed by 'Fittings'
 * - Sheets & Plates: Stainless Steel Sheets & Plates, Carbon Steel Sheets & Plates, Alloy Steel Sheets & Plates, Titanium Sheets & Plates (NEVER 'Coils')
 */
import { getMaterialCardTitle } from '../../utils/productNaming';
export { getMaterialCardTitle };

/**
 * Universal Category Material Listing View
 * 
 * Used across ALL 6 product categories when visiting their category root:
 * - /products/flanges -> "Materials in Flanges"
 * - /products/pipes -> "Materials in Pipes & Tubes"
 * - /products/sheets-plates-coils -> "Materials in Sheets & Plates"
 * - /products/bars -> "Materials in Bars & Rods"
 * - /products/buttweld-fittings -> "Materials in Buttweld Fittings"
 * - /products/fasteners -> "Materials in Fasteners"
 */
export default function CategoryMaterialListingView({
  categorySlug,
  categoryName,
  mainHeading,
  leadText,
  materials = [],
  isManufacturedInMumbai = false,
  onNavigate,
  onOpenQuoteModal
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

const PRODUCT_FAMILY_PRIORITY = {
  'pipes': 1,
  'sheets-plates-coils': 2,
  'bars': 3,
  'buttweld-fittings': 4,
  'flanges': 5,
  'fasteners': 6
};

function getProductFamilySortRank(mat) {
  if (mat.productTypeSlug && PRODUCT_FAMILY_PRIORITY[mat.productTypeSlug]) {
    return PRODUCT_FAMILY_PRIORITY[mat.productTypeSlug];
  }
  return 99;
}

  // 1. Sort materials in strict priority order (SS #1, CS #2, AS #3, etc.)
  // When displaying products within a material, sort by standard division order (Pipes -> Sheets -> Bars -> Fittings -> Flanges -> Fasteners)
  const sortedMaterials = useMemo(() => {
    return [...materials].sort((a, b) => {
      if (a.productTypeSlug || b.productTypeSlug) {
        const pRankA = getProductFamilySortRank(a);
        const pRankB = getProductFamilySortRank(b);
        if (pRankA !== pRankB) return pRankA - pRankB;
      }
      const rankA = getMaterialSortRank(a);
      const rankB = getMaterialSortRank(b);
      if (rankA !== rankB) return rankA - rankB;
      return (a.name || a.title || '').localeCompare(b.name || b.title || '');
    });
  }, [materials]);

  // 2. Filter by search query
  const filteredMaterials = useMemo(() => {
    if (!searchQuery.trim()) return sortedMaterials;
    const q = searchQuery.toLowerCase().trim();

    return sortedMaterials.map(mat => {
      const name = (mat.materialName || mat.name || mat.title || '').toLowerCase();
      const productType = (mat.productType || '').toLowerCase();
      const desc = (mat.shortDesc || mat.description || '').toLowerCase();
      const standards = (mat.standards || '').toLowerCase();

      const matchingGrades = (mat.grades || []).filter(g => {
        const gName = typeof g === 'string' ? g : (g.name || g.code || g.shortName || '');
        return gName.toLowerCase().includes(q);
      });

      if (name.includes(q) || productType.includes(q) || desc.includes(q) || standards.includes(q) || matchingGrades.length > 0) {
        return {
          ...mat,
          highlightGrades: matchingGrades.length > 0 ? matchingGrades : null
        };
      }
      return null;
    }).filter(Boolean);
  }, [sortedMaterials, searchQuery]);

  const toggleExpand = (matId, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [matId]: !prev[matId]
    }));
  };

  // Click handler for parent material card -> Opens material detail page
  const handleCardClick = (mat) => {
    if (mat.productUrl) {
      if (onNavigate) {
        onNavigate(mat.productUrl);
      }
      return;
    }
    const matSlug = mat.materialSlug || mat.slug.replace(/-(flanges|pipe|pipes|bars|bar|buttweld-fittings|pipe-fittings|fasteners|sheets-plates-coils)$/, '');
    if (categorySlug === 'materials' || !categorySlug) {
      if (onNavigate) {
        onNavigate(`/materials/${matSlug}`);
      }
      return;
    }
    const targetUrl = formatProductUrl(`/products/${categorySlug}/${matSlug}`);
    if (onNavigate) {
      onNavigate(targetUrl);
    }
  };

  // Click handler for grade chip -> Opens specific grade detail page
  const handleGradeClick = (e, mat, grade) => {
    e.stopPropagation();
    const gradeSlug = typeof grade === 'string'
      ? grade.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : (grade.slug || grade.id || (grade.name ? grade.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''));

    if (mat.productUrl && gradeSlug) {
      if (onNavigate) {
        onNavigate(`${mat.productUrl}/${gradeSlug}`);
      }
      return;
    }

    const matSlug = mat.materialSlug || mat.slug.replace(/-(flanges|pipe|pipes|bars|bar|buttweld-fittings|pipe-fittings|fasteners|sheets-plates-coils)$/, '');

    if (categorySlug === 'materials' || !categorySlug) {
      // Direct to grade detail or material catalog view
      const isPipe = ['stainless-steel', 'carbon-steel', 'alloy-steel', 'super-duplex-steel', 'duplex-steel', 'inconel', 'monel', 'hastelloy', 'nickel-alloys', 'copper-nickel', 'titanium', 'aluminum', 'is-grades', 'api-5l', 'en-standards'].includes(matSlug);
      if (isPipe && gradeSlug) {
        const targetUrl = formatProductUrl(`/products/pipes/${matSlug}/${gradeSlug}`);
        if (onNavigate) {
          onNavigate(targetUrl);
          return;
        }
      }
      if (onNavigate) {
        onNavigate(`/materials/${matSlug}`);
      }
      return;
    }

    const targetUrl = formatProductUrl(`/products/${categorySlug}/${matSlug}/${gradeSlug}`);
    if (onNavigate) {
      onNavigate(targetUrl);
    }
  };

  return (
    <div className={`cat-materials-page ${categorySlug ? `cat-materials-page-${categorySlug}` : ''}`}>
      {/* 1. Header Section */}
      <section className="cat-materials-header">
        <div className="cat-materials-header-inner">
          {/* Breadcrumb Navigation */}
          <nav className="cat-materials-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            {categorySlug === 'materials' ? (
              categoryName && categoryName !== 'Materials' ? (
                <>
                  <span className="crumb-link" onClick={() => onNavigate && onNavigate('/materials')}>Materials</span>
                  <span className="crumb-sep">/</span>
                  <span className="crumb-current">{categoryName}</span>
                </>
              ) : (
                <span className="crumb-current">Materials</span>
              )
            ) : (
              <>
                <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{categoryName}</span>
              </>
            )}
          </nav>

          <div className="cat-materials-badge-row">
            <span className="cat-materials-badge-tag">
              {categorySlug === 'materials' && categoryName && categoryName !== 'Materials' ? 'VERIFIED PRODUCT CATALOG' : 'METALLURGICAL ALLOY CATALOG'}
            </span>
            {isManufacturedInMumbai && (
              <span className="cat-materials-badge-mumbai">
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="cat-materials-badge-count">
              {materials.length} {categorySlug === 'materials' && categoryName && categoryName !== 'Materials' ? 'Verified Products' : 'Certified Alloys'}
            </span>
          </div>

          <h1 className="cat-materials-main-heading">
            {mainHeading}
            {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
          </h1>

          <p className="cat-materials-lead-text">
            {leadText || `Explore our comprehensive mill inventory and custom-forged ${categoryName} produced across all prime metallurgical alloy classifications. All materials are certified with complete EN 10204 3.1 & 3.2 mill test reports and stringent PMI verification.`}
          </p>

          {/* Search Bar */}
          <div className="cat-materials-search-wrap">
            <div className="cat-materials-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={
                  categorySlug === 'materials'
                    ? (categoryName && categoryName !== 'Materials'
                        ? `Search ${categoryName} products & grades (e.g., Pipes, Flanges, 304, 316L, ASTM)...`
                        : "Search materials or grades (e.g., Stainless Steel, Inconel 625, ASTM A105, 316L)...")
                    : `Search materials or grades in ${categoryName} (e.g., Stainless Steel, Inconel 625, ASTM A105, 316L)...`
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cat-materials-search-input"
                aria-label={`Search ${categoryName || 'materials'}`}
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
              <div className="search-results-indicator">
                Found {filteredMaterials.length} matching {categorySlug === 'materials' && categoryName && categoryName !== 'Materials' ? 'products' : 'materials'} for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Material Cards Grid */}
      <section className="cat-materials-grid-section">
        <div className="cat-materials-grid-container">
          {filteredMaterials.length > 0 ? (
            <div className="cat-materials-cards-grid">
              {filteredMaterials.map((mat, idx) => {
                const matId = mat.id || mat.slug || `mat-${idx}`;
                const isExpanded = !!expandedCards[matId];
                const allGrades = mat.grades || [];
                const displayGrades = searchQuery.trim() && mat.highlightGrades
                  ? mat.highlightGrades
                  : (isExpanded ? allGrades : allGrades.slice(0, 5));

                const remainingCount = allGrades.length - 5;
                const displayName = (mat.productUrl && (mat.title || mat.name))
                  ? (mat.title || mat.name)
                  : getMaterialCardTitle(mat, categorySlug, categoryName);

                return (
                  <article
                    key={matId}
                    className="cat-material-card"
                    onClick={() => handleCardClick(mat)}
                    title={`View ${displayName} Details`}
                  >
                    {/* Top Red-Orange Accent Bar */}
                    <div className="card-top-accent" aria-hidden="true" />

                    {/* Material Image Frame */}
                    <div className="card-media-wrapper">
                      <img
                        src={mat.image}
                        alt={displayName}
                        className="card-material-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-img-badge">
                        <ShieldCheck size={13} />
                        <span>{mat.productType ? mat.productType : 'MILL CERTIFIED'}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="card-body">
                      <div className="card-top-info">
                        <h2 className="card-title">{displayName}</h2>

                        {mat.standards && (
                          <div className="card-standards-line">
                            <span className="standards-label">STANDARDS:</span>
                            <span className="standards-value">
                              {mat.standards.split(',').slice(0, 3).join(', ')}
                            </span>
                          </div>
                        )}

                        <p className="card-desc">{mat.shortDesc || mat.description}</p>
                      </div>

                      {/* Available Grades Section */}
                      {allGrades.length > 0 && (
                        <div className="card-grades-section">
                          <div className="grades-header-row">
                            <span className="grades-heading-label">
                              <Layers size={13} className="label-icon" />
                              AVAILABLE GRADES ({allGrades.length})
                            </span>
                          </div>

                          <div className="grades-pills-list">
                            {displayGrades.map((grade, gIdx) => {
                              const gradeName = typeof grade === 'string' ? grade : (grade.name || grade.code || grade.shortName);
                              const gradeKey = typeof grade === 'string' ? `${grade}-${gIdx}` : (grade.id || grade.slug || `grade-${gIdx}`);

                              return (
                                <button
                                  key={gradeKey}
                                  type="button"
                                  className="material-grade-pill-btn"
                                  title={`View specifications for ${gradeName}`}
                                  onClick={(e) => handleGradeClick(e, mat, grade)}
                                >
                                  <span className="pill-dot">•</span>
                                  <span className="pill-text">{gradeName}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Show More / Show Less Toggle Button */}
                          {!searchQuery.trim() && remainingCount > 0 && (
                            <button
                              type="button"
                              className="btn-toggle-grades"
                              onClick={(e) => toggleExpand(matId, e)}
                            >
                              <span>{isExpanded ? 'Show Less Grades' : `+ ${remainingCount} More Grades`}</span>
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="card-footer-bar">
                      <span className="card-action-text">
                        {mat.productUrl ? `EXPLORE ${mat.productType || 'PRODUCT'}` : 'EXPLORE MATERIAL'}
                      </span>
                      <div className="card-arrow-circle" aria-hidden="true">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="cat-materials-empty-state">
              <h3>No materials match "{searchQuery}"</h3>
              <p>Try searching for a different alloy or grade (such as Stainless Steel, 304, 316, Carbon Steel, or Inconel).</p>
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
    </div>
  );
}
