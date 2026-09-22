import React from 'react';
import { brandDetails } from '../../data/navigationData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  ChevronRight, 
  Clock, 
  Globe2, 
  CheckCircle2, 
  FileCheck2 
} from 'lucide-react';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const { contact } = brandDetails;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, page, sectionId = null) => {
    if (onNavigate) {
      e.preventDefault();
      if (typeof page === 'string' && page.startsWith('/')) {
        onNavigate(page);
      } else {
        onNavigate(page, sectionId);
      }
    }
  };

  return (
    <footer id="contact" className="site-footer" aria-label="KPTRON Piping Solutions Corporate Footer">
      {/* Top Technical Blueprint Hairline */}
      <div className="footer-top-accent-line" aria-hidden="true">
        <span className="accent-line-glow" />
      </div>

      <div className="footer-container">
        
        {/* ===================================================
            1. TOP CTA & INDUSTRIAL STATEMENT BANNER
            =================================================== */}
        <section className="footer-cta-marquee" aria-label="Engineering Request Callout">
          <div className="footer-cta-inner">
            <div className="footer-cta-text-group">
              <div className="footer-spec-tag">
                <span className="spec-indicator-dot" />
                <span className="spec-tag-text">GLOBAL INDUSTRIAL SUPPLY ARCHITECTURE</span>
                <span className="spec-sep">//</span>
                <span className="spec-code">EST. MUMBAI, INDIA</span>
              </div>
              <h2 className="footer-cta-headline">
                ENGINEERED STEEL.<br className="cta-break" />
                <span className="cta-headline-accent">GLOBAL DELIVERY.</span>
              </h2>
              <p className="footer-cta-subtext">
                Supplying certified stainless, alloy, and carbon steel piping systems, butt-weld fittings, and precision flanges for critical process, marine, and energy infrastructure worldwide.
              </p>
            </div>

            <div className="footer-cta-actions">
              <a
                href="/contact"
                className="footer-btn-primary"
                onClick={(e) => handleLinkClick(e, 'contact')}
                aria-label="Request an Engineering Quote"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight size={18} className="btn-icon-corner" />
              </a>

              <a
                href={`tel:${contact.phone1Raw}`}
                className="footer-btn-secondary"
                aria-label={`Call Direct RFQ Desk at ${contact.phone1}`}
              >
                <Phone size={15} className="btn-icon-left" />
                <span>DIRECT RFQ DESK</span>
              </a>

              <div className="footer-cta-meta">
                <div className="cta-status-badge">
                  <span className="status-ping" />
                  <span className="status-text">24/7 Priority Commercial Enquiries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            2. TECHNICAL TELEMETRY & SPECIFICATION BAR
            =================================================== */}
        <div className="footer-telemetry-bar" aria-hidden="true">
          <div className="telemetry-item">
            <span className="telemetry-label">HUB:</span>
            <span className="telemetry-val">MUMBAI WORKS [LAT 18.9553° N, LON 72.8223° E]</span>
          </div>
          <div className="telemetry-divider">+</div>
          <div className="telemetry-item">
            <span className="telemetry-label">CERT:</span>
            <span className="telemetry-val">ISO 9001:2015 & IBR FORM III-C APPROVED</span>
          </div>
          <div className="telemetry-divider">+</div>
          <div className="telemetry-item">
            <span className="telemetry-label">STANDARDS:</span>
            <span className="telemetry-val">ASME / ASTM / DIN / EN / BS / IBR</span>
          </div>
          <div className="telemetry-divider">+</div>
          <div className="telemetry-item">
            <span className="telemetry-label">INSPECTION:</span>
            <span className="telemetry-val">100% PMI & EN 10204 3.1 / 3.2 MTC</span>
          </div>
        </div>

        {/* ===================================================
            3. MAIN INDUSTRIAL INFORMATION CONSOLE
            =================================================== */}
        <div className="footer-main-console">
          
          {/* Brand & Corporate Trust Section */}
          <div className="footer-brand-section">
            <a
              href="#home"
              className="footer-logo-card"
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="KPTRON Piping Solutions Home"
            >
              <img
                src={brandDetails.logoUrl}
                alt={brandDetails.name}
                className="footer-logo-img"
              />
            </a>

            <p className="footer-brand-summary">
              Premier stockist, manufacturer, and global exporter of high-grade stainless steel, carbon steel, and specialty alloy piping solutions engineered for high-pressure, cryogenic, and corrosive process systems.
            </p>

            {/* Industrial Certifications Badges */}
            <div className="footer-cert-badges-grid">
              <div className="footer-cert-card">
                <div className="cert-card-icon-box">
                  <ShieldCheck size={20} className="cert-card-icon" />
                </div>
                <div className="cert-card-content">
                  <span className="cert-card-heading">ISO 9001:2015</span>
                  <span className="cert-card-sub">Certified Quality Management</span>
                </div>
              </div>

              <div className="footer-cert-card">
                <div className="cert-card-icon-box">
                  <Award size={20} className="cert-card-icon" />
                </div>
                <div className="cert-card-content">
                  <span className="cert-card-heading">IBR APPROVED</span>
                  <span className="cert-card-sub">Indian Boiler Regulations Verified</span>
                </div>
              </div>
            </div>

            {/* Export Footprint Tag */}
            <div className="footer-export-strip">
              <Globe2 size={15} className="export-strip-icon" />
              <span className="export-strip-text">
                Exporting to <strong>50+ Nations</strong> across GCC, Europe, Southeast Asia & Americas
              </span>
            </div>
          </div>

          {/* Navigation & Products Columns */}
          <div className="footer-nav-section">
            
            {/* Column 1: Quick Links */}
            <div className="footer-nav-col">
              <div className="nav-col-header">
                <span className="nav-col-num">01</span>
                <span className="nav-col-slash">//</span>
                <h3 className="nav-col-title">Quick Links</h3>
              </div>
              <ul className="footer-nav-list">
                <li>
                  <a href="/" className="footer-nav-item" onClick={(e) => handleLinkClick(e, 'home')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-nav-item" onClick={(e) => handleLinkClick(e, 'about')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Products Catalog</span>
                  </a>
                </li>
                <li>
                  <a href="/materials" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/materials')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Materials & Grades</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="footer-nav-item">
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Industries Served</span>
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="footer-nav-item">
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Certifications</span>
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="footer-nav-item">
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Client Network</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Mill & Piping Products */}
            <div className="footer-nav-col">
              <div className="nav-col-header">
                <span className="nav-col-num">02</span>
                <span className="nav-col-slash">//</span>
                <h3 className="nav-col-title">Core Products</h3>
              </div>
              <ul className="footer-nav-list">
                <li>
                  <a href="/products" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>All Products Overview</span>
                  </a>
                </li>
                <li>
                  <a href="/products/supplier/pipes-tubes" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products/supplier/pipes-tubes')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Pipes & Tubes (Seamless / Welded)</span>
                  </a>
                </li>
                <li>
                  <a href="/products/manufacturer/butt-weld-fittings" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products/manufacturer/butt-weld-fittings')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Butt Weld Pipe Fittings</span>
                  </a>
                </li>
                <li>
                  <a href="/products/manufacturer/flanges" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products/manufacturer/flanges')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Forged & Industrial Flanges</span>
                  </a>
                </li>
                <li>
                  <a href="/products/supplier/rods-and-bars" className="footer-nav-item" onClick={(e) => handleLinkClick(e, '/products/supplier/rods-and-bars')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Round Rods & Hex Bars</span>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-nav-item" onClick={(e) => handleLinkClick(e, 'contact')}>
                    <ChevronRight size={14} className="nav-chevron" />
                    <span>Custom Mill Fabrication</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Console / Operational Desk */}
          <div className="footer-contact-section">
            <div className="contact-console-box">
              <div className="contact-console-header">
                <div className="console-indicator">
                  <span className="console-dot" />
                  <span className="console-tag">03 // DIRECT COMMS</span>
                </div>
                <h3 className="console-title">Commercial Desk</h3>
              </div>

              <div className="console-items-stack">
                
                {/* Phones */}
                <div className="console-entry">
                  <div className="entry-icon-box">
                    <Phone size={16} className="entry-icon" />
                  </div>
                  <div className="entry-details">
                    <span className="entry-label">PHONE & WHATSAPP</span>
                    <div className="entry-values-group">
                      <a href={`tel:${contact.phone1Raw}`} className="entry-link entry-primary-link">
                        {contact.phone1}
                      </a>
                      <span className="entry-sub-sep">|</span>
                      <a href={`tel:${contact.phone2Raw}`} className="entry-link">
                        {contact.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="console-entry">
                  <div className="entry-icon-box">
                    <Mail size={16} className="entry-icon" />
                  </div>
                  <div className="entry-details">
                    <span className="entry-label">SALES & COMMERCIAL RFQ</span>
                    <div className="entry-emails-group">
                      <a href={`mailto:${contact.email}`} className="entry-link entry-primary-link">
                        {contact.email}
                      </a>
                      {contact.salesEmail && (
                        <a href={`mailto:${contact.salesEmail}`} className="entry-link entry-secondary-link">
                          {contact.salesEmail}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Office & Works Address */}
                <div className="console-entry">
                  <div className="entry-icon-box">
                    <MapPin size={16} className="entry-icon" />
                  </div>
                  <div className="entry-details">
                    <span className="entry-label">OFFICE & WORKS LOCATION</span>
                    <address className="entry-address">
                      Shop No. 2, Basement Sonarika Bldg.,<br />
                      25-C, Chandawadi, Nanubhai Desai Rd,<br />
                      C. P. Tank, Mumbai - 400 004, Maharashtra, India
                    </address>
                  </div>
                </div>

                {/* Fast Action Inside Console */}
                <div className="console-quick-action">
                  <a
                    href="/contact"
                    className="console-action-btn"
                    onClick={(e) => handleLinkClick(e, 'contact')}
                  >
                    <span>SCHEDULE MATERIAL CONSULTATION</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ===================================================
            4. REFINED BOTTOM BAR & LEGAL DOCK
            =================================================== */}
        <div className="footer-bottom-dock">
          
          <div className="bottom-dock-legal-block">
            <p className="bottom-copyright">
              &copy; {new Date().getFullYear()} <strong>KPTRON Piping Solutions Inc.</strong> All rights reserved.
            </p>
            <div className="bottom-cert-tag">
              <FileCheck2 size={13} className="bottom-tag-icon" />
              <span>AN ISO 9001:2015 & IBR REGISTERED ENTERPRISE</span>
            </div>
          </div>

          <div className="bottom-dock-links">
            <a href="#home" className="bottom-link">Privacy Policy</a>
            <span className="bottom-dot" aria-hidden="true">•</span>
            <a href="#home" className="bottom-link">Terms & Conditions</a>
            <span className="bottom-dot" aria-hidden="true">•</span>
            <a href="#home" className="bottom-link">Quality Policy & MTC</a>
          </div>

          <div className="bottom-dock-action">
            <button
              type="button"
              className="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span className="back-top-code">TOP // 0,0</span>
              <ArrowUp size={15} className="back-top-arrow" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
