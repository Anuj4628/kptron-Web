/**
 * Grade-Specific Image Registry for KPTRON Sheets, Plates & Coils Division
 * Provides verified direct imports for authentic Sheets, Plates & Coils grade images
 * across Stainless Steel, Duplex Steel, Carbon Steel, Alloy Steel, Inconel, Hastelloy, and Titanium.
 */

// ==========================================
// 1. STAINLESS STEEL SHEETS & PLATES
// ==========================================
import ss_general from '../assets/grades images/ss sheet&plates.jpeg';
import ss_304_304l from '../assets/grades images/sheet&plates/SS/304 310 l.jpeg';
import ss_310_310s from '../assets/grades images/sheet&plates/SS/SS 310 310S SHEETS, PLATES.jpeg';
import ss_316_316l_316h from '../assets/grades images/sheet&plates/SS/SS 316 316L 316H SHEETS, PLATES,.jpeg';
import ss_316ti from '../assets/grades images/sheet&plates/SS/SS 316TI SHEETS, PLATES.jpeg';
import ss_317_317l from '../assets/grades images/sheet&plates/SS/SS 317  317L SHEETS, PLATES.jpeg';
import ss_321_321h from '../assets/grades images/sheet&plates/SS/SS 321  321H SHEETS, PLATES, COILS.jpeg';
import ss_347_347h from '../assets/grades images/sheet&plates/SS/SS 347  347H SHEETS, PLATES.jpeg';
import ss_410 from '../assets/grades images/sheet&plates/SS/ss 410.jpeg';
import ss_446 from '../assets/grades images/sheet&plates/SS/SS 446 SHEETS, PLATES,.jpg';
import ss_904l from '../assets/grades images/sheet&plates/SS/SS 904L SHEETS, PLATES.jpeg';

// ==========================================
// 2. DUPLEX & SUPER DUPLEX STEEL SHEETS & PLATES
// ==========================================
import duplex_general from '../assets/grades images/sheet&plates/Duplex/duplex steel sheet and plate.jpeg';
import duplex_s32205 from '../assets/grades images/sheet&plates/Duplex/DUPLEX STEEL S32205 SHEET.jpeg';
import duplex_s32205_alt from '../assets/grades images/sheet&plates/Duplex/s32205 sheet.jpeg';
import super_duplex_s32760 from '../assets/grades images/sheet&plates/Duplex/s32760.jpg';

// ==========================================
// 3. CARBON STEEL BOILER & STRUCTURAL PLATES
// ==========================================
import cs_general from '../assets/grades images/sheet&plates/carbon/CARBON STEEL SHEET, PLATE.jpeg';
import cs_a516_gr70 from '../assets/grades images/sheet&plates/carbon/ASTM A516 GRADE 70 SHEET.jpeg';
import cs_a36 from '../assets/grades images/sheet&plates/carbon/ASTM A36 SHEET, PLATE.jpeg';
import cs_is_2062 from '../assets/grades images/sheet&plates/carbon/IS 2062 E250 E350 SHEET.jpeg';
import cs_a516_gr60 from '../assets/grades images/sheet&plates/carbon/ASTM A516 GRADE 60 SHEET.jpeg';

// ==========================================
// 4. ALLOY STEEL (ASTM A387 CHROME-MOLY) PLATES
// ==========================================
import alloy_general from '../assets/grades images/sheet&plates/alloy steel/ALLOY STEEL SHEET, PLATE.jpg';
import alloy_a387_gr1 from '../assets/grades images/sheet&plates/alloy steel/ASTM A387 GRADE 1 SHEET, PLATE.jpeg';
import alloy_a387_gr5 from '../assets/grades images/sheet&plates/titanium/ASTM A387 GRADE 5 SHEET, PLATE.jpeg';
import alloy_a387_gr9 from '../assets/grades images/sheet&plates/titanium/ASTM A387 GRADE 9 SHEET, PLATE.jpeg';
import alloy_a387_gr11 from '../assets/grades images/sheet&plates/titanium/ASTM A387 GRADE 11 SHEET, PLATE.jpg';
import alloy_a387_gr22 from '../assets/grades images/sheet&plates/titanium/ASTM A387 GRADE 22 SHEET, PLATE.webp';
import alloy_a387_gr91 from '../assets/grades images/sheet&plates/titanium/ASTM A387 GRADE 91 SHEET, PLATE.jpeg';

