/**
 * Research-Verified Industrial Rods & Solid Round Bars Specifications & Metallurgy
 * Standards: ASTM A276, ASTM A479 (Boiler & Pressure Vessel), ASTM A484, ASTM B348, EN 10088-3
 * Finishes: Black Hot Rolled, Smooth Turned, Centerless Ground Bright (h8 / h9 / h11 tolerance), Cold Drawn
 * Diameters: 3 mm to 500 mm | Lengths: 3000 mm to 6000 mm (Cut-to-length billets available)
 */

export const RODS_BARS_GRADES = [
  {
    id: 'astm-a276-type-304-304l',
    slug: 'astm-a276-type-304-304l',
    aliases: ['ss-304-round-bar', 'a276-304', 'ss304-rod', 'stainless-round-bar-304'],
    name: 'ASTM A276 / A479 Type 304 / 304L Round Bar',
    specification: 'ASTM A276 / ASTM A479 / ASME SA479',
    grade: 'Type 304 / 304L Dual Certified',
    class: 'Cold Drawn Bright (h9) & Peeled/Turned (k12)',
    code: 'A276 304/L BRIGHT ROUND',
    badge: 'GENERAL MACHINING & SHAFTS',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Solid Round Bars, Hexagon Bars, Square Bars',
    standards: 'ASTM A276, ASTM A479, EN 10088-3, ISO 286-2',
    shortDesc: 'Austenitic stainless steel round bar with high machinability, weldability, and cryogenic impact toughness.',
    fullDesc: 'Hot-rolled or cold-finished austenitic stainless steel round bar supplied in solution-annealed condition. The dual-certified low carbon composition eliminates carbide sensitization, making it ideal for machined pump shafts, valve stems, pins, and structural bolts.',
    features: [
      'Dual certified 304/304L chemistry meeting ASME Section II Part A codes',
      'Centerless ground to ISO h8/h9 diametrical tolerances for precision shafting',
      'Superior machinability with clean chip breaking under CNC turning',
      'Full material test certificate (EN 10204 3.1) with 100% PMI Spectro'
    ],
    specs: {
      diameterRange: '3 mm to 500 mm (0.125" to 20.0")',
      surfaceFinish: 'Cold Drawn Bright (h9), Centerless Ground (h8), Rough Turned',
      length: '3 to 6 Meters Random or Precision Cut Billets',
      testing: '100% Eddy Current / Ultrasonic testing for internal voids, PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (304L) / ≥ 515 MPa (304)',
      yield: '≥ 170 MPa (304L) / ≥ 205 MPa (304)',
      elongation: '≥ 40% in 2"',
      hardness: '≤ 215 HBW (95 HRB)',
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
      'Industrial pump shafts, impellers, and agitator drive spindles',
      'Machined valve stems, guide pins, and hinge pivots',
      'Food processing machinery shafts and beverage bottling components',
      'Architectural tie rods and marine deck hardware'
    ]
  },
  {
    id: 'astm-a276-type-316-316l',
    slug: 'astm-a276-type-316-316l',
    aliases: ['ss-316-round-bar', 'a276-316', 'ss316-rod', 'marine-shaft-316'],
    name: 'ASTM A276 / A479 Type 316 / 316L Round Bar',
    specification: 'ASTM A276 / ASTM A479 / ASME SA479',
    grade: 'Type 316 / 316L Dual Certified (2.0 - 3.0% Moly)',
    class: 'Marine & Chemical Shafting Grade',
    code: 'A276 316/L MOLY SHAFT',
    badge: 'CHLORIDE CORROSION PROOF',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Precision Ground Round Bars & Forged Shafts',
    standards: 'ASTM A276, ASTM A479, NACE MR0175, ISO 15156',
    shortDesc: '2.0-3.0% Molybdenum-bearing stainless round bar delivering exceptional resistance to marine saltwater and chemical pitting.',
    fullDesc: 'Solution-treated molybdenum-bearing austenitic stainless steel barstock. Extensively specified for boat propeller shafts, downhole valve spindles, and pharmaceutical agitator shafts due to its superior resistance to crevice attack, pitting, and organic acid corrosion.',
    features: [
      '2.0 - 3.0% Molybdenum content provides supreme resistance to marine pitting',
      'Centerless ground and burnished to Ra < 0.4 µm for hydraulic seal interfaces',
      'Qualified under NACE MR0175 / ISO 15156 for offshore sour oilfield operations',
      'Tested 100% by Ultrasonic Examination per ASTM A388 for zero internal defects'
    ],
    specs: {
      diameterRange: '3 mm to 500 mm',
      surfaceFinish: 'Ground Bright (h8/h9), Peeled & Polished, Smooth Turned',
      length: '3 to 6 Meters Random, Custom Cut Billets',
      testing: '100% Ultrasonic examination (UT), PMI, Hardness verification'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40%',
      hardness: '≤ 217 HBW (95 HRB)',
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
      'Marine boat propeller shafts, rudder stocks, and underwater struts',
      'Chemical reactor agitator drive shafts and rotary mechanical seals',
      'Downhole oilfield valve stems and instrument sensor housings',
      'Desalination high-pressure centrifugal pump rotors'
    ]
  },
  {
    id: 'astm-a564-grade-630-17-4ph',
    slug: 'astm-a564-grade-630-17-4ph',
    aliases: ['17-4ph-bar', 'a564-630', '17-4-round-bar', 'precipitation-hardened-bar'],
    name: 'ASTM A564 Grade 630 (17-4PH) Stainless Bar',
    specification: 'ASTM A564 / ASME SA564',
    grade: 'Grade 630 (17-4PH / UNS S17400)',
    class: 'Precipitation Hardened Condition H900 / H1150',
    code: '17-4PH 1310 MPA HIGH STRENGTH',
    badge: '1310 MPA PRECIPITATION HARDENED',
    uns: 'UNS S17400',
    din: '1.4542 (X5CrNiCuNb16-4)',
    productForm: 'Centerless Ground & Turned Solid Round Bars',
    standards: 'ASTM A564/A564M, AMS 5643, NACE MR0175 (H1150-M)',
    shortDesc: 'Precipitation-hardening martensitic stainless bar delivering extreme tensile strength (up to 1310 MPa) with high corrosion resistance.',
    fullDesc: 'Chromium-nickel-copper precipitation-hardening stainless steel bar. Can be heat-treated to a wide range of strength and toughness levels: Condition H900 yields maximum tensile strength (≥ 1310 MPa), while Condition H1150-M provides high impact toughness and NACE MR0175 sour service compliance.',
    features: [
      'High tensile strength up to 1310 MPa (190 ksi) in Condition H900',
      'Condition H1150-M approved for sour oilfield service per NACE MR0175',
      'High resistance to fatigue, cavitation erosion, and fretting wear',
      'Minimum dimensional distortion during final low-temperature aging cycle'
    ],
    specs: {
      diameterRange: '6 mm to 300 mm (0.25" to 12.0")',
      conditions: 'Condition A (Solution Annealed), H900, H1025, H1150, H1150-M',
      surfaceFinish: 'Centerless Ground (h9), Peeled & Polished',
      testing: 'Charpy V-Notch impact, Hardness (up to 44 HRC in H900), 100% UT'
    },
    mechanical: {
      tensile: '≥ 1310 MPa (Cond H900) / ≥ 930 MPa (Cond H1150)',
      yield: '≥ 1170 MPa (Cond H900) / ≥ 725 MPa (Cond H1150)',
      elongation: '≥ 10% (H900) / ≥ 16% (H1150)',
      hardness: '38 - 44 HRC (Cond H900) / ≤ 33 HRC (Cond H1150)',
      maxTemp: '315°C'
    },
    chemistry: {
      cr: '15.0 - 17.5%',
      ni: '3.0 - 5.0%',
      cu: '3.0 - 5.0%',
      nb: '0.15 - 0.45%',
      c: '≤ 0.07%',
      mn: '≤ 1.00%'
    },
    applications: [
      'High-performance aerospace structural pins, fasteners, and lock-bolts',
      'Centrifugal pump drive shafts subjected to severe cyclic torque',
      'Nuclear reactor control rod drive mechanisms and valve trim',
      'Offshore downhole drilling motor shafts and packer mandrels'
    ]
  },
  {
    id: 'astm-a276-duplex-2205',
    slug: 'astm-a276-duplex-2205',
    aliases: ['duplex-2205-round-bar', 's31803-round-bar', 's32205-bar'],
    name: 'ASTM A276 UNS S31803 / S32205 (Duplex 2205) Bar',
    specification: 'ASTM A276 / ASTM A479',
    grade: 'UNS S31803 / UNS S32205 (2205 Duplex)',
    class: 'High Yield Marine Pump Shafting (450 MPa Yield)',
    code: 'DUPLEX 2205 SOLID BAR',
    badge: '450 MPA DOUBLE YIELD',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Precision Ground Round Bars & Forged Shafts',
    standards: 'ASTM A276, ASTM A479, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex stainless round bar providing double the yield strength of 316L and supreme SCC resistance in marine shafts.',
    fullDesc: 'Hot-rolled or forged 22% Chromium, 5% Nickel, 3% Molybdenum duplex barstock. Balanced 50/50 microstructure delivers minimum yield strength of 450 MPa and exceptional endurance against fatigue, erosion-corrosion, and pitting in high-velocity marine and chemical pumps.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L stainless bar',
      'PREN ≥ 35 ensures high resistance to localized pitting in seawater',
      'High fatigue endurance limit under cyclic rotational shaft loads',
      'NORSOK M-650 qualified mill manufacturing with 100% UT scanning'
    ],
    specs: {
      diameterRange: '6 mm to 400 mm',
      surfaceFinish: 'Centerless Ground (h9), Smooth Turned, Peeled',
      length: '3 to 6 Meters Random, Cut Billets',
      testing: 'ASTM A923 Method C Ferric Chloride Corrosion, 100% UT, PMI'
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
      'Marine boat propeller shafts, rudder pintles, and stern tube bearings',
      'High-pressure reverse osmosis seawater desalination pump shafts',
      'Centrifugal decanter centrifuge bowls and screw conveyor shafts',
      'Offshore downhole logging tool housings and subsea valve stems'
    ]
  },
  {
    id: 'astm-b348-grade-5-ti6al4v',
    slug: 'astm-b348-grade-5-ti6al4v',
    aliases: ['titanium-grade-5-round-bar', 'ti-6al-4v-bar', 'b348-gr5'],
    name: 'ASTM B348 Grade 5 (Ti-6Al-4V) Titanium Bar',
    specification: 'ASTM B348 / ASME SB348',
    grade: 'Grade 5 (Ti-6Al-4V Alpha-Beta Alloy)',
    class: 'Aerospace & High-Strength Marine Grade (895 MPa)',
    code: 'B348 GR.5 TI-6AL-4V BAR',
    badge: '895 MPA AEROSPACE TITANIUM',
    uns: 'UNS R56400',
    din: '3.7165 (TiAl6V4)',
    productForm: 'Precision Ground Round Bars & Rotating Shafts',
    standards: 'ASTM B348, AMS 4928, ISO 5832-3 (Medical)',
    shortDesc: 'Alpha-beta titanium alloy round bar delivering extreme tensile strength (≥ 895 MPa) with 45% weight savings over steel.',
    fullDesc: 'The premier engineering titanium alloy barstock. Combines 6% Aluminum and 4% Vanadium to attain minimum tensile strength of 895 MPa (130 ksi) with density of only 4.43 g/cm³, providing the highest strength-to-weight ratio among structural alloys alongside total immunity to marine seawater.',
    features: [
      'Extreme tensile strength of 895 MPa combined with light density (4.43 g/cm³)',
      'Total immunity to marine seawater pitting, erosion, and cavitation attack',
      'High fatigue endurance limit and fracture toughness for rotating shafts',
      'Non-magnetic with high biocompatibility for medical surgical implants'
    ],
    specs: {
      diameterRange: '5 mm to 250 mm',
      surfaceFinish: 'Centerless Ground (h8/h9), Peeled & Polished',
      length: '1 to 4 Meters Random, Precision Cut Discs',
      testing: '100% Ultrasonic Flaw Detection, Microstructure (alpha/beta phase), PMI'
    },
    mechanical: {
      tensile: '≥ 895 MPa (130,000 psi)',
      yield: '≥ 828 MPa (120,000 psi)',
      elongation: '≥ 10%',
      hardness: '30 - 36 HRC (300 - 340 HBW)',
      maxTemp: '400°C'
    },
    chemistry: {
      ti: 'Balance',
      al: '5.50 - 6.75%',
      v: '3.50 - 4.50%',
      fe: '≤ 0.40%',
      o: '≤ 0.20%',
      c: '≤ 0.08%'
    },
    applications: [
      'Aerospace engine turbine discs, rotating shafts, and landing gear bolts',
      'Offshore marine titanium stress joints and deepwater riser tie-ins',
      'High-performance motorsport racing crankshafts and connecting rods',
      'Surgical orthopedic implants, bone screws, and spinal rods'
    ]
  },
  {
    id: 'inconel-718-round-bar',
    slug: 'inconel-718-round-bar',
    aliases: ['inconel-718-bar', 'alloy-718-round-bar', 'b637-n07718'],
    name: 'Inconel 718 (UNS N07718) High Strength Bar',
    specification: 'ASTM B637 / ASME SB637',
    grade: 'UNS N07718 (Inconel Alloy 718)',
    class: 'Precipitation Hardened 1240 MPa Superalloy',
    code: 'INCONEL 718 1240 MPA BAR',
    badge: '1240 MPA SUBSEA MONSTER',
    uns: 'UNS N07718',
    din: '2.4668 (NiCr19Fe19Nb5Mo3)',
    productForm: 'High Strength Shafts, Forged Bars, Rotor Billets',
    standards: 'ASTM B637, AMS 5662 / 5663, NACE MR0175',
    shortDesc: 'Precipitation-hardened nickel-chromium-molybdenum superalloy bar delivering 1240 MPa tensile strength for gas turbines and subsea shafts.',
    fullDesc: 'Manufactured by vacuum induction melting (VIM) and vacuum arc remelting (VAR). Precipitation-hardened with niobium (columbium) to form gamma double-prime precipitates, achieving exceptional tensile strength (≥ 1240 MPa) and high creep rupture endurance up to 650°C without post-weld cracking.',
    features: [
      'Minimum tensile strength of 1240 MPa (180 ksi) & yield of 1034 MPa (150 ksi)',
      'Retains exceptional strength and creep resistance at temperatures up to 650°C',
      'Immune to chloride stress corrosion cracking and hydrogen embrittlement',
      'Fully qualified under NACE MR0175 for extreme sour gas wellhead service'
    ],
    specs: {
      diameterRange: '10 mm to 300 mm',
      surfaceFinish: 'Centerless Ground (h8/h9), Peeled & Polished, Rough Turned',
      heatTreatment: 'Solution Annealed and Precipitation Hardened (Double Aging)',
      testing: '100% Ultrasonic examination, Charpy at -46°C, Hot Tensile, PMI'
    },
    mechanical: {
      tensile: '≥ 1240 MPa (180,000 psi)',
      yield: '≥ 1034 MPa (150,000 psi)',
      elongation: '≥ 12%',
      hardness: '32 - 40 HRC',
      maxTemp: '650°C'
    },
    chemistry: {
      ni: '50.0 - 55.0%',
      cr: '17.0 - 21.0%',
      nb: '4.75 - 5.50%',
      mo: '2.80 - 3.30%',
      ti: '0.65 - 1.15%',
      al: '0.20 - 0.80%',
      fe: 'Balance'
    },
    applications: [
      'Gas turbine rotor shafts, compressor discs, and high-temp turbine blades',
      'Deepwater subsea wellhead high-pressure valve stems and mandrels',
      'Rocket motor turbopump drive shafts and liquid propellant injector pins',
      'Nuclear reactor core restraint studs and high-flux control components'
    ]
  }
];
