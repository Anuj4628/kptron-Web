/**
 * Dedicated Fastener Types Data & Material Hierarchy
 * 
 * Implements the 5 standard Fastener Types matching the existing Flanges architecture:
 * 01 — Hex Head Bolts (ASME B18.2.1 / DIN 931 / DIN 933 / ISO 4014)
 * 02 — Hex Nuts & Heavy Hex Nuts (ASME B18.2.2 / ASTM A194 / DIN 934 / ISO 4032)
 * 03 — Stud Bolts / Continuous Threaded Studs (ASTM A193 / ASTM A320 / ASME B16.5)
 * 04 — Socket Head Cap Screws / Allen Bolts (ASME B18.3 / DIN 912 / ISO 4762)
 * 05 — Washers / Flat & Spring Lock Washers (ASME B18.21.1 / ASME B18.22.1 / DIN 125 / DIN 127)
 */

// Core High-Definition Fastener Type Assets
import img_hex_bolts from '../assets/fasteners/types/hex-head-bolts.jpg';
import img_hex_nuts from '../assets/fasteners/types/hex-nuts.jpg';
import img_stud_bolts from '../assets/fasteners/types/stud-bolts.jpg';
import img_socket_screws from '../assets/fasteners/types/socket-head-cap-screws.jpg';
import img_washers from '../assets/fasteners/types/washers.jpg';

// Material-Specific High-Definition Product Imagery
import img_cs_fasteners from '../assets/fasteners/types/carbon-steel-fasteners.jpg';
import img_cs_hex_bolts from '../assets/fasteners/types/carbon-hex-bolts.jpg';
import img_as_fasteners from '../assets/fasteners/types/alloy-steel-fasteners.jpg';
import img_ti_fasteners from '../assets/fasteners/types/titanium-fasteners.jpg';
import img_al_fasteners from '../assets/fasteners/types/aluminum-fasteners.jpg';
import img_duplex_fasteners from '../assets/fasteners/types/duplex-fasteners.jpg';

// Existing Material Category Assets from Project
import img_ss_catalog from '../assets/New Product img/fasteners/ss-fasteners.jpg';
import img_inconel_catalog from '../assets/New Product img/fasteners/inconel-fasteners.jpg';
import img_monel_catalog from '../assets/New Product img/fasteners/monel-fasteners.jpg';
import img_hastelloy_catalog from '../assets/New Product img/fasteners/hastelloy-fasteners.jpg';
import img_nickel_catalog from '../assets/New Product img/fasteners/nickel-fasteners.jpg';
import img_cuni_catalog from '../assets/New Product img/fasteners/copper-nickel-fasteners.jpg';

/**
 * 5 Core Fastener Types Metadata
 */
export const CORE_FASTENER_TYPES = [
  {
    number: '01',
    id: 'hex-head-bolts',
    slug: 'hex-head-bolts',
    aliases: ['hex-bolts', 'hex-head-bolt', 'heavy-hex-bolts', 'hex-screws', 'bolts'],
    name: 'Hex Head Bolts',
    shortCode: 'HHB',
    technicalDesignation: 'Standard & Heavy Hex Head Bolts (ASME B18.2.1 / DIN 933)',
    categoryClassification: 'Standard Industrial Structural & Machine Fastener',
    defaultImage: img_hex_bolts,
    shortDesc: 'Precision engineered hexagon head bolts and heavy structural screws manufactured for secure torque transmission in equipment assembly, piping joints, and structural steel framing.',
    whatIs: 'A Hex Head Bolt is a threaded male fastener with a hexagonal six-sided head engineered to be tightened using standard spanners, sockets, or pneumatic torque wrenches. Available in full-thread (tap bolt) and partial-thread configurations.',
    designAndFeatures: 'Manufactured with precision chamfered hexagonal heads and rolled exterior threads conforming to ASME B1.1 Class 2A. Heavy hex variants feature wider across-flats dimensions for maximum load bearing against structural washers.',
    howItConnects: 'Passed through pre-drilled clearance holes in mating flanges or structural flanges and secured with a matching heavy hex nut and hardened washer, or threaded directly into tapped blind holes.',
    purpose: 'Provides rigid clamping force for structural frameworks, pressure vessel brackets, valve bodies, and general mechanical assemblies requiring dependable, high-shear joint integrity.',
    applications: [
      'Structural steel building framing and bridge construction',
      'Flanged piping connections and valve bonnet attachments',
      'Heavy machinery and industrial processing equipment assemblies',
      'Pump casings, compressors, and pressure vessel foundation mounts'
    ],
    standardSizes: 'M6 to M100 (1/4" to 4" Diameter) | Lengths: 15 mm to 600 mm',
    standardPressures: 'Class 150# to 2500# / ISO Class 8.8, 10.9, 12.9 / ASTM A325',
    applicableStandards: 'ASME B18.2.1, ASME B18.2.6, DIN 931, DIN 933, ISO 4014, ISO 4017',
    manufacturingMethod: 'Hot forging / cold heading, quench-and-temper heat treatment, precision thread rolling'
  },
  {
    number: '02',
    id: 'hex-nuts',
    slug: 'hex-nuts',
    aliases: ['heavy-hex-nuts', 'hex-nut', 'nuts', 'jam-nuts', 'lock-nuts'],
    name: 'Hex Nuts',
    shortCode: 'HXN',
    technicalDesignation: 'Standard & Heavy Hex Nuts (ASME B18.2.2 / ASTM A194 / DIN 934)',
    categoryClassification: 'Mating Internal Thread Fastener',
    defaultImage: img_hex_nuts,
    shortDesc: 'High-strength internal threaded hex nuts and heavy hex flange nuts engineered to withstand extreme tensile proof loads without thread stripping under cyclic pressure.',
    whatIs: 'A Hex Nut is an internally threaded hexagonal block that pairs with bolts or threaded stud bolts to clamp mechanical components together under calibrated torque.',
    designAndFeatures: 'Heavy hex nuts have slightly larger dimensions across flats and greater thickness than standard hex nuts, providing superior resistance to proof loads and thread dilation during high bolt tensioning.',
    howItConnects: 'Threaded onto the exposed male threads of hex bolts or continuous threaded studs. Torqued to specified foot-pounds using calibrated torque wrenches or hydraulic bolt tensioners.',
    purpose: 'Transfers applied torque into linear tensile clamping force across mating flange faces, keeping gaskets under tight seal without loosening under vibration.',
    applications: [
      'ASME B16.5 & B16.47 high-pressure flange bolting systems',
      'Heat exchanger girth flange closures and channel heads',
      'High-vibration pump bases and vibrating machinery mountings',
      'Subsea pipeline flanges, manifolds, and structural framing'
    ],
    standardSizes: 'M6 to M100 (1/4" to 4" Nominal Thread) | Heavy Hex Series',
    standardPressures: 'Proof Load: up to 1200 MPa / ASTM A194 Grades 2H, 8, 8M, 7',
    applicableStandards: 'ASME B18.2.2, ASTM A194, ASTM A563, DIN 934, ISO 4032, ISO 4033',
    manufacturingMethod: 'Hot nut forging or precision CNC machining from certified hex bar stock followed by tapped threading'
  },
  {
    number: '03',
    id: 'stud-bolts',
    slug: 'stud-bolts',
    aliases: ['threaded-studs', 'continuous-stud-bolts', 'stud-bolt', 'studs', 'all-thread-rod'],
    name: 'Stud Bolts / Threaded Studs',
    shortCode: 'STB',
    technicalDesignation: 'Continuous Threaded Stud Bolts (ASTM A193 / ASTM A320 / ASME B16.5)',
    categoryClassification: 'High-Pressure Pressure Boundary Bolting',
    defaultImage: img_stud_bolts,
    shortDesc: 'Fully threaded continuous stud bolts engineered with two heavy hex nuts for severe high-pressure, elevated-temperature, and cryogenic piping flange connections.',
    whatIs: 'A Stud Bolt is a headless, fully threaded cylindrical rod designed to receive a heavy hex nut at both ends. It is the premier standard fastener specified across oil & gas, chemical, and power plant piping.',
    designAndFeatures: 'Threaded end-to-end with rolled 8-UN (for diameters > 1") or UNC threads. Both ends are precision chamfered to allow effortless nut spin-on without cross-threading.',
    howItConnects: 'Inserted straight through aligned companion flange bolt holes, with a heavy hex nut torqued onto each end. Provides equal stress distribution across both nut faces.',
    purpose: 'Eliminates head shear failures common in headed bolts. Allows rapid maintenance disassembly and uniform bolt elongation when tightened with hydraulic bolt tensioners.',
    applications: [
      'Oil refinery and petrochemical ASME B16.5 pipeline flanges',
      'Offshore gas production manifolds and Christmas trees',
      'Cryogenic LNG processing trains and storage tanks',
      'Power generation superheated steam headers and valve bonnets'
    ],
    standardSizes: '1/2" to 4" Diameter (M12 to M100) | Lengths cut to custom spool schedule',
    standardPressures: 'Class 150# to 2500# & API 5000/10000 PSI / Tensile ≥ 860 to 1240 MPa',
    applicableStandards: 'ASTM A193, ASTM A320, ASTM A453, ASME B1.1 Class 2A, ASME B16.5',
    manufacturingMethod: 'Continuous coil drawing, precision cut-to-length chamfering, high-tonnage cold thread rolling'
  },
  {
    number: '04',
    id: 'socket-head-cap-screws',
    slug: 'socket-head-cap-screws',
    aliases: ['socket-head-screws', 'allen-bolts', 'socket-cap-screws', 'allen-screws', 'shcs'],
    name: 'Socket Head Cap Screws',
    shortCode: 'SHCS',
    technicalDesignation: 'Socket Head Cap Screws / Allen Bolts (ASME B18.3 / DIN 912 / ISO 4762)',
    categoryClassification: 'Precision Recessed Drive Fastener',
    defaultImage: img_socket_screws,
    shortDesc: 'Cylindrical head fasteners with internal hexagonal drive sockets, engineered for compact machine assemblies and high-clamping force where external wrench clearance is restricted.',
    whatIs: 'A Socket Head Cap Screw (SHCS), commonly called an Allen bolt, features a cylindrical head with a precision recessed internal hex drive tightened via hex key (Allen wrench) or socket bit.',
    designAndFeatures: 'Compact cylindrical head profile allows counter-boring into mechanical parts, producing a flush, snag-free exterior finish. Delivers high tensile strength (up to Class 12.9).',
    howItConnects: 'Installed into counter-bored or recessed holes using an Allen wrench or pneumatic hex drive bit, threading directly into tapped blind holes or through-holes with hex nuts.',
    purpose: 'Engineered for close-tolerance machine housings, hydraulic manifolds, tooling fixtures, and tight spaces where conventional external-drive wrench sockets cannot fit.',
    applications: [
      'High-pressure hydraulic manifold blocks and valve bodies',
      'Turbine casings, compressor housings, and gearboxes',
      'Tool & die manufacturing, injection molds, and CNC machinery',
      'Aerospace propulsion brackets and compact pump assemblies'
    ],
    standardSizes: 'M3 to M48 (1/8" to 2" Diameter) | Lengths: 10 mm to 300 mm',
    standardPressures: 'High Tensile Class 8.8, 10.9, 12.9 / ASTM A574 / ISO 3506 A4-80',
    applicableStandards: 'ASME B18.3, DIN 912, ISO 4762, ASTM A574, BS 2470',
    manufacturingMethod: 'Cold heading with precision hex socket punch forming, followed by thread rolling and heat treatment'
  },
  {
    number: '05',
    id: 'washers',
    slug: 'washers',
    aliases: ['flat-washers', 'spring-washers', 'lock-washers', 'hardened-washers', 'plain-washers'],
    name: 'Washers',
    shortCode: 'WSH',
    technicalDesignation: 'Plain Flat & Spring Lock Washers (ASME B18.21.1 / DIN 125 / DIN 127)',
    categoryClassification: 'Load Distribution & Locking Hardware',
    defaultImage: img_washers,
    shortDesc: 'Precision stamped and hardened circular washers designed to distribute fastener clamping loads, prevent surface embedment, and resist vibration-induced loosening.',
    whatIs: 'A Washer is a flat or split-spring metallic ring placed beneath the head of a bolt or under a nut to distribute bearing stress and prevent loosening.',
    designAndFeatures: 'Flat washers (DIN 125 / ASME B18.22.1) provide smooth, wide bearing surfaces that protect soft flange metals from galling. Spring lock washers (DIN 127 / ASME B18.21.1) provide continuous spring tension to absorb thermal contraction.',
    howItConnects: 'Positioned over the bolt or stud shank directly beneath the bolt head or nut prior to tightening. Compressed flat during final torque make-up.',
    purpose: 'Prevents localized surface deformation, maintains bolt preload under thermal cycling, and eliminates galvanic corrosion when matched to the flange metallurgy.',
    applications: [
      'Flange joint make-up across ASME B16.5 raised face connections',
      'Vibrating machinery mountings and structural baseplates',
      'Electrical ground studs and high-current terminal connections',
      'Sanitary stainless processing skids and subsea enclosures'
    ],
    standardSizes: 'M3 to M100 (1/8" to 4" Inside Diameter) | Standard & Heavy Duty',
    standardPressures: 'Hardness: 38 to 45 HRC (ASTM F436) / Proof Load Resistant',
    applicableStandards: 'ASME B18.21.1, ASME B18.22.1, ASTM F436, DIN 125, DIN 127, ISO 7089',
    manufacturingMethod: 'High-speed precision stamping, deburring, heat-treating, and surface passivation'
  }
];