// ==========================================
// 5. INCONEL HIGH-TEMPERATURE SUPERALLOY PLATES
// ==========================================
import inconel_general from '../assets/grades images/sheet&plates/iconel/iconel sheet plates and coil.jpeg';
import inconel_600 from '../assets/grades images/sheet&plates/iconel/INCONEL 600 SHEETS, PLATES.jpeg';
import inconel_601 from '../assets/grades images/sheet&plates/iconel/INCONEL 601 SHEETS, PLATES.jpeg';
import inconel_625 from '../assets/grades images/sheet&plates/iconel/INCONEL 625 SHEETS, PLATES, COILS.jpeg';
import inconel_718 from '../assets/grades images/sheet&plates/iconel/INCONEL 718 SHEETS, PLATES, COILS.jpeg';

// ==========================================
// 6. HASTELLOY CORROSION-RESISTANT ALLOY PLATES
// ==========================================
import hastelloy_general from '../assets/grades images/sheet&plates/hastelloy/hastelloy sheet and plates.jpeg';
import hastelloy_c22 from '../assets/grades images/sheet&plates/hastelloy/HASTELLOY C22 SHEETS.jpeg';
import hastelloy_c276 from '../assets/grades images/sheet&plates/hastelloy/HASTELLOY C276 SHEETS.jpeg';

// ==========================================
// 7. TITANIUM SEAWATER-IMMUNE ALLOY PLATES
// ==========================================
import titanium_general from '../assets/grades images/sheet&plates/titanium/TITANIUM SHEETS, PLATES.webp';
import titanium_gr2 from '../assets/grades images/sheet&plates/titanium/titanium grade 2.jpeg';
import titanium_gr5 from '../assets/grades images/sheet&plates/titanium/grade 5.jpeg';

/**
 * Category-Level Authentic Showcase Images
 */
export const SHEET_PLATE_CATEGORY_IMAGES = {
  'stainless-steel': ss_general,
  'ss-sheets-plates-coils': ss_general,
  'duplex-steel': duplex_general,
  'super-duplex-sheets-plates-coils': duplex_general,
  'carbon-steel': cs_general,
  'carbon-steel-sheets-plates-coils': cs_general,
  'alloy-steel': alloy_general,
  'alloy-steel-sheets-plates-coils': alloy_general,
  'inconel': inconel_general,
  'inconel-sheets-plates-coils': inconel_general,
  'hastelloy': hastelloy_general,
  'hastelloy-sheets-plates-coils': hastelloy_general,
  'titanium': titanium_general,
  'titanium-sheets-plates-coils': titanium_general
};

/**
 * Complete Grade-Level Image Registry
 */
