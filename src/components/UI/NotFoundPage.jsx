import React, { useEffect } from 'react';
import { Home, ArrowLeft, Layers, AlertCircle } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage({ onNavigate }) {
  useEffect(() => {
    document.title = 'Page Not Found | KPTRON Piping Solutions';
  }, []);

  return (
    <div className="not-found-page-wrapper">
      <div className="not-found-card">
        <div className="not-found-badge-tag">
          <AlertCircle size={14} />
          <span>404 Error • Specification Not Found</span>
        </div>

        <h1 className="not-found-heading">
          Product Specification or Page Not Located
        </h1>

        <p className="not-found-desc">
          The requested technical specification or page URL does not match any current product line, standard, or material in our catalog. Please verify the URL or explore our core piping solutions below.
        </p>

        <div className="not-found-actions">
          <button
            type="button"
            className="btn-primary-home"
            onClick={() => onNavigate && onNavigate('/')}
          >
            <Home size={16} />
            <span>Return to Home Page</span>
          </button>

          <button
            type="button"
            className="btn-secondary-catalog"
            onClick={() => onNavigate && onNavigate('/products')}
          >
            <Layers size={16} />
            <span>Browse Products Catalog</span>
          </button>
        </div>

        <div className="not-found-quick-links">
          <div className="quick-links-title">Quick Access by Category</div>
          <div className="quick-links-grid">
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/pipes')}
            >
              Pipes &amp; Tubes
            </button>
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/bars')}
            >
              Bars &amp; Rods
            </button>
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/flanges')}
            >
              Flanges
            </button>
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/fasteners')}
            >
              Fasteners
            </button>
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/buttweld-fittings')}
            >
              Buttweld Fittings
            </button>
            <button
              type="button"
              className="quick-cat-btn"
              onClick={() => onNavigate && onNavigate('/products/sheets-plates-coils')}
            >
              Sheets &amp; Plates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
