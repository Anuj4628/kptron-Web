/**
 * Research-Verified Industrial Sheets & Heavy Plates Specifications & Metallurgy
 * Standards: ASTM A240, ASTM A516, ASTM A387, ASTM B265, EN 10028-2, EN 10028-3
 * Thickness Range: 0.5 mm to 150 mm | Widths: 1000 mm to 3500 mm | Lengths: Up to 12000 mm
 * Finishes: 2B (Cold Rolled), No. 1 (Hot Rolled Annealed & Pickled), Shot Blasted, Mill Edge, Trimmed Edge
 */

export const SHEETS_PLATES_CARBON_STEEL_GRADES = [
  {
    id: 'astm-a516-grade-70',
    slug: 'astm-a516-grade-70',
    aliases: ['a516-gr70', 'sa516-70', 'a516-70-plate', 'boiler-plate-a516-70'],
    name: 'ASTM A516 Grade 70 Pressure Vessel Plate',
    specification: 'ASTM A516 / ASME SA516',
    grade: 'Grade 70 (Killed Carbon Steel for Pressure Vessels)',
    class: 'Moderate & Lower Temperature Service (Normalized for thk > 40 mm)',
    code: 'A516 GR.70 BOILER QUALITY',
    badge: 'BOILER & PRESSURE VESSEL',
    uns: 'UNS K02700',
    din: '1.0487 (P295GH / 17Mn4)',
    productForm: 'Heavy Carbon Steel Pressure Vessel Plates',
    standards: 'ASTM A516/A516M, ASME SA516, EN 10028-2',
    shortDesc: 'Fine-grained fully killed carbon steel boiler plate providing superior notch toughness in moderate and lower temperature vessels.',
    fullDesc: 'The global standard pressure vessel carbon steel plate. Produced using fine austenitic grain practice (aluminum killed) and normalized when plate thickness exceeds 40 mm (1.5 in). Delivers tensile strength of 485 to 620 MPa (70-90 ksi) and high Charpy impact energy for steam boilers and petrochemical reactors.',
    features: [
      'High tensile strength: 485 to 620 MPa (70,000 - 90,000 psi) per ASME Section II',
      'Fully aluminum-killed with fine austenitic grain size (ASTM No. 5 or finer)',
      'Vacuum degassed with optional HIC (Hydrogen Induced Cracking) resistance testing',
      'Ultrasonically examined to ASTM A578 Level II / III to verify internal sound quality'
    ],
    specs: {
      thicknessRange: '6 mm to 150 mm (0.25" to 6.0")',
      plateDimensions: 'Width: 1500 to 3500 mm | Length: up to 12,000 mm',
      heatTreatment: 'As-Rolled (≤ 40 mm) / Normalized (> 40 mm or when specified)',
      testing: 'Charpy V-Notch at -20°C/-46°C, Transverse tensile, 100% Ultrasonic (UT)'
    },
    mechanical: {
      tensile: '485 - 620 MPa (70,000 - 90,000 psi)',
      yield: '≥ 260 MPa (38,000 psi)',
      elongation: '≥ 21% in 2"',
      hardness: '≤ 187 HBW',
      maxTemp: '425°C',
      impactTest: 'Charpy V-Notch tested (typically ≥ 27 J at -20°C / -46°C)'
    },
    chemistry: {
      c: '≤ 0.27% (t ≤ 12.5mm) to ≤ 0.31% (t > 100mm)',
      mn: '0.85 - 1.20%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Boiler steam drums, mud drums, and deaerator pressure vessels',
      'Petrochemical refinery fractionating columns and reactors',
      'LPG/propane high-pressure storage bullet tanks and spheres',
      'Heat exchanger shell barrels and heavy tubesheet backing plates'
    ]
  },
  {
    id: 'astm-a516-grade-60',
    slug: 'astm-a516-grade-60',
    aliases: ['a516-gr60', 'sa516-60', 'a516-60-plate'],
    name: 'ASTM A516 Grade 60 Pressure Vessel Plate',
    specification: 'ASTM A516 / ASME SA516',
    grade: 'Grade 60 (Lower Carbon High Ductility)',
    class: 'Low-Temperature Toughness Focus',
    code: 'A516 GR.60 DUCTILE VESSEL',
    badge: 'HIGH DUCTILITY & WELDABILITY',
    uns: 'UNS K02100',
    din: '1.0486 (P275NH / 19Mn6)',
    productForm: 'Pressure Vessel Carbon Steel Plates',
    standards: 'ASTM A516/A516M, ASME SA516',
    shortDesc: 'Lower-carbon (max 0.21%) pressure vessel steel plate delivering exceptional cold-forming ductility and low-temperature impact toughness.',
    fullDesc: 'Manufactured with reduced carbon and balanced manganese to provide higher ductility (elongation ≥ 25%) and lower carbon equivalent (CE) than Grade 70. Ideal for vessels requiring extensive cold head forming, dishing, and post-weld heat treatment.',
    features: [
      'Lower carbon content (C ≤ 0.21%) maximizes weldability and cold head dishing',
      'Higher elongation (≥ 25%) prevents edge tearing during severe forming operations',
      'Normalized condition guarantees ductile behavior down to -50°C',
      'Certified EN 10204 3.1 with plate mill heat analysis and UT scan records'
    ],
    specs: {
      thicknessRange: '6 mm to 120 mm',
      plateDimensions: 'Width: 1500 to 3000 mm | Length: up to 12,000 mm',
      heatTreatment: 'Normalized or Stress Relieved (PWHT)',
      testing: 'Charpy V-Notch at -50°C, 100% Ultrasonic examination, Tensile'
    },
    mechanical: {
      tensile: '415 - 550 MPa (60,000 - 80,000 psi)',
      yield: '≥ 220 MPa (32,000 psi)',
      elongation: '≥ 25% in 2"',
      hardness: '≤ 160 HBW',
      maxTemp: '425°C',
      impactTest: '≥ 27 J at -50°C'
    },
    chemistry: {
      c: '≤ 0.21% (t ≤ 12.5mm)',
      mn: '0.60 - 1.20%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Dished ends, torispherical heads, and ellipsoidal vessel caps',
      'Low-temperature storage tanks for refrigerated gases',
      'Hydrocarbon distillation column shell plates and skirts',
      'Heat exchanger floating heads and shell channel covers'
    ]
  }
];

