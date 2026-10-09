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
  'refractory-anchor': 14,
  'is-grades': 15,
  'api-5l': 16,
  'en-standards': 17
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
 * Universal Category Material Listing View
 * 
 * Used across ALL 6 product categories when visiting their category root:
 * - /products/flanges -> "Materials in Flanges"
 * - /products/pipes -> "Materials in Pipes & Tubes"
 * - /products/sheets-plates-coils -> "Materials in Sheets & Plates"
 * - /products/bars -> "Materials in Bars & Rods"
 * - /products/pipe-fittings -> "Materials in Pipe Fittings"
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

  // 1. Sort materials in strict priority order (SS #1, CS #2, AS #3, etc.)
  const sortedMaterials = useMemo(() => {
    return [...materials].sort((a, b) => {
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
      const desc = (mat.shortDesc || mat.description || '').toLowerCase();
      const standards = (mat.standards || '').toLowerCase();

      const matchingGrades = (mat.grades || []).filter(g => {
        const gName = typeof g === 'string' ? g : (g.name || g.code || g.shortName || '');
        return gName.toLowerCase().includes(q);
      });

      if (name.includes(q) || desc.includes(q) || standards.includes(q) || matchingGrades.length > 0) {
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
    const matSlug = mat.materialSlug || mat.slug.replace(/-(flanges|pipe|pipes|bars|bar|pipe-fittings|fasteners|sheets-plates-coils)$/, '');
    const targetUrl = formatProductUrl(`/products/${categorySlug}/${matSlug}`);
    if (onNavigate) {
      onNavigate(targetUrl);
    }
  };

  // Click handler for grade chip -> Opens specific grade detail page
  const handleGradeClick = (e, mat, grade) => {
    e.stopPropagation();
    const matSlug = mat.materialSlug || mat.slug.replace(/-(flanges|pipe|pipes|bars|bar|pipe-fittings|fasteners|sheets-plates-coils)$/, '');
    const gradeSlug = typeof grade === 'string'
      ? grade.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : (grade.slug || grade.id || (grade.name ? grade.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''));

    const targetUrl = formatProductUrl(`/products/${categorySlug}/${matSlug}/${gradeSlug}`);
    if (onNavigate) {
      onNavigate(targetUrl);
    }
  };

  return (
    <div className="cat-materials-page">
      {/* 1. Header Section */}
      <section className="cat-materials-header">
        <div className="cat-materials-header-inner">
          {/* Breadcrumb Navigation */}
          <nav className="cat-materials-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{categoryName}</span>
          </nav>

          <div className="cat-materials-badge-row">
            <span className="cat-materials-badge-tag">METALLURGICAL ALLOY CATALOG</span>
            {isManufacturedInMumbai && (
              <span className="cat-materials-badge-mumbai">
                <MapPin size={12} />
                MANUFACTURED IN MUMBAI
              </span>
            )}
            <span className="cat-materials-badge-count">{materials.length} Certified Alloys</span>
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
                placeholder={`Search materials or grades in ${categoryName} (e.g., Stainless Steel, Inconel 625, ASTM A105, 316L)...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cat-materials-search-input"
                aria-label={`Search materials in ${categoryName}`}
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
                Found {filteredMaterials.length} matching materials for "{searchQuery}"
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
                const displayName = mat.materialName || mat.name || mat.title;

                return (
                  <article
                    key={matId}
                    className="cat-material-card"
                    onClick={() => handleCardClick(mat)}
                    title={`View ${displayName} ${categoryName} Details`}
                  >
                    {/* Top Red-Orange Accent Bar */}
                    <div className="card-top-accent" aria-hidden="true" />

                    {/* Material Image Frame */}
                    <div className="card-media-wrapper">
                      <img
                        src={mat.image}
                        alt={`${displayName} ${categoryName}`}
                        className="card-material-img"
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
                      <span className="card-action-text">EXPLORE MATERIAL</span>
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
