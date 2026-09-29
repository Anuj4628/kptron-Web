import React, { useState, useEffect, useRef, useCallback } from 'react';
import { navLinks, brandDetails } from '../../data/navigationData';
import MobileMenu from './MobileMenu';
import TopExperienceBar from './TopExperienceBar';
import ProductMegaMenu from '../Products/ProductMegaMenu';
import MaterialsMegaMenu from './MaterialsMegaMenu';
import { Menu, X } from 'lucide-react';
import { preloadRoute } from '../../utils/preloadRoute';
import './Navbar.css';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [materialsMenuOpen, setMaterialsMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef(null);
  const materialsMenuTimeoutRef = useRef(null);

  const activeLink = currentPage === 'about' 
    ? 'about' 
    : (currentPage === 'contact'
        ? 'contact'
        : (currentPage === 'products' 
            ? 'products' 
            : (currentPage === 'materials' ? 'materials' : 'home')));
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnterProducts = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMaterialsMenuOpen(false);
    setMegaMenuOpen(true);
    preloadRoute('products');
  }, []);

  const handleMouseLeaveProducts = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  }, []);

  const handleMouseEnterMaterials = useCallback(() => {
    if (materialsMenuTimeoutRef.current) {
      clearTimeout(materialsMenuTimeoutRef.current);
    }
    setMegaMenuOpen(false);
    setMaterialsMenuOpen(true);
    preloadRoute('materials');
  }, []);

  const handleMouseLeaveMaterials = useCallback(() => {
    materialsMenuTimeoutRef.current = setTimeout(() => {
      setMaterialsMenuOpen(false);
    }, 180);
  }, []);

  const handleMegaMenuSelect = useCallback((url) => {
    setMegaMenuOpen(false);
    if (onNavigate) onNavigate(url);
  }, [onNavigate]);

  const handleMaterialsMenuSelect = useCallback((url) => {
    setMaterialsMenuOpen(false);
    if (onNavigate) onNavigate(url);
  }, [onNavigate]);

  const handleMegaMenuClose = useCallback(() => {
    setMegaMenuOpen(false);
  }, []);

  const handleMaterialsMenuClose = useCallback(() => {
    setMaterialsMenuOpen(false);
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMegaMenuOpen(false);
    setMaterialsMenuOpen(false);
    if (onNavigate) {
      if (link.id === 'about') {
        onNavigate('about');
      } else if (link.id === 'contact') {
        onNavigate('contact');
      } else if (link.id === 'home') {
        onNavigate('home');
      } else if (link.id === 'products') {
        onNavigate('/products');
      } else if (link.id === 'materials') {
        onNavigate('/materials');
      } else {
        // Other section links (certificate, contact)
        if (currentPage !== 'home') {
          onNavigate('home', link.id);
        } else {
          const target = document.getElementById(link.id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : 'at-top'}`}
        id="main-navbar"
      >
        {/* 1. Top Experience Bar */}
        <TopExperienceBar />

        {/* 2. Main Pure White Navbar */}
        <div className="navbar-container">

          {/* LEFT: Existing Company Logo */}
          <a
            href="/"
            className="navbar-logo-link"
            aria-label={`${brandDetails.name} Home`}
            onClick={handleLogoClick}
          >
            <div className="navbar-logo-wrap">
              <img
                src={brandDetails.logoUrl}
                srcSet={`${brandDetails.logoUrl} 1x, ${brandDetails.logoUrl2x || brandDetails.logoUrl} 2x`}
                alt={brandDetails.name}
                className="navbar-brand-logo"
                loading="eager"
                decoding="async"
              />
            </div>
          </a>

          {/* DESKTOP NAVIGATION: Horizontally to the right of logo */}
          <nav className="navbar-nav-desktop" aria-label="Main Navigation">
            <ul className="navbar-links-list">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                const isProducts = link.id === 'products';
                const isMaterials = link.id === 'materials';

                let mouseEnterHandler = undefined;
                if (isProducts) mouseEnterHandler = handleMouseEnterProducts;
                else if (isMaterials) mouseEnterHandler = handleMouseEnterMaterials;
                else if (link.id === 'about') mouseEnterHandler = () => preloadRoute('about');
                else if (link.id === 'contact') mouseEnterHandler = () => preloadRoute('contact');

                let mouseLeaveHandler = undefined;
                if (isProducts) mouseLeaveHandler = handleMouseLeaveProducts;
                else if (isMaterials) mouseLeaveHandler = handleMouseLeaveMaterials;

                let linkHref = link.href;
                if (link.id === 'about') linkHref = '/about';
                else if (link.id === 'contact') linkHref = '/contact';
                else if (isProducts) linkHref = '/products';
                else if (isMaterials) linkHref = '/materials';

                return (
                  <li
                    key={link.id}
                    className={`navbar-item ${isProducts ? 'products-item' : ''} ${isMaterials ? 'materials-item' : ''}`}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                  >
                    <a
                      href={linkHref}
                      className={`navbar-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      <span className="navbar-link-text">
                        {link.label}
                        {(isProducts || isMaterials) && (
                          <svg
                            className={`nav-dropdown-chevron ${(isProducts ? megaMenuOpen : materialsMenuOpen) ? 'rotated' : ''}`}
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        )}
                      </span>
                      <span className="navbar-link-indicator" aria-hidden="true" />
                    </a>

                    {isProducts && (
                      <ProductMegaMenu
                        isOpen={megaMenuOpen}
                        onSelect={handleMegaMenuSelect}
                        onClose={handleMegaMenuClose}
                      />
                    )}

                    {isMaterials && (
                      <MaterialsMegaMenu
                        isOpen={materialsMenuOpen}
                        onSelect={handleMaterialsMenuSelect}
                        onClose={handleMaterialsMenuClose}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right Action: Crisp Industrial B2B Quote Button */}
          <div className="navbar-actions-desktop">
            <a
              href="/contact"
              className="navbar-quote-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('contact');
                }
              }}
            >
              <span className="quote-btn-text">{brandDetails.quoteCta.label}</span>
              <svg className="quote-btn-arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`navbar-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-box">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeLink={activeLink}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  );
}
