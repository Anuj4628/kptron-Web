// ======================================================================
// KPTRON PIPING SOLUTIONS — CENTRAL MATERIALS & DYNAMIC PRODUCT MAPPING
// Single Source of Truth for Genuine Materials and Product Relationships
// Derived strictly from the 6 active product catalogs:
// 1. Pipes (pipesData.js)
// 2. Sheets, Plates & Coils (sheetsPlatesCoilsData.js)
// 3. Bars (barsData.js)
// 4. Buttweld Fittings (pipeFittingsData.js)
// 5. Flanges (flangesData.js)
// 6. Fasteners (fastenersData.js)
// ======================================================================

import { PIPE_CATEGORIES } from './pipesData';
import { SHEETS_PLATES_COILS_CATEGORIES } from './sheetsPlatesCoilsData';
import { BARS_CATEGORIES } from './barsData';
import { PIPE_FITTINGS_CATEGORIES } from './pipeFittingsData';
import { FLANGES_CATEGORIES } from './flangesData';
import { FASTENERS_CATEGORIES } from './fastenersData';

// Material category showcase images
import imgAlloySteel from '../assets/Product Section/Material Imges/alloy steel.jpg';
import imgCarbon from '../assets/Product Section/Material Imges/carbon.png';
import imgDuplex from '../assets/Product Section/Material Imges/duplex.jpg';
import imgExoticAlloy from '../assets/Product Section/Material Imges/exotic.jpeg';
import imgHighAlloy from '../assets/Product Section/Material Imges/high Alloy.webp';
import imgNickelAlloy from '../assets/Product Section/Material Imges/nikle alloy.png';
import imgStainlessSteel from '../assets/Product Section/Material Imges/stainless steel.jpg';
import imgSuperDuplex from '../assets/Product Section/Material Imges/super duplex.webp';
import imgTitanium from '../assets/Product Section/Material Imges/titanium.png';

/**
 * Genuine Materials derived strictly from existing Products data
 */
