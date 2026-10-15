/**
 * Dedicated Buttweld Fittings Product Catalog Data & Technical Specifications
 * Conforming strictly to ASME B16.9, ASME B16.11, MSS SP-75, DIN 2605, EN 10253, and ASTM standards.
 */

import img_ss_fittings from '../assets/New Product img/pipe fittings/ss-pipe-fittings.jpg';
import img_cs_fittings from '../assets/New Product img/pipe fittings/cs-pipe-fittings.jpg';
import img_alloy_fittings from '../assets/New Product img/pipe fittings/alloy-steel-pipe-fittings.jpg';
import img_inconel_fittings from '../assets/New Product img/pipe fittings/inconel-pipe-fittings.jpg';
import img_monel_fittings from '../assets/New Product img/pipe fittings/monel-pipe-fittings.jpg';
import img_hastelloy_fittings from '../assets/New Product img/pipe fittings/hastelloy-pipe-fittings.jpg';
import img_nickel_fittings from '../assets/New Product img/pipe fittings/nickel-pipe-fittings.jpg';
import img_cu_ni_fittings from '../assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg';
import img_titanium_fittings from '../assets/New Product img/pipe fittings/titanium-pipe-fittings.jpg';

export const PIPE_FITTINGS_CATEGORIES = [
  {
    id: 'stainless-steel-pipe-fittings',
    slug: 'stainless-steel-pipe-fittings',
    materialSlug: 'stainless-steel',
    materialName: 'Stainless Steel',
    aliases: ["stainless-steel","stainless","ss-fittings","ss-pipe-fittings"],
    name: 'Stainless Steel Buttweld Fittings',
    title: 'Stainless Steel Buttweld Fittings',
    image: img_ss_fittings,
    standards: 'ASTM A403 / ASME SA403, ASTM A182, ASME B16.9, ASME B16.11, MSS SP-43',
    sizeRange: '1/2" NB to 48" NB (Seamless & Welded) | Forged: 1/8" to 4" (2000# to 9000#)',
    schedules: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: [
      '45° & 90° Long / Short Radius Elbows',
      'Equal & Reducing Tees',
      'Concentric & Eccentric Reducers',
      'End Caps & Dished Heads',
      'Short & Long Stub Ends',
      'Crosses & Lateral Branches',
      'Socket Weld & Threaded (NPT/BSPT) Forged Fittings'
    ],
    shortDesc: 'Premium factory-made butt-weld and high-pressure forged stainless steel buttweld fittings engineered for sterile pharmaceutical, chemical processing, cryogenic, and offshore flow-loop environments.',
    grades: [
      {
        id: 'ss-pipe-fittings-general',
        slug: 'ss-pipe-fittings',
        name: 'SS Buttweld Fittings',
        code: 'ASTM A403 / ASME SA403 WP-S / WP-W / WP-WX',
        standard: 'ASTM A403, ASME B16.9, ASME B16.11',
        uns: 'UNS S30000 Series',
        din: 'DIN 2605 / DIN 2615 / DIN 2616',
        shortDesc: 'Complete line of seamless and welded austenitic stainless steel butt-weld and forged fittings.',
        fullDesc: 'Comprehensive spectrum of factory-formed stainless steel butt-weld elbows, tees, reducers, and caps manufactured to ASME B16.9. Sourced from mill-certified seamless and welded pipes with 100% radiographic examination and full solution annealing.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 5S to SCH XXS', connection: 'Butt-Weld (BW) / Socket Weld (SW) / Threaded (NPT)' },
        applications: ['Process piping manifolds', 'Chemical transfer pipelines', 'Food and beverage sanitary flow loops', 'Water treatment and desalination']
      },
      {
        id: 'ss-304-304l-pipe-fittings',
        slug: 'ss-304-304l-pipe-fittings',
        name: 'SS 304 / 304L Buttweld Fittings',
        code: 'ASTM A403 WP304 / WP304L Dual Certified',
        standard: 'ASTM A403 / ASME SA403, ASME B16.9',
        uns: 'UNS S30400 / UNS S30403',
        din: '1.4301 / 1.4307',
        shortDesc: 'Dual-certified 18/8 low-carbon stainless steel butt-weld elbows, tees, reducers, and caps.',
        fullDesc: 'Low carbon 304/304L stainless steel fittings providing excellent resistance against intergranular carbide precipitation during welding and field installation. Fully pickled and passivated for pristine corrosion resistance.',
        specs: { size: '1/2" to 48" NB', schedule: 'SCH 10S, SCH 40S, SCH 80S, SCH 160', connection: 'Beveled Ends (ASME B16.25), Butt-Weld' },
        applications: ['Breweries and dairy plants', 'Municipal water treatment loops', 'Cryogenic gas storage pipelines', 'HVAC and condensate return lines']
      },
      {
        id: 'ss-316-316l-316h-pipe-fittings',
        slug: 'ss-316-316l-316h-pipe-fittings',
        name: 'SS 316 / 316L / 316H Buttweld Fittings',
        code: 'ASTM A403 WP316 / WP316L / WP316H',
        standard: 'ASTM A403, ASME SA403, ASME B16.9',
        uns: 'UNS S31600 / UNS S31603 / UNS S31609',
        din: '1.4401 / 1.4404 / 1.4435',
        shortDesc: 'Molybdenum-bearing marine-grade stainless fittings for harsh chloride and acidic flow conditions.',
        fullDesc: 'Superior molybdenum-enhanced austenitic stainless steel buttweld fittings designed to resist pitting and crevice corrosion in chloride, marine, and acidic industrial media. Available in dual-certified 316/316L and high-carbon 316H for elevated temperatures.',
        specs: { size: '1/2" to 48" NB', schedule: 'SCH 5S to SCH XXS (Custom wall thicknesses)', connection: 'Butt-Weld (BW), Socket Weld (SW)' },
        applications: ['Offshore oil & gas topsides', 'Marine seawater transfer lines', 'Pulp and paper bleaching circuits', 'Specialty chemical reaction manifolds']
      },
      {
        id: 'ss-316ti-pipe-fittings',
        slug: 'ss-316ti-pipe-fittings',
        name: 'SS 316Ti Buttweld Fittings',
        code: 'ASTM A403 WP316Ti Titanium Stabilized',
        standard: 'ASTM A403, EN 10253-4, DIN 2605',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        shortDesc: 'Titanium-stabilized grade preventing chromium carbide sensitization under prolonged heat exposure.',
        fullDesc: 'Titanium-stabilized grade 316Ti buttweld fittings engineered for high-temperature service up to 800°C without risk of intergranular corrosion. Titanium additions tie up carbon to maintain free chromium levels for corrosion passivity.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld (BW) according to ASME B16.9 / DIN EN 10253' },
        applications: ['Exhaust gas recirculation lines', 'Heat exchanger piping assemblies', 'Nuclear power engineering', 'High-temperature chemical processing']
      },
      {
        id: 'ss-310-310s-pipe-fittings',
        slug: 'ss-310-310s-pipe-fittings',
        name: 'SS 310 / 310S Buttweld Fittings',
        code: 'ASTM A403 WP310 / WP310S 25Cr-20Ni High Heat',
        standard: 'ASTM A403, ASME SA403, ASME B16.9',
        uns: 'UNS S31000 / UNS S31008',
        din: '1.4841 / 1.4845',
        shortDesc: 'High-chromium, high-nickel refractory fittings resisting oxidation up to 1150°C.',
        fullDesc: 'High-alloy 25Cr-20Ni austenitic fittings delivering outstanding resistance to cyclic thermal oxidation, sulfidation, and carburization up to 1150°C in continuous industrial service.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 160 / SCH XXS', connection: 'Butt-Weld, Beveled Ends' },
        applications: ['Kiln and furnace discharge piping', 'Refinery radiant tube headers', 'Thermal oxidizer ducting', 'Fluidized bed combustion piping']
      },
      {
        id: 'ss-317-317l-pipe-fittings',
        slug: 'ss-317-317l-pipe-fittings',
        name: 'SS 317 / 317L Buttweld Fittings',
        code: 'ASTM A403 WP317 / WP317L High Moly 3-4% Mo',
        standard: 'ASTM A403, ASME B16.9',
        uns: 'UNS S31700 / UNS S31703',
        din: '1.4438 (X2CrNiMo18-15-4)',
        shortDesc: 'High-molybdenum (3–4% Mo) stainless fittings resisting severe pitting in aggressive sulfuric acids.',
        fullDesc: 'Molybdenum-enriched 317/317L buttweld fittings exhibiting greater tensile and creep rupture strength and vastly superior resistance to pitting and localized attack compared to 316L in sulfur dioxide and chloride atmospheres.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Flue-gas desulfurization (FGD) scrubbers', 'Textile dyeing dye-liquor lines', 'Paper pulp digestion systems', 'Explosives manufacturing piping']
      },
      {
        id: 'ss-321-321h-pipe-fittings',
        slug: 'ss-321-321h-pipe-fittings',
        name: 'SS 321 / 321H Buttweld Fittings',
        code: 'ASTM A403 WP321 / WP321H Titanium Stabilized',
        standard: 'ASTM A403, ASME SA403, ASME B16.9',
        uns: 'UNS S32100 / UNS S32109',
        din: '1.4541 / 1.4878',
        shortDesc: 'Titanium-stabilized heat-resistant fittings with elevated creep rupture resistance above 538°C.',
        fullDesc: 'Stabilized austenitic stainless steel fittings fortified with titanium additions. Specifically selected for cyclic and sustained high-temperature service from 427°C to 816°C where post-weld annealing is impractical.',
        specs: { size: '1/2" to 32" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld' },
        applications: ['Refinery catalytic cracking units', 'Aircraft engine exhaust loops', 'High-pressure steam bypass systems', 'Thermal processing piping']
      },
      {
        id: 'ss-347-347h-pipe-fittings',
        slug: 'ss-347-347h-pipe-fittings',
        name: 'SS 347 / 347H Buttweld Fittings',
        code: 'ASTM A403 WP347 / WP347H Niobium Stabilized',
        standard: 'ASTM A403, ASME SA403, ASME B16.9',
        uns: 'UNS S34700 / UNS S34709',
        din: '1.4550 (X6CrNiNb18-10)',
        shortDesc: 'Columbium/niobium-stabilized fittings eliminating chromium carbide sensitization in extreme boiler service.',
        fullDesc: 'Columbium (Niobium) stabilized stainless steel buttweld fittings demonstrating exceptional intergranular corrosion immunity, higher stress-rupture properties, and superior creep resistance in heavy boiler and reactor piping.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', connection: 'Butt-Weld, Beveled' },
        applications: ['Superheater and reheater piping headers', 'Hydrocracker heavy effluent runs', 'Nuclear steam generator loops', 'Rocket engine manifold assemblies']
      },
      {
        id: 'ss-forged-fittings',
        slug: 'ss-forged-fittings',
        name: 'SS Forged Fittings',
        code: 'ASTM A182 F304L / F316L / F321 / F347 Class 3000# / 6000# / 9000#',
        standard: 'ASTM A182 / ASME SA182, ASME B16.11, BS 3799',
        uns: 'UNS S30403 / S31603 / S32100',
        din: 'DIN EN 10222-5',
        shortDesc: 'Heavy-duty high-pressure 2000#, 3000#, 6000#, and 9000# socket weld and threaded forged fittings.',
        fullDesc: 'Precision closed-die forged stainless steel socket weld and threaded fittings, including 90° elbows, tees, unions, half/full couplings, hex nipples, swage nipples, and weldolets/sockolets rated for severe hydraulic and petrochemical pressures up to 9000 PSI.',
        specs: { size: '1/8" to 4" NB', pressureClass: '2000#, 3000#, 6000#, 9000#', connection: 'Socket Weld (SW) & Threaded (NPT / BSPT / BSP)' },
        applications: ['High-pressure hydraulic instrumentation', 'Chemical injection quills & sample stations', 'Offshore wellhead control panels', 'Nuclear coolant sampling lines']
      }
    ]
  },
  {
    id: 'carbon-steel-pipe-fittings',
    slug: 'carbon-steel-pipe-fittings',
    materialSlug: 'carbon-steel',
    materialName: 'Carbon Steel',
    aliases: ["carbon-steel","carbon","cs-fittings","cs-pipe-fittings"],
    name: 'Carbon Steel Buttweld Fittings',
    title: 'Carbon Steel Buttweld Fittings',
    image: img_cs_fittings,
    standards: 'ASTM A234 / ASME SA234 WPB, ASTM A420 WPL6, ASTM A105, ASME B16.9, ASME B16.11, MSS SP-75',
    sizeRange: '1/2" NB to 60" NB (Seamless & LSAW/ERW Welded) | Forged: 1/8" to 4" NB (Class 3000#–9000#)',
    schedules: 'SCH 20, SCH 30, SCH STD, SCH 40, SCH 60, SCH 80, SCH 100, SCH 120, SCH 160, SCH XXS',
    availableForms: [
      'Seamless & Welded 45° / 90° / 180° Elbows',
      'Straight & Reducing Branch Tees',
      'Concentric & Eccentric Reducers',
      'Ellipsoidal End Caps',
      'High-Yield MSS SP-75 (WPHY 42, 52, 60, 65, 70)',
      'Socket Weld & Threaded A105 Forged Fittings'
    ],
    shortDesc: 'High-strength, tough carbon steel butt-weld and forged fittings engineered for general refinery service, cross-country oil & gas pipelines, power plant steam loops, and low-temperature impact applications.',
    grades: [
      {
        id: 'carbon-steel-pipe-fittings-general',
        slug: 'carbon-steel-pipe-fittings',
        name: 'Carbon Steel Buttweld Fittings',
        code: 'ASTM A234 / ASME SA234 / ASTM A105 Commercial & Process',
        standard: 'ASTM A234, ASME B16.9, MSS SP-75, EN 10253-2',
        uns: 'UNS K03006',
        din: 'DIN 2605 / St 35.8 / P265GH',
        shortDesc: 'Prime certified carbon steel seamless and welded butt-weld fittings for industrial fluids.',
        fullDesc: 'Comprehensive offering of standard carbon steel fittings conforming to ASME B16.9 and MSS SP-75. Sourced from fine-grained, fully-killed steel providing high mechanical strength, good weldability, and pressure containment reliability.',
        specs: { size: '1/2" to 48" NB', schedule: 'SCH STD, SCH 40, SCH 80, SCH 160, SCH XXS', connection: 'Butt-Weld (BW), Beveled Ends' },
        applications: ['Petroleum refining transport lines', 'Power plant steam distribution', 'Structural building services', 'General fluid transport infrastructure']
      },
      {
        id: 'astm-a234-gr-wpb',
        slug: 'astm-a234-gr-wpb',
        name: 'ASTM A234 Gr WPB',
        code: 'ASTM A234 WPB / ASME SA234 WPB Seamless & Welded',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K03006',
        din: '1.0425 (P265GH)',
        shortDesc: 'Industry-standard moderate & high temperature carbon steel butt-weld elbows, tees, and reducers.',
        fullDesc: 'The global benchmark for moderate and elevated temperature pressure piping. Normalized ASTM A234 Grade WPB fittings feature controlled carbon equivalents (CE) for excellent field weldability, superior tensile performance, and toughness according to ASME B31.1 & B31.3.',
        specs: { size: '1/2" to 60" NB', schedule: 'SCH 10 to SCH XXS (Up to 100mm wall thickness)', connection: 'Butt-Weld Beveled Ends (ASME B16.25)' },
        applications: ['Boiler feed water lines', 'Crude oil refinery piping', 'Thermal power plant steam loops', 'Natural gas processing facilities']
      },
      {
        id: 'astm-a420-grade-wpl6',
        slug: 'astm-a420-grade-wpl6',
        name: 'ASTM A420 Grade WPL6',
        code: 'ASTM A420 WPL6 Low Temperature Impact Tested (-46°C / -50°F)',
        standard: 'ASTM A420, ASME SA420, ASME B16.9',
        uns: 'UNS K03011',
        din: '1.0488 (TStE 355)',
        shortDesc: 'Cryogenic and low-temperature carbon steel fittings Charpy V-notch impact tested at -46°C.',
        fullDesc: 'Specially normalized and quenched-and-tempered carbon steel fittings engineered specifically for low-temperature service down to -46°C (-50°F). Fully Charpy V-notch tested to eliminate brittle fracture in arctic and cryogenic installations.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH STD to SCH XXS', connection: 'Butt-Weld (BW)' },
        applications: ['Liquefied natural gas (LNG) carrier lines', 'Arctic oil & gas extraction loops', 'Ethylene and LPG refrigeration plants', 'Sub-zero chemical storage terminals']
      },
      {
        id: 'astm-a105-forged-fittings',
        slug: 'astm-a105-forged-fittings',
        name: 'ASTM A105 Forged Fittings',
        code: 'ASTM A105 / A105N Normalized Class 3000# / 6000# / 9000#',
        standard: 'ASTM A105, ASME SA105, ASME B16.11, MSS SP-79 / 83',
        uns: 'UNS K03504',
        din: '1.0460 (C22.8)',
        shortDesc: 'Heavy-duty normalized forged carbon steel socket weld and threaded buttweld fittings.',
        fullDesc: 'High-integrity normalized carbon steel forged fittings manufactured in Class 3000#, 6000#, and 9000#. Features elbows, tees, unions, full/half couplings, swages, and threadolets engineered for severe vibration, high-pressure steam, and tight hydraulic seals.',
        specs: { size: '1/8" to 4" NB', pressureClass: '3000#, 6000#, 9000#', connection: 'Socket Weld (SW) & Threaded NPT / BSPT' },
        applications: ['High-pressure steam bypass manifolds', 'Refinery fuel gas skids', 'Hydraulic drilling rig manifolds', 'Auxiliary boiler piping connections']
      }
    ]
  },
  {
    id: 'alloy-steel-pipe-fittings',
    slug: 'alloy-steel-pipe-fittings',
    materialSlug: 'alloy-steel',
    materialName: 'Alloy Steel',
    aliases: ["alloy-steel","alloy-fittings","alloy-steel-pipe-fittings"],
    name: 'Alloy Steel Buttweld Fittings',
    title: 'Alloy Steel Buttweld Fittings',
    image: img_alloy_fittings,
    standards: 'ASTM A234 / ASME SA234 WP1, WP5, WP9, WP11, WP12, WP22, WP91, ASTM A182 F11/F22/F91, ASME B16.9, ASME B16.11',
    sizeRange: '1/2" NB to 36" NB (Seamless & Welded) | Forged: 1/8" to 4" NB (Class 3000#–9000#)',
    schedules: 'SCH 40, SCH 80, SCH 120, SCH 160, SCH XXS, and Custom Heavy Walls',
    availableForms: [
      'Butt-Weld Long & Short Radius 45°/90° Elbows',
      'Equal & Reducing High-Pressure Tees',
      'Concentric & Eccentric Boiler Reducers',
      'Heavy-Wall Ellipsoidal End Caps',
      'High-Temperature Barred Tees & Manifolds',
      'ASTM A182 Chrome-Moly Forged Socket Weld & Threaded Fittings'
    ],
    shortDesc: 'Chrome-Moly (Cr-Mo) alloy steel butt-weld and forged fittings engineered for elevated creep rupture strength, hydrogen embrittlement resistance, and critical thermal performance in supercritical boilers and refinery hydroprocessing units.',
    grades: [
      {
        id: 'alloy-steel-pipe-fittings-general',
        slug: 'alloy-steel-pipe-fittings',
        name: 'Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 / ASME SA234 Chrome-Moly Series',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K11597 / K21590 / K90901',
        din: 'DIN 17175 (15Mo3, 13CrMo4-5, 10CrMo9-10)',
        shortDesc: 'Complete range of Chrome-Molybdenum alloy steel fittings for extreme power generation and steam lines.',
        fullDesc: 'Comprehensive spectrum of Chrome-Moly butt-weld fittings delivering outstanding high-temperature creep strength, oxidation resistance, and metallurgical stability for supercritical power generation and refinery hydrocracker installations.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS', connection: 'Butt-Weld (BW)' },
        applications: ['Superheated steam lines', 'Power plant turbine bypass piping', 'Catalytic reforming units', 'Hydrogen furnace headers']
      },
      {
        id: 'astm-a234-gr-wp1-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp1-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP1 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP1 (0.5% Mo Molybdenum Steel)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K12822',
        din: '1.5415 (15Mo3 / 16Mo3)',
        shortDesc: 'Molybdenum alloy steel fittings designed for medium high-temperature power piping.',
        fullDesc: 'Carbon-0.5% Molybdenum alloy steel fittings engineered to resist graphitization and improve high-temperature creep resistance up to 500°C in utility boilers and process steam headers.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40, SCH 80, SCH 160, SCH XXS', connection: 'Butt-Weld' },
        applications: ['Boiler economizer loops', 'Steam distribution mains', 'Thermal oil piping systems', 'Chemical refinery steam tracing']
      },
      {
        id: 'astm-a234-gr-wp5-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp5-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP5 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP5 (5% Cr - 0.5% Mo Chrome Moly)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        shortDesc: '5Cr-0.5Mo intermediate alloy fittings with enhanced corrosion resistance in sulfur-bearing hot crude.',
        fullDesc: 'Intermediate Chrome-Moly alloy fittings containing 5% Chromium and 0.5% Molybdenum, delivering superior resistance to hot sulfide corrosion, naphthenic acid attack, and high-temperature oxidation up to 650°C.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH XXS', connection: 'Butt-Weld (BW)' },
        applications: ['Refinery vacuum distillation piping', 'Coker furnace discharge lines', 'Visbreaker furnace transfer lines', 'Desulfurization unit piping']
      },
      {
        id: 'astm-a234-gr-wp9-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp9-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP9 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP9 (9% Cr - 1% Mo Alloy Steel)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K90941',
        din: '1.7386 (X12CrMo9-1)',
        shortDesc: '9Cr-1Mo alloy fittings engineered for high-sulfur and high-temperature refinery environments.',
        fullDesc: 'Alloy fittings formulated with 9% Chromium and 1% Molybdenum, providing outstanding corrosion and scaling resistance in sour crude refinery services and catalytic hydroprocessing plants.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH 160 / XXS', connection: 'Butt-Weld' },
        applications: ['High-sulfur petroleum cracking', 'Hydrogen desulfurization plants', 'Cracking furnace coils and headers', 'Refinery distillation columns']
      },
      {
        id: 'astm-a234-gr-wp11-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp11-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP11 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP11 Class 1 / Class 2 (1.25% Cr - 0.5% Mo)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K11572 / K11597',
        din: '1.7335 (13CrMo4-5)',
        shortDesc: '1.25Cr-0.5Mo industry standard fittings for high-temperature steam and hydrotreater service.',
        fullDesc: 'Extensively utilized 1.25% Chromium - 0.5% Molybdenum alloy fittings engineered for steam headers and heat exchangers. Resists hydrogen attack according to Nelson curve limits and prevents creep relaxation up to 550°C.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40, SCH 80, SCH 160, SCH XXS', connection: 'Butt-Weld (BW)' },
        applications: ['Thermal power plant main steam headers', 'Fossil fuel boiler reheaters', 'Petrochemical cracking furnace piping', 'Catalytic reformer process runs']
      },
      {
        id: 'astm-a234-gr-wp22-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp22-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP22 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP22 Class 1 / Class 3 (2.25% Cr - 1% Mo)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        shortDesc: '2.25Cr-1Mo heavy-duty Chrome-Moly fittings with elevated creep rupture resistance to 600°C.',
        fullDesc: 'High-performance 2.25% Chromium - 1% Molybdenum alloy fittings providing exceptional resistance to high-temperature hydrogen attack, creep embrittlement, and thermal fatigue in supercritical steam power generators and refinery hydrocrackers.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS (Custom Heavy Walls)', connection: 'Butt-Weld' },
        applications: ['Supercritical boiler main steam circuits', 'Hydrocracker heavy feed headers', 'Ammonia synthesis high-pressure loop', 'High-temperature gas cooling conduits']
      },
      {
        id: 'astm-a234-gr-wp91-alloy-steel-pipe-fittings',
        slug: 'astm-a234-gr-wp91-alloy-steel-pipe-fittings',
        name: 'ASTM A234 Gr WP91 Alloy Steel Buttweld Fittings',
        code: 'ASTM A234 WP91 Class 1 / Class 2 (9Cr-1Mo-V-Nb)',
        standard: 'ASTM A234, ASME SA234, ASME B16.9',
        uns: 'UNS K90901',
        din: '1.4903 (X10CrMoVNb9-1)',
        shortDesc: 'Advanced 9Cr-1Mo-V-Nb modified martensitic alloy fittings for ultra-supercritical (USC) power stations.',
        fullDesc: 'State-of-the-art modified 9Cr-1Mo-V-Nb martensitic creep-strength enhanced ferritic steel (CSEF) fittings. Engineered for ultra-supercritical power plant main steam and hot reheat piping operating up to 600°C with reduced wall thickness and thermal stress.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 80, SCH 160, SCH XXS (Controlled PWHT)', connection: 'Butt-Weld Beveled' },
        applications: ['Ultra-supercritical power boiler headers', 'Hot reheat and main steam bypass loops', 'Advanced combined-cycle steam headers', 'High-efficiency industrial cogeneration piping']
      }
    ]
  },
  {
    id: 'inconel-pipe-fittings',
    slug: 'inconel-pipe-fittings',
    materialSlug: 'inconel',
    materialName: 'Inconel',
    aliases: ["inconel","inconel-pipe-fittings"],
    name: 'Inconel Buttweld Fittings',
    title: 'Inconel Buttweld Fittings',
    image: img_inconel_fittings,
    standards: 'ASTM B366 / ASME SB366, ASME B16.9, ASME B16.11, MSS SP-43',
    sizeRange: '1/2" NB to 24" NB (Seamless & Welded) | Forged: 1/8" to 4" NB (Class 3000#–9000#)',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: [
      'Butt-Weld 45° & 90° Long Radius Elbows',
      'Equal & Reducing Flow Tees',
      'Concentric & Eccentric High-Nickel Reducers',
      'Flanged Stub Ends & Heavy End Caps',
      'High-Pressure Class 3000# / 6000# Socket Weld & NPT Forged Fittings'
    ],
    shortDesc: 'Nickel-Chromium superalloy butt-weld and forged fittings engineered for exceptional resistance to high-temperature oxidation, carburization, and severe chloride-induced stress corrosion cracking in extreme marine, aerospace, and nuclear environments.',
    grades: [
      {
        id: 'inconel-625-pipe-fittings',
        slug: 'inconel-625-pipe-fittings',
        aliases: ['inconel-625', '625', 'alloy-625', 'wpnicmc', 'n06625', 'inconel-pipe-fittings'],
        name: 'Inconel 625 Buttweld Fittings',
        code: 'ASTM B366 WPNICMC (UNS N06625)',
        standard: 'ASTM B366 / ASME SB366, ASME B16.9, ASME B16.11, MSS SP-43',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        shortDesc: 'Solid-solution nickel-chromium-molybdenum alloy fittings offering supreme pitting and sour corrosion resistance.',
        fullDesc: 'Precision butt-weld Inconel 625 elbows, tees, and reducers fortified with 9% Mo and 3.6% Nb. Delivers high mechanical strength from cryogenic temperatures to 982°C and virtual immunity to chloride stress corrosion cracking.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', connection: 'Butt-Weld (BW) / Socket Weld (SW)' },
        applications: ['Subsea manifolds and riser connections', 'Sour gas production pipelines (NACE MR0175)', 'Chemical plant reaction vessels and flaring loops', 'Marine seawater cooling piping']
      },
      {
        id: 'inconel-600-pipe-fittings',
        slug: 'inconel-600-pipe-fittings',
        aliases: ['inconel-600', '600', 'alloy-600', 'wpnci', 'n06600'],
        name: 'Inconel 600 Buttweld Fittings',
        code: 'ASTM B366 WPNCI (UNS N06600)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N06600',
        din: '2.4816 (NiCr15Fe)',
        shortDesc: 'High-temperature nickel-chromium butt weld fittings resisting oxidation and carburization up to 1093°C.',
        fullDesc: 'Inconel 600 buttweld elbows, tees, reducers, and caps engineered for furnace retorts, heat treatment fixtures, and chemical processing reaction loops operating under elevated thermal atmospheres.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', connection: 'Butt-Weld (BW) / Socket Weld (SW)' },
        applications: ['Furnace components and heat-treating fixtures', 'Ethylene dichloride crackers', 'Nuclear steam generator piping', 'Chemical processing reactors']
      },
      {
        id: 'inconel-601-pipe-fittings',
        slug: 'inconel-601-pipe-fittings',
        aliases: ['inconel-601', '601', 'alloy-601', 'n06601'],
        name: 'Inconel 601 Buttweld Fittings',
        code: 'ASTM B366 WPNIC (UNS N06601)',
        standard: 'ASTM B366, ASME B16.9',
        uns: 'UNS N06601',
        din: '2.4851 (NiCr23Fe)',
        shortDesc: 'Aluminum-bearing high-temperature alloy fittings with exceptional resistance to cyclic thermal oxidation.',
        fullDesc: 'Nickel-Chromium-Aluminum alloy buttweld fittings delivering extraordinary scaling resistance and mechanical stability in cyclic oxidizing atmospheres up to 1200°C.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld (BW)' },
        applications: ['Thermal oxidizer duct fittings', 'Petrochemical cracking coils', 'Industrial incinerator piping', 'Nitric acid ammonia burning baskets']
      },
      {
        id: 'inconel-718-pipe-fittings',
        slug: 'inconel-718-pipe-fittings',
        aliases: ['inconel-718', '718', 'alloy-718', 'n07718'],
        name: 'Inconel 718 Buttweld Fittings',
        code: 'ASTM B366 WPNIC718 (UNS N07718)',
        standard: 'ASTM B366, API 6A, ASME B16.9',
        uns: 'UNS N07718',
        din: '2.4668 (NiCr19Fe19Nb5Mo3)',
        shortDesc: 'Precipitation-hardenable ultra-high-strength nickel superalloy fittings for extreme HPHT environments.',
        fullDesc: 'Precipitation-hardened superalloy fittings providing yield strengths exceeding 120,000 PSI, high fatigue resistance, and excellent weldability for subsea wellheads, space exploration, and nuclear systems.',
        specs: { size: '1/2" to 16" NB', schedule: 'SCH 40S to SCH XXS', connection: 'Butt-Weld / High-Pressure Forged' },
        applications: ['Deepwater subsea wellhead manifolds', 'Gas turbine high-pressure fuel loops', 'HPHT sour gas gathering pipelines', 'Rocket engine propulsion assemblies']
      },
      {
        id: 'incoloy-800-800h-800ht-pipe-fittings',
        slug: 'incoloy-800-800h-800ht-pipe-fittings',
        aliases: ['incoloy-800', '800h', '800ht', 'n08800', 'n08810'],
        name: 'Incoloy 800 / 800H / 800HT Buttweld Fittings',
        code: 'ASTM B366 WPNIC (Incoloy 800/800H/800HT)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N08800 / N08810 / N08811',
        din: '1.4876 (X10NiCrAlTi32-20)',
        shortDesc: 'Iron-nickel-chromium alloy fittings engineered for high-temperature creep rupture resistance up to 925°C.',
        fullDesc: 'Controlled carbon, aluminum, and titanium formulation providing optimum creep and stress rupture properties in steam hydrocarbon reforming and industrial ethylene cracking furnaces.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld (BW)' },
        applications: ['Ethylene pyrolysis cracking furnace piping', 'Hydrocarbon steam methane reformers', 'Ammonia effluent headers', 'Thermal power superheater connections']
      },
      {
        id: 'incoloy-825-pipe-fittings',
        slug: 'incoloy-825-pipe-fittings',
        aliases: ['incoloy-825', '825', 'n08825'],
        name: 'Incoloy 825 Buttweld Fittings',
        code: 'ASTM B366 WPNICMC (UNS N08825)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N08825',
        din: '2.4858 (NiCr21Mo)',
        shortDesc: 'Titanium-stabilized nickel-iron-chromium-molybdenum alloy fittings resisting sulfuric and phosphoric acids.',
        fullDesc: 'Nickel-iron-chromium-molybdenum alloy with copper and titanium additions, providing exceptional resistance to sulfuric acid, phosphoric acid, and localized pitting in sour hydrocarbon environments.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', connection: 'Butt-Weld (BW)' },
        applications: ['Sulfuric acid pickling heating coils', 'Phosphoric acid manufacturing plants', 'Sour oil & gas production lines', 'Nuclear fuel reprocessing piping']
      }
    ]
  },
  {
    id: 'monel-pipe-fittings',
    slug: 'monel-pipe-fittings',
    materialSlug: 'monel',
    materialName: 'Monel',
    aliases: ["monel","monel-pipe-fittings"],
    name: 'Monel Buttweld Fittings',
    title: 'Monel Buttweld Fittings',
    image: img_monel_fittings,
    standards: 'ASTM B366 / ASME SB366, ASME B16.9, ASME B16.11, MSS SP-43',
    sizeRange: '1/2" NB to 20" NB (Seamless & Welded) | Forged: 1/8" to 4" NB (Class 3000#–6000#)',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: [
      'Butt-Weld Seamless Elbows (45° / 90° / 180°)',
      'Equal & Reducing Tees',
      'Concentric & Eccentric Monel Reducers',
      'Stub Ends & High-Pressure Pipe Caps',
      'Socket Weld & Threaded Class 3000# Forged Fittings'
    ],
    shortDesc: 'Nickel-Copper alloy butt-weld and forged fittings providing extraordinary resistance to rapidly flowing seawater, marine biofouling, hydrofluoric acid, sulfuric acid, and alkaline brine environments.',
    grades: [
      {
        id: 'monel-400-pipe-fittings',
        slug: 'monel-400-pipe-fittings',
        aliases: ['monel-400', '400', 'alloy-400', 'n04400', 'monel-pipe-fittings'],
        name: 'Monel 400 Buttweld Fittings',
        code: 'ASTM B366 WPNC (UNS N04400)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9, MSS SP-43',
        uns: 'UNS N04400',
        din: '2.4360 (NiCu30Fe)',
        shortDesc: 'Solid-solution nickel-copper butt weld fittings providing zero cavitation damage in fast seawater and HF acid.',
        fullDesc: 'Monel 400 seamless and welded elbows, tees, reducers, and caps engineered for extreme resistance to rapidly flowing seawater, marine biofouling, and hydrofluoric acid alkylation media in petrochemical refineries.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S to SCH XXS', connection: 'Butt-Weld (BW) / Socket Weld (SW)' },
        applications: ['HF acid alkylation units in oil refineries', 'Marine salt extraction and desalination loops', 'Subsea offshore splash zone piping', 'Propeller shafting fluid sleeves & marine fittings']
      },
      {
        id: 'monel-k500-pipe-fittings',
        slug: 'monel-k500-pipe-fittings',
        aliases: ['monel-k500', 'k500', 'alloy-k500', 'n05500'],
        name: 'Monel K500 Buttweld Fittings',
        code: 'ASTM B366 WPNC (UNS N05500)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9, ASME B16.11',
        uns: 'UNS N05500',
        din: '2.4375 (NiCu30Al)',
        shortDesc: 'Age-hardenable high-strength nickel-copper alloy fittings for heavy marine and subsea service.',
        fullDesc: 'Precipitation-hardened nickel-copper fittings combining Monel 400 corrosion immunity with triple the yield strength and double the tensile strength for high-pressure marine pumps and offshore manifolds.',
        specs: { size: '1/2" to 16" NB', schedule: 'SCH 40S, SCH 80S, SCH 160', connection: 'Butt-Weld / High-Pressure Forged' },
        applications: ['Offshore drill collar subsea manifolds', 'Marine valve trim and pump impellers', 'Naval ordnance non-magnetic piping', 'High-strength marine fasteners & flange unions']
      }
    ]
  },
  {
    id: 'hastelloy-pipe-fittings',
    slug: 'hastelloy-pipe-fittings',
    materialSlug: 'hastelloy',
    materialName: 'Hastelloy',
    aliases: ["hastelloy","hastelloy-pipe-fittings"],
    name: 'Hastelloy Buttweld Fittings',
    title: 'Hastelloy Buttweld Fittings',
    image: img_hastelloy_fittings,
    standards: 'ASTM B366 / ASME SB366, ASME B16.9, ASME B16.11, DIN EN 10253',
    sizeRange: '1/2" NB to 20" NB (Seamless & Welded) | Forged: 1/8" to 3" NB (Class 3000#–6000#)',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
    availableForms: [
      'Seamless & Welded 90°/45° Long Radius Elbows',
      'Equal & Reducing Process Tees',
      'Concentric & Eccentric Smooth Reducers',
      'Short Pattern Stub Ends & Blind Caps',
      'Forged High-Pressure Socket Weld & Threaded Unions & Couplings'
    ],
    shortDesc: 'Nickel-Chromium-Molybdenum superalloy fittings providing unmatched resistance to localized pitting, crevice attack, hot contaminated mineral acids, wet chlorine gas, and severe chemical processing reagents.',
    grades: [
      {
        id: 'hastelloy-c276-pipe-fittings',
        slug: 'hastelloy-c276-pipe-fittings',
        aliases: ['hastelloy-c276', 'c276', 'alloy-c276', 'n10276', 'hastelloy-pipe-fittings'],
        name: 'Hastelloy C276 Buttweld Fittings',
        code: 'ASTM B366 WPHC276 (UNS N10276)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9, ASME B16.11',
        uns: 'UNS N10276',
        din: '2.4819 (NiMo16Cr15W)',
        shortDesc: 'Premier corrosion-resistant superalloy fittings for aggressive wet chlorine, sulfuric, and hydrochloric environments.',
        fullDesc: 'Hastelloy C276 buttweld elbows, tees, and reducers formulated with heavy concentrations of molybdenum and tungsten, preventing grain boundary precipitate formation in weld heat-affected zones and resisting strong oxidizers and mineral acids.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld (BW) / Socket Weld (SW)' },
        applications: ['Flue-gas desulfurization (FGD) scrubber systems', 'Waste incineration chemical recovery piping', 'Pharmaceutical active ingredient processing', 'Pesticide and herbicide acid delivery loops']
      },
      {
        id: 'hastelloy-c22-pipe-fittings',
        slug: 'hastelloy-c22-pipe-fittings',
        aliases: ['hastelloy-c22', 'c22', 'alloy-c22', 'n06022'],
        name: 'Hastelloy C22 Buttweld Fittings',
        code: 'ASTM B366 WPHC22 (UNS N06022)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N06022',
        din: '2.4602 (NiCr21Mo14W)',
        shortDesc: 'Enhanced chromium-molybdenum-tungsten superalloy fittings with universal resistance to mixed acid media.',
        fullDesc: 'Optimized Cr-Mo-W nickel alloy fittings delivering superior resistance to pitting, crevice attack, and stress corrosion cracking in aggressive oxidizing and reducing acid environments with high free-chloride levels.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S to SCH 160', connection: 'Butt-Weld (BW)' },
        applications: ['Chlorination systems and bleaching lines', 'Waste chemical incineration scrubbers', 'Pharmaceutical reaction vessels', 'Nuclear fuel processing flow loops']
      },
      {
        id: 'hastelloy-b2-pipe-fittings',
        slug: 'hastelloy-b2-pipe-fittings',
        aliases: ['hastelloy-b2', 'b2', 'alloy-b2', 'n10665'],
        name: 'Hastelloy B2 Buttweld Fittings',
        code: 'ASTM B366 WPHB (UNS N10665)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N10665',
        din: '2.4617 (NiMo28)',
        shortDesc: 'Nickel-molybdenum fittings offering supreme resistance to hydrochloric acid at all concentrations.',
        fullDesc: 'Solid-solution nickel-molybdenum alloy buttweld fittings designed specifically for pure reducing environments, offering outstanding resistance to hydrochloric, sulfuric, and acetic acids.',
        specs: { size: '1/2" to 16" NB', schedule: 'SCH 10S to SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Hydrochloric acid synthesis and distribution', 'Acetic acid and formic acid manufacturing', 'Alkylation and polymerization reactions', 'Pure reducing chemical synthesis']
      }
    ]
  },
  {
    id: 'nickel-pipe-fittings',
    slug: 'nickel-pipe-fittings',
    materialSlug: 'nickel',
    materialName: 'Nickel Alloy',
    aliases: ["nickel","nickel-alloy","nickel-pipe-fittings"],
    name: 'Nickel Buttweld Fittings',
    title: 'Nickel Buttweld Fittings',
    image: img_nickel_fittings,
    standards: 'ASTM B366 / ASME SB366, ASME B16.9, ASME B16.11',
    sizeRange: '1/2" NB to 18" NB (Seamless & Welded) | Forged: 1/4" to 3" NB',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
    availableForms: [
      'Butt-Weld Long Radius 90° & 45° Elbows',
      'Straight & Reducing Branch Tees',
      'Concentric & Eccentric Reducing Cones',
      'Flanged Stub Ends & Welded Caps',
      'Socket Weld & Threaded Forged Fittings'
    ],
    shortDesc: 'Commercially pure nickel butt-weld and forged fittings delivering exceptional resistance to reducing chemicals, caustic alkalis, anhydrous ammonia, and molten caustic soda up to extreme concentrations.',
    grades: [
      {
        id: 'nickel-200-pipe-fittings',
        slug: 'nickel-200-pipe-fittings',
        aliases: ['nickel-200', '200', 'alloy-200', 'n02200', 'nickel-pipe-fittings'],
        name: 'Nickel 200 Buttweld Fittings',
        code: 'ASTM B366 WPN (UNS N02200)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N02200',
        din: '2.4066 (Ni99.2)',
        shortDesc: 'Commercially pure wrought nickel fittings offering superior resistance to caustic alkalis and dry halogen gases.',
        fullDesc: 'Commercially pure nickel fittings providing outstanding resistance to hot concentrated sodium hydroxide (caustic soda) solutions, anhydrous ammonia, and non-oxidizing halide acids.',
        specs: { size: '1/2" to 18" NB', schedule: 'SCH 10S, SCH 40S, SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Caustic soda evaporator manifolds', 'Chlor-alkali plant fluid transfer', 'Synthetic fiber and soap manufacturing', 'Fluorine and hydrogen chloride handling lines']
      },
      {
        id: 'nickel-201-pipe-fittings',
        slug: 'nickel-201-pipe-fittings',
        aliases: ['nickel-201', '201', 'alloy-201', 'n02201'],
        name: 'Nickel 201 Buttweld Fittings',
        code: 'ASTM B366 WPNL (UNS N02201)',
        standard: 'ASTM B366, ASME SB366, ASME B16.9',
        uns: 'UNS N02201',
        din: '2.4068 (LC-Ni99.2)',
        shortDesc: 'Low-carbon commercially pure nickel fittings preventing graphitization above 315°C.',
        fullDesc: 'Ultra-low carbon nickel formulation eliminating graphitization in caustic evaporators and halogen manufacturing operating continuously above 315°C.',
        specs: { size: '1/2" to 18" NB', schedule: 'SCH 10S, SCH 40S, SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['High-temperature caustic concentration units', 'Halogen generation equipment', 'Vinyl chloride monomer (VCM) production', 'Molten caustic handling piping']
      }
    ]
  },
  {
    id: 'copper-nickel-pipe-fittings',
    slug: 'copper-nickel-pipe-fittings',
    materialSlug: 'copper-nickel',
    materialName: 'Copper Nickel',
    aliases: ["copper-nickel","cu-ni","copper-nickel-pipe-fittings"],
    name: 'Copper Nickel Buttweld Fittings',
    title: 'Copper Nickel Buttweld Fittings',
    image: img_cu_ni_fittings,
    standards: 'ASME B16.9, DIN 86019, EEMUA 146, BS 2871, ASTM B466 / B366',
    sizeRange: '1/2" NB to 24" NB (16 mm to 508 mm OD)',
    schedules: '10 Bar, 14 Bar, 16 Bar, 20 Bar Rating / SCH 10S & SCH 40S',
    availableForms: [
      'DIN 86019 Seamless 90° & 45° Elbows',
      'Equal & Reducing Saddles & Tees',
      'Concentric & Eccentric Smooth Reducers',
      'Composite Collar Stub Ends for Loose Backing Flanges',
      'Cap End Terminations'
    ],
    shortDesc: 'Cupro-Nickel butt-weld and socket fittings delivering superior resistance to marine biofouling, macro-algae attachment, impingement attack, and stress corrosion in high-salinity seawater systems.',
    grades: [
      {
        id: 'cu-ni-90-10-pipe-fittings',
        slug: 'cu-ni-90-10-pipe-fittings',
        aliases: ['cu-ni-90-10', 'cuni-90-10', '90-10', 'c70600', 'copper-nickel-pipe-fittings'],
        name: 'Cu-Ni 90/10 Buttweld Fittings',
        code: 'Cu-Ni 90/10 (UNS C70600) / DIN 86019 / EEMUA 146',
        standard: 'DIN 86019, EEMUA 146, ASME B16.9, ASTM B466 / B366',
        uns: 'UNS C70600',
        din: '2.0872 (CuNi10Fe1Mn)',
        shortDesc: 'Marine-grade 90/10 cupro-nickel fittings for seawater cooling and naval plumbing loops.',
        fullDesc: 'Engineered specifically for naval shipbuilding, offshore oil platforms, and desalination facilities. Forms an adherent protective copper oxide passivation layer providing natural antifouling and erosion-corrosion resistance.',
        specs: { size: '1/2" to 24" NB (16mm to 419mm)', pressureClass: '10 Bar, 14 Bar, 16 Bar', connection: 'Butt-Weld & Composite Collar Ends' },
        applications: ['Seawater cooling systems in naval vessels', 'Multi-stage flash desalination plants', 'Offshore firewater ring mains', 'Commercial ship ballast and bilge piping']
      },
      {
        id: 'cu-ni-70-30-pipe-fittings',
        slug: 'cu-ni-70-30-pipe-fittings',
        aliases: ['cu-ni-70-30', 'cuni-70-30', '70-30', 'c71500'],
        name: 'Cu-Ni 70/30 Buttweld Fittings',
        code: 'Cu-Ni 70/30 (UNS C71500) / EEMUA 146',
        standard: 'DIN 86019, EEMUA 146, ASME B16.9, ASTM B466 / B366',
        uns: 'UNS C71500',
        din: '2.0882 (CuNi30Mn1Fe)',
        shortDesc: 'Higher-strength 70/30 cupro-nickel fittings for high-velocity seawater piping systems.',
        fullDesc: 'Iron- and manganese-fortified 70/30 copper nickel alloy delivering higher permissible flow velocities (up to 4.5 m/s) and supreme impingement corrosion resistance in naval marine loops.',
        specs: { size: '1/2" to 24" NB', pressureClass: '14 Bar to 20 Bar Rating / SCH 40S', connection: 'Butt-Weld (BW)' },
        applications: ['High-velocity naval submarine cooling loops', 'Desalination brine heaters and ejectors', 'Offshore platform deluge manifolds', 'Shipboard condenser tube headers']
      }
    ]
  },
  {
    id: 'titanium-pipe-fittings',
    slug: 'titanium-pipe-fittings',
    materialSlug: 'titanium',
    materialName: 'Titanium',
    aliases: ["titanium","titanium-pipe-fittings"],
    name: 'Titanium Buttweld Fittings',
    title: 'Titanium Buttweld Fittings',
    image: img_titanium_fittings,
    standards: 'ASTM B363 / ASME SB363, ASME B16.9, MSS SP-43',
    sizeRange: '1/2" NB to 24" NB (Seamless & Welded)',
    schedules: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S',
    availableForms: [
      'Seamless & Welded 90° & 45° Long Radius Elbows',
      'Equal & Reducing Branch Flow Tees',
      'Concentric & Eccentric Titanium Reducers',
      'MSS SP-43 Type A/B Stub Ends',
      'Dished Ellipsoidal Caps'
    ],
    shortDesc: 'Ultra-lightweight, high-strength titanium butt-weld fittings delivering permanent immunity to raw seawater corrosion, chlor-alkali brine, wet chlorine, and organic acid environments.',
    grades: [
      {
        id: 'titanium-grade-2-pipe-fittings',
        slug: 'titanium-grade-2-pipe-fittings',
        aliases: ['titanium-grade-2', 'grade-2', 'gr2', 'r50400', 'titanium-pipe-fittings'],
        name: 'Titanium Grade 2 Buttweld Fittings',
        code: 'ASTM B363 WPT2 (Grade 2 CP)',
        standard: 'ASTM B363, ASME SB363, ASME B16.9, MSS SP-43',
        uns: 'UNS R50400',
        din: '3.7035',
        shortDesc: 'Commercially pure Grade 2 titanium butt-weld fittings delivering permanent immunity to seawater corrosion.',
        fullDesc: 'ASTM B363 Titanium Grade 2 (unalloyed CP) buttweld fittings providing extraordinary strength-to-weight ratio and self-healing TiO2 passive film that remains completely impervious to aerated seawater, bleaching oxidizers, and boiling nitric acid.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S, SCH 40S, SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Seawater intake loops on offshore platforms', 'Chlor-alkali and chlorine dioxide bleaching', 'Desalination high-pressure reverse osmosis loops', 'Aerospace and marine defense cooling manifolds']
      },
      {
        id: 'titanium-grade-5-pipe-fittings',
        slug: 'titanium-grade-5-pipe-fittings',
        aliases: ['titanium-grade-5', 'grade-5', 'gr5', 'ti-6al-4v', 'r56400'],
        name: 'Titanium Grade 5 Buttweld Fittings',
        code: 'ASTM B363 WPT5 / Ti-6Al-4V (Grade 5)',
        standard: 'ASTM B363, ASME SB363, ASME B16.9',
        uns: 'UNS R56400',
        din: '3.7165 (TiAl6V4)',
        shortDesc: 'High-strength alpha-beta titanium alloy butt weld fittings with 895 MPa tensile strength.',
        fullDesc: 'Alpha-beta titanium alloy fittings delivering extreme strength-to-density ratio, high fatigue strength, and excellent corrosion resistance for subsea aerospace and marine racing piping.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 40S, SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Deepwater subsea hydrocarbon lines', 'Aerospace hydraulic and propulsion cooling', 'High-performance marine racing exhaust', 'Offshore lightweight topside manifolds']
      },
      {
        id: 'titanium-grade-7-pipe-fittings',
        slug: 'titanium-grade-7-pipe-fittings',
        aliases: ['titanium-grade-7', 'grade-7', 'gr7', 'r52400'],
        name: 'Titanium Grade 7 Buttweld Fittings',
        code: 'ASTM B363 WPT7 / Ti-0.15Pd (Grade 7)',
        standard: 'ASTM B363, ASME SB363, ASME B16.9',
        uns: 'UNS R52400',
        din: '3.7235',
        shortDesc: 'Palladium-stabilized titanium fittings offering absolute resistance to hot reducing acid chlorides.',
        fullDesc: 'Grade 2 titanium fortified with 0.15% Palladium, drastically improving resistance to localized crevice corrosion in hot concentrated chlorides and dilute reducing acids.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S, SCH 40S, SCH 80S', connection: 'Butt-Weld (BW)' },
        applications: ['Hot concentrated chlor-alkali brine piping', 'Chemical processing with mixed acids', 'Geothermal energy fluid extraction', 'Hydrochloric and sulfuric acid handling loops']
      }
    ]
  }
];