/**
 * 12 Comprehensive Material Categories for Fasteners
 * Each configured with at least 5 verified grades, realistic images, and technical specifications
 */
export const FASTENER_MATERIALS = [
  // 1. STAINLESS STEEL
  {
    id: 'stainless-steel',
    slug: 'stainless-steel',
    urlSlug: 'stainless-steel',
    altSlugs: ['stainless-steel-fasteners', 'ss', 'ss-fasteners', 'stainless'],
    name: 'Stainless Steel',
    title: 'Stainless Steel Fasteners',
    standard: 'ASTM A193 / ASTM A194 / ISO 3506 / ASME B18.2.1',
    primaryGrades: 'B8 (304), B8M (316), B8T (321), A2-70, A4-70, A4-80, Gr. 8/8M',
    materialDesc: 'Precision engineered austenitic stainless steel threaded stud bolts, heavy hex nuts, cap screws, and washers delivering exceptional corrosion resistance and mechanical purity in chemical and marine environments.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_hex_bolts,
      'hex-nuts': img_hex_nuts,
      'stud-bolts': img_stud_bolts,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_ss_catalog,
    grades: [
      {
        id: 'astm-a193-b8',
        slug: 'astm-a193-b8',
        name: 'ASTM A193 Grade B8 (SS 304)',
        shortName: 'A193 B8 (304)',
        code: 'ASTM A193 Gr. B8 Class 1 & 2',
        uns: 'UNS S30400',
        din: '1.4301 (A2-70)',
        standard: 'ASTM A193 / ASME SA193, ASME B18.2.1',
        shortDesc: 'Austenitic 18/8 stainless steel high-tensile stud bolts and hex bolts for chemical, food, and sanitary flange connections.',
        fullDesc: 'Manufactured from AISI 304 austenitic stainless steel. Available in Class 1 (carbide solution treated) and Class 2 (strain hardened to achieve tensile strength ≥ 860 MPa). Provides excellent weldability, non-magnetic properties, and general corrosion resistance.',
        specs: { sizeRange: '1/4" to 2-1/2" (M6 to M64)', tensile: '≥ 860 MPa (Class 2) / ≥ 515 MPa (Class 1)', hardness: '≤ 321 HBW (35 HRC)' },
        applications: ['Sanitary pharmaceutical and food processing fluid piping', 'Municipal water treatment plants', 'Chemical processing low-temperature flanges', 'Architectural structural framing']
      },
      {
        id: 'astm-a193-b8m',
        slug: 'astm-a193-b8m',
        name: 'ASTM A193 Grade B8M (SS 316)',
        shortName: 'A193 B8M (316)',
        code: 'ASTM A193 Gr. B8M Class 1 & 2 Moly',
        uns: 'UNS S31600',
        din: '1.4401 (A4-70 / A4-80)',
        standard: 'ASTM A193 / ASME SA193, ASME B18.2.1',
        shortDesc: 'Molybdenum-bearing 316 stainless stud bolts providing superior resistance to chloride pitting in marine and offshore service.',
        fullDesc: 'Engineered with 2.0-3.0% Molybdenum for supreme resistance to pitting and crevice corrosion in chloride and marine atmospheres. Strain hardened Class 2 delivers tensile strength ≥ 760 MPa (110 ksi) for high-pressure ASME flange connections.',
        specs: { sizeRange: '1/4" to 3" (M6 to M76)', tensile: '≥ 760 MPa (Class 2)', hardness: '≤ 321 HBW (35 HRC)' },
        applications: ['Offshore oil & gas topside piping and risers', 'Desalination plants and marine coastal infrastructure', 'Petrochemical acid loops and chemical reactor vessels', 'Wastewater treatment aeration piping']
      },
      {
        id: 'iso-3506-a2-70',
        slug: 'iso-3506-a2-70',
        name: 'ISO 3506-1 Grade A2-70',
        shortName: 'A2-70 (Metric 304)',
        code: 'ISO 3506 A2-70 Stainless 700 MPa',
        uns: 'UNS S30400 Metric',
        din: 'DIN 933 / DIN 934 A2',
        standard: 'ISO 3506-1, DIN 933, DIN 931',
        shortDesc: 'Metric standard cold-worked 304 stainless hex bolts and screws with guaranteed 700 MPa minimum tensile strength.',
        fullDesc: 'International metric standard austenitic stainless steel fasteners manufactured to property class 70. Engineered for metric machine building, vehicle components, and processing skid assemblies.',
        specs: { sizeRange: 'M3 to M36 Diameter', tensile: '≥ 700 MPa (101 ksi)', yield: '≥ 450 MPa' },
        applications: ['Automotive manufacturing and transport equipment', 'General machinery and processing pump framework', 'Solar mounting structures and outdoor electrical enclosures']
      },
      {
        id: 'iso-3506-a4-80',
        slug: 'iso-3506-a4-80',
        name: 'ISO 3506-1 Grade A4-80',
        shortName: 'A4-80 (Marine 316)',
        code: 'ISO 3506 A4-80 High Strength Moly',
        uns: 'UNS S31600 Metric High Strength',
        din: 'DIN 933 / DIN 912 A4-80',
        standard: 'ISO 3506-1, DIN 912, ISO 4014',
        shortDesc: 'High-tensile cold-drawn 316 marine stainless hex bolts and socket cap screws with 800 MPa minimum tensile strength.',
        fullDesc: 'High-strength cold-worked marine stainless steel fasteners conforming to property class 80. Combines 800 MPa tensile resistance with total chloride pitting immunity for critical marine mechanical connections.',
        specs: { sizeRange: 'M4 to M30 Diameter', tensile: '≥ 800 MPa (116 ksi)', yield: '≥ 600 MPa' },
        applications: ['Shipbuilding and naval marine equipment', 'Subsea instrumentation mounts and ROV housings', 'Coastal chemical plant exposed valves and actuators']
      },
      {
        id: 'astm-a194-grade-8m',
        slug: 'astm-a194-grade-8m',
        name: 'ASTM A194 Grade 8M Heavy Hex Nut',
        shortName: 'A194 Gr. 8M Nut',
        code: 'ASTM A194 Gr. 8M (AISI 316 Nut)',
        uns: 'UNS S31600 Nut Series',
        din: 'DIN 934 Moly Heavy',
        standard: 'ASTM A194 / ASME SA194, ASME B18.2.2',
        shortDesc: 'Molybdenum stainless steel heavy hex nuts certified for high proof loads and elevated-temperature flange clamping.',
        fullDesc: 'Heavy-pattern internal threaded nuts manufactured from AISI 316 stainless steel. Specifically engineered to match ASTM A193 B8M stud bolts, preventing thread galling and maintaining tight seal under severe thermal cyclic duty.',
        specs: { sizeRange: '1/4" to 4" Diameter (M6 to M100)', proofLoad: '≥ 550 MPa', hardness: '≤ 223 HBW' },
        applications: ['High-pressure marine pipe flanges and heat exchangers', 'Chemical storage tank manhole covers', 'Corrosive chemical line companion flange bolting']
      },
      {
        id: 'astm-a193-b8t',
        slug: 'astm-a193-b8t',
        name: 'ASTM A193 Grade B8T (SS 321)',
        shortName: 'A193 B8T (321)',
        code: 'ASTM A193 Gr. B8T Titanium Stabilized',
        uns: 'UNS S32100',
        din: '1.4541 (X6CrNiTi18-10)',
        standard: 'ASTM A193 / ASME SA193, ASME B18.2.1',
        shortDesc: 'Titanium-stabilized austenitic stainless stud bolts preventing carbide precipitation at temperatures up to 800°C.',
        fullDesc: 'Manufactured from AISI 321 stainless steel containing titanium additions. Titanium stabilizes the carbon against chromium carbide precipitation during prolonged elevated-temperature service in thermal oxidizers and furnace exhaust manifolds.',
        specs: { sizeRange: '1/2" to 2" Diameter', tensile: '≥ 515 MPa (Class 1) / ≥ 690 MPa (Class 2)', maxTemp: '800°C' },
        applications: ['Thermal incinerators and refinery cracking heater closures', 'Exhaust manifold flanges on heavy gas turbines', 'High-temperature steam line thermal bypasses']
      }
    ]
  },

  // 2. CARBON STEEL
  {
    id: 'carbon-steel',
    slug: 'carbon-steel',
    urlSlug: 'carbon-steel',
    altSlugs: ['carbon-steel-fasteners', 'cs', 'cs-fasteners', 'carbon'],
    name: 'Carbon Steel',
    title: 'Carbon Steel Fasteners',
    standard: 'ASTM A325 / ASTM A490 / ASTM A194 2H / ASTM A307 / ISO 898-1',
    primaryGrades: 'A325, A490, A194 2H, A307 Gr. B, ISO 8.8, ISO 10.9',
    materialDesc: 'Quenched, tempered, and black-oxide coated high-tensile carbon steel structural bolts, heavy hex nuts, and threaded stud bolts engineered for building construction, civil infrastructure, and industrial piping.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_cs_hex_bolts,
      'hex-nuts': img_cs_fasteners,
      'stud-bolts': img_cs_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_cs_fasteners,
    grades: [
      {
        id: 'astm-a325',
        slug: 'astm-a325',
        name: 'ASTM A325 Structural Heavy Hex Bolt',
        shortName: 'A325 Structural',
        code: 'ASTM A325 / ASTM F3125 Grade A325',
        uns: 'UNS G10450 / AISI 1045 Quenched',
        din: 'EN 14399-4 HV Structural',
        standard: 'ASTM F3125/F3125M, ASTM A325, ASME B18.2.6',
        shortDesc: 'Quenched and tempered medium carbon steel heavy hex structural bolts with 830 MPa minimum tensile strength.',
        fullDesc: 'The gold standard for structural steel connections. Heat treated by liquid quenching and tempering to achieve high shear and tensile yield for structural steel framing, pre-engineered buildings, and bridge joints.',
        specs: { sizeRange: '1/2" to 1-1/2" Diameter', tensile: '≥ 830 MPa (120 ksi)', yield: '≥ 635 MPa (92 ksi)', finish: 'Black Oxide / Hot-Dip Galv' },
        applications: ['Structural steel building columns and truss connections', 'Highway bridge girders and overhead signage support', 'Crane rails and heavy industrial gantry framing']
      },
      {
        id: 'astm-a194-grade-2h',
        slug: 'astm-a194-grade-2h',
        name: 'ASTM A194 Grade 2H Heavy Hex Nut',
        shortName: 'A194 Gr. 2H Nut',
        code: 'ASTM A194 Grade 2H High Strength',
        uns: 'UNS G10450 Quenched',
        din: 'DIN 934 Heavy Class 10',
        standard: 'ASTM A194 / ASME SA194, ASME B18.2.2',
        shortDesc: 'Quenched & tempered high-strength carbon steel heavy hex nuts tested to 175 ksi proof load for high-pressure flange service.',
        fullDesc: 'Manufactured from medium-carbon steel and quenched and tempered at 455°C minimum. The world standard heavy hex nut specified to pair with ASTM A193 B7 and ASTM A325 bolts across pressure piping and structural applications.',
        specs: { sizeRange: '1/4" to 4" Diameter (M6 to M100)', proofLoad: '175,000 psi (1200 MPa)', hardness: '24 to 35 HRC (248 to 327 HBW)' },
        applications: ['High-pressure pipeline flange make-up with ASTM A193 B7 studs', 'Boiler steam drums and heat exchanger channel bolting', 'Structural anchor bolts and high-load mechanical clamps']
      },
      {
        id: 'astm-a307-grade-b',
        slug: 'astm-a307-grade-b',
        name: 'ASTM A307 Grade B Flange Bolt',
        shortName: 'A307 Gr. B',
        code: 'ASTM A307 Grade B (Low Carbon Flange)',
        uns: 'UNS G10200 / AISI 1020',
        din: 'ISO 898-1 Class 4.6 / 4.8',
        standard: 'ASTM A307, ASME B18.2.1, ASME B16.5',
        shortDesc: 'Low carbon steel hex bolts engineered specifically for cast iron flanges and low-pressure municipal piping systems.',
        fullDesc: 'Engineered with controlled maximum tensile strength (between 414 and 690 MPa) to prevent over-torquing and cracking brittle cast iron and bronze flanges in utility and municipal water networks.',
        specs: { sizeRange: '1/4" to 4" Diameter', tensile: '414 to 690 MPa (60 to 100 ksi)', hardness: '69 to 100 HRB' },
        applications: ['Cast iron valves and water distribution companion flanges', 'Low-pressure ductile iron water pipelines', 'HVAC chilled water circuits and industrial drainage']
      },
      {
        id: 'astm-a490',
        slug: 'astm-a490',
        name: 'ASTM A490 High-Strength Structural Bolt',
        shortName: 'A490 High-Tensile',
        code: 'ASTM A490 / ASTM F3125 Grade A490',
        uns: 'UNS G41400 Alloy Treated',
        din: 'EN 14399-4 Class 10.9 HV',
        standard: 'ASTM F3125, ASTM A490, ASME B18.2.6',
        shortDesc: 'Alloy/carbon steel structural bolts heat treated to 1040 MPa minimum tensile strength for critical seismic structural joints.',
        fullDesc: 'Quenched and tempered high-tensile structural bolts delivering 150 ksi (1040 MPa) minimum tensile strength. Designed for heavy friction-type structural steel connections in high-rise buildings and seismic zones.',
        specs: { sizeRange: '1/2" to 1-1/2" Diameter', tensile: '1040 to 1210 MPa (150 to 173 ksi)', yield: '≥ 895 MPa (130 ksi)' },
        applications: ['Seismic moment frames in high-rise skyscraper construction', 'Long-span railway bridges and heavy industrial trusses', 'Wind turbine tower structural ring flange joints']
      },
      {
        id: 'iso-898-1-class-8-8',
        slug: 'iso-898-1-class-8-8',
        name: 'ISO 898-1 Property Class 8.8',
        shortName: 'Class 8.8 High-Tensile',
        code: 'ISO 898-1 Class 8.8 Quenched',
        uns: 'Medium Carbon Steel Quenched',
        din: 'DIN 931 / DIN 933 8.8',
        standard: 'ISO 898-1, DIN 933, EN ISO 4014',
        shortDesc: 'Metric high tensile medium carbon steel hex bolts and screws with 800 MPa tensile strength and 640 MPa yield.',
        fullDesc: 'The primary metric engineering bolt standard worldwide. Heat treated by quenching and tempering to provide 800 MPa tensile strength with high ductility for automotive and mechanical plant assemblies.',
        specs: { sizeRange: 'M6 to M64 Metric', tensile: '≥ 800 MPa (116 ksi)', yield: '≥ 640 MPa (93 ksi)', hardness: '22 to 32 HRC' },
        applications: ['Automotive commercial vehicle chassis and suspensions', 'General plant machinery, gearboxes, and conveyors', 'Pre-cast concrete anchoring and mechanical attachments']
      },
      {
        id: 'iso-898-1-class-10-9',
        slug: 'iso-898-1-class-10-9',
        name: 'ISO 898-1 Property Class 10.9',
        shortName: 'Class 10.9 Heavy-Duty',
        code: 'ISO 898-1 Class 10.9 Quenched Alloy',
        uns: 'Low Alloy Boron / Carbon Steel',
        din: 'DIN 933 / DIN 912 10.9',
        standard: 'ISO 898-1, DIN 912, ISO 4762',
        shortDesc: 'Extra high tensile metric bolts delivering 1000 MPa tensile strength and 900 MPa yield for heavy equipment.',
        fullDesc: 'Quenched and tempered alloyed carbon steel fasteners engineered for heavy dynamic loads. Ideal for cylinder head bolts, earthmoving machinery, and structural high-shear joints.',
        specs: { sizeRange: 'M6 to M48 Metric', tensile: '≥ 1040 MPa (150 ksi)', yield: '≥ 940 MPa (136 ksi)', hardness: '32 to 39 HRC' },
        applications: ['Heavy earthmoving and mining excavator mechanical joints', 'Engine cylinder head and connecting rod bolts', 'High-vibration railway and track fastening systems']
      }
    ]
  },

  // 3. ALLOY STEEL
  {
    id: 'alloy-steel',
    slug: 'alloy-steel',
    urlSlug: 'alloy-steel',
    altSlugs: ['alloy-steel-fasteners', 'alloy', 'as-fasteners'],
    name: 'Alloy Steel',
    title: 'Alloy Steel Fasteners',
    standard: 'ASTM A193 / ASTM A194 / ASTM A320 / ASME B18.2.1',
    primaryGrades: 'B7, B7M, B16, L7, L7M, A194 Gr. 7, Gr. 4',
    materialDesc: 'Chromium-molybdenum and vanadium alloy steel continuous threaded stud bolts and heavy hex nuts engineered for high-pressure ASME flange piping, superheated steam up to 595°C, and cryogenic duty to -101°C.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_as_fasteners,
      'hex-nuts': img_as_fasteners,
      'stud-bolts': img_as_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_as_fasteners,
    grades: [
      {
        id: 'astm-a193-grade-b7',
        slug: 'astm-a193-grade-b7',
        name: 'ASTM A193 Grade B7 High Tensile Stud',
        shortName: 'A193 B7 (Cr-Mo)',
        code: 'ASTM A193 Gr. B7 (AISI 4140)',
        uns: 'UNS G41400 / G41420',
        din: '1.7225 (42CrMo4)',
        standard: 'ASTM A193 / ASME SA193, ASME B18.2.1',
        shortDesc: 'Chromium-molybdenum high tensile quenched & tempered alloy steel stud bolt for pressure vessels, valves, and flanges up to 540°C.',
        fullDesc: 'Manufactured from AISI 4140/4142 alloy steel, liquid-quenched and tempered at 593°C (1100°F) minimum. Delivers minimum tensile strength of 860 MPa (125 ksi) and yield strength of 720 MPa (105 ksi) for high-pressure ASME flange joints.',
        specs: { sizeRange: '1/2" to 4" Diameter (M12 to M100)', tensile: '≥ 860 MPa (125 ksi)', yield: '≥ 720 MPa (105 ksi)', maxTemp: '540°C' },
        applications: ['Petrochemical refinery ASME B16.5 flange joint make-up', 'Pressure vessel girth flanges and heat exchanger channel heads', 'Pipeline valve bodies and high-pressure bonnet bolting']
      },
      {
        id: 'astm-a193-grade-b7m',
        slug: 'astm-a193-grade-b7m',
        name: 'ASTM A193 Grade B7M Sour Gas Stud',
        shortName: 'A193 B7M (NACE Sour)',
        code: 'ASTM A193 Gr. B7M (NACE MR0175)',
        uns: 'UNS G41400 Controlled Hardness',
        din: '1.7225 Modified',
        standard: 'ASTM A193, NACE MR0175, ISO 15156',
        shortDesc: 'Hardness-controlled (max 235 HBW / 22 HRC) Cr-Mo alloy steel stud bolt certified for severe H2S sour gas environments.',
        fullDesc: 'Heat treated with a special tempering cycle above 620°C (1150°F) to ensure maximum hardness does not exceed 235 HBW (22 HRC). Conforms to NACE MR0175 / ISO 15156 requirements to prevent sulfide stress cracking in sour hydrocarbon service.',
        specs: { sizeRange: '1/2" to 4" Diameter', tensile: '≥ 690 MPa (100 ksi)', yield: '≥ 550 MPa (80 ksi)', hardness: '≤ 235 HBW (22 HRC)' },
        applications: ['Sour crude oil production wellhead Christmas tree bolting', 'Offshore acid gas gathering pipelines and choke manifolds', 'Refinery amine gas sweetening units and sulfur recovery plants']
      },
      {
        id: 'astm-a193-grade-b16',
        slug: 'astm-a193-grade-b16',
        name: 'ASTM A193 Grade B16 High Temperature Stud',
        shortName: 'A193 B16 (Cr-Mo-V 595°C)',
        code: 'ASTM A193 Gr. B16 Creep Resistant',
        uns: 'UNS K41520',
        din: '1.7709 (21CrMoV5-7)',
        standard: 'ASTM A193 / ASME SA193, ASME B16.5',
        shortDesc: 'Chromium-molybdenum-vanadium alloy steel stud bolt providing high relaxation and creep resistance up to 595°C.',
        fullDesc: 'Forged from Cr-Mo-V alloy steel, oil-quenched and tempered at 650°C (1200°F) minimum. Vanadium additions create fine vanadium carbides that resist dislocation climb, preventing bolt relaxation under prolonged superheated steam.',
        specs: { sizeRange: '1/2" to 4" Diameter', tensile: '≥ 860 MPa (125 ksi)', yield: '≥ 720 MPa (105 ksi)', maxTemp: '595°C' },
        applications: ['Thermal and nuclear power steam turbine casing split-line joints', 'Supercritical steam generator stop and control valve bonnets', 'Main steam pipe flange connections operating at 500-595°C']
      },
      {
        id: 'astm-a320-grade-l7',
        slug: 'astm-a320-grade-l7',
        name: 'ASTM A320 Grade L7 Low Temp Stud (-101°C)',
        shortName: 'A320 L7 (Cryogenic -101°C)',
        code: 'ASTM A320 Gr. L7 Charpy Tested',
        uns: 'UNS G41400 Cryo',
        din: '1.7225 Low Temp',
        standard: 'ASTM A320 / ASME SA320, ASME B31.3',
        shortDesc: 'Quenched & tempered alloy steel stud bolt certified by Charpy V-Notch impact testing at -101°C (-150°F) for low-temperature service.',
        fullDesc: 'Manufactured from AISI 4140 alloy steel, heat treated by quenching and tempering. Every production lot undergoes mandatory Charpy V-notch impact testing at -101°C to guarantee ductile toughness and prevent brittle shear failure in refrigerated gas.',
        specs: { sizeRange: '1/2" to 2-1/2" Diameter', tensile: '≥ 860 MPa (125 ksi)', impactTest: '≥ 27 J at -101°C', minTemp: '-101°C' },
        applications: ['LNG liquefaction trains, storage tanks, and loading arm flanges', 'LPG and ethylene deep refrigeration compressor skids', 'Arctic oilfield wellhead and transport pipeline connections']
      },
      {
        id: 'astm-a194-grade-7',
        slug: 'astm-a194-grade-7',
        name: 'ASTM A194 Grade 7 Heavy Hex Nut',
        shortName: 'A194 Gr. 7 Cr-Mo Nut',
        code: 'ASTM A194 Grade 7 (Cr-Mo Nut)',
        uns: 'UNS G41400 Nut Series',
        din: 'DIN 934 42CrMo4 Heavy',
        standard: 'ASTM A194 / ASME SA194, ASME B18.2.2',
        shortDesc: 'Quenched and tempered Cr-Mo alloy steel heavy hex nuts certified for high proof load and pairing with B16 and L7 studs.',
        fullDesc: 'Heavy-pattern alloy steel internal threaded nuts formulated to match high temperature (B16) and cryogenic (L7) studs. Provides exceptional thread shear resistance under thermal fatigue and cryogenic shock.',
        specs: { sizeRange: '1/4" to 4" Diameter', proofLoad: '175,000 psi (1200 MPa)', hardness: '24 to 38 HRC' },
        applications: ['Steam turbine high-pressure casings and boiler flanges', 'Cryogenic LNG cold box piping make-up with A320 L7 studs', 'High-stress chemical autoclave vessel closures']
      }
    ]
  },

  // 4. DUPLEX STAINLESS STEEL
  {
    id: 'duplex-steel',
    slug: 'duplex-steel',
    urlSlug: 'duplex-steel',
    altSlugs: ['duplex', 'duplex-fasteners', 'duplex-steel-fasteners'],
    name: 'Duplex Stainless Steel',
    title: 'Duplex Stainless Steel Fasteners',
    standard: 'ASTM A1082 / ASTM A479 / UNS S31803 / UNS S32205 / DIN 1.4462',
    primaryGrades: 'UNS S31803 (F51), UNS S32205 (2205), DIN 1.4462, ASTM A1082',
    materialDesc: 'Dual-phase austenitic-ferritic stainless steel stud bolts, heavy hex nuts, and precision cap screws offering twice the mechanical yield strength of standard austenitic stainless with exceptional pitting and crevice corrosion resistance (PREN ≥ 35).',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_duplex_fasteners,
      'hex-nuts': img_duplex_fasteners,
      'stud-bolts': img_duplex_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_duplex_fasteners,
    grades: [
      {
        id: 'uns-s31803',
        slug: 'uns-s31803',
        name: 'Duplex UNS S31803 (F51) Fasteners',
        shortName: 'Duplex S31803 (F51)',
        code: 'UNS S31803 / ASTM A1082 High Yield',
        uns: 'UNS S31803',
        din: '1.4462 (X2CrNiMoN22-5-3)',
        standard: 'ASTM A1082, ASTM A479, NACE MR0175',
        shortDesc: '22% Cr dual-phase stainless steel stud bolts and nuts delivering 620 MPa minimum yield strength and high stress corrosion resistance.',
        fullDesc: 'Microstructure composed of roughly 50% austenite and 50% ferrite. Delivers exceptional mechanical yield strength combined with high resistance to chloride stress corrosion cracking, erosion-corrosion, and pitting in seawater manifolds.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 760 MPa (110 ksi)', yield: '≥ 550 MPa (80 ksi)', pren: '≥ 35' },
        applications: ['Offshore oil & gas seawater cooling systems', 'Marine propulsion shaft bolting and rudder hardware', 'Chemical tank farm loading arms handling chlorides']
      },
      {
        id: 'uns-s32205',
        slug: 'uns-s32205',
        name: 'Duplex 2205 (UNS S32205) Fasteners',
        shortName: 'Duplex 2205 (S32205)',
        code: 'UNS S32205 / ASTM A1082 Premium Duplex',
        uns: 'UNS S32205',
        din: '1.4462 Enhanced Nitrogen',
        standard: 'ASTM A1082, ASTM A479, ISO 3506',
        shortDesc: 'Enhanced-nitrogen 2205 duplex stud bolts and heavy hex nuts providing guaranteed PREN ≥ 35 and high fatigue resistance.',
        fullDesc: 'Refined version of UNS S31803 with higher chromium, molybdenum, and nitrogen contents to maximize pitting resistance and weld heat-affected-zone toughness. Ideal for high-pressure subsea flowlines and acid gas systems.',
        specs: { sizeRange: 'M12 to M80 (1/2" to 3")', tensile: '≥ 800 MPa (116 ksi)', yield: '≥ 585 MPa (85 ksi)', hardness: '≤ 32 HRC' },
        applications: ['Subsea pipeline tie-in spools and manifold bolting', 'Desalination plant high-pressure membrane pressure vessels', 'Pulp and paper bleaching digester closures']
      },
      {
        id: 'din-1-4462',
        slug: 'din-1-4462',
        name: 'EN 1.4462 (X2CrNiMoN22-5-3) Metric Fasteners',
        shortName: 'EN 1.4462 Metric Duplex',
        code: 'EN 1.4462 / DIN 933 Metric Duplex',
        uns: 'UNS S32205 European Norm',
        din: '1.4462 / EN 10088-3',
        standard: 'EN 10269, DIN 931, DIN 933',
        shortDesc: 'European standard metric duplex stainless hex bolts and cap screws engineered for offshore and chemical equipment.',
        fullDesc: 'Precision metric cold-formed and machined duplex stainless fasteners conforming to EN standards. Offers optimum resistance to intergranular corrosion and stress-cracking in marine coastal installations.',
        specs: { sizeRange: 'M6 to M64 Metric', tensile: '≥ 750 to 950 MPa', yield: '≥ 500 MPa' },
        applications: ['Offshore wind turbine sub-structures and nacelle bolting', 'Marine dredging equipment and pump companion flanges', 'Wastewater sludge treatment centrifuges']
      },
      {
        id: 'astm-a1082-grade-s32205',
        slug: 'astm-a1082-grade-s32205',
        name: 'ASTM A1082 High-Strength Duplex Stud',
        shortName: 'A1082 Duplex Stud',
        code: 'ASTM A1082 / ASME SA1082 Stud',
        uns: 'UNS S32205 High Tensile',
        din: '1.4462 Stud Grade',
        standard: 'ASTM A1082/A1082M, ASME B16.5',
        shortDesc: 'High-strength cold-drawn and solution-annealed duplex stud bolts certified for ASME Section VIII pressure equipment.',
        fullDesc: 'Certified continuous threaded stud bolts for pressure vessels and piping flanges. Features cold-rolled threads providing burnished root radii that withstand high cyclic pulsating pressure.',
        specs: { sizeRange: '1/2" to 2-1/2" Diameter', tensile: '≥ 860 MPa (125 ksi)', yield: '≥ 690 MPa (100 ksi)' },
        applications: ['High-pressure petrochemical gas compressor cylinders', 'Offshore sour gas separation vessels', 'Seawater injection pump manifold headers']
      },
      {
        id: 'astm-a479-duplex-2205',
        slug: 'astm-a479-duplex-2205',
        name: 'ASTM A479 Duplex 2205 Heavy Hex Nuts',
        shortName: 'A479 Duplex 2205 Nut',
        code: 'ASTM A479 UNS S32205 Nut Series',
        uns: 'UNS S32205 Machined Nut',
        din: '1.4462 Heavy Nut',
        standard: 'ASTM A479, ASME B18.2.2',
        shortDesc: 'Precision CNC machined duplex 2205 heavy hex nuts matching duplex stud bolts for leak-proof marine flange joints.',
        fullDesc: 'Machined from certified duplex round bar stock. Precision thread tapped to ASME B1.1 Class 2B. Prevents galvanic mismatch when securing duplex piping and valves.',
        specs: { sizeRange: '1/2" to 3" Diameter (M12 to M80)', proofLoad: '≥ 800 MPa', hardness: '≤ 32 HRC' },
        applications: ['Flange make-up on duplex piping spools', 'Marine ballast tank valve bolting', 'Acid leaching autoclave reactor flanges']
      }
    ]
  },

  // 5. SUPER DUPLEX STAINLESS STEEL
  {
    id: 'super-duplex-steel',
    slug: 'super-duplex-steel',
    urlSlug: 'super-duplex-steel',
    altSlugs: ['super-duplex', 'super-duplex-fasteners'],
    name: 'Super Duplex Stainless Steel',
    title: 'Super Duplex Stainless Steel Fasteners',
    standard: 'ASTM A1082 / ASTM A479 / UNS S32750 / UNS S32760 / DIN 1.4410',
    primaryGrades: 'UNS S32750 (2507), UNS S32760 (Zeron 100), DIN 1.4410, DIN 1.4501',
    materialDesc: 'Ultra-high-alloy 25% Chromium super duplex fasteners engineered with PREN ≥ 42 for severe deepwater subsea trees, sour oilfield manifolds, and high-chloride aggressive acid processing.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_duplex_fasteners,
      'hex-nuts': img_duplex_fasteners,
      'stud-bolts': img_duplex_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_duplex_fasteners,
    grades: [
      {
        id: 'uns-s32750',
        slug: 'uns-s32750',
        name: 'Super Duplex 2507 (UNS S32750) Fasteners',
        shortName: 'Super Duplex 2507',
        code: 'UNS S32750 / 2507 / DIN 1.4410',
        uns: 'UNS S32750',
        din: '1.4410 (X2CrNiMoN25-7-4)',
        standard: 'ASTM A1082, ASTM A479, NACE MR0175',
        shortDesc: '25Cr-7Ni-4Mo-0.3N super duplex stud bolts and nuts with PREN ≥ 42, immune to pitting and crevice corrosion in warm seawater.',
        fullDesc: 'Formulated with 25% Chromium, 7% Nickel, 4% Molybdenum, and high Nitrogen. Delivers outstanding tensile yield strength (≥ 550 MPa) and unmatched resistance to pitting and stress cracking in hot chloride environments up to 300°C.',
        specs: { sizeRange: '1/2" to 3" Diameter (M12 to M80)', tensile: '≥ 800 MPa (116 ksi)', yield: '≥ 550 MPa (80 ksi)', pren: '≥ 42' },
        applications: ['Deepwater subsea Christmas trees and manifold flanges', 'Reverse osmosis desalination high-pressure headers', 'Offshore firewater deluge piping fasteners']
      },
      {
        id: 'uns-s32760',
        slug: 'uns-s32760',
        name: 'Super Duplex Zeron 100 (UNS S32760) Fasteners',
        shortName: 'Zeron 100 (S32760 / F55)',
        code: 'UNS S32760 / Zeron 100 / DIN 1.4501',
        uns: 'UNS S32760',
        din: '1.4501 (X2CrNiMoCuWN25-7-4)',
        standard: 'ASTM A1082, ASTM A479, NACE MR0175',
        shortDesc: 'Tungsten and copper enhanced super duplex fasteners engineered for aggressive sulfuric acid and sour gas service.',
        fullDesc: 'Alloyed with Tungsten and Copper additions that enhance acid corrosion resistance and pitting protection in sour oilfield media. PREN ≥ 42 guarantees immunity to localized attack in hot marine environments.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 750 MPa', yield: '≥ 550 MPa', pren: '≥ 42' },
        applications: ['Sour gas production wellheads and choke manifolds', 'Phosphoric and sulfuric acid plant evaporation pumps', 'Marine scrubbers on ocean-going cargo vessels']
      },
      {
        id: 'din-1-4410',
        slug: 'din-1-4410',
        name: 'EN 1.4410 Metric Super Duplex Fasteners',
        shortName: 'EN 1.4410 Metric',
        code: 'EN 1.4410 / DIN 933 Metric Super Duplex',
        uns: 'UNS S32750 European Norm',
        din: '1.4410 / EN 10088-3',
        standard: 'EN 10269, DIN 933, ISO 4014',
        shortDesc: 'European standard metric super duplex hex bolts and cap screws for subsea and chemical process equipment.',
        fullDesc: 'Precision metric cold-formed and CNC-machined super duplex fasteners conforming to European pressure equipment directive (PED).',
        specs: { sizeRange: 'M8 to M64 Metric', tensile: '≥ 800 to 1000 MPa', yield: '≥ 550 MPa' },
        applications: ['Offshore topside separation modules and coolers', 'Marine umbilical termination assemblies', 'Geothermal brine extraction wellhead bolting']
      },
      {
        id: 'astm-a1082-grade-s32750',
        slug: 'astm-a1082-grade-s32750',
        name: 'ASTM A1082 Super Duplex Stud Bolts',
        shortName: 'A1082 Super Duplex Stud',
        code: 'ASTM A1082 Gr. S32750 Continuous Stud',
        uns: 'UNS S32750 Stud',
        din: '1.4410 Stud Grade',
        standard: 'ASTM A1082/A1082M, ASME B16.5',
        shortDesc: 'High-strength cold-drawn super duplex 2507 continuous threaded stud bolts for critical subsea flange connections.',
        fullDesc: 'Certified continuous stud bolts with rolled 8-UN and UNC threads. 100% PMI verified and liquid penetrant tested to guarantee defect-free pressure containment.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 860 MPa (125 ksi)', yield: '≥ 690 MPa (100 ksi)' },
        applications: ['Deepwater oilfield subsea riser tie-in flanges', 'High-pressure sour gas export pipelines', 'Offshore FPSO swivel stack bolted connections']
      },
      {
        id: 'ferralium-255',
        slug: 'ferralium-255',
        name: 'Ferralium 255 (UNS S32550) Fasteners',
        shortName: 'Ferralium 255 (S32550)',
        code: 'UNS S32550 / Ferralium 255 25Cr',
        uns: 'UNS S32550',
        din: '1.4507 (X2CrNiMoCuN25-6-3)',
        standard: 'ASTM A479, ASTM A276, NACE MR0175',
        shortDesc: 'Original high-strength 25Cr super duplex alloy featuring 2% Copper for exceptional resistance to hot sulfuric acid.',
        fullDesc: 'Super duplex alloy formulated with 2.0% copper, delivering superior resistance to erosion-corrosion and hot concentrated acids where conventional duplex alloys suffer accelerated wear.',
        specs: { sizeRange: '1/2" to 2-1/2" Diameter', tensile: '≥ 820 MPa', yield: '≥ 585 MPa', pren: '≥ 40' },
        applications: ['Chemical fertilizer phosphoric acid pumps and valves', 'Offshore high-velocity seawater piping systems', 'Mining slurry transport pipe flange connections']
      }
    ]
  },

  // 6. TITANIUM
  {
    id: 'titanium',
    slug: 'titanium',
    urlSlug: 'titanium',
    altSlugs: ['titanium-fasteners', 'ti', 'ti-fasteners'],
    name: 'Titanium',
    title: 'Titanium Fasteners',
    standard: 'ASTM B348 / ASTM F136 / DIN 3.7165 / AMS 4928',
    primaryGrades: 'Grade 2 (CP Ti), Grade 5 (Ti-6Al-4V), Grade 7 (Ti-Pd), Grade 12',
    materialDesc: 'Lightweight, ultra-high-strength, and corrosion-immune titanium alloy hex bolts, cap screws, studs, and nuts engineered for aerospace, marine subsea, chemical chlorination, and medical applications.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_ti_fasteners,
      'hex-nuts': img_ti_fasteners,
      'stud-bolts': img_ti_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_ti_fasteners,
    grades: [
      {
        id: 'titanium-grade-5',
        slug: 'titanium-grade-5',
        name: 'Titanium Grade 5 (Ti-6Al-4V) Fasteners',
        shortName: 'Ti Grade 5 (Ti-6Al-4V)',
        code: 'ASTM B348 Gr. 5 / AMS 4928 (Ti-6Al-4V)',
        uns: 'UNS R56400',
        din: '3.7165 (TiAl6V4)',
        standard: 'ASTM B348, AMS 4928, ISO 5832-3',
        shortDesc: 'Workhorse aerospace and motorsport titanium alloy delivering 950 MPa tensile strength at half the weight of steel.',
        fullDesc: 'Alpha-beta titanium alloy containing 6% Aluminum and 4% Vanadium. Features extraordinary strength-to-weight ratio, total immunity to seawater corrosion, and outstanding fatigue resistance up to 400°C.',
        specs: { sizeRange: 'M4 to M48 (1/4" to 2")', tensile: '≥ 950 MPa (138 ksi)', yield: '≥ 880 MPa (128 ksi)', density: '4.43 g/cm³' },
        applications: ['Aerospace airframe and propulsion engine brackets', 'Motorsport and performance vehicle rotating components', 'Subsea oceanographic pressure housings and ROVs']
      },
      {
        id: 'titanium-grade-2',
        slug: 'titanium-grade-2',
        name: 'Titanium Grade 2 (CP Titanium) Fasteners',
        shortName: 'Ti Grade 2 (CP Titanium)',
        code: 'ASTM B348 Gr. 2 Commercially Pure',
        uns: 'UNS R50400',
        din: '3.7035 (Titanium Grade 2)',
        standard: 'ASTM B348, ASTM F67, DIN 933',
        shortDesc: 'Commercially pure titanium fasteners offering total immunity to wet chlorine, chlorides, and oxidizing acids.',
        fullDesc: 'Unalloyed titanium with optimum balance of strength and ductility. Delivers permanent immunity to marine pitting and severe oxidizing media including bleach, nitric acid, and wet chlorine gas.',
        specs: { sizeRange: 'M4 to M36 (1/4" to 1-1/2")', tensile: '≥ 345 MPa (50 ksi)', yield: '≥ 275 MPa (40 ksi)' },
        applications: ['Chlor-alkali chemical processing and chlorine gas pipelines', 'Marine aquaculture and coastal power station cooling', 'Electroplating anode baskets and chemical anodizing racks']
      },
      {
        id: 'titanium-grade-7',
        slug: 'titanium-grade-7',
        name: 'Titanium Grade 7 (Ti-0.2Pd) Fasteners',
        shortName: 'Ti Grade 7 (Ti-0.2Pd)',
        code: 'ASTM B348 Gr. 7 Palladium Enhanced',
        uns: 'UNS R52400',
        din: '3.7235 (Ti-Pd)',
        standard: 'ASTM B348, ASTM B861, NACE MR0175',
        shortDesc: 'Palladium-enhanced titanium fasteners resisting crevice corrosion in hot, low-pH reducing acid chloride solutions.',
        fullDesc: 'Alloyed with 0.12-0.25% Palladium to significantly enhance corrosion resistance in reducing acid environments and prevent crevice corrosion in hot brine at temperatures exceeding 250°C.',
        specs: { sizeRange: 'M6 to M30 (1/4" to 1-1/4")', tensile: '≥ 345 MPa', yield: '≥ 275 MPa', maxTemp: '350°C' },
        applications: ['Severe chemical autoclave reactors handling hot hydrochloric acid', 'Hydrometallurgical nickel and cobalt pressure leaching', 'Desalination brine heaters and flash evaporators']
      },
      {
        id: 'titanium-grade-12',
        slug: 'titanium-grade-12',
        name: 'Titanium Grade 12 (Ti-0.3Mo-0.8Ni) Fasteners',
        shortName: 'Ti Grade 12 (Mo-Ni)',
        code: 'ASTM B348 Gr. 12 High Temperature',
        uns: 'UNS R53400',
        din: '3.7105 (Ti-0.3Mo-0.8Ni)',
        standard: 'ASTM B348, ASME Section VIII',
        shortDesc: 'Near-alpha titanium alloy providing elevated temperature strength and crevice corrosion resistance in hot chlorides.',
        fullDesc: 'Alloyed with 0.3% Molybdenum and 0.8% Nickel. Engineered for high-temperature chemical process equipment requiring higher mechanical design allowables than pure titanium at lower cost than Grade 7.',
        specs: { sizeRange: 'M6 to M36', tensile: '≥ 485 MPa (70 ksi)', yield: '≥ 345 MPa (50 ksi)' },
        applications: ['Chemical processing heat exchangers and evaporators', 'Offshore geothermal brine pipe companion flanges', 'Nuclear waste containment and processing assemblies']
      },
      {
        id: 'astm-f136-eli',
        slug: 'astm-f136-eli',
        name: 'Titanium Ti-6Al-4V ELI (ASTM F136)',
        shortName: 'Ti-6Al-4V ELI (Grade 23)',
        code: 'ASTM F136 / Grade 23 Extra Low Interstitial',
        uns: 'UNS R56401',
        din: '3.7165 ELI',
        standard: 'ASTM F136, AMS 4930, ISO 5832-3',
        shortDesc: 'Extra-low interstitial Grade 23 titanium fasteners delivering superior fracture toughness in cryogenic and medical duty.',
        fullDesc: 'Refined version of Grade 5 with tightly controlled low interstitial oxygen, nitrogen, and carbon. Delivers enhanced damage tolerance, high fracture toughness, and superior performance down to liquid helium temperatures.',
        specs: { sizeRange: 'M3 to M30', tensile: '≥ 860 MPa (125 ksi)', yield: '≥ 795 MPa (115 ksi)', elongation: '≥ 10%' },
        applications: ['Cryogenic space vehicle propulsion manifolds and fuel tanks', 'Medical surgical implants and diagnostic instrumentation', 'High-performance marine racing yacht rigging']
      }
    ]
  },

  // 7. ALUMINIUM
  {
    id: 'aluminum',
    slug: 'aluminum',
    urlSlug: 'aluminum',
    altSlugs: ['aluminum-fasteners', 'aluminium', 'aluminium-fasteners', 'al'],
    name: 'Aluminium',
    title: 'Aluminium Fasteners',
    standard: 'ASTM B211 / EN 573-3 / ISO 898 equivalent / DIN 933 Al',
    primaryGrades: '6061-T6, 7075-T6, 2024-T4, 5083-H111, 6082-T6',
    materialDesc: 'Lightweight, precision machined, and anodized aluminium alloy hex bolts, cap screws, and nuts delivering high strength-to-weight ratio and corrosion resistance for aerospace, automotive, and electronics.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_al_fasteners,
      'hex-nuts': img_al_fasteners,
      'stud-bolts': img_al_fasteners,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_al_fasteners,
    grades: [
      {
        id: 'aluminum-6061-t6',
        slug: 'aluminum-6061-t6',
        name: 'Aluminium 6061-T6 Fasteners',
        shortName: 'Al 6061-T6 Structural',
        code: 'ASTM B211 Alloy 6061-T6',
        uns: 'UNS A96061',
        din: '3.3214 (AlMg1SiCu)',
        standard: 'ASTM B211, SAE AMS 4117',
        shortDesc: 'Versatile heat-treated Al-Mg-Si alloy bolts and nuts with excellent anodizing qualities and 310 MPa tensile strength.',
        fullDesc: 'Precipitation-hardened aluminium alloy containing Magnesium and Silicon. Features excellent corrosion resistance, good weldability, and attractive anodized finishes for general engineering and electronics enclosures.',
        specs: { sizeRange: 'M4 to M24 (1/4" to 1")', tensile: '≥ 310 MPa (45 ksi)', yield: '≥ 275 MPa (40 ksi)', density: '2.70 g/cm³' },
        applications: ['Architectural structural framing and curtain walls', 'Bicycle and light automotive components', 'Electronics chassis, radar brackets, and outdoor enclosures']
      },
      {
        id: 'aluminum-7075-t6',
        slug: 'aluminum-7075-t6',
        name: 'Aluminium 7075-T6 High Strength Fasteners',
        shortName: 'Al 7075-T6 (High Strength)',
        code: 'ASTM B211 Alloy 7075-T6',
        uns: 'UNS A97075',
        din: '3.4365 (AlZnMgCu1.5)',
        standard: 'ASTM B211, AMS 4124, DIN 912 Al',
        shortDesc: 'Ultra-high strength zinc-alloyed aluminium fasteners delivering 570 MPa tensile strength comparable to structural steel.',
        fullDesc: 'The highest strength commercial aluminium alloy. Fortified with Zinc, Magnesium, and Copper, and aged to T6 temper. Delivers 570 MPa tensile strength with extreme fatigue life for aerospace and defense.',
        specs: { sizeRange: 'M4 to M20 Diameter', tensile: '≥ 570 MPa (83 ksi)', yield: '≥ 500 MPa (73 ksi)', hardness: '150 HBW' },
        applications: ['Aerospace wing spar and fuselage bracket attachments', 'Motorsport racing gearbox and suspension hardware', 'High-end drone and robotics structural joints']
      },
      {
        id: 'aluminum-2024-t4',
        slug: 'aluminum-2024-t4',
        name: 'Aluminium 2024-T4 Aerospace Fasteners',
        shortName: 'Al 2024-T4 Aerospace',
        code: 'ASTM B211 Alloy 2024-T4',
        uns: 'UNS A92024',
        din: '3.1355 (AlCuMg2)',
        standard: 'ASTM B211, AMS 4120',
        shortDesc: 'Copper-alloyed high-fatigue aircraft aluminium fasteners delivering 470 MPa tensile strength under cyclic stress.',
        fullDesc: 'Al-Cu alloy specifically engineered for exceptional fatigue resistance and high strength. Widely specified in commercial aircraft fuselage and tension-loaded structural joints.',
        specs: { sizeRange: 'M4 to M20', tensile: '≥ 470 MPa (68 ksi)', yield: '≥ 325 MPa (47 ksi)' },
        applications: ['Commercial aircraft interior and structural skin bolting', 'Helicopter gearbox mountings and rotor fittings', 'Precision scientific optical instrumentation hardware']
      },
      {
        id: 'aluminum-5083-h111',
        slug: 'aluminum-5083-h111',
        name: 'Aluminium 5083-H111 Marine Fasteners',
        shortName: 'Al 5083 Marine',
        code: 'ASTM B211 Alloy 5083 Marine',
        uns: 'UNS A95083',
        din: '3.3547 (AlMg4.5Mn0.7)',
        standard: 'ASTM B211, EN 573-3',
        shortDesc: 'Marine grade non-heat-treatable aluminium alloy bolts offering exceptional resistance to seawater and cryogenic duty.',
        fullDesc: 'High-magnesium aluminium alloy delivering exceptional resistance to seawater corrosion and industrial chemical atmospheres. Retains exceptional ductility and toughness down to cryogenic LNG temperatures.',
        specs: { sizeRange: 'M6 to M24', tensile: '≥ 275 to 350 MPa', yield: '≥ 125 MPa', minTemp: '-196°C' },
        applications: ['Shipbuilding and high-speed aluminium ferry hulls', 'LNG cryogenic fuel tanks and piping supports', 'Marine drilling rig living quarters and helicopter decks']
      },
      {
        id: 'aluminum-6082-t6',
        slug: 'aluminum-6082-t6',
        name: 'Aluminium 6082-T6 European Structural Fasteners',
        shortName: 'Al 6082-T6 Structural',
        code: 'EN 573-3 Alloy 6082-T6',
        uns: 'UNS A96082',
        din: '3.2315 (AlSi1MgMn)',
        standard: 'EN 755-2, DIN 933',
        shortDesc: 'Highest strength alloy of the 6000 series, engineered for heavy civil structures, bridges, and transport containers.',
        fullDesc: 'European structural alloy replacing 6061 in many applications due to higher tensile strength (≥ 310 MPa) and superior corrosion resistance in marine transport applications.',
        specs: { sizeRange: 'M6 to M30', tensile: '≥ 310 MPa', yield: '≥ 260 MPa' },
        applications: ['Highway gantries, cranes, and transport bridges', 'Railway car bodies and freight container bolting', 'Offshore access platforms and helideck perimeters']
      }
    ]
  },

  // 8. INCONEL
  {
    id: 'inconel',
    slug: 'inconel',
    urlSlug: 'inconel',
    altSlugs: ['inconel-fasteners', 'alloy-625', 'alloy-718'],
    name: 'Inconel',
    title: 'Inconel Superalloy Fasteners',
    standard: 'ASTM B637 / ASTM B166 / API 20E / NACE MR0175',
    primaryGrades: 'Inconel 718 (UNS N07718), Inconel 625 (UNS N06625), Inconel 600, Inconel X-750',
    materialDesc: 'Precipitation-hardened nickel-chromium superalloy continuous stud bolts and heavy hex nuts delivering extreme yield strengths up to 1240 MPa and total immunity to sour gas, chlorides, and heat up to 980°C.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_inconel_catalog,
      'hex-nuts': img_inconel_catalog,
      'stud-bolts': img_inconel_catalog,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_inconel_catalog,
    grades: [
      {
        id: 'inconel-718',
        slug: 'inconel-718',
        name: 'Inconel 718 (UNS N07718) Extreme Fasteners',
        shortName: 'Inconel 718 (1240 MPa)',
        code: 'ASTM B637 Gr. 718 / API 20E BSL-3',
        uns: 'UNS N07718',
        din: '2.4668 (NiCr19Fe19Nb5Mo3)',
        standard: 'ASTM B637, API 20E, NACE MR0175',
        shortDesc: 'Precipitation-hardened superalloy stud bolts delivering 1240 MPa tensile strength for extreme HPHT subsea wellheads.',
        fullDesc: 'Precipitation-hardened nickel-based superalloy bolting manufactured to API 20E Bolting Specification Levels (BSL-3). Engineered for extreme deepwater subsea trees, high-pressure sour gas wells, and aerospace propulsion systems.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 1240 MPa (180 ksi)', yield: '≥ 1034 MPa (150 ksi)', hardness: '32 to 40 HRC' },
        applications: ['Deepwater subsea wellhead Christmas trees and blowout preventers', 'HPHT sour oilfield manifolds and subsea tie-ins', 'Aerospace rocket propulsion injectors and turbines']
      },
      {
        id: 'inconel-625',
        slug: 'inconel-625',
        name: 'Inconel 625 (UNS N06625) Marine Superalloy',
        shortName: 'Inconel 625 (High Moly)',
        code: 'ASTM B446 / ASTM F468 Gr. N06625',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        standard: 'ASTM B446, ASTM F468, NACE MR0175',
        shortDesc: '9% Molybdenum solid-solution superalloy fasteners completely immune to pitting, crevice corrosion, and hot acids.',
        fullDesc: 'Fortified with 9% Molybdenum and 3.6% Niobium. Delivers exceptional fatigue resistance and virtual immunity to chloride pitting and crevice corrosion across marine seawater and harsh chemical acids.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 827 MPa (120 ksi)', yield: '≥ 414 MPa (60 ksi)', maxTemp: '980°C' },
        applications: ['Offshore marine exhaust ducting and flare stack bolting', 'Seawater piping systems and submerged instrumentation', 'Chemical reactor vessel nozzle flanges handling chlorides']
      },
      {
        id: 'inconel-600',
        slug: 'inconel-600',
        name: 'Inconel 600 (UNS N06600) High Temp Fasteners',
        shortName: 'Inconel 600 (72% Ni)',
        code: 'ASTM B166 Gr. 600 High Nickel',
        uns: 'UNS N06600',
        din: '2.4816 (NiCr15Fe)',
        standard: 'ASTM B166, ASME Section VIII',
        shortDesc: '72% Nickel alloy fasteners offering exceptional resistance to high-temperature oxidation and chloride stress cracking.',
        fullDesc: 'Engineered for severe thermal applications up to 1150°C. Virtually immune to chloride-ion stress-corrosion cracking and highly resistant to caustic alkalis and dry chlorine gas.',
        specs: { sizeRange: '1/2" to 2-1/2"', tensile: '≥ 550 MPa (80 ksi)', yield: '≥ 240 MPa', maxTemp: '1150°C' },
        applications: ['Furnace retorts, heat-treating fixtures, and burner nozzles', 'Nuclear reactor control rod drive mechanism bolting', 'Caustic soda manufacturing evaporator closures']
      },
      {
        id: 'inconel-x750',
        slug: 'inconel-x750',
        name: 'Inconel X-750 (UNS N07750) Spring & Studs',
        shortName: 'Inconel X-750 Aged',
        code: 'ASTM B637 Gr. X-750 Precipitation Aged',
        uns: 'UNS N07750',
        din: '2.4669 (NiCr15Fe7TiAl)',
        standard: 'ASTM B637, AMS 5747',
        shortDesc: 'Precipitation-hardenable nickel superalloy stud bolts maintaining high relaxation resistance up to 700°C.',
        fullDesc: 'Alloyed with Aluminum and Titanium for precipitation hardening. Combines high tensile and creep-rupture properties up to 700°C with excellent relaxation resistance under continuous mechanical load.',
        specs: { sizeRange: '1/4" to 2" Diameter', tensile: '≥ 1035 MPa (150 ksi)', yield: '≥ 690 MPa (100 ksi)', hardness: '30 to 40 HRC' },
        applications: ['Gas turbine rotor bolts and high-pressure steam valves', 'Nuclear reactor core internal structural fasteners', 'Severe duty spring lock washers and Belleville disc springs']
      },
      {
        id: 'api-20e-bsl3-718',
        slug: 'api-20e-bsl3-718',
        name: 'API 20E BSL-3 Qualified Bolting',
        shortName: 'API 20E BSL-3 Qualified',
        code: 'API 20E Level 3 Qualified Bolting',
        uns: 'UNS N07718 / 4140 BSL-3',
        din: 'API Spec 20E BSL-3',
        standard: 'API Spec 20E, API 6A, API 17D',
        shortDesc: 'Critical oilfield bolting certified to API 20E Bolting Specification Level 3 with mandatory volumetric non-destructive testing.',
        fullDesc: 'Manufactured under stringent quality requirements including 100% volumetric ultrasonic testing, Charpy V-notch impact testing at -46°C, and full mill heat-lot traceability for critical offshore wellhead safety barriers.',
        specs: { sizeRange: '1/2" to 4" Diameter', qualityLevel: 'BSL-3 Mandatory UT & MT', mtc: 'EN 10204 3.2 Third Party' },
        applications: ['Blowout preventer (BOP) stack bonnet and ram fasteners', 'Subsea production tree master valve bolting', 'Critical offshore surface safety valve (SSV) actuators']
      }
    ]
  },

  // 9. MONEL
  {
    id: 'monel',
    slug: 'monel',
    urlSlug: 'monel',
    altSlugs: ['monel-fasteners', 'alloy-400', 'alloy-k500'],
    name: 'Monel',
    title: 'Monel Nickel-Copper Fasteners',
    standard: 'ASTM B164 / ASTM F467 / ASTM F468 / NACE MR0175',
    primaryGrades: 'Monel 400 (UNS N04400), Monel K-500 (UNS N05500), ASTM F468',
    materialDesc: 'Nickel-copper alloy fasteners engineered for high-velocity marine seawater, hydrofluoric acid alkylation units, and subsea offshore hardware requiring non-magnetic properties and bio-fouling immunity.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_monel_catalog,
      'hex-nuts': img_monel_catalog,
      'stud-bolts': img_monel_catalog,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_monel_catalog,
    grades: [
      {
        id: 'monel-400',
        slug: 'monel-400',
        name: 'Monel 400 (UNS N04400) Fasteners',
        shortName: 'Monel 400 (Ni-Cu)',
        code: 'ASTM B164 Gr. 400 / ASTM F468 N04400',
        uns: 'UNS N04400',
        din: '2.4360 (NiCu30Fe)',
        standard: 'ASTM B164, ASTM F468, NACE MR0175',
        shortDesc: 'Nickel-copper alloy fasteners immune to seawater pitting and resistant to hydrofluoric and sulfuric acid.',
        fullDesc: 'Solid-solution alloy composed of roughly 67% Nickel and 30% Copper. Outstanding resistance to rapidly flowing seawater, marine bio-fouling, and non-oxidizing acids including hydrofluoric acid.',
        specs: { sizeRange: '1/4" to 3" Diameter', tensile: '≥ 550 MPa (80 ksi)', yield: '≥ 275 MPa (40 ksi)' },
        applications: ['Marine propeller shafts and seawater pump casings', 'Refinery hydrofluoric (HF) acid alkylation units', 'Subsea instrumentation mounts and marine splash-zone hardware']
      },
      {
        id: 'monel-k500',
        slug: 'monel-k500',
        name: 'Monel K-500 (UNS N05500) High-Strength Fasteners',
        shortName: 'Monel K-500 (Age-Hardened)',
        code: 'ASTM B865 / ASTM F468 Gr. N05500',
        uns: 'UNS N05500',
        din: '2.4375 (NiCu30Al)',
        standard: 'ASTM B865, NACE MR0175, API 6A',
        shortDesc: 'Precipitation-hardened nickel-copper fasteners delivering 1100 MPa tensile strength with non-magnetic properties.',
        fullDesc: 'Alloyed with Aluminum and Titanium and age-hardened to achieve three times the yield strength of Monel 400. Completely non-magnetic across all temperatures down to -100°C.',
        specs: { sizeRange: '1/2" to 3" Diameter', tensile: '≥ 965 MPa (140 ksi)', yield: '≥ 690 MPa (100 ksi)', hardness: '28 to 38 HRC' },
        applications: ['Subsea drill collars and non-magnetic downhole MWD tools', 'Marine propeller shaft sleeve fasteners and subsea valves', 'High-strength marine fasteners in splash and tidal zones']
      },
      {
        id: 'astm-f468-monel-400',
        slug: 'astm-f468-monel-400',
        name: 'ASTM F468 Monel 400 Hex Bolts',
        shortName: 'ASTM F468 Monel Bolt',
        code: 'ASTM F468 Alloy N04400 Hex Head',
        uns: 'UNS N04400 Headed',
        din: 'DIN 933 Monel',
        standard: 'ASTM F468, ASME B18.2.1',
        shortDesc: 'Standard specification nonferrous hex cap screws and bolts for marine piping and marine valve assemblies.',
        fullDesc: 'Manufactured and certified per ASTM F468 for nonferrous general commercial and marine engineering bolts. Precision cold-headed and machined with rolled threads.',
        specs: { sizeRange: '1/4" to 1-1/2" Diameter', tensile: '≥ 550 MPa', yield: '≥ 275 MPa' },
        applications: ['Naval warship seawater intake valves and strainer flanges', 'Marine desalination brine circulation pumps', 'Industrial salt production evaporation equipment']
      },
      {
        id: 'astm-f467-monel-nut',
        slug: 'astm-f467-monel-nut',
        name: 'ASTM F467 Monel Heavy Hex Nuts',
        shortName: 'ASTM F467 Monel Nut',
        code: 'ASTM F467 Alloy N04400 / N05500 Nut',
        uns: 'UNS N04400 / UNS N05500 Nut',
        din: 'DIN 934 Monel Heavy',
        standard: 'ASTM F467, ASME B18.2.2',
        shortDesc: 'Nonferrous heavy hex nuts engineered to pair with Monel 400 and K-500 stud bolts in marine seawater joints.',
        fullDesc: 'Manufactured from Monel bar stock with precision internal threads. Eliminates galvanic potential differences when clamping Monel piping flanges and naval brass equipment.',
        specs: { sizeRange: '1/4" to 3" Diameter', proofLoad: '≥ 550 to 900 MPa', finish: 'Plain Pickled / Passivated' },
        applications: ['Marine sea chest valve companion flange clamping', 'Coastal refinery caustic washing columns', 'Subsea offshore cable and umbilical tie-down clamps']
      },
      {
        id: 'monel-400-stud-bolt',
        slug: 'monel-400-stud-bolt',
        name: 'Monel 400 Continuous Threaded Stud Bolts',
        shortName: 'Monel 400 Stud Bolt',
        code: 'Monel 400 Flange Stud Set',
        uns: 'UNS N04400 Stud',
        din: 'DIN 976 Monel 400',
        standard: 'ASTM B164, ASME B16.5, ASME B1.1',
        shortDesc: 'Continuous threaded stud bolts supplied with 2 matching Monel heavy hex nuts for seawater piping.',
        fullDesc: 'Precision cut-to-length continuous threaded stud bolts for critical flanged piping connections in marine splash zones where steel and stainless bolts fail from chloride cracking.',
        specs: { sizeRange: '1/2" to 2-1/2" Diameter', threads: 'UNC (≤ 1"), 8-UN (> 1")', class: 'Class 2A Fit' },
        applications: ['Seawater intake companion flanges on offshore platforms', 'Submerged marine pile clamps and cathodic protection anodes', 'Hydrofluoric acid process alkylation reboilers']
      }
    ]
  },

  // 10. HASTELLOY
  {
    id: 'hastelloy',
    slug: 'hastelloy',
    urlSlug: 'hastelloy',
    altSlugs: ['hastelloy-fasteners', 'alloy-c276', 'alloy-c22'],
    name: 'Hastelloy',
    title: 'Hastelloy High-Nickel Fasteners',
    standard: 'ASTM B574 / ASTM F468 / NACE MR0175 / DIN 2.4819',
    primaryGrades: 'Hastelloy C-276 (UNS N10276), Hastelloy C-22 (UNS N06022), Hastelloy B-2',
    materialDesc: 'Nickel-molybdenum-chromium superalloy fasteners engineered for extreme chemical processing environments handling wet chlorine gas, hydrochloric acid, ferric chlorides, and strong oxidizers.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_hastelloy_catalog,
      'hex-nuts': img_hastelloy_catalog,
      'stud-bolts': img_hastelloy_catalog,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_hastelloy_catalog,
    grades: [
      {
        id: 'hastelloy-c276',
        slug: 'hastelloy-c276',
        name: 'Hastelloy C-276 (UNS N10276) Fasteners',
        shortName: 'Hastelloy C-276',
        code: 'ASTM B574 Gr. N10276 / DIN 2.4819',
        uns: 'UNS N10276',
        din: '2.4819 (NiMo16Cr15W)',
        standard: 'ASTM B574, ASTM F468, NACE MR0175',
        shortDesc: 'Workhorse chemical superalloy fasteners immune to wet chlorine gas, hypochlorite, and strong oxidizing salts.',
        fullDesc: 'Engineered with 16% Molybdenum, 15% Chromium, and 4% Tungsten. One of the few alloys resistant to wet chlorine gas, hypochlorite, and chlorine dioxide solutions up to elevated temperatures.',
        specs: { sizeRange: '1/4" to 3" Diameter', tensile: '≥ 690 MPa (100 ksi)', yield: '≥ 283 MPa (41 ksi)', pren: '≥ 68' },
        applications: ['Flue gas desulfurization (FGD) scrubber systems', 'Chemical reactors handling mixed acid waste streams', 'Pharmaceutical synthesis reaction vessels and condensers']
      },
      {
        id: 'hastelloy-c22',
        slug: 'hastelloy-c22',
        name: 'Hastelloy C-22 (UNS N06022) Fasteners',
        shortName: 'Hastelloy C-22',
        code: 'ASTM B574 Gr. N06022 / DIN 2.4602',
        uns: 'UNS N06022',
        din: '2.4602 (NiCr21Mo14W)',
        standard: 'ASTM B574, ASTM F468, NACE MR0175',
        shortDesc: '22% Chromium superalloy fasteners delivering superior resistance to oxidizing acid media and crevice attack.',
        fullDesc: 'Features higher chromium content than C-276, providing superior resistance to oxidizing acid environments including nitric acid and mixtures containing nitric and hydrofluoric acids.',
        specs: { sizeRange: '1/4" to 2-1/2" Diameter', tensile: '≥ 690 MPa', yield: '≥ 310 MPa', pren: '≥ 65' },
        applications: ['Pesticide manufacturing chlorination systems', 'Nuclear fuel reprocessing dissolvers and piping', 'Waste incineration scrubber quench sections']
      },
      {
        id: 'hastelloy-b2',
        slug: 'hastelloy-b2',
        name: 'Hastelloy B-2 (UNS N10665) Fasteners',
        shortName: 'Hastelloy B-2 (HCl Specialist)',
        code: 'ASTM B335 Gr. N10665 / DIN 2.4617',
        uns: 'UNS N10665',
        din: '2.4617 (NiMo28)',
        standard: 'ASTM B335, ASTM F468',
        shortDesc: 'Nickel-molybdenum fasteners providing extraordinary resistance to pure hydrochloric acid at all concentrations and temperatures.',
        fullDesc: 'Formulated with 28% Molybdenum and very low carbon and silicon. Specifically engineered for handling pure reducing acids such as hydrochloric, sulfuric, acetic, and phosphoric acids.',
        specs: { sizeRange: '1/4" to 2" Diameter', tensile: '≥ 760 MPa', yield: '≥ 350 MPa' },
        applications: ['Hydrochloric acid production, distillation, and storage', 'Acetic acid and ethylbenzene synthesis reactors', 'Alkylation process acid catalyst piping flanges']
      },
      {
        id: 'astm-b574-c276',
        slug: 'astm-b574-c276',
        name: 'ASTM B574 C-276 Heavy Hex Cap Screws',
        shortName: 'ASTM B574 C-276 Bolt',
        code: 'ASTM B574 Alloy N10276 Hex Bolt',
        uns: 'UNS N10276 Headed',
        din: 'DIN 933 Hastelloy',
        standard: 'ASTM B574, ASME B18.2.1',
        shortDesc: 'Precision hot-forged and CNC-turned C-276 hex head bolts for high-integrity chemical flange joints.',
        fullDesc: 'Certified hot-forged and precision-machined C-276 hex head bolts. Tested per ASTM B574 specification with full chemical and mechanical certification.',
        specs: { sizeRange: '1/2" to 2" Diameter', tensile: '≥ 690 MPa', yield: '≥ 283 MPa' },
        applications: ['Chemical reactor manway closures and sight glass covers', 'Chlorinated organic chemical distillation column flanges', 'Bleach plant washer drum bolted components']
      },
      {
        id: 'din-2-4819-hastelloy',
        slug: 'din-2-4819-hastelloy',
        name: 'DIN 2.4819 Metric Hastelloy Stud Bolts',
        shortName: 'DIN 2.4819 Metric Stud',
        code: 'DIN 2.4819 / EN 10269 Metric C-276',
        uns: 'UNS N10276 Metric',
        din: '2.4819 (NiMo16Cr15W)',
        standard: 'DIN 976, DIN 934, EN 10269',
        shortDesc: 'Metric continuous threaded stud bolts supplied with 2 matching DIN 934 C-276 heavy hex nuts.',
        fullDesc: 'Precision metric thread rolled stud bolts conforming to DIN standards for European chemical plant specifications. 100% PMI verified and liquid penetrant inspected.',
        specs: { sizeRange: 'M8 to M64 Metric', threads: 'Metric Coarse / Fine 6g/6H' },
        applications: ['European pharmaceutical batch synthesis reactors', 'Specialty fine chemical production autoclaves', 'Titanium dioxide pigment manufacturing slurry lines']
      }
    ]
  },

  // 11. COPPER NICKEL
  {
    id: 'copper-nickel',
    slug: 'copper-nickel',
    urlSlug: 'copper-nickel',
    altSlugs: ['copper-nickel-fasteners', 'cuni', 'cu-ni', 'cuni-fasteners'],
    name: 'Copper Nickel',
    title: 'Copper Nickel Fasteners',
    standard: 'ASTM B151 / ASTM F468 / DIN 2.0872 / DIN 2.0882',
    primaryGrades: 'Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), DIN 2.0872',
    materialDesc: 'Corrosion-resistant copper-nickel alloy fasteners engineered for marine seawater cooling lines, naval ships, and offshore platform piping requiring bio-fouling immunity.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_cuni_catalog,
      'hex-nuts': img_cuni_catalog,
      'stud-bolts': img_cuni_catalog,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_cuni_catalog,
    grades: [
      {
        id: 'cuni-90-10',
        slug: 'cuni-90-10',
        name: 'Copper Nickel 90/10 (UNS C70600) Fasteners',
        shortName: 'Cu-Ni 90/10 (C70600)',
        code: 'ASTM B151 / ASTM F468 Gr. C70600',
        uns: 'UNS C70600',
        din: '2.0872 (CuNi10Fe1Mn)',
        standard: 'ASTM B151, ASTM F468, DIN 86088',
        shortDesc: '90/10 copper-nickel fasteners providing natural resistance to marine biofouling and seawater erosion-corrosion.',
        fullDesc: 'Formulated with 90% Copper, 10% Nickel, and controlled Iron and Manganese. Releases micro-levels of copper ions that naturally inhibit barnacle, algae, and marine organism growth on submerged hardware.',
        specs: { sizeRange: '1/4" to 2" (M6 to M48)', tensile: '≥ 345 MPa (50 ksi)', yield: '≥ 140 MPa' },
        applications: ['Naval warship seawater intake and firemain piping', 'Coastal power station condenser waterbox bolting', 'Marine aquaculture cage frame hardware']
      },
      {
        id: 'cuni-70-30',
        slug: 'cuni-70-30',
        name: 'Copper Nickel 70/30 (UNS C71500) Fasteners',
        shortName: 'Cu-Ni 70/30 (C71500)',
        code: 'ASTM B151 / ASTM F468 Gr. C71500',
        uns: 'UNS C71500',
        din: '2.0882 (CuNi30Mn1Fe)',
        standard: 'ASTM B151, ASTM F468, MIL-C-15726',
        shortDesc: 'Higher strength 70/30 copper-nickel fasteners engineered for high-velocity seawater piping systems.',
        fullDesc: 'Formulated with 30% Nickel for enhanced erosion-corrosion resistance at water velocities up to 4.5 m/s. Features higher mechanical tensile strength and superior resistance to marine impingement attack.',
        specs: { sizeRange: '1/4" to 2" Diameter', tensile: '≥ 450 MPa (65 ksi)', yield: '≥ 170 MPa' },
        applications: ['Submarine seawater cooling loops and hull penetrations', 'Offshore platform seawater injection piping flanges', 'Desalination multi-stage flash evaporator brine heaters']
      },
      {
        id: 'astm-f468-c70600',
        slug: 'astm-f468-c70600',
        name: 'ASTM F468 Cu-Ni 90/10 Hex Head Bolts',
        shortName: 'ASTM F468 Cu-Ni Bolt',
        code: 'ASTM F468 Alloy C70600 Headed',
        uns: 'UNS C70600 Headed',
        din: 'DIN 933 CuNi10Fe',
        standard: 'ASTM F468, ASME B18.2.1',
        shortDesc: 'Standard specification copper-nickel hex head bolts for marine piping companion flanges.',
        fullDesc: 'Precision-forged and turned hex head bolts. Tested per ASTM F468 specification with guaranteed chemical and mechanical properties.',
        specs: { sizeRange: '1/2" to 1-1/2" Diameter', tensile: '≥ 345 MPa', yield: '≥ 140 MPa' },
        applications: ['Marine sea chest valve flanges and strainer covers', 'Shipboard heat exchanger bundle bolting', 'Seawater overboard discharge piping']
      },
      {
        id: 'din-2-0872-cuni',
        slug: 'din-2-0872-cuni',
        name: 'DIN 2.0872 Metric Cu-Ni Stud Bolts',
        shortName: 'DIN 2.0872 Metric Stud',
        code: 'DIN 2.0872 / CuNi10Fe Metric Stud',
        uns: 'UNS C70600 Metric',
        din: '2.0872 / DIN 976',
        standard: 'DIN 976, DIN 934, VG 85352',
        shortDesc: 'Metric continuous threaded stud bolts manufactured to German naval standards for seawater circuits.',
        fullDesc: 'Manufactured to German naval standard VG 85352 for seawater piping systems. Fully threaded with rolled metric threads.',
        specs: { sizeRange: 'M8 to M48 Metric', threads: 'Metric Coarse 6g' },
        applications: ['European shipyard commercial vessel piping', 'Offshore wind farm subsea cable protection clamps', 'Coastal desalination intake pump flanges']
      },
      {
        id: 'cuni-90-10-heavy-nut',
        slug: 'cuni-90-10-heavy-nut',
        name: 'Cu-Ni 90/10 Heavy Hex Nuts',
        shortName: 'Cu-Ni 90/10 Heavy Nut',
        code: 'ASTM F467 Alloy C70600 Nut',
        uns: 'UNS C70600 Nut',
        din: 'DIN 934 CuNi10Fe',
        standard: 'ASTM F467, ASME B18.2.2',
        shortDesc: 'Nonferrous heavy hex nuts matching copper-nickel stud bolts to prevent galvanic corrosion.',
        fullDesc: 'Precision tapped heavy hex nuts formulated from Cu-Ni 90/10 alloy bar stock. Clamps mating Cu-Ni flanges without creating galvanic galvanic couples.',
        specs: { sizeRange: '1/4" to 2" Diameter', proofLoad: '≥ 345 MPa' },
        applications: ['Seawater piping flange joint make-up', 'Naval vessel valve bonnet bolting', 'Desalination plant tube sheet attachments']
      }
    ]
  },

  // 12. NICKEL ALLOYS
  {
    id: 'nickel-alloys',
    slug: 'nickel-alloys',
    urlSlug: 'nickel',
    altSlugs: ['nickel', 'nickel-fasteners', 'nickel-200', 'nickel-201'],
    name: 'Nickel',
    title: 'Nickel & Nickel Alloy Fasteners',
    standard: 'ASTM B160 / ASTM F468 / DIN 2.4066 / DIN 2.4068',
    primaryGrades: 'Nickel 200 (UNS N02200), Nickel 201 (UNS N02201), ASTM B160',
    materialDesc: 'Commercially pure nickel fasteners offering supreme resistance to caustic alkalis (sodium hydroxide) up to high temperatures, dry halogens, and chemical synthesis processes.',
    supportedTypeSlugs: ['hex-head-bolts', 'hex-nuts', 'stud-bolts', 'socket-head-cap-screws', 'washers'],
    typeImages: {
      'hex-head-bolts': img_nickel_catalog,
      'hex-nuts': img_nickel_catalog,
      'stud-bolts': img_nickel_catalog,
      'socket-head-cap-screws': img_socket_screws,
      'washers': img_washers
    },
    displayImage: img_nickel_catalog,
    grades: [
      {
        id: 'nickel-200',
        slug: 'nickel-200',
        name: 'Nickel 200 (UNS N02200) Fasteners',
        shortName: 'Nickel 200 (Pure Ni)',
        code: 'ASTM B160 Gr. N02200 / DIN 2.4066',
        uns: 'UNS N02200',
        din: '2.4066 (Ni99.2)',
        standard: 'ASTM B160, ASTM F468, ASME Section VIII',
        shortDesc: 'Commercially pure (99.6%) wrought nickel fasteners completely resistant to caustic soda and alkaline media.',
        fullDesc: '99.6% pure nickel fasteners providing exceptional resistance to caustic alkalis across all concentrations and temperatures up to molten sodium hydroxide at 315°C.',
        specs: { sizeRange: '1/4" to 2" Diameter', tensile: '≥ 414 MPa (60 ksi)', yield: '≥ 103 MPa (15 ksi)' },
        applications: ['Caustic soda manufacturing evaporators and piping', 'Synthetic fiber (rayon) spinning bath equipment', 'Chemical equipment processing anhydrous hydrogen fluoride']
      },
      {
        id: 'nickel-201',
        slug: 'nickel-201',
        name: 'Nickel 201 (UNS N02201) Low-Carbon Fasteners',
        shortName: 'Nickel 201 (Low-C)',
        code: 'ASTM B160 Gr. N02201 Low Carbon',
        uns: 'UNS N02201',
        din: '2.4068 (LC-Ni99.2)',
        standard: 'ASTM B160, ASME Section VIII',
        shortDesc: 'Low-carbon (max 0.02%) nickel fasteners immune to graphitization at temperatures above 315°C.',
        fullDesc: 'Low-carbon version of Nickel 200 formulated to prevent intergranular embrittlement by carbon precipitation (graphitization) during prolonged exposure above 315°C up to 650°C.',
        specs: { sizeRange: '1/4" to 2" Diameter', tensile: '≥ 345 MPa (50 ksi)', yield: '≥ 69 MPa', maxTemp: '650°C' },
        applications: ['High-temperature caustic concentration evaporators', 'Fluorine generation cells and handling systems', 'Vinyl chloride monomer (VCM) production reactors']
      },
      {
        id: 'astm-b160-nickel-stud',
        slug: 'astm-b160-nickel-stud',
        name: 'ASTM B160 Nickel Continuous Stud Bolts',
        shortName: 'ASTM B160 Nickel Stud',
        code: 'ASTM B160 Alloy N02200 Stud',
        uns: 'UNS N02200 Stud',
        din: 'DIN 976 Nickel 200',
        standard: 'ASTM B160, ASME B16.5',
        shortDesc: 'Continuous threaded pure nickel stud bolts for chemical companion flange connections.',
        fullDesc: 'Precision cut-to-length continuous threaded stud bolts manufactured from certified Nickel 200 bar stock. Fully threaded with rolled threads.',
        specs: { sizeRange: '1/2" to 2" Diameter', threads: 'UNC / 8-UN Class 2A' },
        applications: ['Caustic evaporator piping flanges and manholes', 'Alkaline battery manufacturing equipment', 'Electronic vacuum tube structural fixtures']
      },
      {
        id: 'din-2-4066-nickel-bolt',
        slug: 'din-2-4066-nickel-bolt',
        name: 'DIN 2.4066 Metric Nickel Hex Bolts',
        shortName: 'DIN 2.4066 Metric Bolt',
        code: 'DIN 2.4066 / Ni99.2 Metric Bolt',
        uns: 'UNS N02200 Metric',
        din: '2.4066 / DIN 933',
        standard: 'DIN 933, DIN 931, EN 10269',
        shortDesc: 'Metric pure nickel hex head bolts for European chemical processing equipment.',
        fullDesc: 'Precision metric cold-headed and turned Nickel 200 hex bolts conforming to DIN standards.',
        specs: { sizeRange: 'M6 to M36 Metric', threads: 'Metric Coarse 6g' },
        applications: ['European chemical processing skid frames', 'Electrolysis plant busbar connections', 'Food processing equipment handling fatty acids']
      },
      {
        id: 'nickel-200-heavy-nut',
        slug: 'nickel-200-heavy-nut',
        name: 'Nickel 200 Heavy Hex Nuts',
        shortName: 'Nickel 200 Heavy Nut',
        code: 'ASTM F467 Alloy N02200 Nut',
        uns: 'UNS N02200 Nut',
        din: 'DIN 934 Ni99.2 Heavy',
        standard: 'ASTM F467, ASME B18.2.2',
        shortDesc: 'Pure nickel heavy hex nuts matching nickel stud bolts for caustic service.',
        fullDesc: 'Precision internal thread tapped heavy hex nuts formulated from certified pure nickel.',
        specs: { sizeRange: '1/4" to 2" Diameter', proofLoad: '≥ 414 MPa' },
        applications: ['Caustic soda flange joint clamping', 'Chlorinated organic reaction vessel closures', 'Molten salt storage tank fasteners']
      }
    ]
  }
];