export const MATERIALS = [
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    slug: 'stainless-steel',
    badge: 'AUSTENITIC & FERRITIC STAINLESS',
    grade: 'AISI 304, 304L, 316, 316L, 316Ti, 321, 347, 310S, 410, 904L',
    shortDesc: 'Premium austenitic, super-austenitic, and martensitic stainless steels engineered with chromium, nickel, and molybdenum for outstanding corrosion resistance, hygienic purity, and structural integrity across severe process environments.',
    image: imgStainlessSteel,
    heroImage: imgStainlessSteel,
    standards: ['ASTM A312', 'ASTM A240', 'ASTM A276', 'ASTM A403', 'ASTM A182', 'ASTM A193', 'EN 10204 3.1'],
    keyAttributes: ['Hygienic Finish', 'High Pitting Resistance', 'Superior Cryogenic Toughness', 'Dual Certified 304/304L & 316/316L'],
    aliases: ['stainless-steel', 'stainless', 'ss', '304', '304l', '304-304l', '316', '316l', '316h', '316-316l', '316-316l-316h', '316ti', '310', '310s', '317', '317l', '321', '321h', '347', '347h', '904l', '410', '420']
  },
  {
    id: 'carbon-steel',
    name: 'Carbon Steel',
    slug: 'carbon-steel',
    badge: 'STRUCTURAL & HIGH-PRESSURE CARBON',
    grade: 'ASTM A106 Gr.B, A105, A234 WPB, A350 LF2, A694, API 5L X42-X70, IS 2062',
    shortDesc: 'Heavy-duty structural and high-pressure carbon steels offering high tensile yield, impact toughness, and cost-effective dependability for cross-country transmission lines, petrochemical piping, and utility infrastructure.',
    image: imgCarbon,
    heroImage: imgCarbon,
    standards: ['ASTM A106', 'ASTM A516', 'ASTM A105', 'ASTM A234', 'ASTM A350', 'API 5L', 'IBR Approved'],
    keyAttributes: ['High Tensile Strength', 'Cost-Effective Reliability', 'Severe Pressure Tolerance', 'Low Temperature Impact Toughness'],
    aliases: ['carbon-steel', 'carbon', 'cs', 'a106', 'a105', 'a234', 'a234-wpb', 'a350-lf2', 'api-5l', 'api5l', 'is-grades']
  },
  {
    id: 'alloy-steel',
    name: 'Alloy Steel',
    slug: 'alloy-steel',
    badge: 'CHROME-MOLY ELEVATED TEMPERATURE',
    grade: 'ASTM A335 / A234 P1, P5, P9, P11, P22, P91, F1, F5, F9, F11, F22, F91, B7, B16',
    shortDesc: 'Chromium-molybdenum high-temperature alloy steels specifically formulated to combat creep deformation, graphitization, and hydrogen attack in thermal utility boilers, heat recovery generators, and petrochemical cracking furnaces.',
    image: imgAlloySteel,
    heroImage: imgAlloySteel,
    standards: ['ASTM A335', 'ASTM A387', 'ASTM A182', 'ASTM A234', 'ASTM A193', 'DIN 17175', 'EN 10216-2'],
    keyAttributes: ['High Creep-Rupture Strength', 'Elevated Temperature Stability', 'Hydrogen Embrittlement Resistance', 'IBR Certified'],
    aliases: ['alloy-steel', 'alloy', 'as', 'chrome-moly', 'p11', 'p22', 'p91', 'f11', 'f22', 'f91', 'b7', 'b16', 'wp11', 'wp22', 'wp91']
  },
  {
    id: 'duplex-steel',
    name: 'Duplex Steel',
    slug: 'duplex-steel',
    badge: 'AUSTENITIC-FERRITIC DUAL PHASE',
    grade: 'UNS S31803 / UNS S32205 (Alloy 2205), ASTM A182 F51',
    shortDesc: 'Dual-phase austenitic-ferritic microstructure combining twice the yield strength of traditional austenitic stainless steels with supreme immunity to chloride-induced stress corrosion cracking in marine and sour chemical systems.',
    image: imgDuplex,
    heroImage: imgDuplex,
    standards: ['ASTM A790', 'ASTM A240', 'ASTM A276', 'ASTM A182 F51', 'ASTM A815', 'NACE MR0175', 'EN 10088-3'],
    keyAttributes: ['2x Standard Stainless Yield', 'Chloride SCC Immunity', 'High Mechanical Toughness', 'NACE MR0175 Compliant'],
    aliases: ['duplex-steel', 'duplex', '2205', 's31803', 's32205', 'f51', 'duplex-2205']
  },
  {
    id: 'super-duplex-steel',
    name: 'Super Duplex Steel',
    slug: 'super-duplex-steel',
    badge: 'PREN > 42 SUBSEA & OFFSHORE',
    grade: 'UNS S32750 (2507) / UNS S32760 (Zeron 100), ASTM A182 F53 / F55',
    shortDesc: 'Ultra-high PREN (>42) 25% chromium super duplex alloys engineered for aggressive marine conditions, subsea manifolds, offshore seawater injection, desalination evaporators, and severe acidic process media.',
    image: imgSuperDuplex,
    heroImage: imgSuperDuplex,
    standards: ['ASTM A790', 'ASTM A240', 'ASTM A479', 'ASTM A182 F53/F55', 'ASTM A815', 'NORSOK M-650', 'ISO 15156'],
    keyAttributes: ['Guaranteed PREN ≥ 42', 'Zero Seawater Crevice Corrosion', 'Exceptional Erosion Resistance', 'Subsea Certified'],
    aliases: ['super-duplex-steel', 'super-duplex', 'superduplex', '2507', 's32750', 's32760', 'f53', 'f55', 'zeron-100']
  },
  {
    id: 'inconel',
    name: 'Inconel',
    slug: 'inconel',
    badge: 'AEROSPACE & HIGH-HEAT SUPERALLOY',
    grade: 'Inconel 600 (N06600), Inconel 601, Inconel 625 (N06625), Inconel 718 (N07718)',
    shortDesc: 'Austenitic nickel-chromium-molybdenum superalloys designed to endure intense thermal cycling, severe oxidation, and corrosive gas streams up to 1000°C in jet engines, flare stacks, and chemical processing.',
    image: imgNickelAlloy,
    heroImage: imgNickelAlloy,
    standards: ['ASTM B167', 'ASTM B444', 'ASTM B166', 'ASTM B446', 'ASTM B564', 'ASTM B366', 'AMS Specs'],
    keyAttributes: ['High Thermal Stability (1000°C+)', 'Non-Magnetic Matrix', 'Exceptional Pitting Immunity', 'Superior Fatigue Strength'],
    aliases: ['inconel', 'inconel-alloy', '600', '625', '718', 'inconel-600', 'inconel-625', 'inconel-718', 'n06625', 'n06600']
  },
  {
    id: 'monel',
    name: 'Monel',
    slug: 'monel',
    badge: 'NICKEL-COPPER MARINE SUPERALLOY',
    grade: 'Monel 400 (UNS N04400), Monel K500 (UNS N05500)',
    shortDesc: 'High-purity nickel-copper solid solution alloys offering exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, alkaline salts, and marine bio-fouling.',
    image: imgHighAlloy,
    heroImage: imgHighAlloy,
    standards: ['ASTM B165', 'ASTM B127', 'ASTM B164', 'ASTM B564', 'ASTM B366', 'QQ-N-281', 'DIN 17752'],
    keyAttributes: ['Flowing Seawater Immunity', 'Hydrofluoric Acid Resistance', 'High Cavitation Endurance', 'Sub-Zero Impact Ductility'],
    aliases: ['monel', 'monel-alloy', '400', 'k500', 'monel-400', 'monel-k500', 'n04400', 'n05500']
  },
  {
    id: 'hastelloy',
    name: 'Hastelloy',
    slug: 'hastelloy',
    badge: 'EXTREME ACID & CHLORIDE RESISTANT',
    grade: 'Hastelloy C276 (UNS N10276), C22 (UNS N06022), B2 (UNS N10665)',
    shortDesc: 'Nickel-molybdenum-chromium superalloys engineered with tungsten additions to withstand the most aggressive chemical environments including wet chlorine, ferric chloride, formic acid, and hot contaminated mineral acids.',
    image: imgNickelAlloy,
    heroImage: imgNickelAlloy,
    standards: ['ASTM B622', 'ASTM B575', 'ASTM B574', 'ASTM B564', 'ASTM B366', 'ASME SB574', 'DIN 17744'],
    keyAttributes: ['Wet Chlorine Gas Immunity', 'Superior Intergranular Resistance', 'High Temperature Acid Tolerance', 'Extreme Crevice Resistance'],
    aliases: ['hastelloy', 'hastelloy-alloy', 'c276', 'c22', 'b2', 'hastelloy-c276', 'hastelloy-c22', 'n10276', 'n06022']
  },
  {
    id: 'nickel-alloys',
    name: 'Nickel Alloys',
    slug: 'nickel-alloys',
    badge: 'HIGH-PURITY NICKEL & SUPERALLOYS',
    grade: 'Nickel 200 (UNS N02200), Nickel 201 (UNS N02201), Specialty Nickel Formulations',
    shortDesc: 'Commercially pure wrought nickel formulations delivering complete resistance to caustic soda, alkaline solutions, fluorine gas, and reducing chemical environments across chemical synthesis and electronics.',
    image: imgNickelAlloy,
    heroImage: imgNickelAlloy,
    standards: ['ASTM B161', 'ASTM B162', 'ASTM B160', 'ASTM B564', 'ASTM B366', 'ASME SB160', 'DIN 17750'],
    keyAttributes: ['100% Caustic Alkali Immunity', 'Superior Electrical & Thermal Conductivity', 'High Curie Temperature', 'Zero Chloride SCC'],
    aliases: ['nickel-alloys', 'nickel-alloy', 'nickel', 'nickel-200', 'nickel-201', 'ni200', 'ni201', 'n02200', 'n02201']
  },
  {
    id: 'copper-nickel',
    name: 'Copper Nickel',
    slug: 'copper-nickel',
    badge: 'MARINE CONDENSER & SEAWATER ALLOY',
    grade: 'Cu-Ni 90/10 (UNS C70600 / CW352H), Cu-Ni 70/30 (UNS C71500 / CW354H)',
    shortDesc: 'Marine-grade copper-nickel alloys characterized by high resistance to saltwater impingement, macro-fouling, marine biofouling, and stress corrosion in offshore cooling piping and desalination plants.',
    image: imgHighAlloy,
    heroImage: imgHighAlloy,
    standards: ['ASTM B466', 'ASTM B171', 'ASTM B151', 'ASTM B564', 'ASTM B366', 'DIN 86019', 'EEMUA 144'],
    keyAttributes: ['Inherent Bio-Fouling Resistance', 'High Impingement Velocity Tolerance', 'Zero Pitting in Stagnant Seawater', 'Excellent Cold Formability'],
    aliases: ['copper-nickel', 'cu-ni', 'cuni', '90-10', '70-30', 'cu-ni-90-10', 'cu-ni-70-30', 'c70600', 'c71500', 'cupronickel']
  },
  {
    id: 'titanium',
    name: 'Titanium',
    slug: 'titanium',
    badge: 'LIGHTWEIGHT AEROSPACE & MARINE METAL',
    grade: 'Titanium Grade 1, Grade 2 (UNS R50400), Grade 5 Ti-6Al-4V (UNS R56400), Grade 7',
    shortDesc: 'Commercially pure and alpha-beta titanium alloys delivering the highest strength-to-density ratio of any metallic piping material, paired with absolute immunity to seawater, sour gas, and chlor-alkali chemicals.',
    image: imgTitanium,
    heroImage: imgTitanium,
    standards: ['ASTM B861', 'ASTM B338', 'ASTM B265', 'ASTM B348', 'ASTM B381', 'ASTM B363', 'AMS 4928'],
    keyAttributes: ['Exceptional Strength-to-Weight', '100% Saltwater & Chlorine Immunity', 'Non-Magnetic Biocompatibility', 'Hypersonic Temperature Tolerance'],
    aliases: ['titanium', 'titanium-alloy', 'ti', 'grade-2', 'grade-5', 'ti-6al-4v', 'r50400', 'r56400']
  },
  {
    id: 'maraging-steel',
    name: 'Maraging Steel',
    slug: 'maraging-steel',
    badge: 'ULTRA-HIGH YIELD DEFENSE & AEROSPACE',
    grade: 'Maraging 250 (Vascomax 250), Maraging 300, Maraging 350 (Vascomax 350)',
    shortDesc: 'Ultra-high-strength, carbon-free iron-nickel martensitic alloys achieving extraordinary fracture toughness and dimensional stability through martensitic aging heat treatments.',
    image: imgAlloySteel,
    heroImage: imgAlloySteel,
    standards: ['AMS 6512', 'AMS 6514', 'MIL-S-46850', 'ASTM A579'],
    keyAttributes: ['Yield Strength up to 2400 MPa', 'Exceptional Fracture Toughness', 'Negligible Distortion in Hardening', 'Aerospace & Centrifuge Certified'],
    aliases: ['maraging-steel', 'maraging', 'maraging-250', 'maraging-300', 'maraging-350', 'vascomax']
  },
  {
    id: 'refractory-anchor',
    name: 'Refractory Anchor',
    slug: 'refractory-anchor',
    badge: 'HIGH-HEAT FURNACE & KILN FASTENING',
    grade: 'SS 304, SS 310, Inconel 601, Alloy 800, Carbon Steel High-Temp Anchors',
    shortDesc: 'Specialized metallurgical high-temperature refractory anchoring fasteners engineered to support ceramic fiber and monolithic linings in petrochemical heaters, cement kilns, and thermal incinerators.',
    image: imgExoticAlloy,
    heroImage: imgExoticAlloy,
    standards: ['ASTM A276', 'ASTM B166', 'DIN 1.4841', 'DIN 1.4845'],
    keyAttributes: ['Thermal Creep Resistance up to 1200°C', 'Corrosion & Oxidation Resistance', 'Custom V, Y, Corrugated Forms', 'Engineered Weld Studs'],
    aliases: ['refractory-anchor', 'refractory-anchors', 'refractory', 'anchor']
  },
  {
    id: 'aluminum',
    name: 'Aluminum',
    slug: 'aluminum',
    badge: 'LIGHTWEIGHT ARCHITECTURAL & INDUSTRIAL',
    grade: '6061-T6, 6063-T6, 5083, 5086, 3003',
    shortDesc: 'Corrosion-resistant structural and process aluminum seamless and drawn pipes formulated for marine vessels, cryogenic transport, HVAC lines, and lightweight structural frameworks.',
    image: imgAlloySteel,
    heroImage: imgAlloySteel,
    standards: ['ASTM B241', 'ASTM B221', 'ASTM B429', 'EN 573-3', 'DIN 1725'],
    keyAttributes: ['Lightweight Density (1/3 of Steel)', 'Cryogenic Ductility', 'Atmospheric Oxide Barrier', 'Superior Thermal Conductivity'],
    aliases: ['aluminum', 'aluminium', '6061', '6063', 'aluminum-pipes']
  },
  {
    id: 'is-grades',
    name: 'IS Grades',
    slug: 'is-grades',
    badge: 'INDIAN STANDARDS (BIS CERTIFIED)',
    grade: 'IS 2062 Gr. E250 / E350, IS 1239, IS 1161, IS 3589, IS 4923',
    shortDesc: 'Bureau of Indian Standards (BIS) certified carbon and structural steel specifications engineered for heavy civil constructions, industrial infrastructure, structural piping, and pressure service applications.',
    image: imgCarbon,
    heroImage: imgCarbon,
    standards: ['IS 2062:2011', 'IS 1239', 'IS 1161', 'IS 3589', 'IS 4923', 'BIS Certified'],
    keyAttributes: ['Mandatory BIS Certification', 'High Structural Toughness', 'Superior Field Weldability', 'Guaranteed Impact Resistance at 0°C & -20°C'],
    aliases: ['is-grades', 'is-grade', 'is-2062', 'is2062', 'is2062-steel', 'is-1239', 'bis']
  },
  {
    id: 'api-5l',
    name: 'API 5L',
    slug: 'api-5l',
    badge: 'PETROLEUM & GAS TRANSMISSION LINE PIPE',
    grade: 'API 5L Gr. B, X42, X46, X52, X56, X60, X65, X70 (PSL1 & PSL2)',
    shortDesc: 'American Petroleum Institute certified seamless and welded line pipes engineered specifically for cross-country petroleum pipelines, natural gas transmission, sour gas service (NACE MR0175), and offshore flowlines.',
    image: imgCarbon,
    heroImage: imgCarbon,
    standards: ['API Spec 5L', 'ISO 3183', 'NACE MR0175 / ISO 15156', 'PSL1 & PSL2 Certified'],
    keyAttributes: ['High Yield Transmission Grades', 'NACE MR0175 Sour Service Compliance', 'Rigorous Ultrasonic & Hydrostatic Testing', 'Tight Dimensional Tolerances'],
    aliases: ['api-5l', 'api5l', 'api-5l-grades', 'api-line-pipe', 'x42', 'x52', 'x60', 'x65', 'x70']
  },
  {
    id: 'en-standards',
    name: 'EN Standards',
    slug: 'en-standards',
    badge: 'EUROPEAN PRESSURE VESSEL & ALLOY SPECIFICATIONS',
    grade: 'EN 10028-2 (16Mo3, 13CrMo4-5, 10CrMo9-10), EN 10216-2, EN 10025 S275/S355',
    shortDesc: 'Harmonized European Norms alloy steel and pressure vessel specifications engineered for elevated-temperature steam boilers, power generation piping, and chemical processing pressure vessels.',
    image: imgAlloySteel,
    heroImage: imgAlloySteel,
    standards: ['EN 10028-2', 'EN 10216-2', 'EN 10025', 'PED 2014/68/EU', 'EN 10204 3.1 / 3.2'],
    keyAttributes: ['PED 2014/68/EU Pressure Compliant', 'Elevated Temperature Creep Strength', 'High Chromium-Molybdenum Purity', 'Full Mill Traceability EN 10204 3.1/3.2'],
    aliases: ['en-standards', 'en-standard', 'en10028', 'en-10028', 'en10216', 'en-10216', '16mo3']
  }
];

