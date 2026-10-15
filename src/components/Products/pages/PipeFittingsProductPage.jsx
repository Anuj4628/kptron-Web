import React, { useMemo, useEffect } from 'react';
import { 
  PIPE_FITTINGS_CATEGORIES, 
  getPipeFittingsCategoryBySlug 
} from '../../../data/pipeFittingsData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Dedicated Buttweld Fittings Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Buttweld Fittings" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function PipeFittingsProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Buttweld Fittings" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="buttweld-fittings"
        categoryName="Buttweld Fittings"
        mainHeading="Materials in Buttweld Fittings"
        leadText="Seamless and welded buttweld fittings including 45°/90° elbows, equal tees, concentric & eccentric reducers, caps, and stub ends conforming to ASME B16.9 and MSS SP-43."
        materials={PIPE_FITTINGS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  // Active Category Data for the selected material
  const activeCategory = useMemo(() => {
    return getPipeFittingsCategoryBySlug(materialSlug) || PIPE_FITTINGS_CATEGORIES[0];
  }, [materialSlug]);

  useEffect(() => {
    const matName = activeCategory?.materialName || activeCategory?.name || 'Buttweld';
    document.title = isManufacturedInMumbai
      ? `${matName} Buttweld Fittings Manufactured in Mumbai | Redcore Steels`
      : `${matName} Buttweld Fittings | ASME B16.9 & MSS SP-43 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="buttweld-fittings"
      categoryName="Buttweld Fittings"
      materialSlug={materialSlug}
      materials={PIPE_FITTINGS_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