export const SHEETS_PLATES_STAINLESS_STEEL_GRADES = [
  {
    id: 'astm-a240-type-304-304l',
    slug: 'astm-a240-type-304-304l',
    aliases: ['a240-304', 'ss-304-sheet', 'ss-304-plate', '304-stainless-plate', 'stainless-steel-sheets'],
    name: 'ASTM A240 Type 304 / 304L Stainless Sheet & Plate',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'Type 304 / 304L Dual Certified',
    class: 'Cold Rolled Sheet (2B/BA) & Hot Rolled Plate (No. 1)',
    code: 'A240 304/304L DUAL PLATE',
    badge: 'UNIVERSAL CORROSION PROOF',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    productForm: 'Cold Rolled Sheets (0.5-3mm) & Hot Rolled Plates (4-100mm)',
    standards: 'ASTM A240/A240M, ASME SA240, EN 10088-2',
    shortDesc: 'Dual-certified austenitic stainless steel sheet and plate offering high ductility, weldability, and hygienic corrosion resistance.',
    fullDesc: 'Hot-rolled or cold-rolled austenitic stainless steel plate supplied in solution-annealed and pickled condition. Features low carbon (C ≤ 0.030%) to eliminate weld-decay sensitization, making it the primary material for tanks, pressure vessels, and architectural facades.',
    features: [
      'Low carbon content (C ≤ 0.030%) preserves corrosion resistance in welded zones',
      'Superior cold-forming ductility with elongation exceeding 40%',
      'Cryogenic toughness retained without embrittlement down to -196°C',
      'Supplied with laser-film protection for flawless mirror or satin surface finishes'
    ],
    specs: {
      thicknessRange: '0.5 mm to 3.0 mm (CR Sheet) / 4.0 mm to 100 mm (HR Plate)',
      dimensions: '1000x2000, 1250x2500, 1500x3000, 2000x6000 mm',
      surfaceFinish: '2B Smooth Cold Rolled, No. 4 Satin Brush, No. 1 HRAP Pickled',
      testing: '100% PMI, Intergranular Corrosion ASTM A262 Practice E, Ultrasonic'
    },
    mechanical: {
      tensile: '≥ 485 MPa (304L) / ≥ 515 MPa (304)',
      yield: '≥ 170 MPa (304L) / ≥ 205 MPa (304)',
      elongation: '≥ 40% in 2"',
      hardness: '≤ 92 HRB / 201 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Dairy, brewery, wine, and food processing storage silos',
      'Chemical processing mixing vessels, autoclaves, and tanks',
      'Architectural exterior curtain walls, canopies, and elevator panels',
      'Cryogenic LNG storage inner tank containment liners'
    ]
  },
  {
    id: 'astm-a240-type-316-316l',
    slug: 'astm-a240-type-316-316l',
    aliases: ['a240-316', 'ss-316-sheet', 'ss-316-plate', '316-stainless-plate'],
    name: 'ASTM A240 Type 316 / 316L Stainless Sheet & Plate',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'Type 316 / 316L Dual Certified (2.0 - 3.0% Moly)',
    class: 'Marine & Chemical Pressure Vessel Grade',
    code: 'A240 316/316L MOLY PLATE',
    badge: 'CHLORIDE PITTING RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404 (X2CrNiMo17-12-2)',
    productForm: 'Cold Rolled Sheets & Heavy Hot Rolled Plates',
    standards: 'ASTM A240, ASME SA240, EN 10088-2, NACE MR0175',
    shortDesc: 'Molybdenum-bearing austenitic stainless plate delivering superior resistance to marine saltwater pitting and chemical acid attack.',
    fullDesc: 'Solution-annealed 2.0-3.0% Molybdenum stainless steel plate. The addition of molybdenum significantly elevates resistance to pitting and crevice corrosion in chloride-bearing water, sulfuric acid, and marine atmospheres compared to grade 304.',
    features: [
      '2.0 - 3.0% Molybdenum addition provides high resistance to chloride pitting',
      'Dual-certified 316/316L chemistry meeting NACE MR0175 sour service codes',
      'Excellent weldability with zero post-weld annealing required for 316L',
      'Fully ultrasonic scanned per ASTM A578 for pressure vessel integrity'
    ],
    specs: {
      thicknessRange: '0.5 mm to 3.0 mm (CR) / 4.0 mm to 120 mm (HR Plate)',
      dimensions: '1250x2500, 1500x3000, 2000x6000 mm (Cut-to-length available)',
      surfaceFinish: '2B, No. 4 Brush, No. 1 HRAP Pickled & Passivated',
      testing: '100% PMI, ASTM G48 Pitting Corrosion, Ultrasonic Examination'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40% in 2"',
      hardness: '≤ 95 HRB / 217 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Offshore platform topside separator vessels and bulkheads',
      'Desalination plant evaporator vessels and seawater piping plates',
      'Pharmaceutical sterile process tanks and chromatography skids',
      'Pulp and paper bleaching towers and acid recovery vessels'
    ]
  },
  {
    id: 'astm-a240-type-310s',
    slug: 'astm-a240-type-310s',
    aliases: ['a240-310s', 'ss-310-plate', '310s-heat-plate'],
    name: 'ASTM A240 Type 310S Refractory Plate',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'Type 310S (25Cr - 20Ni High Heat)',
    class: '1150°C Continuous Oxidation Resistant',
    code: 'A240 310S 1150°C REFRACTORY',
    badge: '1150°C THERMAL RESISTANT',
    uns: 'UNS S31008',
    din: '1.4845 (X8CrNi25-21)',
    productForm: 'Heavy Stainless Steel Heat-Resistant Plates',
    standards: 'ASTM A240, ASME SA240, EN 10095',
    shortDesc: '25% Cr, 20% Ni refractory austenitic plate resisting cyclic scaling, oxidation, and carburization up to 1150°C.',
    fullDesc: 'Hot-rolled 25Cr-20Ni high-alloy austenitic stainless plate. High chromium and nickel content ensures the formation of a dense, adherent oxide layer that prevents scaling and metal loss under continuous or intermittent temperatures up to 1150°C.',
    features: [
      'Forms a protective chromia barrier resisting scaling up to 1150°C',
      'High creep-rupture strength at sustained high temperatures',
      'Superior resistance to carburizing, oxidizing, and cyaniding atmospheres',
      'Excellent weldability using matching AWS ER310 filler metal'
    ],
    specs: {
      thicknessRange: '3.0 mm to 60.0 mm',
      dimensions: '1500x3000 mm, 2000x6000 mm',
      surfaceFinish: 'No. 1 Hot Rolled Annealed & Pickled',
      testing: 'Hot Tensile, High-Temperature Oxidation Verification, 100% PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 40%',
      hardness: '≤ 95 HRB / 217 HBW',
      maxTemp: '1150°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '19.0 - 22.0%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.50%'
    },
    applications: [
      'Cement kiln discharge hoods and cyclone preheater shells',
      'Industrial furnace baffles, muffle tubes, and hearth plates',
      'Thermal incinerator combustion chambers and ducting',
      'Fluidized bed coal combustion grid plates and boiler shields'
    ]
  }
];

