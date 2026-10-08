import React, { useState } from 'react';
import { FLANGE_MATERIALS } from '../../data/flangeTypesData';
import { ChevronRight } from 'lucide-react';
import './ProductMegaMenu.css';

/**
 * Exactly 6 Options for Products Navbar Hover Menu
 * Strictly matches user specification and reference screenshot:
 * 1. PIPES
 * 2. SHEETS, PLATES, COILS
 * 3. BARS
 * 4. PIPE FITTINGS
 * 5. FLANGES (with authentic Material flyout: Stainless Steel, Carbon Steel, Alloy Steel, etc.)
 * 6. FASTENERS
 */
export const NAVBAR_PRODUCTS_OPTIONS = [
  {
    id: 'pipes',
    name: 'PIPES',
    url: '/products/pipes'
  },
  {
    id: 'sheets-plates-coils',
    name: 'SHEETS, PLATES, COILS',
    url: '/products/sheets-plates-coils'
  },
  {
    id: 'bars',
    name: 'BARS',
    url: '/products/bars'
  },
  {
    id: 'pipe-fittings',
    name: 'PIPE FITTINGS',
    url: '/products/pipe-fittings'
  },
  {
    id: 'flanges',
    name: 'FLANGES',
    url: '/products/flanges',
    hasFlyout: true
  },
  {
    id: 'fasteners',
    name: 'FASTENERS',
    url: '/products/fasteners'
  }
];

function ProductMegaMenu({ isOpen, onSelect, onClose }) {
  const [activeFlyout, setActiveFlyout] = useState(false);

  const handleItemClick = (e, url) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(url);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`product-dropdown-menu ${isOpen ? 'is-open' : ''}`}
      role="menu"
      aria-label="Products Navigation Menu"
    >
      <ul className="product-dropdown-list">
        {NAVBAR_PRODUCTS_OPTIONS.map((item) => {
          if (item.hasFlyout) {
            return (
              <li 
                key={item.id} 
                className="product-dropdown-item has-subflyout"
                role="none"
                onMouseEnter={() => setActiveFlyout(true)}
                onMouseLeave={() => setActiveFlyout(false)}
              >
                <a
                  href={item.url}
                  className="product-dropdown-link with-flyout-trigger"
                  role="menuitem"
                  onClick={(e) => handleItemClick(e, item.url)}
                >
                  <span className="product-dropdown-text">{item.name}</span>
                  <ChevronRight size={14} className="subflyout-arrow" aria-hidden="true" />
                </a>

                {/* Material Flyout for Products -> Flanges */}
                <div 
                  className={`product-subflyout-menu ${activeFlyout ? 'flyout-active' : ''}`} 
                  role="menu" 
                  aria-label="Flanges Materials Hierarchy"
                >
                  <div className="subflyout-header">
                    <span className="subflyout-title">FLANGES BY MATERIAL</span>
                  </div>
                  <ul className="subflyout-list">
                    {FLANGE_MATERIALS.map((mat) => (
                      <li key={mat.id} className="subflyout-item">
                        <a
                          href={`/products/flanges/${mat.slug}`}
                          className="subflyout-link"
                          onClick={(e) => handleItemClick(e, `/products/flanges/${mat.slug}`)}
                        >
                          <span className="subflyout-bullet" aria-hidden="true">•</span>
                          <span className="subflyout-text">{mat.name} Flanges</span>
                        </a>
                      </li>
                    ))}
                    <li className="subflyout-item subflyout-view-all">
                      <a
                        href="/products/flanges"
                        className="subflyout-link view-all-link"
                        onClick={(e) => handleItemClick(e, '/products/flanges')}
                      >
                        <span>All Flanges &amp; Types Catalog &rarr;</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            );
          }

          return (
            <li key={item.id} className="product-dropdown-item" role="none">
              <a
                href={item.url}
                className="product-dropdown-link"
                role="menuitem"
                onClick={(e) => handleItemClick(e, item.url)}
              >
                <span className="product-dropdown-text">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(ProductMegaMenu);
