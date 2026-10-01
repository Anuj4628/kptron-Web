/**
 * Research-Verified Ferrule & Instrumentation Tube Fittings Specifications
 * Design: Precision Twin Ferrule Compression (Swagelok / Parker Compatible)
 * Standards: ASTM A276, ASTM A182, ASTM A479, ASTM B16, ASTM B164, ASTM B574
 * Ratings: 3000 PSI, 6000 PSI, 10,000 PSI, up to 15,000 PSI
 * Tubing OD: 1/16" to 2" (2 mm to 50 mm OD)
 */

export const FERRULE_FITTINGS_GRADES = [
  {
    id: 'twin-ferrule-ss-316l',
    slug: 'twin-ferrule-ss-316l',
    aliases: ['ss-316-ferrule-fitting', 'ss316-tube-fitting', 'twin-ferrule-316'],
    name: 'Stainless Steel 316 / 316L Twin Ferrule Fitting',
    specification: 'ASTM A276 / ASTM A479 / ASTM A182',
    grade: 'Grade 316 / 316L (UNS S31600 / S31603)',
    class: 'Pressure Rating: up to 10,000 PSI (690 Bar)',
    code: 'SS316 DOUBLE FERRULE',
    badge: '10,000 PSI INSTRUMENTATION',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Twin Ferrule Compression Fittings (Male/Female Connector, Union, Elbow, Tee)',
    standards: 'ASME B31.3, ASTM A276, ASTM A479, BS 4368',
    shortDesc: 'Precision twin-ferrule compression tube fitting with silver-plated nut threads providing leak-tight sealing up to 10,000 PSI.',
    fullDesc: 'Manufactured from precision barstock and forgings in 316/316L stainless steel. Features a two-ferrule swaging action: front ferrule creates a gas-tight seal on the tube OD while the case-hardened back ferrule provides deep colleting grip to resist severe impulse pressure and mechanical vibration.',
    features: [
      'Twin-ferrule mechanism isolates axial thrust from sealing surface',
      'Silver-plated internal nut threads prevent galling and ensure repeated remakes',
      'Case-hardened back ferrule grips firmly into heavy wall instrument tubing',
      '100% Helium leak tested with leak rates less than 1 x 10^-9 mbar·l/s'
    ],
    specs: {
      sizeRange: '1/16" to 2" OD Tube (2 mm to 50 mm Metric)',
      pressureRating: 'Vacuum to 10,000 PSI (690 Bar) depending on tube schedule',
      ends: 'Double Ferrule Compression Tube x NPT / BSPT / Weld',
      testing: 'Hydrostatic proof at 1.5x rating, Helium mass spec leak test, PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 90 HRB',
      maxTemp: '648°C'
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
      'Refinery analytical instrument sampling and impulse lines',
      'High-pressure gas chromatography carrier gas distribution',
      'Offshore topside hydraulic control panel tubing loops',
      'Power generation boiler drum level gauge instrumentation'
    ]
  },
  {
    id: 'twin-ferrule-brass',
    slug: 'twin-ferrule-brass',
    aliases: ['brass-ferrule-fitting', 'brass-tube-fitting', 'c36000-ferrule'],
    name: 'High Precision Brass Twin Ferrule Fitting',
    specification: 'ASTM B16 / ASTM B283',
    grade: 'Alloy C36000 (Free-Cutting Brass)',
    class: 'Pressure Rating: up to 3000 PSI (207 Bar)',
    code: 'BRASS C36000 TUBE FITTING',
    badge: 'INSTRUMENT AIR SPECIALIST',
    uns: 'UNS C36000',
    din: '2.0401 (CuZn39Pb3)',
    productForm: 'Compression Fittings (Connectors, Unions, Elbows, Bulkheads)',
    standards: 'ASTM B16, ASME B31.1, SAE J514',
    shortDesc: 'High-conductivity, corrosion-resistant brass double ferrule fitting engineered for pneumatic instrumentation and low-pressure utility gas.',
    fullDesc: 'Machined from high-grade free-cutting brass alloy C36000. Provides excellent thermal conductivity, smooth makeup torque, and non-sparking safety in pneumatic control loops, instrument air lines, and laboratory cooling lines.',
    features: [
      'Non-sparking alloy safe for combustible gas sensing installations',
      'Smooth makeup torque without galling or thread seizure',
      'Compatible with copper, nylon, polyurethane, and polyethylene tubing',
      'Precision machined threads conforming to ASME B1.20.1 NPT standards'
    ],
    specs: {
      sizeRange: '1/8" to 1" Tube OD',
      pressureRating: 'Up to 3000 PSI (207 Bar)',
      ends: 'Compression Tube x Male/Female NPT',
      testing: 'Pneumatic bubble leak test at 100 PSI, Hydrostatic burst test'
    },
    mechanical: {
      tensile: '≥ 380 MPa (55,000 psi)',
      yield: '≥ 170 MPa (25,000 psi)',
      elongation: '≥ 15%',
      hardness: '60 - 80 HRB',
      maxTemp: '204°C'
    },
    chemistry: {
      cu: '60.0 - 63.0%',
      pb: '2.5 - 3.7%',
      fe: '≤ 0.35%',
      zn: 'Balance'
    },
    applications: [
      'Pneumatic instrument air supply headers in chemical plants',
      'Industrial automation pneumatic valve actuator signal lines',
      'Laboratory gas chromatography calibration lines',
      'Commercial cooling water and lubricating oil tubing networks'
    ]
  },
  {
    id: 'twin-ferrule-duplex-2205',
    slug: 'twin-ferrule-duplex-2205',
    aliases: ['duplex-2205-ferrule-fitting', 's31803-tube-fitting'],
    name: 'Duplex 2205 (UNS S31803 / S32205) Ferrule Fitting',
    specification: 'ASTM A276 / ASTM A479',
    grade: 'UNS S31803 / UNS S32205 (2205 Duplex)',
    class: 'Pressure Rating: up to 15,000 PSI (1034 Bar)',
    code: 'DUPLEX 2205 15,000 PSI',
    badge: '15,000 PSI HIGH STRENGTH',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'High Pressure Instrumentation Fittings (SW, NPT, Tube Unions)',
    standards: 'ASTM A276, ASTM A479, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex stainless double ferrule fitting delivering high pressure capability up to 15,000 PSI and seawater pitting immunity.',
    fullDesc: 'Precision machined from barstock in Duplex 2205 stainless steel. Yield strength of 450 MPa enables safe containment of ultra-high pressures up to 15,000 PSI while resisting marine pitting, crevice attack, and chloride stress cracking in coastal environments.',
    features: [
      'Rated up to 15,000 PSI (1034 Bar) on heavy-wall duplex tubing',
      'PREN ≥ 35 ensures high resistance to pitting in chlorinated seawater',
      'Specially hardened back ferrule ensures positive grip into high-strength duplex',
      'NORSOK M-650 qualified material sourcing with complete EN 10204 3.1 MTC'
    ],
    specs: {
      sizeRange: '1/4" to 1" Tube OD (6 mm to 25 mm)',
      pressureRating: 'Up to 15,000 PSI',
      ends: 'Double Ferrule Tube x NPT / Medium Pressure Cone & Thread',
      testing: 'Hydrostatic proof test at 1.5x working pressure, Helium leak test, PMI'
    },
    mechanical: {
      tensile: '≥ 655 MPa (95,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 25%',
      hardness: '≤ 28 HRC (290 HBW)',
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
      'Offshore subsea umbilical termination and intervention panels',
      'High-pressure chemical injection and methanol dosing skids',
      'Desalination plant high-pressure seawater reverse osmosis monitoring',
      'Sour gas wellhead choke valve pressure sensing lines'
    ]
  },
  {
    id: 'twin-ferrule-hastelloy-c276',
    slug: 'twin-ferrule-hastelloy-c276',
    aliases: ['hastelloy-c276-ferrule-fitting', 'alloy-c276-tube-fitting'],
    name: 'Hastelloy C276 (UNS N10276) Ferrule Fitting',
    specification: 'ASTM B574 / ASME SB574',
    grade: 'UNS N10276 (Alloy C-276)',
    class: 'Severe Chemical Service up to 10,000 PSI',
    code: 'HASTELLOY C276 FITTING',
    badge: 'WET CHLORINE & ACID MASTER',
    uns: 'UNS N10276',
    din: '2.4819 (NiMo16Cr15W)',
    productForm: 'Instrumentation Compression Fittings',
    standards: 'ASTM B574, NACE MR0175, ASME B31.3',
    shortDesc: 'Nickel-molybdenum-chromium superalloy twin ferrule fitting with tungsten, delivering supreme resistance to wet chlorine and boiling mineral acids.',
    fullDesc: 'Machined from solution-annealed Hastelloy C276 barstock. Engineered specifically for analytical instrumentation and sampling loops where process media contain aggressive wet chlorine gas, hypochlorites, concentrated sulfuric acid, or ferric chlorides.',
    features: [
      'Immune to wet chlorine gas, bleach solutions, and aggressive oxidizers',
      'Superior resistance to localized pitting and stress corrosion cracking',
      'Precision case-hardened ferrules ensure dependable tube colleting',
      'Full material traceability with EN 10204 3.1 and NACE MR0175 compliance'
    ],
    specs: {
      sizeRange: '1/8" to 1" Tube OD',
      pressureRating: 'Up to 10,000 PSI',
      ends: 'Twin Ferrule Compression x NPT',
      testing: 'ASTM G28 Intergranular Corrosion Test, Helium Leak Test, 100% PMI'
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
      c: '≤ 0.010%'
    },
    applications: [
      'Chlor-alkali bleach chemical analyzer sampling lines',
      'Flue gas desulfurization (FGD) scrubber emission monitoring probes',
      'Pharmaceutical aggressive chloride reaction sampling loops',
      'Hazardous waste incineration acid gas analytical lines'
    ]
  }
];
