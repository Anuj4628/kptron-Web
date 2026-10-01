/**
 * Research-Verified Butt Weld Fittings Specifications & Metallurgy
 * Standards: ASME B16.9, ASME B16.28, MSS SP-43, DIN 2605, EN 10253
 * Fittings: 90° Long/Short Radius Elbows, 45° Elbows, 180° Returns, Equal/Reducing Tees,
 * Concentric/Eccentric Reducers, End Caps, Stub Ends (Type A, B, C)
 * Wall Schedules: SCH 5S, 10S, 40S, STD, 80S, XS, 160, XXS
 */

export const BUTT_WELD_FITTINGS_CARBON_STEEL_GRADES = [
  {
    id: 'astm-a234-wpb',
    slug: 'astm-a234-wpb',
    aliases: ['a234-wpb', 'wpb', 'astm-a234-wpb-fitting', 'cs-elbow-wpb'],
    name: 'ASTM A234 WPB Butt Weld Fitting',
    specification: 'ASTM A234 / ASME SA234',
    grade: 'Grade WPB (Wrought Carbon Steel)',
    class: 'Seamless & Welded (SCH 10 to SCH XXS)',
    code: 'A234 WPB SEAMLESS/WELDED',
    badge: 'INDUSTRY WORKHORSE',
    uns: 'UNS K03006',
    din: '1.0405 (St 45.8 / P265GH)',
    productForm: 'Butt Weld Fittings (90° Elbow, 45° Elbow, Tee, Reducer, Cap)',
    standards: 'ASME B16.9, ASME B16.28, ASTM A234/A234M, MSS SP-25',
    shortDesc: 'The primary wrought carbon steel specification for moderate- and elevated-temperature industrial piping fittings.',
    fullDesc: 'Manufactured by hot forming and precision extrusion from seamless steel pipes or plates. Fully heat treated by normalizing or stress relieving to ensure high ductile toughness and sound field weldability.',
    features: [
      'Standard carbon equivalent CE ≤ 0.43 ensures crack-free field girth welding',
      'Full normalized or stress-relieved heat treatment for homogeneous structure',
      'Smooth hydrodynamic inner radius minimizing flow turbulence and pressure loss',
      'Full material test certification (EN 10204 3.1) with 100% NDT inspection'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless) / 26" to 48" NB (Welded with 100% RT)',
      schedules: 'SCH 10, SCH 20, SCH 40, STD, SCH 80, XS, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25 37.5° with 1.6mm root face)',
      testing: '100% Radiography on welded seams, Magnetic Particle (MT), PMI, Hydro'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 197 HBW',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.29 - 1.06%',
      p: '≤ 0.050%',
      s: '≤ 0.058%',
      si: '≥ 0.10%',
      cu: '≤ 0.40%',
      ni: '≤ 0.40%',
      cr: '≤ 0.40%'
    },
    applications: [
      'Petroleum refinery piping systems and crude fluid pipelines',
      'Thermal power generation steam distribution and condensate loops',
      'Chemical process plant utility networks and water headers',
      'Offshore and onshore oil & gas gathering manifolds'
    ]
  },
  {
    id: 'astm-a420-wpl6',
    slug: 'astm-a420-wpl6',
    aliases: ['a420-wpl6', 'wpl6', 'astm-a420-wpl6-fitting', 'low-temp-fitting'],
    name: 'ASTM A420 WPL6 Low Temperature Fitting',
    specification: 'ASTM A420 / ASME SA420',
    grade: 'Grade WPL6 (-46°C Impact Tested)',
    class: 'Low Temperature Service (SCH STD to XXS)',
    code: 'A420 WPL6 -46°C CHARPY',
    badge: 'LOW TEMP -46°C CERTIFIED',
    uns: 'UNS K03011 Wrought',
    din: '1.0566 (TTSt 35 N / P355NL1)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers, Caps)',
    standards: 'ASME B16.9, ASTM A420/A420M, NACE MR0175',
    shortDesc: 'Normalized fine-grain wrought carbon steel fitting verified by Charpy impact testing down to -46°C for sub-zero piping.',
    fullDesc: 'Manufactured from fine-grained, killed carbon steel specifically designed for low-temperature service. Each production lot is verified by Charpy V-notch impact testing at -46°C to prevent brittle fracture under sub-zero operating environments.',
    features: [
      'Mandatory Charpy V-Notch impact energy guaranteed ≥ 20 J at -46°C',
      'Normalized or quenched and tempered heat treatment ensures fine microstructure',
      'Fully compliant with NACE MR0175 / ISO 15156 for sour gas environments',
      'Precision CNC beveled ends matching ASTM A333 Grade 6 low-temp pipe'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless) / 26" to 48" NB (Welded)',
      schedules: 'SCH 40, STD, SCH 80, XS, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'Charpy V-Notch at -46°C, 100% RT on weld seams, Ultrasonic, MT'
    },
    mechanical: {
      tensile: '415 - 655 MPa (60,000 - 95,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 197 HBW',
      maxTemp: '425°C',
      impactTest: '≥ 20 J avg at -46°C (min 16 J individual)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.50 - 1.35%',
      p: '≤ 0.035%',
      s: '≤ 0.040%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Refrigeration process chiller and liquefied hydrocarbon transfer lines',
      'Arctic gas pipeline compressor stations and header loops',
      'Liquefied petroleum gas (LPG) storage and vaporization manifolds',
      'Low-temperature petrochemical refining fractionation units'
    ]
  },
  {
    id: 'mss-sp75-wphy52',
    slug: 'mss-sp75-wphy52',
    aliases: ['wphy52', 'wphy-52', 'mss-sp-75-wphy52', 'high-yield-fitting'],
    name: 'MSS SP-75 WPHY 52 High Yield Fitting',
    specification: 'MSS SP-75',
    grade: 'Grade WPHY 52 (SMYS 52,000 psi)',
    class: 'High Yield Transmission (SCH 40 to SCH 120)',
    code: 'MSS SP-75 WPHY 52',
    badge: 'HIGH YIELD 360 MPA',
    uns: 'High-Yield Micro-Alloyed Carbon Steel',
    din: '1.8902 (StE 355.7 TM)',
    productForm: 'High Test Butt Weld Fittings (90°/45° Elbows, Tees, Reducers)',
    standards: 'MSS SP-75, ASME B16.9, API 5L X52 Compatible',
    shortDesc: 'High-yield wrought carbon steel fitting with 360 MPa (52 ksi) minimum yield strength designed to match API 5L X52 transmission lines.',
    fullDesc: 'Hot-pressed and quench-tempered micro-alloyed carbon-manganese fitting. Formulated with controlled micro-alloy additions (V, Nb, Ti) to deliver high yield strength matching high-pressure cross-country pipeline operating stresses.',
    features: [
      'Specified Minimum Yield Strength (SMYS) of 360 MPa (52,000 psi)',
      'Direct metallurgical and dimensional match to API 5L Grade X52 line pipe',
      'Impact tested with Charpy V-notch energy ≥ 27 J at -20°C',
      'Strict Carbon Equivalent (CE ≤ 0.42) for automated pipeline girth welding'
    ],
    specs: {
      sizeRange: '2" NB to 48" NB',
      schedules: 'Wall thickness: 4.8 mm to 38.1 mm',
      ends: 'Beveled Ends (API 5L / ASME B16.25)',
      testing: 'Yield & Tensile, Charpy impact at -20°C, 100% Radiography, MT'
    },
    mechanical: {
      tensile: '≥ 455 MPa (66,000 psi)',
      yield: '≥ 360 MPa (52,000 psi)',
      elongation: '≥ 20% in 2"',
      hardness: '≤ 235 HBW',
      maxTemp: '300°C'
    },
    chemistry: {
      c: '≤ 0.20%',
      mn: '≤ 1.60%',
      v: '≤ 0.10%',
      nb: '≤ 0.06%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.35%'
    },
    applications: [
      'High-pressure cross-country natural gas and crude oil pipelines',
      'Gas compressor station piping headers and bypass loops',
      'Offshore gas transmission tie-in spools and manifolds',
      'Pipeline slug catcher manifolds and receiver traps'
    ]
  }
];

