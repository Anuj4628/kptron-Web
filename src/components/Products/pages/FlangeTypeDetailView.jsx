import React, { useState, useEffect, useMemo } from 'react';
import { 
  getFlangeTypeDetail, 
  getFlangeTypesForMaterial, 
  getFlangeMaterialBySlug,
  normalizeMaterialSlug,
  normalizeFlangeTypeSlug,
  normalizeFlangeGradeSlug
} from '../../../data/flangeTypesData';
import { submitQuoteRequest } from '../../../services/quoteService';
import FlangesSidebarNav from '../FlangesSidebarNav';
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
import './FlangeTypeDetailView.css';

/**
 * Dedicated Product Detail View for any of the 12 Flange Types
 * Supports both Level 3 (Material + Type) and Level 4 (Material + Type + Grade):
 * Pattern: /products/flanges/:materialSlug/:typeSlug
 * Pattern: /products/flanges/:materialSlug/:typeSlug/:gradeSlug
 * e.g. /products/flanges/stainless-steel/weld-neck-flange/316l
 */
export default function FlangeTypeDetailView({ 
  materialSlug = 'stainless-steel', 
  typeSlug = 'weld-neck-flange', 
  gradeSlug = null,
  isManufacturedInMumbai = false,
  onNavigate,
  onOpenQuoteModal 
}) {
  const normMatSlug = normalizeMaterialSlug(materialSlug);
  const normTypeSlug = normalizeFlangeTypeSlug(typeSlug) || 'weld-neck-flange';
  const normGradeSlug = gradeSlug ? normalizeFlangeGradeSlug(normMatSlug, gradeSlug) : null;

  // Get full combined detail data
  const detail = useMemo(() => {
    return getFlangeTypeDetail(normMatSlug, normTypeSlug, normGradeSlug);
  }, [normMatSlug, normTypeSlug, normGradeSlug]);

  const material = useMemo(() => {
    return getFlangeMaterialBySlug(normMatSlug);
  }, [normMatSlug]);

  // Related flange types belonging to the same material
  const relatedTypes = useMemo(() => {
    const allForMat = getFlangeTypesForMaterial(normMatSlug);
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
        ? `${detail.fullName} Manufactured in Mumbai | Redcore Steels`
        : detail.seo.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = isManufacturedInMumbai
        ? `${detail.fullName} manufactured in Mumbai, India conforming strictly to ASME B16.5 and international standards. Available in sizes ${detail.technicalSpecs.sizeRange} with mill test certs.`
        : detail.seo.description;
    }
  }, [detail, isManufacturedInMumbai]);

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
        product: detail ? detail.fullName : 'Industrial Flanges',
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
    if (!onNavigate) return;
    const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
    const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
    if (targetGradeSlug) {
      onNavigate(`/products/flanges/${normMatSlug}/${normTypeSlug}/${targetGradeSlug}${suffix}`);
    } else {
      onNavigate(`/products/flanges/${normMatSlug}/${normTypeSlug}${suffix}`);
    }
  };

  const handleSelectRelatedType = (relTypeSlug) => {
    if (!onNavigate) return;
    const isMumbai = isManufacturedInMumbai || window.location.pathname.toLowerCase().includes('manufactured-in-mumbai');
    const suffix = isMumbai ? '/manufactured-in-mumbai' : '';
    if (normGradeSlug) {
      onNavigate(`/products/flanges/${normMatSlug}/${relTypeSlug}/${normGradeSlug}${suffix}`);
    } else {
      onNavigate(`/products/flanges/${normMatSlug}/${relTypeSlug}${suffix}`);
    }
  };

  if (!detail) {
    return (
      <div className="flange-not-found-container">
        <h2>Flange Specification Not Found</h2>
        <p>The requested flange type could not be located in our catalog.</p>
        <button 
          type="button" 
          className="btn-back-catalog" 
          onClick={() => onNavigate && onNavigate('/products/flanges')}
        >
          <ArrowLeft size={16} />
          <span>Return to Flanges Catalog</span>
        </button>
      </div>
    );
  }

  return (
    <div className="clean-flange-type-detail-page">
      {/* 1. Breadcrumb Strip */}
      <section className="type-breadcrumb-section">
        <div className="type-container">
          <nav className="type-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/flanges')}>Flanges</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate(`/products/flanges/${material.slug}`)}>
              {material.name}
            </span>
            <span className="crumb-sep">/</span>
            {detail.grade ? (
              <>
                <span 
                  className="crumb-link" 
                  onClick={() => onNavigate && onNavigate(`/products/flanges/${material.slug}/${detail.typeSlug}`)}
                >
                  {detail.typeName}
                </span>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">Grade {detail.grade.shortName}</span>
              </>
            ) : (
              <span className="crumb-current">{detail.typeName}</span>
            )}
          </nav>
        </div>
      </section>

      {/* 2. Main Hero / Product Overview Strip */}
      <section className="type-hero-section">
        <div className="type-container">
          <div className="type-hero-grid">
            
            {/* Left: Product Image Box */}
            <div className="type-media-col">
              <div className="type-image-card">
                <div className="type-top-stripe" aria-hidden="true" />
                <div className="type-img-wrapper">
                  <img
                    src={detail.displayImage}
                    alt={detail.fullName}
                    className="type-main-image"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="type-verified-badge">
                    <ShieldCheck size={14} />
                    <span>VERIFIED GEOMETRY</span>
                  </div>
                </div>
                <div className="type-image-footer">
                  <span className="type-dim-label">DIMENSIONAL CONFORMANCE</span>
                  <span className="type-dim-val">ASME B16.5 • EN 1092-1 • MSS SP</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Header & CTAs */}
            <div className="type-info-col">
              <div className="type-badge-row">
                <span className="type-category-pill">{detail.categoryClassification}</span>
                <span className="type-material-pill">{detail.materialName}</span>
                {detail.grade && (
                  <span className="type-grade-pill">GRADE {detail.grade.shortName}</span>
                )}
                <span className="type-index-pill">TYPE {detail.typeNumber}</span>
                {isManufacturedInMumbai && (
                  <span className="type-mumbai-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#FF5B26', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                    <MapPin size={12} />
                    MANUFACTURED IN MUMBAI
                  </span>
                )}
              </div>

              {/* Single Main H1 per SEO requirement */}
              <h1 className="type-main-h1">
                {detail.fullName}
                {isManufacturedInMumbai && ' — Manufactured in Mumbai'}
              </h1>

              <div className="type-designation-strip">
                <span className="designation-label">Engineering Standard:</span>
                <span className="designation-code">{detail.technicalDesignation}</span>
              </div>

              <p className="type-short-desc">
                {detail.shortDesc}
              </p>

              {/* Interactive 3-Level Grade Selector for this Flange Type */}
              {detail.availableGrades && detail.availableGrades.length > 0 && (
                <div className="type-grade-selector-bar">
                  <div className="grade-selector-header">
                    <span className="selector-label">
                      <Sparkles size={13} className="label-icon" />
                      AVAILABLE CERTIFIED GRADES FOR {detail.typeName.toUpperCase()}:
                    </span>
                    <span className="selector-hint">Select grade for verified chemical &amp; mechanical ratings</span>
                  </div>
                  <div className="grade-selector-pills">
                    <button
                      type="button"
                      className={`grade-select-pill ${!normGradeSlug ? 'active' : ''}`}
                      onClick={() => handleSelectGrade(null)}
                    >
                      All Grades
                    </button>
                    {detail.availableGrades.map(g => {
                      const isCurrent = g.slug === normGradeSlug;
                      return (
                        <button
                          key={g.id}
                          type="button"
                          className={`grade-select-pill ${isCurrent ? 'active' : ''}`}
                          onClick={() => handleSelectGrade(g.slug)}
                          title={`${g.name} (${g.code})`}
                        >
                          {isCurrent && <Check size={12} className="pill-check-icon" />}
                          <strong>{g.shortName}</strong>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Key Quick Facts */}
              <div className="type-quick-facts-row">
                <div className="quick-fact-item">
                  <span className="fact-label">Size Spectrum</span>
                  <span className="fact-value">{detail.technicalSpecs.sizeRange}</span>
                </div>
                <div className="quick-fact-item">
                  <span className="fact-label">Pressure Ratings</span>
                  <span className="fact-value">{detail.technicalSpecs.pressureClass}</span>
                </div>
                <div className="quick-fact-item">
                  <span className="fact-label">Mill Certification</span>
                  <span className="fact-value">EN 10204 3.1 &amp; 3.2 MTC</span>
                </div>
              </div>

              {/* Actions */}
              <div className="type-action-buttons">
                <button
                  type="button"
                  className="btn-quote-primary"
                  onClick={handleOpenModal}
                >
                  <Send size={15} />
                  <span>Request Instant Formal Quote</span>
                </button>

                <button
                  type="button"
                  className="btn-contact-secondary"
                  onClick={() => onNavigate && onNavigate('/contact')}
                >
                  <PhoneCall size={15} />
                  <span>Engineering Inquiry</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep Technical Specifications & Layout with Sidebar */}
      <section className="type-body-section">
        <div className="type-container">
          <div className="type-layout-grid">
            
            {/* Left Column: Persistent Secondary Sidebar Navigation */}
            <div className="type-sidebar-col">
              <FlangesSidebarNav
                currentMaterialSlug={normMatSlug}
                currentTypeSlug={normTypeSlug}
                currentGradeSlug={normGradeSlug}
                onNavigate={onNavigate}
              />
            </div>

            {/* Right Column: Deep Product Details */}
            <div className="type-main-col">
              
              {/* Product Overview Card */}
              <article className="type-overview-card">
                <div className="card-header-bar">
                  <h2 className="overview-heading">
                    Product Overview &amp; Pressure Sealing Geometry
                  </h2>
                </div>

                <div className="overview-content">
                  <div className="overview-block">
                    <h3 className="overview-subheading">Engineering Configuration &amp; Function</h3>
                    <p>{detail.overview.whatIs}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="overview-subheading">Stress Distribution &amp; Sealing Profile</h3>
                    <p>{detail.overview.designAndFeatures}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="overview-subheading">Piping Joint Assembly &amp; Weld Preparation</h3>
                    <p>{detail.overview.howItConnects}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="overview-subheading">Design Purpose &amp; Critical Service Advantages</h3>
                    <p>{detail.overview.purpose}</p>
                  </div>

                  <div className="overview-block">
                    <h3 className="overview-subheading">Primary Industrial Applications</h3>
                    <ul className="applications-check-list">
                      {detail.overview.applications.map((app, idx) => (
                        <li key={idx} className="application-item">
                          <CheckCircle2 size={16} className="check-bullet" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Technical Specifications Table */}
              <article className="type-specs-card">
                <div className="card-header-bar">
                  <h2 className="overview-heading">
                    Technical Information &amp; Dimensional Conformance
                  </h2>
                </div>

                <div className="specs-table-scroll">
                  <table className="specs-data-table">
                    <tbody>
                      <tr>
                        <th>Material Family</th>
                        <td>{detail.technicalSpecs.material}</td>
                      </tr>
                      <tr>
                        <th>Certified Grades</th>
                        <td>{detail.technicalSpecs.standardGrades}</td>
                      </tr>
                      {detail.grade && (
                        <tr>
                          <th>UNS / DIN Material No.</th>
                          <td>{detail.technicalSpecs.unsDin}</td>
                        </tr>
                      )}
                      <tr>
                        <th>Governing Standards</th>
                        <td>{detail.technicalSpecs.standards}</td>
                      </tr>
                      <tr>
                        <th>Nominal Size Spectrum</th>
                        <td>{detail.technicalSpecs.sizeRange}</td>
                      </tr>
                      <tr>
                        <th>Pressure Class Ratings</th>
                        <td>{detail.technicalSpecs.pressureClass}</td>
                      </tr>
                      <tr>
                        <th>Gasket Facing Options</th>
                        <td>{detail.technicalSpecs.facing}</td>
                      </tr>
                      <tr>
                        <th>Dimensional Standards</th>
                        <td>{detail.technicalSpecs.dimensions}</td>
                      </tr>
                      <tr>
                        <th>Manufacturing Methodology</th>
                        <td>{detail.technicalSpecs.manufacturingMethod}</td>
                      </tr>
                      <tr>
                        <th>Connection Type / Facing Profile</th>
                        <td>{detail.technicalSpecs.connectionType}</td>
                      </tr>
                      <tr>
                        <th>Non-Destructive Testing (NDT)</th>
                        <td>{detail.technicalSpecs.testingInspection}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              {/* Direct Quick RFQ Form Card */}
              <article className="type-rfq-card">
                <div className="rfq-card-header">
                  <div className="rfq-icon-wrap">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="rfq-title">Direct Procurement RFQ — {detail.fullName}</h3>
                    <p className="rfq-subtitle">Submit your exact size, pressure class, schedule, and quantity for guaranteed mill-direct export pricing within 2 hours.</p>
                  </div>
                </div>

                {submitSuccess ? (
                  <div className="rfq-success-alert">
                    <CheckCircle2 size={24} className="alert-icon" />
                    <div>
                      <strong>Quotation Request Registered Successfully</strong>
                      <p>Our technical sales department will email your formal export proforma shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="type-rfq-form">
                    {submitError && (
                      <div className="rfq-error-alert">{submitError}</div>
                    )}

                    <div className="form-row-grid">
                      <div className="form-group">
                        <label htmlFor="user-name">Full Name *</label>
                        <div className="input-wrap">
                          <User size={15} className="input-icon" />
                          <input
                            id="user-name"
                            type="text"
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="user-email">Corporate Email *</label>
                        <div className="input-wrap">
                          <Mail size={15} className="input-icon" />
                          <input
                            id="user-email"
                            type="email"
                            placeholder="e.g. purchasing@energycorp.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-row-grid">
                      <div className="form-group">
                        <label htmlFor="user-phone">Phone / WhatsApp</label>
                        <div className="input-wrap">
                          <PhoneCall size={15} className="input-icon" />
                          <input
                            id="user-phone"
                            type="tel"
                            placeholder="e.g. +1 555 019 2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="user-qty">Estimated Quantity / Sizes</label>
                        <div className="input-wrap">
                          <Layers size={15} className="input-icon" />
                          <input
                            id="user-qty"
                            type="text"
                            placeholder='e.g. 50 pcs 4" Class 300 WNRF'
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="user-notes">Project Specifications / Additional Notes</label>
                      <textarea
                        id="user-notes"
                        rows="3"
                        placeholder="Specify required wall thickness (e.g. Sch 40/80), facing roughness (125-250 AARH), coating requirements, or third-party inspection (TUV/SGS/Lloyds)..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-submit-rfq"
                      disabled={isSubmitting}
                    >
                      <Send size={15} />
                      <span>{isSubmitting ? 'Transmitting Request...' : `Submit Quote Request for ${detail.fullName}`}</span>
                    </button>
                  </form>
                )}
              </article>

              {/* Related Flange Types Grid */}
              <article className="type-related-card">
                <div className="card-header-bar">
                  <h2 className="overview-heading">
                    {detail.grade 
                      ? `Other Flange Types Available in Grade ${detail.grade.shortName}`
                      : `Related Types of Flanges in ${detail.materialName}`}
                  </h2>
                </div>

                <div className="related-cards-grid">
                  {relatedTypes.map((rel) => (
                    <div
                      key={rel.id}
                      className="related-item-card"
                      onClick={() => handleSelectRelatedType(rel.slug)}
                    >
                      <img
                        src={rel.displayImage}
                        alt={`${detail.materialName} ${rel.name}`}
                        className="related-img"
                        loading="lazy"
                      />
                      <div className="related-item-body">
                        <span className="related-num">TYPE {rel.number}</span>
                        <h4 className="related-title">{rel.name}</h4>
                        <p className="related-sub">{rel.categoryClassification}</p>
                        <div className="related-link-row">
                          <span>View {rel.name}</span>
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
