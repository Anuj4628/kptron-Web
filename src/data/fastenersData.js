/**
 * Dedicated Fasteners Product Catalog Data & Verified Technical Specifications
 * Conforming strictly to ASTM A193, ASTM A194, ASTM A320, DIN 933, DIN 934, ISO 4014, and ASME B18.2.1.
 */

import img_ss_fasteners from '../assets/New Product img/fasteners/ss-fasteners.jpg';
import img_duplex_fasteners from '../assets/New Product img/fasteners/duplex-steel-fasteners.jpg';
import img_alloy_fasteners from '../assets/New Product img/fasteners/alloy-steel-fasteners.jpg';
import img_inconel_fasteners from '../assets/New Product img/fasteners/inconel-fasteners.jpg';
import img_monel_fasteners from '../assets/New Product img/fasteners/monel-fasteners.jpg';
import img_hastelloy_fasteners from '../assets/New Product img/fasteners/hastelloy-fasteners.jpg';
import img_nickel_fasteners from '../assets/New Product img/fasteners/nickel-fasteners.jpg';
import img_cu_ni_fasteners from '../assets/New Product img/fasteners/copper-nickel-fasteners.jpg';
import img_titanium_fasteners from '../assets/New Product img/fasteners/titanium-fasteners.jpg';
import img_refractory_anchors from '../assets/Product Section/Manufacturer division/Fasteners/high alloy.webp';

