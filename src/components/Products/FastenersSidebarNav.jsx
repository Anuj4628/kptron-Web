import React, { useState } from 'react';
import { 
  FASTENER_MATERIALS, 
  CORE_FASTENER_TYPES, 
  getFastenerMaterialBySlug,
  getFastenerGradesForMaterial,
  getFastenerGradesForType,
  normalizeFastenerGradeSlug
} from '../../data/fastenerTypesData';
import { 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw,
  Filter
} from 'lucide-react';
import { formatProductUrl } from '../../utils/urlUtils';
import './FastenersSidebarNav.css';

/**
 * 3-Level Fasteners Secondary Navigation Sidebar
 * 
 * Implements the required 3-level industrial hierarchy matching Flanges:
 * Level 1: Products -> Fasteners
 * Level 2: Material (Stainless Steel, Carbon Steel, Alloy Steel, Duplex...)
 * Level 3: Types of Fasteners (01 to 05) AND Material Grades (B7, B8M, 2H, A325...)
 * Level 4: Product / Type + Grade Combination Detail
 */
export default function FastenersSidebarNav({ 
  currentMaterialSlug = 'stainless-steel', 
  currentTypeSlug = null, 
  currentGradeSlug = null,
  onSelectGrade = null,
  onNavigate 
}) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null); // 'materials' | 'types' | 'grades' | null

  const currentMaterial = getFastenerMaterialBySlug(currentMaterialSlug);
  const materialGrades = getFastenerGradesForMaterial(currentMaterial.slug);
  const normalizedCurrentGrade = normalizeFastenerGradeSlug(currentMaterial.slug, currentGradeSlug);

  // If a specific type is selected, determine which grades are available for it
  const gradesForType = currentTypeSlug 
    ? getFastenerGradesForType(currentMaterial.slug, currentTypeSlug).map(g => g.slug)
    : null;

  const handleMaterialClick = (matSlug) => {
    if (!onNavigate) return;
    if (currentTypeSlug) {
      onNavigate(formatProductUrl(`/products/fasteners/${matSlug}/${currentTypeSlug}`));
    } else {
      onNavigate(formatProductUrl(`/products/fasteners/${matSlug}`));
    }
  };

  const handleTypeClick = (typeSlug) => {
    if (!onNavigate) return;
    if (normalizedCurrentGrade) {
      onNavigate(formatProductUrl(`/products/fasteners/${currentMaterial.slug}/${typeSlug}/${normalizedCurrentGrade}`));
    } else {
      onNavigate(formatProductUrl(`/products/fasteners/${currentMaterial.slug}/${typeSlug}`));
    }
  };

  const handleGradeClick = (gradeSlug) => {
    if (onSelectGrade) {
      onSelectGrade(gradeSlug);
      return;
    }
    if (!onNavigate) return;
    if (currentTypeSlug) {
      onNavigate(formatProductUrl(`/products/fasteners/${currentMaterial.slug}/${currentTypeSlug}/${gradeSlug}`));
    } else {
      onNavigate(formatProductUrl(`/products/fasteners/${currentMaterial.slug}/grades/${gradeSlug}`));
    }
  };

  const handleResetFilters = () => {
    if (onSelectGrade) {
      onSelectGrade(null);
      return;
    }
    if (!onNavigate) return;
    onNavigate(formatProductUrl(`/products/fasteners/${currentMaterial.slug}`));
  };

  const toggleMobileAccordion = (section) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  const hasActiveFilters = Boolean(currentTypeSlug || normalizedCurrentGrade);

  return (
    <aside className="fasteners-sidebar-nav" aria-label="Fasteners Specification Navigation">
      {/* Mobile Sticky Bar */}
      <div className="sidebar-mobile-bar">
        <button 
          type="button" 
          className="sidebar-mobile-toggle-btn"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          aria-expanded={mobileExpanded}
        >
          <div className="mobile-toggle-left">
            <Filter size={16} className="toggle-icon" />
            <span className="toggle-label">
              <strong>{currentMaterial.name}</strong>
              {currentTypeSlug && ' • Type Active'}
              {normalizedCurrentGrade && ' • Grade Active'}
            </span>
          </div>
          <div className="mobile-toggle-right">
            <span>{mobileExpanded ? 'Close Filter Menu' : 'Browse Materials, Types & Grades'}</span>
            {mobileExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>
      </div>

      <div className={`sidebar-inner-content ${mobileExpanded ? 'mobile-show' : ''}`}>
        {/* Top Header Card */}
        <div className="sidebar-catalog-header">
          <div className="sidebar-title-badge">
            <span className="badge-dot" />
            <span>FASTENERS 3-LEVEL SPECIFICATION MATRIX</span>
          </div>
          <h3 className="sidebar-catalog-heading">{currentMaterial.name} Fasteners</h3>
          <p className="sidebar-catalog-sub">Material &bull; 5 Fastener Types &bull; Certified Grades</p>

          {hasActiveFilters && (
            <button
              type="button"
              className="sidebar-reset-btn"
              onClick={handleResetFilters}
              title="Reset selection back to Material overview"
            >
              <RotateCcw size={12} />
              <span>Reset to {currentMaterial.name} Overview</span>
            </button>
          )}
        </div>

        {/* ----------------------------------------------------
            LEVEL 1: MATERIAL SELECTOR
            ---------------------------------------------------- */}
        <div className="sidebar-section">
          <div 
            className="sidebar-section-header"
            onClick={() => toggleMobileAccordion('materials')}
          >
            <div className="section-header-left">
              <span className="section-step-num">01</span>
              <span className="section-title-text">SELECT ALLOY MATERIAL</span>
            </div>
            <span className="section-active-val">{currentMaterial.name}</span>
          </div>

          <div className={`sidebar-options-list ${activeAccordion === 'materials' ? 'accordion-open' : ''}`}>
            {FASTENER_MATERIALS.map((mat) => {
              const isActive = mat.slug === currentMaterial.slug;
              return (
                <button
                  key={mat.id}
                  type="button"
                  className={`sidebar-material-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleMaterialClick(mat.slug)}
                >
                  <span className="btn-indicator-bar" aria-hidden="true" />
                  <span className="btn-label-wrap">
                    <span className="mat-btn-name">{mat.name}</span>
                    <span className="mat-btn-spec">{mat.standard.split('/')[0]}</span>
                  </span>
                  {isActive ? (
                    <span className="mat-active-check">Active</span>
                  ) : (
                    <ArrowRight size={13} className="btn-arrow" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------
            LEVEL 2: TYPES OF FASTENERS (5 TYPES)
            ---------------------------------------------------- */}
        <div className="sidebar-section">
          <div 
            className="sidebar-section-header"
            onClick={() => toggleMobileAccordion('types')}
          >
            <div className="section-header-left">
              <span className="section-step-num">02</span>
              <span className="section-title-text">5 FASTENER TYPES</span>
            </div>
            <span className="section-active-val">
              {currentTypeSlug ? '1 Selected' : 'All 5 Types'}
            </span>
          </div>

          <div className={`sidebar-options-list ${activeAccordion === 'types' ? 'accordion-open' : ''}`}>
            {CORE_FASTENER_TYPES.map((type) => {
              const isActive = currentTypeSlug === type.slug;

              return (
                <button
                  key={type.id}
                  type="button"
                  className={`sidebar-type-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleTypeClick(type.slug)}
                >
                  <span className="type-btn-num">{type.number}</span>
                  <span className="type-btn-content">
                    <span className="type-btn-title">{type.name}</span>
                    <span className="type-btn-code">{type.shortCode}</span>
                  </span>
                  {isActive && <span className="type-active-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------
            LEVEL 3: CERTIFIED MATERIAL GRADES
            ---------------------------------------------------- */}
        <div className="sidebar-section">
          <div 
            className="sidebar-section-header"
            onClick={() => toggleMobileAccordion('grades')}
          >
            <div className="section-header-left">
              <span className="section-step-num">03</span>
              <span className="section-title-text">AVAILABLE GRADES</span>
            </div>
            <span className="section-active-val">
              {normalizedCurrentGrade ? 'Selected' : `${materialGrades.length} Grades`}
            </span>
          </div>

          <div className={`sidebar-grades-grid ${activeAccordion === 'grades' ? 'accordion-open' : ''}`}>
            {materialGrades.map((grade) => {
              const isActive = normalizedCurrentGrade === grade.slug;
              const isCompatibleWithType = !gradesForType || gradesForType.includes(grade.slug);

              return (
                <button
                  key={grade.id}
                  type="button"
                  className={`sidebar-grade-pill ${isActive ? 'is-active' : ''} ${!isCompatibleWithType ? 'is-disabled' : ''}`}
                  onClick={() => handleGradeClick(grade.slug)}
                  title={`${grade.name} (${grade.code})`}
                >
                  <span className="grade-pill-name">{grade.shortName}</span>
                  {isActive && <span className="grade-active-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* MTC Accreditation Quality Assurance Footnote */}
        <div className="sidebar-quality-box">
          <ShieldCheck size={16} className="quality-icon" />
          <div className="quality-text">
            <strong>100% PMI &amp; Proof Load Tested</strong>
            <span>EN 10204 3.1 &amp; 3.2 Certified Bolting</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
