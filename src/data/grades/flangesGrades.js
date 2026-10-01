/**
 * Research-Verified Flanges Specifications & Metallurgy
 * Standards: ASME B16.5, ASME B16.47 Series A & B, DIN EN 1092-1, MSS SP-44
 * Pressure Classes: 150#, 300#, 600#, 900#, 1500#, 2500# (PN 16 to PN 420)
 * Facing: Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)
 * Types: Weld Neck (WN), Slip-On (SO), Blind (BL), Socket Weld (SW), Threaded (TH), Lap Joint (LJ)
 */

export const FLANGES_STAINLESS_STEEL_GRADES = [
  {
    id: 'astm-a182-f304-f304l',
    slug: 'astm-a182-f304-f304l',
    aliases: ['astm-a182-f304', 'f304', 'f304l', 'a182-f304', 'ss-304-flange', 'ss304-flange'],
    name: 'ASTM A182 F304 / F304L Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F304 / F304L (Dual Certified)',
    class: 'Class 150 - 2500# (PN 20 - PN 420)',
    code: 'A182 F304/L FORGED',
    badge: 'LOW CARBON FORGING',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Forged Flange (WN, SO, BL, SW, TH, LJ)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, EN 1092-1',
    shortDesc: 'Dual-certified austenitic stainless steel forged flange offering superior resistance to intergranular corrosion after welding.',
    fullDesc: 'Forged from solution-annealed 18Cr-8Ni stainless steel. Features controlled carbon content (max 0.030%) to eliminate carbide precipitation at grain boundaries during field welding onto pipe headers.',
    features: [
      'Eliminates grain boundary carbide precipitation during field welding',
      'Dual certified 304/304L chemistry satisfying both tensile standards',
      'Available across all standard facing profiles: 125-250 AARH RF & RTJ',
      'Full material test certification to EN 10204 3.1 & NACE MR0175'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 60" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face (RF 125-250 Ra), Ring Type Joint (RTJ), Flat Face (FF)',
      testing: '100% PMI Spectro, Hydrostatic proof test, Ultrasonic flaw detection'
    },
    mechanical: {
      tensile: '≥ 485 MPa (F304L) / ≥ 515 MPa (F304)',
      yield: '≥ 170 MPa (F304L) / ≥ 205 MPa (F304)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 187 HBW (90 HRB)',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 11.0%',
      mo: '—',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Chemical fluid conveyance & acid neutralization headers',
      'Municipal water treatment and sanitary food processing loops',
      'Petrochemical refinery cooling water & utility manifolds',
      'Commercial cryogenic LNG transfer manifolds (-196°C)'
    ]
  },
  {
    id: 'astm-a182-f316-f316l',
    slug: 'astm-a182-f316-f316l',
    aliases: ['astm-a182-f316', 'f316', 'f316l', 'a182-f316', 'ss-316-flange', 'ss316-flange'],
    name: 'ASTM A182 F316 / F316L Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F316 / F316L (Dual Certified)',
    class: 'Class 150 - 2500# (PN 20 - PN 420)',
    code: 'A182 F316/L MOLY FORGED',
    badge: 'MOLYBDENUM RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Forged Flange (WN, SO, BL, SW, TH, LJ)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, EN 1092-1',
    shortDesc: '2.0-3.0% Molybdenum-bearing forged stainless flange delivering high resistance to chloride pitting and industrial sour environments.',
    fullDesc: 'Hot-forged and solution-treated molybdenum-bearing austenitic stainless steel flange. Provides exceptional resistance to crevice corrosion, sulfuric/phosphoric acid media, and pitting attack in coastal and offshore environments.',
    features: [
      '2.0 - 3.0% Molybdenum addition provides high chloride pitting resistance',
      'Controlled low-carbon formulation (C ≤ 0.030%) prevents weld sensitization',
      'Fully qualified under NACE MR0175 / ISO 15156 for sour gas applications',
      'Precision CNC gasket serration (125-250 AARH spiral or concentric)'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 60" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'RF (Raised Face), RTJ (Ring Type Joint Octagonal/Oval), FF',
      testing: '100% PMI, Liquid Penetrant (PT), Ultrasonic (UT), Hydrostatic'
    },
    mechanical: {
      tensile: '≥ 485 MPa (F316L) / ≥ 515 MPa (F316)',
      yield: '≥ 170 MPa (F316L) / ≥ 205 MPa (F316)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 187 HBW (90 HRB)',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Offshore oil platform topside process piping and manifolds',
      'Marine seawater intake & desalination high-pressure headers',
      'Pharmaceutical sterile loop bio-reactor nozzle connections',
      'Pulp and paper bleaching towers and chemical processing'
    ]
  },
  {
    id: 'astm-a182-f321',
    slug: 'astm-a182-f321',
    aliases: ['f321', 'a182-f321', 'ss-321-flange', 'ss321-flange'],
    name: 'ASTM A182 F321 Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F321',
    class: 'Class 150 - 2500#',
    code: 'A182 F321 TITANIUM STABILIZED',
    badge: '800°C HEAT SERVICE',
    uns: 'UNS S32100',
    din: '1.4541 (X6CrNiTi18-10)',
    productForm: 'Forged Flange (Weld Neck, Blind, Slip-On)',
    standards: 'ASME B16.5, ASTM A182, EN 1092-1',
    shortDesc: 'Titanium-stabilized austenitic forged flange engineered for prolonged service within the 425°C to 850°C carbide precipitation zone.',
    fullDesc: 'Stabilized with Titanium to an amount at least 5 times the carbon content. The titanium preferentially bonds with carbon to form titanium carbides, preventing chromium carbide precipitation and intergranular corrosion during prolonged elevated temperature exposure.',
    features: [
      'Titanium stabilization prevents intergranular sensitization at 425-850°C',
      'Maintains structural creep strength in continuous high-temperature service',
      'Immune to weld decay in high-heat industrial exhaust networks',
      'Certified EN 10204 3.1 with chemical ratio Ti ≥ 5x(C+N) verified'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500',
      facing: 'Raised Face, Ring Type Joint',
      testing: 'PMI, Hydrostatic, Microstructural Grain Size, Ultrasonic'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW',
      maxTemp: '850°C'
    },
    chemistry: {
      cr: '17.0 - 19.0%',
      ni: '9.0 - 12.0%',
      ti: '5x(C+N) min to 0.70%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Refinery thermal cracking units and catalyst regeneration manifolds',
      'Gas turbine exhaust flanges and boiler superheater transitions',
      'Chemical reactor thermal expansion loops',
      'High-temperature aircraft engine test bench piping'
    ]
  },
  {
    id: 'astm-a182-f347',
    slug: 'astm-a182-f347',
    aliases: ['f347', 'a182-f347', 'ss-347-flange'],
    name: 'ASTM A182 F347 Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F347',
    class: 'Class 150 - 2500#',
    code: 'A182 F347 NIOBIUM STABILIZED',
    badge: 'CREEP STABILIZED',
    uns: 'UNS S34700',
    din: '1.4550 (X6CrNiNb18-10)',
    productForm: 'Forged Flange (Weld Neck, Slip-On, Blind)',
    standards: 'ASME B16.5, ASTM A182, EN 1092-1',
    shortDesc: 'Columbium/Niobium-stabilized forged flange providing superior creep resistance and intergranular integrity under high-pressure thermal cycling.',
    fullDesc: 'Stabilized with Columbium (Niobium) to prevent chromium carbide depletion along grain boundaries. Provides higher creep rupture stresses than Grade 321 at temperatures above 538°C.',
    features: [
      'Niobium/Columbium stabilization (Nb ≥ 10xC) prevents sensitization',
      'Higher allowable stress values at temperatures exceeding 540°C',
      'Resistant to polythionic acid stress corrosion cracking in refineries',
      'Full penetration weld-neck design for heavy dynamic thermal loads'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'RF, RTJ',
      testing: '100% PMI, UT, Hydrostatic proof'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW',
      maxTemp: '850°C'
    },
    chemistry: {
      cr: '17.0 - 19.0%',
      ni: '9.0 - 13.0%',
      nb: '10xC min to 1.10%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Petroleum refinery hydrocracker high-temperature headers',
      'Heavy wall superheater pipe joints in thermal power generation',
      'Radioactive waste containment lines and nuclear piping',
      'High-pressure chemical synthesizers operating at 500°C+'
    ]
  },
  {
    id: 'astm-a182-f310s',
    slug: 'astm-a182-f310s',
    aliases: ['f310', 'f310s', 'a182-f310', 'ss-310-flange'],
    name: 'ASTM A182 F310 / F310S Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F310 / F310S',
    class: 'Class 150 - 1500#',
    code: 'A182 F310S 1150°C REFRACTORY',
    badge: '1150°C OXIDATION IMMUNE',
    uns: 'UNS S31000 / S31008',
    din: '1.4845 (X8CrNi25-21)',
    productForm: 'Forged Flange (Weld Neck, Blind)',
    standards: 'ASME B16.5, ASTM A182',
    shortDesc: '25Cr-20Ni high-alloy refractory forged flange designed for continuous oxidation resistance up to 1150°C.',
    fullDesc: 'Heavy-duty 25% Chromium, 20% Nickel austenitic stainless steel forged flange. Forms a dense, adherent chromia protective scale providing remarkable resistance to sulfidation, carburization, and thermal shock in furnace environments.',
    features: [
      'High chromium and nickel content sustains mechanical strength up to 1150°C',
      'Protective chromia film prevents cyclic oxidation and scaling',
      'Resistant to moderately carburizing and reducing atmospheres',
      'Precision machined gasket seating ensuring zero leakage under high heat'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900',
      facing: 'Raised Face, Flat Face',
      testing: 'High-Temp Hot Tensile, 100% PMI Spectro, UT'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW',
      maxTemp: '1150°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '19.0 - 22.0%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.50%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Industrial kiln, calciner, and furnace duct flange connections',
      'Fluidized bed coal combustion exhaust systems',
      'Thermal recuperators and flare stack burner tip headers',
      'Heat-treating retorts and high-temperature gas pipelines'
    ]
  },
  {
    id: 'astm-a182-f904l',
    slug: 'astm-a182-f904l',
    aliases: ['f904l', 'a182-f904l', 'ss-904l-flange', '904l-flange'],
    name: 'ASTM A182 F904L Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F904L',
    class: 'Class 150 - 1500#',
    code: 'A182 F904L SUPER AUSTENITIC',
    badge: 'SULFURIC ACID SPECIALIST',
    uns: 'UNS N08904',
    din: '1.4539 (X1NiCrMoCu25-20-5)',
    productForm: 'Forged Flange (Weld Neck, Slip-On, Blind)',
    standards: 'ASME B16.5, ASTM A182, MSS SP-44',
    shortDesc: 'Super-austenitic forged flange with 4.5% Mo and 1.5% Copper, engineered specifically for concentrated sulfuric acid service.',
    fullDesc: 'High-alloy super-austenitic stainless steel flange. Formulated with 25% Nickel, 20% Chromium, 4.5% Molybdenum, and 1.5% Copper to provide outstanding resistance to warm sulfuric acid, phosphoric acid, and aggressive chloride pitting.',
    features: [
      '1.5% Copper addition creates exceptional resistance in sulfuric acid media',
      'High nickel content (23-28%) prevents chloride stress corrosion cracking',
      'PREN ≥ 35 delivers superior resistance to localized pitting in seawater',
      'Precision machined to tight ASME B16.5 dimensional tolerances'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500',
      facing: 'Raised Face (RF 125-250 Ra), RTJ',
      testing: 'ASTM G48 Pitting Corrosion, 100% PMI, Ultrasonic, Hydro'
    },
    mechanical: {
      tensile: '≥ 490 MPa',
      yield: '≥ 220 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 192 HBW (90 HRB)',
      maxTemp: '400°C'
    },
    chemistry: {
      cr: '19.0 - 23.0%',
      ni: '23.0 - 28.0%',
      mo: '4.00 - 5.00%',
      cu: '1.00 - 2.00%',
      c: '≤ 0.020%',
      mn: '≤ 2.00%',
      n: '≤ 0.10%'
    },
    applications: [
      'Sulfuric acid cooling plants and phosphoric acid reactors',
      'Flue gas desulfurization (FGD) scrubber piping and nozzles',
      'Offshore brackish and seawater cooling headers',
      'Bleaching plants in pulp and paper manufacturing'
    ]
  }
];