export const FASTENERS_CATEGORIES = [
  {
    id: 'stainless-steel-fasteners',
    slug: 'stainless-steel-fasteners',
    name: 'Stainless Steel Fasteners',
    title: 'Stainless Steel Fasteners',
    image: img_ss_fasteners,
    standards: 'ASTM A193 / A194 B8, B8M, B8T, B8C, Class 1 & 2, DIN 933, DIN 934, ISO 3506 A2-70, A4-80',
    sizeRange: 'M3 to M100 | 1/4" to 4" Diameter (Custom Cut-to-Length Studs)',
    threadTypes: 'Metric Coarse / Fine, UNC, UNF, BSW, 8-UN Thread Series',
    availableForms: [
      'Continuous Threaded Stud Bolts with Heavy Hex Nuts',
      'Hex Head Bolts & Set Screws',
      'Socket Head Cap Screws & Allen Bolts',
      'Heavy Hex Nuts & Jam Nuts',
      'Flat Washers & Spring Lock Washers',
      'U-Bolts & Eye Bolts with Backing Plates'
    ],
    shortDesc: 'Precision engineered austenitic stainless steel threaded stud bolts, hex fasteners, heavy nuts, and custom washers offering superior corrosion resistance and high mechanical integrity.',
    grades: [
      {
        id: 'ss-fasteners-general',
        slug: 'ss-fasteners',
        name: 'SS Fasteners',
        code: 'ASTM A193 / A194 B8 (304), B8M (316), B8T (321)',
        standard: 'ASTM A193, ASTM A194, ISO 3506, ASME B18.2.1',
        uns: 'UNS S30400 / S31600 / S32100',
        din: 'DIN 931 / 933 / 934 / 975',
        shortDesc: 'Prime certified stainless steel stud bolts, hex screws, and heavy hex nuts for industrial fastening.',
        fullDesc: 'Comprehensive spectrum of precision CNC-threaded stainless steel fasteners conforming to ASTM A193 / A194 Class 1 (carbide solution treated) and Class 2 (strain hardened). Engineered for leak-proof flange joint clamping and high-stress structural connections.',
        specs: { diameter: 'M6 to M72 (1/4" to 3")', lengths: '10 mm to 6000 mm (Cut-to-Length)', threadSeries: 'UNC, UNF, Metric 6g/6H' },
        applications: ['Flange bolting for oil & gas manifolds', 'Chemical process equipment assemblies', 'Food and beverage machinery framework', 'Marine and offshore structural connections']
      }
    ]
  },
  {
    id: 'duplex-steel-fasteners',
    slug: 'duplex-steel-fasteners',
    name: 'Duplex Steel Fasteners',
    title: 'Duplex Steel Fasteners',
    image: img_duplex_fasteners,
    standards: 'ASTM A1082 / ASTM A479 UNS S31803, S32205 (2205), S32750 (2507), S32760',
    sizeRange: 'M6 to M80 | 1/4" to 3" Diameter',
    threadTypes: 'UNC, UNF, Metric 6g/6H, 8-UN Heavy Bolting Series',
    availableForms: [
      'Full Thread Stud Bolts with 2 Heavy Nuts',
      'Precision Forged Hex Head Bolts',
      'Socket Head Countersunk & Cap Screws',
      'Heavy Hex Nuts & Hardened Washers',
      'Engineered Subsea Tie-Rods'
    ],
    shortDesc: 'High-strength dual-phase austenitic-ferritic stainless steel fasteners combining exceptional tensile yield strength (PREN ≥ 35–42) with unmatched resistance to chloride stress corrosion cracking.',
    grades: [
      {
        id: 'duplex-steel-fasteners-general',
        slug: 'duplex-steel-fasteners',
        name: 'Duplex Steel Fasteners',
        code: 'UNS S31803 / S32205 (Duplex 2205) & UNS S32750 (Super Duplex 2507)',
        standard: 'ASTM A1082, ASTM A479, NACE MR0175',
        uns: 'UNS S32205 / UNS S32750 / UNS S32760',
        din: '1.4462 / 1.4410 / 1.4501',
        shortDesc: 'Twice the yield strength of standard austenitic grades with outstanding chloride pitting resistance.',
        fullDesc: 'High-performance 2205 Duplex and 2507 Super Duplex fasteners engineered for demanding subsea, desalination, and offshore applications. Exhibits twice the mechanical yield strength of 316L with supreme resistance to crevice attack in aggressive brine media.',
        specs: { diameter: 'M6 to M64 (1/4" to 2.5")', tensileStrength: 'Min 750 to 950 MPa', yieldStrength: 'Min 550 to 700 MPa' },
        applications: ['Subsea Christmas trees and manifold bolting', 'Desalination high-pressure reverse osmosis pumps', 'Marine splash-zone clamp fixtures', 'Offshore oil production riser fasteners']
      }
    ]
  },
  {
    id: 'alloy-steel-fasteners',
    slug: 'alloy-steel-fasteners',
    name: 'Alloy Steel Fasteners',
    title: 'Alloy Steel Fasteners',
    image: img_alloy_fasteners,
    standards: 'ASTM A193 / ASME SA193 B7, B16, ASTM A194 2H, Grade 7, EN 14399 Grade 8.8, 10.9, 12.9',
    sizeRange: '1/2" to 4" Diameter | M12 to M100',
    threadTypes: 'UNC, UNF, 8-UN Series, Metric Heavy Coarse',
    availableForms: [
      'Heavy Hex Stud Bolts for Pressure Vessels',
      'Grade 2H High-Strength Heavy Nuts',
      'Class 8.8 / 10.9 / 12.9 Structural Hex Bolts',
      'Xylan / PTFE Fluoropolymer Coated Studs',
      'Hot-Dip Galvanized & Zinc-Nickel Coated Fasteners'
    ],
    shortDesc: 'Quenched and tempered high-tensile alloy steel stud bolts, structural bolts, and heavy hex nuts engineered for elevated pressure vessel containment, refinery piping, and severe torque loads.',
    grades: [
      {
        id: 'alloy-steel-fasteners-general',
        slug: 'alloy-steel-fasteners',
        name: 'Alloy Steel Fasteners',
        code: 'ASTM A193 B7 / B16 & High Tensile 8.8 / 10.9 Series',
        standard: 'ASTM A193, ASTM A194, ASME B18.2.1, ISO 898-1',
        uns: 'UNS G41400 / G41450',
        din: 'DIN 976, DIN 934, DIN 6914',
        shortDesc: 'High-tensile quenched & tempered alloy steel bolting for heavy industrial applications.',
        fullDesc: 'Comprehensive spectrum of high-strength Chrome-Moly alloy fasteners heat treated to exacting tensile limits. Available with plain black, cadmium, zinc, or anti-corrosion Xylan/PTFE fluoropolymer coatings for harsh marine and chemical atmospheres.',
        specs: { diameter: '1/2" to 4" (M12 to M100)', tensileStrength: '860 to 1220 MPa', temperatureRange: '-29°C to +595°C' },
        applications: ['Refinery pressure vessel flange clamping', 'High-pressure pipeline valves', 'Power station steam turbine bolting', 'Heavy structural steel erection']
      },
      {
        id: 'astm-a193-grade-b7-fasteners',
        slug: 'astm-a193-grade-b7-fasteners',
        name: 'ASTM A193 Grade B7 Fasteners',
        code: 'ASTM A193 Grade B7 Chromium-Molybdenum Steel (AISI 4140)',
        standard: 'ASTM A193 / ASME SA193 B7, ASTM A194 2H',
        uns: 'UNS G41400',
        din: '1.7225 (42CrMo4)',
        shortDesc: 'The global standard for high-temperature and high-pressure service with Grade 2H heavy nuts.',
        fullDesc: 'Quenched and tempered AISI 4140 chromium-molybdenum alloy steel stud bolts. Delivers minimum tensile strength of 125,000 PSI (860 MPa) and is universally paired with ASTM A194 Grade 2H heavy hex nuts for standard ASME B16.5 flange connections.',
        specs: { diameter: '1/2" to 4" (M12 to M100)', hardness: 'HRC 35 max', surfaceFinishes: 'Black Oxide, PTFE/Xylan Blue, Cadmium, HDG' },
        applications: ['Petroleum refinery flange joints', 'Pipeline gate and ball valve body bolting', 'Thermal power generation steam lines', 'Boiler feed water manifold connections']
      },
      {
        id: 'astm-a193-grade-b16-fasteners',
        slug: 'astm-a193-grade-b16-fasteners',
        name: 'ASTM A193 Grade B16 Fasteners',
        code: 'ASTM A193 B16 Chromium-Molybdenum-Vanadium (Cr-Mo-V)',
        standard: 'ASTM A193 / ASME SA193 B16, ASTM A194 Grade 7 / 4',
        uns: 'UNS K41745',
        din: '1.7709 (21CrMoV5-7)',
        shortDesc: 'Vanadium-fortified alloy steel fasteners for extreme temperature creep resistance up to 595°C (1100°F).',
        fullDesc: 'Chromium-molybdenum-vanadium heat-treated alloy steel bolting specially engineered for sustained high temperatures up to 595°C. Vanadium carbide precipitates prevent creep strain relaxation under severe thermal cycles in supercritical power plants.',
        specs: { diameter: '1/2" to 4"', tensileStrength: 'Min 125,000 PSI (860 MPa)', yieldStrength: 'Min 105,000 PSI (725 MPa)' },
        applications: ['Supercritical boiler main steam connections', 'Steam turbine casing split-line bolting', 'Nuclear steam generator piping flanges', 'Catalytic reforming high-temperature reactors']
      },
      {
        id: 'high-tensile-fasteners-b8-8-fasteners',
        slug: 'high-tensile-fasteners-b8-8-fasteners',
        name: 'High Tensile Fasteners B8.8 Fasteners',
        code: 'ISO 898-1 Property Class 8.8 / 10.9 / 12.9 High Tensile',
        standard: 'ISO 898-1, DIN 931, DIN 933, EN 14399',
        uns: 'Medium Carbon Boron Alloy',
        din: 'DIN EN ISO 4014 / 4017 Class 8.8',
        shortDesc: 'Precision high-tensile structural metric bolts delivering 800 MPa nominal tensile strength.',
        fullDesc: 'Property Class 8.8 quenched and tempered high-tensile bolts delivering 800 MPa tensile strength and 640 MPa yield strength. Widely selected for heavy industrial equipment, automotive machinery, and steel structural joints.',
        specs: { diameter: 'M6 to M64', grade: 'Class 8.8 (Class 10.9 & 12.9 available)', finish: 'Electro-galvanized, Yellow Zinc, Black' },
        applications: ['Heavy machinery chassis and frame joints', 'Structural civil and bridge engineering', 'Mining equipment and conveyor bolting', 'Industrial crane and gantry structural assemblies']
      }
    ]
  },
  {
    id: 'inconel-fasteners',
    slug: 'inconel-fasteners',
    name: 'Inconel Fasteners',
    title: 'Inconel Fasteners',
    image: img_inconel_fasteners,
    standards: 'ASTM B166, ASTM B637, ASTM F468 / F467, AMS 5662 / 5663 / 5666',
    sizeRange: 'M4 to M64 | 1/4" to 2.5" Diameter',
    threadTypes: 'UNC, UNF, Metric 6g, UNJ Aerospace Thread Profiles',
    availableForms: [
      'High-Temperature Stud Bolts with Heavy Nuts',
      'Precision CNC 12-Point Aerospace Aircraft Bolts',
      'Hex Head Cap Screws & Socket Head Bolts',
      'Custom Machined High-Pressure Fasteners'
    ],
    shortDesc: 'Nickel-Chromium superalloy fasteners engineered for extreme elevated temperature oxidation resistance, complete chloride stress corrosion immunity, and cryogenic ductility.',
    grades: [
      {
        id: 'inconel-fasteners-general',
        slug: 'inconel-fasteners',
        name: 'Inconel Fasteners',
        code: 'UNS N06600 (Inconel 600) / N07718 (Inconel 718)',
        standard: 'ASTM B166, ASTM B637, AMS 5662',
        uns: 'UNS N06600 / UNS N07718',
        din: '2.4816 / 2.4668',
        shortDesc: 'Precipitation hardened superalloy fasteners resisting temperatures from -250°C to +700°C.',
        fullDesc: 'Precipitation-hardenable Inconel 718 and solid-solution Inconel 600 fasteners engineered for extreme creep-rupture strength and high fatigue resistance in gas turbine combustors, cryogenic tanks, and nuclear fuel handling assemblies.',
        specs: { diameter: 'M6 to M52', tensileStrength: 'Min 1240 to 1400 MPa (Inconel 718)', serviceTemp: '-250°C to +700°C' },
        applications: ['Rocket and jet engine turbine casings', 'Nuclear reactor core structural fasteners', 'Cryogenic fuel tank mountings', 'Deepwater sour gas wellhead tie-ins']
      },
      {
        id: 'inconel-625-fasteners',
        slug: 'inconel-625-fasteners',
        name: 'Inconel 625 Fasteners',
        code: 'ASTM B446 / ASTM F468 UNS N06625 (Grade 1 / Grade 2)',
        standard: 'ASTM B446, ASTM F468, AMS 5666, NACE MR0175',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        shortDesc: 'Molybdenum-niobium stiffened superalloy fasteners offering complete immunity to marine pitting.',
        fullDesc: 'Solid-solution strengthened Inconel 625 fasteners containing 9% Molybdenum and 3.6% Niobium. Delivers superior pitting resistance equivalent (PREN > 50), exceptional resistance to crevice corrosion in stagnant seawater, and high fatigue endurance under cyclic oceanic wave forces.',
        specs: { diameter: 'M6 to M64 (1/4" to 2.5")', yieldStrength: 'Min 415 to 550 MPa', corrosionResistance: 'PREN > 50 (Immune to Pitting)' },
        applications: ['Subsea pipeline clamp bolting', 'Marine naval propeller and thruster fasteners', 'Chemical scrubber ducting connections', 'Sour hydrocarbon production loops']
      }
    ]
  },
  {
    id: 'monel-fasteners',
    slug: 'monel-fasteners',
    name: 'Monel Fasteners',
    title: 'Monel Fasteners',
    image: img_monel_fasteners,
    standards: 'ASTM F468 / F467, ASTM B164, ASTM B865, QQ-N-281 / 286',
    sizeRange: 'M4 to M52 | 1/4" to 2" Diameter',
    threadTypes: 'UNC, UNF, Metric 6g/6H',
    availableForms: [
      'Monel 400 & K500 Stud Bolts with Heavy Nuts',
      'Hex Head Machine Bolts & Cap Screws',
      'Socket Head Allen Bolts & Set Screws',
      'Precision Machined Marine Fasteners'
    ],
    shortDesc: 'Nickel-Copper solid solution alloy fasteners providing exceptional resistance to rapid seawater erosion, cavitation, hydrofluoric acid, and alkaline salt environments.',
    grades: [
      {
        id: 'monel-fasteners-general',
        slug: 'monel-fasteners',
        name: 'Monel Fasteners',
        code: 'ASTM F468 UNS N04400 (Monel 400) / UNS N05500 (Monel K500)',
        standard: 'ASTM F468, ASTM F467, ASTM B164, ASTM B865',
        uns: 'UNS N04400 / UNS N05500',
        din: '2.4360 / 2.4375',
        shortDesc: 'Marine and hydrofluoric acid resistant Nickel-Copper alloy fasteners.',
        fullDesc: 'Monel 400 and precipitation-hardened Monel K500 fasteners engineered for zero biofouling and superior cavitation resistance. Monel K500 combines the corrosion resistance of Monel 400 with enhanced tensile strength (up to 1100 MPa) via aluminum and titanium additions.',
        specs: { diameter: 'M4 to M48', tensileStrength: 'Monel 400: 550 MPa | Monel K500: 1100 MPa', permeability: 'Completely Non-Magnetic (K500)' },
        applications: ['HF alkylation units in petrochemical refineries', 'Marine naval shafts and underwater fasteners', 'Offshore platform splash-zone fixtures', 'Commercial desalination plant piping joints']
      }
    ]
  },
  {
    id: 'hastelloy-fasteners',
    slug: 'hastelloy-fasteners',
    name: 'Hastelloy Fasteners',
    title: 'Hastelloy Fasteners',
    image: img_hastelloy_fasteners,
    standards: 'ASTM B574, ASTM F468 / F467, DIN EN ISO 3506 (UNS N10276, N06022)',
    sizeRange: 'M4 to M48 | 1/4" to 2" Diameter',
    threadTypes: 'UNC, UNF, Metric Coarse / Fine',
    availableForms: [
      'Full Thread Stud Bolts with Heavy Hex Nuts',
      'Hexagon Head Machine Screws & Bolts',
      'Socket Head Cap Screws',
      'Flat & Spring Washers'
    ],
    shortDesc: 'Nickel-Chromium-Molybdenum superalloy fasteners delivering unsurpassed resistance to hot contaminated mineral acids, wet chlorine, ferric chlorides, and severe chemical attack.',
    grades: [
      {
        id: 'hastelloy-fasteners-general',
        slug: 'hastelloy-fasteners',
        name: 'Hastelloy Fasteners',
        code: 'ASTM F468 UNS N10276 (Hastelloy C276) / UNS N06022 (Hastelloy C22)',
        standard: 'ASTM B574, ASTM F468, ASTM F467, ASME B18.2.1',
        uns: 'UNS N10276 / UNS N06022',
        din: '2.4819 / 2.4602',
        shortDesc: 'The ultimate chemical corrosion-resistant fasteners for aggressive acidic environments.',
        fullDesc: 'Hastelloy C276 and C22 fasteners formulated with 16% Molybdenum and 4% Tungsten. Engineered to resist localized pitting, crevice attack, and stress corrosion cracking in severe sulfuric, hydrochloric, and wet chlorine gas atmospheres.',
        specs: { diameter: 'M5 to M42', tensileStrength: 'Min 690 to 790 MPa', yieldStrength: 'Min 310 to 380 MPa' },
        applications: ['Flue-gas desulfurization (FGD) scrubber systems', 'Waste incineration chemical recovery piping', 'Pharmaceutical active ingredient processing', 'Pesticide and herbicide acid delivery loops']
      }
    ]
  },
  {
    id: 'nickel-alloy-fasteners',
    slug: 'nickel-alloy-fasteners',
    name: 'Nickel Alloy Fasteners',
    title: 'Nickel Alloy Fasteners',
    image: img_nickel_fasteners,
    standards: 'ASTM B160, ASTM F468 / F467 UNS N02200, UNS N02201',
    sizeRange: 'M4 to M42 | 1/4" to 1.75" Diameter',
    threadTypes: 'UNC, UNF, Metric 6g/6H',
    availableForms: [
      'Threaded Stud Bolts with Matching Nuts',
      'Hex Head Cap Screws',
      'Socket Head Allen Bolts',
      'Machined Washers & Spacers'
    ],
    shortDesc: 'Commercially pure nickel fasteners providing exceptional resistance to caustic soda, anhydrous ammonia, and reducing chemical environments.',
    grades: [
      {
        id: 'nickel-alloy-fasteners-general',
        slug: 'nickel-alloy-fasteners',
        name: 'Nickel Alloy Fasteners',
        code: 'ASTM F468 UNS N02200 (Nickel 200) / UNS N02201 (Nickel 201)',
        standard: 'ASTM B160, ASTM F468, ASTM F467',
        uns: 'UNS N02200 / UNS N02201',
        din: '2.4066 / 2.4068',
        shortDesc: 'Wrought commercially pure nickel fasteners for severe caustic and chemical service.',
        fullDesc: 'Commercially pure nickel fasteners delivering outstanding resistance to hot concentrated sodium hydroxide (caustic soda) solutions and non-oxidizing halide acids. Nickel 201 low-carbon execution prevents graphitization during prolonged thermal exposure.',
        specs: { diameter: 'M6 to M36', tensileStrength: 'Min 450 to 550 MPa', corrosionResistance: 'Immune to Caustic Embrittlement' },
        applications: ['Caustic soda evaporator flange bolting', 'Chlor-alkali cell assembly fasteners', 'Synthetic fiber chemical reactor joints', 'Fluorine handling equipment fasteners']
      }
    ]
  },
  {
    id: 'copper-nickel-fasteners',
    slug: 'copper-nickel-fasteners',
    name: 'Copper Nickel Fasteners',
    title: 'Copper Nickel Fasteners',
    image: img_cu_ni_fasteners,
    standards: 'ASTM B151, ASTM F468 / F467 UNS C70600 (90/10), UNS C71500 (70/30), DIN 86037',
    sizeRange: 'M4 to M36 | 1/4" to 1.5" Diameter',
    threadTypes: 'Metric Coarse, UNC, UNF',
    availableForms: [
      'Hex Head Machine Bolts & Screws',
      'Stud Bolts with Matching Cu-Ni Heavy Nuts',
      'Marine Flat Washers & Belleville Washers',
      'Custom Marine Screws & Studs'
    ],
    shortDesc: 'Cupro-Nickel fasteners delivering superior resistance to marine biofouling, macro-algae attachment, impingement attack, and stress corrosion in high-salinity seawater systems.',
    grades: [
      {
        id: 'copper-nickel-fasteners-general',
        slug: 'copper-nickel-fasteners',
        name: 'Copper Nickel Fasteners',
        code: 'UNS C70600 (Cu-Ni 90/10) & UNS C71500 (Cu-Ni 70/30)',
        standard: 'ASTM B151, ASTM F468, DIN 86037',
        uns: 'UNS C70600 / UNS C71500',
        din: '2.0872 / 2.0882',
        shortDesc: 'Marine-grade 90/10 and 70/30 cupro-nickel fasteners for seawater cooling and naval plumbing loops.',
        fullDesc: 'Engineered specifically for naval shipbuilding, offshore oil platforms, and desalination facilities. CuNi 90/10 and CuNi 70/30 fasteners form an adherent protective copper oxide passivation layer providing natural antifouling and erosion-corrosion resistance.',
        specs: { diameter: 'M4 to M36 (1/4" to 1.5")', tensileStrength: '350 to 500 MPa', properties: 'Natural Antifouling Marine Coating' },
        applications: ['Naval hull intake seawater valve bolting', 'Desalination plant piping flange fasteners', 'Offshore splash-zone marine clamp hardware', 'Commercial ship ballast piping fasteners']
      }
    ]
  },
  {
    id: 'titanium-fasteners',
    slug: 'titanium-fasteners',
    name: 'Titanium Fasteners',
    title: 'Titanium Fasteners',
    image: img_titanium_fasteners,
    standards: 'ASTM B348, ASTM F468 / F467 Grade 2 (CP), Grade 5 (Ti-6Al-4V), Grade 7 (Ti-Pd)',
    sizeRange: 'M3 to M36 | #6 to 1.5" Diameter',
    threadTypes: 'Metric Coarse / Fine, UNC, UNF, UNJF Aerospace',
    availableForms: [
      'Precision CNC Aerospace Stud Bolts',
      'Hexagon Head Cap Screws & Machine Bolts',
      'Torx & Socket Head Countersunk Screws',
      'Anodized Lightweight Racing Fasteners'
    ],
    shortDesc: 'Ultra-lightweight, high-strength titanium fasteners delivering 45% weight reduction compared to steel and absolute immunity to raw seawater, chlorine dioxide, and organic acid corrosion.',
    grades: [
      {
        id: 'titanium-fasteners-general',
        slug: 'titanium-fasteners',
        name: 'Titanium Fasteners',
        code: 'ASTM F468 Grade 2 (Unalloyed) & Grade 5 (Ti-6Al-4V Aircraft)',
        standard: 'ASTM B348, ASTM F468, ASTM F467, AMS 4928',
        uns: 'UNS R50400 / UNS R56400',
        din: '3.7035 / 3.7165',
        shortDesc: 'High strength-to-weight ratio aerospace and subsea fasteners with permanent corrosion immunity.',
        fullDesc: 'Grade 5 (Ti-6Al-4V) titanium fasteners deliver exceptional tensile strength exceeding 950 MPa while reducing weight by 45% compared to steel. Unalloyed Grade 2 delivers total immunity to chloride pitting in aerated seawater and bleaching media.',
        specs: { diameter: 'M3 to M36', tensileStrength: 'Grade 5: Min 950 MPa | Grade 2: Min 450 MPa', density: '4.51 g/cm³ (45% lighter than steel)' },
        applications: ['Aerospace airframe and propulsion mountings', 'High-performance motorsport and racing vehicles', 'Subsea offshore acoustic sensor arrays', 'Chemical chlorine bleaching manifold fasteners']
      }
    ]
  },
  {
    id: 'refractory-anchor',
    slug: 'refractory-anchor',
    name: 'Refractory Anchor',
    title: 'Refractory Anchor',
    image: img_refractory_anchors,
    standards: 'ASTM A240 / A276 Type 304, 310, 316, 321, 330, Inconel 601, Incoloy 800H',
    sizeRange: 'Diameter: 4 mm to 16 mm (1/8" to 5/8") | Lengths: 50 mm to 500 mm',
    fixingTypes: 'Stud Welded, Hand Welded, Bolted, Corrugated Tine Retention',
    availableForms: [
      'V-Type Refractory Anchors',
      'Y-Type Ceramic Fiber Retention Anchors',
      'Corrugated / Wavy Furnace Lining Anchors',
      'Twisted Tine Anchors with Plastic Expansion Caps',
      'Speed Clips, Washers, and Stud Weldable Bases'
    ],
    shortDesc: 'High-temperature heat-resistant alloy refractory anchors engineered to support and retain dense castable, gunite, and ceramic fiber monolithic linings in industrial furnaces, kilns, and boilers up to 1250°C.',
    grades: [
      {
        id: 'refractory-anchor-general',
        slug: 'refractory-anchor',
        name: 'Refractory Anchor',
        code: 'SS 304, SS 310S, Inconel 601, Incoloy 800 Refractory Anchors',
        standard: 'ASTM A240 / A276, DIN 17440, EN 10088',
        uns: 'UNS S31008 / N06601 / N08810',
        din: '1.4845 / 2.4851 / 1.4876',
        shortDesc: 'Heat-resistant alloy anchors for furnace linings, petrochemical heaters, and cement kilns.',
        fullDesc: 'Custom fabricated V-shape, Y-shape, and corrugated refractory anchors engineered to absorb mechanical vibration and thermal expansion differentials between metallic furnace shells and refractory concrete linings. Rated for sustained temperatures up to 1250°C.',
        specs: { wireDiameter: '4 mm to 16 mm', alloys: 'SS 304, SS 310, SS 316, Inconel 601, Incoloy 800H', maxServiceTemp: 'Up to 1250°C' },
        applications: ['Petrochemical fired heaters and cracker furnace linings', 'Cement kiln cyclones and riser ducts', 'Steel reheating furnaces and soaking pits', 'Waste incineration thermal oxidizer castables']
      }
    ]
  }
];

export function getFastenersCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return FASTENERS_CATEGORIES.find(cat => cat.slug === clean || cat.id === clean) || null;
}

export function getFastenersGradeBySlug(catSlug, gradeSlug) {
  const cat = getFastenersCategoryBySlug(catSlug);
  if (!cat) return null;
  if (!gradeSlug) return cat.grades[0] || null;
  const clean = gradeSlug.toLowerCase().trim();
  return cat.grades.find(g => g.slug === clean || g.id === clean) || cat.grades[0] || null;
}
