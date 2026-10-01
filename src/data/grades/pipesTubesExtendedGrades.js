/**
 * Research-Verified Extended Pipes & Tubes Metallurgy Specifications
 * Covering: Nickel Alloys, High Alloys, Exotic Alloys, and Specialist Alloy Steel Tubes & Plates
 * Standards: ASTM B167, ASTM B444, ASTM B165, ASTM B622, ASTM B729, ASTM A312, ASTM B521, ASTM B523, ASTM A213
 */

export const NICKEL_ALLOYS_PIPE_GRADES = [
  {
    id: 'pipe-inconel-625',
    slug: 'pipe-inconel-625',
    aliases: ['inconel-625-pipe', 'astm-b444-n06625', 'alloy-625-pipe'],
    name: 'ASTM B444 Inconel 625 (UNS N06625) Seamless Pipe',
    specification: 'ASTM B444 / ASME SB444',
    grade: 'Grade 1 Annealed (UNS N06625)',
    class: 'Seamless Heavy Wall Piping (SCH 10S to SCH XXS)',
    code: 'B444 INCONEL 625 PIPE',
    badge: 'SEVERE SUBSEA & SOUR GAS',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'Cold Drawn Seamless Pipe (Hot Extruded & Cold Pilgered)',
    standards: 'ASTM B444, ASME SB444, NACE MR0175',
    shortDesc: 'Solid-solution strengthened nickel-chromium-molybdenum-niobium seamless pipe for extreme deepwater subsea and sour chemical lines.',
    fullDesc: 'Manufactured from vacuum induction melted (VIM) and electroslag remelted (ESR) nickel alloy 625. Niobium and molybdenum additions provide high tensile strength (≥ 827 MPa) without aging heat treatments, alongside total immunity to marine crevice corrosion, pitting, and wet H2S cracking.',
    features: [
      'High minimum tensile strength (≥ 827 MPa) maintained from cryogenic to 980°C',
      'Virtual immunity to pitting and crevice corrosion in marine and chlorinated waters',
      'PREN ≥ 48 provides exceptional resistance in severe offshore splash zones',
      'Fully qualified under NACE MR0175 / ISO 15156 for extreme sour gas wells'
    ],
    specs: {
      sizeRange: '1/2" NB to 16" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S, 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25 37.5°)',
      testing: '100% Eddy Current / Ultrasonic testing, Hydrostatic up to 700 Bar, PMI'
    },
    mechanical: {
      tensile: '≥ 827 MPa (120,000 psi)',
      yield: '≥ 414 MPa (60,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 250 HBW (25 HRC)',
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
      'Subsea wellhead flowlines, risers, and chemical injection manifolds',
      'Offshore flare stack gas headers and marine seawater piping',
      'Severe sour gas pipelines containing high H2S, CO2, and free chlorides',
      'Nuclear reactor coolant loops and radioactive waste transfer'
    ]
  },
  {
    id: 'pipe-inconel-600',
    slug: 'pipe-inconel-600',
    aliases: ['inconel-600-pipe', 'astm-b167-n06600', 'alloy-600-pipe'],
    name: 'ASTM B167 Inconel 600 (UNS N06600) Seamless Pipe',
    specification: 'ASTM B167 / ASME SB167',
    grade: 'UNS N06600 (Inconel Alloy 600)',
    class: 'High Temperature Oxidation Resistant (Up to 1150°C)',
    code: 'B167 INCONEL 600 1150°C',
    badge: '1150°C HIGH TEMP RESISTANT',
    uns: 'UNS N06600',
    din: '2.4816 (NiCr15Fe)',
    productForm: 'Cold Drawn Seamless Heat Exchanger & Process Pipes',
    standards: 'ASTM B167, ASME SB167, DIN 17751',
    shortDesc: '72% High-nickel alloy seamless pipe providing supreme resistance to chloride stress corrosion cracking and oxidation up to 1150°C.',
    fullDesc: 'Standard high-nickel engineering alloy pipe formulated with 72% Nickel and 15% Chromium. The high nickel content provides virtual immunity to chloride-ion stress corrosion cracking and caustic embrittlement, while chromium confers resistance to hot sulfur and oxidizing gases.',
    features: [
      'Virtually immune to chloride-ion stress corrosion cracking',
      'High resistance to oxidation, carburization, and nitriding up to 1150°C',
      'Resistant to dry chlorine gas and hydrogen chloride at elevated temperatures',
      'Full penetration seamless extrusion tested per ASME Section III/VIII'
    ],
    specs: {
      sizeRange: '1/4" NB to 12" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S, 160',
      ends: 'Plain Cut / Beveled Ends',
      testing: '100% Eddy Current / Ultrasonic, Hydrostatic proof, Optical PMI'
    },
    mechanical: {
      tensile: '≥ 550 MPa (80,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 195 HBW',
      maxTemp: '1150°C'
    },
    chemistry: {
      ni: '≥ 72.0%',
      cr: '14.0 - 17.0%',
      fe: '6.0 - 10.0%',
      c: '≤ 0.15%',
      mn: '≤ 1.00%',
      si: '≤ 0.50%'
    },
    applications: [
      'Nuclear steam generator tubing and secondary coolant piping',
      'Industrial furnace thermocouple protection sheaths and muffle tubes',
      'Chemical production of vinyl chloride monomer (VCM) and chlorination',
      'Caustic soda evaporator heater tubes and thermal processing coils'
    ]
  },
  {
    id: 'pipe-monel-400',
    slug: 'pipe-monel-400',
    aliases: ['monel-400-pipe', 'astm-b165-n04400', 'alloy-400-pipe'],
    name: 'ASTM B165 Monel 400 (UNS N04400) Seamless Pipe',
    specification: 'ASTM B165 / ASME SB165',
    grade: 'UNS N04400 (Monel Alloy 400)',
    class: 'Marine & Hydrofluoric Acid Service',
    code: 'B165 MONEL 400 SEAMLESS',
    badge: 'HF ACID & MARINE SPECIALIST',
    uns: 'UNS N04400',
    din: '2.4360 (NiCu30Fe)',
    productForm: 'Cold Drawn Seamless Marine & Process Pipes',
    standards: 'ASTM B165, ASME SB165, NACE MR0175',
    shortDesc: 'Nickel-copper alloy seamless pipe delivering exceptional resistance to rapidly flowing seawater, hydrofluoric acid, and de-aerated acids.',
    fullDesc: 'Hot-extruded and cold-pilgered 67Ni-30Cu solid solution alloy pipe. Delivers total immunity to marine chloride stress corrosion cracking, high resistance to cavitation erosion in turbulent seawater, and excellent resistance to non-oxidizing hydrofluoric and sulfuric acids.',
    features: [
      'Immune to chloride-induced stress corrosion cracking in high-velocity seawater',
      'High resistance to hydrofluoric (HF) acid across all standard concentrations',
      'Excellent thermal conductivity and mechanical toughness retained to cryogenic levels',
      'NACE MR0175 / ISO 15156 approved for sour oilfield environments'
    ],
    specs: {
      sizeRange: '1/2" NB to 12" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S, 160',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% Eddy Current / Ultrasonic examination, Hydrostatic proof, PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (70,000 psi)',
      yield: '≥ 195 MPa (28,000 psi)',
      elongation: '≥ 35%',
      hardness: '≤ 170 HBW (85 HRB)',
      maxTemp: '480°C'
    },
    chemistry: {
      ni: '≥ 63.0%',
      cu: '28.0 - 34.0%',
      fe: '≤ 2.5%',
      mn: '≤ 2.0%',
      c: '≤ 0.30%',
      si: '≤ 0.50%'
    },
    applications: [
      'Petroleum refinery hydrofluoric (HF) alkylation unit process piping',
      'Marine seawater cooling lines, heat exchangers, and boiler feed lines',
      'Subsea splash-zone riser sheathing and offshore water injection',
      'Chemical salt plant brine heaters and industrial vacuum evaporators'
    ]
  },
  {
    id: 'pipe-hastelloy-c276',
    slug: 'pipe-hastelloy-c276',
    aliases: ['hastelloy-c276-pipe', 'astm-b622-n10276', 'alloy-c276-pipe'],
    name: 'ASTM B622 Hastelloy C276 (UNS N10276) Seamless Pipe',
    specification: 'ASTM B622 / ASME SB622',
    grade: 'UNS N10276 (Alloy C-276)',
    class: 'Severe Chemical Process Piping (Seamless)',
    code: 'B622 HASTELLOY C276 PIPE',
    badge: 'EXTREME ACID & WET CHLORINE',
    uns: 'UNS N10276',
    din: '2.4819 (NiMo16Cr15W)',
    productForm: 'Cold Drawn Seamless Precision Chemical Piping',
    standards: 'ASTM B622, ASME SB622, NACE MR0175',
    shortDesc: 'Nickel-molybdenum-chromium alloy seamless pipe with tungsten, delivering supreme resistance to wet chlorine gas and severe boiling mineral acids.',
    fullDesc: 'Cold drawn seamless nickel superalloy pipe fortified with 16% Molybdenum, 15.5% Chromium, and 3.5% Tungsten. Resistant to pit-forming chlorides, strong oxidizers such as ferric and cupric chlorides, and aggressive reducing mineral acids.',
    features: [
      'Immune to wet chlorine gas, hypochlorite, and chlorine dioxide solutions',
      'Exceptional resistance to localized pitting and stress corrosion cracking',
      'Very low carbon and silicon content prevents grain boundary precipitation',
      'Full qualification under NACE MR0175 / ISO 15156 for extreme sour gas wells'
    ],
    specs: {
      sizeRange: '1/2" NB to 10" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S, 160',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'ASTM G28 Intergranular Corrosion Test, 100% UT, Hydrostatic, PMI'
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
      'Flue gas desulfurization (FGD) scrubber piping and ducting',
      'Chlor-alkali bleach chemical production reactors and transfer conduits',
      'Sulfuric acid pickling lines and waste acid incineration systems',
      'Pharmaceutical synthesis loops handling aggressive chlorides'
    ]
  }
];