/**
 * Exactly 12 Material Categories Displayed in the Navbar Dropdown
 * Strictly matching user specification:
 * 1. Stainless Steel
 * 2. Carbon Steel
 * 3. Alloy Steel
 * 4. Inconel
 * 5. Monel
 * 6. Hastelloy
 * 7. Nickel
 * 8. Copper Nickel
 * 9. Titanium
 * 10. IS Grades
 * 11. API 5L
 * 12. EN Standards
 */
export const NAVBAR_MATERIALS_OPTIONS = [
  // Column 1
  { id: 'stainless-steel', name: 'Stainless Steel', slug: 'stainless-steel', url: '/materials/stainless-steel' },
  { id: 'carbon-steel', name: 'Carbon Steel', slug: 'carbon-steel', url: '/materials/carbon-steel' },
  { id: 'alloy-steel', name: 'Alloy Steel', slug: 'alloy-steel', url: '/materials/alloy-steel' },
  { id: 'duplex-steel', name: 'Duplex Steel', slug: 'duplex-steel', url: '/materials/duplex-steel' },
  { id: 'inconel', name: 'Inconel', slug: 'inconel', url: '/materials/inconel' },
  { id: 'monel', name: 'Monel', slug: 'monel', url: '/materials/monel' },
  { id: 'hastelloy', name: 'Hastelloy', slug: 'hastelloy', url: '/materials/hastelloy' },
  // Column 2
  { id: 'nickel', name: 'Nickel', slug: 'nickel-alloys', url: '/materials/nickel' },
  { id: 'copper-nickel', name: 'Copper Nickel', slug: 'copper-nickel', url: '/materials/copper-nickel' },
  { id: 'titanium', name: 'Titanium', slug: 'titanium', url: '/materials/titanium' },
  { id: 'aluminum', name: 'Aluminium', slug: 'aluminum', url: '/materials/aluminum' },
  { id: 'is-grades', name: 'IS Grades', slug: 'is-grades', url: '/materials/is-grades' },
  { id: 'api-5l', name: 'API 5L', slug: 'api-5l', url: '/materials/api-5l' },
  { id: 'en-standards', name: 'EN Standards', slug: 'en-standards', url: '/materials/en-standards' }
];

