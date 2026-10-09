import React, { useMemo, useEffect } from 'react';
import { 
  PIPE_CATEGORIES, 
  getPipeCategoryBySlug 
} from '../../../data/pipesData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Clean, Dedicated Pipes & Tubes Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Pipes & Tubes" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function PipesProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Pipes & Tubes" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="pipes"
        categoryName="Pipes & Tubes"
        mainHeading="Materials in Pipes & Tubes"
        leadText="Extensive mill inventory and precision manufactured industrial pipes conforming strictly to ASTM, ASME, DIN, EN, and API 5L specifications. Supplied in seamless, ERW, and EFW configurations with 100% PMI verification and complete EN 10204 3.1 & 3.2 certification."
        materials={PIPE_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  // Active Category Data for the selected material
  const activeCategory = useMemo(() => {
    return getPipeCategoryBySlug(materialSlug) || PIPE_CATEGORIES[0];
  }, [materialSlug]);

  useEffect(() => {
    const matName = activeCategory?.materialName || activeCategory?.name || 'Seamless & Welded';
    document.title = isManufacturedInMumbai
      ? `${matName} Pipes & Tubes Manufactured in Mumbai | Redcore Steels`
      : `${matName} Pipes & Tubes | ASTM / ASME Line Pipes | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="pipes"
      categoryName="Pipes & Tubes"
      materialSlug={materialSlug}
      materials={PIPE_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