export const HIGH_ALLOYS_PIPE_GRADES = [
  {
    id: 'pipe-alloy-20',
    slug: 'pipe-alloy-20',
    aliases: ['alloy-20-pipe', 'astm-b729-n08020', 'carpenter-20-pipe'],
    name: 'ASTM B729 Alloy 20 (UNS N08020) Seamless Pipe',
    specification: 'ASTM B729 / ASME SB729',
    grade: 'UNS N08020 (Carpenter 20Cb-3)',
    class: 'Sulfuric Acid Specialist Seamless Pipe',
    code: 'B729 ALLOY 20 PIPE',
    badge: 'SULFURIC ACID SPECIALIST',
    uns: 'UNS N08020',
    din: '2.4660 (NiCr20CuMo)',
    productForm: 'Cold Drawn Seamless Pipe',
    standards: 'ASTM B729, ASME SB729, NACE MR0175',
    shortDesc: 'Austenitic nickel-iron-chromium alloy seamless pipe with Copper and Molybdenum engineered specifically for boiling sulfuric acid.',
    fullDesc: 'Developed specifically to resist sulfuric acid attack. Formulated with 35% Nickel, 20% Chromium, 2.5% Molybdenum, and 3.5% Copper, stabilized with Niobium. Demonstrates exceptional resistance to general corrosion, pitting, and stress corrosion cracking in boiling 20% to 40% sulfuric acid.',
    features: [
      '3.5% Copper addition provides outstanding resistance in warm sulfuric acid',
      '35% Nickel content eliminates chloride stress corrosion cracking',
      'Niobium stabilization prevents intergranular sensitization during welding',
      'Precision cold-drawn bore ensuring laminar flow without turbulence'
    ],
    specs: {
      sizeRange: '1/2" NB to 8" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% Eddy Current / Ultrasonic, Hydrostatic proof, PMI'
    },
    mechanical: {
      tensile: '≥ 550 MPa (80,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 217 HBW (95 HRB)',
      maxTemp: '500°C'
    },
    chemistry: {
      ni: '32.0 - 38.0%',
      cr: '19.0 - 21.0%',
      mo: '2.00 - 3.00%',
      cu: '3.00 - 4.00%',
      nb: '8xC to 1.00%',
      c: '≤ 0.07%'
    },
    applications: [
      'Sulfuric acid pickling tanks, heating coils, and transfer lines',
      'Synthetic rubber, explosive, and chemical fertilizer manufacturing',
      'Pharmaceutical mixing loops handling organic and mineral acids',
      'Phosphoric acid distribution headers in chemical refineries'
    ]
  },
  {
    id: 'pipe-254-smo',
    slug: 'pipe-254-smo',
    aliases: ['254-smo-pipe', '6mo-pipe', 'astm-a312-s31254'],
    name: 'ASTM A312 254 SMO / 6Mo (UNS S31254) Pipe',
    specification: 'ASTM A312 / ASME SA312',
    grade: 'UNS S31254 (6% Molybdenum Super Austenitic)',
    class: 'High PREN ≥ 43 Seawater Pipe',
    code: 'A312 254 SMO PREN ≥ 43',
    badge: 'PREN ≥ 43 SEAWATER PROOF',
    uns: 'UNS S31254',
    din: '1.4547 (X1NiCrMoCuN20-18-7)',
    productForm: 'Seamless & Welded Super Austenitic Pipe',
    standards: 'ASTM A312, ASME SA312, NORSOK M-650',
    shortDesc: '6% Molybdenum super-austenitic stainless pipe with PREN ≥ 43 designed as a cost-effective alternative to nickel alloys in seawater.',
    fullDesc: 'High-alloy 6-moly austenitic stainless steel pipe with 20% Chromium, 18% Nickel, 6.1% Molybdenum, and 0.20% Nitrogen. Delivers a Pitting Resistance Equivalent Number (PREN) exceeding 43, providing total immunity to pitting and crevice corrosion in stagnant seawater and pulp bleach plants.',
    features: [
      'Guaranteed PREN ≥ 43 provides supreme resistance to crevice corrosion in seawater',
      'Significantly higher mechanical strength than standard 300-series stainless steels',
      'Cost-effective alternative to titanium and high-nickel alloys in marine service',
      'Qualified under NORSOK M-650 MDS R11/R18 for offshore installations'
    ],
    specs: {
      sizeRange: '1/2" NB to 16" NB (Seamless up to 8", Welded up to 16")',
      schedules: 'SCH 10S, 40S, 80S, 160',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'ASTM G48 Method A at 50°C (zero pitting), 100% Eddy Current / UT, PMI'
    },
    mechanical: {
      tensile: '≥ 650 MPa (94,000 psi)',
      yield: '≥ 300 MPa (44,000 psi)',
      elongation: '≥ 35%',
      hardness: '≤ 220 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      cr: '19.5 - 20.5%',
      ni: '17.5 - 18.5%',
      mo: '6.00 - 6.50%',
      n: '0.18 - 0.22%',
      cu: '0.50 - 1.00%',
      c: '≤ 0.020%'
    },
    applications: [
      'Offshore marine seawater cooling, firewater loops, and ballast piping',
      'Pulp mill chlorine dioxide bleaching stages and washing filters',
      'Desalination plant high-pressure seawater reverse osmosis headers',
      'Flue gas desulfurization (FGD) wet scrubber ducting and nozzle lines'
    ]
  }
];