export const FLANGES_CARBON_STEEL_GRADES = [
  {
    id: 'astm-a105',
    slug: 'astm-a105',
    aliases: ['a105', 'astm-a105n', 'a105n', 'cs-flange', 'carbon-steel-flange'],
    name: 'ASTM A105 / A105N Carbon Steel Flange',
    specification: 'ASTM A105 / ASME SA105',
    grade: 'Grade A105 / A105N (Normalized)',
    class: 'Class 150 - 2500# (PN 20 - PN 420)',
    code: 'A105N FORGED CS',
    badge: 'GENERAL CARBON STEEL',
    uns: 'UNS K03504',
    din: '1.0460 (C22.8 / P250GH)',
    productForm: 'Forged Flange (Weld Neck, Slip-On, Blind, Threaded, Socket Weld)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A105/A105M, MSS SP-44',
    shortDesc: 'The primary forging specification for ambient- to higher-temperature carbon steel piping flanges in oil, gas, and power lines.',
    fullDesc: 'Hot-forged carbon steel flange supplied in normalized heat-treated condition (A105N). Formulated with balanced carbon and manganese to ensure high tensile strength, dependable ductility, and sound field weldability.',
    features: [
      'Full normalization heat treatment ensures uniform grain structure & toughness',
      'Standard carbon equivalent CE ≤ 0.43 for reliable field girth welding',
      'Tested to withstand hydro pressures up to 1.5x cold working pressure rating',
      'Certified EN 10204 3.1 with complete mill heat analysis and MTC'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 60" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)',
      testing: '100% Magnetic Particle (MT), Ultrasonic (UT), Hardness ≤ 187 HBW'
    },
    mechanical: {
      tensile: '≥ 485 MPa (70,000 psi)',
      yield: '≥ 250 MPa (36,000 psi)',
      elongation: '≥ 22% in 2"',
      hardness: '137 - 187 HBW',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.35%',
      mn: '0.60 - 1.05%',
      p: '≤ 0.035%',
      s: '≤ 0.040%',
      si: '0.10 - 0.35%',
      cu: '≤ 0.40%',
      ni: '≤ 0.40%',
      cr: '≤ 0.30%'
    },
    applications: [
      'Petrochemical refinery crude distillation headers',
      'Thermal power generation main steam and condensate loops',
      'Natural gas transmission line metering and valve skids',
      'Industrial utility air, water, and steam manifold headers'
    ]
  },
  {
    id: 'astm-a350-lf2',
    slug: 'astm-a350-lf2',
    aliases: ['a350-lf2', 'lf2', 'astm-a350-lf2-cl1', 'low-temp-flange'],
    name: 'ASTM A350 LF2 Class 1 Flange',
    specification: 'ASTM A350 / ASME SA350',
    grade: 'Grade LF2 Class 1',
    class: 'Class 150 - 2500#',
    code: 'A350 LF2 -46°C CHARPY',
    badge: 'LOW TEMP -46°C IMPACT',
    uns: 'UNS K03011',
    din: '1.0566 (TStE 355 / P355NL1)',
    productForm: 'Forged Flange (Weld Neck, Blind, Slip-On)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A350/A350M, NACE MR0175',
    shortDesc: 'Low-temperature normalized carbon steel forged flange with mandatory Charpy V-Notch impact testing down to -46°C.',
    fullDesc: 'Fine-grained aluminum-killed carbon steel forging intended for low-temperature service. Subjected to mandatory Charpy V-notch impact testing at -46°C (-50°F) to ensure immunity to catastrophic brittle fracture under cold operating conditions.',
    features: [
      'Charpy V-Notch impact energy guaranteed ≥ 20 J (15 ft-lbf) avg at -46°C',
      'Normalized or quenched & tempered heat treatment for fine ferritic microstructure',
      'Fully compliant with NACE MR0175 / ISO 15156 sour service hardness limits',
      'Precision machined gasket seating with RTJ ring groove geometry'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 48" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint (RTJ)',
      testing: 'Charpy V-Notch at -46°C, 100% Magnetic Particle, Ultrasonic, PMI'
    },
    mechanical: {
      tensile: '485 - 655 MPa (70,000 - 95,000 psi)',
      yield: '≥ 250 MPa (36,000 psi)',
      elongation: '≥ 22% in 2"',
      hardness: '≤ 197 HBW (≤ 22 HRC NACE)',
      maxTemp: '425°C',
      impactTest: '≥ 20 J avg at -46°C (min 16 J individual)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.60 - 1.35%',
      p: '≤ 0.035%',
      s: '≤ 0.040%',
      si: '0.15 - 0.30%',
      ce: '≤ 0.45%'
    },
    applications: [
      'Arctic & sub-zero natural gas gathering pipelines',
      'Liquefied petroleum gas (LPG) storage terminal headers',
      'Refrigeration process chiller and ammonia piping networks',
      'Refinery low-temperature catalytic extraction systems'
    ]
  },
  {
    id: 'astm-a694-f52',
    slug: 'astm-a694-f52',
    aliases: ['a694-f52', 'f52-flange', 'astm-a694-f52-flange'],
    name: 'ASTM A694 F52 High Yield Flange',
    specification: 'ASTM A694 / ASME SA694',
    grade: 'Grade F52 (SMYS 52,000 psi)',
    class: 'Class 150 - 2500#',
    code: 'A694 F52 HIGH YIELD',
    badge: 'CROSS-COUNTRY PIPELINE',
    uns: 'UNS K03014',
    din: '1.8902 (StE 355.7)',
    productForm: 'Forged Flange (High-Yield Weld Neck & Blind)',
    standards: 'MSS SP-44, ASME B16.5, ASME B16.47, ASTM A694',
    shortDesc: 'High-yield carbon steel forged flange with minimum 360 MPa (52 ksi) yield strength engineered for cross-country transmission lines.',
    fullDesc: 'High-yield forged carbon/micro-alloy steel flange designed to match the high yield strength of API 5L X52 transmission pipelines. Enables thinner flange hub walls and optimized line pipe matching under high operating pressure.',
    features: [
      'Specified Minimum Yield Strength (SMYS) of 360 MPa (52,000 psi)',
      'Directly matches API 5L Grade X52 line pipe wall thickness',
      'Quenched and tempered heat treatment ensuring high impact toughness',
      'Precision weld bevel machining for automated pipeline orbital welding'
    ],
    specs: {
      sizeRange: '2" NB to 60" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500',
      facing: 'Raised Face (RF), Ring Type Joint (RTJ)',
      testing: 'Yield & Tensile Verification, Charpy V-Notch at 0°C/-20°C, 100% UT'
    },
    mechanical: {
      tensile: '≥ 455 MPa (66,000 psi)',
      yield: '≥ 360 MPa (52,000 psi)',
      elongation: '≥ 20% in 2"',
      hardness: '≤ 235 HBW',
      maxTemp: '300°C'
    },
    chemistry: {
      c: '≤ 0.26%',
      mn: '≤ 1.60%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.35%',
      ce: '≤ 0.43%'
    },
    applications: [
      'High-pressure cross-country crude oil transmission pipelines',
      'Natural gas trunk pipelines and compressor station headers',
      'Offshore pipeline riser tie-in flanges and PLEM manifolds',
      'High-pressure gas storage and metering skids'
    ]
  },
  {
    id: 'astm-a694-f65',
    slug: 'astm-a694-f65',
    aliases: ['a694-f65', 'f65-flange', 'astm-a694-f65-flange'],
    name: 'ASTM A694 F65 High Yield Flange',
    specification: 'ASTM A694 / ASME SA694',
    grade: 'Grade F65 (SMYS 65,000 psi)',
    class: 'Class 300 - 2500#',
    code: 'A694 F65 450 MPA YIELD',
    badge: 'X65 PIPELINE MATCH',
    uns: 'UNS K03014 High Tensile',
    din: '1.8905 (StE 460.7)',
    productForm: 'Forged Flange (Weld Neck, Blind)',
    standards: 'MSS SP-44, ASME B16.47, ASME B16.5, ASTM A694',
    shortDesc: 'Extra-high yield 450 MPa (65 ksi) forged steel flange engineered to connect with API 5L X65 heavy-wall high-pressure gas pipelines.',
    fullDesc: 'Micro-alloyed carbon-manganese forged flange heat treated by quenching and tempering. Engineered with additions of Vanadium and Niobium to achieve minimum yield strength of 450 MPa (65,000 psi) while maintaining ductile fracture toughness.',
    features: [
      'Minimum Yield Strength of 450 MPa (65,000 psi) matching API 5L X65 pipe',
      'Micro-alloyed chemistry ensures high Charpy impact values down to -30°C',
      'Strict Carbon Equivalent (CE ≤ 0.43) for reliable on-site pipeline girth welding',
      'Heavy-wall RTJ weld neck configurations for extreme transmission pressures'
    ],
    specs: {
      sizeRange: '2" NB to 60" NB',
      pressureRating: 'Class 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint',
      testing: '100% Ultrasonic examination, Charpy impact at -30°C, Tensile, MT'
    },
    mechanical: {
      tensile: '≥ 530 MPa (77,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 18% in 2"',
      hardness: '≤ 250 HBW',
      maxTemp: '300°C'
    },
    chemistry: {
      c: '≤ 0.26%',
      mn: '≤ 1.65%',
      v: '≤ 0.11%',
      nb: '≤ 0.08%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.35%'
    },
    applications: [
      'Deepwater offshore gas pipeline subsea manifold connections',
      'Ultra-high-pressure natural gas transmission lines (150+ Bar)',
      'Subsea tie-in spools and high-stress anchor flanges',
      'Gas gathering export terminals and riser base manifolds'
    ]
  }
];

