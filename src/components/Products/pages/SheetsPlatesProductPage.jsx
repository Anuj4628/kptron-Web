import React, { useMemo, useEffect } from 'react';
import { 
  SHEETS_PLATES_COILS_CATEGORIES, 
  getSheetsPlatesCategoryBySlug 
} from '../../../data/sheetsPlatesCoilsData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Dedicated Sheets, Plates & Coils Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Sheets & Plates" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function SheetsPlatesProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate,
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Sheets & Plates" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="sheets-plates-coils"
        categoryName="Sheets & Plates"
        mainHeading="Materials in Sheets & Plates"
        leadText="Cold-rolled sheets, hot-rolled pickled plates, and precision strip coils in stainless steel, boiler-quality carbon steel, chrome-moly, and corrosion-resistant alloys conforming to ASTM A240 and ASME SA240."
        materials={SHEETS_PLATES_COILS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  // Active Category Data for the selected material
  const activeCategory = useMemo(() => {
    return getSheetsPlatesCategoryBySlug(materialSlug) || SHEETS_PLATES_COILS_CATEGORIES[0];
  }, [materialSlug]);

  useEffect(() => {
    const matName = activeCategory?.materialName || activeCategory?.name || 'Cold & Hot Rolled';
    document.title = isManufacturedInMumbai
      ? `${matName} Sheets, Plates & Coils Manufactured in Mumbai | Redcore Steels`
      : `${matName} Sheets, Plates & Coils | ASTM A240 & ASME SA240 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="sheets-plates-coils"
      categoryName="Sheets & Plates"
      materialSlug={materialSlug}
      materials={SHEETS_PLATES_COILS_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