export const EXOTIC_ALLOYS_PIPE_GRADES = [
  {
    id: 'pipe-zirconium-702',
    slug: 'pipe-zirconium-702',
    aliases: ['zirconium-702-pipe', 'astm-b523-r60702', 'zr-702-pipe'],
    name: 'ASTM B523 Zirconium 702 (UNS R60702) Seamless Pipe',
    specification: 'ASTM B523 / ASME SB523',
    grade: 'UNS R60702 (Commercially Pure Zirconium)',
    class: 'Severe Hydrochloric & Acetic Acid Pipe',
    code: 'B523 ZIRCONIUM 702 PIPE',
    badge: 'BOILING HCL IMMUNITY',
    uns: 'UNS R60702',
    din: '3.7025',
    productForm: 'Seamless Cold Drawn Reactive Metal Pipe',
    standards: 'ASTM B523, ASME SB523',
    shortDesc: 'Reactive metal seamless pipe offering complete immunity to boiling hydrochloric acid, acetic acid, and strong organic solvents.',
    fullDesc: 'Commercially pure reactive metal zirconium pipe. Forms an instantaneous, tenacious zirconia (ZrO2) surface film that provides total immunity to boiling hydrochloric acid across all concentrations, hot acetic acid, formic acid, and nitric acid environments where nickel alloys corrode rapidly.',
    features: [
      'Total immunity to boiling hydrochloric acid (HCl) up to and beyond boiling point',
      'Superior corrosion resistance in urea synthesis and hot nitric acid media',
      'Extremely dense native zirconia passive film self-repairs in oxidizing media',
      'Manufactured by specialized vacuum melting and precision vacuum annealing'
    ],
    specs: {
      sizeRange: '1/2" NB to 6" NB (Seamless)',
      schedules: 'SCH 10S, 40S, 80S',
      ends: 'Plain Cut / Beveled Ends (Under Inert Gas Protection)',
      testing: '100% Eddy Current / Ultrasonic, Pneumatic/Hydrostatic proof, PMI'
    },
    mechanical: {
      tensile: '≥ 380 MPa (55,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 16%',
      hardness: '≤ 200 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      zr_hf: '≥ 99.2%',
      hf: '≤ 4.5%',
      fe_cr: '≤ 0.20%',
      c: '≤ 0.05%',
      n: '≤ 0.025%',
      o: '≤ 0.16%'
    },
    applications: [
      'Industrial chemical synthesis of acetic acid and acetic anhydride',
      'Hydrochloric acid production, purification, and regeneration towers',
      'Urea fertilizer manufacturing high-pressure stripper tubes',
      'Nuclear research fuel cladding and chemical reprocessing lines'
    ]
  },
  {
    id: 'pipe-tantalum-r05200',
    slug: 'pipe-tantalum-r05200',
    aliases: ['tantalum-pipe', 'astm-b521-r05200', 'ta-r05200-pipe'],
    name: 'ASTM B521 Tantalum (UNS R05200) Seamless Pipe',
    specification: 'ASTM B521 / ASME SB521',
    grade: 'UNS R05200 (Unalloyed Electron-Beam Melted)',
    class: 'Boiling Mineral Acid Specialist (Glass-Like Immunity)',
    code: 'B521 TANTALUM R05200 PIPE',
    badge: 'GLASS-LIKE ACID IMMUNITY',
    uns: 'UNS R05200',
    din: '2.4740',
    productForm: 'Seamless Drawn Refractory Metal Pipe',
    standards: 'ASTM B521, ASME SB521',
    shortDesc: 'Refractory metal seamless pipe providing glass-like chemical immunity to hot concentrated acids, aqua regia, and halogen vapours.',
    fullDesc: 'Produced from vacuum electron-beam melted high-purity unalloyed tantalum. Exhibits inert, glass-like corrosion resistance to virtually all acids (except hydrofluoric) up to 150°C and higher, combined with high thermal conductivity that makes it ideal for severe chemical reboilers.',
    features: [
      'Inert resistance to boiling hydrochloric, nitric, and concentrated sulfuric acid',
      'Thermal conductivity comparable to nickel alloys, far superior to glass-lined steel',
      'High melting point of 2996°C with ductile cold-forming capability',
      'Extreme purity (≥ 99.9% Tantalum) prevents trace chemical contamination'
    ],
    specs: {
      sizeRange: '1/4" NB to 3" NB (Seamless)',
      schedules: 'Wall thickness: 0.5 mm to 3.5 mm',
      ends: 'Plain Cut Ends / Specialized Tantalum Flanged Sleeves',
      testing: 'Helium mass spectrometer leak test, 100% Eddy Current, PMI'
    },
    mechanical: {
      tensile: '≥ 205 MPa (30,000 psi)',
      yield: '≥ 140 MPa (20,000 psi)',
      elongation: '≥ 25%',
      hardness: '≤ 120 HV',
      maxTemp: '250°C (in acid media)'
    },
    chemistry: {
      ta: '≥ 99.9%',
      nb: '≤ 0.10%',
      w: '≤ 0.05%',
      fe: '≤ 0.010%',
      c: '≤ 0.010%',
      o: '≤ 0.015%'
    },
    applications: [
      'Hydrochloric acid recovery bayonet heaters and reboilers',
      'Nitric acid concentration columns and pharmaceutical condensers',
      'Chlorination reaction thermowells and rupture disc assemblies',
      'High-purity electronic chemical manufacturing and wafer processing'
    ]
  }
];

