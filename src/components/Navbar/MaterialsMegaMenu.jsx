import React from 'react';
import { NAVBAR_MATERIALS_OPTIONS } from '../../data/materialsData';
import materialsMenuBanner from '../../assets/materials-menu-banner.jpg';
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import './MaterialsMegaMenu.css';

/**
 * Materials Navbar Dropdown / Mega-Menu
 * Displays ALL and ONLY the 12 requested Material Categories:
 * 1. Stainless Steel
 * 2. Carbon Steel
 * 3. Alloy Steel
 * 4. Inconel
 * 5. Monel
 * 6. Hastelloy
 * 7. Nickel
 * 8. Copper Nickel
 * 9. Titanium
 * 10. IS Grades
 * 11. API 5L
 * 12. EN Standards
 *
 * Designed with a clean pure white background, crisp industrial typography,
 * subtle shadow, brand orange (#FF5B26) hover accents, and a representative
 * industrial metal showcase image on the right.
 */
function MaterialsMegaMenu({ isOpen, onSelect, onClose }) {
  const handleItemClick = (e, url) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(url);
    }
    if (onClose) {
      onClose();
    }
  };

  // Split the 12 materials evenly: Column 1 (6 items) & Column 2 (6 items)
  const col1 = NAVBAR_MATERIALS_OPTIONS.slice(0, 6);
  const col2 = NAVBAR_MATERIALS_OPTIONS.slice(6, 12);

  return (
    <div
      className={`materials-dropdown-menu ${isOpen ? 'is-open' : ''}`}
      role="menu"
      aria-label="Materials Navigation Menu"
    >
      <div className="materials-dropdown-inner">
        {/* LEFT & CENTER: 2 Columns of 6 Material items */}
        <div className="materials-dropdown-left-panel">
          <div className="materials-dropdown-header">
            <span className="materials-dropdown-header-tag">MILL SPECIFICATIONS</span>
            <span className="materials-dropdown-header-title">Certified Material Grades</span>
          </div>

          <div className="materials-dropdown-columns">
            {/* Column 1 */}
            <ul className="materials-dropdown-list" role="none">
              {col1.map((item) => (
                <li key={item.id} className="materials-dropdown-item" role="none">
                  <a
                    href={item.url}
                    className="materials-dropdown-link"
                    role="menuitem"
                    onClick={(e) => handleItemClick(e, item.url)}
                  >
                    <span className="materials-link-dot" aria-hidden="true" />
                    <span className="materials-dropdown-text">{item.name}</span>
                    <ChevronRight className="materials-link-arrow" size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Subtle Vertical Divider */}
            <div className="materials-dropdown-col-divider" aria-hidden="true" />

            {/* Column 2 */}
            <ul className="materials-dropdown-list" role="none">
              {col2.map((item) => (
                <li key={item.id} className="materials-dropdown-item" role="none">
                  <a
                    href={item.url}
                    className="materials-dropdown-link"
                    role="menuitem"
                    onClick={(e) => handleItemClick(e, item.url)}
                  >
                    <span className="materials-link-dot" aria-hidden="true" />
                    <span className="materials-dropdown-text">{item.name}</span>
                    <ChevronRight className="materials-link-arrow" size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: Representative Industrial Metal / Material Image Showcase */}
        <div className="materials-dropdown-right-panel">
          <a
            href="/materials"
            className="materials-media-card"
            onClick={(e) => handleItemClick(e, '/materials')}
            aria-label="Explore all KPTRON industrial metals and certified materials"
          >
            <div className="materials-media-img-wrap">
              <img
                src={materialsMenuBanner}
                alt="Industrial Grade Metals, Stainless Steel & Precision Alloy Billets"
                className="materials-media-banner-img"
                loading="eager"
              />
              <div className="materials-media-img-gradient" />
              <div className="materials-media-badge">
                <ShieldCheck size={12} className="materials-badge-icon" />
                <span>IBR &amp; NACE CERTIFIED</span>
              </div>
            </div>

            <div className="materials-media-content">
              <span className="materials-media-kicker">KPTRON METALLURGY</span>
              <h4 className="materials-media-heading">High-Performance Alloys &amp; Steels</h4>
              <p className="materials-media-caption">
                High-temperature, anti-corrosive, and high-pressure materials engineered for critical industrial applications.
              </p>
              <div className="materials-media-link-label">
                <span>View All 12 Materials</span>
                <ArrowRight size={13} className="materials-media-link-icon" />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="materials-dropdown-footer">
        <a
          href="/materials"
          className="materials-footer-link"
          onClick={(e) => handleItemClick(e, '/materials')}
        >
          <span className="materials-footer-text">EXPLORE ALL 12 MATERIAL CATEGORIES</span>
          <ArrowRight size={13} className="materials-footer-arrow" />
        </a>
        <span className="materials-footer-note">Complete test certificates EN 10204 3.1 &amp; 3.2 available</span>
      </div>
    </div>
  );
}

export default React.memo(MaterialsMegaMenu);