export const SHEETS_PLATES_ALLOY_STEEL_GRADES = [
  {
    id: 'astm-a387-grade-11-cl2',
    slug: 'astm-a387-grade-11-cl2',
    aliases: ['a387-gr11', 'sa387-11', 'a387-11-plate', 'chrome-moly-plate'],
    name: 'ASTM A387 Grade 11 Class 2 Boiler Plate',
    specification: 'ASTM A387 / ASME SA387',
    grade: 'Grade 11 Class 2 (1.25Cr - 0.5Mo)',
    class: 'Elevated Temperature Pressure Vessel Service',
    code: 'A387 GR.11 CL.2 1.25CR',
    badge: '570°C CREEP RESISTANT',
    uns: 'UNS K11789',
    din: '1.7335 (13CrMo4-5 Plate)',
    productForm: 'Normalized & Tempered Alloy Steel Boiler Plates',
    standards: 'ASTM A387/A387M, ASME SA387, EN 10028-2',
    shortDesc: 'Chromium-molybdenum alloy pressure vessel plate engineered for elevated temperature service and steam generation up to 570°C.',
    fullDesc: 'Normalized and tempered 1.25% Chromium, 0.5% Molybdenum alloy steel plate for pressure vessels and boilers. Specifically formulated to resist creep rupture, graphitization, and hydrogen embrittlement in elevated-temperature steam generation and refinery hydroprocessing.',
    features: [
      'Class 2 heat treatment provides elevated tensile strength (515 - 690 MPa)',
      'Resistant to creep deformation and thermal fatigue up to 570°C',
      'Fully compliant with ASME Boiler and Pressure Vessel Code Section VIII',
      '100% Ultrasonic tested per ASTM A578 Level II'
    ],
    specs: {
      thicknessRange: '6 mm to 120 mm',
      plateDimensions: 'Width: 1500 to 3000 mm | Length: up to 12,000 mm',
      heatTreatment: 'Normalized (900-980°C) and Tempered (620°C min)',
      testing: 'Hot Tensile, Charpy V-Notch at 0°C/-20°C, 100% Ultrasonic (UT)'
    },
    mechanical: {
      tensile: '515 - 690 MPa (75,000 - 100,000 psi)',
      yield: '≥ 310 MPa (45,000 psi)',
      elongation: '≥ 22% in 2"',
      hardness: '≤ 207 HBW',
      maxTemp: '570°C'
    },
    chemistry: {
      cr: '1.00 - 1.50%',
      mo: '0.45 - 0.65%',
      c: '0.05 - 0.17%',
      mn: '0.40 - 0.65%',
      si: '0.50 - 0.80%',
      p: '≤ 0.025%',
      s: '≤ 0.025%'
    },
    applications: [
      'Thermal power generation high-pressure boiler steam drums',
      'Petrochemical hydrodesulfurization (HDS) reactor shells',
      'Coke drum pressure shells and catalytic cracking vessels',
      'Heat exchanger shell tubesheets and channel heads'
    ]
  },
  {
    id: 'astm-a387-grade-22-cl2',
    slug: 'astm-a387-grade-22-cl2',
    aliases: ['a387-gr22', 'sa387-22', 'a387-22-plate'],
    name: 'ASTM A387 Grade 22 Class 2 Boiler Plate',
    specification: 'ASTM A387 / ASME SA387',
    grade: 'Grade 22 Class 2 (2.25Cr - 1.0Mo)',
    class: 'Superheated Steam & Hydrocracker Vessel Service',
    code: 'A387 GR.22 CL.2 2.25CR',
    badge: '600°C SUPERCRITICAL',
    uns: 'UNS K21590 Plate',
    din: '1.7380 (10CrMo9-10 Plate)',
    productForm: 'Normalized & Tempered Heavy Pressure Vessel Plates',
    standards: 'ASTM A387/A387M, ASME SA387',
    shortDesc: '2.25% Chromium, 1% Molybdenum heavy pressure vessel plate engineered for hydrogen service and steam boilers up to 600°C.',
    fullDesc: 'Heavy-gauge 2.25Cr-1Mo alloy steel plate heat treated by normalization and tempering. Provides high creep rupture strength and proven resistance to high-pressure hydrogen attack (Nelson curve compliance) in oil refinery hydrocrackers.',
    features: [
      'Class 2 tensile strength (515 - 690 MPa) with high design stress allowance',
      'Proven resistance to high-pressure hydrogen attack in hydrocracker reactors',
      'Vacuum degassed with J-factor control (J ≤ 100) preventing temper embrittlement',
      'Full material test certificate (EN 10204 3.1) with step cooling test data'
    ],
    specs: {
      thicknessRange: '6 mm to 150 mm',
      plateDimensions: 'Width: 1500 to 3500 mm | Length: up to 12,000 mm',
      heatTreatment: 'Normalized at 900-960°C and Tempered at 680-750°C',
      testing: 'Step Cooling Test (Temper Embrittlement), Charpy at -30°C, 100% UT'
    },
    mechanical: {
      tensile: '515 - 690 MPa (75,000 - 100,000 psi)',
      yield: '≥ 310 MPa (45,000 psi)',
      elongation: '≥ 18% in 2"',
      hardness: '≤ 217 HBW',
      maxTemp: '600°C'
    },
    chemistry: {
      cr: '2.00 - 2.50%',
      mo: '0.90 - 1.10%',
      c: '0.05 - 0.15%',
      mn: '0.30 - 0.60%',
      si: '≤ 0.50%',
      p: '≤ 0.015%',
      s: '≤ 0.010%'
    },
    applications: [
      'Refinery catalytic hydrocracker and hydrotreater heavy-wall reactors',
      'Supercritical fossil fuel boiler drums and steam manifolds',
      'Coal gasification synthesis reactors and waste heat boilers',
      'Ammonia synthesis converters operating at elevated temperatures'
    ]
  }
];

