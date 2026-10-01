/**
 * Research-Verified Forged Seamless Rolled Rings & RTJ Gaskets Specifications
 * Standards: ASTM A105, ASTM A350, ASTM A182, ASME B16.48 (Spectacle Blinds), ASME B16.20 (RTJ Ring Joint Gaskets)
 * Types: Seamless Rolled Rings, Forged Bearing Blanks, RTJ Gaskets (R, RX, BX Series Octagonal & Oval), Spectacle Blinds
 * Size Range: 50 mm ID to 4000 mm OD | Thickness/Height: Up to 500 mm
 */

export const RING_GRADES = [
  {
    id: 'ring-astm-a105-seamless-rolled',
    slug: 'ring-astm-a105-seamless-rolled',
    aliases: ['a105-forged-ring', 'cs-rolled-ring', 'seamless-rolled-ring-a105', 'ring'],
    name: 'ASTM A105 Forged Seamless Rolled Ring',
    specification: 'ASTM A105 / ASME SA105',
    grade: 'Grade A105 / A105N (Normalized Carbon Steel)',
    class: 'Seamless Radial-Axial Rolled Ring (Up to 4000 mm OD)',
    code: 'A105 SEAMLESS ROLLED RING',
    badge: 'HEAVY FORGED RING',
    uns: 'UNS K03504',
    din: '1.0460 (C22.8 / P250GH)',
    productForm: 'Seamless Forged Rolled Rings & Large Bearing Blanks',
    standards: 'ASTM A105, ASME Section VIII, EN 10222-2',
    shortDesc: 'Seamless radial-axial rolled forged carbon steel ring with circumferential grain flow for large pressure vessel flanges and slew bearings.',
    fullDesc: 'Hot-forged from solid killed carbon steel ingots, pierced, and seamless rolled on precision radial-axial ring rolling mills. Continuous circumferential grain flow provides superior hoop tensile strength, fatigue endurance, and impact resistance compared to welded or flame-cut rings.',
    features: [
      'Seamless hot-rolling generates continuous circumferential grain orientation',
      'Normalized heat treatment ensures uniform mechanical properties throughout cross-section',
      'Near-net-shape rolled profile significantly reduces finish machining stock and scrap',
      'Ultrasonically scanned 100% per ASTM A388 for zero internal shrinkage or gas porosity'
    ],
    specs: {
      outerDiameter: '150 mm to 4000 mm OD',
      heightRange: '30 mm to 500 mm | Face Width: 25 mm to 450 mm',
      surfaceCondition: 'Black Forged / Rough Machined (all over 125-250 Ra)',
      testing: '100% Ultrasonic examination (UT), Magnetic Particle (MT), Tensile, PMI'
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
      si: '0.10 - 0.35%'
    },
    applications: [
      'Large diameter pressure vessel body flanges and nozzle reinforcing rings',
      'Wind turbine slewing ring bearing races and pitch gear blanks',
      'Petrochemical shell-and-tube heat exchanger girth flanges',
      'Hydroelectric power turbine rotor hubs and valve seating rings'
    ]
  },
  {
    id: 'ring-astm-a182-f316l-stainless',
    slug: 'ring-astm-a182-f316l-stainless',
    aliases: ['f316l-forged-ring', 'ss-316-ring', 'stainless-rolled-ring-316'],
    name: 'ASTM A182 F316 / F316L Stainless Rolled Ring',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F316 / F316L Dual Certified',
    class: 'Seamless Forged Stainless Ring (Class 150 - 2500#)',
    code: 'A182 F316L ROLLED RING',
    badge: 'MOLYBDENUM ACID RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Seamless Rolled Rings, Spectacle Blinds, and Tube Sheet Rims',
    standards: 'ASME B16.5, ASME B16.48, ASTM A182, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum forged stainless seamless ring providing high hoop strength and marine pitting resistance.',
    fullDesc: 'Seamless rolled and solution-treated 316L stainless steel ring. Continuous circumferential austenitic grain flow eliminates transverse weak zones, making it ideal for offshore vessel girth flanges, subsea clamp connectors, and spectacle blinds.',
    features: [
      'Continuous circumferential grain structure provides maximum hoop burst strength',
      'Dual certified 316/316L chemistry preventing weld sensitization',
      'Full compliance with NACE MR0175 / ISO 15156 sour service standards',
      'Precision CNC pre-machined with tight concentricity and face parallelism'
    ],
    specs: {
      outerDiameter: '150 mm to 3500 mm OD',
      heightRange: '25 mm to 400 mm',
      surfaceFinish: 'Rough Turned / Precision Finish Machined',
      testing: 'ASTM G48 Pitting Corrosion, 100% UT, Liquid Penetrant (PT), PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW (90 HRB)',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Offshore three-phase separator vessel body flanges and clamp rings',
      'Marine seawater intake filter housing flange rings',
      'Chemical reactor agitation shaft sealing rings and gland rings',
      'Pharmaceutical pressure vessel sanitary sight glass rim rings'
    ]
  },
  {
    id: 'rtj-gasket-soft-iron-asme-b1620',
    slug: 'rtj-gasket-soft-iron-asme-b1620',
    aliases: ['soft-iron-rtj', 'asme-b16-20-gasket', 'r-octagonal-gasket'],
    name: 'ASME B16.20 Soft Iron Metallic RTJ Ring Joint Gasket',
    specification: 'ASME B16.20 / API 6A',
    grade: 'Soft Iron (Max 90 HBW) / Low Carbon Steel (Max 120 HBW)',
    class: 'Style R (Octagonal & Oval), Style RX, Style BX',
    code: 'ASME B16.20 SOFT IRON RTJ',
    badge: 'HIGH PRESSURE METALLIC SEAL',
    uns: 'UNS G10080 Soft Iron',
    din: '1.0034 (Armco Iron)',
    productForm: 'Precision Machined Metallic Ring Joint Gaskets (R, RX, BX)',
    standards: 'ASME B16.20, API 6A (PSL 1 to 4), ASME B16.5, ASME B16.47',
    shortDesc: 'Solid soft iron metallic ring joint gasket (max 90 HBW) engineered for high-pressure oilfield and refinery RTJ flange sealing up to 15,000 PSI.',
    fullDesc: 'Manufactured strictly from soft iron with hardness strictly controlled below 90 HBW (56 HRB) to guarantee that the gasket plastically deforms and coins into the flange groove faces without scratching or indenting the harder flange ring grooves (typically 137-187 HBW).',
    features: [
      'Maximum hardness guaranteed ≤ 90 HBW ensuring plastic coining into flange grooves',
      'Precision machined octagonal 23° angle bevel sealing faces with surface finish Ra < 1.6 µm',
      'API 6A monogrammed and certified for working pressures up to 15,000 PSI',
      'Supplied with light electro-plated zinc or cadmium coating to prevent flash rusting'
    ],
    specs: {
      ringTypes: 'Style R (R11 to R105 Octagonal/Oval), Style RX (RX20-RX215), Style BX (BX150-BX303)',
      pressureRating: 'Class 900, 1500, 2500 (ASME B16.5) / 2000 to 15,000 PSI (API 6A)',
      hardnessLimit: 'Maximum 90 HBW (Soft Iron) / Maximum 120 HBW (Low Carbon Steel)',
      testing: '100% Hardness tested on seating faces, Dimensional CMM inspection'
    },
    mechanical: {
      tensile: '≥ 350 MPa',
      yield: '≥ 190 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 90 HBW (Soft Iron) / ≤ 120 HBW (Carbon Steel)',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.05% (Soft Iron)',
      mn: '≤ 0.35%',
      p: '≤ 0.020%',
      s: '≤ 0.020%',
      fe: '≥ 99.5%'
    },
    applications: [
      'High-pressure oil and gas wellhead Christmas tree API 6A flanges',
      'Refinery catalytic hydrocracker RTJ high-pressure pipe flanges',
      'High-temperature superheated steam piping ring joint joints',
      'Subsea blowout preventer (BOP) high-integrity pressure seals'
    ]
  },
  {
    id: 'rtj-gasket-ss316-asme-b1620',
    slug: 'rtj-gasket-ss316-asme-b1620',
    aliases: ['ss-316-rtj', '316-octagonal-gasket', 'stainless-rtj-gasket'],
    name: 'ASME B16.20 Stainless Steel 316 RTJ Ring Joint Gasket',
    specification: 'ASME B16.20 / API 6A',
    grade: 'Grade 316 Stainless Steel (Max 160 HBW)',
    class: 'Style R Octagonal & Style RX/BX for Sour & Corrosive Flanges',
    code: 'SS316 RTJ RING GASKET',
    badge: 'SOUR GAS & MARINE SEAL',
    uns: 'UNS S31600 Gasket Quality',
    din: '1.4401 Gasket',
    productForm: 'Precision CNC Machined Solid Metallic Gasket Rings',
    standards: 'ASME B16.20, API 6A, NACE MR0175',
    shortDesc: 'Solid 316 stainless steel metallic ring gasket (max 160 HBW) for corrosive and sour hydrocarbon high-pressure RTJ joints.',
    fullDesc: 'Precision machined from fully solution-annealed 316 stainless steel with hardness controlled below 160 HBW (83 HRB). Designed for corrosive refinery media, offshore marine splash zones, and sour oilfield applications where carbon steel gaskets suffer hydrogen sulfide embrittlement.',
    features: [
      'Hardness controlled ≤ 160 HBW (83 HRB) per ASME B16.20 to protect flange faces',
      '2.0 - 3.0% Molybdenum provides total immunity to sour gas and brine pitting',
      'Fully qualified under NACE MR0175 / ISO 15156 for severe sour service',
      'Precision machined sealing angle (23° ±30\') ensuring uniform line-contact coining'
    ],
    specs: {
      ringTypes: 'Style R Octagonal / Style R Oval, Style RX, Style BX',
      pressureRating: 'Class 150 to 2500# / API 2000 to 20,000 PSI',
      surfaceFinish: 'Ra ≤ 1.6 µm (63 µin) on all 23° sealing faces',
      testing: '100% Hardness verified, Optical CMM dimensional check, 100% PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 40%',
      hardness: '≤ 160 HBW (83 HRB)',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Offshore production platform sour gas RTJ high-pressure pipe joints',
      'Deepwater subsea manifold hub connections and pressure caps',
      'Refinery hydroprocessing units handling hot sour crude oil',
      'High-pressure chemical synthesizers handling chloride-bearing steam'
    ]
  }
];