// Helper dictionaries for fast lookup
export const FASTENER_MATERIALS_MAP = new Map(FASTENER_MATERIALS.map(m => [m.slug, m]));
export const CORE_FASTENER_TYPES_MAP = new Map(CORE_FASTENER_TYPES.map(t => [t.slug, t]));

/**
 * Normalizes any material slug variant to the canonical fastener material slug
 */
export function normalizeFastenerMaterialSlug(raw) {
  if (!raw) return 'stainless-steel';
  const clean = String(raw).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();

  for (const mat of FASTENER_MATERIALS) {
    if (mat.slug === clean || mat.id === clean || mat.urlSlug === clean) return mat.slug;
    if (mat.altSlugs && mat.altSlugs.includes(clean)) return mat.slug;
  }

  // Common aliases & heuristics
  if (clean.includes('stainless') || clean.startsWith('ss')) return 'stainless-steel';
  if (clean.includes('super-duplex')) return 'super-duplex-steel';
  if (clean.includes('duplex')) return 'duplex-steel';
  if (clean.includes('carbon') || clean.startsWith('cs')) return 'carbon-steel';
  if (clean.includes('alloy') && !clean.includes('nickel')) return 'alloy-steel';
  if (clean.includes('inconel')) return 'inconel';
  if (clean.includes('monel')) return 'monel';
  if (clean.includes('hastelloy')) return 'hastelloy';
  if (clean.includes('copper') || clean.includes('cu-ni') || clean.includes('cuni')) return 'copper-nickel';
  if (clean.includes('nickel')) return 'nickel-alloys';
  if (clean.includes('titanium') || clean.startsWith('ti')) return 'titanium';
  if (clean.includes('aluminum') || clean.includes('aluminium')) return 'aluminum';

  return 'stainless-steel';
}

