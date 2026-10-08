/**
 * Dedicated Flanges Product Catalog Data & Verified Technical Specifications
 * Conforming strictly to ASME B16.5, ASME B16.47 Series A & B, DIN, EN 1092-1, and ASTM standards.
 */

import img_ss_flanges from '../assets/New Product img/flanges/ss-flanges.jpg';
import img_cs_flanges from '../assets/New Product img/flanges/cs-flanges.jpg';
import img_alloy_flanges from '../assets/Product Section/Manufacturer division/Flanges/alloy steel.jpg';
import img_inconel_flanges from '../assets/New Product img/flanges/inconel-flanges.jpg';
import img_monel_flanges from '../assets/New Product img/flanges/monel-flanges.jpg';
import img_hastelloy_flanges from '../assets/New Product img/flanges/hastelloy-flanges.jpg';
import img_nickel_flanges from '../assets/Product Section/Manufacturer division/Flanges/nikle.jpg';
import img_cu_ni_flanges from '../assets/New Product img/flanges/copper-nickel-flanges.jpg';
import img_titanium_flanges from '../assets/New Product img/flanges/titanium-flanges.jpg';

export const FLANGES_CATEGORIES = [
  {
    id: 'stainless-steel-flanges',
    slug: 'stainless-steel-flanges',
    name: 'Stainless Steel Flanges',
    title: 'Stainless Steel Flanges',
    image: img_ss_flanges,
    standards: 'ASTM A182 / ASME SA182, ASME B16.5, ASME B16.47 Series A & B, EN 1092-1, BS 4504',
    sizeRange: '1/2" NB to 48" NB (Class 150# to 2500# & PN6 to PN400)',
    facingTypes: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Lap Joint Face',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Slip-On Flanges (SORF)',
      'Blind Flanges (BLRF)',
      'Socket Weld Flanges (SWRF)',
      'Threaded / Screwed Flanges',
      'Lap Joint Flanges (LJRF)',
      'Orifice & Spectacle Blind Flanges'
    ],
    shortDesc: 'Forged and precision CNC machined stainless steel pipe flanges engineered for high-pressure fluid containment, sanitary processing, cryogenic systems, and severe marine environments.',
    grades: [
      {
        id: 'ss-flanges-general',
        slug: 'ss-flanges',
        name: 'SS Flanges',
        code: 'ASTM A182 / ASME SA182 F304/L, F316/L, F321, F347',
        standard: 'ASTM A182, ASME B16.5, ASME B16.47, EN 1092-1',
        uns: 'UNS S30000 Series',
        din: 'DIN 2527, 2576, 2633',
        shortDesc: 'Full spectrum of austenitic stainless steel forged flanges for chemical and industrial pipelines.',
        fullDesc: 'Prime certified closed-die forged stainless steel flanges manufactured to ASME B16.5 and ASME B16.47. Engineered with precision serrated spiral or concentric gasket grooves for leak-proof sealing under elevated pressures.',
        specs: { size: '1/2" to 48" NB', pressureClass: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#', facing: 'RF, FF, RTJ' },
        applications: ['Petrochemical piping headers', 'Chemical processing manifold tie-ins', 'Water treatment and desalination skids', 'Food and pharmaceutical plant piping']
      },
      {
        id: 'ss-304-304l-flanges',
        slug: 'ss-304-304l-flanges',
        name: 'SS 304 / 304L Flanges',
        code: 'ASTM A182 F304 / F304L Dual Certified',
        standard: 'ASTM A182 / ASME SA182, ASME B16.5',
        uns: 'UNS S30400 / UNS S30403',
        din: '1.4301 / 1.4307',
        shortDesc: 'Dual-certified 18/8 low-carbon stainless forged flanges with superior weldability and formability.',
        fullDesc: 'Low carbon 304/304L stainless steel forged flanges designed to eliminate carbide precipitation during site welding. Delivers excellent tensile strength and dependable corrosion resistance across general industrial media.',
        specs: { size: '1/2" to 36" NB', pressureClass: '150# to 2500# (PN10 to PN160)', facing: 'RF (125-250 AARH), FF, RTJ' },
        applications: ['Breweries and beverage process piping', 'Municipal water treatment plants', 'Cryogenic gas storage manifold flanges', 'General chemical piping skids']
      },
      {
        id: 'ss-316-316l-316h-flanges',
        slug: 'ss-316-316l-316h-flanges',
        name: 'SS 316 / 316L / 316H Flanges',
        code: 'ASTM A182 F316 / F316L / F316H Molybdenum Grade',
        standard: 'ASTM A182, ASME SA182, ASME B16.5, ASME B16.47',
        uns: 'UNS S31600 / UNS S31603 / UNS S31609',
        din: '1.4401 / 1.4404 / 1.4435',
        shortDesc: 'Marine-grade molybdenum-enhanced stainless flanges resisting pitting in aggressive chloride media.',
        fullDesc: 'High-integrity 2-3% Molybdenum bearing austenitic stainless steel flanges providing superior resistance to chloride pitting, crevice attack, and harsh acidic solutions. Dual certified 316/316L with 316H high carbon option for elevated temperatures.',
        specs: { size: '1/2" to 48" NB', pressureClass: '150# to 2500#', facing: 'RF, RTJ, Flat Face' },
        applications: ['Offshore oil & gas topside platforms', 'Marine seawater cooling piping', 'Acid recovery & fertilizer plants', 'Specialty chemical reactors']
      },
      {
        id: 'ss-316ti-flanges',
        slug: 'ss-316ti-flanges',
        name: 'SS 316Ti Flanges',
        code: 'ASTM A182 F316Ti Titanium Stabilized',
        standard: 'ASTM A182, DIN EN 1092-1, DIN 2633',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        shortDesc: 'Titanium-stabilized grade preventing intergranular corrosion under prolonged thermal stress.',
        fullDesc: 'Stabilized austenitic stainless steel flanges formulated with titanium additions. Prevents chromium carbide sensitization during extended service at temperatures up to 800°C without risk of intergranular embrittlement.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# to 1500# (PN16 to PN160)', facing: 'Raised Face, RTJ' },
        applications: ['High-temperature exhaust manifolds', 'Chemical distillation headers', 'Nuclear power piping flanges', 'Thermal oxidizer flue duct connections']
      },
      {
        id: 'ss-310-310s-flanges',
        slug: 'ss-310-310s-flanges',
        name: 'SS 310 / 310S Flanges',
        code: 'ASTM A182 F310 / F310S 25Cr-20Ni High Heat',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS S31000 / UNS S31008',
        din: '1.4841 / 1.4845',
        shortDesc: 'High-chromium refractory flanges delivering continuous oxidation resistance up to 1150°C.',
        fullDesc: 'High-alloy 25% Chromium and 20% Nickel refractory forged flanges delivering remarkable resistance to cyclic thermal scaling, carburization, and sulfidizing atmospheres in furnaces and high-heat power piping.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# to 900#', facing: 'RF, RTJ' },
        applications: ['Furnace and boiler burner nozzles', 'Thermal incinerator duct flanges', 'Catalytic cracking regenerators', 'Radiant tube headers']
      },
      {
        id: 'ss-317-317l-flanges',
        slug: 'ss-317-317l-flanges',
        name: 'SS 317 / 317L Flanges',
        code: 'ASTM A182 F317 / F317L High Moly 3-4% Mo',
        standard: 'ASTM A182, ASME B16.5',
        uns: 'UNS S31700 / UNS S31703',
        din: '1.4438',
        shortDesc: 'High molybdenum stainless flanges resisting aggressive sulfuric and organic acid attack.',
        fullDesc: 'Molybdenum-enriched 317/317L forged flanges formulated for enhanced creep rupture strength and maximum protection against localized pitting in severe sulfuric acid, sulfurous vapors, and chloride scrubbers.',
        specs: { size: '1/2" to 24" NB', pressureClass: '150# to 1500#', facing: 'Raised Face, RTJ' },
        applications: ['Flue-gas desulfurization (FGD) scrubbers', 'Paper pulp digestion systems', 'Textile dye liquor processing', 'Explosives manufacturing manifolds']
      },
      {
        id: 'ss-321-321h-flanges',
        slug: 'ss-321-321h-flanges',
        name: 'SS 321 / 321H Flanges',
        code: 'ASTM A182 F321 / F321H Titanium Stabilized',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS S32100 / UNS S32109',
        din: '1.4541 / 1.4878',
        shortDesc: 'Titanium-stabilized heat-resistant flanges for sustained high-temperature steam pipelines.',
        fullDesc: 'Titanium-stabilized austenitic stainless steel forged flanges tailored for high-temperature service between 427°C and 816°C. Excellent creep-rupture performance and resistance to polythionic acid stress corrosion cracking.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Refinery catalytic reforming loops', 'High-pressure steam bypass systems', 'Thermal processing reactor flanges', 'Aircraft engine exhaust ring connections']
      }
    ]
  },
  {
    id: 'carbon-steel-flanges',
    slug: 'carbon-steel-flanges',
    name: 'Carbon Steel Flanges',
    title: 'Carbon Steel Flanges',
    image: img_cs_flanges,
    standards: 'ASTM A105 / ASME SA105, ASTM A350 LF2, ASTM A694 (F42 to F70), ASTM A181, ASME B16.5, ASME B16.47, MSS SP-44',
    sizeRange: '1/2" NB to 60" NB (Class 150# to 2500# & API 2000 to 15000 PSI)',
    facingTypes: 'Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)',
      'Socket Weld Flanges (SWRF)',
      'High-Yield MSS SP-44 Pipeline Flanges',
      'Long Weld Neck (LWN) Heavy Barrel Flanges'
    ],
    shortDesc: 'High-integrity normalized carbon steel forged flanges for refinery pressure vessels, low-temperature arctic pipelines, high-yield transmission manifolds, and power plant steam headers.',
    grades: [
      {
        id: 'carbon-steel-flanges-general',
        slug: 'carbon-steel-flanges',
        name: 'Carbon Steel Flanges',
        code: 'ASTM A105 / A350 LF2 / A694 Series',
        standard: 'ASTM A105, ASTM A350, ASME B16.5, MSS SP-44',
        uns: 'UNS K03504 / K03011',
        din: '1.0460 (C22.8) / 1.0488',
        shortDesc: 'Wrought carbon steel forged flanges for non-corrosive and high-pressure fluid pipelines.',
        fullDesc: 'Comprehensive spectrum of carbon steel flanges forged from fully-killed fine-grained steel. Conforming strictly to ASME B16.5 and ASME B16.47 with controlled carbon equivalent (CE) for effortless field weldability.',
        specs: { size: '1/2" to 60" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, FF, RTJ' },
        applications: ['Crude oil and refined petroleum piping', 'Power station steam distribution', 'Structural building services', 'Utility cooling and service water']
      },
      {
        id: 'astm-a105-forged-steel-flanges',
        slug: 'astm-a105-forged-steel-flanges',
        name: 'ASTM A105 Forged Steel Flanges',
        code: 'ASTM A105 / ASME SA105 Normalized (A105N)',
        standard: 'ASTM A105, ASME SA105, ASME B16.5, ASME B16.47',
        uns: 'UNS K03504',
        din: '1.0460 (C22.8 / P250GH)',
        shortDesc: 'The global industry benchmark for moderate and elevated temperature forged pressure piping flanges.',
        fullDesc: 'Standard normalized carbon steel forging grade delivering exceptional strength, ductility, and high-pressure reliability. Complies with NACE MR0175 / ISO 15156 hardness restrictions for sour hydrocarbon service.',
        specs: { size: '1/2" to 48" NB', pressureClass: '150#, 300#, 600#, 900#, 1500#, 2500#', facing: 'RF (125-250 RMS), RTJ' },
        applications: ['Petroleum refining process units', 'Boiler feed water piping headers', 'Natural gas distribution manifolds', 'Steam turbine piping connections']
      },
      {
        id: 'astm-a350-lf2-flanges',
        slug: 'astm-a350-lf2-flanges',
        name: 'ASTM A350 LF2 Flanges',
        code: 'ASTM A350 LF2 Class 1 / Class 2 Charpy Impact Tested (-46°C)',
        standard: 'ASTM A350, ASME SA350, ASME B16.5',
        uns: 'UNS K03011',
        din: '1.0488 (TStE 355)',
        shortDesc: 'Low-temperature forged carbon steel flanges impact tested at -46°C (-50°F) for arctic pipelines.',
        fullDesc: 'Normalized and tempered low-temperature carbon steel flanges subjected to rigorous Charpy V-notch impact testing at -46°C. Formulated to eliminate brittle fracture risk in sub-zero oil & gas infrastructure and cryogenic service.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Arctic oil & gas extraction networks', 'Liquefied petroleum gas (LPG) skids', 'Ethylene refrigeration circuits', 'Cryogenic gas processing terminals']
      },
      {
        id: 'astm-a694-flanges',
        slug: 'astm-a694-flanges',
        name: 'ASTM A694 Flanges',
        code: 'ASTM A694 F42 / F52 / F60 / F65 / F70 High Yield',
        standard: 'ASTM A694, ASME SA694, MSS SP-44, ASME B16.47',
        uns: 'UNS K03014',
        din: 'DIN EN 10222-4',
        shortDesc: 'High-yield forged carbon/microalloyed steel flanges for high-pressure transmission pipelines.',
        fullDesc: 'High-strength forged flanges designed for transmission pipeline headers where high yield strength (up to 70,000 PSI) allows thinner walls and weight savings while maintaining structural safety under extreme hydraulic surges.',
        specs: { size: '2" to 60" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Cross-country natural gas transmission lines', 'Offshore high-pressure export pipelines', 'Compressor station manifolds', 'Pipeline scraper and pigging traps']
      },
      {
        id: 'astm-a181-flanges',
        slug: 'astm-a181-flanges',
        name: 'ASTM A181 Flanges',
        code: 'ASTM A181 Class 60 / Class 70 General Utility',
        standard: 'ASTM A181, ASME B16.5',
        uns: 'UNS K03502',
        din: 'DIN 2576 / St 37-2',
        shortDesc: 'Economical forged carbon steel flanges for general low-to-medium pressure service.',
        fullDesc: 'Cost-effective forged carbon steel flanges specified for general fluid handling, low-pressure steam, plumbing, and structural utility lines where standard commercial specifications apply.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# & Class 300#', facing: 'Flat Face, Raised Face' },
        applications: ['HVAC chilled and heating water systems', 'General utility air lines', 'Fire protection sprinkler mains', 'Low-pressure municipal water piping']
      }
    ]
  },
  {
    id: 'alloy-steel-flanges',
    slug: 'alloy-steel-flanges',
    name: 'Alloy Steel Flanges',
    title: 'Alloy Steel Flanges',
    image: img_alloy_flanges,
    standards: 'ASTM A182 / ASME SA182 F1, F5, F9, F11, F12, F22, F91, ASME B16.5, ASME B16.47',
    sizeRange: '1/2" NB to 36" NB (Class 150# to 2500#)',
    facingTypes: 'Raised Face (RF), Ring Type Joint (RTJ)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)',
      'High-Temperature Orifice Flanges',
      'Heavy-Wall Long Weld Neck Flanges'
    ],
    shortDesc: 'Chrome-Moly (Cr-Mo) forged alloy steel flanges delivering high creep rupture strength, hydrogen resistance, and scaling immunity for supercritical steam generators and refinery hydrocrackers.',
    grades: [
      {
        id: 'alloy-steel-flanges-general',
        slug: 'alloy-steel-flanges',
        name: 'Alloy Steel Flanges',
        code: 'ASTM A182 / ASME SA182 Chrome-Moly Series',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K11597 / K21590 / K90901',
        din: '1.7335 / 1.7380 / 1.4903',
        shortDesc: 'High-temperature Chrome-Moly alloy forged flanges for power boilers and refinery steam lines.',
        fullDesc: 'Precision closed-die forged Chrome-Moly flanges providing superior metallurgical stability, elevated creep strength, and graphitization resistance up to 650°C in high-pressure thermal installations.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Thermal power plant main steam headers', 'Turbine bypass valve connections', 'Catalytic reforming units', 'Hydrogen furnace manifold connections']
      },
      {
        id: 'astm-a182-gr-f1-alloy-steel-flanges',
        slug: 'astm-a182-gr-f1-alloy-steel-flanges',
        name: 'ASTM A182 Gr F1 Alloy Steel Flanges',
        code: 'ASTM A182 F1 (0.5% Mo Carbon-Moly Steel)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K12822',
        din: '1.5415 (15Mo3 / 16Mo3)',
        shortDesc: 'Carbon-Molybdenum forged flanges for medium elevated temperature steam service.',
        fullDesc: 'Molybdenum alloy forged flanges designed to enhance creep strength and resist graphitization in utility boilers and process steam piping up to 500°C.',
        specs: { size: '1/2" to 24" NB', pressureClass: '150# to 1500#', facing: 'Raised Face, RTJ' },
        applications: ['Boiler economizer tie-in points', 'Steam distribution mains', 'Thermal oil piping systems', 'Chemical refinery steam tracing']
      },
      {
        id: 'astm-a182-gr-f5-alloy-steel-flanges',
        slug: 'astm-a182-gr-f5-alloy-steel-flanges',
        name: 'ASTM A182 Gr F5 Alloy Steel Flanges',
        code: 'ASTM A182 F5 (5% Cr - 0.5% Mo Chrome Moly)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        shortDesc: '5Cr-0.5Mo forged flanges with superior resistance to hot sulfur corrosion in crude distillation.',
        fullDesc: 'Intermediate Chrome-Moly alloy forged flanges delivering excellent resistance to hot sulfide attack, naphthenic acid corrosion, and scaling in petroleum refinery distillation units up to 650°C.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Refinery vacuum distillation units', 'Coker furnace header connections', 'Visbreaker transfer line flanges', 'High-sulfur petroleum pipelines']
      },
      {
        id: 'astm-a182-gr-f9-alloy-steel-flanges',
        slug: 'astm-a182-gr-f9-alloy-steel-flanges',
        name: 'ASTM A182 Gr F9 Alloy Steel Flanges',
        code: 'ASTM A182 F9 (9% Cr - 1% Mo Alloy Steel)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K90941',
        din: '1.7386 (X12CrMo9-1)',
        shortDesc: '9Cr-1Mo alloy forged flanges engineered for high-sulfur and high-temperature refinery crackers.',
        fullDesc: 'High-chromium alloy forged flanges formulating 9% Chromium and 1% Molybdenum, providing outstanding corrosion and scaling resistance in sour crude refinery services and catalytic hydroprocessing plants.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Sour crude oil cracking lines', 'Hydrogen desulfurization plants', 'Cracking furnace header connections', 'Refinery distillation columns']
      },
      {
        id: 'astm-a182-gr-f11-alloy-steel-flanges',
        slug: 'astm-a182-gr-f11-alloy-steel-flanges',
        name: 'ASTM A182 Gr F11 Alloy Steel Flanges',
        code: 'ASTM A182 F11 Class 1 / Class 2 (1.25% Cr - 0.5% Mo)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K11572 / K11597',
        din: '1.7335 (13CrMo4-5)',
        shortDesc: '1.25Cr-0.5Mo industry standard forged flanges for high-pressure steam and hydrotreater service.',
        fullDesc: 'Widely specified 1.25% Chromium - 0.5% Molybdenum alloy forged flanges engineered for high-pressure steam manifolds and heat exchanger nozzles. Resists hydrogen attack according to Nelson curve limits up to 550°C.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Thermal power plant main steam headers', 'Fossil fuel boiler reheater flanges', 'Petrochemical cracking furnace piping', 'Catalytic reformer process runs']
      },
      {
        id: 'astm-a182-gr-f22-alloy-steel-flanges',
        slug: 'astm-a182-gr-f22-alloy-steel-flanges',
        name: 'ASTM A182 Gr F22 Alloy Steel Flanges',
        code: 'ASTM A182 F22 Class 1 / Class 3 (2.25% Cr - 1% Mo)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        shortDesc: '2.25Cr-1Mo heavy-duty Chrome-Moly forged flanges with elevated creep rupture resistance to 600°C.',
        fullDesc: 'High-performance 2.25% Chromium - 1% Molybdenum alloy flanges delivering outstanding resistance to high-temperature hydrogen attack, creep embrittlement, and thermal fatigue in supercritical steam power generators and refinery hydrocrackers.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 150# to 2500#', facing: 'RF, RTJ' },
        applications: ['Supercritical boiler main steam circuits', 'Hydrocracker heavy feed headers', 'Ammonia synthesis high-pressure loop', 'High-temperature gas cooling conduits']
      },
      {
        id: 'astm-a182-gr-f91-alloy-steel-flanges',
        slug: 'astm-a182-gr-f91-alloy-steel-flanges',
        name: 'ASTM A182 Gr F91 Alloy Steel Flanges',
        code: 'ASTM A182 F91 Class 1 / Class 2 (9Cr-1Mo-V-Nb Modified)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        uns: 'UNS K90901',
        din: '1.4903 (X10CrMoVNb9-1)',
        shortDesc: 'Advanced 9Cr-1Mo-V-Nb modified martensitic alloy flanges for ultra-supercritical (USC) power stations.',
        fullDesc: 'State-of-the-art modified 9Cr-1Mo-V-Nb martensitic creep-strength enhanced ferritic steel (CSEF) flanges. Engineered for ultra-supercritical power plant main steam and hot reheat piping operating up to 600°C with reduced wall thickness and thermal stress.',
        specs: { size: '1/2" to 36" NB', pressureClass: 'Class 300# to 2500#', facing: 'Raised Face, RTJ' },
        applications: ['Ultra-supercritical power boiler headers', 'Hot reheat and main steam bypass loops', 'Advanced combined-cycle steam headers', 'High-efficiency industrial cogeneration piping']
      }
    ]
  },
  {
    id: 'inconel-flanges',
    slug: 'inconel-flanges',
    name: 'Inconel Flanges',
    title: 'Inconel Flanges',
    image: img_inconel_flanges,
    standards: 'ASTM B564 / ASME SB564, ASME B16.5, ASME B16.47, MSS SP-44',
    sizeRange: '1/2" NB to 24" NB (Class 150# to 2500# & API 10000 PSI)',
    facingTypes: 'Raised Face (RF), Ring Type Joint (RTJ)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)',
      'Socket Weld Flanges (SWRF)'
    ],
    shortDesc: 'Nickel-Chromium superalloy forged flanges delivering complete immunity to chloride stress corrosion cracking and extreme oxidation resistance up to 1093°C.',
    grades: [
      {
        id: 'inconel-flanges-general',
        slug: 'inconel-flanges',
        name: 'Inconel Flanges',
        code: 'ASTM B564 UNS N06600, N06625, N07718, N08825',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        uns: 'UNS N06600 / N06625 / N07718',
        din: '2.4816 / 2.4856 / 2.4668',
        shortDesc: 'High-strength Nickel-Chromium superalloy flanges for extreme subsea and high-temperature service.',
        fullDesc: 'Precision closed-die forged Inconel flanges providing virtual immunity to chloride stress corrosion cracking, superior resistance to reducing and oxidizing mineral acids, and exceptional tensile strength in aerospace, subsea, and nuclear loops.',
        specs: { size: '1/2" to 24" NB', pressureClass: '150# to 2500# (RTJ & RF)', facing: 'RF, RTJ' },
        applications: ['Subsea wellhead manifolds and riser tie-ins', 'Sour gas production pipelines (NACE MR0175)', 'Nuclear reactor control rod & coolant piping', 'Chemical processing reactors and flaring systems']
      }
    ]
  },
  {
    id: 'monel-flanges',
    slug: 'monel-flanges',
    name: 'Monel Flanges',
    title: 'Monel Flanges',
    image: img_monel_flanges,
    standards: 'ASTM B564 / ASME SB564, ASME B16.5, MSS SP-44',
    sizeRange: '1/2" NB to 20" NB (Class 150# to 1500#)',
    facingTypes: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Slip-On Flanges (SORF)',
      'Blind Flanges (BLRF)',
      'Lap Joint Flanges'
    ],
    shortDesc: 'Nickel-Copper alloy forged flanges providing extraordinary resistance to rapidly flowing seawater, marine biofouling, and hydrofluoric acid alkylation media.',
    grades: [
      {
        id: 'monel-flanges-general',
        slug: 'monel-flanges',
        name: 'Monel Flanges',
        code: 'ASTM B564 UNS N04400 (Monel 400) / N05500 (K500)',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        uns: 'UNS N04400 / UNS N05500',
        din: '2.4360 / 2.4375',
        shortDesc: 'Solid-solution Nickel-Copper forged flanges engineered for marine and HF acid environments.',
        fullDesc: 'Forged Monel 400 and age-hardened Monel K500 pipe flanges exhibiting zero cavitation damage and exceptional corrosion resistance in high-velocity seawater, brackish brine, and hydrofluoric acid alkylation units.',
        specs: { size: '1/2" to 20" NB', pressureClass: 'Class 150# to 1500#', facing: 'Raised Face, Flat Face' },
        applications: ['HF acid alkylation units in oil refineries', 'Marine salt extraction and desalination loops', 'Subsea offshore splash zone piping', 'Propeller shafting fluid sleeves & marine fittings']
      }
    ]
  },
  {
    id: 'hastelloy-flanges',
    slug: 'hastelloy-flanges',
    name: 'Hastelloy Flanges',
    title: 'Hastelloy Flanges',
    image: img_hastelloy_flanges,
    standards: 'ASTM B564 / ASME SB564, ASME B16.5, DIN EN 1092-1',
    sizeRange: '1/2" NB to 20" NB (Class 150# to 1500#)',
    facingTypes: 'Raised Face (RF), Ring Type Joint (RTJ)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)',
      'Socket Weld Flanges (SWRF)'
    ],
    shortDesc: 'Nickel-Chromium-Molybdenum superalloy forged flanges delivering unmatched resistance to pitting, crevice corrosion, hot mineral acids, and wet chlorine gas.',
    grades: [
      {
        id: 'hastelloy-flanges-general',
        slug: 'hastelloy-flanges',
        name: 'Hastelloy Flanges',
        code: 'ASTM B564 UNS N10276 (C276) / N06022 (C22)',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        uns: 'UNS N10276 / UNS N06022',
        din: '2.4819 / 2.4602',
        shortDesc: 'Premier corrosion-resistant superalloy flanges for aggressive chemical and wet chlorine systems.',
        fullDesc: 'Hastelloy C276 and C22 forged flanges formulated with high molybdenum and tungsten content. Prevents intergranular precipitate formation in weld heat-affected zones and provides supreme resistance to strong oxidizers and mineral acids.',
        specs: { size: '1/2" to 20" NB', pressureClass: 'Class 150# to 1500#', facing: 'RF, RTJ' },
        applications: ['Flue-gas desulfurization (FGD) scrubber systems', 'Waste incineration chemical recovery piping', 'Pharmaceutical active ingredient processing', 'Pesticide and herbicide acid delivery loops']
      }
    ]
  },
  {
    id: 'nickel-flanges',
    slug: 'nickel-flanges',
    name: 'Nickel Flanges',
    title: 'Nickel Flanges',
    image: img_nickel_flanges,
    standards: 'ASTM B564 / ASME SB564, ASME B16.5',
    sizeRange: '1/2" NB to 18" NB (Class 150# to 900#)',
    facingTypes: 'Raised Face (RF), Flat Face (FF)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)'
    ],
    shortDesc: 'Commercially pure nickel forged flanges delivering exceptional resistance to reducing chemicals, caustic alkalis, and molten caustic soda up to high concentrations.',
    grades: [
      {
        id: 'nickel-flanges-general',
        slug: 'nickel-flanges',
        name: 'Nickel Flanges',
        code: 'ASTM B564 UNS N02200 (Nickel 200) / N02201 (Nickel 201)',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        uns: 'UNS N02200 / UNS N02201',
        din: '2.4066 / 2.4068',
        shortDesc: 'Commercially pure wrought nickel flanges offering exceptional resistance to caustic alkalis.',
        fullDesc: 'Commercially pure nickel forged flanges delivering extraordinary resistance to hot concentrated sodium hydroxide (caustic soda) solutions, anhydrous ammonia, and non-oxidizing halide acids. Nickel 201 eliminates graphitization above 315°C.',
        specs: { size: '1/2" to 18" NB', pressureClass: 'Class 150# to 600#', facing: 'RF, FF' },
        applications: ['Caustic soda evaporator manifolds', 'Chlor-alkali plant fluid transfer', 'Synthetic fiber and soap manufacturing', 'Fluorine and hydrogen chloride handling lines']
      }
    ]
  },
  {
    id: 'copper-nickel-flanges',
    slug: 'copper-nickel-flanges',
    name: 'Copper Nickel Flanges',
    title: 'Copper Nickel Flanges',
    image: img_cu_ni_flanges,
    standards: 'ASME B16.5, DIN 86037, EEMUA 145, BS 4504',
    sizeRange: '1/2" NB to 24" NB (10 Bar, 14 Bar, 16 Bar, 20 Bar & Class 150#)',
    facingTypes: 'Composite Collar Flange, Flat Face (FF), Raised Face (RF)',
    availableForms: [
      'Slip-On Loose Backing Flanges',
      'Composite Weld Neck Flanges',
      'Blind Flanges',
      'Plate Flanges'
    ],
    shortDesc: 'Cupro-Nickel forged and composite flanges delivering superior resistance to marine biofouling, macro-algae attachment, impingement attack, and stress corrosion in high-salinity seawater systems.',
    grades: [
      {
        id: 'copper-nickel-flanges-general',
        slug: 'copper-nickel-flanges',
        name: 'Copper Nickel Flanges',
        code: 'Cu-Ni 90/10 (UNS C70600) & Cu-Ni 70/30 (UNS C71500)',
        standard: 'DIN 86037, EEMUA 145, ASME B16.5',
        uns: 'UNS C70600 / UNS C71500',
        din: '2.0872 / 2.0882',
        shortDesc: 'Marine-grade 90/10 and 70/30 cupro-nickel flanges for naval shipbuilding and offshore water lines.',
        fullDesc: 'Engineered specifically for naval shipbuilding, offshore oil platforms, and desalination facilities. CuNi 90/10 and CuNi 70/30 flanges form an adherent protective copper oxide passivation layer providing natural antifouling and erosion-corrosion resistance.',
        specs: { size: '1/2" to 24" NB', pressureClass: '10 Bar, 14 Bar, 16 Bar, 20 Bar (Class 150#)', facing: 'Composite Collar & Loose Flange' },
        applications: ['Seawater cooling systems in naval vessels', 'Multi-stage flash desalination plants', 'Offshore firewater ring mains', 'Commercial ship ballast and bilge piping']
      }
    ]
  },
  {
    id: 'titanium-flanges',
    slug: 'titanium-flanges',
    name: 'Titanium Flanges',
    title: 'Titanium Flanges',
    image: img_titanium_flanges,
    standards: 'ASTM B381 / ASME SB381, ASME B16.5, EN 1092-1',
    sizeRange: '1/2" NB to 24" NB (Class 150# to 1500#)',
    facingTypes: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)',
    availableForms: [
      'Weld Neck Flanges (WNRF)',
      'Blind Flanges (BLRF)',
      'Slip-On Flanges (SORF)',
      'Lap Joint Flanges with Titanium Stub Ends'
    ],
    shortDesc: 'Ultra-lightweight, high-strength titanium forged flanges delivering permanent immunity to raw seawater corrosion, chlor-alkali brine, wet chlorine, and organic acid environments.',
    grades: [
      {
        id: 'titanium-flanges-general',
        slug: 'titanium-flanges',
        name: 'Titanium Flanges',
        code: 'ASTM B381 Grade 1, Grade 2, Grade 5, Grade 7',
        standard: 'ASTM B381, ASME SB381, ASME B16.5',
        uns: 'UNS R50250 / UNS R50400 / UNS R56400 / UNS R52400',
        din: '3.7025 / 3.7035 / 3.7165 / 3.7235',
        shortDesc: 'Commercially pure and palladium-stabilized titanium forged flanges offering absolute resistance to chloride corrosion.',
        fullDesc: 'ASTM B381 Titanium Grade 2 (unalloyed CP) and Grade 7 (0.15% Palladium) forged flanges providing extraordinary strength-to-weight ratio and self-healing titanium dioxide (TiO2) oxide film that remains completely impervious to aerated seawater, bleaching oxidizers, and boiling nitric acid.',
        specs: { size: '1/2" to 24" NB', pressureClass: 'Class 150# to 1500#', facing: 'RF, RTJ' },
        applications: ['Seawater intake loops on offshore platforms', 'Chlor-alkali and chlorine dioxide bleaching', 'Desalination high-pressure reverse osmosis loops', 'Aerospace and marine defense cooling manifolds']
      }
    ]
  }
];

