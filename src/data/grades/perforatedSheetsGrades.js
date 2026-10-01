/**
 * Research-Verified Perforated Sheets Specifications & Metallurgy
 * Standards: ISO 7806, DIN 24041, ASTM A240, ASTM A1008, ASTM B265
 * Patterns: Round Hole 60° Staggered (R-T), Square Inline (C-U), Slotted (L-T), Hexagonal
 * Hole Dimensions: 0.5 mm to 100 mm Hole Diameter | Open Area: 10% to 75%
 * Thickness: 0.5 mm to 12.0 mm | Sheet Sizes: 1000x2000 mm, 1250x2500 mm, 1500x3000 mm
 */

export const PERFORATED_SHEETS_GRADES = [
  {
    id: 'perforated-ss-304',
    slug: 'perforated-ss-304',
    aliases: ['ss-304-perforated-sheet', 'ss304-perforated', '304-perforated-plate'],
    name: 'Stainless Steel 304 / 304L Perforated Sheet',
    specification: 'ASTM A240 / DIN 24041',
    grade: 'Grade 304 / 304L (UNS S30400 / S30403)',
    class: 'Hole Patterns: Round (60° Staggered), Square, Slotted',
    code: 'SS304 PERFORATED SHEET',
    badge: 'UNIVERSAL FILTRATION',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Perforated Sheets, Coils, and Fabricated Filter Cylinders',
    standards: 'ISO 7806, DIN 24041, ASTM A240, ASTM A480',
    shortDesc: 'Austenitic 18-8 stainless steel perforated sheet engineered for particle separation, architectural sunscreens, and acoustic baffles.',
    fullDesc: 'Manufactured by high-speed CNC punching presses with precision multi-die tooling from 304/304L cold-rolled or hot-rolled stainless sheets. Available with plain unperforated margins (borders) and precision level-flattened to eliminate residual punching curvature.',
    features: [
      'High open area (up to 65%) with high dimensional aperture accuracy',
      'Deburred hole edges with roller leveling to ensure flat panel geometry',
      'Corrosion resistant in atmospheric, food, and beverage environments',
      'Supplied with custom non-perforated margins for easy framing and welding'
    ],
    specs: {
      thicknessRange: '0.5 mm to 8.0 mm',
      holeDiameter: '0.8 mm to 25.0 mm (Pitch 1.5 mm to 35.0 mm)',
      openArea: '18% to 63% Open Area',
      surfaceFinish: '2B Cold Rolled, No. 4 Satin Brush, Mill Pickled'
    },
    mechanical: {
      tensile: '≥ 515 MPa (Base Sheet)',
      yield: '≥ 205 MPa',
      elongation: '≥ 40%',
      hardness: '≤ 92 HRB / 201 HBW',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.030% (304L) / ≤ 0.08% (304)',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Agricultural grain cleaning sieves and seed grading screens',
      'Acoustic sound dampening panels and industrial silencer enclosures',
      'Architectural building cladding, sunscreens, and decorative grilles',
      'Food processing centrifuge baskets and juice extractors'
    ]
  },
  {
    id: 'perforated-ss-316l',
    slug: 'perforated-ss-316l',
    aliases: ['ss-316-perforated-sheet', 'ss316l-perforated', 'marine-perforated-sheet'],
    name: 'Stainless Steel 316 / 316L Perforated Sheet',
    specification: 'ASTM A240 / DIN 24041',
    grade: 'Grade 316 / 316L (UNS S31600 / S31603)',
    class: 'Chemical & Marine Grade (2.0 - 3.0% Moly)',
    code: 'SS316L PERFORATED MOLY',
    badge: 'CHLORIDE ACID RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Perforated Sheets, Filter Screens, Centrifugal Liners',
    standards: 'ISO 7806, DIN 24041, ASTM A240, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum-bearing stainless perforated plate providing superior resistance to chloride pitting in marine and chemical strainers.',
    fullDesc: 'Engineered from solution-annealed 316L stainless steel containing 2.5% Molybdenum. Delivers high corrosion resistance against salt spray, brine, sulfuric acid mist, and aggressive organic chemicals in municipal filtration, marine intakes, and pharmaceutical separation.',
    features: [
      'Molybdenum content provides exceptional resistance to pitting in brine and acids',
      'Precision punch tooling ensures clean-cut burr-free aperture profiles',
      'Supplied annealed, pickled, and roller-leveled to tight flatness tolerances',
      'Fully qualified under NACE MR0175 for offshore screening installations'
    ],
    specs: {
      thicknessRange: '0.7 mm to 10.0 mm',
      holeDiameter: '1.0 mm to 30.0 mm (Round / Slot / Square)',
      openArea: '20% to 58% Open Area',
      surfaceFinish: '2B Smooth, Pickled & Passivated, Mirror Polished'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40%',
      hardness: '≤ 90 HRB / 187 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Seawater reverse osmosis intake strainers and de-sanding baskets',
      'Chemical centrifuge filter drums and vacuum filtration leaves',
      'Pharmaceutical fluid bed dryer distributor plates',
      'Offshore drilling mud shale shaker backing screens'
    ]
  },
  {
    id: 'perforated-carbon-steel',
    slug: 'perforated-carbon-steel',
    aliases: ['cs-perforated-sheet', 'galvanized-perforated-sheet', 'mild-steel-perforated'],
    name: 'Carbon Steel / Galvanized Perforated Sheet',
    specification: 'ASTM A1008 / ASTM A653 / IS 2062',
    grade: 'Commercial Quality CR / HDG Grade G90',
    class: 'Heavy Duty Industrial Screen (Round & Hexagonal)',
    code: 'CARBON STEEL PERFORATED',
    badge: 'STRUCTURAL IMPACT PROOF',
    uns: 'UNS G10080 / G10100',
    din: '1.0330 (DC01 / St 12)',
    productForm: 'Perforated Heavy Plates and Sheet Panels',
    standards: 'ISO 7806, DIN 24041, ASTM A1008, ASTM A653',
    shortDesc: 'Heavy-duty carbon steel perforated sheet with hot-dip galvanized or mill finish for crushing, screening, and machinery protection.',
    fullDesc: 'Fabricated from high-tensile carbon steel plate or continuous hot-dip galvanized strip (ASTM A653 G90). Provides high mechanical impact toughness, wear resistance, and structural strength for heavy aggregate sorting, quarry screening, and HVAC acoustic attenuators.',
    features: [
      'High structural impact resistance under heavy abrasive aggregate loads',
      'Available with hot-dip galvanized zinc coating (G90) for outdoor rust protection',
      'Excellent weldability and formability for machine guards and duct silencers',
      'Standard sizes kept in ex-stock inventory with quick dispatch'
    ],
    specs: {
      thicknessRange: '1.0 mm to 12.0 mm',
      holeDiameter: '2.0 mm to 50.0 mm',
      openArea: '22% to 65% Open Area',
      surfaceFinish: 'Mill Finish (Oiled), Hot-Dip Galvanized G90, Powder Coated'
    },
    mechanical: {
      tensile: '310 - 450 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 28%',
      hardness: '≤ 65 HRB / 120 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '≤ 0.15%',
      mn: '≤ 0.60%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      fe: 'Balance'
    },
    applications: [
      'Quarry and mining vibratory screening decks for aggregate sorting',
      'Heavy equipment radiator grilles, engine covers, and safety guards',
      'HVAC acoustic attenuator baffles and industrial silencers',
      'Warehouse racking deck panels and walkway safety flooring'
    ]
  },
  {
    id: 'perforated-duplex-2205',
    slug: 'perforated-duplex-2205',
    aliases: ['duplex-2205-perforated', 's31803-perforated-plate'],
    name: 'Duplex 2205 (UNS S31803 / S32205) Perforated Sheet',
    specification: 'ASTM A240 / DIN 24041',
    grade: 'UNS S31803 / UNS S32205 (2205 Duplex)',
    class: 'High Strength Marine & Offshore Filtration',
    code: 'DUPLEX 2205 PERFORATED',
    badge: '450 MPA HIGH YIELD',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Perforated Plates, Separator Screens, Cyclone Liners',
    standards: 'ASTM A240, ISO 7806, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex perforated plate delivering 450 MPa yield strength and superior erosion-corrosion resistance in offshore separation.',
    fullDesc: 'Precision-perforated from 22% Cr, 5% Ni, 3% Mo duplex stainless steel plate. High mechanical strength enables 30-40% thinner perforated plate designs while maintaining equivalent pressure and deflection resistance under heavy hydrodynamic filtration loads.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L perforated plate',
      'PREN ≥ 35 delivers high resistance to seawater pitting and crevice corrosion',
      'High erosion-corrosion resistance in sand-bearing high-velocity slurry streams',
      'Certified under NORSOK M-650 with ASTM A923 Method C corrosion verification'
    ],
    specs: {
      thicknessRange: '1.5 mm to 10.0 mm',
      holeDiameter: '2.0 mm to 25.0 mm',
      openArea: '20% to 50% Open Area',
      surfaceFinish: 'Hot Rolled Pickled (No. 1), Cold Rolled 2B'
    },
    mechanical: {
      tensile: '≥ 655 MPa (95,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 25%',
      hardness: '≤ 290 HBW (28 HRC)',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '22.0 - 23.0%',
      ni: '4.5 - 6.5%',
      mo: '3.0 - 3.5%',
      n: '0.14 - 0.20%',
      c: '≤ 0.030%'
    },
    applications: [
      'Offshore production separator vessel internal baffle screens',
      'Desalination plant coarse intake strainers and brine distributor plates',
      'Pulp and paper black liquor pressure filter screens',
      'Wet flue gas desulfurization (FGD) mist eliminator supports'
    ]
  }
];
