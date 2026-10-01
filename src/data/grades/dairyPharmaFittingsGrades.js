/**
 * Research-Verified Dairy & Pharmaceutical Sanitary Fittings Specifications
 * Standards: ASME BPE, 3-A Sanitary Standards, DIN 11850 / DIN 11851, SMS 1145, ISO 2852
 * Connections: Tri-Clover / Tri-Clamp, SMS Union, DIN Union, IDF, RJT, Butt Weld
 * Surface Finish: ASME BPE SF1 (Mechanical Polish Ra < 0.5 µm), SF4 (Electro-Polish Ra < 0.4 µm / 15 µin)
 * Elastomer Gaskets: FDA 21 CFR 177.2600 & USP Class VI Compliant (EPDM, FKM, Silicone, PTFE)
 */

export const DAIRY_PHARMA_FITTINGS_GRADES = [
  {
    id: 'asme-bpe-ss-316l',
    slug: 'asme-bpe-ss-316l',
    aliases: ['asme-bpe-fitting', 'sanitary-316l-fitting', 'tri-clover-316l', 'pharma-316l'],
    name: 'ASME BPE Stainless Steel 316L Bio-Pharma Fitting',
    specification: 'ASME BPE / ASTM A270-S2',
    grade: 'Grade 316L Low Sulfur (0.005 - 0.017% S)',
    class: 'Hygienic Finish SF4 (Electro-Polished Internal Ra < 0.4 µm)',
    code: 'ASME BPE 316L SF4 EP',
    badge: 'BIO-PHARMA SF4 EP',
    uns: 'UNS S31603 Controlled S',
    din: '1.4435 (X2CrNiMo18-14-3)',
    productForm: 'Sanitary Fittings (Tri-Clamp Ferrule, 90° Bend, Tee, Reducer, Diaphragm Valve Ports)',
    standards: 'ASME BPE, ASTM A270-S2, 3-A Sanitary, FDA 21 CFR 177',
    shortDesc: 'Electro-polished low-sulfur 316L hygienic fitting certified for automated orbital welding and clean-in-place (CIP/SIP) bio-pharma lines.',
    fullDesc: 'Manufactured from premium vacuum-degassed 316L / DIN 1.4435 stainless steel with tightly controlled sulfur content (0.005% to 0.017%) to ensure uniform, full-penetration orbital weld beads without root sagging. Internal bore is electropolished to Ra < 0.4 µm (15 µin) to prevent microbial adhesion and biofilm formation.',
    features: [
      'Internal surface electropolished to ASME BPE SF4 standard (Ra ≤ 0.38 µm / 15 µin)',
      'Controlled sulfur content (0.005-0.017%) enables repeatable automated orbital welding',
      'Passivated in citric/nitric acid to achieve Cr:Fe surface ratio ≥ 1.5 (Auger analyzed)',
      '100% Boroscope inspected and delivered individually capped in cleanroom bags'
    ],
    specs: {
      sizeRange: '1/2" OD to 6" OD (12.7 mm to 152.4 mm Tube OD)',
      wallThickness: '16 SWG (1.65 mm), 14 SWG (2.1 mm)',
      ends: 'Tri-Clamp Hygienic Flange & Extended Orbital Weld Ends',
      testing: 'Laser profilometer surface roughness (Ra) check, Boroscope inspection, PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (70,000 psi)',
      yield: '≥ 170 MPa (25,000 psi)',
      elongation: '≥ 35%',
      hardness: '≤ 85 HRB / 170 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      s: '0.005 - 0.017%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      p: '≤ 0.045%'
    },
    applications: [
      'Biopharmaceutical vaccine synthesis bioreactors and harvest lines',
      'Water For Injection (WFI) distribution loops and USP pure steam lines',
      'Aseptic filling and sterile formulation buffer transfer manifolds',
      'Active Pharmaceutical Ingredient (API) crystallization vessels'
    ]
  },
  {
    id: 'din-11850-ss-304',
    slug: 'din-11850-ss-304',
    aliases: ['sanitary-304-fitting', 'dairy-304-fitting', 'din-11851-union'],
    name: 'DIN 11850 / 3-A Stainless Steel 304 Dairy Fitting',
    specification: 'DIN 11850 / 3-A Sanitary / ASTM A270',
    grade: 'Grade 304 Sanitary Austenitic',
    class: 'Food Grade Finish SF1 (Mechanical Polish Ra < 0.8 µm)',
    code: 'DIN 11850 SS304 DAIRY',
    badge: '3-A SANITARY FOOD GRADE',
    uns: 'UNS S30400',
    din: '1.4301 (X5CrNi18-10)',
    productForm: 'Dairy Fittings (DIN 11851 Union, SMS Union, Tri-Clover Bends, Tees)',
    standards: 'DIN 11850, DIN 11851, 3-A Sanitary Standards, ISO 2852',
    shortDesc: 'Food-grade mechanical mirror-polished stainless steel 304 sanitary fitting engineered for dairy, beverage, and brewery processing.',
    fullDesc: 'Manufactured from austenitic 18-8 stainless steel with mechanically polished internal bore (Ra < 0.8 µm / 32 µin) and satin exterior. Engineered to comply with strict 3-A Sanitary and EHEDG standards for clean-in-place (CIP) food and dairy fluid transfer.',
    features: [
      'Internal surface mechanically polished to sanitary finish (Ra ≤ 0.8 µm / 32 µin)',
      'Completely self-draining geometry with zero dead-legs to prevent bacterial pockets',
      'Certified FDA 21 CFR compliant food contact materials (EPDM & NBR seals)',
      'Supplied with full material traceability and hygienic certificate'
    ],
    specs: {
      sizeRange: '1/2" (DN 10) to 6" (DN 150) Sanitary Tube OD',
      wallThickness: '1.5 mm, 2.0 mm',
      ends: 'Sanitary DIN 11851 Male/Liner/Nut, Tri-Clamp, SMS 1145 Union',
      testing: 'Surface roughness (Ra) measurement, Dye penetrant test, 100% PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.07%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Commercial dairy milk pasteurization and homogenization lines',
      'Brewery fermentation cellars, yeast propagation, and bright beer tanks',
      'Soft drink, mineral water, and fruit juice aseptic bottling manifolds',
      'Edible oil refining and liquid chocolate sanitary piping'
    ]
  },
  {
    id: 'sanitary-904l-pharma',
    slug: 'sanitary-904l-pharma',
    aliases: ['904l-sanitary-fitting', 'super-austenitic-pharma-fitting'],
    name: 'Super Austenitic 904L Sanitary Fitting',
    specification: 'ASTM B677 / ASME BPE Compliant',
    grade: 'UNS N08904 (Alloy 904L)',
    class: 'High Chloride Pharma Buffer Service',
    code: '904L SANITARY CHLORIDE',
    badge: 'HIGH SALINE & BUFFER IMMUNE',
    uns: 'UNS N08904',
    din: '1.4539 (X1NiCrMoCu25-20-5)',
    productForm: 'Sanitary Tri-Clamp Ferrules, Elbows, Diaphragm Valve Manifolds',
    standards: 'ASME BPE, ASTM B677, FDA Compliant',
    shortDesc: 'Super-austenitic 25% Ni, 4.5% Mo sanitary fitting designed for corrosive high-saline pharmaceutical chromatography and buffer prep.',
    fullDesc: 'High-purity sanitary fitting formed from super-austenitic 904L stainless steel. Features 25% Nickel, 4.5% Molybdenum, and 1.5% Copper to provide immunity to chloride stress cracking and pitting in high-ionic chromatography buffers where standard 316L suffers crevice attack.',
    features: [
      'High nickel & moly prevents pitting during high-saline buffer preparation',
      'Electro-polished internal surface (Ra ≤ 0.38 µm) for aseptic cleaning',
      'Immune to pitting corrosion during aggressive nitric/peracetic acid sanitation',
      'Full material test certificate (EN 10204 3.1) with chemical heat analysis'
    ],
    specs: {
      sizeRange: '1/2" to 4" Sanitary Tube OD',
      wallThickness: '1.65 mm (16 SWG)',
      ends: 'Tri-Clamp Hygienic Flange & Orbital Weld Ends',
      testing: 'ASTM G48 Pitting Corrosion, Surface roughness Ra, Boroscope, PMI'
    },
    mechanical: {
      tensile: '≥ 490 MPa',
      yield: '≥ 220 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '400°C'
    },
    chemistry: {
      cr: '19.0 - 23.0%',
      ni: '23.0 - 28.0%',
      mo: '4.00 - 5.00%',
      cu: '1.00 - 2.00%',
      c: '≤ 0.020%',
      n: '≤ 0.10%'
    },
    applications: [
      'Pharmaceutical chromatography column high-saline buffer lines',
      'Vitamin and antibiotic synthesis vessels handling organic acids',
      'Aseptic saline solution formulation and sterile holding tanks',
      'Aggressive sanitizing chemical CIP dosing manifolds'
    ]
  }
];
