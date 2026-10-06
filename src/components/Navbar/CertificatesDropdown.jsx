import React from 'react';
import { certificatesList } from '../../data/certificatesData';
import { ShieldCheck, Download, Eye, FileText, ChevronRight } from 'lucide-react';
import './CertificatesDropdown.css';

/**
 * CertificatesDropdown
 * Professional dropdown menu under "Certificates" in the main navigation.
 * Displays both verified certificates with clean names, metadata, and instant preview/download options.
 */
export default function CertificatesDropdown({ isOpen, onSelectCertificate, onNavigateToSection, onClose }) {
  const handleCardClick = (e, cert) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSelectCertificate) {
      onSelectCertificate(cert);
    }
    if (onClose) {
      onClose();
    }
  };

  const handleDownloadClick = (e) => {
    e.stopPropagation();
  };

  const handleSectionLinkClick = (e) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigateToSection) {
      onNavigateToSection('certificate');
    }
  };

  return (
    <div
      className={`certificates-dropdown-panel ${isOpen ? 'is-open' : ''}`}
      role="region"
      aria-label="Certificates Menu"
    >
      {/* Dropdown Header */}
      <div className="cert-drop-header">
        <div className="cert-drop-eyebrow">
          <span className="cert-drop-eyebrow-bar" />
          <span className="cert-drop-eyebrow-text">STATUTORY ACCREDITATION</span>
        </div>
        <span className="cert-drop-count">2 Verified Certificates</span>
      </div>

      {/* List of 2 Certificates */}
      <div className="cert-drop-list">
        {certificatesList.map((cert) => (
          <div
            key={cert.id}
            className="cert-drop-card"
            onClick={(e) => handleCardClick(e, cert)}
            role="button"
            tabIndex={0}
            aria-label={`Inspect ${cert.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(e, cert);
              }
            }}
          >
            {/* Visual Thumbnail / Icon preview */}
            <div className="cert-drop-thumb-wrap">
              <img
                src={cert.thumbnail}
                alt=""
                className="cert-drop-thumb"
                loading="eager"
                decoding="async"
                aria-hidden="true"
              />
              <div className="cert-drop-thumb-badge">
                <FileText size={12} />
                <span>PDF</span>
              </div>
            </div>

            {/* Content info */}
            <div className="cert-drop-content">
              <div className="cert-drop-meta-tags">
                <span className="cert-drop-type-tag">{cert.typeBadge}</span>
                <span className="cert-drop-reg-code">{cert.registrationNumber}</span>
              </div>

              <h4 className="cert-drop-title">{cert.title}</h4>
              <p className="cert-drop-authority">{cert.authority}</p>

              {/* Action Buttons */}
              <div className="cert-drop-actions">
                <button
                  type="button"
                  className="cert-drop-btn-view"
                  onClick={(e) => handleCardClick(e, cert)}
                >
                  <Eye size={13} />
                  <span>View Preview</span>
                </button>

                <a
                  href={cert.fileUrl}
                  download={cert.downloadName || cert.fileName}
                  className="cert-drop-btn-download"
                  onClick={(e) => handleDownloadClick(e, cert)}
                  title="Download original document"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            <ChevronRight size={16} className="cert-drop-arrow" />
          </div>
        ))}
      </div>

      {/* Dropdown Footer */}
      <div className="cert-drop-footer">
        <a
          href="#certificate"
          className="cert-drop-section-link"
          onClick={handleSectionLinkClick}
        >
          <ShieldCheck size={14} className="cert-drop-footer-icon" />
          <span>View Certificates Section on Page</span>
          <ChevronRight size={14} />
        </a>
      </div>
    </div>
  );
}
