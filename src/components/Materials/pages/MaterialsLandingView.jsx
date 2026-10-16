import React, { useMemo, useEffect } from 'react';
import { MATERIALS, getProductsByMaterial } from '../../../data/materialsData';
import CategoryMaterialListingView from '../../Products/CategoryMaterialListingView';

// Curated comprehensive grade tags matching actual product catalogs
const MATERIAL_GRADES_MAP = {
  'stainless-steel': [
    { name: '304 / 304L', slug: '304-304l' },
    { name: '316 / 316L', slug: '316-316l' },
    { name: '321 / 321H', slug: '321-321h' },
    { name: '347 / 347H', slug: '347-347h' },
    { name: '310S', slug: '310s' },
    { name: '904L', slug: '904l' },
    { name: '410', slug: '410' },
    { name: '446', slug: '446' }
  ],
  'carbon-steel': [
    { name: 'ASTM A106 Gr. B', slug: 'astm-a106-gr-b' },
    { name: 'ASTM A105', slug: 'astm-a105' },
    { name: 'ASTM A234 WPB', slug: 'astm-a234-wpb' },
    { name: 'ASTM A350 LF2', slug: 'astm-a350-lf2' },
    { name: 'ASTM A516 Gr. 70', slug: 'astm-a516-gr-70' },
    { name: 'API 5L Gr. B', slug: 'api-5l-gr-b' },
    { name: 'IS 2062', slug: 'is-2062' }
  ],
  'alloy-steel': [
    { name: 'ASTM A335 P11', slug: 'astm-a335-p11' },
    { name: 'ASTM A335 P22', slug: 'astm-a335-p22' },
    { name: 'ASTM A335 P91', slug: 'astm-a335-p91' },
    { name: 'ASTM A335 P9', slug: 'astm-a335-p9' },
    { name: 'ASTM A335 P5', slug: 'astm-a335-p5' },
    { name: 'ASTM A182 F11', slug: 'astm-a182-f11' },
    { name: 'ASTM A182 F22', slug: 'astm-a182-f22' }
  ],
  'duplex-steel': [
    { name: 'UNS S31803 (2205)', slug: 'uns-s31803' },
    { name: 'UNS S32205', slug: 'uns-s32205' },
    { name: 'ASTM A182 F51', slug: 'astm-a182-f51' },
    { name: 'ASTM A790', slug: 'astm-a790' }
  ],
  'super-duplex-steel': [
    { name: 'UNS S32750 (2507)', slug: 'uns-s32750' },
    { name: 'UNS S32760 (Zeron 100)', slug: 'uns-s32760' },
    { name: 'ASTM A182 F53', slug: 'astm-a182-f53' },
    { name: 'ASTM A182 F55', slug: 'astm-a182-f55' }
  ],
  'inconel': [
    { name: 'Inconel 600', slug: 'inconel-600' },
    { name: 'Inconel 601', slug: 'inconel-601' },
    { name: 'Inconel 625', slug: 'inconel-625' },
    { name: 'Inconel 718', slug: 'inconel-718' },
    { name: 'Inconel X-750', slug: 'inconel-x-750' }
  ],
  'monel': [
    { name: 'Monel 400', slug: 'monel-400' },
    { name: 'Monel K500', slug: 'monel-k500' }
  ],
  'hastelloy': [
    { name: 'Hastelloy C276', slug: 'hastelloy-c276' },
    { name: 'Hastelloy C22', slug: 'hastelloy-c22' },
    { name: 'Hastelloy B2', slug: 'hastelloy-b2' },
    { name: 'Hastelloy B3', slug: 'hastelloy-b3' }
  ],
  'nickel-alloys': [
    { name: 'Nickel 200', slug: 'nickel-200' },
    { name: 'Nickel 201', slug: 'nickel-201' },
    { name: 'Nickel 205', slug: 'nickel-205' }
  ],
  'copper-nickel': [
    { name: 'Cu-Ni 90/10 (C70600)', slug: 'cu-ni-90-10' },
    { name: 'Cu-Ni 70/30 (C71500)', slug: 'cu-ni-70-30' }
  ],
  'titanium': [
    { name: 'Titanium Grade 1', slug: 'titanium-grade-1' },
    { name: 'Titanium Grade 2', slug: 'titanium-grade-2' },
    { name: 'Titanium Grade 5 (Ti-6Al-4V)', slug: 'titanium-grade-5' },
    { name: 'Titanium Grade 7', slug: 'titanium-grade-7' }
  ],
  'aluminum': [
    { name: '6061-T6', slug: '6061-t6' },
    { name: '6063-T6', slug: '6063-t6' },
    { name: '5083', slug: '5083' },
    { name: '5086', slug: '5086' },
    { name: '3003', slug: '3003' }
  ],
  'maraging-steel': [
    { name: 'Maraging 250', slug: 'maraging-250' },
    { name: 'Maraging 300', slug: 'maraging-300' },
    { name: 'Maraging 350', slug: 'maraging-350' }
  ],
  'is-grades': [
    { name: 'IS 2062 E250', slug: 'is-2062-e250' },
    { name: 'IS 2062 E350', slug: 'is-2062-e350' },
    { name: 'IS 1239', slug: 'is-1239' },
    { name: 'IS 3589', slug: 'is-3589' },
    { name: 'IS 1161', slug: 'is-1161' }
  ],
  'api-5l': [
    { name: 'API 5L Gr. B', slug: 'api-5l-gr-b' },
    { name: 'API 5L X42', slug: 'api-5l-x42' },
    { name: 'API 5L X52', slug: 'api-5l-x52' },
    { name: 'API 5L X60', slug: 'api-5l-x60' },
    { name: 'API 5L X65', slug: 'api-5l-x65' },
    { name: 'API 5L X70', slug: 'api-5l-x70' }
  ],
  'en-standards': [
    { name: '16Mo3', slug: '16mo3' },
    { name: '13CrMo4-5', slug: '13crmo4-5' },
    { name: '10CrMo9-10', slug: '10crmo9-10' },
    { name: 'S275JR', slug: 's275jr' },
    { name: 'S355JR', slug: 's355jr' }
  ]
};

