/**
 * Research-Verified Industrial Fasteners Specifications & Metallurgy
 * Standards: ASTM A193, ASTM A194, ASTM A320, ASTM A453, ASME B18.2.1, ASME B18.2.2
 * Products: Continuous Threaded Stud Bolts, Heavy Hex Bolts, Heavy Hex Nuts, Washers
 * Thread Series: UNC (≤ 1" dia) / 8-UN (> 1" dia) Class 2A / 2B
 */

export const FASTENERS_GRADES = [
  {
    id: 'astm-a193-grade-b7',
    slug: 'astm-a193-grade-b7',
    aliases: ['b7-stud', 'b7-bolt', 'astm-a193-b7', 'a193-b7'],
    name: 'ASTM A193 Grade B7 High Tensile Stud Bolt',
    specification: 'ASTM A193 / ASME SA193',
    grade: 'Grade B7 (AISI 4140/4142 Cr-Mo)',
    class: 'High Tensile Pressure Boundary Bolting',
    code: 'A193 B7 860 MPA STUD',
    badge: 'HIGH TENSILE WORKHORSE',
    uns: 'UNS G41400 / G41420',
    din: '1.7225 (42CrMo4)',
    productForm: 'Continuous Threaded Stud Bolts & Heavy Hex Bolts',
    standards: 'ASTM A193/A193M, ASME B18.2.1, ASME B1.1 Class 2A',
    shortDesc: 'Chromium-molybdenum high tensile quenched & tempered alloy steel stud bolt for pressure vessels, valves, and flanges up to 540°C.',
    fullDesc: 'Manufactured from AISI 4140/4142 alloy steel, liquid-quenched and tempered at 593°C (1100°F) minimum. Delivers minimum tensile strength of 860 MPa (125 ksi) and yield strength of 720 MPa (105 ksi) for high-pressure ASME flange joints.',
    features: [
      'Minimum tensile strength of 860 MPa (125 ksi) up to 2-1/2" diameter',
      'Heat treated by liquid quenching and tempering above 593°C',
      'Precision 8-UN or UNC rolled threads providing high fatigue life',
      'Typically paired with ASTM A194 Grade 2H heavy hex nuts'
    ],
    specs: {
      sizeRange: '1/2" to 4" Diameter (M12 to M100 Metric)',
      threads: 'UNC for dia ≤ 1.0", 8-UN for dia > 1.0", Class 2A Fit',
      coating: 'Black Oxide, Zinc Plated, Hot-Dip Galvanized, PTFE / Xylan Coated',
      testing: 'Wedge Tensile, Proof Load, Hardness (≤ 321 HBW / 35 HRC), PMI'
    },
    mechanical: {
      tensile: '≥ 860 MPa (125,000 psi)',
      yield: '≥ 720 MPa (105,000 psi)',
      elongation: '≥ 16% in 4D',
      hardness: '≤ 321 HBW (≤ 35 HRC)',
      maxTemp: '540°C'
    },
    chemistry: {
      cr: '0.80 - 1.10%',
      mo: '0.15 - 0.25%',
      c: '0.38 - 0.48%',
      mn: '0.75 - 1.00%',
      si: '0.15 - 0.35%',
      p: '≤ 0.035%',
      s: '≤ 0.040%'
    },
    applications: [
      'Petrochemical refinery ASME B16.5 flange joint make-up',
      'Pressure vessel girth flanges and heat exchanger channel heads',
      'Pipeline valve bodies and high-pressure bonnet bolting',
      'Thermal power generation steam manifold joints'
    ]
  },
  {
    id: 'astm-a193-grade-b7m',
    slug: 'astm-a193-grade-b7m',
    aliases: ['b7m-stud', 'astm-a193-b7m', 'a193-b7m', 'nace-b7m-bolt'],
    name: 'ASTM A193 Grade B7M Sour Gas Stud Bolt',
    specification: 'ASTM A193 / ASME SA193',
    grade: 'Grade B7M (Controlled Hardness for Sour Service)',
    class: 'NACE MR0175 / ISO 15156 Compliant',
    code: 'A193 B7M NACE SOUR',
    badge: 'NACE SOUR GAS CERTIFIED',
    uns: 'UNS G41400 / G41420',
    din: '1.7225 Modified',
    productForm: 'Continuous Threaded Studs with 2 Heavy Hex Nuts',
    standards: 'ASTM A193, NACE MR0175, ISO 15156, ASME B18.2.1',
    shortDesc: 'Hardness-controlled (max 235 HBW / 22 HRC) Cr-Mo alloy steel stud bolt certified for severe H2S sour gas environments.',
    fullDesc: 'Heat treated with a special tempering cycle above 620°C (1150°F) to ensure maximum hardness does not exceed 235 HBW (22 HRC). Conforms to NACE MR0175 / ISO 15156 requirements to prevent sulfide stress cracking (SSC) in sour hydrocarbon service.',
    features: [
      '100% Individual hardness testing verifying hardness ≤ 235 HBW (22 HRC)',
      'Immune to sulfide stress corrosion cracking in wet H2S environments',
      'Paired with ASTM A194 Grade 2HM controlled-hardness heavy hex nuts',
      'Full material traceability with EN 10204 3.1 and NACE certification'
    ],
    specs: {
      sizeRange: '1/2" to 4" Diameter',
      threads: 'UNC (≤ 1"), 8-UN (> 1"), Class 2A',
      coating: 'Cadmium Plated, Zinc-Nickel, Fluoropolymer Xylan 1070',
      testing: '100% Hardness verified, Tensile test, Wet fluorescent MT'
    },
    mechanical: {
      tensile: '≥ 690 MPa (100,000 psi)',
      yield: '≥ 550 MPa (80,000 psi)',
      elongation: '≥ 18% in 4D',
      hardness: '200 - 235 HBW (99 HRB - 22 HRC)',
      maxTemp: '450°C'
    },
    chemistry: {
      cr: '0.80 - 1.10%',
      mo: '0.15 - 0.25%',
      c: '0.38 - 0.48%',
      mn: '0.75 - 1.00%',
      si: '0.15 - 0.35%'
    },
    applications: [
      'Sour crude oil production wellhead Christmas tree bolting',
      'Offshore acid gas gathering pipelines and choke manifolds',
      'Refinery amine gas sweetening units and sulfur recovery plants',
      'Petrochemical hydrodesulfurization (HDS) high-pressure flanges'
    ]
  },
  {
    id: 'astm-a193-grade-b16',
    slug: 'astm-a193-grade-b16',
    aliases: ['b16-stud', 'astm-a193-b16', 'a193-b16', 'high-temp-stud'],
    name: 'ASTM A193 Grade B16 High Temperature Stud Bolt',
    specification: 'ASTM A193 / ASME SA193',
    grade: 'Grade B16 (Cr-Mo-V High Temperature Alloy)',
    class: 'Superheated Steam Bolting up to 595°C',
    code: 'A193 B16 595°C STEAM',
    badge: '595°C CREEP RESISTANT',
    uns: 'UNS K41520',
    din: '1.7709 (21CrMoV5-7)',
    productForm: 'Continuous Threaded Stud Bolts & Hex Bolts',
    standards: 'ASTM A193, ASME B18.2.1, ASME B16.5',
    shortDesc: 'Chromium-molybdenum-vanadium alloy steel stud bolt providing high relaxation and creep resistance up to 595°C.',
    fullDesc: 'Forged from Cr-Mo-V alloy steel, oil-quenched and tempered at 650°C (1200°F) minimum. Vanadium additions create fine vanadium carbides that resist dislocation climb, preventing bolt relaxation and gasket leakage under prolonged superheated steam.',
    features: [
      'Vanadium additions provide superior stress-relaxation resistance up to 595°C',
      'Prevents bolt relaxation and gasket blowout on high-pressure steam turbines',
      'Tempered above 650°C ensuring high thermal stability under thermal cycles',
      'Paired with ASTM A194 Grade 7 or Grade 4 heavy hex nuts'
    ],
    specs: {
      sizeRange: '1/2" to 4" Diameter',
      threads: 'UNC / 8-UN Class 2A',
      coating: 'High-Temperature Anti-Seize Moly Paste, Plain Oiled',
      testing: 'High-Temp Stress Relaxation Test, Tensile, Hardness ≤ 321 HBW'
    },
    mechanical: {
      tensile: '≥ 860 MPa (125,000 psi)',
      yield: '≥ 720 MPa (105,000 psi)',
      elongation: '≥ 18%',
      hardness: '≤ 321 HBW (≤ 35 HRC)',
      maxTemp: '595°C'
    },
    chemistry: {
      cr: '0.80 - 1.15%',
      mo: '0.50 - 0.65%',
      v: '0.25 - 0.35%',
      c: '0.36 - 0.44%',
      mn: '0.45 - 0.70%',
      si: '0.15 - 0.35%'
    },
    applications: [
      'Thermal and nuclear power steam turbine casing split-line joints',
      'Supercritical steam generator stop and control valve bonnets',
      'Main steam pipe flange connections operating at 500-595°C',
      'Refinery catalytic cracker high-temperature vessel closures'
    ]
  },
  {
    id: 'astm-a320-grade-l7',
    slug: 'astm-a320-grade-l7',
    aliases: ['l7-stud', 'astm-a320-l7', 'a320-l7', 'low-temp-stud'],
    name: 'ASTM A320 Grade L7 Low Temperature Stud Bolt',
    specification: 'ASTM A320 / ASME SA320',
    grade: 'Grade L7 (-101°C Charpy Impact Tested)',
    class: 'Cryogenic & Sub-Zero Service',
    code: 'A320 L7 -101°C IMPACT',
    badge: 'CRYOGENIC -101°C TESTED',
    uns: 'UNS G41400',
    din: '1.7225 (42CrMo4 Low Temp)',
    productForm: 'Continuous Threaded Stud Bolts & Heavy Hex Nuts',
    standards: 'ASTM A320/A320M, ASME B18.2.1, ASME B31.3',
    shortDesc: 'Quenched & tempered alloy steel stud bolt certified by Charpy V-Notch impact testing at -101°C (-150°F) for low-temperature service.',
    fullDesc: 'Manufactured from AISI 4140 alloy steel, heat treated by quenching and tempering. Every production lot is subject to mandatory Charpy V-notch impact testing at -101°C to guarantee ductile toughness and prevent brittle shear failure under sub-zero and refrigerated conditions.',
    features: [
      'Guaranteed Charpy V-Notch impact energy ≥ 27 J (20 ft-lbf) at -101°C',
      'High minimum tensile strength of 860 MPa (125 ksi)',
      'Paired with ASTM A194 Grade 7 or Grade 4 impact-tested heavy hex nuts',
      'Full material test certificate (EN 10204 3.1) with impact test records'
    ],
    specs: {
      sizeRange: '1/2" to 2-1/2" Diameter',
      threads: 'UNC (≤ 1"), 8-UN (> 1"), Class 2A',
      coating: 'Cadmium Plated, Zinc-Nickel, Fluoropolymer PTFE',
      testing: 'Charpy V-Notch Impact at -101°C, Proof Load, Tensile, MT'
    },
    mechanical: {
      tensile: '≥ 860 MPa (125,000 psi)',
      yield: '≥ 720 MPa (105,000 psi)',
      elongation: '≥ 16%',
      hardness: '≤ 321 HBW',
      maxTemp: '400°C',
      impactTest: '≥ 27 J avg at -101°C (min 20 J individual)'
    },
    chemistry: {
      cr: '0.80 - 1.10%',
      mo: '0.15 - 0.25%',
      c: '0.38 - 0.48%',
      mn: '0.75 - 1.00%',
      si: '0.15 - 0.35%'
    },
    applications: [
      'LNG liquefaction trains, storage tanks, and loading arm flanges',
      'LPG and ethylene deep refrigeration compressor skids',
      'Arctic oilfield wellhead and transport pipeline connections',
      'Industrial liquid nitrogen and argon cryogenic manifold valves'
    ]
  },
  {
    id: 'astm-a193-grade-b8m-cl2',
    slug: 'astm-a193-grade-b8m-cl2',
    aliases: ['b8m-stud', 'b8m-cl2', 'astm-a193-b8m', 'ss-316-stud'],
    name: 'ASTM A193 Grade B8M Class 2 Stainless Stud Bolt',
    specification: 'ASTM A193 / ASME SA193',
    grade: 'Grade B8M Class 2 (AISI 316 Strain Hardened)',
    class: 'Strain Hardened High Tensile Stainless',
    code: 'A193 B8M CL2 316 STRAIN',
    badge: 'MOLY STAINLESS HIGH STRENGTH',
    uns: 'UNS S31600 Strain Hardened',
    din: '1.4401 (A4-70 / A4-80)',
    productForm: 'Continuous Threaded Stud Bolts & Heavy Hex Nuts',
    standards: 'ASTM A193, ASME B18.2.1, ISO 3506-1 A4-80',
    shortDesc: 'Strain-hardened AISI 316 stainless steel stud bolt delivering high tensile strength (≥ 760 MPa) and marine pitting immunity.',
    fullDesc: 'Manufactured from austenitic AISI 316 molybdenum stainless steel and precision strain-hardened (cold drawn) prior to thread rolling. Achieves high tensile strength (≥ 760 MPa) while maintaining superior resistance to marine chloride pitting and aggressive acid media.',
    features: [
      'Strain-hardened to achieve minimum tensile strength of 760 MPa (110 ksi)',
      '2.0 - 3.0% Molybdenum content provides supreme marine corrosion resistance',
      'Cold-rolled threads with burnished root radius for high cyclic fatigue life',
      'Paired with ASTM A194 Grade 8M stainless heavy hex nuts'
    ],
    specs: {
      sizeRange: '1/2" to 1-1/2" Diameter',
      threads: 'UNC / 8-UN Class 2A',
      coating: 'Passivated, PTFE Coated, Moly Coated',
      testing: 'Tensile, Yield, Hardness ≤ 321 HBW (35 HRC), 100% PMI'
    },
    mechanical: {
      tensile: '≥ 760 MPa (110,000 psi up to 3/4") / ≥ 690 MPa (up to 1")',
      yield: '≥ 655 MPa (95,000 psi) / ≥ 550 MPa',
      elongation: '≥ 15%',
      hardness: '≤ 321 HBW (≤ 35 HRC)',
      maxTemp: '535°C'
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
      'Offshore oil & gas marine platform piping and risers',
      'Desalination plant reverse osmosis high-pressure membrane housings',
      'Chemical reactor vessel nozzle flanges handling chlorides',
      'Coastal municipal wastewater and subsea pipeline connections'
    ]
  },
  {
    id: 'astm-a453-grade-660',
    slug: 'astm-a453-grade-660',
    aliases: ['a453-660', 'a286-stud', 'astm-a453-gr660', 'superalloy-bolt'],
    name: 'ASTM A453 Grade 660 (A286) Superalloy Stud Bolt',
    specification: 'ASTM A453 / ASME SA453',
    grade: 'Grade 660 Class A/B (A286 Superalloy)',
    class: 'Precipitation Hardened 700°C Service',
    code: 'A453 660 895 MPA 700°C',
    badge: '700°C PRECIPITATION HARDENED',
    uns: 'UNS S66286 (Alloy A286)',
    din: '1.4980 (X6NiCrTiMoVB25-15-2)',
    productForm: 'Continuous Threaded Stud Bolts, Hex Head Bolts, Nuts',
    standards: 'ASTM A453/A453M, ASME B18.2.1, NACE MR0175',
    shortDesc: 'Precipitation-hardened iron-nickel-chromium superalloy stud bolt designed for high tensile strength (≥ 895 MPa) up to 700°C.',
    fullDesc: 'Iron-base austenitic superalloy fortified with 26% Nickel, 15% Chromium, Titanium, and Molybdenum. Heat treated by solution annealing followed by precipitation hardening (aging) to attain high yield strength (≥ 585 MPa) and supreme creep resistance at temperatures exceeding 650°C.',
    features: [
      'Precipitation hardened to achieve minimum tensile strength of 895 MPa (130 ksi)',
      'Exceptional creep-rupture strength up to 700°C (1290°F) continuous operation',
      'Coefficient of thermal expansion compatible with austenitic stainless flanges',
      'Resistant to high-temperature oxidation and sour oilfield environments'
    ],
    specs: {
      sizeRange: '1/2" to 3" Diameter',
      threads: 'UNC / 8-UN Class 2A',
      coating: 'Passivated, High-Temperature Ceramic, Silver Plated Threads',
      testing: 'Stress Rupture Test at 650°C for 100 Hours, Tensile, Hardness 24-37 HRC'
    },
    mechanical: {
      tensile: '≥ 895 MPa (130,000 psi)',
      yield: '≥ 585 MPa (85,000 psi)',
      elongation: '≥ 15%',
      hardness: '248 - 341 HBW (24 - 37 HRC)',
      maxTemp: '700°C'
    },
    chemistry: {
      ni: '24.0 - 27.0%',
      cr: '13.5 - 16.0%',
      ti: '1.90 - 2.35%',
      mo: '1.00 - 1.50%',
      v: '0.10 - 0.50%',
      b: '0.003 - 0.010%',
      c: '≤ 0.08%'
    },
    applications: [
      'Gas turbine casing bolting and exhaust manifold flanges',
      'Nuclear reactor high-temperature pressure vessel closures',
      'Aircraft jet engine exhaust nozzle flange fasteners',
      'Severe thermal cycling petrochemical pyrolysis furnaces'
    ]
  },
  {
    id: 'inconel-718-fasteners',
    slug: 'inconel-718-fasteners',
    aliases: ['inconel-718-stud', 'uns-n07718-bolt', 'alloy-718-fastener'],
    name: 'Inconel 718 (UNS N07718) Extreme Fastener',
    specification: 'ASTM B637 / API 20E BSL-3',
    grade: 'UNS N07718 (Inconel Alloy 718)',
    class: 'Precipitation Hardened 150 ksi Yield',
    code: 'INCONEL 718 1240 MPA',
    badge: '1240 MPA SUBSEA MONSTER',
    uns: 'UNS N07718',
    din: '2.4668 (NiCr19Fe19Nb5Mo3)',
    productForm: 'High Strength Stud Bolts & Heavy Hex Nuts',
    standards: 'ASTM B637, API 20E / API 20F, NACE MR0175',
    shortDesc: 'Precipitation-hardened nickel-chromium-molybdenum-niobium superalloy stud bolt delivering 1240 MPa tensile strength for extreme subsea environments.',
    fullDesc: 'Precipitation-hardened nickel-based superalloy bolting manufactured to API 20E Bolting Specification Levels (BSL-3). Engineered for extreme deepwater subsea trees, high-pressure sour gas wells, and aerospace propulsion systems.',
    features: [
      'Extreme minimum tensile strength of 1240 MPa (180 ksi) & yield of 1034 MPa (150 ksi)',
      'Total immunity to chloride stress corrosion cracking and hydrogen embrittlement',
      'Precipitation hardened with gamma prime and gamma double-prime phases',
      'Full qualification to API 20E BSL-3 with complete 100% volumetric UT'
    ],
    specs: {
      sizeRange: '1/2" to 3" Diameter',
      threads: 'UN / 8-UN Class 2A / 3A with rolled threads',
      coating: 'Passivated, MoS2 Solid Film Lubricant, PTFE',
      testing: '100% UT, Charpy V-Notch at -46°C (≥ 47 J), Macro/Micro examination'
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
      'Deepwater subsea wellhead Christmas trees and blowout preventers (BOP)',
      'Extreme high-pressure high-temperature (HPHT) sour oilfield manifolds',
      'Rocket motor propulsion system flange and injector bolting',
      'Nuclear submarine hull penetrations and high-stress reactor studs'
    ]
  }
];
