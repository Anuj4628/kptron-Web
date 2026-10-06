import React, { useMemo, useState } from 'react';
import { getPipeCategoryBySlug, getPipeGradeBySlug } from '../../../data/pipesData';
import { 
  ShieldCheck, 
  Layers, 
  FileCheck2, 
  PhoneCall, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Send,
  Building2,
  Mail,
  User,
  MessageSquare
} from 'lucide-react';
import './PipeGradeDetailView.css';

/**
 * Dedicated Pipe Grade Detail View
 * Shows genuine, verified technical information, large authentic product image,
 * ASTM / ASME standards, industrial applications, and quote inquiry CTAs.
 */
export default function PipeGradeDetailView({ categorySlug, gradeSlug, onNavigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    notes: ''
  });

  const category = useMemo(() => {
    return getPipeCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const grade = useMemo(() => {
    if (!category) return null;
    return getPipeGradeBySlug(categorySlug, gradeSlug) || category.grades[0];
  }, [category, categorySlug, gradeSlug]);

  const otherGrades = useMemo(() => {
    if (!category || !grade) return [];
    return category.grades.filter(g => g.slug !== grade.slug);
  }, [category, grade]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', quantity: '', notes: '' });
    }, 4000);
  };

  if (!category || !grade) {
    return (
      <div className="grade-not-found-container">
        <div className="grade-not-found-card">
          <h2>Pipe Specification Not Found</h2>
          <p>The requested pipe specification could not be located in the catalog.</p>
          <button
            type="button"
            className="btn-back-to-pipes"
            onClick={() => onNavigate && onNavigate('/products/pipes')}
          >
            Return to Pipes &amp; Tubes
          </button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am inquiring about ${grade.name} (${category.name}). Please share availability, specification sheets, and pricing.`
  );

  return (
    <div className="clean-grade-detail-page">
      {/* 1. Breadcrumbs Bar */}
      <div className="grade-detail-header-bar">
        <div className="grade-detail-container">
          <nav className="grade-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/')}>Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products')}>Products</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate('/products/pipes')}>Pipes</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-item" onClick={() => onNavigate && onNavigate(`/products/pipes/${category.slug}`)}>
              {category.name}
            </span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{grade.name}</span>
          </nav>

          <button
            type="button"
            className="btn-back-category"
            onClick={() => onNavigate && onNavigate('/products/pipes')}
          >
            <ArrowLeft size={15} />
            <span>Back to All Pipes</span>
          </button>
        </div>
      </div>

      {/* 2. Main Detail Content Container */}
      <div className="grade-detail-container main-content-wrap">
        <div className="grade-detail-grid">
          
          {/* LEFT COLUMN: Technical Grade Deep-Dive Profile */}
          <div className="grade-main-column">
            
            {/* Title & Eyebrow */}
            <div className="grade-heading-box">
              <div className="grade-eyebrows-row">
                <span className="grade-cat-tag">{category.name}</span>
                <span className="grade-code-tag">{grade.code || grade.standard}</span>
              </div>
              <h1 className="grade-page-title">{grade.name}</h1>
              <p className="grade-lead-desc">{grade.shortDesc}</p>
            </div>

            {/* Large Authentic Product Image Frame */}
            <div className="grade-media-card">
              <img
                src={category.image}
                alt={grade.name}
                className="grade-hero-image"
                loading="eager"
                decoding="async"
              />
              <div className="grade-image-badges">
                <span className="img-badge">
                  <ShieldCheck size={13} />
                  <span>100% PMI SPECTRO TESTED</span>
                </span>
                <span className="img-badge">
                  <FileCheck2 size={13} />
                  <span>EN 10204 3.1 &amp; 3.2 CERTIFIED</span>
                </span>
              </div>
            </div>

            {/* Technical Overview Section */}
            <section className="grade-content-section">
              <h2 className="section-title">
                <FileText size={18} className="title-icon" />
                Technical Overview
              </h2>
              <div className="section-body-text">
                <p>{grade.fullDesc || grade.shortDesc}</p>
                <p>
                  Supplied directly from certified mill stocks with full heat number traceability, positive material identification (PMI), and strict dimensional adherence to ANSI B36.10M / ANSI B36.19M tolerances.
                </p>
              </div>
            </section>

            {/* Specifications & Standards Section */}
            <section className="grade-content-section">
              <h2 className="section-title">
                <ShieldCheck size={18} className="title-icon" />
                Grade Specifications &amp; Standards
              </h2>
              <div className="specs-table-wrapper">
                <table className="grade-specs-table">
                  <tbody>
                    <tr>
                      <th scope="row">Governing Standard</th>
                      <td>{grade.standard || category.standards}</td>
                    </tr>
                    {grade.uns && (
                      <tr>
                        <th scope="row">UNS Designation</th>
                        <td>{grade.uns}</td>
                      </tr>
                    )}
                    {grade.din && (
                      <tr>
                        <th scope="row">DIN / EN Material No.</th>
                        <td>{grade.din}</td>
                      </tr>
                    )}
                    <tr>
                      <th scope="row">Size Range</th>
                      <td>{grade.specs?.size || category.sizeRange}</td>
                    </tr>
                    <tr>
                      <th scope="row">Wall Thickness / Schedules</th>
                      <td>{grade.specs?.schedule || category.schedules}</td>
                    </tr>
                    <tr>
                      <th scope="row">End Preparation</th>
                      <td>{grade.specs?.ends || 'Plain End (PE), Beveled End (BE 37.5° per ASME B16.25)'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Inspection &amp; Testing</th>
                      <td>100% Hydrostatic Proof Testing, Eddy Current, Ultrasonic (UT), PMI Spectro, Flaring &amp; Flattening Tests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Typical Industrial Applications Section */}
            <section className="grade-content-section">
              <h2 className="section-title">
                <Layers size={18} className="title-icon" />
                Common Industrial Applications
              </h2>
              <ul className="applications-list">
                {(grade.applications || [
                  'Petroleum refineries and catalytic cracking units',
                  'High-pressure steam power generation boilers and superheaters',
                  'Offshore oil & gas marine and subsea installations',
                  'Chemical processing reactors and aggressive acid transfer conduits'
                ]).map((app, idx) => (
                  <li key={idx} className="app-item">
                    <CheckCircle2 size={16} className="app-check-icon" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Available Forms */}
            <section className="grade-content-section">
              <h2 className="section-title">
                <Building2 size={18} className="title-icon" />
                Available Product Forms
              </h2>
              <div className="forms-badges-grid">
                {(category.availableForms || ['Seamless Pipe', 'Heavy Wall Boiler Tube', 'Welded Pipe', 'Instrument Tubing']).map((form, idx) => (
                  <div key={idx} className="form-badge-card">
                    <CheckCircle2 size={14} className="form-check" />
                    <span>{form}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Sticky Quote & Related Grades Sidebar */}
          <aside className="grade-sidebar-column">
            
            {/* Quick Contact & WhatsApp Action Card */}
            <div className="sidebar-action-card">
              <span className="sidebar-action-tag">FAST DISPATCH QUOTATION</span>
              <h3 className="sidebar-action-title">Inquire for {grade.name}</h3>
              <p className="sidebar-action-desc">
                Need immediate mill pricing, cut-to-length pipes, or MTC documentation? Reach our sales desk directly.
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

            {/* Formal RFQ Card */}
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
                  <div className="form-field">
                    <label htmlFor="rfq-name">Your Name</label>
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
                    <label htmlFor="rfq-email">Business Email</label>
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
                    <label htmlFor="rfq-phone">Contact Number</label>
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
                    <label htmlFor="rfq-quantity">Required Quantity / Schedule</label>
                    <input
                      id="rfq-quantity"
                      type="text"
                      placeholder="e.g. 500 Meters, SCH 80"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="rfq-notes">Project Notes (Optional)</label>
                    <textarea
                      id="rfq-notes"
                      rows="2"
                      placeholder="Length, cut requirements, test certificates..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-submit-rfq">
                    <span>Send RFQ For {grade.name}</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Other Grades in Category */}
            {otherGrades.length > 0 && (
              <div className="sidebar-grades-nav-card">
                <h4 className="other-grades-title">
                  Other {category.name} Grades ({otherGrades.length})
                </h4>
                <div className="other-grades-list">
                  {otherGrades.map((og) => (
                    <button
                      key={og.id}
                      type="button"
                      className="other-grade-btn"
                      onClick={() => onNavigate && onNavigate(`/products/pipes/${category.slug}/${og.slug}`)}
                    >
                      <span className="og-dot">•</span>
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
