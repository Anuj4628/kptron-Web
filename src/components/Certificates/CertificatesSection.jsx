import React, { useRef } from 'react';
import { certificatesList } from '../../data/certificatesData';
import { ShieldCheck, Download, Eye, FileText, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import './CertificatesSection.css';

/**
 * CertificatesSection
 * Primary commercial accreditation section for KPTRON PIPING SOLUTIONS INC.
 * Linked directly from the main Navbar via `#certificate`.
 */
export default function CertificatesSection({ onSelectCertificate }) {
  const sectionRef = useRef(null);

  const handleOpenCertificate = (cert) => {
    if (onSelectCertificate) {
      onSelectCertificate(cert);
    }
  };

  return (
    <section
      id="certificate"
      ref={sectionRef}
      className="certificates-section"
      aria-label="Company Certificates and Statutory Compliance"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="certificates-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">STATUTORY ACCREDITATION & COMPLIANCE</span>
          </div>

          <h2 className="section-display-heading">
            OFFICIAL COMPANY <span className="text-highlight-red">CERTIFICATES</span>
          </h2>

          <p className="certificates-subhead">
            KPTRON Piping Solutions Inc. operates under verified statutory registrations issued by the Government of India. Inspect and download our official compliance documentation below.
          </p>

          <div className="cert-status-ribbon">
            <span className="status-item">
              <CheckCircle2 size={13} className="text-success" />
              GOVT. REGISTERED
            </span>
            <span className="status-arrow">&bull;</span>
            <span className="status-item">MSME RECOGNIZED</span>
            <span className="status-arrow">&bull;</span>
            <span className="status-item">GST COMPLIANT</span>
            <span className="status-arrow">&bull;</span>
            <span className="status-item highlight-blue">100% TRACEABLE MTC</span>
          </div>
        </div>

        {/* Dual Certificates Showcase Grid */}
        <div className="certificates-cards-grid">
          {certificatesList.map((cert) => (
            <article key={cert.id} className="certificate-card">
              {/* Card Top Pill Bar */}
              <div className="cert-card-header">
                <div className="cert-card-badge-group">
                  <span className="cert-badge-form">
                    <ShieldCheck size={14} />
                    {cert.typeBadge}
                  </span>
                  <span className="cert-badge-active">
                    <CheckCircle2 size={13} />
                    {cert.statusBadge}
                  </span>
                </div>
                <span className="cert-pages-count">{cert.pages} Page{cert.pages > 1 ? 's' : ''} (PDF)</span>
              </div>

              {/* Title & Authority */}
              <div className="cert-card-title-group">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-authority">{cert.authority}</p>
                <div className="cert-card-reg-pill">
                  <span className="pill-tag">{cert.regLabel}:</span>
                  <span className="pill-val">{cert.registrationNumber}</span>
                </div>
              </div>

              {/* Document Visual Preview & Key Specs Grid */}
              <div className="cert-card-preview-body">
                {/* Visual Thumbnail */}
                <div
                  className="cert-thumbnail-box"
                  onClick={() => handleOpenCertificate(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open preview for ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleOpenCertificate(cert);
                    }
                  }}
                >
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.title} official document preview`}
                    className="cert-thumbnail-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="cert-thumbnail-overlay">
                    <Eye size={22} />
                    <span>Inspect Document</span>
                  </div>
                </div>

                {/* Specs / Highlights */}
                <div className="cert-highlights-table">
                  {cert.highlights.map((item, idx) => (
                    <div key={idx} className="cert-highlight-row">
                      <span className="hl-label">{item.label}</span>
                      <span className="hl-val">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="cert-card-actions">
                <button
                  type="button"
                  className="cert-btn-primary"
                  onClick={() => handleOpenCertificate(cert)}
                  aria-label={`View and inspect ${cert.title}`}
                >
                  <Eye size={16} />
                  <span>Open / View Document</span>
                </button>

                <a
                  href={cert.fileUrl}
                  download={cert.downloadName || cert.fileName}
                  className="cert-btn-secondary"
                  aria-label={`Download original PDF for ${cert.title}`}
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Industrial QA & Traceability Guarantee */}
        <div className="cert-trust-banner">
          <div className="trust-banner-badge">
            <Award size={20} className="trust-badge-icon" />
            <div className="trust-badge-text">
              <span className="trust-badge-title">MATERIAL TEST CERTIFICATES (MTC)</span>
              <span className="trust-badge-sub">EN 10204 3.1 & 3.2 TRACEABILITY WITH EVERY CONSIGNMENT</span>
            </div>
          </div>
          <p className="trust-banner-desc">
            In addition to statutory company registrations, every dispatch of pipes, tubes, fittings, flanges, and raw bars includes complete mill test certification, heat lot chemical analysis, mechanical impact reports, and third-party inspection (TPI) dossier endorsements.
          </p>
        </div>
      </div>
    </section>
  );
}
