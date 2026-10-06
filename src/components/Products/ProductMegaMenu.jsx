import React from 'react';
import './ProductMegaMenu.css';

/**
 * Exactly 6 Options for Products Navbar Hover Menu
 * Strictly matches user specification and reference screenshot:
 * 1. PIPES
 * 2. SHEETS, PLATES, COILS
 * 3. BARS
 * 4. PIPE FITTINGS
 * 5. FLANGES
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
    url: '/products/supplier/rods-and-bars'
  },
  {
    id: 'pipe-fittings',
    name: 'PIPE FITTINGS',
    url: '/products/manufacturer/butt-weld-fittings'
  },
  {
    id: 'flanges',
    name: 'FLANGES',
    url: '/products/manufacturer/flanges'
  },
  {
    id: 'fasteners',
    name: 'FASTENERS',
    url: '/products/manufacturer/fasteners'
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