export const SHEETS_PLATES_DUPLEX_GRADES = [
  {
    id: 'astm-a240-uns-s31803-s32205',
    slug: 'astm-a240-uns-s31803-s32205',
    aliases: ['duplex-2205-plate', 'a240-s31803', 's32205-plate', 'duplex-plate'],
    name: 'ASTM A240 UNS S31803 / S32205 (Duplex 2205) Plate',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'UNS S31803 / S32205 (Duplex 2205)',
    class: 'Double Yield Strength Marine Plate',
    code: 'A240 DUPLEX 2205 PLATE',
    badge: '450 MPA HIGH YIELD',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Hot Rolled and Cold Rolled Duplex Plates & Sheets',
    standards: 'ASTM A240, ASME SA240, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic duplex stainless plate delivering 450 MPa yield strength and superior resistance to chloride stress corrosion cracking.',
    fullDesc: 'Hot-rolled and solution-annealed 22% Chromium, 5% Nickel, 3% Molybdenum duplex plate. 50/50 balanced microstructure delivers double the yield strength of 316L, allowing substantial weight reduction in offshore separator vessels, storage tanks, and structural bulkheads.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L plate',
      'PREN ≥ 35 ensures high resistance to localized pitting in seawater',
      'Allows 30-40% reduction in vessel wall thickness compared to austenitic steel',
      'NORSOK M-650 qualified mill production with ASTM A923 Method C test'
    ],
    specs: {
      thicknessRange: '1.5 mm to 80.0 mm',
      dimensions: '1500x3000 mm, 2000x6000 mm (Cut-to-size available)',
      surfaceFinish: 'No. 1 HRAP Pickled & Passivated',
      testing: 'ASTM A923 Method C Ferric Chloride, 100% Ultrasonic, PMI Spectro'
    },
    mechanical: {
      tensile: '≥ 655 MPa (95,000 psi)',
      yield: '≥ 450 MPa (65,000 psi)',
      elongation: '≥ 25% in 2"',
      hardness: '≤ 293 HBW (≤ 31 HRC)',
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
      'Offshore production separator vessels and scrubber tanks',
      'Seawater reverse osmosis desalination high-pressure pump housings',
      'Chemical tanker deck cargo tanks and hold bulkheads',
      'Pulp and paper continuous digester pressure shells'
    ]
  },
  {
    id: 'astm-a240-uns-s32750',
    slug: 'astm-a240-uns-s32750',
    aliases: ['super-duplex-2507-plate', 'a240-s32750', '2507-plate'],
    name: 'ASTM A240 UNS S32750 (Super Duplex 2507) Plate',
    specification: 'ASTM A240 / ASME SA240',
    grade: 'UNS S32750 (2507 Super Duplex)',
    class: 'Extreme Offshore Marine Plate (PREN ≥ 42)',
    code: 'A240 S32750 PREN ≥ 42',
    badge: 'PREN ≥ 42 SUPER DUPLEX',
    uns: 'UNS S32750',
    din: '1.4410 (X2CrNiMoN25-7-4)',
    productForm: 'Super Duplex Stainless Steel Heavy Plates',
    standards: 'ASTM A240, ASME SA240, NORSOK M-650',
    shortDesc: '25% Cr super duplex plate with PREN ≥ 42 and 550 MPa yield strength for severe subsea, marine, and aggressive chloride environments.',
    fullDesc: 'Hot-rolled super duplex stainless steel plate containing 25% Chromium, 4% Molybdenum, and 0.28% Nitrogen. Delivers high tensile strength (≥ 750 MPa) and proven immunity to localized crevice and pitting corrosion in hot chlorinated seawater and acidic oilfield wells.',
    features: [
      'Guaranteed PREN ≥ 42 for supreme resistance to pitting in seawater',
      'High minimum yield strength (≥ 550 MPa) enables ultra-compact pressure designs',
      'Immune to chloride stress corrosion cracking at temperatures up to 250°C',
      'Tested to ASTM G48 Method A with zero pitting at 50°C'
    ],
    specs: {
      thicknessRange: '3.0 mm to 60.0 mm',
      dimensions: '1500x3000 mm, 2000x6000 mm',
      surfaceFinish: 'No. 1 HRAP Pickled',
      testing: 'ASTM G48 Method A at 50°C, 100% UT, Metallographic ferrite count (40-60%)'
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
      c: '≤ 0.030%',
      cu: '≤ 0.50%'
    },
    applications: [
      'Subsea manifold structural plates and Christmas tree frames',
      'Offshore deluge firewater tanks and sea-lift vessel hulls',
      'Flue gas desulfurization (FGD) absorber tower shell plates',
      'High-pressure acid leach (HPAL) autoclaves in mineral processing'
    ]
  }
];