/**
 * Normalizes fastener type slug to canonical type slug
 */
export function normalizeFastenerTypeSlug(raw) {
  if (!raw) return null;
  const clean = String(raw).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();

  for (const t of CORE_FASTENER_TYPES) {
    if (t.slug === clean || t.id === clean) return t.slug;
    if (t.aliases && t.aliases.includes(clean)) return t.slug;
  }

  if (clean.includes('hex-bolt') || clean.includes('hex-head') || clean.includes('bolt')) return 'hex-head-bolts';
  if (clean.includes('hex-nut') || clean.includes('nut')) return 'hex-nuts';
  if (clean.includes('stud') || clean.includes('threaded-rod')) return 'stud-bolts';
  if (clean.includes('socket') || clean.includes('allen') || clean.includes('cap-screw')) return 'socket-head-cap-screws';
  if (clean.includes('washer') || clean.includes('lock-washer')) return 'washers';

  return null;
}

/**
 * Normalizes grade slug for a material
 */
export function normalizeFastenerGradeSlug(materialSlug, rawGrade) {
  if (!rawGrade) return null;
  const normMat = normalizeFastenerMaterialSlug(materialSlug);
  const mat = getFastenerMaterialBySlug(normMat);
  if (!mat || !mat.grades) return rawGrade;

  const clean = String(rawGrade).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();

  for (const g of mat.grades) {
    if (g.slug === clean || g.id === clean) return g.slug;
    const shortClean = (g.shortName || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (shortClean === clean) return g.slug;
  }

  return clean;
}

export function isFastenerMaterialSlug(slug) {
  if (!slug) return false;
  const clean = String(slug).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  for (const mat of FASTENER_MATERIALS) {
    if (mat.slug === clean || mat.id === clean || (mat.altSlugs && mat.altSlugs.includes(clean))) return true;
  }
  return false;
}

export function isFastenerTypeSlug(slug) {
  if (!slug) return false;
  const clean = String(slug).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  for (const t of CORE_FASTENER_TYPES) {
    if (t.slug === clean || t.id === clean || (t.aliases && t.aliases.includes(clean))) return true;
  }
  return false;
}

export function isFastenerGradeSlug(materialSlug, slug) {
  if (!slug) return false;
  const mat = getFastenerMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return false;
  const clean = String(slug).toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  return mat.grades.some(g => g.slug === clean || g.id === clean);
}

export function getFastenerMaterialBySlug(slug) {
  const norm = normalizeFastenerMaterialSlug(slug);
  return FASTENER_MATERIALS_MAP.get(norm) || FASTENER_MATERIALS[0];
}

export function getCoreFastenerTypeBySlug(slug) {
  const norm = normalizeFastenerTypeSlug(slug);
  return CORE_FASTENER_TYPES_MAP.get(norm) || null;
}

export function getFastenerGradeBySlug(materialSlug, gradeSlug) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return null;
  const norm = normalizeFastenerGradeSlug(materialSlug, gradeSlug);
  return mat.grades.find(g => g.slug === norm || g.id === norm) || mat.grades[0] || null;
}

