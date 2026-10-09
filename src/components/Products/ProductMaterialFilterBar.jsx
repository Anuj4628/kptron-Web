import React from 'react';
import { Layers } from 'lucide-react';
import './ProductMaterialFilterBar.css';

/**
 * Reusable Product Material Filter Bar
 * Displays an industrial tab/pill bar allowing instantaneous material filtering
 * across all product categories (Fasteners, Pipes, Sheets & Plates, Bars, Pipe Fittings).
 */
export default function ProductMaterialFilterBar({
  materials = [],
  selectedMaterial = 'all',
  onSelectMaterial,
  categoryName = 'Products'
}) {
  if (!materials || materials.length === 0) return null;

  return (
    <div className="product-mat-filter-wrapper" role="navigation" aria-label={`Filter ${categoryName} by material`}>
      <div className="product-mat-filter-inner">
        <div className="product-mat-filter-label">
          <Layers size={14} className="mat-filter-icon" />
          <span>MATERIAL FILTER:</span>
        </div>
        <div className="product-mat-pills-scroll" role="tablist">
          {materials.map((mat) => {
            const isActive = selectedMaterial === mat.slug || (selectedMaterial === null && mat.slug === 'all');
            return (
              <button
                key={mat.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`mat-pill-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectMaterial && onSelectMaterial(mat.slug)}
              >
                <span className="mat-pill-dot" aria-hidden="true">▪</span>
                <span className="mat-pill-name">{mat.name}</span>
                {typeof mat.count === 'number' && mat.count > 0 && (
                  <span className="mat-pill-count">{mat.count}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