export const SHEETS_PLATES_TITANIUM_GRADES = [
  {
    id: 'astm-b265-grade-2',
    slug: 'astm-b265-grade-2',
    aliases: ['titanium-grade-2-plate', 'ti-gr2-sheet', 'b265-gr2'],
    name: 'ASTM B265 Grade 2 Titanium Sheet & Plate',
    specification: 'ASTM B265 / ASME SB265',
    grade: 'Grade 2 (Commercially Pure CP-2)',
    class: 'Seawater & Chlor-Alkali Immersion Plate',
    code: 'B265 GR.2 CP TITANIUM',
    badge: 'SEAWATER IMMUNE & LIGHT',
    uns: 'UNS R50400',
    din: '3.7035',
    productForm: 'Cold Rolled Sheets (0.5-3mm) & Hot Rolled Plates (4-50mm)',
    standards: 'ASTM B265, ASME SB265',
    shortDesc: 'Commercially pure titanium plate providing complete immunity to marine seawater pitting and 45% weight reduction over steel.',
    fullDesc: 'Unalloyed commercially pure Grade 2 titanium plate. Combines moderate mechanical strength with extraordinary corrosion resistance in seawater, wet chlorine gas, chlorites, nitric acid, and oxidizing environments. Provides approximately 45% weight savings over steel.',
    features: [
      'Total immunity to general and localized crevice corrosion in seawater',
      'Approximately 45% lighter than steel of comparable dimensions',
      'Self-healing titanium dioxide passive film resists severe erosive attack',
      'Certified EN 10204 3.1 with chemical and mechanical test reports'
    ],
    specs: {
      thicknessRange: '0.5 mm to 50.0 mm',
      dimensions: '1000x2000 mm, 1250x2500 mm, 1500x3000 mm',
      surfaceFinish: 'Cold Rolled Bright Annealed, Hot Rolled Pickled',
      testing: '100% Ultrasonic examination, Tensile, Bend test, PMI'
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
      'Plate heat exchanger plates for offshore and coastal power plants',
      'Chlor-alkali cell cathode plates and bleaching tanks',
      'Desalination multi-stage flash evaporator shell plates',
      'Marine naval submarine hull acoustic plates and fairings'
    ]
  }
];

// Comprehensive Flagship Sheets & Plates Master List
export const SHEETS_PLATES_GRADES = [
  ...SHEETS_PLATES_CARBON_STEEL_GRADES,
  ...SHEETS_PLATES_STAINLESS_STEEL_GRADES,
  ...SHEETS_PLATES_ALLOY_STEEL_GRADES,
  ...SHEETS_PLATES_DUPLEX_GRADES,
  ...SHEETS_PLATES_TITANIUM_GRADES
];