export const BUTT_WELD_FITTINGS_STAINLESS_STEEL_GRADES = [
  {
    id: 'astm-a403-wp304-wp304l',
    slug: 'astm-a403-wp304-wp304l',
    aliases: ['a403-wp304', 'wp304', 'wp304l', 'a403-wp304l', 'ss-304-fitting'],
    name: 'ASTM A403 WP304 / WP304L Fitting',
    specification: 'ASTM A403 / ASME SA403',
    grade: 'Grade WP304 / WP304L (Dual Certified)',
    class: 'Class WP-S (Seamless) / WP-W (Welded)',
    code: 'A403 WP304/L DUAL',
    badge: 'AUSTENITIC WORKHORSE',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Butt Weld Fittings (90° LR/SR Elbow, Tee, Reducer, Stub End)',
    standards: 'ASME B16.9, MSS SP-43, ASTM A403/A403M, EN 10253-4',
    shortDesc: 'Universal low-carbon austenitic stainless steel butt weld fitting eliminating carbide precipitation during welding.',
    fullDesc: 'Formed from seamless pipe or plate and solution annealed at 1040°C minimum followed by rapid water quenching. Low carbon content (C ≤ 0.030%) prevents sensitization and preserves corrosion resistance in the heat-affected zone of field welds.',
    features: [
      'Low carbon content eliminates carbide precipitation during pipe welding',
      'Supplied in Class WP-S (seamless) or WP-W (100% radiographed weld seam)',
      'Pickled and passivated surface finish for maximum corrosion resistance',
      'Compliant with ASME B16.9 center-to-face and dimensional tolerances'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless) / 26" to 48" NB (Welded)',
      schedules: 'SCH 5S, 10S, 40S, 80S (ASME B36.19M)',
      ends: 'Plain Square Cut (Light Wall) / Beveled Ends (SCH 40S+)',
      testing: '100% PMI Spectro, Hydrostatic proof, Liquid Penetrant (PT), RT'
    },
    mechanical: {
      tensile: '≥ 485 MPa (WP304L) / ≥ 515 MPa (WP304)',
      yield: '≥ 170 MPa (WP304L) / ≥ 205 MPa (WP304)',
      elongation: '≥ 28% in 2"',
      hardness: '≤ 187 HBW (90 HRB)',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 11.0%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Chemical fluid conveyance and process acid distribution piping',
      'Food, brewery, and beverage hygienic fluid lines',
      'Municipal water treatment and desalination utility headers',
      'Cryogenic liquefied gas (LNG / LOX) distribution lines (-196°C)'
    ]
  },
  {
    id: 'astm-a403-wp316-wp316l',
    slug: 'astm-a403-wp316-wp316l',
    aliases: ['a403-wp316', 'wp316', 'wp316l', 'a403-wp316l', 'ss-316-fitting'],
    name: 'ASTM A403 WP316 / WP316L Fitting',
    specification: 'ASTM A403 / ASME SA403',
    grade: 'Grade WP316 / WP316L (Dual Certified)',
    class: 'Class WP-S (Seamless) / WP-W (Welded)',
    code: 'A403 WP316/L MOLY FITTING',
    badge: 'MOLYBDENUM ACID RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers, Caps, Stub Ends)',
    standards: 'ASME B16.9, MSS SP-43, ASTM A403, EN 10253-4',
    shortDesc: '2.0-3.0% Molybdenum-bearing austenitic stainless butt weld fitting delivering high resistance to chloride pitting and industrial acids.',
    fullDesc: 'Engineered from hot-formed and solution-annealed molybdenum-bearing stainless steel. Delivers superior resistance to pitting, crevice attack, and stress cracking in marine, pharmaceutical, and aggressive acid environments compared to WP304.',
    features: [
      '2.0 - 3.0% Molybdenum content provides outstanding chloride pitting resistance',
      'Dual-certified WP316/WP316L chemistry satisfies both tensile requirements',
      'Solution annealed above 1040°C followed by rapid quenching to lock in austenitic phase',
      'Qualified under NACE MR0175 / ISO 15156 for sour oilfield applications'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless) / 26" to 48" NB (Welded)',
      schedules: 'SCH 5S, 10S, 40S, 80S, 160, XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% PMI, Liquid Penetrant (PT), 100% Radiography on welded seams'
    },
    mechanical: {
      tensile: '≥ 485 MPa (WP316L) / ≥ 515 MPa (WP316)',
      yield: '≥ 170 MPa (WP316L) / ≥ 205 MPa (WP316)',
      elongation: '≥ 28% in 2"',
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
      'Offshore oil & gas topside hydrocarbon and seawater piping',
      'Pharmaceutical synthesis bio-reactor fluid lines and manifolds',
      'Marine coastal wastewater and industrial brine discharge loops',
      'Chemical processing reactors handling sulfuric and phosphoric acids'
    ]
  },
  {
    id: 'astm-a403-wp321',
    slug: 'astm-a403-wp321',
    aliases: ['wp321', 'a403-wp321', 'ss-321-fitting'],
    name: 'ASTM A403 WP321 Fitting',
    specification: 'ASTM A403 / ASME SA403',
    grade: 'Grade WP321 (Titanium Stabilized)',
    class: 'Class WP-S / WP-W',
    code: 'A403 WP321 800°C HEAT',
    badge: 'TITANIUM STABILIZED',
    uns: 'UNS S32100',
    din: '1.4541 (X6CrNiTi18-10)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers)',
    standards: 'ASME B16.9, ASTM A403, EN 10253-4',
    shortDesc: 'Titanium-stabilized stainless fitting resisting intergranular sensitization across the 425°C to 850°C thermal range.',
    fullDesc: 'Manufactured with Titanium additions (Ti ≥ 5x(C+N)) to stabilize carbon as titanium carbides. Prevents chromium depletion along grain boundaries, ensuring high structural integrity and corrosion resistance in prolonged high-heat service.',
    features: [
      'Titanium stabilization prevents sensitization at 425-850°C continuous service',
      'Retains mechanical creep-rupture strength in boiler and furnace lines',
      'Pickled and passivated finish ensuring free surface chromium oxide formation',
      'Full mill test certification according to EN 10204 3.1'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S, 40S, 80S',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% PMI, PT, Ultrasonic, Intergranular Corrosion ASTM A262 Practice E'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 28%',
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
      'Refinery catalytic cracking units and thermal exhaust manifolds',
      'Power plant boiler superheater piping expansion loops',
      'Chemical reactor thermal expansion transitions',
      'Aerospace engine test exhaust ducting'
    ]
  }
];

