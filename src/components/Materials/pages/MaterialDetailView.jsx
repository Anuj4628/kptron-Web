import React, { useMemo, useEffect } from 'react';
import { getMaterialBySlug, getProductsByMaterial } from '../../../data/materialsData';
import CategoryMaterialListingView from '../../Products/CategoryMaterialListingView';

/**
 * Dedicated Material Product Page
 * 
 * When clicking Explore All Materials -> [Material] (e.g. Stainless Steel),
 * dynamically displays all current products featuring that material across all 6 active divisions
 * (Pipes & Tubes, Sheets & Plates, Bars & Rods, Buttweld Fittings, Flanges, Fasteners).
 * 
 * Uses ONLY the current Product -> Material data and the exact same product cards, images,
 * names, styling, and data shown inside the Product section.
 */
export default function MaterialDetailView({ materialSlug, onNavigate, onOpenQuoteModal }) {
  // Canonical material lookup
  const material = useMemo(() => {
    return getMaterialBySlug(materialSlug);
  }, [materialSlug]);

  // All genuine products belonging to this material across the 6 active catalogs
  const allMaterialProducts = useMemo(() => {
    if (!material) return [];
    return getProductsByMaterial(material.slug);
  }, [material]);

  // Set document title
  useEffect(() => {
    if (material) {
      document.title = `${material.name} Products | Certified Mill Inventory | KPTRON Piping Solutions Inc.`;
    }
  }, [material]);

  if (!material) {
    return (
      <div className="cat-materials-page">
        <section className="cat-materials-header">
          <div className="cat-materials-header-inner">
            <h1 className="cat-materials-main-heading">Material Category Not Found</h1>
            <p className="cat-materials-lead-text">
              We couldn't locate the requested material. Please explore our full alloy catalog.
            </p>
            <div style={{ marginTop: '20px' }}>
              <button
                type="button"
                className="btn-reset-search"
                onClick={() => onNavigate && onNavigate('/materials')}
              >
                Explore All Materials
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <CategoryMaterialListingView
      categorySlug="materials"
      categoryName={material.name}
      mainHeading={`${material.name} Products`}
      leadText={
        material.shortDesc ||
        `Explore our certified line of genuine ${material.name} products including pipes, tubes, sheets, plates, bars, fittings, flanges, and fasteners manufactured to international ASTM, ASME, EN, and DIN specifications.`
      }
      materials={allMaterialProducts}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