export function getFlangesCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return (
    FLANGES_CATEGORIES.find(
      cat =>
        cat.slug === clean ||
        cat.id === clean ||
        cat.slug.replace(/-flanges$/, '') === clean ||
        cat.id.replace(/-flanges$/, '') === clean ||
        clean.replace(/-flanges$/, '') === cat.slug.replace(/-flanges$/, '')
    ) || null
  );
}

export function getFlangesGradeBySlug(catSlug, gradeSlug) {
  const cat = getFlangesCategoryBySlug(catSlug);
  if (!cat) return null;
  if (!gradeSlug) return cat.grades[0] || null;
  const clean = gradeSlug.toLowerCase().trim();

  // 1. Direct match on slug or id
  const direct = cat.grades.find(g => g.slug === clean || g.id === clean);
  if (direct) return direct;

  // 2. Normalize and check partial/code matches
  const matched = cat.grades.find(g => {
    const s = g.slug.toLowerCase();
    const n = g.name.toLowerCase();
    const c = (g.code || '').toLowerCase();
    const cleanNoFlange = clean.replace(/-flanges$/, '');
    return (
      s === cleanNoFlange ||
      s.includes(cleanNoFlange) ||
      cleanNoFlange.includes(s.replace(/-flanges$/, '')) ||
      n.includes(clean) ||
      c.includes(clean)
    );
  });

  return matched || cat.grades[0] || null;
}

