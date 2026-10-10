import React, { useState, useMemo } from 'react';
import { 
  FASTENERS_CATEGORIES, 
  getFastenersCategoryBySlug, 
  getFastenersGradeBySlug 
} from '../../../data/fastenersData';
import { 
  getFastenerTypesForGrade, 
  normalizeFastenerMaterialSlug 
} from '../../../data/fastenerTypesData';
import FastenersSidebarNav from '../FastenersSidebarNav';
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
import './FastenerGradeDetailView.css';

/**
 * Dedicated Fastener Grade Detail View
 * Supports:
 * - Material & Grade hierarchy
 * - Persistent Fasteners Sidebar Navigation
 * - Interactive Available Fastener Types selector for this grade (Level 4 connection)
 * - Quote Modal integration & In-page RFQ submission
 */
export default function FastenerGradeDetailView({ 
  categorySlug, 
  materialSlug = null, 
  gradeSlug, 
  onNavigate,
  onOpenQuoteModal 
}) {
  const normMatSlug = normalizeFastenerMaterialSlug(materialSlug || categorySlug);
  
  const category = useMemo(() => {
    return getFastenersCategoryBySlug(categorySlug) || 
           getFastenersCategoryBySlug(normMatSlug) || 
           FASTENERS_CATEGORIES[0];
  }, [categorySlug, normMatSlug]);

  const grade = useMemo(() => {
    return getFastenersGradeBySlug(category.slug, gradeSlug) || 
           getFastenersGradeBySlug(normMatSlug, gradeSlug) || 
           category.grades[0];
  }, [category, normMatSlug, gradeSlug]);

  // Available fastener types for this specific grade (Level 4 connection)
  const availableTypesForGrade = useMemo(() => {
    return getFastenerTypesForGrade(normMatSlug, grade?.slug);
  }, [normMatSlug, grade?.slug]);

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
        product: `${grade?.name || 'Fastener Specification'} (${category?.name || 'Fasteners'})`,
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
        productName: `${grade.name} Fasteners`,
        grade: grade.code || grade.name,
        standards: grade.standard || category.standards
      });
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  const handleTypeSelect = (typeSlug) => {
    if (onNavigate) {
      onNavigate(`/products/fasteners/${normMatSlug}/${typeSlug}/${grade.slug}`);
    }
  };

  // Other grades in the same category
  const otherGrades = useMemo(() => {
    return (category?.grades || []).filter(g => g.slug !== grade?.slug);
  }, [category, grade]);

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about *${grade?.name || 'Fasteners'}* (${category?.name || 'Fasteners'}). Please share current mill pricing, lead times, and MTC documentation.`
  );

  return (
    <div className="clean-fastener-detail-page">
      {/* 1. Breadcrumbs Header */}
      <section className="detail-nav-section">
        <div className="detail-nav-container">
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate('/products/fasteners')}>Fasteners</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-link" onClick={() => onNavigate && onNavigate(`/products/fasteners/${normMatSlug}`)}>
              {category.name}
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{grade?.name}</span>
          </nav>

          <button
            type="button"
            className="btn-back-to-fasteners"
            onClick={() => onNavigate && onNavigate(`/products/fasteners/${normMatSlug}`)}
          >
            <ArrowLeft size={15} />
            <span>Back to {category.name}</span>
          </button>
        </div>
      </section>

      {/* 2. Main Content Grid: Left Fasteners Sidebar + Right Technical Content & RFQ */}
      <div className="detail-layout-section">
        <div className="detail-grade-wrapper-grid">
          
          {/* Left Column: Persistent Fasteners Sidebar Navigation */}
          <div className="grade-nav-sidebar-column">
            <FastenersSidebarNav
              currentMaterialSlug={normMatSlug}
              currentTypeSlug={null}
              currentGradeSlug={grade?.slug}
              onNavigate={onNavigate}
            />
          </div>

          <div className="detail-layout-container">
            {/* Main Technical Column */}
            <main className="detail-main-column">
            
              {/* Hero Card */}
              <div className="fastener-grade-hero-card">
                <div className="hero-top-badge-row">
                  <span className="hero-badge-tag">{category.name}</span>
                  <span className="hero-badge-std">{grade?.code || category.standards?.split(',')[0]}</span>
                </div>

                <h1 className="hero-grade-title">{grade?.name}</h1>

                {/* Large Product Image Banner */}
                <div className="hero-media-wrapper">
                  <img
                    src={category.image}
                    alt={`${grade?.name} - ${category.name}`}
                    className="hero-product-img"
                  />
                  <div className="hero-tested-tag">
                    <ShieldCheck size={14} />
                    <span>100% Tensile Tested &amp; PMI Verified</span>
                  </div>
                </div>

                {/* Overview & Description */}
                <div className="hero-text-block">
                  <h3 className="section-subheading">Product Overview &amp; Mechanical Bolting Integrity</h3>
                  <p className="hero-desc-text">
                    {grade?.fullDesc || grade?.shortDesc || category.shortDesc}
                  </p>
                </div>

                {/* Standard Identifiers Matrix */}
                <div className="standards-matrix-grid">
                  <div className="matrix-cell">
                    <div className="cell-label">Governing Standards</div>
                    <div className="cell-value">{grade?.standard || category.standards?.split(',')[0]}</div>
                  </div>
                  {grade?.uns && (
                    <div className="matrix-cell">
                      <div className="cell-label">UNS Designation</div>
                      <div className="cell-value">{grade.uns}</div>
                    </div>
                  )}
                  {grade?.din && (
                    <div className="matrix-cell">
                      <div className="cell-label">DIN / EN Material No.</div>
                      <div className="cell-value">{grade.din}</div>
                    </div>
                  )}
                  <div className="matrix-cell">
                    <div className="cell-label">Fastener Profiles</div>
                    <div className="cell-value">Hex Bolts, Heavy Hex Nuts, Stud Bolts, Socket Screws, Washers</div>
                  </div>
                </div>
              </div>

              {/* Dimensional & Mechanical Specifications */}
              <div className="fastener-grade-specs-card">
                <h2 className="section-heading">
                  <FileCheck2 size={20} className="heading-icon" />
                  Technical &amp; Mechanical Specifications
                </h2>

                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      {grade?.specs?.diameter && (
                        <tr>
                          <th>Thread Diameter Spectrum</th>
                          <td>{grade.specs.diameter}</td>
                        </tr>
                      )}
                      {grade?.specs?.lengths && (
                        <tr>
                          <th>Standard Lengths</th>
                          <td>{grade.specs.lengths}</td>
                        </tr>
                      )}
                      {grade?.specs?.tensileStrength && (
                        <tr>
                          <th>Nominal Tensile Strength</th>
                          <td>{grade.specs.tensileStrength}</td>
                        </tr>
                      )}
                      {grade?.specs?.yieldStrength && (
                        <tr>
                          <th>Minimum Yield Strength</th>
                          <td>{grade.specs.yieldStrength}</td>
                        </tr>
                      )}
                      {grade?.specs?.surfaceFinishes && (
                        <tr>
                          <th>Protective Surface Finishes</th>
                          <td>{grade.specs.surfaceFinishes}</td>
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
                        <th>Thread Forms</th>
                        <td>{category.threadTypes || 'Metric Coarse/Fine, UNC, UNF, 8-UN'}</td>
                      </tr>
                      <tr>
                        <th>Inspection &amp; Test Certificates</th>
                        <td>EN 10204 3.1 &amp; 3.2, Tensile &amp; Proof Load (ASTM F606), Hardness (HRC/HRB), Charpy Impact (-46°C / -101°C), 100% PMI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* LEVEL 4 INTERACTIVE CONNECTION: Available Fastener Types for this Grade */}
              <div className="fastener-grade-forms-card">
                <div className="forms-card-header">
                  <div>
                    <h2 className="section-heading">
                      <Layers size={20} className="heading-icon" />
                      Available Fastener Types in {grade?.name}
                    </h2>
                    <p className="forms-card-subtitle">
                      Select any fastener configuration below to view dedicated technical specifications and dimensions for <strong>{grade?.name}</strong>:
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
                          alt={`${grade?.name} ${type.name}`}
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
                          <span>View {grade?.shortName || 'Grade'} {type.name}</span>
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Applications */}
              {grade?.applications && grade.applications.length > 0 && (
                <div className="fastener-grade-apps-card">
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
                <h3 className="sidebar-action-title">Inquire for {grade?.name}</h3>
                <p className="sidebar-action-desc">
                  Need immediate mill pricing, cut-to-length studs, or MTC documentation? Reach our sales desk directly.
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
                    <p>Our sales engineer will review your requirement and respond with an official quotation shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="rfq-form-compact">
                    {submitError && (
                      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.6rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                        {submitError}
                      </div>
                    )}
                    <div className="form-field">
                      <label htmlFor="rfq-name">YOUR NAME</label>
                      <div className="input-with-icon">
                        <User size={14} className="field-icon" />
                        <input
                          id="rfq-name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="rfq-email">BUSINESS EMAIL</label>
                      <div className="input-with-icon">
                        <Mail size={14} className="field-icon" />
                        <input
                          id="rfq-email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="rfq-phone">CONTACT NUMBER</label>
                      <div className="input-with-icon">
                        <PhoneCall size={14} className="field-icon" />
                        <input
                          id="rfq-phone"
                          type="tel"
                          required
                          placeholder="+91..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="rfq-quantity">REQUIRED QUANTITY / SCHEDULE</label>
                      <input
                        id="rfq-quantity"
                        type="text"
                        placeholder="e.g. 500 pcs, M16 x 75mm"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="rfq-notes">PROJECT NOTES (OPTIONAL)</label>
                      <textarea
                        id="rfq-notes"
                        rows="2"
                        placeholder="Length, coating, test certificates..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-submit-rfq" disabled={isSubmitting}>
                      <span>{isSubmitting ? 'TRANSMITTING RFQ...' : `SEND RFQ FOR ${(grade?.name || 'FASTENERS').toUpperCase()}`}</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>

              {/* 3. Other Grades in This Category */}
              {otherGrades.length > 0 && (
                <div className="sidebar-grades-nav-card">
                  <h4 className="other-grades-title">
                    OTHER {(category.name || 'FASTENERS').toUpperCase()} GRADES ({otherGrades.length})
                  </h4>
                  <div className="other-grades-list">
                    {otherGrades.map((og) => (
                      <button
                        key={og.id}
                        type="button"
                        className="other-grade-btn"
                        onClick={() => onNavigate && onNavigate(`/products/fasteners/${normMatSlug}/grades/${og.slug}`)}
                      >
                        <span className="og-dot" aria-hidden="true">▪</span>
                        <span className="og-name">{og.name}</span>
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