export const FLANGES_ALLOY_STEEL_GRADES = [
  {
    id: 'astm-a182-f11',
    slug: 'astm-a182-f11',
    aliases: ['f11', 'a182-f11', 'astm-a182-f11-cl2', 'alloy-steel-f11-flange'],
    name: 'ASTM A182 F11 Class 2 Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F11 Class 2 (1.25Cr - 0.5Mo)',
    class: 'Class 150 - 2500#',
    code: 'A182 F11 1.25CR ALLOY',
    badge: '570°C CREEP RESISTANT',
    uns: 'UNS K11572',
    din: '1.7335 (13CrMo4-5)',
    productForm: 'Forged Flange (Weld Neck, Blind, Slip-On, Threaded)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, IBR Certified',
    shortDesc: '1.25% Chromium, 0.5% Molybdenum low-alloy forged flange engineered for high-temperature steam headers up to 570°C.',
    fullDesc: 'Chromium-molybdenum forged alloy steel flange heat treated by normalization and tempering. Provides resistance to creep deformation, thermal fatigue, and graphitization under sustained high steam pressure.',
    features: [
      'Resistant to graphitization and creep rupture up to 570°C operating temperature',
      'Approved under Indian Boiler Regulations (IBR) with Form III-C certification',
      'High resistance to hydrogen embrittlement in elevated-pressure refineries',
      'Supplied in normalized and tempered condition ensuring homogeneous hardness'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 48" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint',
      testing: '100% PMI, Hardness testing (143-207 HBW), Hydrostatic, Ultrasonic'
    },
    mechanical: {
      tensile: '≥ 485 MPa (70,000 psi)',
      yield: '≥ 275 MPa (40,000 psi)',
      elongation: '≥ 20% in 2"',
      hardness: '143 - 207 HBW',
      maxTemp: '570°C'
    },
    chemistry: {
      cr: '1.00 - 1.50%',
      mo: '0.44 - 0.65%',
      c: '0.10 - 0.20%',
      mn: '0.30 - 0.80%',
      si: '0.50 - 1.00%',
      p: '≤ 0.040%',
      s: '≤ 0.040%'
    },
    applications: [
      'Fossil power plant superheated steam piping manifolds',
      'Petroleum refinery catalytic reformer and hydrotreater lines',
      'Boiler drum nozzle flanges and steam generation loops',
      'High-pressure thermal fluid distribution systems'
    ]
  },
  {
    id: 'astm-a182-f22',
    slug: 'astm-a182-f22',
    aliases: ['f22', 'a182-f22', 'astm-a182-f22-cl3', 'alloy-steel-f22-flange'],
    name: 'ASTM A182 F22 Class 3 Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F22 Class 3 (2.25Cr - 1.0Mo)',
    class: 'Class 150 - 2500#',
    code: 'A182 F22 2.25CR STEAM',
    badge: '600°C SUPERCRITICAL',
    uns: 'UNS K21590',
    din: '1.7380 (10CrMo9-10)',
    productForm: 'Forged Flange (Weld Neck, Blind, RTJ)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, IBR Certified',
    shortDesc: '2.25% Chromium, 1.0% Molybdenum forged alloy flange delivering elevated creep-rupture strength up to 600°C.',
    fullDesc: 'Heavy-duty 2.25Cr-1Mo forged alloy steel flange extensively specified for critical high-pressure steam generators and hydrocracker reactors. Provides elevated resistance to high-temperature hydrogen attack (Nelson curve compliance).',
    features: [
      'Superior creep-rupture endurance at operating temperatures up to 600°C',
      'High resistance to high-pressure hydrogen attack in hydroprocessing units',
      'Class 3 heat treatment (normalized and tempered) ensures high yield strength (≥ 310 MPa)',
      'IBR Form III-C certification and EN 10204 3.1 mill test certificates'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 48" NB (B16.47)',
      pressureRating: 'Class 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint (RTJ)',
      testing: 'Hot Tensile Verification, 100% Ultrasonic, PMI Spectro, Hydrostatic'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 310 MPa (45,000 psi)',
      elongation: '≥ 20% in 2"',
      hardness: '156 - 207 HBW',
      maxTemp: '600°C'
    },
    chemistry: {
      cr: '2.00 - 2.50%',
      mo: '0.87 - 1.13%',
      c: '0.05 - 0.15%',
      mn: '0.30 - 0.60%',
      si: '≤ 0.50%',
      p: '≤ 0.040%',
      s: '≤ 0.040%'
    },
    applications: [
      'Supercritical fossil fuel power boiler main steam headers',
      'Refinery catalytic hydrocracker reactor inlet and outlet nozzles',
      'Syngas generator waste heat boiler high-pressure connections',
      'Heavy oil hydrodesulfurization unit high-temperature lines'
    ]
  },
  {
    id: 'astm-a182-f91',
    slug: 'astm-a182-f91',
    aliases: ['f91', 'a182-f91', 'astm-a182-f91-flange', 'p91-flange'],
    name: 'ASTM A182 F91 Supercritical Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F91 (9Cr - 1Mo - V CSEF)',
    class: 'Class 600 - 2500#',
    code: 'A182 F91 CSEF 650°C',
    badge: 'ULTRA SUPERCRITICAL',
    uns: 'UNS K91560',
    din: '1.4903 (X10CrMoVNb9-1)',
    productForm: 'Forged Flange (High-Pressure Weld Neck & Blind)',
    standards: 'ASME B16.5, ASTM A182, EN 10222-2, IBR Form III-C',
    shortDesc: 'Creep Strength Enhanced Ferritic (CSEF) 9Cr-1Mo alloy flange with Vanadium and Niobium for ultra-supercritical steam systems up to 650°C.',
    fullDesc: 'Advanced martensitic alloy steel flange modified with Vanadium, Niobium, and Nitrogen. Provides nearly double the allowable design stress of F22 at 600°C, enabling substantially lighter flange dimensions and reduced thermal fatigue.',
    features: [
      'Nearly double the creep rupture stress of standard F22 at 600°C',
      'Allows reduced flange section thickness, significantly lowering thermal stress',
      'Strict control of tramp elements (Sn, Sb, As, Cu) preventing temper embrittlement',
      'Strictly austenitized at 1040-1090°C and tempered at 730-800°C'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint',
      testing: '100% Ultrasonic (UT), Hardness 190-248 HBW, Optical Emission PMI'
    },
    mechanical: {
      tensile: '585 - 760 MPa',
      yield: '≥ 415 MPa (60,000 psi)',
      elongation: '≥ 20% in 2"',
      hardness: '190 - 248 HBW',
      maxTemp: '650°C'
    },
    chemistry: {
      cr: '8.00 - 9.50%',
      mo: '0.85 - 1.05%',
      v: '0.18 - 0.25%',
      nb: '0.06 - 0.10%',
      n: '0.03 - 0.07%',
      c: '0.08 - 0.12%'
    },
    applications: [
      'Ultra-supercritical power station main steam and hot reheat lines',
      'High-pressure steam turbine bypass valve connection flanges',
      'Severe thermal cycling boiler headers and superheater manifolds',
      'Hydrogen reforming synthesis furnaces operating at extreme pressures'
    ]
  }
];

