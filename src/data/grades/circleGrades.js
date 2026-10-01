/**
 * Research-Verified Circular Blanks & Dished End Discs Specifications
 * Standards: ASTM A240, ASTM A516, ASTM A387, ASTM B265, ASME Section VIII
 * Processing: CNC Plasma, High-Precision Abrasive Waterjet, Fiber Laser, and Machined Edge Circles
 * Diameter Range: 50 mm to 3500 mm OD | Thickness Range: 1.0 mm to 150 mm
 * Edge Finish: Clean Cut Smooth Edge, Beveled Edge (for welding to shell barrels), Center-Hole Bored
 */

export const CIRCLE_GRADES = [
  {
    id: 'circle-ss-304-blanks',
    slug: 'circle-ss-304-blanks',
    aliases: ['ss-304-circle', '304-circular-blank', 'stainless-circle-304', 'circle'],
    name: 'Stainless Steel 304 / 304L Circular Blanks',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'Type 304 / 304L Dual Certified',
    class: 'CNC Laser & Waterjet Cut Circular Blanks',
    code: 'SS304 CIRCULAR BLANKS',
    badge: 'DISHED HEADS & BLANKS',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Precision Cut Discs, Circular Rings, and Dished Head Blanks',
    standards: 'ASTM A240, ASME Section VIII Division 1',
    shortDesc: 'Austenitic 304/304L precision circular blanks cut to tight diametrical tolerances for vessel dished heads and sanitary tanks.',
    fullDesc: 'Cut from prime solution-annealed 304/304L stainless steel plates using CNC underwater plasma, high-precision fiber laser, or abrasive waterjet cutting. Guarantees tight circularity tolerances (±1.0 mm) with zero heat-affected edge hardening, ready for spin-forming or press-dishing into ASME vessel heads.',
    features: [
      'Precision CNC cut with clean 90° edge squareness and minimal kerf taper',
      'Dual certified 304/304L chemistry prevents edge sensitization during welding',
      'True circularity with outer diameter tolerances within ±1.0 mm up to 3000 mm OD',
      'Supplied deburred, pickled, and passivated for immediate head spinning'
    ],
    specs: {
      diameterRange: '50 mm to 3500 mm OD',
      thicknessRange: '1.5 mm to 80.0 mm',
      cuttingMethod: 'High-Definition Plasma, CNC Waterjet, Multi-Kilowatt Fiber Laser',
      testing: 'Circularity verification, Ultrasonic examination per ASTM A578, 100% PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 40% in 2"',
      hardness: '≤ 92 HRB / 201 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Torispherical and 2:1 ellipsoidal dished ends for dairy and brewery tanks',
      'Heat exchanger circular baffle plates and support discs',
      'Commercial kitchen cookware and jacketed pressure cooker bottoms',
      'Architectural circular medallion inserts and lighting flanges'
    ]
  },
  {
    id: 'circle-ss-316l-chemical',
    slug: 'circle-ss-316l-chemical',
    aliases: ['ss-316-circle', '316l-circular-blank', 'chemical-vessel-blank'],
    name: 'Stainless Steel 316 / 316L Chemical Vessel Circle',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'Type 316 / 316L Dual Certified (2.0 - 3.0% Moly)',
    class: 'Pressure Vessel Quality Chemical Blanks',
    code: 'SS316L MOLY CIRCLE',
    badge: 'CHLORIDE PITTING RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Precision CNC Cut Heavy Circular Plates',
    standards: 'ASTM A240, ASME Section VIII, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum-bearing stainless circular plate engineered for chemical reactor dished heads and autoclave blind covers.',
    fullDesc: 'Cut from premium 316L pressure vessel plate containing 2.5% Molybdenum. Engineered to withstand warm chlorides, organic acids, and marine atmospheres. Can be supplied with pre-machined weld prep bevels (30° / 37.5°) for direct seam welding onto cylindrical shell courses.',
    features: [
      'Molybdenum content provides exceptional resistance to chloride pitting',
      'Dual certified 316/316L meeting NACE MR0175 sour service codes',
      'Available with machined outer weld bevels (ASME B16.25) for girth welding',
      'Ultrasonically inspected to ASTM A578 Level II for zero laminar defects'
    ],
    specs: {
      diameterRange: '100 mm to 3500 mm OD',
      thicknessRange: '3.0 mm to 100.0 mm',
      edgeFinish: 'Waterjet Smooth Cut, Machined Weld Prep Bevel',
      testing: 'ASTM G48 Pitting Corrosion, Ultrasonic Examination, Tensile, PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40%',
      hardness: '≤ 95 HRB / 217 HBW',
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
      'Chemical reactor dished ends and hemispherical vessel heads',
      'Desalination plant reverse osmosis end blind covers and tubesheets',
      'Pharmaceutical bio-fermentation pressure vessel dome ends',
      'Offshore marine scrubber tower top and bottom closures'
    ]
  },
  {
    id: 'circle-astm-a516-gr70',
    slug: 'circle-astm-a516-gr70',
    aliases: ['a516-gr70-circle', 'boiler-circle-gr70', 'cs-vessel-blank'],
    name: 'ASTM A516 Grade 70 Carbon Steel Boiler Circle',
    specification: 'ASTM A516 / ASME SA516',
    grade: 'Grade 70 (Killed Carbon Steel for Pressure Vessels)',
    class: 'Heavy Pressure Vessel Dished Head Discs',
    code: 'A516 GR.70 BOILER CIRCLE',
    badge: 'BOILER DRUM & HEADS',
    uns: 'UNS K02700',
    din: '1.0487 (P295GH)',
    productForm: 'Heavy Circular Plates for Hot Spinning & Press Dishing',
    standards: 'ASTM A516/A516M, ASME Section VIII Division 1 & 2',
    shortDesc: 'Fine-grained normalized carbon steel heavy circle engineered for boiler drum dished heads and heat exchanger tubesheets.',
    fullDesc: 'Precision flame or plasma cut from fully killed, fine-grained ASTM A516 Grade 70 plate. Normalized to guarantee high Charpy V-notch impact toughness. Engineered for hot-spinning, cold-pressing, or deep drawing into boiler heads, torispherical ends, and heavy vessel caps.',
    features: [
      'High tensile strength: 485 to 620 MPa (70,000 - 90,000 psi)',
      'Fine austenitic grain size (ASTM 5 or finer) ensures high notch toughness',
      'Normalized condition prevents brittle cracking during severe press dishing',
      '100% Ultrasonic scanned per ASTM A578 Level II for internal soundness'
    ],
    specs: {
      diameterRange: '200 mm to 3500 mm OD',
      thicknessRange: '8.0 mm to 150 mm',
      edgeFinish: 'CNC Oxy-Fuel Smooth Cut, Machined Weld Prep',
      testing: 'Charpy V-Notch at -20°C/-46°C, 100% UT, Transverse tensile, PMI'
    },
    mechanical: {
      tensile: '485 - 620 MPa',
      yield: '≥ 260 MPa (38,000 psi)',
      elongation: '≥ 21% in 2"',
      hardness: '≤ 187 HBW',
      maxTemp: '425°C',
      impactTest: 'Charpy V-Notch ≥ 27 J at -20°C / -46°C'
    },
    chemistry: {
      c: '≤ 0.28%',
      mn: '0.85 - 1.20%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Thermal power generation steam boiler dished ends and mud drum caps',
      'Petrochemical refinery LPG bullet tank hemispherical heads',
      'Shell & tube heat exchanger heavy tubesheets and partition plates',
      'Air receiver pressure tank torispherical dished heads'
    ]
  },
  {
    id: 'circle-duplex-2205',
    slug: 'circle-duplex-2205',
    aliases: ['duplex-2205-circle', 's31803-circular-blank'],
    name: 'Duplex 2205 (UNS S31803 / S32205) Circular Blank',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'UNS S31803 / UNS S32205 (Duplex 2205)',
    class: '450 MPa High Yield Offshore Blank',
    code: 'DUPLEX 2205 CIRCLE',
    badge: '450 MPA DOUBLE YIELD',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Abrasive Waterjet & Plasma Cut Duplex Discs',
    standards: 'ASTM A240, ASME SA240, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex circular blank delivering 450 MPa yield strength and supreme resistance to marine stress corrosion.',
    fullDesc: 'Cut from prime 22Cr-5Ni-3Mo duplex stainless steel plate using waterjet cutting to eliminate heat-affected zone (HAZ) phase imbalances. High yield strength enables 30-40% thinner head designs on offshore separator vessels and reverse osmosis tubesheets.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L circular blanks',
      'Abrasive waterjet cutting preserves the balanced 50/50 phase ratio on the edges',
      'PREN ≥ 35 ensures total immunity to pitting in high-pressure seawater',
      'Certified under NORSOK M-650 with ASTM A923 Method C test verification'
    ],
    specs: {
      diameterRange: '100 mm to 3000 mm OD',
      thicknessRange: '3.0 mm to 60.0 mm',
      edgeFinish: 'Cold Abrasive Waterjet (No HAZ), CNC Machined Bevel',
      testing: 'ASTM A923 Method C Ferric Chloride, Ferrite count (40-60%), UT'
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
      'Offshore three-phase production separator dished heads',
      'Seawater reverse osmosis high-pressure membrane tubesheets',
      'Chemical tanker deck cargo tank sumps and dished bottoms',
      'Geothermal high-pressure steam separator vessel ends'
    ]
  }
];
