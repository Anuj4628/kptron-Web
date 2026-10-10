import React from 'react';
import { NAVBAR_MATERIALS_OPTIONS } from '../../data/materialsData';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './MaterialsMegaMenu.css';

/**
 * Materials Navbar Dropdown Menu
 * Clean, dedicated materials list showing certified metallurgical alloys.
 */
export default function MaterialsMegaMenu({ isOpen, onSelect, onClose }) {
  const handleItemClick = (e, url) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(url);
    }
    if (onClose) {
      onClose();
    }
  };

  // Split materials evenly across 2 columns
  const midPoint = Math.ceil(NAVBAR_MATERIALS_OPTIONS.length / 2);
  const col1 = NAVBAR_MATERIALS_OPTIONS.slice(0, midPoint);
  const col2 = NAVBAR_MATERIALS_OPTIONS.slice(midPoint);

  return (
    <div
      className={`materials-dropdown-menu ${isOpen ? 'is-open' : ''}`}
      role="menu"
      aria-label="Materials Navigation Menu"
    >
      <div className="materials-dropdown-inner">
        {/* Materials List Columns */}
        <div className="materials-dropdown-left-panel">
          <div className="materials-dropdown-header">
            <span className="materials-dropdown-header-tag">MILL SPECIFICATIONS</span>
            <span className="materials-dropdown-header-title">Certified Material Alloys</span>
          </div>

          <div className="materials-dropdown-columns">
            {/* Column 1 */}
            <ul className="materials-dropdown-list" role="none">
              {col1.map((item) => (
                <li 
                  key={item.id} 
                  className="materials-dropdown-item" 
                  role="none"
                >
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
                <li 
                  key={item.id} 
                  className="materials-dropdown-item" 
                  role="none"
                >
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
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="materials-dropdown-footer">
        <a
          href="/materials"
          className="materials-footer-link"
          onClick={(e) => handleItemClick(e, '/materials')}
        >
          <span className="materials-footer-text">EXPLORE ALL CERTIFIED METALLURGICAL ALLOYS</span>
          <ArrowRight size={13} className="materials-footer-arrow" />
        </a>
        <span className="materials-footer-note">Complete test certificates EN 10204 3.1 &amp; 3.2 available</span>
      </div>
    </div>
  );
}