export const BUTT_WELD_FITTINGS_ALLOY_STEEL_GRADES = [
  {
    id: 'astm-a234-wp11',
    slug: 'astm-a234-wp11',
    aliases: ['wp11', 'a234-wp11', 'alloy-steel-wp11-fitting'],
    name: 'ASTM A234 WP11 Class 1 Fitting',
    specification: 'ASTM A234 / ASME SA234',
    grade: 'Grade WP11 Class 1 (1.25Cr - 0.5Mo)',
    class: 'Class WP-S / WP-W (SCH 40 to XXS)',
    code: 'A234 WP11 1.25CR ALLOY',
    badge: '570°C CREEP RESISTANT',
    uns: 'UNS K11572',
    din: '1.7335 (13CrMo4-5)',
    productForm: 'Butt Weld Fittings (90°/45° Elbows, Tees, Reducers)',
    standards: 'ASME B16.9, ASTM A234, IBR Form III-C Certified',
    shortDesc: '1.25% Cr, 0.5% Mo creep-resistant alloy steel fitting engineered for high-temperature steam lines up to 570°C.',
    fullDesc: 'Hot-pressed and normalized-tempered low alloy chrome-moly fitting. Provides high creep rupture strength and resistance to graphitization in power plant steam loops and refinery hydroprocessing units.',
    features: [
      'Creep-rupture strength up to 570°C continuous steam service',
      'Approved under Indian Boiler Regulations (IBR) with Form III-C certification',
      'Normalized and tempered heat treatment ensures fine bainitic/ferritic microstructure',
      '100% Ultrasonic and Magnetic Particle tested'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% PMI, Hardness testing (143-207 HBW), Hydrostatic, UT'
    },
    mechanical: {
      tensile: '415 - 585 MPa',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 197 HBW',
      maxTemp: '570°C'
    },
    chemistry: {
      cr: '1.00 - 1.50%',
      mo: '0.44 - 0.65%',
      c: '0.05 - 0.15%',
      mn: '0.30 - 0.60%',
      si: '0.50 - 1.00%'
    },
    applications: [
      'Power generation high-pressure steam distribution headers',
      'Refinery hydrotreater and reformer piping expansion bends',
      'Boiler superheater loops and steam generator manifolds',
      'High-temperature petrochemical gas transfer conduits'
    ]
  },
  {
    id: 'astm-a234-wp22',
    slug: 'astm-a234-wp22',
    aliases: ['wp22', 'a234-wp22', 'alloy-steel-wp22-fitting'],
    name: 'ASTM A234 WP22 Class 1 Fitting',
    specification: 'ASTM A234 / ASME SA234',
    grade: 'Grade WP22 Class 1 (2.25Cr - 1.0Mo)',
    class: 'Class WP-S / WP-W',
    code: 'A234 WP22 2.25CR STEAM',
    badge: '600°C SUPERCRITICAL',
    uns: 'UNS K21590',
    din: '1.7380 (10CrMo9-10)',
    productForm: 'Butt Weld Fittings (90°/45° Elbows, Tees, Reducers)',
    standards: 'ASME B16.9, ASTM A234, IBR Certified',
    shortDesc: '2.25% Chromium, 1% Molybdenum fitting delivering high creep strength up to 600°C in high-pressure steam boilers.',
    fullDesc: 'Engineered from 2.25Cr-1Mo alloy steel and heat treated by full normalization and tempering. Extensively specified in supercritical fossil boilers and refinery hydrocrackers due to its resistance to high-pressure hydrogen attack.',
    features: [
      'High creep-rupture properties sustained up to 600°C operating temperature',
      'Resistant to high-temperature hydrogen attack (Nelson curve compliance)',
      'Supplied with full IBR Form III-C boiler certification',
      'Hot formed with uniform wall thickness at extrusion crotch'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'Hot Tensile, PMI Spectro, Hydrostatic, 100% UT'
    },
    mechanical: {
      tensile: '415 - 585 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 197 HBW',
      maxTemp: '600°C'
    },
    chemistry: {
      cr: '1.90 - 2.60%',
      mo: '0.87 - 1.13%',
      c: '0.05 - 0.15%',
      mn: '0.30 - 0.60%',
      si: '≤ 0.50%'
    },
    applications: [
      'Supercritical steam generator main steam piping transitions',
      'Petroleum catalytic hydrocracking process headers',
      'Nuclear secondary steam loops and heat exchanger headers',
      'Waste-to-energy boiler superheater header manifolds'
    ]
  },
  {
    id: 'astm-a234-wp91',
    slug: 'astm-a234-wp91',
    aliases: ['wp91', 'a234-wp91', 'csef-fitting'],
    name: 'ASTM A234 WP91 Supercritical Fitting',
    specification: 'ASTM A234 / ASME SA234',
    grade: 'Grade WP91 (9Cr - 1Mo - V CSEF)',
    class: 'Class WP-S Seamless Heavy Wall',
    code: 'A234 WP91 650°C CSEF',
    badge: 'ULTRA SUPERCRITICAL',
    uns: 'UNS K91560',
    din: '1.4903 (X10CrMoVNb9-1)',
    productForm: 'Butt Weld Fittings (Heavy Wall Elbows, Tees, Reducers)',
    standards: 'ASME B16.9, ASTM A234, IBR Certified',
    shortDesc: 'Creep Strength Enhanced Ferritic (CSEF) alloy fitting with Vanadium and Niobium for ultra-supercritical steam up to 650°C.',
    fullDesc: 'Modified 9Cr-1Mo alloy steel fitting with controlled additions of Vanadium, Niobium, and Nitrogen. Provides nearly double the creep strength of WP22 at 600°C, enabling reduced wall thickness and lower thermal stress under severe thermal cycling.',
    features: [
      'Nearly double the creep rupture stress of standard WP22 at 600°C',
      'Enables thinner fitting wall thickness, reducing thermal stress during cycling',
      'Strict control of trace elements (Sn, Sb, As, Cu) preventing temper embrittlement',
      'Austenitized at 1040-1090°C and tempered at 730-800°C'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 80, SCH 160, SCH XXS (Heavy Wall)',
      ends: 'Precision Beveled (Narrow Groove for Orbital Welding)',
      testing: '100% Ultrasonic (UT), Hardness 190-250 HBW, PMI'
    },
    mechanical: {
      tensile: '585 - 760 MPa',
      yield: '≥ 415 MPa (60,000 psi)',
      elongation: '≥ 20%',
      hardness: '190 - 250 HBW',
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
      'Ultra-supercritical power plant main steam and hot reheat piping',
      'High-pressure steam turbine bypass piping transitions',
      'Severe thermal cycling boiler headers and superheater manifolds',
      'Advanced hydrogen reforming units operating at elevated temperatures'
    ]
  }
];

