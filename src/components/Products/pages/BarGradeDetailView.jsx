import React, { useMemo, useState } from 'react';
import { getBarsCategoryBySlug, getBarsGradeBySlug } from '../../../data/barsData';
import { submitQuoteRequest } from '../../../services/quoteService';
import { 
  ShieldCheck, 
  Layers, 
  FileCheck2, 
  PhoneCall, 
  ArrowLeft, 
  CheckCircle2, 
  Send,
  Mail,
  User,
  Sparkles
} from 'lucide-react';
import './BarGradeDetailView.css';

/**
 * Dedicated Bars & Rods Grade Detail View
 * Exact match to user-provided reference screenshots for the right sidebar:
 * 1. Dark Navy "Fast Dispatch Quotation" Card with WhatsApp & Call Desk buttons
 * 2. White "Request a Formal Quote" Form Card with uppercase labels and icon inputs
 * 3. White "OTHER ALLOY / BARS GRADES" Navigation Card with square bullet grade buttons
 */
export default function BarGradeDetailView({ categorySlug, gradeSlug, onNavigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    notes: ''
  });

  const category = useMemo(() => {
    return getBarsCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const grade = useMemo(() => {
    if (!category) return null;
    return getBarsGradeBySlug(categorySlug, gradeSlug) || category.grades[0];
  }, [category, categorySlug, gradeSlug]);

  const otherGrades = useMemo(() => {
    if (!category || !grade) return [];
    return category.grades.filter(g => g.slug !== grade.slug);
  }, [category, grade]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitQuoteRequest({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: `${grade?.name || 'Bar Specification'} (${category?.name || 'Bars & Rods'})`,
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

  if (!category || !grade) {
    return (
      <div className="bar-grade-not-found-container">
        <div className="bar-grade-not-found-card">
          <h2>Specification Not Found</h2>
          <p>The requested bar or rod grade specification could not be located in our catalog.</p>
          <button
            type="button"
            className="btn-back-to-bars"
            onClick={() => onNavigate && onNavigate('/products/bars')}
          >
            Return to Bars Catalog
          </button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about ${grade.name} (${category.name}). Please share availability, specification sheets, and pricing.`
  );

  return (
    <div className="clean-bar-grade-detail-page">
      {/* 1. Breadcrumbs Bar */}
      <div className="bar-grade-header-bar">
        <div className="bar-grade-container">
          <nav className="bar-grade-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products/bars')}>
              Bars
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate(`/products/bars/${category.slug}`)}>
              {category.name}
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{grade.name}</span>
          </nav>

          <button
            type="button"
            className="btn-back-category"
            onClick={() => onNavigate && onNavigate('/products/bars')}
          >
            <ArrowLeft size={16} />
            <span>All Bars</span>
          </button>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="bar-grade-main-container">
        <div className="bar-grade-layout-grid">
          
          {/* LEFT COLUMN: Main Technical Specs & Product Presentation */}
          <main className="bar-grade-primary-content">
            
            {/* Top Product Hero Block */}
            <div className="bar-grade-hero-card">
              <div className="hero-category-tag">
                <span>{category.name}</span>
                <span className="hero-tag-dot">•</span>
                <span>ASTM / ASME / DIN CERTIFIED</span>
              </div>

              <h1 className="hero-grade-title">{grade.name}</h1>

              {grade.code && (
                <div className="hero-code-badge">
                  <strong>Standard Designation:</strong> {grade.code}
                </div>
              )}

              {/* Media Visual Frame with Parent Category Image */}
              <div className="hero-media-wrapper">
                <img
                  src={category.image}
                  alt={`${grade.name} - ${category.name}`}
                  className="hero-product-img"
                />
                <div className="hero-media-overlay-badge">
                  <ShieldCheck size={14} />
                  <span>100% PMI &amp; ULTRASONIC TESTED</span>
                </div>
              </div>

              {/* Overview / Technical Description */}
              <div className="hero-description-block">
                <h3 className="section-subheading">Product Overview &amp; Metallurgical Characteristics</h3>
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
                  <div className="cell-label">Product Profiles</div>
                  <div className="cell-value">Round Bars, Hex Bars, Square Bars, Ground Shafts</div>
                </div>
              </div>
            </div>

            {/* Dimensional & Supply Specifications */}
            <div className="bar-grade-specs-card">
              <h2 className="section-heading">
                <FileCheck2 size={20} className="heading-icon" />
                Technical &amp; Dimensional Specifications
              </h2>

              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {grade.specs?.diameter && (
                      <tr>
                        <th>Diameter / Size Range</th>
                        <td>{grade.specs.diameter}</td>
                      </tr>
                    )}
                    {grade.specs?.conditions && (
                      <tr>
                        <th>Supply Conditions</th>
                        <td>{grade.specs.conditions}</td>
                      </tr>
                    )}
                    {grade.specs?.tolerances && (
                      <tr>
                        <th>Dimensional Tolerances</th>
                        <td>{grade.specs.tolerances}</td>
                      </tr>
                    )}
                    {grade.specs?.lengths && (
                      <tr>
                        <th>Standard Lengths</th>
                        <td>{grade.specs.lengths}</td>
                      </tr>
                    )}
                    <tr>
                      <th>Material Classification</th>
                      <td>{category.name}</td>
                    </tr>
                    <tr>
                      <th>Primary Specification Standards</th>
                      <td>{category.standards}</td>
                    </tr>
                    <tr>
                      <th>Overall Section Scope</th>
                      <td>{category.sizeRange || '2 mm to 350 mm Diameter'}</td>
                    </tr>
                    <tr>
                      <th>Surface Finishes Available</th>
                      <td>{category.finishes || 'Centerless Ground, Cold Drawn, Rough Turned, Peeled'}</td>
                    </tr>
                    <tr>
                      <th>Inspection &amp; Test Certificates</th>
                      <td>EN 10204 3.1 &amp; 3.2, 100% Ultrasonic (ASTM A388), PMI, Third-Party (TUV, DNV, BV, Lloyds)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Available Product Configurations */}
            {category.availableForms && category.availableForms.length > 0 && (
              <div className="bar-grade-forms-card">
                <h2 className="section-heading">
                  <Layers size={20} className="heading-icon" />
                  Available Product Configurations
                </h2>
                <div className="forms-grid">
                  {category.availableForms.map((formName, idx) => (
                    <div key={idx} className="form-item-chip">
                      <span className="form-dot">•</span>
                      <span>{formName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Critical Applications */}
            {grade.applications && grade.applications.length > 0 && (
              <div className="bar-grade-apps-card">
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

          {/* RIGHT COLUMN: Exact Match to Attached Reference Screenshots */}
          <aside className="grade-sidebar-column">
            
            {/* 1. Fast Dispatch Quotation Card (Dark Navy Top Card) */}
            <div className="sidebar-action-card">
              <span className="sidebar-action-tag">FAST DISPATCH QUOTATION</span>
              <h3 className="sidebar-action-title">Inquire for {grade.name}</h3>
              <p className="sidebar-action-desc">
                Need immediate mill pricing, cut-to-length bars, or MTC documentation? Reach our sales desk directly.
              </p>

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

            {/* 2. Formal RFQ Card (White Form Card with Exact Field Headings) */}
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
                      placeholder="e.g. 500 Meters, SCH 80"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="rfq-notes">PROJECT NOTES (OPTIONAL)</label>
                    <textarea
                      id="rfq-notes"
                      rows="2"
                      placeholder="Length, cut requirements, test certificates..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-submit-rfq" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'TRANSMITTING RFQ...' : `SEND RFQ FOR ${grade.name.toUpperCase()}`}</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* 3. Other Grades in Category (Clean White Card with Red/Orange Bullets) */}
            {otherGrades.length > 0 && (
              <div className="sidebar-grades-nav-card">
                <h4 className="other-grades-title">
                  OTHER {category.name.toUpperCase()} GRADES ({otherGrades.length})
                </h4>
                <div className="other-grades-list">
                  {otherGrades.map((og) => (
                    <button
                      key={og.id}
                      type="button"
                      className="other-grade-btn"
                      onClick={() => onNavigate && onNavigate(`/products/bars/${category.slug}/${og.slug}`)}
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
  );
}
