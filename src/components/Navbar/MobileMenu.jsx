import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { navLinks, brandDetails } from '../../data/navigationData';
import { NAVBAR_MATERIALS_OPTIONS } from '../../data/materialsData';
import { certificatesList } from '../../data/certificatesData';
import { NAVBAR_PRODUCTS_OPTIONS } from '../Products/ProductMegaMenu';
import Button from '../UI/Button';
import { ChevronDown, Eye, Download } from 'lucide-react';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose, activeLink, currentPage, onNavigate, onSelectCertificate, onOpenQuoteModal }) {
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [materialsExpanded, setMaterialsExpanded] = useState(false);
  const [certificatesExpanded, setCertificatesExpanded] = useState(false);
  const menuRef = useRef(null);
  const linksContainerRef = useRef(null);
  const footerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Kill any running animations
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Set initial state
      gsap.set(el, { display: 'flex', opacity: 0, y: -20 });
      gsap.set(linksContainerRef.current?.children || [], { opacity: 0, y: 25 });
      gsap.set(footerRef.current, { opacity: 0, y: 20 });

      // Animate in
      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out'
      })
      .to(linksContainerRef.current?.children || [], {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.35,
        ease: 'power3.out'
      }, '-=0.2')
      .to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.15');

    } else {
      document.body.style.overflow = '';

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(el, { display: 'none' });
        }
      });
      timelineRef.current = tl;

      tl.to(linksContainerRef.current?.children || [], {
        opacity: 0,
        y: -15,
        stagger: 0.03,
        duration: 0.2,
        ease: 'power2.in'
      })
      .to(el, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: 'power2.in'
      }, '-=0.1');
    }

    return () => {
      document.body.style.overflow = '';
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (id === 'products') {
      setProductsExpanded(prev => !prev);
      return;
    }

    if (id === 'materials') {
      setMaterialsExpanded(prev => !prev);
      return;
    }

    if (id === 'certificate' || id === 'certificates') {
      setCertificatesExpanded(prev => !prev);
      return;
    }

    setProductsExpanded(false);
    setMaterialsExpanded(false);
    setCertificatesExpanded(false);
    onClose();
    if (onNavigate) {
      if (id === 'about') {
        onNavigate('about');
      } else if (id === 'contact') {
        onNavigate('contact');
      } else if (id === 'home') {
        onNavigate('home');
      } else {
        if (currentPage === 'about' || currentPage === 'materials' || currentPage === 'products' || currentPage === 'contact') {
          onNavigate('home', id);
        } else {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  const handleSubProductClick = (e, url) => {
    e.preventDefault();
    setProductsExpanded(false);
    onClose();
    if (onNavigate) {
      onNavigate(url);
    }
  };

  const handleSubMaterialClick = (e, slug) => {
    e.preventDefault();
    setMaterialsExpanded(false);
    onClose();
    if (onNavigate) {
      if (slug === 'all') {
        onNavigate('/materials');
      } else {
        onNavigate(`/materials/${slug}`);
      }
    }
  };

  const handleCertSelect = (e, cert) => {
    e.preventDefault();
    setCertificatesExpanded(false);
    onClose();
    if (onSelectCertificate) {
      onSelectCertificate(cert);
    }
  };

  const handleCertSectionClick = (e) => {
    e.preventDefault();
    setCertificatesExpanded(false);
    onClose();
    if (onNavigate) {
      if (currentPage !== 'home') {
        onNavigate('home', 'certificate');
      } else {
        const target = document.getElementById('certificate');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div
      ref={menuRef}
      className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="mobile-menu-inner">
        {/* Navigation items */}
        <ul ref={linksContainerRef} className="mobile-nav-list">
          {navLinks.map((link, index) => {
            const isActive = activeLink === link.id;
            const isProducts = link.id === 'products';
            const isMaterials = link.id === 'materials';
            const isCertificates = link.id === 'certificate' || link.id === 'certificates';

            let targetHref = link.href;
            if (link.id === 'about') targetHref = '/about';
            else if (link.id === 'contact') targetHref = '/contact';
            else if (link.id === 'products') targetHref = '/products';
            else if (link.id === 'materials') targetHref = '/materials';
            else if (isCertificates) targetHref = '#certificate';

            return (
              <li key={link.id} className={`mobile-nav-item ${isProducts || isMaterials || isCertificates ? 'has-subnav' : ''}`}>
                <div className="mobile-nav-row">
                  <a
                    href={targetHref}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    <span className="mobile-link-number">0{index + 1}</span>
                    <span className="mobile-link-title">{link.label}</span>
                    <span className="mobile-link-accent" />
                  </a>

                  {isProducts && (
                    <button
                      type="button"
                      className={`mobile-subnav-toggle ${productsExpanded ? 'expanded' : ''}`}
                      onClick={() => setProductsExpanded(prev => !prev)}
                      aria-label={productsExpanded ? 'Collapse Products Menu' : 'Expand Products Menu'}
                      aria-expanded={productsExpanded}
                    >
                      <ChevronDown size={18} />
                    </button>
                  )}

                  {isMaterials && (
                    <button
                      type="button"
                      className={`mobile-subnav-toggle ${materialsExpanded ? 'expanded' : ''}`}
                      onClick={() => setMaterialsExpanded(prev => !prev)}
                      aria-label={materialsExpanded ? 'Collapse Materials Menu' : 'Expand Materials Menu'}
                      aria-expanded={materialsExpanded}
                    >
                      <ChevronDown size={18} />
                    </button>
                  )}

                  {isCertificates && (
                    <button
                      type="button"
                      className={`mobile-subnav-toggle ${certificatesExpanded ? 'expanded' : ''}`}
                      onClick={() => setCertificatesExpanded(prev => !prev)}
                      aria-label={certificatesExpanded ? 'Collapse Certificates Menu' : 'Expand Certificates Menu'}
                      aria-expanded={certificatesExpanded}
                    >
                      <ChevronDown size={18} />
                    </button>
                  )}
                </div>

                {/* Expandable 6 Main Products Sub-menu */}
                {isProducts && productsExpanded && (
                  <div className="mobile-subnav-container">
                    <div className="mobile-subnav-grid">
                      {NAVBAR_PRODUCTS_OPTIONS.map((prod) => (
                        <a
                          key={prod.id}
                          href={prod.url}
                          className="mobile-subnav-item"
                          onClick={(e) => handleSubProductClick(e, prod.url)}
                        >
                          <span className="subnav-mat-name">{prod.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Materials Sub-menu */}
                {isMaterials && materialsExpanded && (
                  <div className="mobile-subnav-container">
                    <div className="mobile-subnav-grid">
                      {NAVBAR_MATERIALS_OPTIONS.map((mat) => (
                        <a
                          key={mat.id}
                          href={mat.url}
                          className="mobile-subnav-item"
                          onClick={(e) => handleSubProductClick(e, mat.url)}
                        >
                          <span className="subnav-mat-name">{mat.name}</span>
                        </a>
                      ))}
                    </div>
                    <a
                      href="/materials"
                      className="mobile-subnav-item mobile-subnav-overview"
                      onClick={(e) => handleSubMaterialClick(e, 'all')}
                    >
                      <span>Explore All Materials Overview</span>
                      <span className="mobile-subnav-badge">View All</span>
                    </a>
                  </div>
                )}

                {/* Expandable 2 Certificates Sub-menu */}
                {isCertificates && certificatesExpanded && (
                  <div className="mobile-subnav-container mobile-cert-subnav">
                    <a
                      href="#certificate"
                      className="mobile-subnav-item mobile-subnav-overview"
                      onClick={handleCertSectionClick}
                    >
                      <span>View Certificates Section on Page</span>
                      <span className="mobile-subnav-badge">2 Docs</span>
                    </a>

                    <div className="mobile-cert-cards-list">
                      {certificatesList.map((cert) => (
                        <div key={cert.id} className="mobile-cert-item-card">
                          <div
                            className="mobile-cert-main-info"
                            onClick={(e) => handleCertSelect(e, cert)}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="mobile-cert-thumb-wrap">
                              <img
                                src={cert.thumbnail}
                                alt=""
                                className="mobile-cert-thumb"
                                loading="lazy"
                              />
                            </div>
                            <div className="mobile-cert-text">
                              <div className="mobile-cert-pill-row">
                                <span className="mobile-cert-type-pill">{cert.typeBadge}</span>
                                <span className="mobile-cert-reg-code">{cert.registrationNumber}</span>
                              </div>
                              <h4 className="mobile-cert-title">{cert.title}</h4>
                              <p className="mobile-cert-authority">{cert.shortAuthority}</p>
                            </div>
                          </div>

                          <div className="mobile-cert-action-bar">
                            <button
                              type="button"
                              className="mobile-cert-btn-view"
                              onClick={(e) => handleCertSelect(e, cert)}
                            >
                              <Eye size={14} />
                              <span>View Document</span>
                            </button>
                            <a
                              href={cert.fileUrl}
                              download={cert.downloadName || cert.fileName}
                              className="mobile-cert-btn-download"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Download size={14} />
                              <span>Download PDF</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer info & CTA */}
        <div ref={footerRef} className="mobile-menu-footer">
          <Button
            id="mobile-quote-btn"
            variant="primary"
            size="md"
            icon="arrow"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              if (onOpenQuoteModal) {
                onOpenQuoteModal({ source: 'Mobile Menu' });
              } else if (onNavigate) {
                onNavigate('contact');
              }
            }}
            className="mobile-quote-btn"
          >
            {brandDetails.quoteCta.label}
          </Button>

          <div className="mobile-brand-meta">
            <span className="mobile-brand-name">{brandDetails.name}</span>
            <span className="mobile-brand-desc">{brandDetails.tagline}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