export const FLANGES_DUPLEX_GRADES = [
  {
    id: 'astm-a182-f51',
    slug: 'astm-a182-f51',
    aliases: ['f51', 'a182-f51', 'duplex-2205-flange', 's31803-flange', 's32205-flange'],
    name: 'ASTM A182 F51 / F60 (Duplex 2205) Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F51 / F60 (UNS S31803 / S32205)',
    class: 'Class 150 - 2500#',
    code: 'A182 F51 DUPLEX 2205',
    badge: 'DOUBLE YIELD STRENGTH',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Forged Flange (Weld Neck, Blind, Slip-On, RTJ)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic balanced duplex forged flange delivering double the yield strength of 316L and supreme resistance to stress corrosion cracking.',
    fullDesc: 'Dual-phase 22% Chromium, 5% Nickel, 3% Molybdenum forged duplex stainless steel flange. Features a 50/50 austenitic-ferritic microstructure providing minimum yield strength of 450 MPa and exceptional resistance to chloride stress corrosion cracking.',
    features: [
      'Minimum yield strength (≥ 450 MPa) is more than double standard 316L',
      'PREN ≥ 35 guarantees high resistance to localized pitting in seawater',
      'Balanced 45-55% ferrite phase distribution verified by metallography',
      'Qualified for offshore sour oilfield operations under NACE MR0175'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 36" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint (RTJ)',
      testing: 'ASTM A923 Method C (Ferric Chloride test at 25°C), 100% UT, PMI'
    },
    mechanical: {
      tensile: '≥ 655 MPa (95,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 25% in 2"',
      hardness: '≤ 290 HBW (≤ 28 HRC)',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '22.0 - 23.0%',
      ni: '4.5 - 6.5%',
      mo: '3.0 - 3.5%',
      n: '0.14 - 0.20%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%'
    },
    applications: [
      'Offshore oil & gas subsea manifolds and Christmas tree tie-ins',
      'Seawater reverse osmosis desalination high-pressure pump headers',
      'Chemical tanker deck piping and aggressive organic acid reactors',
      'Refinery wet gas amine scrubbers and sweetening units'
    ]
  },
  {
    id: 'astm-a182-f53',
    slug: 'astm-a182-f53',
    aliases: ['f53', 'a182-f53', 'super-duplex-2507-flange', 's32750-flange'],
    name: 'ASTM A182 F53 (Super Duplex 2507) Flange',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F53 (UNS S32750 / 2507)',
    class: 'Class 150 - 2500#',
    code: 'A182 F53 PREN ≥ 42',
    badge: 'PREN ≥ 42 SUPER DUPLEX',
    uns: 'UNS S32750',
    din: '1.4410 (X2CrNiMoN25-7-4)',
    productForm: 'Forged Flange (Weld Neck, Blind, RTJ)',
    standards: 'ASME B16.5, ASME B16.47, ASTM A182, NORSOK M-650',
    shortDesc: '25% Cr super duplex forged flange with PREN ≥ 42 designed for subsea risers, aggressive chemical vessels, and chlorinated seawater.',
    fullDesc: 'Forged super duplex stainless steel flange engineered for mission-critical marine and aggressive chemical environments. Combines 25% Chromium, 4% Molybdenum, and 0.28% Nitrogen to deliver high tensile strength (≥ 750 MPa) and immunity to pitting attack.',
    features: [
      'Guaranteed PREN ≥ 42 provides supreme resistance to crevice corrosion',
      'High minimum yield strength (≥ 550 MPa) enables compact high-pressure designs',
      'Compliant with strict NORSOK M-650 and MDS D54 mill manufacturing codes',
      'Corrosion tested to ASTM G48 Method A with zero pitting at 50°C'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (B16.5) / 26" to 36" NB (B16.47)',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint',
      testing: 'ASTM G48 Method A at 50°C, 100% Ultrasonic, PMI, Hardness ≤ 310 HBW'
    },
    mechanical: {
      tensile: '≥ 750 MPa (110,000 psi)',
      yield: '≥ 550 MPa (80,000 psi)',
      elongation: '≥ 15% in 2"',
      hardness: '≤ 310 HBW (≤ 32 HRC)',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '6.0 - 8.0%',
      mo: '3.0 - 5.0%',
      n: '0.24 - 0.32%',
      c: '≤ 0.030%',
      cu: '≤ 0.50%'
    },
    applications: [
      'Deepwater subsea flowline tie-in spools and riser manifolds',
      'Offshore deluge firewater piping and chlorinated seawater pumps',
      'Geothermal high-salinity brine re-injection systems',
      'High-pressure acid leach (HPAL) autoclaves in nickel mining'
    ]
  }
];