export const BUTT_WELD_FITTINGS_DUPLEX_GRADES = [
  {
    id: 'astm-a815-uns-s31803-s32205',
    slug: 'astm-a815-uns-s31803-s32205',
    aliases: ['duplex-2205-fitting', 'a815-s31803', 'a815-s32205', 'a815-duplex'],
    name: 'ASTM A815 UNS S31803 / S32205 (Duplex 2205) Fitting',
    specification: 'ASTM A815 / ASME SA815',
    grade: 'UNS S31803 / UNS S32205 (2205)',
    class: 'Class WP-S / WP-W',
    code: 'A815 DUPLEX 2205',
    badge: 'DOUBLE YIELD STRENGTH',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers, Caps)',
    standards: 'ASME B16.9, ASTM A815, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic balanced duplex stainless fitting offering double the yield strength of 316L and supreme SCC resistance.',
    fullDesc: 'Dual-phase 22% Chromium, 5% Nickel, 3% Molybdenum wrought duplex stainless steel fitting. Features balanced 50/50 austenite-ferrite microstructure providing high yield strength (≥ 450 MPa) and resistance to chloride stress corrosion cracking.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L stainless steel',
      'PREN ≥ 35 ensures high resistance to localized pitting in seawater',
      'Balanced 45-55% ferrite phase distribution verified by metallography',
      'Qualified under NACE MR0175 / ISO 15156 for offshore sour service'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S, 40S, 80S, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'ASTM A923 Method C (Ferric Chloride Corrosion), 100% PMI, UT'
    },
    mechanical: {
      tensile: '≥ 655 MPa (95,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 25%',
      hardness: '≤ 290 HBW (≤ 28 HRC)',
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
      'Offshore oil & gas subsea manifolds and production risers',
      'Seawater reverse osmosis desalination high-pressure headers',
      'Chemical tanker deck piping and sulfuric acid wash towers',
      'Wet gas amine scrubbers and sweetening units'
    ]
  },
  {
    id: 'astm-a815-uns-s32750',
    slug: 'astm-a815-uns-s32750',
    aliases: ['super-duplex-2507-fitting', 'a815-s32750', '2507-fitting'],
    name: 'ASTM A815 UNS S32750 (Super Duplex 2507) Fitting',
    specification: 'ASTM A815 / ASME SA815',
    grade: 'UNS S32750 (2507 Super Duplex)',
    class: 'Class WP-S / WP-W',
    code: 'A815 S32750 PREN ≥ 42',
    badge: 'PREN ≥ 42 EXTREME',
    uns: 'UNS S32750',
    din: '1.4410 (X2CrNiMoN25-7-4)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers, Caps)',
    standards: 'ASME B16.9, ASTM A815, NORSOK M-650',
    shortDesc: '25% Cr super duplex butt weld fitting with PREN ≥ 42 designed for subsea risers, aggressive chemical vessels, and chlorinated seawater.',
    fullDesc: 'High-alloy super duplex stainless steel fitting engineered for extreme environments. Combines 25% Chromium, 4% Molybdenum, and 0.28% Nitrogen to attain a Pitting Resistance Equivalent Number (PREN) exceeding 42 and yield strength ≥ 550 MPa.',
    features: [
      'Guaranteed PREN ≥ 42 for supreme resistance to pitting in seawater',
      'High mechanical tensile strength (≥ 750 MPa) enabling thinner walls',
      'Exceptional resistance to erosion corrosion in high-velocity flows',
      'NORSOK M-650 qualified mill manufacturing'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S, 40S, 80S, SCH XXS',
      ends: 'Beveled Ends',
      testing: 'ASTM G48 Method A Corrosion Test at 50°C, 100% UT, PMI'
    },
    mechanical: {
      tensile: '≥ 750 MPa (110,000 psi)',
      yield: '≥ 550 MPa (80,000 psi)',
      elongation: '≥ 15%',
      hardness: '≤ 310 HBW (≤ 32 HRC)',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '6.0 - 8.0%',
      mo: '3.0 - 5.0%',
      n: '0.24 - 0.32%',
      c: '≤ 0.030%'
    },
    applications: [
      'Subsea flowlines, manifolds, and umbilical tubes',
      'Offshore firewater deluge piping and pump discharge manifolds',
      'Geothermal brine extraction and re-injection piping',
      'High-pressure acid leach (HPAL) autoclaves in nickel mining'
    ]
  }
];

