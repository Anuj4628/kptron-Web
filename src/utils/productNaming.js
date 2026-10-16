/**
 * Centralized Material Card Title & Product Naming Utility
 * 
 * Enforces strictly across the entire KPtron Piping Solutions website:
 * - Pipes: Stainless Steel Pipes, Carbon Steel Pipes, Alloy Steel Pipes, Titanium Pipes, Duplex Steel Pipes, Super Duplex Steel Pipes...
 * - Bars: Stainless Steel Bars, Carbon Steel Bars, Alloy Steel Bars, Titanium Bars...
 * - Flanges: Stainless Steel Flanges, Carbon Steel Flanges, Alloy Steel Flanges, Titanium Flanges...
 * - Fasteners: Stainless Steel Fasteners, Carbon Steel Fasteners, Alloy Steel Fasteners, Titanium Fasteners...
 * - Buttweld Fittings: Stainless Steel Fittings, Carbon Steel Fittings, Alloy Steel Fittings, Titanium Fittings...
 * - Sheets & Plates: Stainless Steel Sheets & Plates, Carbon Steel Sheets & Plates, Alloy Steel Sheets & Plates, Titanium Sheets & Plates... (NEVER 'Coils')
 */

export function getMaterialCardTitle(mat, categorySlug = '', categoryName = '') {
  if (!mat) return '';
  let rawName = mat.materialName || mat.name || mat.title || '';

  // Clean off any existing category suffix or extraneous descriptors from rawName
  let baseMat = rawName
    .replace(/\s*(Sheets?,?\s*Plates?,?\s*Coils?|Sheets?\s*&\s*Plates?|Sheets?|Plates?|Coils?|Pipes?\s*&\s*Tubes?|Pipes?|Tubes?|Pipeline|Bars?\s*&\s*Rods?|Bars?|Rods?|Flanges?|Fasteners?|Butt\s*weld\s*Fittings?|Buttweld\s*Fittings?|Pipe\s*Fittings?|Fittings?|Superalloy|High-Nickel|Nickel-Copper)\s*$/gi, '')
    .trim();

  // Normalize specific base materials
  const lowerBase = baseMat.toLowerCase();
  if (lowerBase === 'ss' || lowerBase === 'stainless') {
    baseMat = 'Stainless Steel';
  } else if (lowerBase === 'cs' || lowerBase === 'carbon') {
    baseMat = 'Carbon Steel';
  } else if (lowerBase === 'alloy') {
    baseMat = 'Alloy Steel';
  } else if (lowerBase.includes('super duplex') || lowerBase.includes('super & duplex') || lowerBase.includes('super and duplex')) {
    baseMat = 'Super Duplex Steel';
  } else if (lowerBase === 'duplex stainless steel' || lowerBase === 'duplex' || lowerBase === 'duplex steel') {
    baseMat = 'Duplex Steel';
  } else if (lowerBase === 'nickel' || lowerBase === 'nickel & nickel alloy' || lowerBase === 'nickel alloys') {
    baseMat = 'Nickel Alloy';
  } else if (lowerBase === 'aluminium') {
    baseMat = 'Aluminum';
  } else if (lowerBase === 'api 5l' || lowerBase.includes('api 5l')) {
    baseMat = 'API 5L';
  } else if (lowerBase === 'is' || lowerBase.includes('is grades')) {
    baseMat = 'IS Grades';
  } else if (lowerBase === 'en' || lowerBase.includes('en standards')) {
    baseMat = 'EN Standards';
  } else if (lowerBase === 'maraging' || lowerBase === 'maraging steel') {
    baseMat = 'Maraging Steel';
  } else if (!baseMat) {
    baseMat = rawName;
  }

  const cat = (categorySlug || '').toLowerCase();

  if (cat.includes('pipe')) {
    return `${baseMat} Pipes`;
  }
  if (cat.includes('bar')) {
    return `${baseMat} Bars`;
  }
  if (cat.includes('flange')) {
    return `${baseMat} Flanges`;
  }
  if (cat.includes('fastener')) {
    return `${baseMat} Fasteners`;
  }
  if (cat.includes('fitting') || cat.includes('buttweld')) {
    return `${baseMat} Fittings`;
  }
  if (cat.includes('sheet') || cat.includes('plate') || cat.includes('coil')) {
    return `${baseMat} Sheets & Plates`;
  }

  // Fallback for custom or division category names:
  let cleanCatName = categoryName || '';
  if (/sheets?,?\s*plates?,?\s*coils?/i.test(cleanCatName)) {
    cleanCatName = 'Sheets & Plates';
  } else if (/buttweld|pipe\s*fittings?/i.test(cleanCatName)) {
    cleanCatName = 'Fittings';
  } else if (/pipes?\s*(&|and)?\s*tubes?/i.test(cleanCatName)) {
    cleanCatName = 'Pipes';
  } else if (/bars?\s*(&|and)?\s*rods?/i.test(cleanCatName)) {
    cleanCatName = 'Bars';
  }

  return `${baseMat} ${cleanCatName}`.trim();
}