export function getPipeFittingsCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return PIPE_FITTINGS_CATEGORIES.find(cat => 
    cat.slug === clean || 
    cat.id === clean || 
    cat.materialSlug === clean ||
    (cat.aliases && cat.aliases.includes(clean))
  ) || null;
}

export function getPipeFittingsMaterialList() {
  return [
    { slug: 'all', name: 'All Materials' },
    ...PIPE_FITTINGS_CATEGORIES.map(c => ({
      slug: c.materialSlug,
      name: c.materialName,
      catSlug: c.slug,
      count: c.grades.length
    }))
  ];
}

export function getPipeFittingsGradeBySlug(catSlug, gradeSlug) {
  const cat = getPipeFittingsCategoryBySlug(catSlug);
  if (!cat) return null;
  if (!gradeSlug) return cat.grades[0] || null;
  const clean = gradeSlug.toLowerCase().trim();
  const cleanNoFittings = clean.replace(/-(buttweld-fittings|pipe-fittings|fittings)$/, '');

  // 1. Direct match on slug, id, or aliases
  const direct = cat.grades.find(g => 
    g.slug === clean || 
    g.id === clean || 
    (g.aliases && g.aliases.includes(clean)) ||
    (g.aliases && g.aliases.includes(cleanNoFittings))
  );
  if (direct) return direct;

  // 2. Fuzzy match
  const matched = cat.grades.find(g => {
    const s = g.slug.toLowerCase().replace(/-(buttweld-fittings|pipe-fittings|fittings)$/, '');
    const n = g.name.toLowerCase();
    return s === cleanNoFittings || s.includes(cleanNoFittings) || cleanNoFittings.includes(s) || n.includes(cleanNoFittings);
  });
  return matched || cat.grades[0] || null;
}