/**
 * Returns the 5 fastener types formatted for a specific material with material-specific images & URLs
 */
export function getFastenerTypesForMaterial(materialSlug) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  return CORE_FASTENER_TYPES.map(type => {
    const matImage = (mat.typeImages && mat.typeImages[type.slug]) || type.defaultImage;
    return {
      ...type,
      materialId: mat.id,
      materialSlug: mat.slug,
      materialName: mat.name,
      materialFullTitle: `${mat.name} ${type.name}`,
      displayImage: matImage,
      routeUrl: `/products/fasteners/${mat.slug}/${type.slug}-manufactured-in-mumbai`
    };
  });
}

/**
 * Returns the grades for a material
 */
export function getFastenerGradesForMaterial(materialSlug) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  return (mat.grades || []).map(g => ({
    ...g,
    materialSlug: mat.slug,
    routeUrl: `/products/fasteners/${mat.slug}/grades/${g.slug}-manufactured-in-mumbai`
  }));
}

/**
 * Returns the grades supported for a fastener type in a material
 */
export function getFastenerGradesForType(materialSlug, typeSlug) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  const type = getCoreFastenerTypeBySlug(typeSlug);
  if (!mat || !mat.grades || !type) return [];

  return mat.grades.map(grade => ({
    ...grade,
    materialSlug: mat.slug,
    typeSlug: type.slug,
    routeUrl: `/products/fasteners/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
  }));
}

/**
 * Returns fastener types available for a specific grade
 */
export function getFastenerTypesForGrade(materialSlug, gradeSlug) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  const grade = getFastenerGradeBySlug(materialSlug, gradeSlug);
  return CORE_FASTENER_TYPES.map(type => {
    const matImage = (mat.typeImages && mat.typeImages[type.slug]) || type.defaultImage;
    return {
      ...type,
      materialId: mat.id,
      materialSlug: mat.slug,
      materialName: mat.name,
      gradeSlug: grade ? grade.slug : null,
      gradeName: grade ? grade.shortName : null,
      materialFullTitle: grade ? `${grade.shortName} ${type.name}` : `${mat.name} ${type.name}`,
      displayImage: matImage,
      routeUrl: grade 
        ? `/products/fasteners/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
        : `/products/fasteners/${mat.slug}/${type.slug}-manufactured-in-mumbai`
    };
  });
}

