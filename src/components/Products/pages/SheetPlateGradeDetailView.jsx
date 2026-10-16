import React, { useMemo, useState } from 'react';
import { getSheetsPlatesCategoryBySlug, getSheetsPlatesGradeBySlug } from '../../../data/sheetsPlatesCoilsData';
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
  MessageSquare
} from 'lucide-react';
import './SheetPlateGradeDetailView.css';

/**
 * Dedicated Sheet / Plate / Coil Grade Detail View
 * Shows genuine, verified technical information, parent category new image,
 * ASTM / ASME standards, industrial applications, and quote inquiry CTAs.
 */
export default function SheetPlateGradeDetailView({ categorySlug, gradeSlug, onNavigate }) {
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
    return getSheetsPlatesCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const grade = useMemo(() => {
    if (!category) return null;
    return getSheetsPlatesGradeBySlug(categorySlug, gradeSlug) || category.grades[0];
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
        product: `${grade?.name || 'Sheet / Plate Specification'} (${category?.name || 'Sheets, Plates & Coils'})`,
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
      <div className="sheet-grade-not-found-container">
        <div className="sheet-grade-not-found-card">
          <h2>Specification Not Found</h2>
          <p>The requested sheets, plates or coils specification could not be located in our catalog.</p>
          <button
            type="button"
            className="btn-back-to-sheets"
            onClick={() => onNavigate && onNavigate('/products/sheets-plates-coils')}
          >
            Return to Sheets, Plates &amp; Coils Catalog
          </button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about ${grade.name} (${category.name}). Please share availability, specification sheets, and pricing.`
  );

  return (
    <div className="clean-sheet-grade-detail-page">
      {/* 1. Breadcrumbs Bar */}
      <div className="sheet-grade-header-bar">
        <div className="sheet-grade-container">
          <nav className="sheet-grade-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products/sheets-plates-coils')}>
              Sheets, Plates &amp; Coils
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate(`/products/sheets-plates-coils/${category.materialSlug || category.slug}`)}>
              {category.materialName || category.name}
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{grade.name}</span>
          </nav>

          <button
            type="button"
            className="btn-back-category"
            onClick={() => onNavigate && onNavigate(`/products/sheets-plates-coils/${category.materialSlug || category.slug}`)}
          >
            <ArrowLeft size={16} />
            <span>Back to {category.materialName || category.name}</span>
          </button>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="sheet-grade-main-container">
        <div className="sheet-grade-layout-grid">
          
          {/* LEFT COLUMN: Main Technical Specs & Product Presentation */}
          <main className="sheet-grade-primary-content">
            
            {/* Top Product Hero Block */}
            <div className="sheet-grade-hero-card">
              <div className="hero-category-tag">
                <span>{category.name}</span>
                <span className="hero-tag-dot">•</span>
                <span>ASTM / ASME CERTIFIED</span>
              </div>

              <h1 className="hero-grade-title">{grade.name}</h1>

              {grade.code && (
                <div className="hero-code-badge">
                  <strong>Standard Designation:</strong> {grade.code}
                </div>
              )}

              {/* Media Visual Frame with Specific Grade Authentic Image */}
              <div className="hero-media-wrapper">
                <img
                  src={grade.image || category.image}
                  alt={`${grade.name} - ${category.name}`}
                  className="hero-product-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-media-overlay-badge">
                  <ShieldCheck size={14} />
                  <span>100% PMI &amp; UT VERIFIED</span>
                </div>
              </div>

              {/* Overview / Technical Description */}
              <div className="hero-description-block">
                <h3 className="section-subheading">Product Overview</h3>
                <p className="hero-desc-text">
                  {grade.fullDesc || grade.shortDesc || category.shortDesc}
                </p>
              </div>

              {/* Standard Identifiers Matrix */}
              <div className="standards-matrix-grid">
                <div className="matrix-cell">
                  <div className="cell-label">Governing Standard</div>
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
                  <div className="cell-label">Product Forms</div>
                  <div className="cell-value">Sheets, Heavy Plates, Precision Slit Coils</div>
                </div>
              </div>
            </div>

            {/* Dimensional & Supply Specifications */}
            <div className="sheet-grade-specs-card">
              <h2 className="section-heading">
                <FileCheck2 size={20} className="heading-icon" />
                Technical &amp; Dimensional Specifications
              </h2>

              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {grade.specs?.thickness && (
                      <tr>
                        <th>Thickness Range</th>
                        <td>{grade.specs.thickness}</td>
                      </tr>
                    )}
                    {grade.specs?.dimensions && (
                      <tr>
                        <th>Standard Sheet Sizes</th>
                        <td>{grade.specs.dimensions}</td>
                      </tr>
                    )}
                    {grade.specs?.finishes && (
                      <tr>
                        <th>Surface Finishes</th>
                        <td>{grade.specs.finishes}</td>
                      </tr>
                    )}
                    <tr>
                      <th>Material Family</th>
                      <td>{category.name}</td>
                    </tr>
                    <tr>
                      <th>Primary Standards</th>
                      <td>{category.standards}</td>
                    </tr>
                    <tr>
                      <th>Overall Thickness Scope</th>
                      <td>{category.sizeRange}</td>
                    </tr>
                    <tr>
                      <th>Inspection &amp; Test Certificates</th>
                      <td>EN 10204 3.1 &amp; 3.2, Third Party Inspection (TUV, DNV, BV, Lloyds)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Available Forms */}
            {category.availableForms && category.availableForms.length > 0 && (
              <div className="sheet-grade-forms-card">
                <h2 className="section-heading">
                  <Layers size={20} className="heading-icon" />
                  Available Product Configurations
                </h2>
                <div className="forms-grid">
                  {category.availableForms.map((formName, idx) => (
                    <div key={idx} className="form-item-chip">
                      <span className="form-item-dot">•</span>
                      <span>{formName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industrial Applications Section */}
            {grade.applications && grade.applications.length > 0 && (
              <div className="sheet-grade-apps-card">
                <h2 className="section-heading">
                  <CheckCircle2 size={20} className="heading-icon" />
                  Common Industrial Applications
                </h2>
                <ul className="applications-list">
                  {grade.applications.map((app, idx) => (
                    <li key={idx} className="application-item">
                      <CheckCircle2 size={16} className="app-check-icon" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quality Assurance & Testing Standards */}
            <div className="sheet-grade-qa-card">
              <h2 className="section-heading">
                <ShieldCheck size={20} className="heading-icon" />
                Mill Quality Control &amp; Testing
              </h2>
              <div className="qa-points-grid">
                <div className="qa-point">
                  <strong>Positive Material Identification (PMI):</strong> 100% handheld XRF testing before shipment.
                </div>
                <div className="qa-point">
                  <strong>Ultrasonic Testing (UT):</strong> Conforming to ASTM A435 / A578 Level II for heavy plates.
                </div>
                <div className="qa-point">
                  <strong>Surface Inspection:</strong> Visual and dimensional verification with edge trimming and slit coil burr removal.
                </div>
                <div className="qa-point">
                  <strong>Documentation:</strong> Full mill heat numbers stamped and traceable on each sheet, plate, or master coil.
                </div>
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: Sidebar (RFQ Form & Sister Grades) */}
          <aside className="sheet-grade-sidebar">
            
            {/* Quick Request for Quote (RFQ) Form Card */}
            <div className="sidebar-rfq-card">
              <div className="rfq-card-header">
                <h3 className="rfq-title">Request Quotation</h3>
                <p className="rfq-sub">Direct factory pricing for {grade.name}</p>
              </div>

              {formSubmitted ? (
                <div className="rfq-success-message">
                  <CheckCircle2 size={32} className="success-icon" />
                  <h4>Inquiry Sent Successfully</h4>
                  <p>Our sales engineering team will review your specifications and contact you shortly.</p>
                </div>
              ) : (
                <form className="rfq-form" onSubmit={handleFormSubmit}>
                  {submitError && (
                    <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.6rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                      {submitError}
                    </div>
                  )}
                  <div className="form-field">
                    <label htmlFor="rfq-name">Full Name *</label>
                    <div className="input-with-icon">
                      <User size={15} />
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
                    <label htmlFor="rfq-email">Business Email *</label>
                    <div className="input-with-icon">
                      <Mail size={15} />
                      <input
                        id="rfq-email"
                        type="email"
                        required
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="rfq-phone">Phone / WhatsApp</label>
                    <div className="input-with-icon">
                      <PhoneCall size={15} />
                      <input
                        id="rfq-phone"
                        type="tel"
                        placeholder="+91 / International"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="rfq-quantity">Required Quantity / Dimensions</label>
                    <input
                      id="rfq-quantity"
                      type="text"
                      placeholder="e.g. 5 MT / 10mm x 1500mm x 3000mm"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="rfq-notes">Additional Specifications / Finish</label>
                    <textarea
                      id="rfq-notes"
                      rows={3}
                      placeholder="Finish (2B, No. 1, Satin), testing requirements or delivery schedule..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-submit-rfq" disabled={isSubmitting}>
                    <Send size={15} />
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Price Request'}</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp CTA Button */}
              <div className="rfq-whatsapp-block">
                <a
                  href={`https://wa.me/919967616124?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-quote"
                >
                  <MessageSquare size={16} />
                  <span>Instant Inquiry on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Other Grades in Category Sidebar List */}
            {otherGrades.length > 0 && (
              <div className="sidebar-other-grades-card">
                <h4 className="sidebar-grades-title">
                  <Layers size={16} />
                  <span>Other {category.name} Grades</span>
                </h4>
                
                <div className="sidebar-grades-list">
                  {otherGrades.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className="sidebar-grade-btn"
                      onClick={() => onNavigate && onNavigate(`/products/sheets-plates-coils/${category.slug}/${g.slug}`)}
                    >
                      <span className="sidebar-grade-dot">•</span>
                      <span className="sidebar-grade-name">{g.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact Box */}
            <div className="sidebar-contact-info-card">
              <div className="contact-info-title">Global Procurement Support</div>
              <p className="contact-info-text">
                Need customized dimensions, coil slitting, laser profiling, or mill certification consultation?
              </p>
              <div className="contact-phone-direct">
                <PhoneCall size={14} />
                <span>+91 99201 99589</span>
              </div>
              <div className="contact-email-direct">
                <Mail size={14} />
                <span>sales@kptronsteels.com</span>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
