import React, { useState, useMemo } from 'react';
import { 
  FLANGES_CATEGORIES, 
  getFlangesCategoryBySlug, 
  getFlangesGradeBySlug,
  getFlangeGradeImage 
} from '../../../data/flangesData';
import { 
  getFlangeTypesForGrade, 
  normalizeMaterialSlug 
} from '../../../data/flangeTypesData';
import FlangesSidebarNav from '../FlangesSidebarNav';
import { submitQuoteRequest } from '../../../services/quoteService';
import { 
  FileCheck2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  User, 
  Send, 
  ArrowLeft, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './FlangeGradeDetailView.css';

/**
 * Dedicated Flange Grade Detail View
 * Supports:
 * - Material & Grade hierarchy
 * - Interactive Available Flange Types selector for this grade (Level 4 connection)
 * - Quote Modal integration
 */
export default function FlangeGradeDetailView({ 
  categorySlug, 
  materialSlug = null, 
  gradeSlug, 
  onNavigate,
  onOpenQuoteModal 
}) {
  const normMatSlug = normalizeMaterialSlug(materialSlug || categorySlug);
  
  const category = useMemo(() => {
    return getFlangesCategoryBySlug(categorySlug) || 
           getFlangesCategoryBySlug(normMatSlug) || 
           FLANGES_CATEGORIES[0];
  }, [categorySlug, normMatSlug]);

  const grade = useMemo(() => {
    return getFlangesGradeBySlug(category.slug, gradeSlug) || category.grades[0];
  }, [category, gradeSlug]);

  // Available flange types for this specific grade
  const availableTypesForGrade = useMemo(() => {
    return getFlangeTypesForGrade(normMatSlug, grade.slug);
  }, [normMatSlug, grade.slug]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitQuoteRequest({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: `${grade?.name || 'Flange Specification'} (${category?.name || 'Flanges'})`,
        specsAndQuantity: `Quantity: ${formData.quantity || 'Per project schedule'} | Notes: ${formData.notes || 'None'}`
      });
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', quantity: '', notes: '' });
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(err.message || 'Submission error');
    }
  };

  const handleOpenModal = () => {
    if (onOpenQuoteModal && grade) {
      onOpenQuoteModal({
        productName: `${grade.name} Flanges`,
        grade: grade.code || grade.name,
        standards: grade.standard || category.standards
      });
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  const handleTypeSelect = (typeSlug) => {
    if (onNavigate) {
      onNavigate(`/products/flanges/${normMatSlug}/${typeSlug}/${grade.slug}`);
    }
  };

  // Other grades in the same category
  const otherGrades = useMemo(() => {
    return category.grades.filter(g => g.slug !== grade.slug);
  }, [category, grade]);

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about *${grade.name}* (${category.name}). Please share current pricing, lead times, and MTC documentation.`
  );

  return (
    <div className="clean-flange-detail-page">
      {/* 1. Breadcrumbs Header */}
      <section className="detail-nav-section">
        <div className="detail-nav-container">
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/flanges')}>Flanges</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate(`/products/flanges/${normMatSlug}`)}>
              {category.name}
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{grade.name}</span>
          </nav>

          <button
            type="button"
            className="btn-back-to-flanges"
            onClick={() => onNavigate && onNavigate(`/products/flanges/${normMatSlug}`)}
          >
            <ArrowLeft size={15} />
            <span>Back to {category.name}</span>
          </button>
        </div>
      </section>

      {/* 2. Main Content Grid: Left Flanges Sidebar + Right Technical Content & RFQ */}
      <div className="detail-layout-section">
        <div className="detail-grade-wrapper-grid">
          
          {/* Left Column: Persistent Flanges Sidebar Navigation */}
          <div className="grade-nav-sidebar-column">
            <FlangesSidebarNav
              currentMaterialSlug={normMatSlug}
              currentTypeSlug={null}
              currentGradeSlug={grade.slug}
              onNavigate={onNavigate}
            />
          </div>

          <div className="detail-layout-container flange-grade-layout-container">
            {/* Main Technical Column */}
            <main className="detail-main-column">
            
            {/* Hero Card */}
            <div className="flange-grade-hero-card">
              <div className="hero-top-badge-row">
                <span className="hero-badge-tag">{category.name}</span>
                <span className="hero-badge-std">{grade.code || category.standards.split(',')[0]}</span>
              </div>

              <h1 className="hero-grade-title">{grade.name}</h1>

              {/* Large Product Image Banner */}
              <div className="hero-media-wrapper">
                <img
                  src={grade.image || getFlangeGradeImage(grade.slug) || category.image}
                  alt={`${grade.name} - ${category.name}`}
                  className="hero-product-img"
                />
                <div className="hero-tested-tag">
                  <ShieldCheck size={14} />
                  <span>100% Ultrasonic &amp; PMI Verified</span>
                </div>
              </div>

              {/* Overview & Description */}
              <div className="hero-text-block">
                <h3 className="section-subheading">Product Overview &amp; Pressure Sealing Characteristics</h3>
                <p className="hero-desc-text">
                  {grade.fullDesc || grade.shortDesc || category.shortDesc}
                </p>
              </div>

              {/* Standard Identifiers Matrix */}
              <div className="standards-matrix-grid">
                <div className="matrix-cell">
                  <div className="cell-label">Governing Standards</div>
                  <div className="cell-value">{grade.standard || category.standards.split(',')[0]}</div>
                </div>
                {grade.uns && (
                  <div className="matrix-cell">
                    <div className="cell-label">UNS Designation</div>
                    <div className="cell-value">{grade.uns}</div>
                  </div>
                )}
                {grade.din && (
                  <div className="matrix-cell">
                    <div className="cell-label">DIN / EN Material No.</div>
                    <div className="cell-value">{grade.din}</div>
                  </div>
                )}
                <div className="matrix-cell">
                  <div className="cell-label">Flange Facing Profiles</div>
                  <div className="cell-value">Raised Face (RF 125-250 RMS), Ring Joint (RTJ), Flat Face (FF)</div>
                </div>
              </div>
            </div>

            {/* Dimensional & Supply Specifications */}
            <div className="flange-grade-specs-card">
              <h2 className="section-heading">
                <FileCheck2 size={20} className="heading-icon" />
                Technical &amp; Dimensional Specifications
              </h2>

              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {grade.specs?.size && (
                      <tr>
                        <th>Nominal Size Spectrum</th>
                        <td>{grade.specs.size}</td>
                      </tr>
                    )}
                    {grade.specs?.pressureClass && (
                      <tr>
                        <th>Pressure Class Ratings</th>
                        <td>{grade.specs.pressureClass}</td>
                      </tr>
                    )}
                    {grade.specs?.facing && (
                      <tr>
                        <th>Gasket Facing Options</th>
                        <td>{grade.specs.facing}</td>
                      </tr>
                    )}
                    <tr>
                      <th>Material Classification</th>
                      <td>{category.name}</td>
                    </tr>
                    <tr>
                      <th>Governing Standards</th>
                      <td>{category.standards}</td>
                    </tr>
                    <tr>
                      <th>Overall Section Scope</th>
                      <td>{category.sizeRange}</td>
                    </tr>
                    <tr>
                      <th>Facing Finishes Available</th>
                      <td>{category.facingTypes}</td>
                    </tr>
                    <tr>
                      <th>Inspection &amp; Test Certificates</th>
                      <td>EN 10204 3.1 &amp; 3.2, 100% Ultrasonic (ASTM A388), Magnetic Particle (MPI), PMI, Third-Party (TUV, DNV, BV, Lloyds)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* LEVEL 4 INTERACTIVE CONNECTION: Available Flange Types for this Grade */}
            <div className="flange-grade-forms-card">
              <div className="forms-card-header">
                <div>
                  <h2 className="section-heading">
                    <Layers size={20} className="heading-icon" />
                    Available Flange Types in {grade.name}
                  </h2>
                  <p className="forms-card-subtitle">
                    Select any flange configuration below to view dedicated technical specifications and dimensions for <strong>{grade.name}</strong>:
                  </p>
                </div>
              </div>

              <div className="grade-types-cards-grid">
                {availableTypesForGrade.map((type) => (
                  <div 
                    key={type.id} 
                    className="grade-type-selection-card"
                    onClick={() => handleTypeSelect(type.slug)}
                  >
                    <div className="type-thumb-box">
                      <img 
                        src={type.displayImage} 
                        alt={`${grade.name} ${type.name}`}
                        className="type-thumb-img"
                        loading="lazy"
                      />
                      <span className="type-thumb-num">{type.number}</span>
                    </div>

                    <div className="type-meta-box">
                      <span className="type-code-tag">{type.shortCode}</span>
                      <h4 className="type-name-heading">{type.name}</h4>
                      <p className="type-class-sub">{type.categoryClassification}</p>
                      
                      <div className="type-drilldown-action">
                        <span>View {grade.shortName || 'Grade'} {type.name}</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Applications */}
            {grade.applications && grade.applications.length > 0 && (
              <div className="flange-grade-apps-card">
                <h2 className="section-heading">
                  <Sparkles size={20} className="heading-icon" />
                  Critical Industrial Applications
                </h2>
                <div className="apps-grid">
                  {grade.applications.map((appText, idx) => (
                    <div key={idx} className="app-item">
                      <CheckCircle2 size={16} className="app-check-icon" />
                      <span>{appText}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* RIGHT COLUMN */}
          <aside className="grade-sidebar-column">
            
            {/* 1. Fast Dispatch Quotation Card (Dark Navy Top Card) */}
            <div className="sidebar-action-card">
              <span className="sidebar-action-tag">FAST DISPATCH QUOTATION</span>
              <h3 className="sidebar-action-title">Inquire for {grade.name}</h3>
              <p className="sidebar-action-desc">
                Need immediate mill pricing, custom hub dimensions, or MTC documentation? Reach our sales desk directly.
              </p>

              <button
                type="button"
                className="btn-sidebar-modal-quote"
                onClick={handleOpenModal}
              >
                <Send size={15} />
                <span>Request Instant Formal Quote</span>
              </button>

              <a
                href={`https://wa.me/919967616124?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sidebar-wa"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <a href="tel:+919967616124" className="btn-sidebar-call">
                <PhoneCall size={15} />
                <span>Call Desk: +91 99676 16124</span>
              </a>
            </div>

            {/* 2. Formal RFQ Card */}
            <div className="sidebar-form-card" id="quote-form-box">
              <h3 className="form-card-title">Request a Formal Quote</h3>
              <p className="form-card-sub">Submit your required quantity, schedule &amp; destination.</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <CheckCircle2 size={24} className="success-icon" />
                  <h4>Inquiry Sent Successfully</h4>
                  <p>Our sales engineer will send your formal quote proforma shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="sidebar-rfq-form rfq-form-compact">
                  {submitError && (
                    <div className="sidebar-rfq-error">{submitError}</div>
                  )}

                  <div className="form-field-group form-field">
                    <label htmlFor="user-rfq-name">Your Full Name *</label>
                    <div className="field-input-wrap input-with-icon">
                      <User size={15} className="field-icon" />
                      <input
                        type="text"
                        id="user-rfq-name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group form-field">
                    <label htmlFor="user-rfq-email">Corporate Email *</label>
                    <div className="field-input-wrap input-with-icon">
                      <Mail size={15} className="field-icon" />
                      <input
                        type="email"
                        id="user-rfq-email"
                        required
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group form-field">
                    <label htmlFor="user-rfq-phone">Contact Number *</label>
                    <div className="field-input-wrap input-with-icon">
                      <PhoneCall size={15} className="field-icon" />
                      <input
                        type="tel"
                        id="user-rfq-phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group form-field">
                    <label htmlFor="user-rfq-qty">Estimated Quantity / Sizes</label>
                    <div className="field-input-wrap input-with-icon">
                      <Layers size={15} className="field-icon" />
                      <input
                        type="text"
                        id="user-rfq-qty"
                        placeholder="e.g. 250 pcs, 2&quot; NB Class 300"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group form-field">
                    <label htmlFor="user-rfq-notes">Project Notes / Destination</label>
                    <textarea
                      id="user-rfq-notes"
                      rows="3"
                      placeholder="Specify required flange facing, schedule, test reports..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-submit-sidebar-rfq btn-submit-rfq"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Quote Request'}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* 3. Other Grades in This Category */}
            {otherGrades.length > 0 && (
              <div className="sidebar-other-grades-card">
                <h4 className="other-grades-title">Other {category.name} Grades</h4>
                <div className="other-grades-list">
                  {otherGrades.map((og) => (
                    <button
                      key={og.id}
                      type="button"
                      className="other-grade-item-btn"
                      onClick={() => onNavigate && onNavigate(`/products/flanges/${normMatSlug}/grades/${og.slug}`)}
                    >
                      <span className="other-grade-name">{og.name}</span>
                      <ArrowRight size={13} className="other-grade-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </div>
  </div>
);
}