export const SHEET_PLATE_GRADE_IMAGES = {
  // Stainless Steel
  'ss-sheets-plates-coils-commercial': ss_general,
  'ss-sheets-plates-coils': ss_general,
  'ss-304-304l-sheets-plates-coils': ss_304_304l,
  'ss-316-316l-316h-sheets-plates-coils': ss_316_316l_316h,
  'ss-316ti-sheets-plates-coils': ss_316ti,
  'ss-310-310s-sheets-plates-coils': ss_310_310s,
  'ss-317-317l-sheets-plates-coils': ss_317_317l,
  'ss-321-321h-sheets-plates-coils': ss_321_321h,
  'ss-347-347h-sheets-plates-coils': ss_347_347h,
  'ss-410-sheets-plates-coils': ss_410,
  'ss-446-sheets-plates-coils': ss_446,
  'ss-904l-sheets-plates-coils': ss_904l,

  // Duplex & Super Duplex
  'duplex-steel-s31803-sheet-plate-coil': duplex_general,
  'duplex-steel-s32205-sheet-plate-coil': duplex_s32205,
  'super-duplex-s32750-sheet-plate-coil': duplex_s32205_alt,
  'super-duplex-s32760-sheet-plate-coil': super_duplex_s32760,

  // Carbon Steel
  'carbon-steel-sheet-plate-coil-commercial': cs_general,
  'carbon-steel-sheet-plate-coil': cs_general,
  'astm-a516-grade-70-sheet-plate-coil': cs_a516_gr70,
  'astm-a36-sheet-plate-coil': cs_a36,
  'is-2062-e250-e350-sheet-plate-coil': cs_is_2062,
  'astm-a516-grade-60-sheet-plate-coil': cs_a516_gr60,

  // Alloy Steel
  'alloy-steel-sheet-plate-coil-commercial': alloy_general,
  'alloy-steel-sheet-plate-coil': alloy_general,
  'astm-a387-grade-1-sheet-plate-coil': alloy_a387_gr1,
  'astm-a387-grade-5-sheet-plate-coil': alloy_a387_gr5,
  'astm-a387-grade-9-sheet-plate-coil': alloy_a387_gr9,
  'astm-a387-grade-11-sheet-plate-coil': alloy_a387_gr11,
  'astm-a387-grade-22-sheet-plate-coil': alloy_a387_gr22,
  'astm-a387-grade-91-sheet-plate-coil': alloy_a387_gr91,

  // Inconel
  'inconel-sheets-plates-coils-commercial': inconel_general,
  'inconel-sheets-plates-coils': inconel_general,
  'inconel-600-sheets-plates-coils': inconel_600,
  'inconel-601-sheets-plates-coils': inconel_601,
  'inconel-625-sheets-plates-coils': inconel_625,
  'inconel-718-sheets-plates-coils': inconel_718,

  // Hastelloy
  'hastelloy-sheets-plates-coils-commercial': hastelloy_general,
  'hastelloy-sheets-plates-coils': hastelloy_general,
  'hastelloy-c22-sheets-plates-coils': hastelloy_c22,
  'hastelloy-c276-sheets-plates-coils': hastelloy_c276,

  // Titanium
  'titanium-sheets-plates-coils-commercial': titanium_general,
  'titanium-sheets-plates-coils': titanium_general,
  'titanium-grade-2-sheets-plates-coils': titanium_gr2,
  'titanium-grade-5-sheets-plates-coils': titanium_gr5
};

/**
 * Get authentic image for a specific Sheet, Plate or Coil grade
 * @param {string} gradeSlug - The grade slug or id
 * @param {string} categorySlug - Optional category slug for fallback
 * @returns {string|null} - Image URL/asset or null
 */
export function getSheetPlateGradeImage(gradeSlug, categorySlug = null) {
  if (!gradeSlug) {
    if (categorySlug && SHEET_PLATE_CATEGORY_IMAGES[categorySlug]) {
      return SHEET_PLATE_CATEGORY_IMAGES[categorySlug];
    }
    return null;
  }

  const clean = String(gradeSlug).toLowerCase().trim();
  if (SHEET_PLATE_GRADE_IMAGES[clean]) {
    return SHEET_PLATE_GRADE_IMAGES[clean];
  }

  // Fallback to category image if available
  if (categorySlug && SHEET_PLATE_CATEGORY_IMAGES[categorySlug]) {
    return SHEET_PLATE_CATEGORY_IMAGES[categorySlug];
  }

  return null;
}

export default {
  SHEET_PLATE_CATEGORY_IMAGES,
  SHEET_PLATE_GRADE_IMAGES,
  getSheetPlateGradeImage
};
