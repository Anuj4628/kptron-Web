import React, { useMemo } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  FileCheck2, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  FileText,
  Sparkles,
  PhoneCall,
  Send
} from 'lucide-react';
import { formatProductUrl } from '../../utils/urlUtils';
import { getMaterialCardTitle } from '../../utils/productNaming';
import './CategoryMaterialDetailView.css';

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
 * Universal Category Material Detail View
 * 
 * Used across ALL product categories (except Flanges) when viewing a specific material:
 * - /products/pipes/stainless-steel
 * - /products/sheets-plates-coils/carbon-steel
 * - /products/bars/alloy-steel
 * - /products/buttweld-fittings/stainless-steel
 * - /products/fasteners/carbon-steel
 * 
 * Features:
 * 1. Breadcrumbs with clean back navigation.
 * 2. Compact Materials Sidebar on the left with dark navy blue active highlight.
 * 3. Horizontal Material Description Hero (clean image, title, standards, description, key specs).
 * 4. Dedicated "Available Grades" section with compact clickable grade cards in dark navy blue.
 * 5. Quality Assurance and Testing verification banner.
 */
export default function CategoryMaterialDetailView({
  categorySlug,
  categoryName,
  materialSlug,
  materials = [],
  activeCategory = null,
  isManufacturedInMumbai = false,
  onNavigate,
  onOpenQuoteModal
}) {
  // 1. Sort materials in established priority order
  const sortedMaterials = useMemo(() => {
    return [...materials].sort((a, b) => {
      const rankA = getMaterialSortRank(a);
      const rankB = getMaterialSortRank(b);
      if (rankA !== rankB) return rankA - rankB;
      return (a.name || a.title || '').localeCompare(b.name || b.title || '');
    });
  }, [materials]);

  // Current active category data
  const currentCategory = activeCategory || sortedMaterials[0] || {};
  const heroTitle = getMaterialCardTitle(currentCategory, categorySlug, categoryName);
  const currentMatName = currentCategory.materialName || currentCategory.name || 'Selected Material';
  const currentMatSlug = currentCategory.materialSlug || currentCategory.slug || materialSlug;

  // Grades available for this material
  const grades = useMemo(() => {
    return currentCategory.grades || [];
  }, [currentCategory]);

  const handleSidebarClick = (mat) => {
    if (!onNavigate) return;
    const targetSlug = mat.materialSlug || mat.slug;
    onNavigate(formatProductUrl(`/products/${categorySlug}/${targetSlug}`));
  };

  const handleGradeClick = (grade) => {
    if (!onNavigate) return;
    const gradeSlug = grade.slug || grade.id;
    onNavigate(formatProductUrl(`/products/${categorySlug}/${currentCategory.slug}/${gradeSlug}`));
  };

  const handleOpenQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal({
        productName: `${currentMatName} ${categoryName}`,
        material: currentMatName,
        standards: currentCategory.standards || 'ASTM / ASME Standards'
      });
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  return (
    <div className="cat-mat-detail-page">
      {/* 1. Breadcrumbs Strip */}
      <section className="cat-mat-breadcrumb-section">
        <div className="cat-mat-container">
          <div className="cat-mat-breadcrumb-row">
            <nav className="cat-mat-breadcrumb" aria-label="Breadcrumb">
              <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-link" onClick={() => onNavigate && onNavigate(formatProductUrl(`/products/${categorySlug}`))}>
                {categoryName}
              </span>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{currentMatName}</span>
            </nav>

            <button
              type="button"
              className="btn-back-to-materials"
              onClick={() => onNavigate && onNavigate(formatProductUrl(`/products/${categorySlug}`))}>
              <ArrowLeft size={14} />
              <span>Back to Materials in {categoryName}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Layout: Compact Sidebar (Left) + Material Details & Grades (Right) */}
      <div className="cat-mat-layout-section">
        <div className="cat-mat-container cat-mat-layout-grid">

          {/* LEFT COLUMN: Compact Materials Sidebar */}
          <aside className="cat-mat-sidebar" aria-label="Available Materials Navigation">
            <div className="cat-mat-sidebar-card">
              <div className="cat-mat-sidebar-header">
                <div className="sidebar-header-left">
                  <Layers size={15} className="sidebar-header-icon" />
                  <h3 className="cat-mat-sidebar-title">Materials</h3>
                </div>
                <span className="cat-mat-sidebar-count">{sortedMaterials.length} Alloys</span>
              </div>

              <nav className="cat-mat-sidebar-list" aria-label={`${categoryName} Materials`}>
                {sortedMaterials.map((mat) => {
                  const itemMatSlug = (mat.materialSlug || mat.slug || '').toLowerCase();
                  const targetSlug = (currentMatSlug || '').toLowerCase();
                  const isActive = itemMatSlug === targetSlug || 
                                   (mat.slug && mat.slug.toLowerCase() === (currentCategory.slug || '').toLowerCase());
                  const displayName = mat.materialName || mat.name;
                  const gradeCount = (mat.grades || []).length;

                  return (
                    <button
                      key={mat.id || mat.slug}
                      type="button"
                      className={`cat-mat-sidebar-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleSidebarClick(mat)}
                      aria-current={isActive ? 'page' : undefined}
                      title={`View ${displayName} ${categoryName}`}
                    >
                      <span className="sidebar-item-dot" aria-hidden="true" />
                      <span className="sidebar-item-name">{displayName}</span>
                      {gradeCount > 0 && (
                        <span className="sidebar-item-badge">{gradeCount}</span>
                      )}
                      <ChevronRight size={13} className="sidebar-item-arrow" aria-hidden="true" />
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Quick Inquire Box */}
              <div className="cat-mat-sidebar-cta">
                <span className="sidebar-cta-label">NEED CUSTOM ALLOY SPECS?</span>
                <p className="sidebar-cta-text">Direct mill forging &amp; custom sizing available with MTC.</p>
                <button
                  type="button"
                  className="sidebar-cta-btn"
                  onClick={handleOpenQuote}
                >
                  <Send size={12} />
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Material Description Hero & Available Grades */}
          <main className="cat-mat-main-content">

            {/* A. Top Material Description Hero (Balanced Horizontal Layout) */}
            <article className="cat-mat-hero-card">
              <div className="cat-mat-card-top-stripe" aria-hidden="true" />
              
              <div className="cat-mat-hero-split">
                {/* Left: Material Authentic Image */}
                <div className="cat-mat-hero-media">
                  <div className="cat-mat-img-wrapper">
                    <img
                      src={currentCategory.image}
                      alt={heroTitle}
                      className="cat-mat-hero-img"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="cat-mat-img-gradient" aria-hidden="true" />
                    <div className="cat-mat-img-badge">
                      <ShieldCheck size={13} className="badge-icon" />
                      <span>MILL CERTIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Material Information */}
                <div className="cat-mat-hero-body">
                  <div className="cat-mat-hero-eyebrow">
                    <span className="eyebrow-tag">{categoryName.toUpperCase()} DIVISION</span>
                    {isManufacturedInMumbai && (
                      <span className="eyebrow-mumbai">
                        <MapPin size={11} />
                        MANUFACTURED IN MUMBAI
                      </span>
                    )}
                    <span className="eyebrow-quality">ASTM / ASME QUALITY ASSURED</span>
                  </div>

                  <h1 className="cat-mat-hero-title">
                    {heroTitle}
                  </h1>

                  {/* Standards Line */}
                  {currentCategory.standards && (
                    <div className="cat-mat-standards-row">
                      <span className="standards-tag-label">STANDARDS:</span>
                      <span className="standards-tag-value">{currentCategory.standards}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="cat-mat-hero-desc">
                    {currentCategory.shortDesc || currentCategory.description || currentCategory.headline}
                  </p>

                  {/* Key Specifications Attribute Pills */}
                  <div className="cat-mat-specs-grid">
                    {currentCategory.sizeRange && (
                      <div className="spec-item">
                        <span className="spec-label">Size / Dimension Range:</span>
                        <span className="spec-value">{currentCategory.sizeRange}</span>
                      </div>
                    )}

                    {currentCategory.schedules && (
                      <div className="spec-item">
                        <span className="spec-label">Wall Thickness / Schedules:</span>
                        <span className="spec-value">{currentCategory.schedules}</span>
                      </div>
                    )}

                    {currentCategory.finishes && (
                      <div className="spec-item">
                        <span className="spec-label">Surface Finishes:</span>
                        <span className="spec-value">{currentCategory.finishes}</span>
                      </div>
                    )}

                    {currentCategory.availableForms && currentCategory.availableForms.length > 0 && (
                      <div className="spec-item full-width">
                        <span className="spec-label">Available Product Forms:</span>
                        <div className="spec-forms-pills">
                          {currentCategory.availableForms.map((form, fIdx) => (
                            <span key={fIdx} className="form-pill">
                              <span className="form-dot">•</span>
                              <span>{form}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hero Action Buttons */}
                  <div className="cat-mat-hero-actions">
                    <button
                      type="button"
                      className="btn-mat-rfq-primary"
                      onClick={handleOpenQuote}
                    >
                      <span>Request Instant Quotation</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href="#available-grades-section"
                      className="btn-mat-explore-grades"
                    >
                      <span>Explore Available Grades ({grades.length})</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* B. Dedicated "Available Grades" Section */}
            <section 
              id="available-grades-section" 
              className="cat-mat-grades-section"
              aria-label={`Available Grades in ${currentMatName} ${categoryName}`}
            >
              <div className="grades-section-header">
                <div className="grades-header-left">
                  <div className="grades-header-title-row">
                    <Layers size={16} className="grades-header-icon" />
                    <h2 className="grades-section-title">
                      Available Grades in {currentMatName} {categoryName}
                    </h2>
                    <span className="grades-count-pill">
                      {grades.length} Specifications
                    </span>
                  </div>
                  <p className="grades-section-sub">
                    Click any grade card below to inspect certified chemical composition, mechanical properties, dimension tables, and mill test standards.
                  </p>
                </div>
              </div>

              {/* Compact, Professional Clickable Grade Cards Grid */}
              {grades.length > 0 ? (
                <div className="grades-cards-grid">
                  {grades.map((grade, idx) => {
                    const gradeName = grade.name || grade.title || 'Grade Specification';
                    const gradeCode = grade.code || grade.standard || grade.din || grade.uns || '';
                    const gradeDesc = grade.shortDesc || grade.fullDesc || '';

                    return (
                      <article
                        key={grade.id || grade.slug || `g-${idx}`}
                        className="cat-grade-card"
                        onClick={() => handleGradeClick(grade)}
                        title={`View technical specifications for ${gradeName}`}
                      >
                        {grade.image && (
                          <div className="grade-card-media-box">
                            <img
                              src={grade.image}
                              alt={gradeName}
                              className="grade-card-thumb-img"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        )}

                        <div className="grade-card-top">
                          <div className="grade-title-group">
                            <h3 className="grade-card-name">{gradeName}</h3>
                            {gradeCode && (
                              <span className="grade-card-code">{gradeCode}</span>
                            )}
                          </div>
                          <div className="grade-card-arrow" aria-hidden="true">
                            <ArrowRight size={14} />
                          </div>
                        </div>

                        {/* Standard line if available */}
                        {grade.standard && grade.standard !== gradeCode && (
                          <div className="grade-card-std">
                            <span className="std-label">STD:</span>
                            <span className="std-val">{grade.standard}</span>
                          </div>
                        )}

                        {/* Short Description */}
                        {gradeDesc && (
                          <p className="grade-card-desc">{gradeDesc}</p>
                        )}

                        {/* Footer action label */}
                        <div className="grade-card-footer">
                          <span className="grade-card-action">VIEW SPECIFICATIONS</span>
                          <span className="grade-card-dot">•</span>
                          <span className="grade-card-cert">EN 10204 3.1</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="grades-empty-state">
                  <p>Certified mill test specifications for this alloy are available upon project inquiry.</p>
                  <button
                    type="button"
                    className="btn-empty-inquire"
                    onClick={handleOpenQuote}
                  >
                    Inquire for Custom Grades
                  </button>
                </div>
              )}
            </section>

            {/* C. Quality Assurance & Mill Verification Strip */}
            <section className="cat-mat-quality-strip">
              <div className="quality-item">
                <ShieldCheck size={20} className="quality-icon" />
                <div className="quality-text">
                  <strong>100% Positive Material Identification</strong>
                  <span>Every pipe, sheet, bar, fitting, and fastener undergoes spectrographic alloy verification.</span>
                </div>
              </div>

              <div className="quality-item">
                <FileCheck2 size={20} className="quality-icon" />
                <div className="quality-text">
                  <strong>EN 10204 3.1 &amp; 3.2 Mill Certification</strong>
                  <span>Complete traceability with heat numbers, chemical analysis, and mechanical test results.</span>
                </div>
              </div>

              <div className="quality-item">
                <CheckCircle2 size={20} className="quality-icon" />
                <div className="quality-text">
                  <strong>Third-Party Inspection Verified</strong>
                  <span>TUV, DNV, Lloyd’s, and Bureau Veritas inspection available on customer request.</span>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