export const FLANGES_NICKEL_GRADES = [
  {
    id: 'astm-b564-inconel-625',
    slug: 'astm-b564-inconel-625',
    aliases: ['inconel-625-flange', 'b564-n06625', 'inconel-625'],
    name: 'ASTM B564 Inconel 625 (UNS N06625) Flange',
    specification: 'ASTM B564 / ASME SB564',
    grade: 'UNS N06625 (Alloy 625)',
    class: 'Class 150 - 2500#',
    code: 'B564 N06625 HIGH STRENGTH',
    badge: 'SEVERE MARINE & ACID',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'Forged Flange (Weld Neck, Blind, RTJ)',
    standards: 'ASME B16.5, ASTM B564, NACE MR0175',
    shortDesc: 'Solid-solution strengthened nickel-chromium-molybdenum forged flange with Niobium for extreme subsea and sour chemical service.',
    fullDesc: 'High-performance nickel-based superalloy forged flange. Fortified with 9% Molybdenum and 3.6% Niobium within a nickel-chromium matrix to provide exceptional strength without requiring hardening heat treatments, alongside supreme resistance to pitting, crevice attack, and sour H2S cracking.',
    features: [
      'High tensile strength (≥ 827 MPa) retained from cryogenic to 980°C',
      'Immunity to chloride-induced stress corrosion cracking',
      'Virtually immune to pitting and crevice corrosion in marine environments',
      'Fully qualified under NACE MR0175 / ISO 15156 for extreme sour gas wells'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500, 2500',
      facing: 'Raised Face, Ring Type Joint',
      testing: '100% Radiography / UT, PMI Spectro, Hydrostatic, Microstructure'
    },
    mechanical: {
      tensile: '≥ 827 MPa (120,000 psi)',
      yield: '≥ 414 MPa (60,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 250 HBW',
      maxTemp: '980°C'
    },
    chemistry: {
      ni: '≥ 58.0%',
      cr: '20.0 - 23.0%',
      mo: '8.0 - 10.0%',
      nb: '3.15 - 4.15%',
      fe: '≤ 5.0%',
      c: '≤ 0.10%'
    },
    applications: [
      'Subsea wellhead christmas trees and umbilical termination units',
      'Sour gas production lines containing high H2S, CO2, and free chlorides',
      'Naval submarine seawater exhaust and piping systems',
      'High-pressure chemical reactor vessel nozzles'
    ]
  },
  {
    id: 'astm-b564-hastelloy-c276',
    slug: 'astm-b564-hastelloy-c276',
    aliases: ['hastelloy-c276-flange', 'b564-n10276', 'hastelloy-c276'],
    name: 'ASTM B564 Hastelloy C276 (UNS N10276) Flange',
    specification: 'ASTM B564 / ASME SB564',
    grade: 'UNS N10276 (Alloy C-276)',
    class: 'Class 150 - 2500#',
    code: 'B564 N10276 CORROSION MASTER',
    badge: 'EXTREME ACID RESISTANT',
    uns: 'UNS N10276',
    din: '2.4819 (NiMo16Cr15W)',
    productForm: 'Forged Flange (Weld Neck, Blind)',
    standards: 'ASME B16.5, ASTM B564, NACE MR0175',
    shortDesc: 'Nickel-molybdenum-chromium alloy forged flange with tungsten, delivering supreme resistance to wet chlorine gas and severe boiling mineral acids.',
    fullDesc: 'Premier corrosion-resistant nickel superalloy forged flange. Engineered with 16% Molybdenum, 15.5% Chromium, and 3.5% Tungsten to resist pit-forming chlorides, strong oxidizers such as ferric and cupric chlorides, and aggressive reducing mineral acids.',
    features: [
      'Immune to wet chlorine gas, hypochlorite, and chlorine dioxide solutions',
      'Exceptional resistance to localized pitting and stress corrosion cracking',
      'Very low carbon and silicon content prevents grain boundary precipitation',
      'ASME Boiler and Pressure Vessel Code Section VIII approved'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600, 900, 1500',
      facing: 'Raised Face, Ring Type Joint',
      testing: 'ASTM G28 Intergranular Corrosion Test, 100% PMI, UT, Hydro'
    },
    mechanical: {
      tensile: '≥ 690 MPa (100,000 psi)',
      yield: '≥ 283 MPa (41,000 psi)',
      elongation: '≥ 40%',
      hardness: '≤ 220 HBW',
      maxTemp: '1040°C'
    },
    chemistry: {
      ni: 'Balance (≥ 54.0%)',
      mo: '15.0 - 17.0%',
      cr: '14.5 - 16.5%',
      fe: '4.0 - 7.0%',
      w: '3.0 - 4.5%',
      co: '≤ 2.5%',
      c: '≤ 0.010%'
    },
    applications: [
      'Flue gas desulfurization (FGD) scrubbers and damper ducting',
      'Chlor-alkali bleach chemical production reactors',
      'Sulfuric acid pickling lines and waste acid incineration',
      'Pharmaceutical synthesis vessels handling aggressive chlorides'
    ]
  }
];

