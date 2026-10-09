import React, { useState } from 'react';
import { 
  FLANGE_MATERIALS, 
  CORE_FLANGE_TYPES, 
  getFlangeMaterialBySlug,
  getFlangeGradesForMaterial,
  getFlangeGradesForType,
  normalizeFlangeGradeSlug
} from '../../data/flangeTypesData';
import { 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw,
  Filter
} from 'lucide-react';
import { formatProductUrl } from '../../utils/urlUtils';
import './FlangesSidebarNav.css';

/**
 * 3-Level Flanges Secondary Navigation Sidebar
 * 
 * Implements the required 3-level industrial hierarchy:
 * Level 1: Products -> Flanges
 * Level 2: Material (Stainless Steel, Carbon Steel, Alloy Steel, Inconel...)
 * Level 3: Types of Flanges (01 to 12) AND Material Grades (304, 316L, A105, F11...)
 * Level 4: Product / Type + Grade Combination Detail
 */
export default function FlangesSidebarNav({ 
  currentMaterialSlug = 'stainless-steel', 
  currentTypeSlug = null, 
  currentGradeSlug = null,
  onNavigate 
}) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null); // 'materials' | 'types' | 'grades' | null

  const currentMaterial = getFlangeMaterialBySlug(currentMaterialSlug);
  const materialGrades = getFlangeGradesForMaterial(currentMaterial.slug);
  const normalizedCurrentGrade = normalizeFlangeGradeSlug(currentMaterial.slug, currentGradeSlug);

  // If a specific type is selected, determine which grades are available for it
  const gradesForType = currentTypeSlug 
    ? getFlangeGradesForType(currentMaterial.slug, currentTypeSlug).map(g => g.slug)
    : null;

  const handleMaterialClick = (matSlug) => {
    if (!onNavigate) return;
    if (currentTypeSlug) {
      onNavigate(formatProductUrl(`/products/flanges/${matSlug}/${currentTypeSlug}`));
    } else {
      onNavigate(formatProductUrl(`/products/flanges/${matSlug}`));
    }
  };

  const handleTypeClick = (typeSlug) => {
    if (!onNavigate) return;
    if (normalizedCurrentGrade) {
      onNavigate(formatProductUrl(`/products/flanges/${currentMaterial.slug}/${typeSlug}/${normalizedCurrentGrade}`));
    } else {
      onNavigate(formatProductUrl(`/products/flanges/${currentMaterial.slug}/${typeSlug}`));
    }
  };

  const handleGradeClick = (gradeSlug) => {
    if (!onNavigate) return;
    if (currentTypeSlug) {
      onNavigate(formatProductUrl(`/products/flanges/${currentMaterial.slug}/${currentTypeSlug}/${gradeSlug}`));
    } else {
      onNavigate(formatProductUrl(`/products/flanges/${currentMaterial.slug}/grades/${gradeSlug}`));
    }
  };

  const handleResetFilters = () => {
    if (onNavigate) {
      onNavigate(formatProductUrl(`/products/flanges/${currentMaterial.slug}`));
    }
  };

  const toggleMobileAccordion = (section) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  const hasActiveFilters = Boolean(currentTypeSlug || normalizedCurrentGrade);

  return (
    <aside className="flanges-sidebar-nav" aria-label="Flanges Specification Navigation">
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
            <span>FLANGES 3-LEVEL SPECIFICATION MATRIX</span>
          </div>
          <h3 className="sidebar-catalog-heading">{currentMaterial.name} Flanges</h3>
          <p className="sidebar-catalog-sub">Material &bull; 12 Flange Types &bull; Certified Grades</p>

          {hasActiveFilters && (
            <button 
              type="button" 
              className="sidebar-reset-btn"
              onClick={handleResetFilters}
              title="View all types for this material"
            >
              <RotateCcw size={12} />
              <span>Reset Type / Grade Filter</span>
            </button>
          )}
        </div>

        {/* 1. LEVEL 1: SELECT MATERIAL SECTION */}
        <div className="sidebar-group materials-group">
          <div 
            className="sidebar-group-header clickable"
            onClick={() => toggleMobileAccordion('materials')}
          >
            <div className="header-title-wrap">
              <span className="group-accent-indicator" />
              <span className="group-title">1. FLANGE MATERIALS</span>
              <span className="group-count">({FLANGE_MATERIALS.length})</span>
            </div>
            <div className="header-mobile-arrow">
              {activeAccordion === 'materials' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </div>

          <ul className={`sidebar-items-list materials-list ${activeAccordion === 'materials' ? 'accordion-open' : ''}`} role="list">
            {FLANGE_MATERIALS.map((mat) => {
              const isActive = mat.slug === currentMaterial.slug;
              return (
                <li key={mat.id} className="sidebar-item-wrap">
                  <button
                    type="button"
                    className={`sidebar-nav-btn material-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleMaterialClick(mat.slug)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="btn-bullet" aria-hidden="true">•</span>
                    <span className="btn-label">{mat.name}</span>
                    {isActive ? (
                      <span className="btn-active-pill">ACTIVE</span>
                    ) : (
                      <ArrowRight size={13} className="btn-hover-arrow" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 2. LEVEL 2: TYPES OF FLANGES SECTION */}
        <div className="sidebar-group types-group">
          <div 
            className="sidebar-group-header clickable"
            onClick={() => toggleMobileAccordion('types')}
          >
            <div className="header-title-wrap">
              <span className="group-accent-indicator accent-orange" />
              <span className="group-title">2. TYPES OF FLANGES</span>
              <span className="group-material-tag">{currentMaterial.name.toUpperCase()}</span>
            </div>
            <div className="header-mobile-arrow">
              {activeAccordion === 'types' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </div>

          <ul className={`sidebar-items-list types-list ${activeAccordion === 'types' ? 'accordion-open' : ''}`} role="list">
            {CORE_FLANGE_TYPES.map((type) => {
              const isSupported = currentMaterial.supportedTypeSlugs.includes(type.slug);
              const isActive = type.slug === currentTypeSlug;

              if (!isSupported) {
                return (
                  <li key={type.id} className="sidebar-item-wrap is-unsupported">
                    <div className="sidebar-nav-disabled" title={`Not standard in ${currentMaterial.name}`}>
                      <span className="type-index-tag muted">{type.number}</span>
                      <span className="btn-label muted">{type.name}</span>
                      <span className="unsupported-tag">On Request</span>
                    </div>
                  </li>
                );
              }

              return (
                <li key={type.id} className="sidebar-item-wrap">
                  <button
                    type="button"
                    className={`sidebar-nav-btn type-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleTypeClick(type.slug)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="type-index-tag">{type.number}</span>
                    <span className="btn-label">{type.name}</span>
                    {isActive ? (
                      <span className="btn-active-pill">SELECTED</span>
                    ) : (
                      <ArrowRight size={13} className="btn-hover-arrow" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 3. LEVEL 3: MATERIAL-SPECIFIC GRADES SECTION */}
        <div className="sidebar-group grades-group">
          <div 
            className="sidebar-group-header clickable"
            onClick={() => toggleMobileAccordion('grades')}
          >
            <div className="header-title-wrap">
              <span className="group-accent-indicator accent-blue" />
              <span className="group-title">3. MATERIAL GRADES</span>
              <span className="group-count">({materialGrades.length})</span>
            </div>
            <div className="header-mobile-arrow">
              {activeAccordion === 'grades' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </div>

          <div className="grades-intro-note">
            <span>Verified grades in <strong>{currentMaterial.name}</strong>:</span>
          </div>

          <ul className={`sidebar-items-list grades-list ${activeAccordion === 'grades' ? 'accordion-open' : ''}`} role="list">
            {materialGrades.map((grade) => {
              const isActive = grade.slug === normalizedCurrentGrade;
              const isAvailableForSelectedType = gradesForType ? gradesForType.includes(grade.slug) : true;

              return (
                <li key={grade.id} className={`sidebar-item-wrap ${!isAvailableForSelectedType ? 'grade-unavailable' : ''}`}>
                  <button
                    type="button"
                    className={`sidebar-nav-btn grade-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleGradeClick(grade.slug)}
                    aria-current={isActive ? 'true' : undefined}
                    title={grade.name}
                  >
                    <span className="grade-badge-dot" />
                    <span className="btn-label">
                      <strong>{grade.shortName}</strong>
                      <span className="grade-subcode">{grade.code.split('/')[0]}</span>
                    </span>
                    {isActive ? (
                      <span className="btn-active-pill grade-pill">ACTIVE</span>
                    ) : (
                      <ArrowRight size={13} className="btn-hover-arrow" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quality Assurance Card */}
        <div className="sidebar-mfg-assurance">
          <div className="assurance-inner">
            <ShieldCheck size={18} className="assurance-icon" />
            <div>
              <strong>100% PMI &amp; EN 10204 3.1</strong>
              <p>Heat number traceable forgings with complete chemical &amp; physical MTRs.</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
