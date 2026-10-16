import React, { useState } from 'react';
import { 
  submitQuoteRequest, 
  generateTicketNumber, 
  getWhatsAppInquiryUrl, 
  getGmailQuoteUrl, 
  getMailtoQuoteUrl 
} from '../../services/quoteService';
import { brandDetails } from '../../data/navigationData';
import './InquiryForm.css';

/**
 * Dedicated Product Quotation & RFQ Form (Bright White Theme)
 */
export default function InquiryForm({
  productName = "Industrial Steel Product",
  materialGrade = "Standard Commercial Grade",
  division = "Manufacturer Division"
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    unit: 'Pieces (PCS)',
    deliveryLocation: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [ticketId, setTicketId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.quantity.trim()) errs.quantity = 'Quantity is required';
    return errs;
  };

  const isFormFilled = Boolean(
    formData.fullName.trim().length >= 2 &&
    formData.company.trim().length >= 1 &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.phone.trim().length >= 7 &&
    formData.quantity.trim()
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSendViaWhatsApp = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalid = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstInvalid);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    const newTicket = ticketId || generateTicketNumber();
    setTicketId(newTicket);

    const payload = {
      fullName: formData.fullName,
      companyName: formData.company,
      email: formData.email,
      phone: formData.phone,
      product: `${productName} (${materialGrade})`,
      specsAndQuantity: `Quantity: ${formData.quantity} ${formData.unit} | Location: ${formData.deliveryLocation || 'Not specified'} | Notes: ${formData.notes || 'None'}`,
      ticketNumber: newTicket,
      submissionChannel: 'WhatsApp Direct'
    };

    const wa = getWhatsAppInquiryUrl(payload);
    window.open(wa, '_blank', 'noopener,noreferrer');

    submitQuoteRequest(payload).catch(err => {
      console.warn('Background quote notice:', err);
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleSendViaEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalid = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstInvalid);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    const newTicket = ticketId || generateTicketNumber();
    setTicketId(newTicket);

    const payload = {
      fullName: formData.fullName,
      companyName: formData.company,
      email: formData.email,
      phone: formData.phone,
      product: `${productName} (${materialGrade})`,
      specsAndQuantity: `Quantity: ${formData.quantity} ${formData.unit} | Location: ${formData.deliveryLocation || 'Not specified'} | Notes: ${formData.notes || 'None'}`,
      ticketNumber: newTicket,
      submissionChannel: 'Gmail Compose'
    };

    const gmail = getGmailQuoteUrl(payload);
    const win = window.open(gmail, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = getMailtoQuoteUrl(payload);
    }

    submitQuoteRequest(payload).catch(err => {
      console.warn('Background quote notice:', err);
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendViaWhatsApp(e);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTicketId('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      quantity: '',
      unit: 'Pieces (PCS)',
      deliveryLocation: '',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="product-inquiry-section" className="bright-rfq-section">
      <div className="rfq-card-white">
        <div className="rfq-top-bar"></div>

        <div className="rfq-head">
          <div className="rfq-badge-row">
            <span className="rfq-badge-red">OFFICIAL RFQ SPECIFICATION</span>
            <span className="rfq-division-tag">{division}</span>
          </div>
          <h3 className="rfq-title">Request Quotation & Material Test Certificate (MTC)</h3>
          <p className="rfq-subtitle">
            Submit your required schedule, size, and quantity. Our technical sales engineering team provides formal CIF/FOB pricing within 4 hours.
          </p>
        </div>

        {/* Pre-filled Product Summary Bar */}
        <div className="rfq-summary-strip">
          <div className="summary-col">
            <span className="sc-lbl">Target Product:</span>
            <strong className="sc-val">{productName}</strong>
          </div>
          <div className="summary-col">
            <span className="sc-lbl">Material / Grade:</span>
            <strong className="sc-val">{materialGrade}</strong>
          </div>
          <div className="summary-col">
            <span className="sc-lbl">Compliance:</span>
            <strong className="sc-val">EN 10204 3.1 & 3.2 / NACE MR0175</strong>
          </div>
        </div>

        {submitted ? (
          <div className="rfq-success-box">
            <div className="success-icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4>Quotation Request Received</h4>
            <p>
              Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{productName}</strong> ({formData.quantity} {formData.unit}) has been registered under ticket <strong>#{ticketId}</strong>.
            </p>
            <p className="success-hint">
              Our metallurgical export desk will transmit your technical pricing and MTC report to <strong>{formData.email}</strong> shortly.
            </p>
            <div className="rfq-success-actions">
              <a
                href={getWhatsAppInquiryUrl({
                  fullName: formData.fullName,
                  companyName: formData.company,
                  email: formData.email,
                  phone: formData.phone,
                  product: `${productName} (${materialGrade})`,
                  specsAndQuantity: `Quantity: ${formData.quantity} ${formData.unit} | Location: ${formData.deliveryLocation || 'Not specified'} | Notes: ${formData.notes || 'None'}`,
                  ticketNumber: ticketId
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-success-wa"
              >
                <span>Open in WhatsApp</span>
              </a>

              <a
                href={getGmailQuoteUrl({
                  fullName: formData.fullName,
                  companyName: formData.company,
                  email: formData.email,
                  phone: formData.phone,
                  product: `${productName} (${materialGrade})`,
                  specsAndQuantity: `Quantity: ${formData.quantity} ${formData.unit} | Location: ${formData.deliveryLocation || 'Not specified'} | Notes: ${formData.notes || 'None'}`,
                  ticketNumber: ticketId
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-success-email"
              >
                <span>Open in Gmail</span>
              </a>

              <button type="button" className="btn-rfq-again" onClick={handleReset}>
                Submit Another Specification
              </button>
            </div>
          </div>
        ) : (
          <form className="bright-rfq-form" onSubmit={handleSubmit} noValidate>
            {submitError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.75rem 1rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem' }} role="alert">
                <strong>Notice:</strong> {submitError}
              </div>
            )}
            <div className="rfq-fields-grid">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Procurement Officer / Full Name <span className="req">*</span></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'has-error' : ''}
                />
                {errors.fullName && <span className="err-text">{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Corporate Email Address <span className="req">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. procurement@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <span className="err-text">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp (with Country Code) <span className="req">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +91 98200 XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'has-error' : ''}
                />
                {errors.phone && <span className="err-text">{errors.phone}</span>}
              </div>

              {/* Company */}
              <div className="form-group">
                <label htmlFor="company">Company / Project Name <span className="req">*</span></label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g. Larsen & Toubro / Refinery Project"
                  value={formData.company}
                  onChange={handleChange}
                  className={errors.company ? 'has-error' : ''}
                />
                {errors.company && <span className="err-text">{errors.company}</span>}
              </div>

              {/* Quantity */}
              <div className="form-group">
                <label htmlFor="quantity">Required Quantity & Unit <span className="req">*</span></label>
                <div className="qty-wrap">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 500"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={errors.quantity ? 'has-error' : ''}
                    min="1"
                  />
                  <select name="unit" value={formData.unit} onChange={handleChange}>
                    <option value="Pieces (PCS)">Pieces (PCS)</option>
                    <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                    <option value="Meters (MTR)">Meters (MTR)</option>
                    <option value="Kilograms (KG)">Kilograms (KG)</option>
                    <option value="Project Lot">Project Lot</option>
                  </select>
                </div>
                {errors.quantity && <span className="err-text">{errors.quantity}</span>}
              </div>

              {/* Delivery Location */}
              <div className="form-group">
                <label htmlFor="deliveryLocation">Delivery Location / Port of Discharge</label>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  placeholder="e.g. Nhava Sheva (JNPT) / Mundra / Dubai / Houston"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Notes */}
            <div className="form-group full-width">
              <label htmlFor="notes">
                Technical Specifications, Wall Thickness, Testing Requirements (PMI, Radiography, TPI):
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                placeholder="Mention any specific dimensional tolerances, schedule requirements, NACE compliance, TPI inspection (TUV, DNV, Lloyds), or required delivery schedules..."
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Dual Submission Channel Options */}
            <div className="rfq-submit-row">
              <div className="submission-channel-block">
                <div className="submission-channel-header">
                  <span className="submission-channel-title">Choose Submission Option:</span>
                  {!isFormFilled && (
                    <span className="submission-channel-hint">
                      Complete required fields (*) to enable submission
                    </span>
                  )}
                </div>

                <div className="submission-buttons-grid">
                  {/* Option 1: WhatsApp */}
                  <button
                    type="button"
                    id="btn-inquiry-submit-whatsapp"
                    className={`btn-channel btn-channel-whatsapp ${!isFormFilled ? 'is-disabled' : ''}`}
                    onClick={handleSendViaWhatsApp}
                    disabled={isSubmitting}
                    aria-label="Send Quote Request via WhatsApp"
                  >
                    <div className="btn-channel-icon-wrap wa-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.086.289.13.332.202.043.073.043.419-.101.824z"/>
                      </svg>
                    </div>
                    <div className="btn-channel-content">
                      <span className="btn-channel-main">Send via WhatsApp</span>
                      <span className="btn-channel-sub">Instant chat with sales desk</span>
                    </div>
                  </button>

                  {/* Option 2: Email / Gmail */}
                  <button
                    type="button"
                    id="btn-inquiry-submit-email"
                    className={`btn-channel btn-channel-email ${!isFormFilled ? 'is-disabled' : ''}`}
                    onClick={handleSendViaEmail}
                    disabled={isSubmitting}
                    aria-label="Send Quote Request via Email / Gmail"
                  >
                    <div className="btn-channel-icon-wrap email-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div className="btn-channel-content">
                      <span className="btn-channel-main">Send via Email / Gmail</span>
                      <span className="btn-channel-sub">Pre-filled Gmail compose</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="inquiry-guarantees">
                <span className="inquiry-guarantee-pill">
                  Target Desk: {brandDetails.contact.email}
                </span>
                <span className="inquiry-guarantee-pill">
                  Response within 4 Hours
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
