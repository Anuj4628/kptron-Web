import React, { useState, useEffect, useMemo } from 'react';
import { 
  getFastenerTypeDetail, 
  getFastenerTypesForMaterial, 
  getFastenerMaterialBySlug,
  normalizeFastenerMaterialSlug,
  normalizeFastenerTypeSlug,
  normalizeFastenerGradeSlug
} from '../../../data/fastenerTypesData';
import { submitQuoteRequest } from '../../../services/quoteService';
import FastenersSidebarNav from '../FastenersSidebarNav';
import { 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  Mail, 
  User, 
  ArrowLeft,
  Sparkles,
  Check,
  MapPin
} from 'lucide-react';
import { formatProductUrl } from '../../../utils/urlUtils';
import './FastenerTypeDetailView.css';

/**
 * Dedicated Product Detail View for any of the 5 Fastener Types
 * Supports both Level 3 (Material + Type) and Level 4 (Material + Type + Grade):
 * Pattern: /products/fasteners/:materialSlug/:typeSlug
 * Pattern: /products/fasteners/:materialSlug/:typeSlug/:gradeSlug
 * e.g. /products/fasteners/carbon-steel/hex-head-bolts/astm-a325
 */
export default function FastenerTypeDetailView({ 
  materialSlug = 'stainless-steel', 
  typeSlug = 'hex-head-bolts', 
  gradeSlug = null,
  isManufacturedInMumbai = false,
  isStockistInMumbai = false,
  onNavigate,
  onOpenQuoteModal 
}) {
  const normMatSlug = normalizeFastenerMaterialSlug(materialSlug);
  const normTypeSlug = normalizeFastenerTypeSlug(typeSlug) || 'hex-head-bolts';

  // Reactive Grade Selection State (initialized from gradeSlug prop or ?grade=... query param)
  const [selectedGradeSlug, setSelectedGradeSlug] = useState(() => {
    if (gradeSlug) return normalizeFastenerGradeSlug(normMatSlug, gradeSlug);
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(window.location.search).get('grade');
      if (q) return normalizeFastenerGradeSlug(normMatSlug, q);
    }
    return null;
  });

  // Keep state in sync if gradeSlug prop updates
  useEffect(() => {
    setSelectedGradeSlug(gradeSlug ? normalizeFastenerGradeSlug(normMatSlug, gradeSlug) : null);
  }, [gradeSlug, normMatSlug]);

  // Support browser Back/Forward navigation for grade state
  useEffect(() => {
    const handlePop = () => {
      const q = new URLSearchParams(window.location.search).get('grade');
      setSelectedGradeSlug(q ? normalizeFastenerGradeSlug(normMatSlug, q) : null);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [normMatSlug]);

  const activeGradeSlug = selectedGradeSlug;

  // Get full combined detail data
  const detail = useMemo(() => {
    return getFastenerTypeDetail(normMatSlug, normTypeSlug, activeGradeSlug);
  }, [normMatSlug, normTypeSlug, activeGradeSlug]);

  const material = useMemo(() => {
    return getFastenerMaterialBySlug(normMatSlug);
  }, [normMatSlug]);

  // Related fastener types belonging to the same material
  const relatedTypes = useMemo(() => {
    const allForMat = getFastenerTypesForMaterial(normMatSlug);
    return allForMat.filter(t => t.slug !== normTypeSlug).slice(0, 4);
  }, [normMatSlug, normTypeSlug]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // SEO Update on component render
  useEffect(() => {
    if (detail) {
      document.title = isManufacturedInMumbai
        ? `${detail.fullName} Manufactured in Mumbai | KPTRON`
        : isStockistInMumbai
        ? `${detail.fullName} Stockist in Mumbai | KPTRON`
        : detail.seo.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = isManufacturedInMumbai
        ? `${detail.fullName} manufactured in Mumbai, India conforming strictly to ASME, ASTM, and DIN standards. Available in sizes ${detail.technicalSpecs.sizeRange} with complete mill test certs.`
        : isStockistInMumbai
        ? `${detail.fullName} stockist and supplier in Mumbai, India with complete range conforming to ASME, ASTM, and DIN standards. Available in sizes ${detail.technicalSpecs.sizeRange}.`
        : detail.seo.description;
    }
  }, [detail, isManufacturedInMumbai, isStockistInMumbai]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setSubmitError('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitQuoteRequest({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: detail ? detail.fullName : 'Industrial Fasteners',
        specsAndQuantity: `Quantity: ${formData.quantity || 'Per project schedule'} | Notes: ${formData.notes || 'None'}`
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', phone: '', quantity: '', notes: '' });
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(err.message || 'Failed to submit quote request. Please try direct phone or WhatsApp inquiry.');
    }
  };

  const handleOpenModal = () => {
    if (onOpenQuoteModal && detail) {
      onOpenQuoteModal({
        productName: detail.fullName,
        grade: detail.grade ? detail.grade.name : detail.materialGrades,
        standards: detail.technicalSpecs.standards
      });
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  const handleSelectGrade = (targetGradeSlug) => {
    const next = targetGradeSlug ? normalizeFastenerGradeSlug(normMatSlug, targetGradeSlug) : null;
    setSelectedGradeSlug(next);

    if (typeof window !== 'undefined') {
      const currentUrl = new URL(window.location.href);
      if (next) {
        currentUrl.searchParams.set('grade', next);
      } else {
        currentUrl.searchParams.delete('grade');
      }
      window.history.pushState({ grade: next }, '', currentUrl.pathname + currentUrl.search + currentUrl.hash);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about *${detail?.fullName || 'Fasteners'}* (Material: ${material?.name}). Please share current pricing, lead times, and MTC documentation.`
  );

  if (!detail) {
    return (
      <div className="type-error-container">
        <h2>Fastener Configuration Not Found</h2>
        <button onClick={() => onNavigate && onNavigate('/products/fasteners')}>
          Back to Fasteners
        </button>
      </div>
    );
  }

  return (
    <div className="clean-fastener-type-detail-page">
      {/* ===================================================
          1. BREADCRUMBS STRIP
          =================================================== */}
      <section className="type-breadcrumb-section">
        <div className="type-container">
          <nav className="type-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/fasteners')}>Fasteners</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate(`/products/fasteners/${normMatSlug}`)}>
              {material.name} Fasteners
            </span>
            <span className="crumb-sep">/</span>
            {detail.grade ? (
              <>
                <span 
                  className="crumb-link" 
                  onClick={() => onNavigate && onNavigate(`/products/fasteners/${normMatSlug}/${normTypeSlug}`)}
                >
                  {detail.typeName}
                </span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{detail.grade.shortName}</span>
              </>
            ) : (
              <span className="crumb-current">{detail.typeName}</span>
            )}
          </nav>
        </div>
      </section>

      {/* ===================================================
          2. HERO PRODUCT OVERVIEW STRIP
          =================================================== */}
      <section className="type-hero-section">
        <div className="type-container">
          <div className="type-hero-grid">
            
            {/* Media Column */}
            <div className="type-media-col">
              <div className="type-image-card">
                <div className="type-top-stripe" aria-hidden="true" />
                <div className="type-img-wrapper">
                  <img
                    src={detail.displayImage}
                    alt={detail.fullName}
                    className="type-main-img"
                    loading="eager"
                  />
                  <div className="type-badge-overlay">
                    <span className="type-num-pill">{detail.typeNumber}</span>
                    <span className="type-mat-pill">{detail.materialName}</span>
                  </div>
                </div>
                <div className="type-cert-bar">
                  <ShieldCheck size={14} className="cert-bar-icon" />
                  <span>100% PMI &amp; Proof Load Tested &bull; EN 10204 3.1 &amp; 3.2</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="type-info-col">
              <div className="type-meta-badges">
                <span className="type-class-badge">{detail.categoryClassification}</span>
                {isManufacturedInMumbai && (
                  <span className="type-mumbai-badge">
                    <MapPin size={11} />
                    MANUFACTURED IN MUMBAI
                  </span>
                )}
                <span className="type-std-badge">{detail.technicalSpecs.standards.split(',')[0]}</span>
              </div>

              <h1 className="type-hero-title">
                {detail.fullName}
                {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
              </h1>

              <p className="type-hero-short-desc">{detail.shortDesc}</p>

              {/* Quick Specs Highlights */}
              <div className="type-quick-specs-grid">
                <div className="quick-spec-cell">
                  <span className="cell-label">Material Alloy:</span>
                  <span className="cell-value">{detail.materialName}</span>
                </div>
                <div className="quick-spec-cell">
                  <span className="cell-label">Standard Specification:</span>
                  <span className="cell-value">{detail.materialStandard.split('/')[0]}</span>
                </div>
                <div className="quick-spec-cell">
                  <span className="cell-label">Diameter Sizes:</span>
                  <span className="cell-value">{detail.technicalSpecs.sizeRange}</span>
                </div>
                <div className="quick-spec-cell">
                  <span className="cell-label">Thread Standard:</span>
                  <span className="cell-value">UNC, UNF, Metric 6g, 8-UN</span>
                </div>
              </div>

              {/* Level 4: Available Grades Selector */}
              {detail.availableGrades && detail.availableGrades.length > 0 && (
                <div className="type-grades-selector-box">
                  <div className="selector-title-row">
                    <span className="selector-heading">
                      <Layers size={13} />
                      AVAILABLE GRADES IN {detail.materialName.toUpperCase()}:
                    </span>
                    {detail.grade && (
                      <button 
                        type="button" 
                        className="reset-grade-btn"
                        onClick={() => handleSelectGrade(null)}
                      >
                        Show Base Fastener Type
                      </button>
                    )}
                  </div>
                  <div className="selector-pills-wrap">
                    {detail.availableGrades.map((g) => {
                      const isSelected = detail.grade && detail.grade.slug === g.slug;
                      return (
                        <button
                          key={g.id}
                          type="button"
                          className={`grade-selector-pill ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectGrade(g.slug)}
                          title={`${g.name} (${g.code})`}
                        >
                          <span className="pill-dot">•</span>
                          <span className="pill-text">{g.shortName}</span>
                          {isSelected && <Check size={11} className="pill-check" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Primary Actions */}
              <div className="type-action-row">
                <button
                  type="button"
                  className="type-btn-primary"
                  onClick={handleOpenModal}
                >
                  <Send size={15} />
                  <span>Request Instant Quotation</span>
                </button>
                <a
                  href={`https://wa.me/919967616124?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-btn-whatsapp"
                >
                  <PhoneCall size={15} />
                  <span>Chat with Fastener Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. 3-LEVEL BODY: SIDEBAR + TECHNICAL SPECIFICATIONS
          =================================================== */}
      <section className="type-body-section">
        <div className="type-container">
          <div className="type-body-grid">
            
            {/* SIDEBAR NAVIGATION */}
            <div className="type-sidebar-col">
              <FastenersSidebarNav
                currentMaterialSlug={normMatSlug}
                currentTypeSlug={normTypeSlug}
                currentGradeSlug={activeGradeSlug}
                onSelectGrade={handleSelectGrade}
                onNavigate={onNavigate}
              />
            </div>

            {/* MAIN CONTENT SPECIFICATIONS */}
            <div className="type-content-col">
              
              {/* SECTION A: DETAILED TECHNICAL SPECIFICATIONS MATRIX */}
              <div className="type-spec-card">
                <div className="card-header-line">
                  <FileText size={18} className="header-icon" />
                  <h2 className="card-section-heading">
                    {detail.fullName} Specifications Matrix
                  </h2>
                </div>

                <div className="spec-table-responsive">
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <th scope="row">Material Classification</th>
                        <td>{detail.technicalSpecs.material}</td>
                      </tr>
                      <tr>
                        <th scope="row">Standard &amp; Certified Grades</th>
                        <td><strong>{detail.technicalSpecs.standardGrades}</strong></td>
                      </tr>
                      <tr>
                        <th scope="row">Governing Manufacturing Standards</th>
                        <td>{detail.technicalSpecs.standards}</td>
                      </tr>
                      <tr>
                        <th scope="row">Thread Pitch &amp; Series</th>
                        <td>{detail.technicalSpecs.threadTypes}</td>
                      </tr>
                      <tr>
                        <th scope="row">Available Diameter Range</th>
                        <td>{detail.technicalSpecs.sizeRange}</td>
                      </tr>
                      <tr>
                        <th scope="row">Proof Load &amp; Pressure Ratings</th>
                        <td>{detail.technicalSpecs.pressureClass}</td>
                      </tr>
                      <tr>
                        <th scope="row">Protective Surface Coatings</th>
                        <td>{detail.technicalSpecs.coatingFinishes}</td>
                      </tr>
                      <tr>
                        <th scope="row">Testing &amp; Inspection Certification</th>
                        <td>{detail.technicalSpecs.testingInspection}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION B: TECHNICAL OVERVIEW */}
              <div className="type-overview-card">
                <div className="overview-tabs-header">
                  <h2 className="card-section-heading">Engineering &amp; Application Guide</h2>
                </div>

                <div className="overview-sections-stack">
                  <div className="overview-block">
                    <h3 className="block-title">What is a {detail.typeName}?</h3>
                    <p>{detail.overview.whatIs}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="block-title">Design &amp; Mechanical Features</h3>
                    <p>{detail.overview.designAndFeatures}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="block-title">How It Connects &amp; Assembly Method</h3>
                    <p>{detail.overview.howItConnects}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="block-title">Industrial Applications</h3>
                    <ul className="applications-bullet-list">
                      {detail.overview.applications.map((app, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="app-bullet-icon" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION C: DIRECT RFQ INQUIRY FORM */}
              <div className="type-rfq-card">
                <div className="rfq-header-box">
                  <div className="rfq-title-group">
                    <span className="rfq-eyebrow">FAST COMMODITY DISPATCH</span>
                    <h3 className="rfq-heading">Request MTC &amp; Commercial Quote</h3>
                  </div>
                  <p className="rfq-sub">
                    Direct mill supply with complete EN 10204 3.1 &amp; 3.2 test certs. Custom diameters cut to length.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="rfq-success-alert">
                    <CheckCircle2 size={24} />
                    <div>
                      <strong>Quotation Request Received!</strong>
                      <p>Our fastener technical team will email official pricing and MTC specs within 2 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="rfq-inline-form">
                    {submitError && <div className="rfq-error-alert">{submitError}</div>}
                    <div className="form-fields-grid">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <div className="input-wrap">
                          <User size={15} />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Corporate Email *</label>
                        <div className="input-wrap">
                          <Mail size={15} />
                          <input
                            type="email"
                            required
                            placeholder="buyer@engineering.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Contact Phone / WhatsApp</label>
                        <div className="input-wrap">
                          <PhoneCall size={15} />
                          <input
                            type="tel"
                            placeholder="+91 / International"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Required Quantity / Sizes</label>
                        <input
                          type="text"
                          placeholder="e.g. 500 pcs M20x150mm B7 studs with 2H nuts"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="simple-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-submit-row">
                      <button type="submit" disabled={isSubmitting} className="rfq-submit-button">
                        {isSubmitting ? 'Submitting...' : 'Send RFQ Inquiry'}
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* SECTION D: RELATED FASTENERS FROM SAME MATERIAL */}
              {relatedTypes.length > 0 && (
                <div className="type-related-section">
                  <h3 className="related-title">
                    Other {material.name} Fasteners
                  </h3>
                  <div className="related-grid">
                    {relatedTypes.map((rel) => (
                      <div
                        key={rel.id}
                        className="related-card"
                        onClick={() => onNavigate && onNavigate(rel.routeUrl)}
                      >
                        <img src={rel.displayImage} alt={rel.name} className="related-img" />
                        <div className="related-info">
                          <span className="related-name">{rel.name}</span>
                          <span className="related-code">{rel.shortCode}</span>
                        </div>
                        <ArrowRight size={14} className="related-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
