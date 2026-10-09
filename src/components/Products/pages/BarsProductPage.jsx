import React, { useMemo, useEffect } from 'react';
import { 
  BARS_CATEGORIES, 
  getBarsCategoryBySlug 
} from '../../../data/barsData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Dedicated Bars & Rods Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Bars & Rods" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function BarsProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Bars & Rods" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="bars"
        categoryName="Bars & Rods"
        mainHeading="Materials in Bars & Rods"
        leadText="Precision cold drawn, centerless ground, and hot rolled solid round bars, hex shafts, and square profiles with tight diameter tolerances (h8/h9) and superior surface finishes conforming to ASTM A276 and ASTM A479."
        materials={BARS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  // Active Category Data for the selected material
  const activeCategory = useMemo(() => {
    return getBarsCategoryBySlug(materialSlug) || BARS_CATEGORIES[0];
  }, [materialSlug]);

  useEffect(() => {
    const matName = activeCategory?.materialName || activeCategory?.name || 'Cold Drawn & Ground';
    document.title = isManufacturedInMumbai
      ? `${matName} Bars & Rods Manufactured in Mumbai | Redcore Steels`
      : `${matName} Bars & Rods | ASTM A276 & ASTM A479 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="bars"
      categoryName="Bars & Rods"
      materialSlug={materialSlug}
      materials={BARS_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