/**
 * Normalizes raw slug to its canonical material slug
 */
export function normalizeMaterialSlug(raw) {
  if (!raw) return '';
  const s = String(raw).toLowerCase().trim().replace(/^material[-_]/, '');

  for (const mat of MATERIALS) {
    if (mat.slug === s || mat.id === s) return mat.slug;
    if (mat.aliases && mat.aliases.includes(s)) return mat.slug;
  }

  // Heuristic fallbacks
  if (s.includes('is-grade') || s.includes('is2062') || s.includes('is-2062')) return 'is-grades';
  if (s.includes('api-5l') || s.includes('api5l')) return 'api-5l';
  if (s.includes('en-standard') || s.includes('en10028') || s.includes('en-10028')) return 'en-standards';
  if (s.includes('stainless') || s.startsWith('ss')) return 'stainless-steel';
  if (s.includes('super-duplex') || s.includes('superduplex')) return 'super-duplex-steel';
  if (s.includes('duplex')) return 'duplex-steel';
  if (s.includes('carbon') || s.startsWith('cs')) return 'carbon-steel';
  if (s.includes('alloy') && !s.includes('nickel') && !s.includes('exotic')) return 'alloy-steel';
  if (s.includes('inconel')) return 'inconel';
  if (s.includes('monel')) return 'monel';
  if (s.includes('hastelloy')) return 'hastelloy';
  if (s.includes('copper') || s.includes('cu-ni') || s.includes('cuni')) return 'copper-nickel';
  if (s.includes('nickel')) return 'nickel-alloys';
  if (s.includes('titanium')) return 'titanium';
  if (s.includes('maraging')) return 'maraging-steel';
  if (s.includes('refractory')) return 'refractory-anchor';
  if (s.includes('alumin')) return 'aluminum';

  return s;
}

