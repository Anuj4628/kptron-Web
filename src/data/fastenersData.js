/**
 * Dedicated Fasteners Product Catalog Data & Verified Technical Specifications
 * Conforming strictly to ASTM A193, ASTM A194, ASTM A320, ASTM A325, DIN 933, DIN 934, ISO 4014, and ASME B18.2.1.
 */

import { FASTENER_MATERIALS } from './fastenerTypesData';
import { getFastenerGradeImage, FASTENER_GRADE_IMAGES } from './fastenerGradeImages';

export const FASTENERS_CATEGORIES = FASTENER_MATERIALS.map(mat => ({
  id: `${mat.slug}-fasteners`,
  slug: `${mat.slug}-fasteners`,
  materialSlug: mat.slug,
  materialName: mat.name,
  aliases: [
    mat.slug,
    `${mat.slug}-fasteners`,
    ...(mat.altSlugs || [])
  ],
  name: `${mat.name} Fasteners`,
  title: `${mat.name} Fasteners`,
  image: mat.displayImage || (mat.typeImages && mat.typeImages['hex-head-bolts']),
  standards: mat.standard,
  sizeRange: 'M6 to M100 | 1/4" to 4" Diameter',
  threadTypes: 'UNC, UNF, Metric 6g/6H, 8-UN Heavy Bolting Series',
  availableForms: [
    'Heavy Hex Head High-Tensile Bolts & Screws',
    'Heavy Hex Nuts (ASTM A194 / DIN 934)',
    'Continuous Threaded Stud Bolts with Dual Heavy Nuts',
    'Socket Head Cap Screws & Allen Bolts',
    'Hardened Flat Washers & Spring Lock Washers'
  ],
  shortDesc: mat.materialDesc,
  grades: mat.grades.map(g => ({
    id: g.id,
    slug: g.slug,
    name: g.name,
    image: getFastenerGradeImage(g.slug) || getFastenerGradeImage(g.id),
    code: g.code,
    standard: g.standard,
    uns: g.uns,
    din: g.din,
    shortDesc: g.shortDesc,
    fullDesc: g.fullDesc,
    specs: g.specs,
    applications: g.applications,
    mechanical: g.mechanical || {},
    chemistry: g.chemistry || {}
  }))
}));

export function getFastenersCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  return FASTENERS_CATEGORIES.find(cat => 
    cat.slug === clean || 
    cat.id === clean || 
    cat.materialSlug === clean || 
    (cat.aliases && cat.aliases.includes(clean))
  ) || FASTENERS_CATEGORIES[0];
}

export function getFastenersGradeBySlug(catSlug, gradeSlug) {
  const cat = getFastenersCategoryBySlug(catSlug);
  if (!cat) return null;
  if (!gradeSlug) return cat.grades[0] || null;
  const clean = gradeSlug.toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  return cat.grades.find(g => 
    g.slug === clean || 
    g.id === clean || 
    (g.aliases && g.aliases.includes(clean)) ||
    g.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === clean
  ) || cat.grades[0] || null;
}

export function getFastenersMaterialList() {
  return [
    { slug: 'all', name: 'All Materials' },
    ...FASTENERS_CATEGORIES.map(c => ({
      slug: c.materialSlug,
      name: c.materialName,
      catSlug: c.slug,
      count: c.grades.length
    }))
  ];
}

export { getFastenerGradeImage, FASTENER_GRADE_IMAGES };

