import React, { useMemo, useEffect } from 'react';
import { 
  FASTENERS_CATEGORIES, 
  getFastenersCategoryBySlug 
} from '../../../data/fastenersData';
import CategoryMaterialListingView from '../CategoryMaterialListingView';
import CategoryMaterialDetailView from '../CategoryMaterialDetailView';

/**
 * Dedicated Fasteners Product Page
 * 
 * - When materialSlug is null or 'all': Renders "Materials in Fasteners" listing page.
 * - When materialSlug is provided: Renders dedicated Material Description Page with
 *   compact materials sidebar, horizontal hero, and clickable available grades.
 */
export default function FastenersProductPage({ 
  materialSlug = null, 
  isManufacturedInMumbai = false, 
  onNavigate, 
  onOpenQuoteModal 
}) {
  // If no material requested or 'all', display "Materials in Fasteners" listing page
  if (!materialSlug || materialSlug.toLowerCase().trim() === 'all') {
    return (
      <CategoryMaterialListingView
        categorySlug="fasteners"
        categoryName="Fasteners"
        mainHeading="Materials in Fasteners"
        leadText="High-tensile, elevated-temperature, and corrosion-resistant threaded stud bolts, heavy hex nuts, socket cap screws, and washers certified to ASTM A193 B7/B8/B16 and A194 2H/Gr. 8."
        materials={FASTENERS_CATEGORIES}
        isManufacturedInMumbai={isManufacturedInMumbai}
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  // Active Category Data for the selected material
  const activeCategory = useMemo(() => {
    return getFastenersCategoryBySlug(materialSlug) || FASTENERS_CATEGORIES[0];
  }, [materialSlug]);

  useEffect(() => {
    const matName = activeCategory?.materialName || activeCategory?.name || 'High Tensile';
    document.title = isManufacturedInMumbai
      ? `${matName} Fasteners Manufactured in Mumbai | Redcore Steels`
      : `${matName} Fasteners | ASTM A193 & A194 | Redcore Steels`;
  }, [isManufacturedInMumbai, activeCategory]);

  return (
    <CategoryMaterialDetailView
      categorySlug="fasteners"
      categoryName="Fasteners"
      materialSlug={materialSlug}
      materials={FASTENERS_CATEGORIES}
      activeCategory={activeCategory}
      isManufacturedInMumbai={isManufacturedInMumbai}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