export const ALLOY_STEEL_TUBES_GRADES = [
  {
    id: 'astm-a213-grade-t11',
    slug: 'astm-a213-grade-t11',
    aliases: ['a213-t11', 't11-boiler-tube', 'alloy-steel-tubes'],
    name: 'ASTM A213 Grade T11 Seamless Boiler Tube',
    specification: 'ASTM A213 / ASME SA213',
    grade: 'Grade T11 (1.25Cr - 0.5Mo - Si)',
    class: 'Seamless Ferritic Boiler & Superheater Tube',
    code: 'A213 T11 SUPERHEATER TUBE',
    badge: 'BOILER & HEAT EXCHANGER',
    uns: 'UNS K11597 Tube',
    din: '1.7335 (13CrMo4-5 Tube)',
    productForm: 'Cold Drawn Seamless Boiler & Heat Exchanger Tubing',
    standards: 'ASTM A213/A213M, ASME SA213, IBR Form III-B',
    shortDesc: 'Cold-drawn 1.25% Cr, 0.5% Mo seamless boiler tube engineered for high-flux heat exchangers and superheater coils up to 570°C.',
    fullDesc: 'Manufactured by hot piercing and precision cold pilgering from solid forged alloy billets. Fully normalized and tempered per ASME Section II Part A to ensure strict wall thickness tolerances (minimum wall or average wall) and high heat transfer efficiency.',
    features: [
      'Seamless cold drawn bore ensures laminar boundary layer and high heat flux',
      'Strict minimum wall thickness control conforming to ASME Section I Boiler Code',
      'Approved under Indian Boiler Regulations (IBR) with Form III-B tube certificates',
      'Tested 100% by Eddy Current and Hydrostatic proof testing up to 350 Bar'
    ],
    specs: {
      sizeRange: '1/2" OD to 5" OD (12.7 mm to 127 mm Outside Diameter)',
      wallThickness: '1.65 mm to 12.7 mm (Minimum Wall / Average Wall)',
      ends: 'Plain Square Cut / Chamfered Ends',
      testing: '100% Eddy Current / Ultrasonic, Flaring, Flattening, Hardness ≤ 163 HBW'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 163 HBW (85 HRB)',
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
      'Thermal power plant boiler waterwall tubes and economizer coils',
      'Shell & tube heat exchanger U-tubes for hydrocarbon refining',
      'Fossil boiler superheater and reheater tube bundles',
      'Waste heat recovery steam generator (HRSG) convection tubes'
    ]
  },
  {
    id: 'astm-a213-grade-t22',
    slug: 'astm-a213-grade-t22',
    aliases: ['a213-t22', 't22-boiler-tube', 'superheater-tube-t22'],
    name: 'ASTM A213 Grade T22 Seamless Superheater Tube',
    specification: 'ASTM A213 / ASME SA213',
    grade: 'Grade T22 (2.25Cr - 1.0Mo)',
    class: 'Superheated Steam Superheater Tubing (600°C)',
    code: 'A213 T22 600°C BOILER TUBE',
    badge: '600°C SUPERHEATER',
    uns: 'UNS K21590 Tube',
    din: '1.7380 (10CrMo9-10 Tube)',
    productForm: 'Seamless Cold Drawn Superheater & Reheater Tubing',
    standards: 'ASTM A213, ASME SA213, IBR Form III-B',
    shortDesc: '2.25% Chromium, 1% Molybdenum seamless superheater tube delivering elevated creep strength up to 600°C in high-pressure boilers.',
    fullDesc: 'Precision seamless tubing formulated with 2.25% Chromium and 1.0% Molybdenum. Engineered to resist scaling and creep rupture in superheater and reheater sections of subcritical and supercritical utility boilers operating up to 600°C.',
    features: [
      'Superior creep-rupture strength up to 600°C operating temperature',
      'Tight concentricity and precision bore smoothness for high thermal flux',
      'Supplied in normalized and tempered condition with controlled grain size',
      '100% Non-destructive tested by ultrasonic examination and eddy current'
    ],
    specs: {
      sizeRange: '1/2" OD to 5" OD (12.7 mm to 127 mm OD)',
      wallThickness: '1.65 mm to 14.0 mm',
      ends: 'Plain Square Cut / Beveled Ends',
      testing: 'Hot Tensile, Flaring, Flattening, Reverse Flattening, Hardness ≤ 163 HBW'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 163 HBW',
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
      'Supercritical utility power boiler superheater and reheater coils',
      'Refinery steam methane reformer radiant and convection furnace tubes',
      'Chemical process cracking furnace tubular heat exchangers',
      'Nuclear secondary steam generator heat transfer tube bundles'
    ]
  },
  {
    id: 'astm-a213-grade-t91',
    slug: 'astm-a213-grade-t91',
    aliases: ['a213-t91', 't91-boiler-tube', 'csef-superheater-tube'],
    name: 'ASTM A213 Grade T91 Supercritical Boiler Tube',
    specification: 'ASTM A213 / ASME SA213',
    grade: 'Grade T91 (9Cr - 1Mo - V CSEF)',
    class: 'Ultra-Supercritical Superheater & Reheater (650°C)',
    code: 'A213 T91 CSEF BOILER TUBE',
    badge: '650°C ULTRA SUPERCRITICAL',
    uns: 'UNS K91560 Tube',
    din: '1.4903 (X10CrMoVNb9-1 Tube)',
    productForm: 'Precision Cold Drawn Heavy Wall Superheater Tubing',
    standards: 'ASTM A213, ASME SA213, EN 10216-2, IBR Form III-B',
    shortDesc: 'Creep Strength Enhanced Ferritic (CSEF) alloy tube with Vanadium and Niobium for ultra-supercritical boiler superheaters up to 650°C.',
    fullDesc: 'Advanced 9Cr-1Mo alloy modified with Vanadium, Niobium, and Nitrogen. Provides nearly double the allowable design stress of T22 at 600°C, enabling substantially thinner tube walls, higher heat transfer rates, and lower thermal fatigue in ultra-supercritical thermal power generation.',
    features: [
      'Nearly double the creep strength of standard T22 at 600°C',
      'Enables thinner tube walls, significantly improving boiler thermal efficiency',
      'Strict control of trace tramp elements (Sn, Sb, As, Cu)',
      'Normalized at 1040-1080°C and tempered at 730-800°C per ASME Section I'
    ],
    specs: {
      sizeRange: '3/4" OD to 4" OD (19.05 mm to 101.6 mm OD)',
      wallThickness: '2.0 mm to 15.0 mm',
      ends: 'Plain Square Cut Ends (Deburred)',
      testing: '100% Ultrasonic (UT), Hardness 190-250 HBW, PMI, IBR Inspection'
    },
    mechanical: {
      tensile: '≥ 585 MPa (85,000 psi)',
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
      'Ultra-supercritical power station superheater and reheater tube loops',
      'High-pressure steam turbine bypass piping manifolds',
      'Advanced waste-to-energy boiler high-temperature panels',
      'Coal gasification synthesis syngas cooling tube bundles'
    ]
  }
];
