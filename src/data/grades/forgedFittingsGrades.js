/**
 * Research-Verified Forged High-Pressure Fittings Specifications & Metallurgy
 * Standards: ASME B16.11, BS 3799, MSS SP-79, MSS SP-83, MSS SP-95, MSS SP-97
 * Ratings: Class 2000, Class 3000, Class 6000, Class 9000
 * Connections: Socket Weld (SW) & Threaded (NPT / BSPT / ISO 7-1)
 * Types: 90° Elbow, 45° Elbow, Tee, Cross, Coupling, Half-Coupling, Cap, Hex Plug, Bushing, Union, Weldolet, Sockolet, Thredolet
 */

export const FORGED_FITTINGS_GRADES = [
  {
    id: 'class-3000-astm-a105',
    slug: 'class-3000-astm-a105',
    aliases: ['a105-forged-fitting', 'class-3000-a105', 'a105-sw-fitting', 'cs-forged-fitting'],
    name: 'ASTM A105 Class 3000 / 6000 Forged Fitting',
    specification: 'ASTM A105 / ASME SA105',
    grade: 'Grade A105 / A105N (Normalized)',
    class: 'Class 3000# & Class 6000# (SW & NPT)',
    code: 'A105 3000#/6000# FORGED',
    badge: 'HIGH PRESSURE CARBON',
    uns: 'UNS K03504',
    din: '1.0460 (C22.8 / P250GH)',
    productForm: 'Forged Socket Weld & Threaded (Elbow, Tee, Coupling, Union, Plug)',
    standards: 'ASME B16.11, BS 3799, MSS SP-83, MSS SP-95',
    shortDesc: 'Normalized forged carbon steel fitting precision-machined for Class 3000# and 6000# high-pressure fluid lines.',
    fullDesc: 'Hot-forged from killed carbon steel and fully normalized to refine the crystalline grain structure. Engineered to handle severe hydraulic pulses, pressure surges, and cyclic stresses in heavy industrial piping networks.',
    features: [
      'Heavy forged wall section rated for working pressures up to 414 Bar (6000 PSI)',
      'Precision NPT threads to ASME B1.20.1 or deep socket counterbores to ASME B16.11',
      'Normalized heat treatment prevents localized cracking and stress risers',
      'Supplied with EN 10204 3.1 mill test certificates and 100% MT inspection'
    ],
    specs: {
      sizeRange: '1/8" NB to 4" NB (DN 6 to DN 100)',
      pressureRating: 'Class 2000, 3000, 6000, 9000',
      ends: 'Socket Weld (SW) & Threaded (Female NPT / BSPT / Male Hex Plug)',
      testing: '100% Magnetic Particle (MT), PMI, Hydrostatic proof test'
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
      'High-pressure hydraulic power transmission manifolds',
      'Refinery high-pressure instrument take-offs and drain connections',
      'Boiler blowdown lines and steam turbine lube-oil piping',
      'Chemical processing plant high-pressure utility manifolds'
    ]
  },
  {
    id: 'class-3000-astm-a350-lf2',
    slug: 'class-3000-astm-a350-lf2',
    aliases: ['a350-lf2-forged-fitting', 'class-3000-lf2', 'low-temp-sw-fitting'],
    name: 'ASTM A350 LF2 Class 3000 / 6000 Fitting',
    specification: 'ASTM A350 / ASME SA350',
    grade: 'Grade LF2 Class 1 (-46°C Impact Tested)',
    class: 'Class 3000# & Class 6000#',
    code: 'A350 LF2 -46°C FORGED',
    badge: 'LOW TEMP IMPACT',
    uns: 'UNS K03011',
    din: '1.0566 (TStE 355)',
    productForm: 'Forged High Pressure Fittings (SW, NPT, Branch Outlets)',
    standards: 'ASME B16.11, MSS SP-97, NACE MR0175',
    shortDesc: 'Low-temperature forged carbon steel high-pressure fitting verified by Charpy V-notch impact testing at -46°C.',
    fullDesc: 'Manufactured from aluminum-killed fine-grained carbon steel forging stock. Fully normalized and Charpy V-notch impact tested at -46°C to eliminate low-temperature brittle fracture in sub-zero oilfield and refrigeration applications.',
    features: [
      'Guaranteed Charpy V-Notch impact energy ≥ 20 J avg at -46°C',
      'Class 3000# and 6000# pressure rating with heavy socket wall thickness',
      'Complies with NACE MR0175 / ISO 15156 hardness limits (≤ 22 HRC)',
      'Precision machined socket bore ensuring proper 1.6mm expansion gap'
    ],
    specs: {
      sizeRange: '1/4" NB to 4" NB',
      pressureRating: 'Class 3000, 6000, 9000',
      ends: 'Socket Weld (SW) & Threaded (NPT)',
      testing: 'Charpy V-Notch at -46°C, 100% MT, Hardness ≤ 197 HBW, PMI'
    },
    mechanical: {
      tensile: '485 - 655 MPa',
      yield: '≥ 250 MPa',
      elongation: '≥ 22%',
      hardness: '≤ 197 HBW (22 HRC max)',
      maxTemp: '425°C',
      impactTest: '≥ 20 J avg at -46°C'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.60 - 1.35%',
      p: '≤ 0.035%',
      s: '≤ 0.040%',
      si: '0.15 - 0.30%'
    },
    applications: [
      'Arctic gas pipeline instrumentation and valve manifold assemblies',
      'LPG/LNG storage terminal drain, vent, and pressure relief lines',
      'Cryogenic refrigeration process loops and ammonia headers',
      'Sour gas wellhead choke and kill manifold piping'
    ]
  },
  {
    id: 'class-3000-astm-a182-f304l',
    slug: 'class-3000-astm-a182-f304l',
    aliases: ['a182-f304l-fitting', 'class-3000-f304', 'ss-304-sw-fitting'],
    name: 'ASTM A182 F304 / F304L Forged Fitting',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F304 / F304L Dual Certified',
    class: 'Class 3000# (SW & Threaded NPT)',
    code: 'A182 F304/L 3000# FORGED',
    badge: 'CORROSION RESISTANT',
    uns: 'UNS S30400 / S30403',
    din: '1.4301 / 1.4307',
    productForm: 'Forged Fittings (90°/45° Elbow, Tee, Coupling, Union, Olets)',
    standards: 'ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-97',
    shortDesc: 'Austenitic stainless steel high-pressure forged fitting with controlled low carbon preventing sensitization during welding.',
    fullDesc: 'Solid forged from austenitic stainless steel and solution-annealed at 1040°C. Delivers exceptional corrosion resistance in chemical and water lines while providing Class 3000# pressure containment.',
    features: [
      'Low carbon content (C ≤ 0.030%) prevents weld decay sensitization',
      'Class 3000# heavy wall configuration for high cyclic fatigue endurance',
      'Precision machined socket weld hubs and NPT threads to ASME B1.20.1',
      'Pickled and passivated surface finish free from iron contamination'
    ],
    specs: {
      sizeRange: '1/8" NB to 4" NB',
      pressureRating: 'Class 3000, 6000',
      ends: 'Socket Weld (SW) & Threaded (NPT)',
      testing: '100% PMI Spectro, Liquid Penetrant (PT), Hydrostatic proof'
    },
    mechanical: {
      tensile: '≥ 485 MPa (F304L) / ≥ 515 MPa (F304)',
      yield: '≥ 170 MPa (F304L) / ≥ 205 MPa (F304)',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 11.0%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Chemical fluid conveyance and acid neutralization manifolds',
      'Food, beverage, and brewery high-pressure washdown lines',
      'Cryogenic fluid distribution piping (-196°C LOX/LIN/LAr)',
      'High-pressure steam boiler utility piping'
    ]
  },
  {
    id: 'class-3000-astm-a182-f316l',
    slug: 'class-3000-astm-a182-f316l',
    aliases: ['a182-f316l-fitting', 'class-3000-f316', 'ss-316-sw-fitting'],
    name: 'ASTM A182 F316 / F316L Forged Fitting',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F316 / F316L Dual Certified',
    class: 'Class 3000# & Class 6000#',
    code: 'A182 F316/L MOLY 3000#',
    badge: 'MOLYBDENUM ACID RESISTANT',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Forged Fittings (Elbows, Tees, Couplings, Unions, Weldolets)',
    standards: 'ASME B16.11, MSS SP-83, MSS SP-97, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum forged stainless high-pressure fitting providing supreme resistance to marine pitting and sour media.',
    fullDesc: 'Forged from molybdenum-bearing austenitic stainless steel and solution-treated. Designed for demanding offshore, chemical, and marine applications requiring Class 3000# or 6000# containment with high pitting resistance.',
    features: [
      '2.0 - 3.0% Molybdenum addition resists chloride pitting and crevice attack',
      'Dual certified 316/316L chemistry meeting NACE MR0175 sour service standards',
      'Heavy forged wall sections with reinforced branch outlet connections',
      'Full penetration weldability with zero intergranular corrosion'
    ],
    specs: {
      sizeRange: '1/8" NB to 4" NB',
      pressureRating: 'Class 3000, 6000, 9000',
      ends: 'Socket Weld (SW) & Threaded (NPT / BSPT)',
      testing: '100% PMI, Liquid Penetrant (PT), Ultrasonic, Hydrostatic'
    },
    mechanical: {
      tensile: '≥ 485 MPa (F316L) / ≥ 515 MPa (F316)',
      yield: '≥ 170 MPa (F316L) / ≥ 205 MPa (F316)',
      elongation: '≥ 30%',
      hardness: '≤ 187 HBW',
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
      'Offshore platform high-pressure topside chemical injection lines',
      'Desalination plant reverse osmosis high-pressure header manifolds',
      'Pharmaceutical bio-reactor sterile sampling and drain points',
      'Refinery sulfuric and acetic acid transfer conduits'
    ]
  },
  {
    id: 'class-3000-astm-a182-f11',
    slug: 'class-3000-astm-a182-f11',
    aliases: ['a182-f11-fitting', 'alloy-steel-3000-f11', 'f11-sw-fitting'],
    name: 'ASTM A182 F11 Class 2 Forged Fitting',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F11 Class 2 (1.25Cr - 0.5Mo)',
    class: 'Class 3000# & Class 6000#',
    code: 'A182 F11 570°C ALLOY',
    badge: '570°C CREEP RESISTANT',
    uns: 'UNS K11572',
    din: '1.7335 (13CrMo4-5)',
    productForm: 'Forged Fittings (SW, NPT, Weldolet, Sockolet, Thredolet)',
    standards: 'ASME B16.11, MSS SP-97, IBR Certified',
    shortDesc: '1.25% Chromium, 0.5% Molybdenum low-alloy forged fitting engineered for steam headers and heat exchangers up to 570°C.',
    fullDesc: 'Hot-forged chrome-moly alloy steel fitting supplied in normalized and tempered condition. Designed for severe boiler steam drains, vents, and branch connection headers operating under sustained thermal creep conditions.',
    features: [
      'Creep-rupture strength sustained up to 570°C operating temperature',
      'Approved under Indian Boiler Regulations (IBR) with Form III-C certification',
      'Normalized and tempered heat treatment ensures homogeneous hardness',
      '100% Magnetic Particle tested for surface flaw verification'
    ],
    specs: {
      sizeRange: '1/4" NB to 4" NB',
      pressureRating: 'Class 3000, 6000',
      ends: 'Socket Weld (SW) & Threaded (NPT)',
      testing: '100% PMI, Hardness testing (143-207 HBW), MT, UT'
    },
    mechanical: {
      tensile: '≥ 485 MPa',
      yield: '≥ 275 MPa',
      elongation: '≥ 20%',
      hardness: '143 - 207 HBW',
      maxTemp: '570°C'
    },
    chemistry: {
      cr: '1.00 - 1.50%',
      mo: '0.44 - 0.65%',
      c: '0.10 - 0.20%',
      mn: '0.30 - 0.80%',
      si: '0.50 - 1.00%'
    },
    applications: [
      'Thermal power generation high-pressure steam drains and vents',
      'Petrochemical refinery catalytic reformer piping take-offs',
      'Boiler superheater manifold instrument branch connections',
      'High-pressure steam bypass and sampling stations'
    ]
  },
  {
    id: 'class-3000-astm-a182-f51',
    slug: 'class-3000-astm-a182-f51',
    aliases: ['duplex-2205-forged-fitting', 'f51-fitting', 'a182-f51-sw-fitting'],
    name: 'ASTM A182 F51 (Duplex 2205) Forged Fitting',
    specification: 'ASTM A182 / ASME SA182',
    grade: 'Grade F51 / F60 (UNS S31803 / S32205)',
    class: 'Class 3000# & Class 6000#',
    code: 'A182 F51 DUPLEX 2205',
    badge: 'DOUBLE YIELD STRENGTH',
    uns: 'UNS S31803 / S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    productForm: 'Forged Fittings (SW, NPT, Outlets, Unions, Couplings)',
    standards: 'ASME B16.11, MSS SP-97, NORSOK M-650',
    shortDesc: 'Austenitic-ferritic balanced duplex stainless forged fitting delivering double the yield strength of 316L and supreme SCC resistance.',
    fullDesc: 'Dual-phase 22% Chromium, 5% Nickel, 3% Molybdenum forged duplex stainless steel fitting. Features balanced 50/50 austenite-ferrite microstructure providing high yield strength (≥ 450 MPa) and resistance to chloride stress corrosion cracking.',
    features: [
      'Yield strength (≥ 450 MPa) is more than double standard 316L stainless steel',
      'PREN ≥ 35 ensures high resistance to localized pitting in seawater',
      'Balanced 45-55% ferrite phase distribution verified by metallography',
      'Qualified under NACE MR0175 / ISO 15156 for offshore sour service'
    ],
    specs: {
      sizeRange: '1/4" NB to 4" NB',
      pressureRating: 'Class 3000, 6000, 9000',
      ends: 'Socket Weld (SW) & Threaded (NPT)',
      testing: 'ASTM A923 Method C (Ferric Chloride Corrosion), 100% PMI, PT'
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
      'Offshore oil & gas subsea manifold instrument take-offs',
      'Seawater reverse osmosis high-pressure pump discharge headers',
      'Chemical tanker deck piping and sulfuric acid wash lines',
      'Sour gas processing plant high-pressure drain stations'
    ]
  },
  {
    id: 'class-3000-astm-b564-inconel-625',
    slug: 'class-3000-astm-b564-inconel-625',
    aliases: ['inconel-625-forged-fitting', 'b564-n06625-fitting', 'alloy-625-sw-fitting'],
    name: 'ASTM B564 Inconel 625 (UNS N06625) Fitting',
    specification: 'ASTM B564 / ASME SB564',
    grade: 'UNS N06625 (Alloy 625)',
    class: 'Class 3000# & Class 6000#',
    code: 'B564 N06625 FORGED',
    badge: 'EXTREME CHEMICAL & SUBSEA',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'Forged Fittings (Socket Weld & Threaded)',
    standards: 'ASME B16.11, MSS SP-97, NACE MR0175',
    shortDesc: 'Solid-solution strengthened nickel-chromium-molybdenum forged fitting with Niobium for extreme subsea and sour chemical lines.',
    fullDesc: 'Forged nickel superalloy fitting fortified with 9% Molybdenum and 3.6% Niobium. Provides tensile strength exceeding 827 MPa without requiring hardening heat treatments, alongside total immunity to marine crevice attack and sour H2S cracking.',
    features: [
      'High tensile strength (≥ 827 MPa) retained from cryogenic to 980°C',
      'Immunity to chloride-induced stress corrosion cracking',
      'Virtually immune to pitting and crevice corrosion in marine environments',
      'Fully qualified under NACE MR0175 / ISO 15156 for extreme sour gas wells'
    ],
    specs: {
      sizeRange: '1/4" NB to 4" NB',
      pressureRating: 'Class 3000, 6000, 9000',
      ends: 'Socket Weld (SW) & Threaded (NPT)',
      testing: '100% PT, PMI Spectro, Hydrostatic, Microstructure'
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
      'Subsea wellhead instrument tap-offs and chemical injection points',
      'Extreme sour gas production lines containing high H2S and CO2',
      'Naval submarine seawater piping and high-pressure manifold joints',
      'High-pressure chemical reactor vessel instrument connections'
    ]
  }
];
