import React, { useEffect, useCallback } from 'react';
import { X, Download, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import './CertificateViewerModal.css';

/**
 * CertificateViewerModal
 * High-fidelity, clean document inspection viewer for KPTRON's official certificates.
 * Allows interactive PDF document viewing, opening in a separate tab, and downloading original file.
 */
export default function CertificateViewerModal({ certificate, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!certificate) return;

    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, handleKeyDown]);

  if (!certificate) return null;

  return (
    <div
      className="cert-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="cert-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <header className="cert-modal-header">
          <div className="cert-modal-header-meta">
            <div className="cert-modal-badges">
              <span className="cert-modal-type-badge">
                <ShieldCheck size={14} className="cert-badge-icon" />
                {certificate.typeBadge}
              </span>
              <span className="cert-modal-status-badge">
                <CheckCircle2 size={13} className="cert-badge-icon text-success" />
                {certificate.statusBadge}
              </span>
            </div>

            <h2 id="cert-modal-title" className="cert-modal-title">
              {certificate.title}
            </h2>

            <div className="cert-modal-reg-line">
              <span className="cert-reg-tag">{certificate.regLabel}:</span>
              <span className="cert-reg-code">{certificate.registrationNumber}</span>
              <span className="cert-meta-divider">//</span>
              <span className="cert-meta-authority">{certificate.shortAuthority}</span>
            </div>
          </div>

          <div className="cert-modal-header-actions">
            {/* Open / View in New Window */}
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn-action cert-btn-open"
              title="Open full PDF document in browser tab"
              aria-label="Open full PDF document in browser tab"
            >
              <ExternalLink size={16} />
              <span className="btn-label-text">Open / Full View</span>
            </a>

            {/* Download Original PDF */}
            <a
              href={certificate.fileUrl}
              download={certificate.downloadName || certificate.fileName}
              className="cert-btn-action cert-btn-download"
              title="Download original certificate document"
              aria-label="Download original certificate document"
            >
              <Download size={16} />
              <span className="btn-label-text">Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              className="cert-modal-close-btn"
              onClick={onClose}
              aria-label="Close certificate preview"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Certificate Inspection Body */}
        <div className="cert-modal-body">
          {/* Main Document Viewer Frame */}
          <div className="cert-doc-frame-wrapper">
            <object
              data={`${certificate.fileUrl}#toolbar=1&navpanes=0&view=FitH`}
              type="application/pdf"
              className="cert-pdf-object"
              title={`${certificate.title} Document View`}
            >
              {/* Fallback for devices/browsers that don't support embedded PDF */}
              <div className="cert-pdf-fallback">
                <div className="fallback-card">
                  <img
                    src={certificate.thumbnail}
                    alt={`${certificate.title} preview`}
                    className="fallback-preview-img"
                  />
                  <div className="fallback-details">
                    <FileText size={28} className="fallback-icon" />
                    <h3 className="fallback-title">{certificate.title}</h3>
                    <p className="fallback-note">
                      Your browser does not support inline PDF embedding, but you can inspect or download the original file directly:
                    </p>
                    <div className="fallback-actions">
                      <a
                        href={certificate.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn-action cert-btn-open"
                      >
                        <ExternalLink size={16} />
                        <span>Open Document</span>
                      </a>
                      <a
                        href={certificate.fileUrl}
                        download={certificate.downloadName}
                        className="cert-btn-action cert-btn-download"
                      >
                        <Download size={16} />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </object>
          </div>

          {/* Quick Details Sidebar / Drawer */}
          <aside className="cert-doc-sidebar" aria-label="Certificate details">
            <div className="sidebar-section-title">
              <span>DOCUMENT SPECIFICATIONS</span>
            </div>

            <div className="cert-sidebar-details">
              {certificate.highlights.map((item, idx) => (
                <div key={idx} className="cert-spec-item">
                  <span className="cert-spec-label">{item.label}</span>
                  <span className="cert-spec-value">{item.value}</span>
                </div>
              ))}

              <div className="cert-spec-item">
                <span className="cert-spec-label">Document Pages</span>
                <span className="cert-spec-value">{certificate.pages} Page{certificate.pages > 1 ? 's' : ''}</span>
              </div>

              <div className="cert-spec-item">
                <span className="cert-spec-label">File Name</span>
                <span className="cert-spec-value cert-code-sm">{certificate.fileName}</span>
              </div>
            </div>

            <div className="cert-sidebar-actions-mobile">
              <a
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn-mobile-open"
              >
                <ExternalLink size={16} />
                <span>Open in Full Screen</span>
              </a>
              <a
                href={certificate.fileUrl}
                download={certificate.downloadName}
                className="cert-btn-mobile-download"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>

            <div className="cert-verification-notice">
              <ShieldCheck size={16} className="notice-icon" />
              <span>Official Government of India statutory document on file at KPTRON Piping Solutions Inc.</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
