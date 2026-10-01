/**
 * Research-Verified Industrial Steel Coils Specifications & Metallurgy
 * Standards: ASTM A240, ASTM A480, EN 10088-2, JIS G4305, IS 2062
 * Forms: Master Coils, Precision Slit Strip Coils, De-coiled Flattened Sheets
 * Thickness Range: 0.3 mm to 12.0 mm | Width Range: 10 mm to 2000 mm
 * Finishes: 2B (Cold Rolled), BA (Bright Annealed), No. 1 (Hot Rolled Annealed & Pickled), No. 4 Hairline
 */

export const COIL_GRADES = [
  {
    id: 'coil-ss-304-2b-ba',
    slug: 'coil-ss-304-2b-ba',
    aliases: ['ss-304-coil', 'ss304-strip-coil', '304-cold-rolled-coil', 'stainless-steel-coil'],
    name: 'Stainless Steel 304 / 304L Cold Rolled Coil (2B / BA)',
    specification: 'ASTM A240 / ASTM A480',
    grade: 'Type 304 / 304L Dual Certified',
    class: 'Cold Rolled Finish (2B / BA Bright Annealed)',
    code: 'SS304 CR PRECISION COIL',
    badge: 'DEEP DRAWING & FORMING',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Precision Slit Strip Coils & Full Width Master Coils',
    standards: 'ASTM A240, ASTM A480, EN 10088-2, JIS G4305',
    shortDesc: 'Cold-rolled precision stainless steel coil with tight thickness tolerances and high ductility for deep drawing and roll forming.',
    fullDesc: 'Manufactured through cold tandem rolling and continuous bright annealing. Provides tight gauge thickness control (±0.02 mm), smooth mirror-like BA or matte 2B finish, and superior elongation (>45%) for deep drawing, roll forming, and stamping.',
    features: [
      'Tight gauge thickness tolerance controlled by automated AGC x-ray sensors',
      'High elongation (≥ 45%) enables severe deep-drawn press operations',
      'Slit with deburred, camber-free edges suitable for continuous automated feed lines',
      'Supplied with fiber-laser protective PE film on the exposed surface'
    ],
    specs: {
      thicknessRange: '0.3 mm to 3.0 mm (Cold Rolled) / Up to 8.0 mm (Hot Rolled)',
      coilWidth: '10 mm to 1500 mm (Slit to custom width requirements)',
      coilID: '508 mm / 610 mm | Coil Weight: 1 to 15 Metric Tons',
      testing: 'Tensile, 180° Bend Test, Erichsen Cupping Test, Surface Gloss, PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 45% in 2"',
      hardness: '≤ 88 HRB / 180 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.030% (304L) / ≤ 0.08% (304)',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Automated roll-formed stainless structural channels and welded tubing',
      'Deep-drawn commercial kitchen sinks, catering equipment, and cookware',
      'Automotive exhaust flexible bellows and heat shield stampings',
      'Industrial heat exchanger corrugated plates and cooling fins'
    ]
  },
  {
    id: 'coil-ss-316l-chemical',
    slug: 'coil-ss-316l-chemical',
    aliases: ['ss-316-coil', 'ss316l-strip-coil', 'moly-stainless-coil'],
    name: 'Stainless Steel 316 / 316L Chemical Strip Coil',
    specification: 'ASTM A240 / ASTM A480',
    grade: 'Type 316 / 316L Dual Certified (2.0 - 3.0% Moly)',
    class: 'Marine & Acid Resistant Strip Coil',
    code: 'SS316L CHEMICAL STRIP',
    badge: 'CHLORIDE ACID RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Precision Slit Coils & Welded Tube Stock',
    standards: 'ASTM A240, ASTM A480, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum-bearing stainless strip coil delivering high resistance to marine pitting and sour chemicals.',
    fullDesc: 'Precision slit stainless steel strip coil containing 2.5% Molybdenum. Engineered for manufacturing welded stainless tubing, corrugated expansion joints, and marine hardware requiring high pitting resistance.',
    features: [
      'Molybdenum addition prevents localized pitting in marine and chloride environments',
      'Strict edge slitting tolerance with zero burrs for continuous high-speed TIG tube mills',
      'Fully solution annealed with low carbon (C ≤ 0.030%) preventing sensitization',
      'Compliant with NACE MR0175 / ISO 15156 for offshore and sour service'
    ],
    specs: {
      thicknessRange: '0.4 mm to 6.0 mm',
      coilWidth: '15 mm to 1500 mm',
      coilID: '508 mm | Coil OD: up to 1600 mm',
      testing: '100% Optical Emission PMI Spectro, Tensile, Microstructural Grain Size'
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
      'Continuous TIG/Laser welded ASTM A312 / A269 instrument tubing production',
      'Marine hose clamp bands, strapping, and cable tie banding',
      'Desalination reverse osmosis membrane pressure vessel feed shims',
      'Chemical metering pump diaphragms and corrugated expansion joints'
    ]
  },
  {
    id: 'coil-carbon-steel-is2062',
    slug: 'coil-carbon-steel-is2062',
    aliases: ['cs-coil', 'hot-rolled-cs-coil', 'is2062-coil', 'astm-a36-coil'],
    name: 'Carbon Steel Hot Rolled Strip Coil (IS 2062 / ASTM A36)',
    specification: 'IS 2062 Grade E250 / ASTM A36 / ASTM A1011',
    grade: 'Grade E250BR / ASTM A36 Commercial HR',
    class: 'Hot Rolled Pickled & Oiled (HRPO) Strip',
    code: 'CARBON STEEL HR COIL',
    badge: 'STRUCTURAL FORMING',
    uns: 'UNS K02600 / G10200',
    din: '1.0038 (S235JR / St 37-2)',
    productForm: 'Hot Rolled Coils (HR) & Pickled/Oiled Coils (HRPO)',
    standards: 'IS 2062, ASTM A36, ASTM A1011, EN 10025-2',
    shortDesc: 'Hot-rolled carbon steel strip coil with high weldability and formability for structural pipe manufacturing and automotive chassis.',
    fullDesc: 'Continuous hot-rolled carbon steel coil manufactured by modern wide strip mills. Supplied with mill edge or trimmed slit edge, oiled to prevent atmospheric rust. Provides consistent 250 MPa yield strength and superior bending properties.',
    features: [
      'Guaranteed minimum yield strength of 250 MPa with high ductile elongation',
      'Low carbon equivalent (CE ≤ 0.38) ensures sound high-frequency induction (HFW) welding',
      'Pickled and oiled (HRPO) finish removes all mill scale for clean laser cutting',
      'Kept in continuous high-tonnage stock for rapid global shipment'
    ],
    specs: {
      thicknessRange: '1.2 mm to 12.0 mm',
      coilWidth: '50 mm to 2000 mm',
      coilID: '762 mm / 850 mm | Weight: up to 28 Metric Tons',
      testing: 'Yield & Tensile verification, 180° Flat Bend Test, Chemical analysis'
    },
    mechanical: {
      tensile: '410 - 540 MPa',
      yield: '≥ 250 MPa',
      elongation: '≥ 23% in 200 mm',
      hardness: '≤ 140 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '≤ 0.22%',
      mn: '≤ 1.50%',
      p: '≤ 0.045%',
      s: '≤ 0.045%',
      si: '≤ 0.40%',
      ce: '≤ 0.38%'
    },
    applications: [
      'Continuous ERW / HFW structural hollow section and pipe manufacturing',
      'Automotive truck chassis frames, brackets, and wheel rim stampings',
      'Industrial storage racking uprights and roll-formed C/Z purlins',
      'Heavy machinery fabricated baseplates and shipping container panels'
    ]
  },
  {
    id: 'coil-duplex-2205',
    slug: 'coil-duplex-2205',
    aliases: ['duplex-2205-coil', 's31803-strip-coil'],
    name: 'Duplex 2205 (UNS S31803 / S32205) Strip Coil',
    specification: 'ASTM A240 / EN 10088-2',
    grade: 'UNS S31803 / UNS S32205 (Duplex 2205)',
    class: '450 MPa High Yield Offshore Strip',
    code: 'DUPLEX 2205 STRIP COIL',
    badge: 'DOUBLE YIELD STRENGTH',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Precision Slit Strip Coils for Welded Duplex Tubing',
    standards: 'ASTM A240, EN 10088-2, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic 22Cr-5Ni-3Mo duplex strip coil delivering 450 MPa yield strength for welded tubing and offshore strapping.',
    fullDesc: 'Cold-rolled and bright-annealed duplex stainless steel coil. Combines 450 MPa yield strength with PREN ≥ 35, enabling the automated continuous laser welding of high-pressure subsea control line tubing and seawater heat exchanger fins.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L coil',
      'PREN ≥ 35 ensures high resistance to pitting in chlorinated seawater',
      'High fatigue endurance under cyclic internal pressure in flexible flowlines',
      'Strictly controlled 45-55% ferrite phase distribution verified by metallography'
    ],
    specs: {
      thicknessRange: '0.8 mm to 5.0 mm',
      coilWidth: '20 mm to 1250 mm',
      coilID: '508 mm | Coil Weight: 1 to 8 Metric Tons',
      testing: 'ASTM A923 Method C Ferric Chloride, Tensile, Ferrite measurement, PMI'
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
      'Continuous automated welded duplex heat exchanger tube production',
      'Subsea umbilical control lines and chemical injection coiled tubing',
      'Offshore high-tensile banding, clamping, and cable strapping systems',
      'Desalination plant falling film evaporator plate pressings'
    ]
  }
];