/**
 * Universal catalog wrapper that converts raw product category objects
 * into standardized, clickable product cards across all 6 divisions.
 */
function wrapProduct(rawItem, productType, productTypeSlug, materialKeys) {
  return {
    ...rawItem,
    id: `${productTypeSlug}-${rawItem.slug || rawItem.id}`,
    title: rawItem.title || rawItem.name,
    name: rawItem.name || rawItem.title,
    productType,
    productTypeSlug,
    standards: rawItem.standards || '',
    shortDesc: rawItem.shortDesc || '',
    image: rawItem.image,
    grades: rawItem.grades || [],
    productUrl: `/products/${productTypeSlug}/${rawItem.slug}`,
    materialKeys: Array.isArray(materialKeys) ? materialKeys : [materialKeys]
  };
}

/**
 * Pre-cached dynamic aggregation of all existing products mapped to materials
 */
const _materialToProductsMap = new Map();

function buildDynamicCatalog() {
  _materialToProductsMap.clear();

  // Initialize arrays
  MATERIALS.forEach(mat => {
    _materialToProductsMap.set(mat.slug, []);
  });

  const register = (wrappedProduct) => {
    wrappedProduct.materialKeys.forEach(matKey => {
      const list = _materialToProductsMap.get(matKey);
      if (list) {
        list.push(wrappedProduct);
      }
    });
  };

  // 1. PIPES
  (PIPE_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'stainless-steel-pipe') matKeys = ['stainless-steel'];
    else if (slug === 'carbon-steel-pipe') matKeys = ['carbon-steel'];
    else if (slug === 'is-grades-pipe') matKeys = ['is-grades', 'carbon-steel'];
    else if (slug === 'api-5l-pipe') matKeys = ['api-5l', 'carbon-steel'];
    else if (slug === 'alloy-steel-pipe') matKeys = ['alloy-steel'];
    else if (slug === 'en-standards-pipe') matKeys = ['en-standards', 'alloy-steel'];
    else if (slug === 'super-duplex-steel-pipe') matKeys = ['duplex-steel', 'super-duplex-steel'];
    else if (slug === 'inconel-pipe') matKeys = ['inconel'];
    else if (slug === 'monel-pipe') matKeys = ['monel'];
    else if (slug === 'hastelloy-pipe') matKeys = ['hastelloy'];
    else if (slug === 'nickel-pipe') matKeys = ['nickel-alloys'];
    else if (slug === 'copper-nickel-pipe') matKeys = ['copper-nickel'];
    else if (slug === 'titanium-pipe') matKeys = ['titanium'];
    else if (slug === 'aluminum-pipe') matKeys = ['aluminum'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'PIPES', 'pipes', matKeys));
    }
  });

  // 2. SHEETS, PLATES & COILS
  (SHEETS_PLATES_COILS_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'ss-sheets-plates-coils') matKeys = ['stainless-steel'];
    else if (slug === 'carbon-steel-sheets-plates-coils') matKeys = ['carbon-steel', 'is-grades', 'api-5l'];
    else if (slug === 'alloy-steel-sheets-plates-coils') matKeys = ['alloy-steel', 'en-standards'];
    else if (slug === 'super-duplex-sheets-plates-coils') matKeys = ['duplex-steel', 'super-duplex-steel'];
    else if (slug === 'inconel-sheets-plates-coils') matKeys = ['inconel'];
    else if (slug === 'hastelloy-sheets-plates-coils') matKeys = ['hastelloy'];
    else if (slug === 'titanium-sheets-plates-coils') matKeys = ['titanium'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'SHEETS, PLATES, COILS', 'sheets-plates-coils', matKeys));
    }
  });

  // 3. BARS
  (BARS_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'stainless-steel-bars') matKeys = ['stainless-steel'];
    else if (slug === 'super-and-duplex-steel-bars') matKeys = ['duplex-steel', 'super-duplex-steel'];
    else if (slug === 'carbon-steel-bar') matKeys = ['carbon-steel'];
    else if (slug === 'alloy-steel-bar') matKeys = ['alloy-steel'];
    else if (slug === 'inconel-bar') matKeys = ['inconel'];
    else if (slug === 'monel-bar') matKeys = ['monel'];
    else if (slug === 'hastelloy-bar') matKeys = ['hastelloy'];
    else if (slug === 'nickel-bar') matKeys = ['nickel-alloys'];
    else if (slug === 'copper-nickel-bar') matKeys = ['copper-nickel'];
    else if (slug === 'titanium-bar') matKeys = ['titanium'];
    else if (slug === 'maraging-bars') matKeys = ['maraging-steel'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'BARS', 'bars', matKeys));
    }
  });

  // 4. BUTTWELD FITTINGS
  (PIPE_FITTINGS_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'stainless-steel-pipe-fittings' || slug === 'stainless-steel-buttweld-fittings' || slug === 'stainless-steel') matKeys = ['stainless-steel'];
    else if (slug === 'carbon-steel-pipe-fittings' || slug === 'carbon-steel-buttweld-fittings' || slug === 'carbon-steel') matKeys = ['carbon-steel'];
    else if (slug === 'alloy-steel-pipe-fittings' || slug === 'alloy-steel-buttweld-fittings' || slug === 'alloy-steel') matKeys = ['alloy-steel'];
    else if (slug === 'inconel-pipe-fittings' || slug === 'inconel-buttweld-fittings' || slug === 'inconel') matKeys = ['inconel'];
    else if (slug === 'monel-pipe-fittings' || slug === 'monel-buttweld-fittings' || slug === 'monel') matKeys = ['monel'];
    else if (slug === 'hastelloy-pipe-fittings' || slug === 'hastelloy-buttweld-fittings' || slug === 'hastelloy') matKeys = ['hastelloy'];
    else if (slug === 'nickel-pipe-fittings' || slug === 'nickel-buttweld-fittings' || slug === 'nickel-alloys') matKeys = ['nickel-alloys'];
    else if (slug === 'copper-nickel-pipe-fittings' || slug === 'copper-nickel-buttweld-fittings' || slug === 'copper-nickel') matKeys = ['copper-nickel'];
    else if (slug === 'titanium-pipe-fittings' || slug === 'titanium-buttweld-fittings' || slug === 'titanium') matKeys = ['titanium'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'BUTTWELD FITTINGS', 'buttweld-fittings', matKeys));
    }
  });

  // 5. FLANGES
  (FLANGES_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'stainless-steel-flanges') matKeys = ['stainless-steel'];
    else if (slug === 'carbon-steel-flanges') matKeys = ['carbon-steel'];
    else if (slug === 'alloy-steel-flanges') matKeys = ['alloy-steel'];
    else if (slug === 'inconel-flanges') matKeys = ['inconel'];
    else if (slug === 'monel-flanges') matKeys = ['monel'];
    else if (slug === 'hastelloy-flanges') matKeys = ['hastelloy'];
    else if (slug === 'nickel-flanges') matKeys = ['nickel-alloys'];
    else if (slug === 'copper-nickel-flanges') matKeys = ['copper-nickel'];
    else if (slug === 'titanium-flanges') matKeys = ['titanium'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'FLANGES', 'flanges', matKeys));
    }
  });

  // 6. FASTENERS
  (FASTENERS_CATEGORIES || []).forEach(cat => {
    const slug = cat.slug;
    let matKeys = [];
    if (slug === 'carbon-steel-fasteners') matKeys = ['carbon-steel'];
    else if (slug === 'stainless-steel-fasteners') matKeys = ['stainless-steel'];
    else if (slug === 'duplex-steel-fasteners') matKeys = ['duplex-steel'];
    else if (slug === 'super-duplex-steel-fasteners') matKeys = ['super-duplex-steel'];
    else if (slug === 'alloy-steel-fasteners') matKeys = ['alloy-steel'];
    else if (slug === 'inconel-fasteners') matKeys = ['inconel'];
    else if (slug === 'monel-fasteners') matKeys = ['monel'];
    else if (slug === 'hastelloy-fasteners') matKeys = ['hastelloy'];
    else if (slug === 'nickel-alloy-fasteners') matKeys = ['nickel-alloys'];
    else if (slug === 'copper-nickel-fasteners') matKeys = ['copper-nickel'];
    else if (slug === 'titanium-fasteners') matKeys = ['titanium'];
    else if (slug === 'aluminum-fasteners') matKeys = ['aluminum'];
    else if (slug === 'refractory-anchor') matKeys = ['refractory-anchor'];

    if (matKeys.length > 0) {
      register(wrapProduct(cat, 'FASTENERS', 'fasteners', matKeys));
    }
  });
}