/**
 * Matches composite fastener type and grade slug, e.g. "hex-head-bolts-astm-a193-b7"
 */
export function matchFastenerTypeAndGrade(materialSlug, slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  const mat = getFastenerMaterialBySlug(materialSlug);
  if (!mat) return null;

  for (const type of CORE_FASTENER_TYPES) {
    const candidates = [type.slug, ...(type.aliases || [])];
    for (const cand of candidates) {
      if (clean === cand) {
        return { typeSlug: type.slug, gradeSlug: null };
      }
      if (clean.startsWith(cand + '-')) {
        const gradePart = clean.slice(cand.length + 1);
        const normGrade = normalizeFastenerGradeSlug(mat.slug, gradePart);
        return {
          typeSlug: type.slug,
          gradeSlug: normGrade || gradePart
        };
      }
    }
  }
  return null;
}

/**
 * Returns full combined details for a specific (material + type + optional grade) pair
 */
export function getFastenerTypeDetail(materialSlug, typeSlug, gradeSlug = null) {
  const mat = getFastenerMaterialBySlug(materialSlug);
  const type = getCoreFastenerTypeBySlug(typeSlug) || CORE_FASTENER_TYPES[0];
  const displayImage = (mat.typeImages && mat.typeImages[type.slug]) || type.defaultImage;

  const grade = gradeSlug ? getFastenerGradeBySlug(mat.slug, gradeSlug) : null;
  const availableGrades = getFastenerGradesForType(mat.slug, type.slug);

  const fullName = grade
    ? `${grade.shortName} ${mat.name} ${type.name}`
    : `${mat.name} ${type.name}`;

  const canonicalUrl = grade
    ? `/products/fasteners/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
    : `/products/fasteners/${mat.slug}/${type.slug}-manufactured-in-mumbai`;

  return {
    id: grade ? `${mat.slug}-${type.slug}-${grade.slug}` : `${mat.slug}-${type.slug}`,
    typeNumber: type.number,
    typeName: type.name,
    typeSlug: type.slug,
    technicalDesignation: type.technicalDesignation,
    categoryClassification: type.categoryClassification,
    materialName: mat.name,
    materialSlug: mat.slug,
    materialStandard: mat.standard,
    materialGrades: mat.primaryGrades,
    materialDesc: mat.materialDesc,
    grade: grade,
    availableGrades,
    fullName,
    canonicalUrl,
    displayImage,
    shortDesc: grade
      ? `Precision certified ${fullName} manufactured strictly in conformance with ${grade.standard}. ${grade.shortDesc}`
      : `Industrial-grade ${fullName} engineered to international standards. ${type.shortDesc}`,
    overview: {
      whatIs: grade
        ? `${fullName} combine the high-integrity mechanical design of ${type.name} with the verified metallurgy of ${grade.name} (${grade.code}). ${type.whatIs}`
        : type.whatIs,
      designAndFeatures: type.designAndFeatures,
      howItConnects: type.howItConnects,
      purpose: type.purpose,
      applications: grade && grade.applications ? grade.applications : type.applications
    },
    technicalSpecs: {
      material: mat.name,
      standardGrades: grade ? `${grade.name} (${grade.code})` : mat.primaryGrades,
      standards: grade ? `${type.applicableStandards}, ${grade.standard}` : `${type.applicableStandards}, ${mat.standard}`,
      unsDin: grade && grade.uns ? `${grade.uns} / ${grade.din || 'N/A'}` : 'Per Specification Standard',
      sizeRange: (grade && grade.specs && grade.specs.sizeRange) || type.standardSizes,
      pressureClass: type.standardPressures,
      threadTypes: 'UNC, UNF, Metric 6g/6H, 8-UN Heavy Bolting Series',
      coatingFinishes: 'Black Oxide, Zinc Plated, Hot-Dip Galvanized, Passivated, PTFE / Xylan 1070',
      testingInspection: '100% PMI verification, Wedge Tensile Test, Proof Load Test, Hardness verification, EN 10204 3.1 & 3.2 Mill Test Certificates provided'
    },
    seo: {
      title: `${fullName} | Certified Manufacturer & Supplier | KPTRON`,
      description: `Complete dimensions, mechanical properties, and MTC specifications for ${fullName}. Available in sizes ${type.standardSizes} with fast global dispatch.`
    }
  };
}