export const FLANGES_TITANIUM_GRADES = [
  {
    id: 'astm-b381-grade-f2',
    slug: 'astm-b381-grade-f2',
    aliases: ['titanium-grade-2-flange', 'b381-f2', 'ti-gr2-flange'],
    name: 'ASTM B381 Grade F-2 Titanium Flange',
    specification: 'ASTM B381 / ASME SB381',
    grade: 'Grade F-2 (Commercially Pure CP-2)',
    class: 'Class 150 - 600#',
    code: 'B381 F-2 CP TITANIUM',
    badge: 'SEAWATER IMMUNE & LIGHT',
    uns: 'UNS R50400',
    din: '3.7035',
    productForm: 'Forged Flange (Weld Neck, Blind, Slip-On, Lap Joint)',
    standards: 'ASME B16.5, ASTM B381',
    shortDesc: 'Commercially pure titanium forged flange providing complete immunity to marine seawater pitting and 45% weight savings over steel.',
    fullDesc: 'Hot-forged unalloyed commercially pure Grade F-2 titanium flange. Combines moderate mechanical strength with extraordinary corrosion resistance in seawater, wet chlorine gas, organic acids, and oxidizing chloride salts.',
    features: [
      'Total immunity to general and localized crevice corrosion in seawater',
      'Approximately 45% lighter than steel flanges of identical dimensions',
      'Dense protective titanium dioxide passive film self-heals instantaneously',
      'Non-magnetic with high resistance to microbial-induced corrosion'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      pressureRating: 'Class 150, 300, 600',
      facing: 'Raised Face, Flat Face, Lap Joint with Titanium Stub End',
      testing: '100% Eddy Current / Ultrasonic, Pneumatic/Hydrostatic proof, PMI'
    },
    mechanical: {
      tensile: '≥ 345 MPa (50,000 psi)',
      yield: '275 - 450 MPa (40,000 - 65,000 psi)',
      elongation: '≥ 20%',
      hardness: '≤ 200 HBW',
      maxTemp: '315°C'
    },
    chemistry: {
      ti: 'Balance (≥ 99.2%)',
      fe: '≤ 0.30%',
      o: '≤ 0.25%',
      c: '≤ 0.08%',
      n: '≤ 0.03%',
      h: '≤ 0.015%'
    },
    applications: [
      'Coastal thermal power station seawater cooling manifolds',
      'Offshore platform titanium heat exchanger nozzle flanges',
      'Desalination multi-stage flash (MSF) evaporation headers',
      'Chlor-alkali bleaching plants and marine aquarium life support'
    ]
  }
];

// Comprehensive Flagship Flange Master List
export const FLANGES_GRADES = [
  ...FLANGES_CARBON_STEEL_GRADES,
  ...FLANGES_STAINLESS_STEEL_GRADES,
  ...FLANGES_ALLOY_STEEL_GRADES,
  ...FLANGES_DUPLEX_GRADES,
  ...FLANGES_NICKEL_GRADES,
  ...FLANGES_TITANIUM_GRADES
];