// Build index immediately
buildDynamicCatalog();

/**
 * Returns all existing materials enriched with their live product counts.
 * Only materials with existing products are returned.
 */
export function getAllMaterials() {
  return MATERIALS.map(mat => {
    const products = getProductsByMaterial(mat.slug);
    return {
      ...mat,
      productCount: products.length
    };
  }).filter(m => m.productCount > 0);
}

/**
 * Lookup a material by its canonical slug or alias
 */
export function getMaterialBySlug(slug) {
  if (!slug) return null;
  const canonical = normalizeMaterialSlug(slug);
  return MATERIALS.find(m => m.slug === canonical || m.id === canonical) || null;
}

/**
 * Returns all products genuinely existing in the catalog for this material.
 */
export function getProductsByMaterial(materialSlug) {
  const canonical = normalizeMaterialSlug(materialSlug);
  return _materialToProductsMap.get(canonical) || [];
}

/**
 * Returns distinct product families/categories for this material
 * (e.g. PIPES, BARS, FLANGES, etc.)
 */
export function getMaterialCategories(materialSlug) {
  const products = getProductsByMaterial(materialSlug);
  const map = new Map();

  products.forEach(p => {
    if (!map.has(p.productTypeSlug)) {
      map.set(p.productTypeSlug, {
        slug: p.productTypeSlug,
        name: p.productType,
        count: 0
      });
    }
    map.get(p.productTypeSlug).count += 1;
  });

  return Array.from(map.values());
}