export const BUTT_WELD_FITTINGS_NICKEL_GRADES = [
  {
    id: 'astm-b366-inconel-625',
    slug: 'astm-b366-inconel-625',
    aliases: ['inconel-625-fitting', 'b366-wpnicmc', 'alloy-625-fitting'],
    name: 'ASTM B366 Inconel 625 (UNS N06625) Fitting',
    specification: 'ASTM B366 / ASME SB366',
    grade: 'UNS N06625 (Grade WPNICMC)',
    class: 'Seamless & Welded Class WP',
    code: 'B366 N06625 HIGH STRENGTH',
    badge: 'SEVERE CHEMICAL & SUBSEA',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers)',
    standards: 'ASME B16.9, ASTM B366, NACE MR0175',
    shortDesc: 'Solid-solution strengthened nickel-chromium-molybdenum fitting with Niobium for extreme subsea and sour chemical pipelines.',
    fullDesc: 'Wrought nickel superalloy butt weld fitting fortified with 9% Molybdenum and 3.6% Niobium within a nickel-chromium matrix. Provides high mechanical strength without requiring hardening heat treatments, alongside total immunity to marine crevice attack and sour H2S cracking.',
    features: [
      'Tensile strength (≥ 827 MPa) retained from cryogenic to 980°C',
      'Immunity to chloride-induced stress corrosion cracking',
      'Virtually immune to pitting and crevice corrosion in marine environments',
      'Fully qualified under NACE MR0175 / ISO 15156 for extreme sour gas wells'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S, 40S, 80S, 160',
      ends: 'Beveled Ends (ASME B16.25)',
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
      'Subsea wellhead piping and umbilical termination modules',
      'Sour gas production lines containing high H2S, CO2, and free chlorides',
      'Naval submarine seawater exhaust and piping systems',
      'High-pressure chemical reactor vessel nozzles'
    ]
  }
];

