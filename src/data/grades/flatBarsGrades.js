/**
 * Research-Verified Industrial Flat Bars Specifications & Metallurgy
 * Standards: ASTM A276, ASTM A479, ASTM A484, EN 10058, DIN 17440
 * Finishes: Hot Rolled Annealed & Pickled (HRAP), Cold Drawn (True Mill Sharp Edge), Slit & Edge Conditioned
 * Width Range: 10 mm to 200 mm | Thickness Range: 3 mm to 50 mm | Length: 3 to 6 Meters
 */

export const FLAT_BARS_GRADES = [
  {
    id: 'flat-bar-ss-304-hrap',
    slug: 'flat-bar-ss-304-hrap',
    aliases: ['ss-304-flat-bar', '304-hrap-flat', 'stainless-flat-bar-304', 'flat-bar'],
    name: 'ASTM A276 Type 304 / 304L HRAP & Cold Drawn Flat Bar',
    specification: 'ASTM A276 / ASTM A479 / ASTM A484',
    grade: 'Type 304 / 304L Dual Certified',
    class: 'Hot Rolled Annealed & Pickled (HRAP) & Cold Drawn',
    code: 'A276 304/L FLAT BAR',
    badge: 'GENERAL STRUCTURAL & BRACKETS',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Rectangular Solid Flat Bars (True Flat with Radiused or Sharp Edges)',
    standards: 'ASTM A276, ASTM A484, EN 10058, ISO 9001',
    shortDesc: 'Austenitic 18-8 stainless steel rectangular flat bar with high formability, weldability, and corrosion resistance.',
    fullDesc: 'Hot-rolled, annealed, and pickled (HRAP) or precision cold-drawn solid stainless flat bar. Controlled low carbon (C ≤ 0.030%) prevents sensitization during structural welding, making it ideal for support brackets, grating cross-bars, and machinery frames.',
    features: [
      'Dual certified 304/304L chemistry with low carbon preventing weld decay',
      'True flat tolerance conforming to ASTM A484 thickness and width limits',
      'Available in HRAP finish or cold-drawn with square, sharp 90° corners',
      '100% PMI verified with full mill test certificate (EN 10204 3.1)'
    ],
    specs: {
      widthRange: '10 mm to 200 mm (0.375" to 8.0")',
      thicknessRange: '3 mm to 50 mm (0.125" to 2.0")',
      finish: 'HRAP (Hot Rolled Annealed & Pickled) / Cold Drawn Sharp Edge',
      testing: 'Dimensional tolerance check, Tensile test, 100% PMI Spectro'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 40% in 2"',
      hardness: '≤ 90 HRB / 187 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Chemical plant pipe hanger brackets, clamps, and support cradles',
      'Architectural facade framing, balustrades, and structural lintels',
      'Food processing conveyor side guides and machinery wear strips',
      'Commercial kitchen equipment structural base frames'
    ]
  },
  {
    id: 'flat-bar-ss-316l-marine',
    slug: 'flat-bar-ss-316l-marine',
    aliases: ['ss-316-flat-bar', '316l-flat-bar', 'marine-stainless-flat'],
    name: 'ASTM A276 Type 316 / 316L Moly Flat Bar',
    specification: 'ASTM A276 / ASTM A479',
    grade: 'Type 316 / 316L Dual Certified (2.0 - 3.0% Moly)',
    class: 'Marine & Chemical Pressure Vessel Quality',
    code: 'A276 316/L MOLY FLAT',
    badge: 'MARINE CHLORIDE PROOF',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Precision Cold Drawn & HRAP Rectangular Flat Bars',
    standards: 'ASTM A276, ASTM A479, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum-bearing stainless flat bar delivering superior resistance to marine saltwater and chemical acid corrosion.',
    fullDesc: 'Hot-rolled or cold-drawn solid rectangular barstock in 316/316L stainless steel. Formulated with 2.5% Molybdenum to prevent pitting and crevice corrosion under marine spray, acidic industrial fluids, and coastal atmospheric exposure.',
    features: [
      'Molybdenum content provides exceptional resistance to marine chloride pitting',
      'Qualified under NACE MR0175 / ISO 15156 for offshore and sour service',
      'Superior edge squareness and surface flatness for precision machined keys',
      'Tested 100% by Ultrasonic Examination for zero internal laminations'
    ],
    specs: {
      widthRange: '12 mm to 150 mm',
      thicknessRange: '3 mm to 40 mm',
      finish: 'Cold Drawn Bright / HRAP Pickled & Passivated',
      testing: 'ASTM G48 Pitting Corrosion, Ultrasonic, PMI, Hardness'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40%',
      hardness: '≤ 92 HRB / 201 HBW',
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
      'Offshore marine platform ladder rungs, cable ladder rungs, and brackets',
      'Desalination plant valve mounting plates and actuator brackets',
      'Pharmaceutical cleanroom equipment mounting plates and stiffeners',
      'Subsea instrumentation protection frames and sensor brackets'
    ]
  },
  {
    id: 'flat-bar-duplex-2205',
    slug: 'flat-bar-duplex-2205',
    aliases: ['duplex-2205-flat-bar', 's31803-flat-bar'],
    name: 'Duplex 2205 (UNS S31803 / S32205) High Strength Flat Bar',
    specification: 'ASTM A276 / ASTM A479',
    grade: 'UNS S31803 / UNS S32205 (Duplex 2205)',
    class: '450 MPa High Yield Offshore Structural Flat',
    code: 'DUPLEX 2205 FLAT BAR',
    badge: '450 MPA DOUBLE YIELD',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Solid Forged & Rolled Duplex Flat Bars',
    standards: 'ASTM A276, ASTM A479, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex rectangular flat bar delivering double the yield strength of 316L and supreme resistance to marine stress corrosion.',
    fullDesc: 'Hot-rolled or forged 22% Cr, 5% Ni, 3% Mo duplex stainless steel flat bar. Delivers 450 MPa yield strength and PREN ≥ 35, enabling significant weight reduction in structural offshore bracing, sea-fastening brackets, and high-load marine wear plates.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L flat bar',
      'PREN ≥ 35 ensures high resistance to localized pitting in seawater',
      'High resistance to stress corrosion cracking under heavy tensile loads',
      'NORSOK M-650 qualified mill production with ASTM A923 Method C test'
    ],
    specs: {
      widthRange: '20 mm to 150 mm',
      thicknessRange: '5 mm to 40 mm',
      finish: 'Hot Rolled Pickled / Precision Milled Edges',
      testing: 'ASTM A923 Method C Ferric Chloride, Ferrite Phase Count (40-60%), PMI'
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
      'Offshore topside structural braces, padeyes, and sea-fastening brackets',
      'Marine deck crane guide rails and heavy sliding wear tracks',
      'Chemical tanker deck cargo pipe hold-down clamps and saddles',
      'Desalination high-pressure pump skid mounting rails'
    ]
  },
  {
    id: 'flat-bar-carbon-steel-1018',
    slug: 'flat-bar-carbon-steel-1018',
    aliases: ['cs-flat-bar', 'cold-drawn-1018-flat', 'carbon-steel-key-stock'],
    name: 'AISI 1018 / 1045 Cold Drawn Carbon Steel Flat Bar',
    specification: 'ASTM A108 / ASTM A29',
    grade: 'AISI 1018 (Low Carbon) / AISI 1045 (Medium Carbon)',
    class: 'Cold Drawn Key Stock & Precision Machine Flat',
    code: 'AISI 1018 COLD DRAWN FLAT',
    badge: 'PRECISION KEY STOCK',
    uns: 'UNS G10180 / G10450',
    din: '1.0401 (C15 / C45)',
    productForm: 'Cold Drawn Precision Rectangular Flat Bars',
    standards: 'ASTM A108, SAE J403, ISO 9001',
    shortDesc: 'Cold-drawn carbon steel flat bar with sharp square corners and tight dimensional tolerances for precision keys and machine ways.',
    fullDesc: 'Manufactured by cold drawing through tungsten carbide dies to provide sharp 90° corners, exceptional surface finish, and tight thickness tolerances (±0.05 mm). Widely used as machine keys, gibs, wear plates, and fabricated fixture assemblies.',
    features: [
      'Precision cold drawn with sharp 90° edges and tight tolerance (±0.05 mm)',
      'Smooth bright surface suitable for direct zinc plating or black oxiding',
      'Excellent weldability and carburizing response (1018) or induction hardening (1045)',
      'Free from surface decarburization and internal rolling seams'
    ],
    specs: {
      widthRange: '10 mm to 150 mm',
      thicknessRange: '3 mm to 30 mm',
      finish: 'Cold Drawn Bright (Clean, Oiled)',
      testing: 'Dimensional inspection, Tensile, Hardness, Magnetic Particle'
    },
    mechanical: {
      tensile: '≥ 440 MPa (1018) / ≥ 620 MPa (1045)',
      yield: '≥ 370 MPa (1018) / ≥ 530 MPa (1045)',
      elongation: '≥ 15%',
      hardness: '126 - 179 HBW (1018) / 179 - 229 HBW (1045)',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '0.15 - 0.20% (1018) / 0.43 - 0.50% (1045)',
      mn: '0.60 - 0.90%',
      p: '≤ 0.040%',
      s: '≤ 0.050%',
      fe: 'Balance'
    },
    applications: [
      'Machined shaft keys, keystock, and splined drive couplings',
      'Machine tool slideways, gibs, and precision parallel spacers',
      'Hydraulic cylinder mounting brackets and press platen stops',
      'Heavy machinery fabricated gearboxes and bolster plates'
    ]
  }
];
