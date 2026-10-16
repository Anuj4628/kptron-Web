import React from 'react';
import './ProductMegaMenu.css';

/**
 * Exactly 6 Options for Products Navbar Menu:
 * 1. PIPES
 * 2. SHEETS, PLATES, COILS
 * 3. BARS
 * 4. BUTTWELD FITTINGS
 * 5. FLANGES
 * 6. FASTENERS
 * 
 * Direct click-based navigation without unwanted hover subflyouts or overlays.
 */
export const NAVBAR_PRODUCTS_OPTIONS = [
  {
    id: 'pipes',
    name: 'PIPES',
    url: '/products/pipes-manufactured-in-mumbai'
  },
  {
    id: 'sheets-plates-coils',
    name: 'SHEETS, PLATES, COILS',
    url: '/products/sheets-and-plates-manufactured-in-mumbai'
  },
  {
    id: 'bars',
    name: 'BARS',
    url: '/products/bars-manufactured-in-mumbai'
  },
  {
    id: 'buttweld-fittings',
    name: 'BUTTWELD FITTINGS / PIPE FITTINGS',
    url: '/products/buttweld-fittings-manufactured-in-mumbai'
  },
  {
    id: 'flanges',
    name: 'FLANGES',
    url: '/products/flanges-manufactured-in-mumbai'
  },
  {
    id: 'fasteners',
    name: 'FASTENERS',
    url: '/products/fasteners-manufactured-in-mumbai'
  }
];

function ProductMegaMenu({ isOpen, onSelect, onClose }) {
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
        {NAVBAR_PRODUCTS_OPTIONS.map((item) => (
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
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ProductMegaMenu);
