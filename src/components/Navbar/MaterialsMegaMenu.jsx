import React, { useState, useMemo } from 'react';
import { 
  NAVBAR_MATERIALS_OPTIONS, 
  getMaterialBySlug, 
  getProductsByMaterial 
} from '../../data/materialsData';
import materialsMenuBanner from '../../assets/materials-menu-banner.jpg';
import { ChevronRight, ArrowRight, ShieldCheck, Layers, Package } from 'lucide-react';
import './MaterialsMegaMenu.css';

/**
 * Materials Navbar Dropdown / Mega-Menu
 * 
 * Interactive Material Navigation:
 * - Left Panel: Lists certified industrial metals (Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Aluminium, Titanium, etc.)
 * - Hover Interaction: Hovering over any material dynamically displays the exact products made from that metal
 *   (e.g., Selecting Aluminium displays Aluminium Pipes & Tubes; Selecting Stainless Steel displays Flanges, Pipes, Sheets, Bars, Fittings, Fasteners).
 * - Direct Navigation:
 *   - Clicking a product pill opens that category's material detail page (/products/:category/:material)
 *   - Clicking the material link or "View All" opens the full material catalog (/materials/:material)
 */
export default function MaterialsMegaMenu({ isOpen, onSelect, onClose }) {
  const [hoveredSlug, setHoveredSlug] = useState('stainless-steel');

  const handleItemClick = (e, url) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(url);
    }
    if (onClose) {
      onClose();
    }
  };

  // Active Material & Available Products in Catalog
  const activeMaterial = useMemo(() => {
    return getMaterialBySlug(hoveredSlug) || getMaterialBySlug('stainless-steel');
  }, [hoveredSlug]);

  const activeProducts = useMemo(() => {
    if (!activeMaterial) return [];
    return getProductsByMaterial(activeMaterial.slug);
  }, [activeMaterial]);

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
        {/* LEFT & CENTER: 2 Columns of Material items */}
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
                  className={`materials-dropdown-item ${activeMaterial?.slug === item.slug ? 'is-active-item' : ''}`} 
                  role="none"
                  onMouseEnter={() => setHoveredSlug(item.slug)}
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
                  className={`materials-dropdown-item ${activeMaterial?.slug === item.slug ? 'is-active-item' : ''}`} 
                  role="none"
                  onMouseEnter={() => setHoveredSlug(item.slug)}
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

        {/* RIGHT SIDE: Dynamic Material Products Showcase */}
        <div className="materials-dropdown-right-panel">
          {activeMaterial && (
            <div className="materials-dynamic-showcase">
              {/* Media Card */}
              <div className="materials-media-card">
                <div className="materials-media-img-wrap">
                  <img
                    src={activeMaterial.image || activeMaterial.heroImage || materialsMenuBanner}
                    alt={`${activeMaterial.name} industrial metals`}
                    className="materials-media-banner-img"
                    loading="eager"
                  />
                  <div className="materials-media-img-gradient" />
                  <div className="materials-media-badge">
                    <ShieldCheck size={12} className="materials-badge-icon" />
                    <span>{activeMaterial.badge || 'MILL CERTIFIED'}</span>
                  </div>
                </div>

                <div className="materials-media-content">
                  <div className="materials-media-header-line">
                    <span className="materials-media-kicker">AVAILABLE IN {activeMaterial.name.toUpperCase()}</span>
                    <h4 className="materials-media-heading">{activeMaterial.name} Products</h4>
                  </div>
                  
                  <p className="materials-media-caption">
                    {activeMaterial.shortDesc}
                  </p>

                  {/* Available Products Made From This Material */}
                  <div className="materials-available-products-box">
                    <span className="available-products-heading">
                      <Layers size={12} />
                      AVAILABLE DIVISIONS ({activeProducts.length})
                    </span>
                    
                    {activeProducts.length > 0 ? (
                      <div className="available-products-list">
                        {activeProducts.map((p) => {
                          const targetUrl = `/products/${p.productTypeSlug}/${activeMaterial.slug}`;
                          return (
                            <a
                              key={p.id}
                              href={targetUrl}
                              className="available-product-link"
                              onClick={(e) => handleItemClick(e, targetUrl)}
                              title={`View ${activeMaterial.name} in ${p.productType}`}
                            >
                              <span className="prod-type-label">{p.productType}</span>
                              <span className="prod-name-label">{p.name || p.title}</span>
                              <ChevronRight size={12} className="prod-arrow" />
                            </a>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="no-products-hint">Custom forging &amp; milling available on request.</p>
                    )}
                  </div>

                  <div className="materials-showcase-actions">
                    <a
                      href={`/materials/${activeMaterial.slug}`}
                      className="materials-view-all-btn"
                      onClick={(e) => handleItemClick(e, `/materials/${activeMaterial.slug}`)}
                    >
                      <span>Explore All {activeMaterial.name} Products</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
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