export const BUTT_WELD_FITTINGS_TITANIUM_GRADES = [
  {
    id: 'astm-b363-grade-wpt2',
    slug: 'astm-b363-grade-wpt2',
    aliases: ['titanium-grade-2-fitting', 'b363-wpt2', 'ti-gr2-fitting'],
    name: 'ASTM B363 Grade WPT2 Titanium Fitting',
    specification: 'ASTM B363 / ASME SB363',
    grade: 'Grade WPT2 (Commercially Pure CP-2)',
    class: 'Seamless & Welded Class WPT',
    code: 'B363 WPT2 CP TITANIUM',
    badge: 'SEAWATER IMMUNE & LIGHT',
    uns: 'UNS R50400',
    din: '3.7035',
    productForm: 'Butt Weld Fittings (Elbows, Tees, Reducers, Caps, Stub Ends)',
    standards: 'ASME B16.9, ASTM B363',
    shortDesc: 'Commercially pure titanium butt weld fitting offering complete immunity to marine seawater pitting and 45% weight reduction over steel.',
    fullDesc: 'Wrought unalloyed commercially pure Grade WPT2 titanium piping fitting. Combines moderate mechanical strength with extraordinary corrosion resistance in seawater, wet chlorine gas, organic acids, and oxidizing chloride salts.',
    features: [
      'Total immunity to general and localized crevice corrosion in seawater',
      'Approximately 45% lighter than steel fittings of identical dimensions',
      'Dense protective titanium dioxide passive film self-heals instantaneously',
      'Non-magnetic with high resistance to microbial-induced corrosion'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 5S, SCH 10S, SCH 40S',
      ends: 'Plain Cut / Beveled Ends',
      testing: '100% Eddy Current / Ultrasonic, Pneumatic/Hydrostatic proof, PMI'
    },
    mechanical: {
      tensile: '≥ 345 MPa (50,000 psi)',
      yield: '275 - 450 MPa',
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
      'Coastal thermal power station seawater cooling lines',
      'Offshore platform titanium heat exchanger piping loops',
      'Desalination multi-stage flash (MSF) evaporation headers',
      'Chlor-alkali bleaching plants and marine life support piping'
    ]
  }
];

// Comprehensive Flagship Butt Weld Fittings Master List
export const BUTT_WELD_FITTINGS_GRADES = [
  ...BUTT_WELD_FITTINGS_CARBON_STEEL_GRADES,
  ...BUTT_WELD_FITTINGS_STAINLESS_STEEL_GRADES,
  ...BUTT_WELD_FITTINGS_ALLOY_STEEL_GRADES,
  ...BUTT_WELD_FITTINGS_DUPLEX_GRADES,
  ...BUTT_WELD_FITTINGS_NICKEL_GRADES,
  ...BUTT_WELD_FITTINGS_TITANIUM_GRADES
];
