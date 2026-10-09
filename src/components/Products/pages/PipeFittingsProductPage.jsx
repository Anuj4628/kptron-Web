import React, { useMemo, useEffect } from 'react';
import { 
  PIPE_FITTINGS_CATEGORIES, 
  getPipeFittingsCategoryBySlug 
} from '../../../data/pipeFittingsData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Dedicated Pipe Fittings Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Pipe Fittings" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function PipeFittingsProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Pipe Fittings" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="pipe-fittings"
        categoryName="Pipe Fittings"
        mainHeading="Materials in Pipe Fittings"
        leadText="Seamless and welded buttweld pipe fittings and high-pressure forged fittings including 45°/90° elbows, equal tees, reducers, and stub ends conforming to ASME B16.9 and B16.11."
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
    const matName = activeCategory?.materialName || activeCategory?.name || 'Buttweld & Forged';
    document.title = isManufacturedInMumbai
      ? `${matName} Pipe Fittings Manufactured in Mumbai | Redcore Steels`
      : `${matName} Pipe Fittings | ASME B16.9 & B16.11 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="pipe-fittings"
      categoryName="Pipe Fittings"
      materialSlug={materialSlug}
      materials={PIPE_FITTINGS_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