/**
 * Unified Modern Materials Listing View
 * 
 * Replaces the outdated materials page with the current Product → Material cards design.
 * Features:
 * - 100% same card structure, styling, spacing, typography, and hover effects
 * - MILL CERTIFIED badge, red-orange top accent, standards line, and description
 * - Interactive Available Grades pills with "+ More Grades" accordion toggle
 * - Fast real-time search filtering across materials, standards, and grades
 * - Perfectly responsive on mobile, tablet, and desktop
 */
export default function MaterialsLandingView({ onNavigate, onOpenQuoteModal }) {
  useEffect(() => {
    document.title = 'Materials We Work With | Certified Metallurgical Alloys | KPTRON Piping Solutions Inc.';
  }, []);

  const materialsList = useMemo(() => {
    return MATERIALS.map(mat => {
      // Determine grades: use curated map, or collect from linked products, or fallback to grade string
      let grades = MATERIAL_GRADES_MAP[mat.slug];

      if (!grades || grades.length === 0) {
        const products = getProductsByMaterial(mat.slug);
        const gradeSet = new Set();
        const collected = [];

        products.forEach(p => {
          (p.grades || []).forEach(g => {
            const gName = typeof g === 'string' ? g : (g.name || g.code || g.shortName);
            if (gName && !gradeSet.has(gName.toLowerCase())) {
              gradeSet.add(gName.toLowerCase());
              collected.push(g);
            }
          });
        });

        if (collected.length > 0) {
          grades = collected;
        } else if (typeof mat.grade === 'string') {
          grades = mat.grade.split(',').map(s => {
            const trimmed = s.trim();
            return {
              name: trimmed,
              slug: trimmed.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            };
          }).filter(g => g.name);
        } else {
          grades = [];
        }
      }

      const standardsStr = Array.isArray(mat.standards)
        ? mat.standards.join(', ')
        : (mat.standards || '');

      return {
        ...mat,
        materialSlug: mat.slug,
        materialName: mat.name,
        title: mat.name,
        standards: standardsStr,
        grades,
        image: mat.image || mat.heroImage
      };
    });
  }, []);

  return (
    <CategoryMaterialListingView
      categorySlug="materials"
      categoryName="Materials"
      mainHeading="Materials We Work With"
      leadText="Explore our certified metallurgical materials and specialty alloys engineered for demanding high-pressure, cryogenic, and corrosive process systems across global markets. All materials are supplied with complete EN 10204 3.1 & 3.2 mill test reports and 100% PMI verification."
      materials={materialsList}
      onNavigate={onNavigate}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
}
