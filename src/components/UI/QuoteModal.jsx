import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  ShieldCheck,
  RotateCcw,
  MessageSquare,
  Building,
  User,
  Mail,
  Phone,
  Package
} from 'lucide-react';
import { getAllProductGroups } from '../../data/productCatalogData';
import { brandDetails } from '../../data/navigationData';
import { submitQuoteRequest, getWhatsAppInquiryUrl } from '../../services/quoteService';
import './QuoteModal.css';

// Dynamic product groups from central catalog precomputed once
const productOptions = (() => {
  try {
    const groups = getAllProductGroups();
    if (!groups || !Array.isArray(groups)) return [];
    return groups.map((g) => ({
      id: g.id || g.slug,
      name: g.name,
      division: g.division,
      categories: (g.categories || []).map((c) => c.name)
    }));
  } catch {
    return [];
  }
})();

export default function QuoteModal({ isOpen, onClose, initialContext = {} }) {
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    product: '',
    specsAndQuantity: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  // Synchronize initial context when modal opens
  useEffect(() => {
    if (isOpen) {
      const targetProduct = initialContext.product || initialContext.name || '';
      const targetGrade = initialContext.grade || '';
      const initialSpecs = targetGrade ? `Inquiring for grade: ${targetGrade}` : '';

      setFormData((prev) => ({
        ...prev,
        product: targetProduct || prev.product,
        specsAndQuantity: initialSpecs || prev.specsAndQuantity
      }));
      setSubmitSuccess(false);
      setSubmitError('');
      setErrors({});

      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialContext]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return '';
      case 'companyName':
        if (!value.trim()) return 'Company Name is required';
        return '';
      case 'email':
        if (!value.trim()) return 'Corporate Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid corporate email address';
        }
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone / WhatsApp number is required';
        if (!/^[+0-9\s\-()]{7,20}$/.test(value.trim())) {
          return 'Please enter a valid phone number with country code';
        }
        return '';
      case 'product':
        if (!value.trim()) return 'Please select a required product';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    ['fullName', 'companyName', 'email', 'phone', 'product'].forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitError('');
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`modal-${firstKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await submitQuoteRequest(formData);
      setTicketNumber(res.ticket);
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(err.message || 'An unexpected transmission error occurred. Please retry or contact our desk.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      product: '',
      specsAndQuantity: ''
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError('');
    setTicketNumber('');
  };

  const waUrl = getWhatsAppInquiryUrl({
    ticketNumber,
    fullName: formData.fullName,
    companyName: formData.companyName,
    product: formData.product,
    specsAndQuantity: formData.specsAndQuantity
  });

  return (
    <div
      className="quote-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        id="quote-modal"
        ref={modalRef}
        className="quote-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        {/* Top Glow Accent Bar */}
        <div className="quote-modal-top-bar" aria-hidden="true" />

        {/* Close Button */}
        <button
          type="button"
          className="quote-modal-close"
          onClick={onClose}
          aria-label="Close Request For Quotation Dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="quote-modal-header">
          <div className="quote-modal-badge-row">
            <span className="quote-modal-badge">DIRECT PROCUREMENT DESK</span>
            <span className="quote-modal-speed">
              <Clock size={12} aria-hidden="true" />
              <span>Response Within 4 Hours</span>
            </span>
          </div>
          <h2 id="quote-modal-title" className="quote-modal-title">
            Request an Instant Formal Quote <span className="text-red">(RFQ)</span>
          </h2>
          <p className="quote-modal-subtitle">
            Submit your material requirements. Our metallurgical sales engineers transmit formal CIF / FOB pricing, MTC compliance packs, and mill delivery schedules directly to your inbox.
          </p>
        </div>

        {/* Success Confirmation State */}
        {submitSuccess ? (
          <div className="quote-modal-success" role="status" aria-live="polite">
            <div className="quote-modal-success-icon">
              <CheckCircle size={44} aria-hidden="true" />
            </div>

            <h3 className="quote-modal-success-title">RFQ Inquiry Transmitted Successfully</h3>
            <p className="quote-modal-success-msg">
              Thank you, <strong>{formData.fullName}</strong>. Your quotation request has been registered under ticket reference <strong>#{ticketNumber}</strong>.
            </p>

            <div className="quote-modal-summary-box">
              <div className="summary-row">
                <span className="s-lbl">Assigned Desk:</span>
                <strong className="s-val">{brandDetails.contact.email}</strong>
              </div>
              <div className="summary-row">
                <span className="s-lbl">Company:</span>
                <span className="s-val">{formData.companyName}</span>
              </div>
              <div className="summary-row">
                <span className="s-lbl">Requirement:</span>
                <span className="s-val font-semibold">{formData.product}</span>
              </div>
              {formData.specsAndQuantity && (
                <div className="summary-row">
                  <span className="s-lbl">Specifications:</span>
                  <span className="s-val">{formData.specsAndQuantity}</span>
                </div>
              )}
            </div>

            <p className="quote-modal-reassurance">
              Our export desk will forward your formal commercial quotation to <strong>{formData.email}</strong> within 4 business hours.
            </p>

            <div className="quote-modal-actions-row">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-action btn-modal-wa"
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>Follow up on WhatsApp</span>
              </a>

              <button
                type="button"
                className="btn-modal-action btn-modal-reset"
                onClick={handleReset}
              >
                <RotateCcw size={15} aria-hidden="true" />
                <span>Submit Another RFQ</span>
              </button>

              <button
                type="button"
                className="btn-modal-action btn-modal-close-action"
                onClick={onClose}
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Quote Form */
          <form className="quote-modal-form" onSubmit={handleSubmit} noValidate>
            {submitError && (
              <div className="quote-modal-error-box" role="alert">
                <AlertCircle size={18} className="error-icon" aria-hidden="true" />
                <div className="error-content">
                  <strong className="error-title">Transmission Notice:</strong>
                  <p className="error-desc">{submitError}</p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="error-wa-link"
                  >
                    Transmit Directly via WhatsApp &rarr;
                  </a>
                </div>
              </div>
            )}

            <div className="quote-modal-grid">
              {/* Full Name */}
              <div className={`quote-form-group ${errors.fullName ? 'has-error' : ''}`}>
                <label htmlFor="modal-fullName" className="quote-label">
                  Full Name <span className="req">*</span>
                </label>
                <div className="quote-input-wrapper">
                  <User size={15} className="input-icon" aria-hidden="true" />
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="quote-input"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.fullName && <span className="quote-error-text">{errors.fullName}</span>}
              </div>

              {/* Company Name */}
              <div className={`quote-form-group ${errors.companyName ? 'has-error' : ''}`}>
                <label htmlFor="modal-companyName" className="quote-label">
                  Company Name <span className="req">*</span>
                </label>
                <div className="quote-input-wrapper">
                  <Building size={15} className="input-icon" aria-hidden="true" />
                  <input
                    id="modal-companyName"
                    name="companyName"
                    type="text"
                    placeholder="e.g. Apex Industrial Solutions Ltd."
                    autoComplete="organization"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="quote-input"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.companyName && <span className="quote-error-text">{errors.companyName}</span>}
              </div>

              {/* Corporate Email */}
              <div className={`quote-form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="modal-email" className="quote-label">
                  Corporate Email <span className="req">*</span>
                </label>
                <div className="quote-input-wrapper">
                  <Mail size={15} className="input-icon" aria-hidden="true" />
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    placeholder="e.g. purchase@apexindustry.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="quote-input"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && <span className="quote-error-text">{errors.email}</span>}
              </div>

              {/* Mobile / Phone Number */}
              <div className={`quote-form-group ${errors.phone ? 'has-error' : ''}`}>
                <label htmlFor="modal-phone" className="quote-label">
                  Phone / WhatsApp <span className="req">*</span>
                </label>
                <div className="quote-input-wrapper">
                  <Phone size={15} className="input-icon" aria-hidden="true" />
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. +91 98200 XXXXX"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="quote-input"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.phone && <span className="quote-error-text">{errors.phone}</span>}
              </div>

              {/* Product Requirement */}
              <div className={`quote-form-group full-width ${errors.product ? 'has-error' : ''}`}>
                <label htmlFor="modal-product" className="quote-label">
                  Product Requirement <span className="req">*</span>
                </label>
                <div className="quote-input-wrapper">
                  <Package size={15} className="input-icon" aria-hidden="true" />
                  <select
                    id="modal-product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="quote-select"
                    disabled={isSubmitting}
                  >
                    <option value="">-- Select Target Steel Product Category --</option>
                    {productOptions.map((group) => (
                      <optgroup key={group.id} label={`${group.division.toUpperCase()}: ${group.name}`}>
                        <option value={`${group.name} (All Grades)`}>{group.name} — Full Range</option>
                        {group.categories.map((cat, idx) => (
                          <option key={`${group.id}-${idx}`} value={`${group.name}: ${cat}`}>
                            &nbsp;&nbsp;&bull;&nbsp;{cat}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <optgroup label="SPECIALIZED REQUIREMENTS">
                      <option value="Stainless Steel & High Nickel Exotic Piping Package">
                        Exotic Nickel &amp; Titanium Piping Package
                      </option>
                      <option value="Complete Project Mill Order (Pipes + Fittings + Flanges)">
                        Comprehensive Mill Order Supply
                      </option>
                    </optgroup>
                  </select>
                </div>
                {errors.product && <span className="quote-error-text">{errors.product}</span>}
              </div>

              {/* Specifications & Quantities */}
              <div className="quote-form-group full-width">
                <div className="quote-label-row">
                  <label htmlFor="modal-specsAndQuantity" className="quote-label">
                    Specifications &amp; Quantities
                  </label>
                  <span className="quote-optional">Optional</span>
                </div>
                <textarea
                  id="modal-specsAndQuantity"
                  name="specsAndQuantity"
                  rows="3"
                  placeholder="Specify material grade (e.g. SS 316L, ASTM A106 Gr B, Duplex 2205), outer diameter, wall schedule, quantity (MT / Pieces), delivery location..."
                  value={formData.specsAndQuantity}
                  onChange={handleChange}
                  className="quote-textarea"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Modal Submit Footer */}
            <div className="quote-modal-footer">
              <button
                type="submit"
                id="quote-submit-btn"
                className="btn-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="modal-spinner" aria-hidden="true" />
                    <span>Transmitting RFQ to Commercial Desk...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" />
                    <span>SUBMIT FORMAL RFQ INQUIRY</span>
                  </>
                )}
              </button>

              <div className="quote-modal-guarantees">
                <div className="guarantee-pill">
                  <ShieldCheck size={13} aria-hidden="true" />
                  <span>Transmitted to: {brandDetails.contact.email}</span>
                </div>
                <div className="guarantee-pill">
                  <Clock size={13} aria-hidden="true" />
                  <span>Guaranteed 4-Hour Response</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
