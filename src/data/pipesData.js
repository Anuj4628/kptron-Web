/**
 * Dedicated Pipes Product Catalog & Verified Grades Data
 * Source of truth for KPTRON Pipes Division.
 * Only genuine technical standards, ASTM/ASME specifications, and verified industrial applications.
 */

import img_alloy_pipe from '../assets/New Product img/Pipes/alloy-steel-pipes.jpg';
import img_inconel_pipe from '../assets/New Product img/Pipes/inconel-pipes.jpg';
import img_monel_pipe from '../assets/New Product img/Pipes/monel-pipes.jpg';
import img_stainless_pipe from '../assets/New Product img/Pipes/stainless steel pipes.jpg';
import img_duplex_pipe from '../assets/New Product img/Pipes/duplex-steel-pipes.jpg';
import img_carbon_pipe from '../assets/New Product img/Pipes/carbon.jpg';
import img_hastelloy_pipe from '../assets/New Product img/Pipes/hastelloy-pipes.jpg';
import img_nickel_pipe from '../assets/New Product img/Pipes/nickel-pipes.jpg';
import img_copper_nickel_pipe from '../assets/New Product img/Pipes/copper-nickel-pipes.jpg';
import img_titanium_pipe from '../assets/New Product img/Pipes/titanium-pipes.jpg';
import img_is_grades_pipe from '../assets/New Product img/Pipes/is-grades-pipes.jpg';
import img_api_5l_pipe from '../assets/New Product img/Pipes/api-5l-pipes.jpg';
import img_en_standards_pipe from '../assets/New Product img/Pipes/en-standards-pipes.jpg';
import img_aluminum_pipe from '../assets/New Product img/Pipes/aluminium-pipes.jpg';

export const PIPE_CATEGORIES = [
  {
    id: 'alloy-steel-pipe',
    slug: 'alloy-steel-pipe',
    aliases: ['alloy-steel', 'seamless-alloy-steel-pipes-a335', 'a335-pipes'],
    name: 'Alloy Steel Pipe',
    headline: 'High-Temperature Chrome-Moly Seamless Line Pipes & Boiler Tubes',
    image: img_alloy_pipe,
    shortDesc: 'Ferritic chrome-moly alloy steel seamless pipes formulated with chromium and molybdenum for high creep-rupture strength, graphitization resistance, and elevated-temperature thermal stability in utility boilers, power stations, and refineries.',
    standards: 'ASTM A335 / ASME SA335, ASTM A691, ASTM A334, ASTM A213, EN 10216-2, DIN 17175',
    sizeRange: '1/8" NB to 36" NB (Seamless up to 24", Forged/EFW up to 48" OD)',
    schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS (1.73mm to 120mm Wall Thickness)',
    availableForms: ['Seamless Pipe', 'Heavy Wall Boiler Tube', 'Superheater Tube', 'Fabricated Spool'],
    grades: [
      {
        id: 'astm-a335-p1',
        slug: 'astm-a335-p1',
        name: 'ASTM A335 P1 Seamless Pipe',
        code: 'ASTM A335 Gr. P1',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K11522',
        din: '1.5415 (16Mo3)',
        shortDesc: '0.5% Molybdenum ferritic alloy steel seamless pipe for moderate high-temperature service in boilers and power piping.',
        fullDesc: 'ASTM A335 Grade P1 is a carbon-molybdenum alloy steel seamless pipe designed for high-temperature pressure applications. The addition of molybdenum increases creep strength and resistance to softening at elevated temperatures.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Plain End / Beveled End' },
        applications: ['Power station steam piping', 'Boiler feed water lines', 'Heat exchanger process piping', 'General high-temperature industrial steam service']
      },
      {
        id: 'astm-a335-p5',
        slug: 'astm-a335-p5',
        name: 'ASTM A335 P5 Seamless Pipe',
        code: 'ASTM A335 Gr. P5',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        shortDesc: '5% Chromium, 0.5% Molybdenum alloy steel seamless pipe offering superior oxidation and sulfidation resistance in oil refineries.',
        fullDesc: 'ASTM A335 P5 is an intermediate chrome-moly alloy steel pipe with 5% Chromium providing robust corrosion and oxidation resistance in sulfur-bearing petroleum refining environments up to 600°C.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Petroleum refinery furnace coils', 'Delayed coker units', 'Hydrocracker hot process piping', 'High-temperature oil refinery transfer lines']
      },
      {
        id: 'astm-a335-p9',
        slug: 'astm-a335-p9',
        name: 'ASTM A335 P9 Seamless Pipe',
        code: 'ASTM A335 Gr. P9',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K90941',
        din: '1.7386 (X11CrMo9-1)',
        shortDesc: '9% Chromium, 1% Molybdenum seamless alloy steel pipe for severe catalytic cracking and petrochemical reactors.',
        fullDesc: 'ASTM A335 Grade P9 delivers elevated resistance to oxidation, hot hydrogen attack, and corrosion from high-sulfur hydrocarbons in thermal cracking installations.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Plain / Beveled' },
        applications: ['Fluid catalytic cracking (FCC) units', 'Hydrotreating lines', 'Sulfur recovery units', 'Petrochemical cracking coils']
      },
      {
        id: 'astm-a335-p11',
        slug: 'astm-a335-p11',
        name: 'ASTM A335 P11 Seamless Pipe',
        code: 'ASTM A335 Gr. P11',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K11597',
        din: '1.7335 (13CrMo4-5)',
        shortDesc: '1.25% Chromium, 0.5% Molybdenum alloy steel pipe, the industry benchmark for utility power plant superheaters and steam lines.',
        fullDesc: 'ASTM A335 Grade P11 is the most widely specified low-alloy chrome-moly piping material. It offers exceptional cost-to-performance ratio for steam temperatures up to 560°C.',
        specs: { size: '1/8" to 36" NB', schedule: 'SCH 40, SCH 80, SCH 160, SCH XXS', ends: 'Beveled Ends (37.5°)' },
        applications: ['Thermal power station main steam headers', 'Boiler superheater and reheater coils', 'Petrochemical high-pressure lines', 'Industrial cogeneration plants']
      },
      {
        id: 'astm-a335-p12',
        slug: 'astm-a335-p12',
        name: 'ASTM A335 P12 Seamless Pipe',
        code: 'ASTM A335 Gr. P12',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K11562',
        din: '1.7337 (16CrMo4-4)',
        shortDesc: '1% Chromium, 0.5% Molybdenum seamless ferritic alloy pipe engineered for high-temperature steam distribution.',
        fullDesc: 'ASTM A335 P12 combines 1% Chromium and 0.5% Molybdenum to prevent graphitization and provide dependable creep strength at continuous steam operating temperatures.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled / Plain' },
        applications: ['District heating steam piping', 'Boiler economizer connections', 'Chemical process high-pressure steam distribution']
      },
      {
        id: 'astm-a335-p22',
        slug: 'astm-a335-p22',
        name: 'ASTM A335 P22 Seamless Pipe',
        code: 'ASTM A335 Gr. P22',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        shortDesc: '2.25% Chromium, 1% Molybdenum seamless alloy pipe for supercritical boiler steam lines operating up to 580°C.',
        fullDesc: 'ASTM A335 Grade P22 is engineered specifically for elevated temperature and pressure service. The 2.25% Chromium and 1% Molybdenum combination delivers reliable creep-rupture performance and hydrogen embrittlement resistance.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled Ends' },
        applications: ['Superheated steam lines', 'Power generation reheater headers', 'Hydrocracker and reformer piping', 'High-pressure chemical synthesizers']
      },
      {
        id: 'astm-a335-p91',
        slug: 'astm-a335-p91',
        name: 'ASTM A335 P91 Seamless Pipe',
        code: 'ASTM A335 Gr. P91 (CSEF)',
        standard: 'ASTM A335 / ASME SA335',
        uns: 'UNS K91560',
        din: '1.4903 (X10CrMoVNb9-1)',
        shortDesc: 'Creep Strength Enhanced Ferritic (9Cr-1Mo-V-Nb) alloy steel pipe for modern ultra-supercritical thermal power boilers up to 650°C.',
        fullDesc: 'ASTM A335 Grade P91 provides nearly double the allowable stress of P22 at elevated temperatures. Micro-alloyed with Vanadium and Niobium, it allows substantially thinner wall thicknesses and superior thermal fatigue resistance.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled Ends' },
        applications: ['Ultra-supercritical power plant main steam lines', 'High-pressure boiler headers', 'Steam turbine bypass systems', 'Combined-cycle power plant HRSG lines']
      },
      {
        id: 'astm-a691-pipe',
        slug: 'astm-a691-pipe',
        name: 'ASTM A691 Electric-Fusion Welded Pipe',
        code: 'ASTM A691 EFW Pipe',
        standard: 'ASTM A691 / ASME SA691',
        uns: 'Various Alloy Grades',
        din: 'EN 10217-2 Equivalent',
        shortDesc: 'Large diameter electric-fusion-welded carbon and alloy steel pipe for high-pressure service at elevated temperatures.',
        fullDesc: 'ASTM A691 covers heavy-wall electric-fusion-welded (EFW) pipe fabricated from pressure vessel quality plate. Available in Grade 1/2Cr, 1Cr, 1 1/4Cr, 2 1/4Cr, 5Cr, 9Cr, and 91.',
        specs: { size: '16" NB to 64" NB', schedule: 'Heavy Wall (10mm to 75mm)', ends: 'Beveled Ends' },
        applications: ['Large diameter steam distribution headers', 'Refinery high-temperature flare and reactor lines', 'Power plant balance-of-plant piping']
      },
      {
        id: '16mo3-pipe',
        slug: '16mo3-pipe',
        name: '16Mo3 European Standard Pipe',
        code: 'EN 10216-2 16Mo3',
        standard: 'EN 10216-2 / DIN 17175',
        uns: '1.5415',
        din: '16Mo3 / 15Mo3',
        shortDesc: 'European standard molybdenum alloy steel seamless pipe for boilers, heat exchangers, and elevated temperature vessels.',
        fullDesc: '16Mo3 is an EN 10216-2 specified pressure vessel grade alloy pipe formulated with 0.3% Molybdenum for steam boilers and industrial heating systems operating up to 500°C.',
        specs: { size: '21.3 mm to 610 mm OD', schedule: 'Standard to Heavy Wall', ends: 'Plain / Beveled' },
        applications: ['Industrial steam boilers', 'District heating infrastructure', 'Heat exchanger coils', 'Power generation headers']
      },
      {
        id: 'astm-a334-gr-6',
        slug: 'astm-a334-gr-6',
        name: 'ASTM A334 Grade 6 Low-Temp Pipe',
        code: 'ASTM A334 Gr. 6',
        standard: 'ASTM A334 / ASME SA334',
        uns: 'UNS K03006',
        din: '1.0456',
        shortDesc: 'Seamless and welded carbon-alloy steel pipe and tube engineered for low-temperature service down to -45°C.',
        fullDesc: 'ASTM A334 Grade 6 covers seamless and welded carbon and alloy steel tubes intended for use at low temperatures, with mandatory Charpy V-notch impact testing at -45°C.',
        specs: { size: '1/2" to 6" OD', schedule: 'Standard Wall', ends: 'Plain Ends' },
        applications: ['Cryogenic fluid transfer', 'Refrigeration piping', 'Low-temperature gas processing plants', 'Offshore cold service lines']
      },
      {
        id: 'chromoly-pipe',
        slug: 'chromoly-pipe',
        name: 'Chromoly Industrial Piping',
        code: 'Cr-Mo Commercial Alloy',
        standard: 'ASTM A335 / DIN 17175',
        uns: 'Chrome-Moly Series',
        din: 'Cr-Mo Commercial',
        shortDesc: 'General commercial chromium-molybdenum alloy steel pipe known for exceptional strength-to-weight ratio and heat endurance.',
        fullDesc: 'Chromoly pipes offer superior tensile and yield strength compared to standard carbon steel, combined with good ductility and high resistance to oxidation at high temperatures.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH 160', ends: 'Plain / Beveled' },
        applications: ['High-stress structural tubular frames', 'Industrial processing headers', 'Elevated temperature steam and flue lines']
      },
      {
        id: '12cr1mov-pipe',
        slug: '12cr1mov-pipe',
        name: '12Cr1MoV High-Temp Alloy Pipe',
        code: '12Cr1MoV Boiler Pipe',
        standard: 'GB/T 5310 / GOST 12Kh1MF',
        uns: '12Cr1MoV Series',
        din: '1.7715 (14MoV6-3 Equivalent)',
        shortDesc: 'Chromium-molybdenum-vanadium heat-resistant pearlitic steel pipe for high-temperature superheater steam lines.',
        fullDesc: '12Cr1MoV is an advanced pearlite-type heat-resistant steel pipe featuring vanadium addition for high thermal strength and oxidation resistance up to 580°C.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled Ends' },
        applications: ['Boiler superheater steam pipes', 'High-pressure steam headers', 'Power plant steam turbine bypass lines']
      }
    ]
  },
  {
    id: 'inconel-pipe',
    slug: 'inconel-pipe',
    aliases: ['inconel', 'incoloy', 'inconel-products'],
    name: 'Inconel Pipe',
    headline: 'High-Nickel Superalloy Seamless Pipes for Extreme Temperature & Sour Gas',
    image: img_inconel_pipe,
    shortDesc: 'Solid-solution and age-hardenable nickel-chromium superalloy seamless pipes delivering remarkable mechanical strength, oxidation resistance up to 1150°C, and total immunity to chloride stress corrosion cracking in severe subsea, aerospace, and sour gas environments.',
    standards: 'ASTM B444, ASTM B167, ASTM B407, ASTM B705, ASME SB444, NACE MR0175 / ISO 15156',
    sizeRange: '1/4" NB to 16" NB (Cold Drawn Seamless)',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: ['Cold Drawn Seamless Pipe', 'Heat Exchanger Tubing', 'High Pressure Flowlines', 'Instrument Tubing'],
    grades: [
      {
        id: 'inconel-600-pipe',
        slug: 'inconel-600-pipe',
        name: 'Inconel 600 Pipe',
        code: 'ASTM B167 Inconel 600',
        standard: 'ASTM B167 / ASME SB167',
        uns: 'UNS N06600',
        din: '2.4816 (NiCr15Fe)',
        shortDesc: '72% Nickel alloy seamless pipe providing supreme resistance to chloride stress corrosion cracking and oxidation up to 1150°C.',
        fullDesc: 'Inconel 600 is a nickel-chromium-iron solid solution alloy. The high nickel content provides virtual immunity to chloride-ion stress corrosion cracking and caustic solutions, while chromium provides resistance to sulfur compounds and oxidizing environments at extreme temperatures.',
        specs: { size: '1/4" to 12" NB', schedule: 'SCH 10S to SCH 160', ends: 'Plain / Beveled' },
        applications: ['Nuclear steam generator tubing', 'Industrial furnace thermocouple sheaths', 'Caustic soda evaporator heater tubes', 'Vinyl chloride monomer (VCM) production piping']
      },
      {
        id: 'inconel-601-pipe',
        slug: 'inconel-601-pipe',
        name: 'Inconel 601 Pipe',
        code: 'ASTM B167 Inconel 601',
        standard: 'ASTM B167 / ASME SB167',
        uns: 'UNS N06601',
        din: '2.4851 (NiCr23Fe)',
        shortDesc: 'Aluminum-bearing nickel-chromium alloy pipe engineered for outstanding resistance to high-temperature oxidation up to 1250°C.',
        fullDesc: 'Inconel 601 features an addition of aluminum that forms an extremely adherent protective oxide layer. It demonstrates outstanding resistance to thermal cyclic oxidation, carburization, and combustion gases.',
        specs: { size: '1/2" to 10" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Thermal oxidizers and incineration systems', 'Petrochemical reformer tubes', 'Furnace radiant coils and muffles', 'Exhaust gas heat recovery manifolds']
      },
      {
        id: 'inconel-625-pipe',
        slug: 'inconel-625-pipe',
        name: 'Inconel 625 Pipe',
        code: 'ASTM B444 Inconel 625',
        standard: 'ASTM B444 / ASME SB444',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        shortDesc: 'High-strength nickel-chromium-molybdenum-niobium seamless pipe for severe deepwater subsea flowlines and sour chemical processing.',
        fullDesc: 'Inconel 625 achieves high tensile strength from the stiffening effects of molybdenum and niobium on its nickel-chromium matrix. Exhibits total immunity to marine pitting, crevice corrosion, and wet H2S cracking without heat treatment.',
        specs: { size: '1/2" to 16" NB', schedule: 'SCH 10S, 40S, 80S, 160, XXS', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Subsea wellhead flowlines and risers', 'Offshore flare gas headers', 'Sour gas (H2S / CO2) production pipelines', 'Nuclear reactor coolant loops']
      },
      {
        id: 'inconel-718-pipe',
        slug: 'inconel-718-pipe',
        name: 'Inconel 718 Pipe',
        code: 'AMS 5589 / ASTM B983 Inconel 718',
        standard: 'ASTM B983 / ASME SB983',
        uns: 'UNS N07718',
        din: '2.4668 (NiCr19Fe19Nb5Mo3)',
        shortDesc: 'Precipitation-hardenable nickel-chromium superalloy pipe providing extreme yield strength and creep rupture resistance up to 700°C.',
        fullDesc: 'Inconel 718 combines high strength with excellent weldability and post-weld crack resistance. Widely utilized in high-pressure oil and gas downhole tools, subsea components, and aerospace gas turbines.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 40S, 80S, 160', ends: 'Precision Plain Cut' },
        applications: ['High-pressure downhole oil tools', 'Gas turbine fuel manifolds', 'Aerospace rocket propulsion lines', 'Subsea completion casing']
      },
      {
        id: 'incoloy-800-800h-800ht-pipe',
        slug: 'incoloy-800-800h-800ht-pipe',
        name: 'Incoloy 800 / 800H / 800HT Pipe',
        code: 'ASTM B407 Incoloy 800 Series',
        standard: 'ASTM B407 / ASME SB407',
        uns: 'UNS N08800 / N08810 / N08811',
        din: '1.4876 (X10NiCrAlTi32-20)',
        shortDesc: 'Nickel-iron-chromium alloy seamless pipes designed for thermal stability, carburization resistance, and creep rupture strength above 600°C.',
        fullDesc: 'Incoloy 800H and 800HT have controlled carbon, aluminum, and titanium levels to provide enhanced creep and stress-rupture properties in petrochemical pyrolysis furnaces and steam/hydrocarbon reforming.',
        specs: { size: '1/2" to 14" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Ethylene furnace pigtails and headers', 'Steam methane reforming reformer tubes', 'Thermal power plant superheaters', 'Hydrocarbon processing furnace piping']
      },
      {
        id: 'incoloy-825-pipe',
        slug: 'incoloy-825-pipe',
        name: 'Incoloy 825 Pipe',
        code: 'ASTM B423 Incoloy 825',
        standard: 'ASTM B423 / ASME SB423',
        uns: 'UNS N08825',
        din: '2.4858 (NiCr21Mo)',
        shortDesc: 'Titanium-stabilized nickel-iron-chromium-molybdenum-copper alloy pipe offering exceptional resistance to sulfuric and phosphoric acids.',
        fullDesc: 'Incoloy 825 contains molybdenum, copper, and titanium additions that confer outstanding resistance to reducing and oxidizing acids, pitting, crevice corrosion, and intergranular corrosion in oilfield and chemical environments.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['Sulfuric acid piping and heating coils', 'Oil and gas sour gas well piping', 'Phosphoric acid evaporator tubes', 'Nuclear fuel reprocessing lines']
      }
    ]
  },
  {
    id: 'monel-pipe',
    slug: 'monel-pipe',
    aliases: ['monel', 'monel-products'],
    name: 'Monel Pipe',
    headline: 'Nickel-Copper Alloy Seamless Piping for Marine & Hydrofluoric Acid Service',
    image: img_monel_pipe,
    shortDesc: 'Solid-solution nickel-copper alloy seamless pipes offering supreme resistance to rapidly flowing seawater, cavitation erosion, marine bio-fouling, and non-oxidizing acids including hydrofluoric (HF) acid across all concentrations.',
    standards: 'ASTM B165 / ASME SB165, ASTM B725, NACE MR0175 / ISO 15156, DIN 17751',
    sizeRange: '1/2" NB to 12" NB (Cold Drawn Seamless)',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
    availableForms: ['Seamless Marine Pipe', 'Heat Exchanger Tubes', 'Seawater Cooling Lines', 'Instrument Tubing'],
    grades: [
      {
        id: 'monel-400-pipe',
        slug: 'monel-400-pipe',
        name: 'Monel 400 Pipe',
        code: 'ASTM B165 Monel 400',
        standard: 'ASTM B165 / ASME SB165',
        uns: 'UNS N04400',
        din: '2.4360 (NiCu30Fe)',
        shortDesc: '67% Nickel, 30% Copper alloy seamless pipe delivering exceptional resistance to seawater, hydrofluoric acid, and de-aerated acids.',
        fullDesc: 'Monel 400 is a single-phase solid-solution alloy offering excellent mechanical properties from sub-zero temperatures up to 480°C. Virtually immune to chloride stress corrosion cracking in marine and estuarine environments.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S, 40S, 80S, 160', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Petroleum refinery hydrofluoric (HF) alkylation units', 'Marine seawater cooling piping and boiler feed lines', 'Subsea splash-zone riser sheathing', 'Chemical plant salt evaporators and brine heaters']
      },
      {
        id: 'monel-k500-pipe',
        slug: 'monel-k500-pipe',
        name: 'Monel K500 Pipe',
        code: 'ASTM B865 / AMS 4676 Monel K500',
        standard: 'ASTM B865 / QQ-N-286',
        uns: 'UNS N05500',
        din: '2.4375 (NiCu30Al)',
        shortDesc: 'Precipitation-hardened nickel-copper alloy pipe combining the corrosion resistance of Monel 400 with triple the yield strength.',
        fullDesc: 'Monel K500 has additions of aluminum and titanium that precipitate sub-microscopic gamma prime particles during heat treatment, delivering high hardness and tensile strength while remaining non-magnetic down to -100°C.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 40S to SCH 160', ends: 'Plain Cut / Beveled' },
        applications: ['Marine pump shafts and seawater impellers', 'Oil well drill collars and downhole instrument sleeves', 'Safety springs and valves in sour gas service', 'Non-magnetic naval marine piping']
      }
    ]
  },
  {
    id: 'stainless-steel-pipe',
    slug: 'stainless-steel-pipe',
    aliases: ['stainless-steel', 'ss-pipe'],
    name: 'Stainless Steel Pipe',
    headline: 'Austenitic & Martensitic Stainless Steel Seamless & Welded Industrial Piping',
    image: img_stainless_pipe,
    shortDesc: 'Comprehensive range of premium austenitic, heat-resistant, and super austenitic stainless steel pipes and tubes manufactured to ASTM A312, ASTM A358, and EN standards for chemical processing, oil & gas, pharmaceuticals, and cryogenic services.',
    standards: 'ASTM A312 / ASME SA312, ASTM A358, ASTM A269, ASTM A213, EN 10217-7, DIN 17456',
    sizeRange: '1/8" NB to 36" NB (Seamless up to 24", ERW/EFW up to 48")',
    schedules: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: ['Seamless Pipe', 'Welded (ERW / EFW) Pipe', 'Square & Rectangular Pipe', 'Heat Exchanger Tubing'],
    grades: [
      {
        id: 'ss-pipe',
        slug: 'ss-pipe',
        name: 'SS Pipe (Standard / Commercial)',
        code: 'ASTM A312 SS Commercial',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S30400 / S31600 Series',
        din: '1.4301 / 1.4404',
        shortDesc: 'Universal austenitic stainless steel piping for general fluid transfer, municipal distribution, and processing lines.',
        fullDesc: 'Standard commercial stainless steel piping supplied in seamless and welded configurations, delivering reliable corrosion resistance, excellent weldability, and structural endurance.',
        specs: { size: '1/8" to 36" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Plain / Beveled' },
        applications: ['General chemical transfer lines', 'Water treatment and distribution', 'Building services and HVAC piping', 'Food and beverage fluid lines']
      },
      {
        id: 'ss-304-304l-pipe',
        slug: 'ss-304-304l-pipe',
        name: 'SS 304 / 304L Pipe',
        code: 'ASTM A312 TP304 / TP304L',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S30400 / S30403',
        din: '1.4301 / 1.4306',
        shortDesc: 'Dual-certified 18/8 austenitic stainless steel pipe with low carbon content preventing carbide precipitation during welding.',
        fullDesc: 'SS 304/304L is the most versatile and widely utilized stainless steel piping material. Offers excellent formability, high toughness at cryogenic temperatures, and dependable corrosion resistance in atmospheric and mildly corrosive industrial environments.',
        specs: { size: '1/8" to 36" NB', schedule: 'SCH 5S to SCH XXS', ends: 'Plain / Beveled (ASME B16.25)' },
        applications: ['Dairy, brewery, and food processing lines', 'Architectural and cryogenic piping', 'Pharmaceutical process transfer', 'Potable water filtration networks']
      },
      {
        id: 'ss-304-seamless-pipe',
        slug: 'ss-304-seamless-pipe',
        name: 'SS 304 Seamless Pipe',
        code: 'ASTM A312 TP304 Seamless',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S30400',
        din: '1.4301 Seamless',
        shortDesc: 'Seamless extruded 304 stainless steel pipe providing high burst pressure integrity without longitudinal weld seams.',
        fullDesc: 'Cold drawn and annealed seamless 304 pipe manufactured from hot pierced solid billets. Eliminates weld-decay risks and delivers uniform radial strength for high-pressure fluid installations.',
        specs: { size: '1/8" to 24" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['High-pressure hydraulic pipelines', 'Cryogenic industrial gas lines', 'Refinery steam tracing lines', 'Chemical reactor feed loops']
      },
      {
        id: 'ss-310-310s-pipe',
        slug: 'ss-310-310s-pipe',
        name: 'SS 310 / 310S Pipe',
        code: 'ASTM A312 TP310 / TP310S',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S31000 / S31008',
        din: '1.4845 (X8CrNi25-21)',
        shortDesc: '25% Chromium, 20% Nickel high-temperature austenitic pipe resistant to oxidation, sulfidation, and carburization up to 1150°C.',
        fullDesc: 'SS 310/310S combines high creep strength with superior resistance to scaling and oxidation in continuous service up to 1150°C. Ideal for industrial furnaces and thermal treatment piping.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Thermal power boiler tube shields', 'Kiln and furnace burner pipes', 'Fluidized bed coal combustor tubes', 'Petrochemical flare tips and radiant coils']
      },
      {
        id: 'ss-316-316l-316h-pipe',
        slug: 'ss-316-316l-316h-pipe',
        name: 'SS 316 / 316L / 316H Pipe',
        code: 'ASTM A312 TP316 / TP316L / TP316H',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S31600 / S31603 / S31609',
        din: '1.4401 / 1.4404',
        shortDesc: 'Molybdenum-bearing (2.0-3.0% Mo) austenitic pipe providing superior resistance to chlorides, pitting, and marine environments.',
        fullDesc: 'SS 316/316L contains 2-3% Molybdenum, conferring substantial resistance to pitting and crevice corrosion in chloride and acidic environments. 316H variant features controlled carbon for elevated creep strength at high temperatures.',
        specs: { size: '1/8" to 36" NB', schedule: 'SCH 5S to SCH XXS', ends: 'Beveled / Plain' },
        applications: ['Offshore oil and gas process piping', 'Marine coastal piping installations', 'Pharmaceutical and biotechnology fluid lines', 'Sulfuric and acetic acid transfer conduits']
      },
      {
        id: 'ss-316-seamless-pipe',
        slug: 'ss-316-seamless-pipe',
        name: 'SS 316 Seamless Pipe',
        code: 'ASTM A312 TP316 Seamless',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S31600 Seamless',
        din: '1.4401 Seamless',
        shortDesc: 'Cold drawn seamless 316 stainless pipe engineered for high-pressure marine, chemical, and subsea hydraulic operations.',
        fullDesc: 'Extruded seamless 316 pipe providing seamless integrity with zero heat-affected zone weld seams. Tested 100% by eddy current and hydrostatic inspection.',
        specs: { size: '1/8" to 24" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['Subsea control lines', 'High-pressure marine fuel lines', 'Chemical synthesis autoclaves', 'Reverse osmosis desalination high-pressure headers']
      },
      {
        id: 'ss-316ti-pipe',
        slug: 'ss-316ti-pipe',
        name: 'SS 316Ti Pipe',
        code: 'ASTM A312 TP316Ti',
        standard: 'ASTM A312 / EN 10217-7',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        shortDesc: 'Titanium-stabilized molybdenum stainless pipe resistant to intergranular sensitization across the 425°C to 800°C range.',
        fullDesc: 'SS 316Ti incorporates titanium stabilization to tie up carbon as titanium carbides, eliminating intergranular chromium depletion and preserving corrosion resistance during prolonged high-temperature exposure.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Exhaust gas scrubbers', 'Automotive and marine exhaust systems', 'Chemical reactors operating between 500°C and 800°C']
      },
      {
        id: 'ss-317-317l-pipe',
        slug: 'ss-317-317l-pipe',
        name: 'SS 317 / 317L Pipe',
        code: 'ASTM A312 TP317 / TP317L',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S31700 / S31703',
        din: '1.4438 (X2CrNiMo18-15-4)',
        shortDesc: 'High molybdenum (3.0-4.0% Mo) austenitic pipe providing enhanced resistance to chemical pitting and sulfurous acid solutions.',
        fullDesc: 'SS 317L features higher molybdenum, chromium, and nickel content than 316L, providing significantly greater resistance to pitting, crevice corrosion, and general chemical attack in pulp, paper, and textile bleaching systems.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Pulp and paper chlorine bleaching equipment', 'Flue gas desulfurization (FGD) absorber towers', 'Petrochemical distillation columns', 'Textile dye processing lines']
      },
      {
        id: 'ss-321-321h-pipe',
        slug: 'ss-321-321h-pipe',
        name: 'SS 321 / 321H Pipe',
        code: 'ASTM A312 TP321 / TP321H',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S32100 / S32109',
        din: '1.4541 (X6CrNiTi18-10)',
        shortDesc: 'Titanium-stabilized austenitic stainless pipe engineered for intermittent and continuous high-temperature service up to 900°C.',
        fullDesc: 'SS 321 is stabilized with titanium to prevent intercrystalline corrosion following welding or operation in the carbide precipitation temperature range. 321H has controlled carbon for superior creep resistance.',
        specs: { size: '1/2" to 30" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['Aircraft exhaust manifolds and collector rings', 'Refinery catalytic cracking regeneration piping', 'Furnace heating coils and expansion joints', 'Waste heat boiler tubes']
      },
      {
        id: 'ss-347-347h-pipe',
        slug: 'ss-347-347h-pipe',
        name: 'SS 347 / 347H Pipe',
        code: 'ASTM A312 TP347 / TP347H',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS S34700 / S34709',
        din: '1.4550 (X6CrNiNb18-10)',
        shortDesc: 'Niobium-stabilized austenitic stainless pipe offering exceptional resistance to polythionic acid stress corrosion cracking.',
        fullDesc: 'SS 347 utilizes niobium (columbium) stabilization to suppress intergranular carbide precipitation. Highly resistant to polythionic acid stress cracking in refinery hydrotreating and catalytic reforming operations.',
        specs: { size: '1/2" to 30" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['Petroleum refinery hydroprocessing piping', 'Radiant superheaters in heavy boilers', 'Chemical reactors handling polythionic acids', 'Nuclear reactor core components']
      },
      {
        id: 'ss-410-pipe',
        slug: 'ss-410-pipe',
        name: 'SS 410 Pipe',
        code: 'ASTM A268 TP410',
        standard: 'ASTM A268 / ASME SA268',
        uns: 'UNS S41000',
        din: '1.4006 (X12Cr13)',
        shortDesc: '12% Chromium martensitic stainless steel pipe heat-treatable to high hardness and tensile strength for abrasive slurry services.',
        fullDesc: 'SS 410 is a general-purpose martensitic stainless steel that can be hardened by thermal treatment. Provides good corrosion resistance combined with high strength and wear resistance in steam and gas lines.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 40 to SCH 80', ends: 'Plain / Beveled' },
        applications: ['Refinery fractionating tower internals', 'High-pressure steam turbine pipes', 'Mining slurry and ash handling pipelines', 'Petroleum valve and valve seat manifolds']
      },
      {
        id: 'ss-446-pipe',
        slug: 'ss-446-pipe',
        name: 'SS 446 Pipe',
        code: 'ASTM A268 TP446',
        standard: 'ASTM A268 / ASME SA268',
        uns: 'UNS S44600',
        din: '1.4762 (X10CrAlSi25)',
        shortDesc: '25% High-chromium ferritic heat-resistant pipe providing supreme immunity to sulfur-bearing flue gas corrosion up to 1100°C.',
        fullDesc: 'SS 446 is a non-hardenable ferritic heat-resistant alloy containing 23-27% Chromium. Offers outstanding resistance to high-temperature sulfur corrosion, ash attack, and copper-bath corrosion.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 40S to SCH 80S', ends: 'Plain / Beveled' },
        applications: ['Industrial sulfur burner pipes', 'Recuperator pipes and furnace dampers', 'Thermocouple protection tubes in molten glass/copper', 'Soot blower tubes in power plants']
      },
      {
        id: 'ss-904l-pipe',
        slug: 'ss-904l-pipe',
        name: 'SS 904L Pipe',
        code: 'ASTM A312 N08904 / 904L',
        standard: 'ASTM A312 / ASME SA312',
        uns: 'UNS N08904',
        din: '1.4539 (X1NiCrMoCu25-20-5)',
        shortDesc: 'High-alloy super austenitic stainless pipe with 4.5% Molybdenum and Copper, engineered specifically for warm sulfuric acid.',
        fullDesc: 'SS 904L is a non-stabilized low carbon super austenitic stainless steel. The addition of copper gives it substantial resistance to strong reducing acids like sulfuric acid across all concentrations.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Beveled Ends' },
        applications: ['Sulfuric acid manufacturing pipelines', 'Phosphate fertilizer production piping', 'Seawater cooling systems and desalination units', 'Flue gas desulfurization scrubber conduits']
      },
      {
        id: 'ss-square-pipe',
        slug: 'ss-square-pipe',
        name: 'SS Square & Rectangular Pipe',
        code: 'ASTM A554 SS Hollow Section',
        standard: 'ASTM A554 / EN 10296-2',
        uns: 'UNS S30400 / S31600',
        din: '1.4301 / 1.4404 Box',
        shortDesc: 'Precision welded square and rectangular structural stainless steel hollow sections for industrial framework and architectural engineering.',
        fullDesc: 'ASTM A554 stainless steel square and rectangular tubing supplied in as-welded or polished finishes (320 Grit Mirror). Offers high torsional rigidity and clean aesthetics.',
        specs: { size: '15x15 mm to 200x200 mm', schedule: 'Wall: 1.0mm to 12.0mm', ends: 'Square Cut / Deburred' },
        applications: ['Pharmaceutical cleanroom structural frameworks', 'Industrial equipment skids and machine frames', 'Architectural handrails and balustrade supports', 'Food processing plant sanitary frameworks']
      }
    ]
  },
  {
    id: 'super-duplex-steel-pipe',
    slug: 'super-duplex-steel-pipe',
    aliases: ['duplex', 'super-duplex', 'duplex-steel-pipe'],
    name: 'Super & Duplex Steel Pipe',
    headline: 'High PREN ≥ 42 Dual-Phase Austenitic-Ferritic Marine & Subsea Piping',
    image: img_duplex_pipe,
    shortDesc: 'Dual-phase austenitic-ferritic stainless steel seamless and welded pipes delivering twice the mechanical yield strength of standard 316L, combined with exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive chloride environments.',
    standards: 'ASTM A790 / ASME SA790, ASTM A928, NORSOK M-650 MDS D41/D45/D51',
    sizeRange: '1/2" NB to 24" NB (Seamless up to 16", Welded up to 36")',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS',
    availableForms: ['Cold Drawn Seamless Pipe', 'Subsea Flowlines', 'Welded (EFW) Large Diameter Pipe', 'Manifold Tubing'],
    grades: [
      {
        id: 'duplex-stainless-steel-pipe',
        slug: 'duplex-stainless-steel-pipe',
        name: 'Duplex Stainless Steel Pipe',
        code: 'ASTM A790 Duplex Commercial',
        standard: 'ASTM A790 / ASME SA790',
        uns: 'UNS S31803 / S32205 Series',
        din: '1.4462 Series',
        shortDesc: 'Commercial duplex stainless steel pipe offering balanced 50/50 ferrite-austenite microstructure for high strength and chloride immunity.',
        fullDesc: 'Standard duplex stainless steel pipe engineered for marine and chemical handling installations where standard austenitic grades suffer from stress corrosion cracking.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled Ends' },
        applications: ['Chemical cargo ship tanker piping', 'Wastewater treatment plants', 'Marine cooling piping', 'Oilfield gas gathering systems']
      },
      {
        id: 'duplex-steel-s31803-pipe',
        slug: 'duplex-steel-s31803-pipe',
        name: 'Duplex Steel S31803 Pipe',
        code: 'ASTM A790 UNS S31803',
        standard: 'ASTM A790 / ASME SA790',
        uns: 'UNS S31803',
        din: '1.4462 (X2CrNiMoN22-5-3)',
        shortDesc: '22% Chromium, 5% Nickel, 3% Molybdenum standard duplex pipe delivering minimum yield strength of 450 MPa.',
        fullDesc: 'UNS S31803 is the original 2205 duplex formulation. It delivers high mechanical strength and reliable resistance to localized pitting (PREN ≥ 32) in marine and industrial environments.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S, 40S, 80S, 160', ends: 'Beveled Ends' },
        applications: ['Oil and gas exploration flowlines', 'Biofuel processing facilities', 'Desalination plant reverse osmosis feed lines', 'Pulp and paper digestor piping']
      },
      {
        id: 'duplex-steel-s32205-pipe',
        slug: 'duplex-steel-s32205-pipe',
        name: 'Duplex Steel S32205 Pipe',
        code: 'ASTM A790 UNS S32205 (F51/2205)',
        standard: 'ASTM A790 / ASME SA790',
        uns: 'UNS S32205',
        din: '1.4462 Restricted',
        shortDesc: 'Restricted-chemistry high-nitrogen 2205 duplex pipe delivering guaranteed PREN ≥ 35 and superior corrosion resistance.',
        fullDesc: 'UNS S32205 represents the optimized chemistry version of 2205 with higher minimum chromium, molybdenum, and nitrogen. Fully qualified under NORSOK M-650 MDS D41/D45 for severe offshore oil and gas production.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', ends: 'Beveled Ends (37.5°)' },
        applications: ['Offshore oil and gas production platforms', 'Subsea manifold piping', 'Chemical processing heat exchangers', 'Chloride-bearing chemical transfer pipelines']
      },
      {
        id: 'super-duplex-steel-s32750-pipe',
        slug: 'super-duplex-steel-s32750-pipe',
        name: 'Super Duplex Steel S32750 Pipe',
        code: 'ASTM A790 UNS S32750 (2507)',
        standard: 'ASTM A790 / ASME SA790',
        uns: 'UNS S32750',
        din: '1.4410 (X2CrNiMoN25-7-4)',
        shortDesc: '25% Chromium, 7% Nickel, 4% Molybdenum super duplex pipe with PREN ≥ 42 for severe subsea and chlorinated seawater applications.',
        fullDesc: 'UNS S32750 (Alloy 2507) is a super duplex stainless steel designed for highly demanding applications. It provides high yield strength (minimum 550 MPa) and exceptional resistance to pitting, crevice corrosion, and erosion corrosion in seawater.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S, 40S, 80S, 160, XXS', ends: 'Beveled Ends' },
        applications: ['Subsea production risers and umbilicals', 'Seawater injection and ballast piping', 'High-pressure reverse osmosis desalination headers', 'Flue gas cleaning and scrubber systems']
      },
      {
        id: 'super-duplex-steel-s32760-pipe',
        slug: 'super-duplex-steel-s32760-pipe',
        name: 'Super Duplex Steel S32760 Pipe',
        code: 'ASTM A790 UNS S32760 (Zeron 100)',
        standard: 'ASTM A790 / ASME SA790',
        uns: 'UNS S32760',
        din: '1.4501 (X2CrNiMoCuWN25-7-4)',
        shortDesc: 'Tungsten and Copper fortified super duplex pipe providing PREN ≥ 42 and outstanding resistance to erosion and acidic chlorides.',
        fullDesc: 'UNS S32760 (Zeron 100) incorporates deliberate additions of copper and tungsten to enhance corrosion resistance in sulfuric acid and high-velocity marine slurries. Conforms strictly to NORSOK M-650 MDS D51/D55.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 10S to SCH XXS', ends: 'Beveled Ends' },
        applications: ['Offshore firewater main loops', 'Deepwater subsea flowlines and manifolds', 'Geothermal energy brine lines', 'Phosphoric acid production evaporators']
      }
    ]
  },
  {
    id: 'carbon-steel-pipe',
    slug: 'carbon-steel-pipe',
    aliases: ['carbon-steel', 'cs-pipe'],
    name: 'Carbon Steel Pipe',
    headline: 'High-Pressure, Boiler, Low-Temp & API 5L Pipeline Carbon Steel Piping',
    image: img_carbon_pipe,
    shortDesc: 'Comprehensive mill stockholding and supply of high-integrity seamless and welded carbon steel pipes conforming to ASTM A106, A53, A333, and API 5L for high-pressure boilers, refineries, low-temperature services, and oil & gas pipeline grids.',
    standards: 'ASTM A106, ASTM A53, ASTM A333, ASTM A192, ASTM A179, ASTM A671, API 5L PSL1/PSL2, IBR Form III-C',
    sizeRange: '1/2" NB to 36" NB (Seamless up to 26", EFW/LSAW up to 64")',
    schedules: 'SCH 20, SCH 30, SCH 40, SCH STD, SCH 80, SCH XS, SCH 120, SCH 160, SCH XXS',
    availableForms: ['Seamless Line Pipe', 'ERW / HFW Pipe', 'LSAW / DSAW Welded Pipe', 'Boiler & Exchanger Tubes'],
    grades: [
      {
        id: 'carbon-steel-pipe-standard',
        slug: 'carbon-steel-pipe-standard',
        name: 'Carbon Steel Pipe (Standard Commercial)',
        code: 'ASTM A53 / A106 Commercial',
        standard: 'ASTM A53 / ASTM A106',
        uns: 'UNS K03006 / K02501',
        din: 'DIN 1629 / EN 10216-1',
        shortDesc: 'General industrial commercial carbon steel seamless and welded pipe for standard utility lines, structural spools, and water transfer.',
        fullDesc: 'Heavy-duty commercial grade carbon steel piping engineered for reliable pressure performance, good weldability, and structural endurance across general plant utilities.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40 to SCH 80', ends: 'Plain / Beveled' },
        applications: ['Industrial plant service water piping', 'Low-pressure air and steam lines', 'Structural piping and casing', 'General building utilities']
      },
      {
        id: 'astm-a53-grade-b-pipe',
        slug: 'astm-a53-grade-b-pipe',
        name: 'ASTM A53 Grade B Pipe',
        code: 'ASTM A53 Gr. B (Seamless & ERW)',
        standard: 'ASTM A53 / ASME SA53',
        uns: 'UNS K03005',
        din: 'EN 10255 Grade B',
        shortDesc: 'Standard seamless and electric-resistance welded (ERW) black and galvanized pipe for mechanical and pressure applications.',
        fullDesc: 'ASTM A53 Grade B is intended for mechanical and pressure applications and is also acceptable for ordinary uses in steam, water, gas, and air lines. Available in Type S (Seamless), Type E (Electric Resistance Welded), and Type F (Furnace Butt Welded).',
        specs: { size: '1/8" to 26" NB', schedule: 'SCH 10 to SCH 160', ends: 'Plain End / Beveled / Threaded' },
        applications: ['Industrial steam and condensate returns', 'Natural gas distribution piping', 'Fire sprinkler and protection mains', 'Structural columns and bollards']
      },
      {
        id: 'astm-a106-grade-b-pipe',
        slug: 'astm-a106-grade-b-pipe',
        name: 'ASTM A106 Grade B Pipe',
        code: 'ASTM A106 Gr. B Seamless',
        standard: 'ASTM A106 / ASME SA106',
        uns: 'UNS K03006',
        din: '1.0405 (St45.8)',
        shortDesc: 'High-temperature seamless carbon steel pipe, the global standard for refinery, petrochemical, and power plant piping.',
        fullDesc: 'ASTM A106 Grade B covers seamless carbon steel pipe for high-temperature service up to 425°C. Hot finished or cold drawn, fully killed steel ensuring reliable ductility, high tensile strength (min 415 MPa), and excellent bending performance.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 20 to SCH XXS', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Petroleum refinery process units', 'Thermal power plant boiler feed lines', 'High-pressure steam distribution headers', 'Gas compression stations']
      },
      {
        id: 'astm-a106-grade-c-pipe',
        slug: 'astm-a106-grade-c-pipe',
        name: 'ASTM A106 Grade C Pipe',
        code: 'ASTM A106 Gr. C High Tensile',
        standard: 'ASTM A106 / ASME SA106',
        uns: 'UNS K03501',
        din: '1.0419',
        shortDesc: 'Higher-carbon seamless carbon steel pipe offering elevated tensile strength (min 485 MPa) for severe high-pressure service.',
        fullDesc: 'ASTM A106 Grade C features a higher carbon and manganese content than Grade B, providing increased tensile and yield strength for heavy-wall high-pressure boiler and piping installations.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 80 to SCH XXS', ends: 'Beveled Ends' },
        applications: ['High-pressure boiler steam drums', 'Heavy wall hydraulic cylinders and manifolds', 'Power generation high-stress piping spools']
      },
      {
        id: 'astm-a53-galvanized-pipe',
        slug: 'astm-a53-galvanized-pipe',
        name: 'ASTM A53 Galvanized Pipe',
        code: 'ASTM A53 HDG Pipe',
        standard: 'ASTM A53 / ASTM A123',
        uns: 'UNS K03005 Galvanized',
        din: 'EN 10240 Zinc Coated',
        shortDesc: 'Hot-dip zinc-coated carbon steel pipe delivering cathodic protection against atmospheric, soil, and water corrosion.',
        fullDesc: 'ASTM A53 Galvanized pipe is coated inside and outside with high-purity zinc via hot-dip galvanizing per ASTM A123, providing long-lasting sacrificial protection in exposed municipal, water, and structural installations.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 40, SCH 80', ends: 'Threaded & Coupled / Plain' },
        applications: ['Potable water transmission mains', 'Outdoor fire protection sprinkler lines', 'Industrial fencing and structural handrails', 'Cooling tower distribution manifolds']
      },
      {
        id: 'astm-a192-boiler-tubes',
        slug: 'astm-a192-boiler-tubes',
        name: 'ASTM A192 Boiler Tubes',
        code: 'ASTM A192 Seamless Boiler Tube',
        standard: 'ASTM A192 / ASME SA192',
        uns: 'UNS K01201',
        din: '1.0305 (St35.8)',
        shortDesc: 'Seamless carbon steel boiler tubes for high-pressure service in power boilers, superheaters, and economizers.',
        fullDesc: 'ASTM A192 covers minimum-wall-thickness seamless carbon steel boiler and superheater tubes for high-pressure service. Tested by flaring, flattening, hardness, and hydrostatic tests per ASME Section I.',
        specs: { size: '1/2" to 7" OD (12.7 mm to 177.8 mm)', schedule: 'Wall: 2.0 mm to 25.0 mm', ends: 'Plain Square Cut Ends' },
        applications: ['High-pressure power station waterwall tubes', 'Boiler superheater and reheater coils', 'Economizer tube bundles', 'Waste heat steam generators (HRSG)']
      },
      {
        id: 'astm-a179-tube',
        slug: 'astm-a179-tube',
        name: 'ASTM A179 Heat Exchanger Tube',
        code: 'ASTM A179 Cold Drawn Tube',
        standard: 'ASTM A179 / ASME SA179',
        uns: 'UNS K01200',
        din: '1.0305 (St35.8 I)',
        shortDesc: 'Seamless cold-drawn low-carbon steel heat exchanger and condenser tubes engineered for high thermal transfer efficiency.',
        fullDesc: 'ASTM A179 covers minimum-wall-thickness seamless cold-drawn low-carbon steel tubes for tubular heat exchangers, condensers, and similar heat-transfer apparatus.',
        specs: { size: '1/8" to 3" OD (3.2 mm to 76.2 mm)', schedule: 'Wall: 0.9 mm to 9.0 mm', ends: 'Plain / Deburred' },
        applications: ['Shell and tube heat exchangers', 'Refrigeration chillers and condensers', 'Petrochemical reboilers and coolers', 'Air preheaters and economizers']
      },
      {
        id: 'astm-a252-pipe',
        slug: 'astm-a252-pipe',
        name: 'ASTM A252 Piling Pipe',
        code: 'ASTM A252 Welded & Seamless Piling',
        standard: 'ASTM A252',
        uns: 'UNS K03006 Piling',
        din: 'EN 10219 Piling',
        shortDesc: 'Heavy-wall welded and seamless steel pipe piles engineered for civil structural foundation and bridge piling support.',
        fullDesc: 'ASTM A252 covers nominal wall cylindrical steel pipe piles in which the steel cylinder acts as a permanent load-carrying member or as a shell to form cast-in-place concrete piles.',
        specs: { size: '8" to 64" OD', schedule: 'Wall: 6mm to 40mm', ends: 'Beveled / Plain Cut' },
        applications: ['Deep foundation piling for bridges and ports', 'Offshore marine jetty piles', 'Highway overpass foundation casings', 'Retaining walls and cofferdams']
      },
      {
        id: 'astm-a333-grade-1-pipe',
        slug: 'astm-a333-grade-1-pipe',
        name: 'ASTM A333 Grade 1 Pipe',
        code: 'ASTM A333 Gr. 1 Low Temp',
        standard: 'ASTM A333 / ASME SA333',
        uns: 'UNS K03008',
        din: '1.0456 (TTSt35N)',
        shortDesc: 'Seamless and welded carbon steel pipe engineered for low-temperature service down to -45°C.',
        fullDesc: 'ASTM A333 Grade 1 covers seamless and welded steel pipe intended for use at low temperatures, with mandatory Charpy V-notch impact testing verified at -45°C.',
        specs: { size: '1/2" to 24" NB', schedule: 'SCH 40 to SCH 160', ends: 'Beveled Ends' },
        applications: ['Cold climatic pipelines', 'Refrigeration processing plants', 'Low-temperature LPG terminal piping']
      },
      {
        id: 'astm-a333-grade-3-pipe',
        slug: 'astm-a333-grade-3-pipe',
        name: 'ASTM A333 Grade 3 Pipe',
        code: 'ASTM A333 Gr. 3 (3.5% Nickel)',
        standard: 'ASTM A333 / ASME SA333',
        uns: 'UNS K31918',
        din: '1.5637 (10Ni14)',
        shortDesc: '3.5% Nickel alloyed seamless steel pipe engineered for extreme sub-zero low-temperature operations down to -100°C.',
        fullDesc: 'ASTM A333 Grade 3 incorporates 3.5% Nickel, delivering extraordinary low-temperature impact toughness down to -100°C. Ideal for ethylene synthesis, LPG handling, and cryogenic refrigeration systems.',
        specs: { size: '1/2" to 20" NB', schedule: 'SCH 40 to SCH XXS', ends: 'Beveled Ends' },
        applications: ['Ethylene plant piping and refrigeration systems', 'Liquid propane and butane transfer lines', 'Cryogenic gas processing facilities', 'Polar oilfield installations']
      },
      {
        id: 'astm-a333-grade-6-pipe',
        slug: 'astm-a333-grade-6-pipe',
        name: 'ASTM A333 Grade 6 Pipe',
        code: 'ASTM A333 Gr. 6 (-45°C)',
        standard: 'ASTM A333 / ASME SA333',
        uns: 'UNS K03022',
        din: '1.0456',
        shortDesc: 'Low-temperature seamless and welded carbon steel pipe with mandatory Charpy V-notch impact testing at -45°C.',
        fullDesc: 'ASTM A333 Grade 6 is the standard low-temperature carbon steel pipe specification in the oil, gas, and chemical industries. Conforms to fine-grain practice and normalized heat treatment.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 20 to SCH XXS', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Liquefied petroleum gas (LPG) pipelines', 'Arctic and sub-zero oilfield piping', 'Refrigeration compression circuits', 'Compressed natural gas (CNG) handling']
      },
      {
        id: 'astm-a334-gr-1-tube',
        slug: 'astm-a334-gr-1-tube',
        name: 'ASTM A334 GR.1 Tube',
        code: 'ASTM A334 Gr. 1 Low Temp Tube',
        standard: 'ASTM A334 / ASME SA334',
        uns: 'UNS K03008',
        din: '1.0456 Tube',
        shortDesc: 'Seamless and welded carbon steel tube for low-temperature heat exchangers and process lines.',
        fullDesc: 'ASTM A334 Grade 1 covers carbon and alloy steel tubing intended for use at low temperatures down to -45°C with guaranteed impact absorption.',
        specs: { size: '1/2" to 5" OD', schedule: 'Standard Wall', ends: 'Plain Ends' },
        applications: ['Low-temperature refrigeration exchangers', 'Petrochemical gas recovery condensers', 'Cryogenic vaporizer tubes']
      },
      {
        id: 'astm-a572-grade-50-pipe',
        slug: 'astm-a572-grade-50-pipe',
        name: 'ASTM A572 Grade 50 Pipe',
        code: 'ASTM A572 Gr. 50 HSLA',
        standard: 'ASTM A572',
        uns: 'UNS K02304',
        din: 'EN 10025 S355JR',
        shortDesc: 'High-strength low-alloy columbium-vanadium structural steel pipe offering minimum yield strength of 345 MPa (50 ksi).',
        fullDesc: 'ASTM A572 Grade 50 is a high-strength low-alloy (HSLA) structural pipe that provides an optimal combination of high yield strength, weldability, and notch toughness for heavy structural frames and towers.',
        specs: { size: '2" to 36" NB', schedule: 'SCH 40 to SCH 120', ends: 'Plain / Beveled' },
        applications: ['Transmission tower tubular members', 'Heavy construction and crane booms', 'Bridge structural support arches', 'Offshore platform topside structural spools']
      },
      {
        id: 'astm-a671-pipe',
        slug: 'astm-a671-pipe',
        name: 'ASTM A671 EFW Pipe',
        code: 'ASTM A671 Heavy Wall EFW',
        standard: 'ASTM A671 / ASME SA671',
        uns: 'Various Carbon Grades',
        din: 'EN 10217-1 Large EFW',
        shortDesc: 'Electric-fusion-welded carbon steel pipe with filler metal added, engineered for atmospheric and lower temperatures.',
        fullDesc: 'ASTM A671 covers electric-fusion-welded steel pipe with filler metal added, fabricated from pressure vessel quality plate for high-pressure service at atmospheric and lower temperatures.',
        specs: { size: '16" NB to 64" NB', schedule: 'Wall: 10mm to 80mm', ends: 'Beveled Ends (100% X-Ray)' },
        applications: ['High-pressure water supply penstocks', 'Refinery heavy-wall line pipe headers', 'Natural gas mainline trunk pipelines']
      },
      {
        id: 'astm-a671-cc60-pipe',
        slug: 'astm-a671-cc60-pipe',
        name: 'ASTM A671 CC60 Pipe',
        code: 'ASTM A671 Grade CC60',
        standard: 'ASTM A671 / ASME SA671',
        uns: 'UNS K02100 (A516 Gr 60)',
        din: '1.0425 (P265GH EFW)',
        shortDesc: 'Large diameter EFW pipe fabricated from ASTM A516 Gr. 60 plate, offering superior toughness at moderate to low temperatures.',
        fullDesc: 'Fabricated from killed carbon steel plate ASTM A516 Grade 60, tested 100% by radiography (RT) to ensure zero weld defects in severe high-pressure service.',
        specs: { size: '16" to 56" NB', schedule: 'Wall: 12mm to 65mm', ends: 'Beveled Ends' },
        applications: ['Refinery low-temperature process lines', 'High-pressure cross-country gas pipelines', 'Power station steam condenser pipes']
      },
      {
        id: 'astm-a671-cc65-pipe',
        slug: 'astm-a671-cc65-pipe',
        name: 'ASTM A671 CC65 Pipe',
        code: 'ASTM A671 Grade CC65',
        standard: 'ASTM A671 / ASME SA671',
        uns: 'UNS K02403 (A516 Gr 65)',
        din: '1.0481 (P295GH EFW)',
        shortDesc: 'Large diameter EFW pipe fabricated from ASTM A516 Gr. 65 plate providing balanced tensile strength and notch toughness.',
        fullDesc: 'Manufactured by precision longitudinal seam welding from normalized ASTM A516 Grade 65 plate with full volumetric ultrasonic and radiographic inspection.',
        specs: { size: '16" to 56" NB', schedule: 'Wall: 12mm to 70mm', ends: 'Beveled Ends' },
        applications: ['Gas gathering transmission lines', 'Industrial boiler steam distribution conduits', 'Petrochemical cracking unit balance piping']
      },
      {
        id: 'astm-a671-cc70-pipe',
        slug: 'astm-a671-cc70-pipe',
        name: 'ASTM A671 CC70 Pipe',
        code: 'ASTM A671 Grade CC70',
        standard: 'ASTM A671 / ASME SA671',
        uns: 'UNS K02700 (A516 Gr 70)',
        din: '1.0473 (P355GH EFW)',
        shortDesc: 'High-strength large diameter EFW pipe fabricated from ASTM A516 Gr. 70 plate for maximum allowable design pressure.',
        fullDesc: 'ASTM A671 Grade CC70 delivers the highest tensile strength (485-620 MPa) among A516 plate-derived EFW pipes. Used where heavy-wall thickness and high pressure containment are essential.',
        specs: { size: '16" to 64" NB', schedule: 'Wall: 12mm to 80mm', ends: 'Beveled Ends' },
        applications: ['High-pressure gas storage and transfer', 'Refinery hydrocracker reactor effluent lines', 'Hydroelectric power plant penstocks']
      },
      {
        id: 'api-5l-grade-b-x70-pipe',
        slug: 'api-5l-grade-b-x70-pipe',
        name: 'API 5L Grade B to X70 Pipe',
        code: 'API Spec 5L PSL1 / PSL2',
        standard: 'API 5L / ISO 3183',
        uns: 'Grade B through X70',
        din: 'EN 10208-2 (L245 to L485)',
        shortDesc: 'Seamless, ERW, and LSAW steel line pipe for petroleum and natural gas pipeline transportation systems (Grades B, X42, X52, X60, X65, X70).',
        fullDesc: 'API 5L covers seamless and welded steel line pipe for use in pipeline transportation systems in the petroleum and natural gas industries. Available in Product Specification Levels PSL1 and PSL2, with mandatory fracture toughness and sour service testing (NACE MR0175).',
        specs: { size: '1/2" to 60" NB', schedule: 'SCH 20 to SCH 160 / STD / XS', ends: 'Beveled Ends (API 5L)' },
        applications: ['Cross-country crude oil and natural gas transmission lines', 'Offshore subsea pipelines', 'Sour gas (H2S) collection lines', 'Refinery tank farm interconnecting pipelines']
      }
    ]
  },
  {
    id: 'hastelloy-pipe',
    slug: 'hastelloy-pipe',
    aliases: ['hastelloy', 'hastelloy-pipes'],
    name: 'Hastelloy Pipe',
    headline: 'Corrosion-Resistant Nickel-Chromium-Molybdenum Alloy Line Pipe & Tubes',
    image: img_hastelloy_pipe,
    shortDesc: 'High-performance nickel-molybdenum-chromium superalloy seamless and welded pipes delivering exceptional resistance to severe oxidizing, reducing, and mixed acid chemical environments, wet chlorine, and localized pitting.',
    standards: 'ASTM B622 / ASME SB622, ASTM B619, ASTM B626, DIN 17751, NACE MR0175',
    sizeRange: '1/4" NB to 12" NB (Seamless up to 8", Welded up to 24")',
    schedules: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S, SCH 160',
    availableForms: ['Seamless Pipe', 'Welded Pipe', 'Heat Exchanger Tubes', 'Instrument Tubing'],
    grades: [
      {
        id: 'hastelloy-pipe',
        slug: 'hastelloy-pipe',
        name: 'Hastelloy Pipe',
        code: 'ASTM B622 Hastelloy Standard',
        standard: 'ASTM B622 / ASME SB622',
        uns: 'UNS N10276 / UNS N06022',
        din: '2.4819 / 2.4602',
        shortDesc: 'Commercial grade Hastelloy seamless piping engineered for severe chemical processing and aggressive halide acid applications.',
        fullDesc: 'Hastelloy nickel-chromium-molybdenum alloy pipe provides outstanding resistance to non-oxidizing acids, pitting, crevice corrosion, and stress corrosion cracking across wide temperature ranges.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Plain / Beveled' },
        applications: ['Chemical process reactors', 'Waste incineration scrubbers', 'Sour gas production pipelines', 'Pharmaceutical synthesis piping']
      },
      {
        id: 'hastelloy-c22-pipe',
        slug: 'hastelloy-c22-pipe',
        name: 'Hastelloy C22 Pipe',
        code: 'ASTM B622 UNS N06022 (Alloy C-22)',
        standard: 'ASTM B622 / ASME SB622',
        uns: 'UNS N06022',
        din: '2.4602 (NiCr21Mo14W)',
        shortDesc: 'Enhanced Ni-Cr-Mo-W alloy pipe with superior resistance to pitting, crevice corrosion, and oxidizing aqueous media.',
        fullDesc: 'Hastelloy C22 (Alloy C-22) contains balanced additions of chromium, molybdenum, and tungsten. It offers substantially better overall corrosion resistance and thermal stability compared to C-276 in oxidizing acid environments containing ferric and cupric ions.',
        specs: { size: '1/4" to 8" NB', schedule: 'SCH 10S, 40S, 80S', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Chlorination systems and bleach plants', 'Flue gas desulfurization (FGD) absorber ducts', 'Pesticide and agrochemical manufacturing', 'Nuclear fuel reprocessing piping']
      },
      {
        id: 'hastelloy-c276-pipe',
        slug: 'hastelloy-c276-pipe',
        name: 'Hastelloy C276 Pipe',
        code: 'ASTM B622 UNS N10276 (Alloy C-276)',
        standard: 'ASTM B622 / ASME SB622',
        uns: 'UNS N10276',
        din: '2.4819 (NiMo16Cr15W)',
        shortDesc: 'Universal Ni-Mo-Cr alloy seamless pipe with exceptional resistance to wet chlorine gas, hypochlorite, and strong chloride solutions.',
        fullDesc: 'Hastelloy C276 is the premier versatile corrosion-resistant nickel alloy. It resists grain boundary precipitate formation in weld heat-affected zones, making it suitable for as-welded use in chemical process plants, offshore sour gas headers, and pollution control equipment.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S to SCH 160', ends: 'Beveled / Plain Cut' },
        applications: ['Sulfuric, hydrochloric, and hydrofluoric acid service', 'Offshore sour crude gathering lines', 'Pulp and paper bleaching digesters', 'Chemical waste disposal injection wells']
      }
    ]
  },
  {
    id: 'nickel-pipe',
    slug: 'nickel-pipe',
    aliases: ['nickel', 'nickel-pipes'],
    name: 'Nickel Pipe',
    headline: 'Commercially Pure Nickel Seamless & Welded Industrial Piping',
    image: img_nickel_pipe,
    shortDesc: 'High-purity commercially wrought nickel seamless and welded pipes formulated for ultimate resistance to caustic alkalis, dry fluorine, hydrogen chloride, and high-temperature halogen gases.',
    standards: 'ASTM B161 / ASME SB161, ASTM B163, ASTM B725, DIN 17751, BS 3074',
    sizeRange: '1/4" NB to 10" NB (Seamless up to 8")',
    schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
    availableForms: ['Cold Drawn Seamless Pipe', 'Welded Pipe', 'Caustic Evaporator Tubes', 'Condenser Tubes'],
    grades: [
      {
        id: 'nickel-pipe',
        slug: 'nickel-pipe',
        name: 'Nickel Pipe',
        code: 'ASTM B161 Commercially Pure Nickel',
        standard: 'ASTM B161 / ASME SB161',
        uns: 'UNS N02200 / N02201',
        din: '2.4066 / 2.4068',
        shortDesc: 'Commercially pure nickel piping engineered for caustic handling and high-temperature chemical distillation.',
        fullDesc: 'Wrought commercially pure nickel pipe provides excellent thermal and electrical conductivity, magnetostrictive properties, and virtual immunity to caustic soda corrosion up to molten conditions.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 10S to SCH 80S', ends: 'Plain / Beveled' },
        applications: ['Caustic soda (NaOH) handling and storage', 'Chlor-alkali manufacturing circuits', 'Synthetic fiber production lines', 'Food processing equipment piping']
      },
      {
        id: 'nickel-200-pipe',
        slug: 'nickel-200-pipe',
        name: 'Nickel 200 Pipe',
        code: 'ASTM B161 Nickel 200',
        standard: 'ASTM B161 / ASME SB161',
        uns: 'UNS N02200',
        din: '2.4066 (Ni 99.2)',
        shortDesc: '99.2% pure wrought nickel seamless pipe offering supreme resistance to caustic alkalis and non-oxidizing halide acids.',
        fullDesc: 'Nickel 200 is commercially pure (99.2%) wrought nickel. It exhibits excellent resistance to caustic solutions across all concentrations and temperatures up to 315°C (600°F), with high ductility and low work-hardening rates.',
        specs: { size: '1/4" to 8" NB', schedule: 'SCH 10S, 40S, 80S, 160', ends: 'Beveled Ends' },
        applications: ['Chlorine gas and hydrogen chloride transfer', 'Caustic evaporator tubes and heating elements', 'Fluorine generation equipment', 'Chemical reactor cooling coils']
      },
      {
        id: 'nickel-201-pipe',
        slug: 'nickel-201-pipe',
        name: 'Nickel 201 Pipe',
        code: 'ASTM B161 Nickel 201 (Low Carbon)',
        standard: 'ASTM B161 / ASME SB161',
        uns: 'UNS N02201',
        din: '2.4068 (LC-Ni 99.2)',
        shortDesc: 'Low-carbon (C ≤ 0.02%) pure nickel pipe immune to intergranular graphitization in high-temperature service above 315°C.',
        fullDesc: 'Nickel 201 is the low-carbon modification of Nickel 200, specifically designated for service temperatures above 315°C (600°F). The controlled carbon content prevents graphitization embrittlement in caustic evaporation processes up to 650°C.',
        specs: { size: '1/4" to 8" NB', schedule: 'SCH 10S, 40S, 80S, 160', ends: 'Beveled Ends' },
        applications: ['High-temperature caustic concentration evaporators', 'Vinyl chloride monomer (VCM) thermal cracking units', 'Hydrofluoric acid alkylation equipment', 'Molten salt thermal transfer conduits']
      }
    ]
  },
  {
    id: 'copper-nickel-pipe',
    slug: 'copper-nickel-pipe',
    aliases: ['copper-nickel', 'cupro-nickel', 'cu-ni-pipe'],
    name: 'Copper Nickel Pipe',
    headline: 'Marine Seawater & Offshore Cu-Ni 90/10 and 70/30 Corrosion-Resistant Piping',
    image: img_copper_nickel_pipe,
    shortDesc: 'Copper-nickel alloy seamless and welded pipes formulated for exceptional resistance to seawater biofouling, velocity impingement attack, stress corrosion cracking, and marine pitting in naval shipbuilding and desalination plants.',
    standards: 'ASTM B466 / ASME SB466, ASTM B467, EEMUA 144 / 234, DIN 86019, BS 2871',
    sizeRange: '1/2" NB to 20" NB (Seamless up to 12", Welded up to 36")',
    schedules: 'Class 14 bar / 20 bar (EEMUA), SCH 10S, SCH 40, SCH 80',
    availableForms: ['Seamless Marine Pipe', 'Seawater Cooling Lines', 'Condenser Tubes', 'Chilled Water Loops'],
    grades: [
      {
        id: 'copper-nickel-pipe',
        slug: 'copper-nickel-pipe',
        name: 'Copper Nickel Pipe',
        code: 'ASTM B466 Cu-Ni Marine Grade',
        standard: 'ASTM B466 / ASME SB466',
        uns: 'UNS C70600 / C71500',
        din: '2.0872 / 2.0882',
        shortDesc: 'Standard marine copper-nickel piping engineered for seawater handling, naval cooling, and offshore ballast systems.',
        fullDesc: 'Copper-nickel pipes offer inherent natural resistance to marine biofouling (barnacles and macro-algae) without biocide treatment, paired with outstanding resistance to saltwater velocity erosion and pitting.',
        specs: { size: '1/2" to 16" NB', schedule: 'Class 14 / 20 Bar, SCH 10S, SCH 40', ends: 'Plain / Beveled' },
        applications: ['Shipboard seawater cooling circuits', 'Marine firewater distribution mains', 'Offshore oil platform sanitary systems', 'Coastal power station condensers']
      },
      {
        id: 'copper-nickel-70-30-pipe',
        slug: 'copper-nickel-70-30-pipe',
        name: 'Copper Nickel 70/30 Pipe',
        code: 'ASTM B466 UNS C71500 (CuNi30Mn1Fe)',
        standard: 'ASTM B466 / ASME SB466',
        uns: 'UNS C71500',
        din: '2.0882 (CuNi30Mn1Fe)',
        shortDesc: '70% Copper, 30% Nickel pipe providing enhanced erosion resistance to high-velocity turbulent seawater up to 4.5 m/s.',
        fullDesc: 'Copper Nickel 70/30 (CuNi 70/30) features higher nickel and iron content, providing superior strength and higher permissible flow velocity limits in turbulent seawater systems, naval submarine cooling loops, and high-pressure desalination piping.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S, SCH 40, SCH 80', ends: 'Beveled Ends' },
        applications: ['Naval combatant vessel cooling systems', 'High-pressure desalination brine heaters', 'Offshore oil platform splash-zone piping', 'Turbine condenser and heat exchanger tubes']
      },
      {
        id: 'copper-nickel-90-10-pipe',
        slug: 'copper-nickel-90-10-pipe',
        name: 'Copper Nickel 90/10 Pipe',
        code: 'ASTM B466 UNS C70600 (CuNi10Fe1Mn)',
        standard: 'ASTM B466 / EEMUA 144 / DIN 86019',
        uns: 'UNS C70600',
        din: '2.0872 (CuNi10Fe1Mn)',
        shortDesc: '90% Copper, 10% Nickel marine piping delivering supreme resistance to biofouling and seawater corrosion in general offshore services.',
        fullDesc: 'Copper Nickel 90/10 is the most widely specified marine alloy piping for offshore platforms and commercial shipbuilding. It provides high thermal conductivity, easy cold bending and brazing, and complete immunity to stress corrosion cracking.',
        specs: { size: '1/2" to 20" NB', schedule: '14 Bar / 20 Bar (EEMUA), SCH 10S, SCH 40', ends: 'Plain Ends / Beveled Ends' },
        applications: ['Commercial ship hull seawater piping', 'Offshore fire protection and deluge piping', 'Multi-stage flash (MSF) desalination tubes', 'Saltwater ballast water management systems']
      }
    ]
  },
  {
    id: 'titanium-pipe',
    slug: 'titanium-pipe',
    aliases: ['titanium', 'titanium-pipes'],
    name: 'Titanium Pipe',
    headline: 'High-Strength Lightweight Titanium Seamless & Welded Industrial Piping',
    image: img_titanium_pipe,
    shortDesc: 'High strength-to-weight ratio seamless and welded titanium pipes engineered for extreme resistance to wet chlorine, metal chlorides, seawater pitting, and corrosive chemicals in chemical, aerospace, and marine installations.',
    standards: 'ASTM B861 / ASME SB861, ASTM B862, ASTM B338, NACE MR0175',
    sizeRange: '1/4" NB to 24" NB (Seamless up to 8", Welded up to 36")',
    schedules: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S',
    availableForms: ['Cold Drawn Seamless Pipe', 'Welded (ERW/TIG) Pipe', 'Heat Exchanger Tubes', 'Hydraulic Tubing'],
    grades: [
      {
        id: 'titanium-pipe',
        slug: 'titanium-pipe',
        name: 'Titanium Pipe',
        code: 'ASTM B861 Commercial Titanium',
        standard: 'ASTM B861 / ASME SB861',
        uns: 'UNS R50400 / R56400 Series',
        din: '3.7035 / 3.7165',
        shortDesc: 'Industrial titanium pipe providing ultimate immunity to seawater corrosion, wet chlorine, and organic acid environments.',
        fullDesc: 'Commercial titanium pipe forms a self-healing, tenaciously protective rutile (TiO2) oxide film that prevents localized attack and pitting in aggressive chloride solutions at high temperatures.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10S to SCH 40S', ends: 'Plain / Beveled' },
        applications: ['Chemical processing chlor-alkali circuits', 'Seawater desalination evaporator units', 'Marine offshore riser sheaths', 'Petrochemical heat exchangers']
      },
      {
        id: 'titanium-grade-2-pipe',
        slug: 'titanium-grade-2-pipe',
        name: 'Titanium Grade 2 Pipe',
        code: 'ASTM B861 Grade 2 (CP Titanium)',
        standard: 'ASTM B861 / ASME SB861',
        uns: 'UNS R50400',
        din: '3.7035 (Titanium Gr. 2)',
        shortDesc: 'Commercially pure unalloyed titanium pipe balancing moderate strength with exceptional ductility and outstanding corrosion resistance.',
        fullDesc: 'Titanium Grade 2 is the most widely used titanium pipe grade for chemical and marine engineering. It delivers total immunity to general corrosion, pitting, and crevice corrosion in marine water, wet chlorine gas, chlorates, and organic acids.',
        specs: { size: '1/4" to 12" NB', schedule: 'SCH 10S, 40S, 80S', ends: 'Beveled Ends (ASME B16.25)' },
        applications: ['Seawater cooling loops on offshore rigs', 'Wet chlorine transfer headers and scrubbers', 'Pure terephthalic acid (PTA) reactors', 'Marine exhaust gas cleaning systems (scrubbers)']
      },
      {
        id: 'titanium-grade-5-pipe',
        slug: 'titanium-grade-5-pipe',
        name: 'Titanium Grade 5 Pipe',
        code: 'ASTM B861 Grade 5 (Ti-6Al-4V)',
        standard: 'ASTM B861 / AMS 4928',
        uns: 'UNS R56400',
        din: '3.7165 (TiAl6V4)',
        shortDesc: 'Alpha-beta titanium alloy pipe featuring 6% Aluminum and 4% Vanadium for high tensile strength up to 895 MPa.',
        fullDesc: 'Titanium Grade 5 (Ti-6Al-4V) is the workhorse alloy of aerospace and deepwater subsea applications. It provides high fatigue strength, excellent fracture toughness, and lightweight structural integrity at service temperatures up to 400°C.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 40S, SCH 80S', ends: 'Precision Plain Cut / Beveled' },
        applications: ['Aerospace hydraulic and fuel pressure lines', 'Subsea wellhead intervention tools and risers', 'High-performance marine racing exhaust lines', 'Defense naval pressure vessel piping']
      }
    ]
  },
  {
    id: 'is-grades-pipe',
    slug: 'is-grades-pipe',
    aliases: ['is-grades', 'is-pipe', 'is-standard-pipes'],
    name: 'IS Grades Pipe',
    headline: 'BIS Certified Structural & Fluid Line Steel Pipes to Indian Standards',
    image: img_is_grades_pipe,
    shortDesc: 'Certified mild steel and high-tensile carbon steel pipes conforming to Bureau of Indian Standards (BIS) specifications for potable water, fire fighting, gas, irrigation, and heavy structural engineering.',
    standards: 'IS 1239 (Part 1 & 2), IS 1161, IS 3589, IS 4923, IS 2062',
    sizeRange: '15mm NB to 2500mm OD (1/2" to 100" OD)',
    schedules: 'Light, Medium, Heavy (IS 1239), 2.0mm to 25mm Wall Thickness',
    availableForms: ['ERW MS Black Pipe', 'Galvanized (GI) Pipe', 'Structural Hollow Sections (RHS/SHS)', 'Submerged Arc Welded (SAW) Pipe'],
    grades: [
      {
        id: 'is-grades-pipe',
        slug: 'is-grades-pipe',
        name: 'IS Grades Pipe',
        code: 'BIS Certified Steel Piping',
        standard: 'IS 1239 / IS 1161 / IS 3589',
        uns: 'Indian Standards Carbon Steel',
        din: 'IS Equivalent Standard',
        shortDesc: 'Complete range of BIS-licensed carbon and mild steel pipes for civil, fluid distribution, and fabrication projects.',
        fullDesc: 'Supplied with mandatory ISI certification, complete hydrostatic proof test certificates, flattening tests, and hot-dip galvanizing per IS 4736 where required.',
        specs: { size: '15mm to 1200mm NB', schedule: 'Light, Medium, Heavy Class', ends: 'Plain / Screwed & Socketed / Beveled' },
        applications: ['Municipal water conveyance pipelines', 'Industrial fire protection sprinkler systems', 'Industrial shed structural trusses', 'General mechanical and agricultural piping']
      },
      {
        id: 'is-1239-pipe',
        slug: 'is-1239-pipe',
        name: 'IS 1239 YST 210 / 240 / 310 / 355 Pipe',
        code: 'IS 1239 (Part 1) MS & GI Pipe',
        standard: 'IS 1239 (Part 1) / BS 1387 Equivalent',
        uns: 'IS 1239 Series',
        din: 'DIN 2440 / 2441 Equivalent',
        shortDesc: 'Mild steel pipes supplied in Light (A Class), Medium (B Class), and Heavy (C Class) for water, steam, and compressed air.',
        fullDesc: 'IS 1239 Part 1 specifies seamless and electric resistance welded (ERW) mild steel tubes from 15mm to 150mm NB. Available in Black and Hot-Dip Galvanized finishes, tested to 5 MPa hydrostatic pressure.',
        specs: { size: '15mm NB to 150mm NB (1/2" to 6")', schedule: 'Light (Yellow), Medium (Blue), Heavy (Red)', ends: 'Plain Ends / Screwed with IS 554 Threads' },
        applications: ['Fire protection sprinkler networks', 'Commercial building water supply lines', 'HVAC chilled water loops', 'Compressed air and low-pressure steam pipelines']
      },
      {
        id: 'is-1161-pipe',
        slug: 'is-1161-pipe',
        name: 'IS 1161 YST 210 / 240 / 310 / 355 Pipe',
        code: 'IS 1161 Structural Circular Hollow Tube',
        standard: 'IS 1161 / EN 10219 Equivalent',
        uns: 'IS 1161 Series',
        din: 'DIN 17120 Equivalent',
        shortDesc: 'Circular hollow sections (CHS) engineered specifically for load-bearing structural columns, trusses, and scaffolding.',
        fullDesc: 'IS 1161 covers steel tubes for structural purposes in yield strength grades YSt 210, YSt 240, YSt 310, and YSt 355. Designed for high torsional stiffness and minimal wind drag resistance.',
        specs: { size: '21.3mm to 355.6mm OD', schedule: '2.0mm to 10.0mm Wall Thickness', ends: 'Square Cut / Plain Ends' },
        applications: ['Industrial warehouse trusses and purlins', 'Airport terminal space frames', 'Transmission and telecom tower legs', 'Bridge railings and scaffolding systems']
      },
      {
        id: 'is-3589-pipe',
        slug: 'is-3589-pipe',
        name: 'IS 3589 YST 210 / 240 / 310 Pipe',
        code: 'IS 3589 Large Diameter Water Pipe',
        standard: 'IS 3589 / BS 534 Equivalent',
        uns: 'IS 3589 Fe 330 / Fe 410',
        din: 'DIN 2458 Equivalent',
        shortDesc: 'Large diameter (168.3 mm to 2540 mm) electrically welded steel pipes for high-volume water, sewage, and slurry mains.',
        fullDesc: 'IS 3589 specifies seamless or welded steel pipes for water, gas, and sewage in outside diameters from 168.3 mm (6" NB) up to 2540 mm (100" OD), supplied with external coal tar enamel or 3LPE anti-corrosive coatings.',
        specs: { size: '168.3mm OD to 2540mm OD (6" to 100")', schedule: '3.2mm to 25.0mm Wall Thickness', ends: 'Beveled Ends (30° per IS 3589)' },
        applications: ['Cross-country municipal water transmission lines', 'River water intake and discharge conduits', 'Sewage pumping and effluent disposal mains', 'Hydroelectric power penstocks']
      },
      {
        id: 'is-4923-pipe',
        slug: 'is-4923-pipe',
        name: 'IS 4923 YST 210 / 240 / 310 Pipe',
        code: 'IS 4923 Square & Rectangular Hollow Section',
        standard: 'IS 4923 / EN 10219 Equivalent',
        uns: 'IS 4923 SHS / RHS',
        din: 'DIN 59411 Equivalent',
        shortDesc: 'Square hollow sections (SHS) and rectangular hollow sections (RHS) for building frames, automotive chassis, and equipment skids.',
        fullDesc: 'IS 4923 defines hot-formed and cold-formed hollow steel sections from 15x15 mm up to 300x300 mm. Features high radius corner strength and excellent compression buckling resistance.',
        specs: { size: '15x15 mm to 300x300 mm (SHS/RHS)', schedule: '1.6mm to 12.0mm Wall Thickness', ends: 'Square Cut / Deburred' },
        applications: ['Building structural columns and canopy frames', 'Material handling equipment chassis', 'Solar panel mounting structural racks', 'Highway gantry and signage supports']
      },
      {
        id: 'is-2062-pipe',
        slug: 'is-2062-pipe',
        name: 'IS 2062 Structural Steel Pipe',
        code: 'IS 2062 E250 / E350 Structural Pipe',
        standard: 'IS 2062 / EN 10025 S275 Equivalent',
        uns: 'IS 2062 Grade E250/E350',
        din: '1.0044 (St 44-2 Equivalent)',
        shortDesc: 'Heavy-duty structural carbon steel pipes fabricated from certified IS 2062 plates for major civil infrastructure.',
        fullDesc: 'Manufactured from micro-alloyed structural steel plates conforming to IS 2062 Grade E250, E300, or E350. Tested for mandatory Charpy impact toughness at 0°C or -20°C for sub-zero service.',
        specs: { size: '200mm to 3000mm OD', schedule: '6mm to 40mm Wall Thickness', ends: 'Beveled for Full Penetration Butt Welds' },
        applications: ['Deep foundation piling pipes (casing pipes)', 'Port and jetty structural marine piles', 'Heavy crane gantry columns', 'Expressway flyover and bridge structural piers']
      }
    ]
  },
  {
    id: 'api-5l-pipe',
    slug: 'api-5l-pipe',
    aliases: ['api-5l', 'api5l', 'line-pipe'],
    name: 'API 5L Pipe',
    headline: 'API Spec 5L PSL1 & PSL2 High-Pressure Oil & Gas Transmission Line Pipes',
    image: img_api_5l_pipe,
    shortDesc: 'High-integrity seamless, ERW, LSAW, and SSAW line pipes manufactured to American Petroleum Institute (API) Spec 5L PSL1 & PSL2 standards for cross-country petroleum, natural gas, and sour service hydrocarbon transmission.',
    standards: 'API Spec 5L (46th Edition) / ISO 3183, API Spec 5CT, NACE MR0175 / ISO 15156',
    sizeRange: '1/2" NB to 64" OD (Seamless up to 24", LSAW/SSAW up to 64")',
    schedules: 'SCH 20, SCH 40, SCH 80, SCH 160, SCH XXS (2.8mm to 65mm Wall)',
    availableForms: ['Seamless Line Pipe', 'HFW / ERW High Frequency Welded', 'LSAW Longitudinal Submerged Arc Welded', 'SSAW Spiral Welded'],
    grades: [
      {
        id: 'api-5l-pipe',
        slug: 'api-5l-pipe',
        name: 'API 5L Pipe',
        code: 'API Spec 5L PSL1 / PSL2 Standard',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'API 5L Series',
        din: 'EN 10208-2 Equivalent',
        shortDesc: 'Standard petroleum line pipe specified for liquid hydrocarbons, refined fuels, and natural gas conveyance.',
        fullDesc: 'Conforms strictly to API Spec 5L PSL1 and PSL2 requirements. Every length undergoes mandatory ultrasonic weld inspection, hydrostatic proof testing to 100% SMYS, and dimensional verification.',
        specs: { size: '1/2" to 48" NB', schedule: 'SCH 40 to SCH 160, STD, XS, XXS', ends: 'Beveled Ends (30° ± 5° per API 5L)' },
        applications: ['Crude oil cross-country pipelines', 'Natural gas transmission grids', 'Refinery interconnecting pipe bridges', 'Offshore production platform line pipes']
      },
      {
        id: 'api-5l-grade-b-pipe',
        slug: 'api-5l-grade-b-pipe',
        name: 'API 5L Grade B Pipe',
        code: 'API 5L Gr. B (L245)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03014',
        din: '1.0457 (L245NB)',
        shortDesc: 'Base pipeline grade with minimum yield strength of 245 MPa (35,500 psi) for general petroleum service.',
        fullDesc: 'API 5L Grade B is the benchmark carbon steel line pipe for petroleum refineries and natural gas distribution. Features outstanding field weldability, high ductility, and fracture resistance.',
        specs: { size: '1/2" to 36" NB', schedule: 'SCH 40, SCH 80, SCH 160', ends: 'Beveled Ends' },
        applications: ['Petroleum refinery transfer lines', 'Urban natural gas city gate networks', 'Tank farm product manifold piping', 'Water injection pipelines in oilfields']
      },
      {
        id: 'api-5l-x42-pipe',
        slug: 'api-5l-x42-pipe',
        name: 'API 5L X42 Pipe',
        code: 'API 5L Grade X42 (L290)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03014 (Modified)',
        din: '1.0484 (L290MB)',
        shortDesc: 'Minimum yield strength 290 MPa (42,100 psi) line pipe for moderate pressure hydrocarbon transport.',
        fullDesc: 'Engineered for pipeline projects requiring higher burst pressure ratings than Grade B without requiring specialized welding consumables.',
        specs: { size: '2" to 48" NB', schedule: 'SCH 40 to SCH 120', ends: 'Beveled Ends' },
        applications: ['Intermediate pressure oil pipelines', 'Gas gathering field flowlines', 'Refinery flare gas collection lines']
      },
      {
        id: 'api-5l-x46-pipe',
        slug: 'api-5l-x46-pipe',
        name: 'API 5L X46 Pipe',
        code: 'API 5L Grade X46 (L320)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03015',
        din: '1.0488 (L320MB)',
        shortDesc: 'Minimum yield strength 320 MPa (46,400 psi) pipeline grade balancing yield efficiency and formability.',
        fullDesc: 'Manufactured via controlled rolling or normalizing processes. Delivers high Charpy V-notch impact energy at -20°C for onshore pipeline installations.',
        specs: { size: '2" to 48" NB', schedule: 'SCH 40 to SCH 120', ends: 'Beveled Ends' },
        applications: ['Crude oil pipeline transmission lines', 'Natural gas trunk line headers', 'Offshore platform production headers']
      },
      {
        id: 'api-5l-x52-pipe',
        slug: 'api-5l-x52-pipe',
        name: 'API 5L X52 Pipe',
        code: 'API 5L Grade X52 (L360)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03016',
        din: '1.0578 (L360NB / L360MB)',
        shortDesc: 'Minimum yield strength 360 MPa (52,200 psi) high-strength line pipe; most popular onshore transmission grade.',
        fullDesc: 'API 5L X52 represents the primary high-yield grade used globally for long-distance oil and natural gas pipelines. Available in PSL2 with strict carbon equivalent controls (CEpcm ≤ 0.22%) for high-speed automated field welding.',
        specs: { size: '2" to 56" NB', schedule: 'SCH 40, SCH 80, SCH 160', ends: 'Beveled Ends (30°)' },
        applications: ['High-pressure interstate gas pipelines', 'Cross-country crude oil transportation', 'Offshore subsea trunklines', 'Heavy crude gathering networks']
      },
      {
        id: 'api-5l-x56-pipe',
        slug: 'api-5l-x56-pipe',
        name: 'API 5L X56 Pipe',
        code: 'API 5L Grade X56 (L390)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03017',
        din: '1.0588 (L390MB)',
        shortDesc: 'Minimum yield strength 390 MPa (56,600 psi) line pipe for elevated operating pressure requirements.',
        fullDesc: 'Thermomechanically rolled micro-alloyed steel pipe offering enhanced tensile endurance with minimal weight penalty for large-scale energy infrastructure.',
        specs: { size: '4" to 56" NB', schedule: 'STD, XS, SCH 80', ends: 'Beveled Ends' },
        applications: ['Interstate high-pressure gas headers', 'Subsea shallow-water flowlines', 'Heavy oil extraction line pipes']
      },
      {
        id: 'api-5l-x60-pipe',
        slug: 'api-5l-x60-pipe',
        name: 'API 5L X60 Pipe',
        code: 'API 5L Grade X60 (L415)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03018',
        din: '1.8972 (L415MB)',
        shortDesc: 'Minimum yield strength 415 MPa (60,200 psi) high-strength line pipe for deepwater and long-haul pipelines.',
        fullDesc: 'API 5L X60 is manufactured using advanced TMCP (Thermo-Mechanical Controlled Processing) technology with micro-alloy additions of niobium, vanadium, and titanium for high drop-weight tear test (DWTT) transition temperatures.',
        specs: { size: '4" to 60" NB', schedule: 'SCH 40 to SCH 160, XS', ends: 'Beveled Ends' },
        applications: ['High-pressure gas transmission pipelines', 'Deepwater export lines', 'Arctic and cold-climate oil lines', 'High-volume LNG feed pipelines']
      },
      {
        id: 'api-5l-x65-pipe',
        slug: 'api-5l-x65-pipe',
        name: 'API 5L X65 Pipe',
        code: 'API 5L Grade X65 (L450)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03019',
        din: '1.8975 (L450MB)',
        shortDesc: 'Minimum yield strength 450 MPa (65,300 psi) high-yield line pipe for offshore deepwater risers and sour service.',
        fullDesc: 'Qualified under NACE MR0175 / ISO 15156 for severe sour service (wet H2S cracking resistance). Tested for HIC (Hydrogen Induced Cracking) and SSCC (Sulfide Stress Corrosion Cracking).',
        specs: { size: '6" to 60" OD', schedule: 'SCH 40 to SCH XXS', ends: 'Precision Beveled (ASME B16.25)' },
        applications: ['Deepwater subsea export pipelines and risers', 'Sour gas (high H2S) gathering pipelines', 'Ultra-high pressure natural gas trunk lines', 'Offshore marine flowlines']
      },
      {
        id: 'api-5l-x70-pipe',
        slug: 'api-5l-x70-pipe',
        name: 'API 5L X70 Pipe',
        code: 'API 5L Grade X70 (L485)',
        standard: 'API Spec 5L / ISO 3183',
        uns: 'UNS K03020',
        din: '1.8977 (L485MB)',
        shortDesc: 'Minimum yield strength 485 MPa (70,300 psi) ultra-high-strength pipeline steel for massive capacity gas pipelines.',
        fullDesc: 'Provides maximum pipe wall weight savings in 48" to 56" diameter overland gas highways. Conforms to PSL2 with high Charpy energy absorbing toughness.',
        specs: { size: '8" to 64" OD', schedule: 'SCH 40 to SCH 160', ends: 'Beveled Ends' },
        applications: ['Transcontinental natural gas highways', 'Ultra-high pressure export gas transmission', 'Offshore deepwater trunklines', 'Major national energy grid lines']
      },
      {
        id: 'api-5ct-l80-n80-pipe',
        slug: 'api-5ct-l80-n80-pipe',
        name: 'API 5CT L80/N80 Pipe',
        code: 'API Spec 5CT Casing & Tubing (L80 / N80)',
        standard: 'API Spec 5CT (10th Edition)',
        uns: 'API 5CT Series',
        din: 'Oil Country Tubular Goods (OCTG)',
        shortDesc: 'High-strength oilfield OCTG casing and production tubing engineered for downhole well completion.',
        fullDesc: 'API 5CT Grade L80 (controlled yield 80-95 ksi, max hardness 23 HRC) provides sour service resistance in wells containing H2S. Grade N80 delivers high burst and collapse resistance in conventional oil and gas wells.',
        specs: { size: '2-3/8" to 20" OD', schedule: 'Heavy Wall OCTG Casing/Tubing', ends: 'API Buttress (BTC) / EUE / NUE / Premium Connections' },
        applications: ['Oil and gas well production tubing', 'Deep oil well surface and intermediate casing', 'Geothermal high-temperature well completion', 'Downhole pump string conduits']
      },
      {
        id: 'api-5l-erw-pipe',
        slug: 'api-5l-erw-pipe',
        name: 'API 5L ERW Pipe',
        code: 'API 5L HFW / ERW Line Pipe',
        standard: 'API Spec 5L PSL1 & PSL2',
        uns: 'API 5L ERW Series',
        din: 'Electric Resistance Welded Standard',
        shortDesc: 'High-frequency electric resistance welded line pipe with full online seam heat treatment for defect-free welds.',
        fullDesc: 'Manufactured from hot rolled coil using high-frequency induction welding followed by full-body or weld seam normalizing. Offers tight dimensional tolerances and uniform wall thickness for high-speed field pipelaying.',
        specs: { size: '2" to 24" NB', schedule: 'SCH 20, 30, 40, 80, STD, XS', ends: 'Beveled Ends' },
        applications: ['Medium-diameter gas distribution systems', 'Crude oil gathering pipelines', 'Water injection lines in secondary recovery', 'Industrial fuel delivery pipelines']
      }
    ]
  },
  {
    id: 'en-standards-pipe',
    slug: 'en-standards-pipe',
    aliases: ['en-standards', 'en-pipe', 'european-standard-pipes'],
    name: 'EN Standards Pipe',
    headline: 'European Standard (Euronorm) Precision Pressure Tubes & Hollow Bars',
    image: img_en_standards_pipe,
    shortDesc: 'Complete European Norm (EN) certified seamless pressure tubes, structural hollow sections, and engineering hollow bars conforming to EN 10216, EN 10219, EN 10294-1, and EN 10025 for mechanical engineering, boilers, and industrial structures.',
    standards: 'EN 10216 (Part 1-4), EN 10219 (Part 1-2), EN 10294-1, EN 10025, EN 10084, EN 10253',
    sizeRange: '10.2mm to 1219mm OD (Wall Thickness 1.0mm to 100mm)',
    schedules: 'Metric Schedules, DIN/EN Standard Dimensions',
    availableForms: ['Seamless Boiler Tubes', 'Hollow Machining Bars (E355)', 'Cold Formed Structural Sections (CHS/SHS/RHS)', 'Precision Hydraulic Tubes'],
    grades: [
      {
        id: 'en-standards-pipe',
        slug: 'en-standards-pipe',
        name: 'EN Standards Pipe',
        code: 'Euronorm Certified Steel Piping',
        standard: 'EN 10216 / EN 10219 / EN 10294-1',
        uns: 'European Norm Steel Series',
        din: 'DIN EN Standards',
        shortDesc: 'Comprehensive European Standard steel piping certified with CE marking and EN 10204 3.1 inspection.',
        fullDesc: 'Manufactured in European certified mills conforming to Euronorm technical delivery conditions with full traceability, impact testing down to -50°C, and tight outer diameter tolerances.',
        specs: { size: '21.3mm to 812mm OD', schedule: 'EN Standard Wall Series', ends: 'Plain Ends / Beveled (30°)' },
        applications: ['Power plant steam boiler systems', 'Chemical and petrochem pressure conduits', 'Machined precision mechanical bushings', 'Architectural structural steel frameworks']
      },
      {
        id: 'en-10025-pipe',
        slug: 'en-10025-pipe',
        name: 'EN 10025 Pipe',
        code: 'EN 10025-2 (S235 / S275 / S355)',
        standard: 'EN 10025 / CE Marked',
        uns: 'EN 10025 Series',
        din: '1.0038 (S235JR) / 1.0577 (S355J2)',
        shortDesc: 'Non-alloy structural steel pipes and tubes in grades S235, S275, and S355 with specified minimum yield strength.',
        fullDesc: 'EN 10025 structural pipes provide excellent weldability and ductility for general construction, heavy civil foundations, and mechanical load-bearing frameworks.',
        specs: { size: '33.7mm to 1016mm OD', schedule: '3.0mm to 30.0mm Wall', ends: 'Plain / Beveled' },
        applications: ['Civil construction columns and trusses', 'Bridge superstructure circular hollow sections', 'Offshore wind turbine jacket tubulars', 'Heavy machinery supporting frames']
      },
      {
        id: 'en-10084-pipe',
        slug: 'en-10084-pipe',
        name: 'EN 10084 Pipe',
        code: 'EN 10084 Case Hardening Tube (16MnCr5)',
        standard: 'EN 10084 / DIN 17210',
        uns: 'EN 10084 Series',
        din: '1.7131 (16MnCr5) / 1.7147 (20MnCr5)',
        shortDesc: 'Case-hardening alloy steel tubes formulated for carburizing to achieve high surface wear hardness with a tough core.',
        fullDesc: 'EN 10084 tubes in 16MnCr5 or 20MnCr5 are widely utilized in automotive transmission shafts, mechanical pins, and sleeves where exceptional surface wear resistance is required after heat treatment.',
        specs: { size: '25mm to 200mm OD', schedule: 'Wall: 3mm to 25mm', ends: 'Square Cut for Machining' },
        applications: ['Automotive drive shafts and gear sleeves', 'Mining machine bearing bushes', 'Hydraulic cylinder piston tubes', 'High-wear mechanical rotational sleeves']
      },
      {
        id: 'en-10216-seamless-tube',
        slug: 'en-10216-seamless-tube',
        name: 'EN 10216-1/2/3/4 Seamless Steel Tube',
        code: 'EN 10216 Pressure Purpose Seamless Tube',
        standard: 'EN 10216 (Parts 1 to 4) / PED 2014/68/EU',
        uns: 'EN 10216 Series',
        din: '1.0254 (P235TR1) / 1.0425 (P265GH) / 1.7335 (13CrMo4-5)',
        shortDesc: 'European seamless steel tubes for pressure purposes: Part 1 non-alloy, Part 2 elevated temp (boilers), Part 3 fine-grain, Part 4 low temp.',
        fullDesc: 'EN 10216 is the governing European standard for seamless boiler and pressure vessel tubes. Features mandatory hydrostatic proof testing, eddy current inspection, and high creep rupture strength up to 600°C.',
        specs: { size: '10.2mm to 711mm OD', schedule: '1.6mm to 65mm Wall', ends: 'Beveled Ends (DIN 2559)' },
        applications: ['Power plant superheaters and economizers', 'Steam generation utility boilers', 'High-pressure chemical heat exchangers', 'Cryogenic low-temperature gas piping (-50°C)']
      },
      {
        id: 'en-10253-pipe',
        slug: 'en-10253-pipe',
        name: 'EN 10253-1/2 Pipe',
        code: 'EN 10253 Butt-Weld Fitting Tubulars',
        standard: 'EN 10253 (Part 1 & 2)',
        uns: 'EN 10253 Series',
        din: '1.0305 (P235GH) / 1.0405 (P265GH)',
        shortDesc: 'Pipes and tubular raw materials engineered for the fabrication of EN 10253 seamless and welded butt-welding pipe fittings.',
        fullDesc: 'Specially formulated hot-formed tubular stock with controlled elongation and ductility required for hot-mandrel elbow extrusion and tee forming.',
        specs: { size: '21.3mm to 610mm OD', schedule: 'Wall: 2.0mm to 35mm', ends: 'Plain / Beveled' },
        applications: ['Manufacture of EN butt-welding elbows and tees', 'Pressure equipment interconnecting spools', 'Process piping reducers and caps']
      },
      {
        id: 'en-10294-1-grade-e355-ar',
        slug: 'en-10294-1-grade-e355-ar',
        name: 'EN 10294-1 Grade E355+AR',
        code: 'EN 10294-1 E355+AR (As-Rolled)',
        standard: 'EN 10294-1 / ISO 2938',
        uns: 'EN 10294-1 E355+AR',
        din: '1.0570 (St 52-3 As Rolled)',
        shortDesc: 'Seamless steel hollow machining bar in as-rolled condition with guaranteed clean-up dimensions for mechanical engineering.',
        fullDesc: 'EN 10294-1 Grade E355+AR is supplied in the hot-rolled condition. Specifically engineered to save machining time, tool wear, and material weight compared to solid round bars when producing hollow cylindrical components.',
        specs: { size: '30mm OD x 20mm ID to 250mm OD x 150mm ID', schedule: 'Heavy Wall Machining Bar', ends: 'Square Cut / Centered' },
        applications: ['Machined mechanical bushings and collars', 'Hydraulic cylinder outer barrels', 'Conveyor roll axles and spacers', 'Agricultural machine hollow shafts']
      },
      {
        id: 'en-10294-1-grade-e355-n',
        slug: 'en-10294-1-grade-e355-n',
        name: 'EN 10294-1 Grade E355+N',
        code: 'EN 10294-1 E355+N (Normalized)',
        standard: 'EN 10294-1 / ISO 2938',
        uns: 'EN 10294-1 E355+N',
        din: '1.0570+N (St 52-3 Normalized)',
        shortDesc: 'Normalized fine-grain seamless hollow bar delivering uniform grain structure, high toughness, and superior machinability.',
        fullDesc: 'Supplied in the normalized (+N) condition, ensuring homogenous mechanical properties and low residual stress throughout the wall thickness. Yield strength minimum 355 MPa with excellent transverse impact resistance.',
        specs: { size: '30mm to 300mm OD', schedule: 'Guaranteed Machining Clean-Up Size', ends: 'Square Cut Ends' },
        applications: ['Precision hydraulic cylinders and rams', 'Crane swivel bushings and pivot pins', 'Heavy automotive drive shafts', 'Marine steering gear mechanical sleeves']
      },
      {
        id: 'en-10294-1-grade-e235',
        slug: 'en-10294-1-grade-e235',
        name: 'EN 10294-1 Grade E235',
        code: 'EN 10294-1 E235 Hollow Bar',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E235',
        din: '1.0308 (St 35)',
        shortDesc: 'Mild carbon steel seamless hollow machining bar with minimum yield strength of 235 MPa and exceptional cold formability.',
        fullDesc: 'E235 hollow bar provides high ductility, excellent weldability, and low hardness for high-speed automated turning and drilling of non-critical bushings and spacers.',
        specs: { size: '25mm to 180mm OD', schedule: 'Wall: 3mm to 20mm', ends: 'Plain Square Cut' },
        applications: ['Turned mechanical spacers and sleeves', 'Lightweight automotive suspension bushings', 'Apparatus manufacturing hollow components']
      },
      {
        id: 'en-10294-1-grade-e275',
        slug: 'en-10294-1-grade-e275',
        name: 'EN 10294-1 Grade E275',
        code: 'EN 10294-1 E275 Hollow Bar',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E275',
        din: '1.0440 (St 44)',
        shortDesc: 'Intermediate strength (275 MPa yield) seamless hollow bar balancing high machinability and load-bearing capacity.',
        fullDesc: 'Delivers reliable mechanical strength without requiring pre-heating for welding. Optimized for general machinery construction and structural sleeves.',
        specs: { size: '30mm to 200mm OD', schedule: 'Wall: 4mm to 25mm', ends: 'Square Cut' },
        applications: ['Machined flanged bushings', 'Gearbox bearing retainer sleeves', 'Pneumatic cylinder barrels']
      },
      {
        id: 'en-10294-1-grade-e315',
        slug: 'en-10294-1-grade-e315',
        name: 'EN 10294-1 Grade E315',
        code: 'EN 10294-1 E315 Hollow Bar',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E315',
        din: '1.0505',
        shortDesc: 'Minimum yield 315 MPa engineering hollow bar providing enhanced tensile resistance for mechanical components.',
        fullDesc: 'Engineered for mechanical components operating under moderate dynamic loads. Provides reliable chip formation during automated CNC lathing.',
        specs: { size: '30mm to 220mm OD', schedule: 'Wall: 5mm to 30mm', ends: 'Square Cut' },
        applications: ['Industrial roll bodies and guide wheels', 'Heavy-duty pin sleeves', 'Earthmoving equipment pivot bushes']
      },
      {
        id: 'en-10294-1-grade-e355',
        slug: 'en-10294-1-grade-e355',
        name: 'EN 10294-1 Grade E355',
        code: 'EN 10294-1 Grade E355 Standard',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E355',
        din: '1.0570 (St 52-3)',
        shortDesc: 'Standard high-strength (355 MPa yield) European engineering hollow bar; the industry benchmark for machined parts.',
        fullDesc: 'E355 is the most frequently specified hollow bar across global mechanical engineering. Replaces solid round bars to achieve up to 60% weight reduction and faster drilling cycles.',
        specs: { size: '30mm to 250mm OD', schedule: 'Wall: 5mm to 50mm', ends: 'Square Cut / Centered' },
        applications: ['Hydraulic cylinder barrels and cylinder heads', 'Industrial gear blanks and couplings', 'Cranes and earthmover mechanical bushings', 'Automotive front axle sleeves']
      },
      {
        id: 'en-10294-1-grade-e275k2',
        slug: 'en-10294-1-grade-e275k2',
        name: 'EN 10294-1 Grade E275K2',
        code: 'EN 10294-1 E275K2 (Low Temp Impact)',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E275K2',
        din: '1.0456 (Low Temp)',
        shortDesc: 'Low-temperature impact tested (40J at -20°C) engineering hollow bar for cold-climate mechanical operations.',
        fullDesc: 'Features fine grain aluminum treatment with guaranteed Charpy V-notch impact energy at -20°C. Prevents brittle fracture in outdoor Arctic and high-altitude machinery.',
        specs: { size: '35mm to 200mm OD', schedule: 'Wall: 5mm to 30mm', ends: 'Square Cut' },
        applications: ['Sub-zero operating crane sleeves', 'Cold climate oilfield machinery components', 'Railway rolling stock pivot bushings']
      },
      {
        id: 'en-10294-1-grade-e355k2',
        slug: 'en-10294-1-grade-e355k2',
        name: 'EN 10294-1 Grade E355K2',
        code: 'EN 10294-1 E355K2 (Low Temp Impact)',
        standard: 'EN 10294-1',
        uns: 'EN 10294-1 E355K2',
        din: '1.0577 (S355J2 Equivalent)',
        shortDesc: 'High-strength (355 MPa) hollow bar with guaranteed 40J Charpy V-notch impact toughness at -20°C.',
        fullDesc: 'Combines 355 MPa yield strength with proven sub-zero impact endurance. Widely utilized in offshore drilling winch sleeves, mining machinery, and polar exploration vehicles.',
        specs: { size: '35mm to 250mm OD', schedule: 'Wall: 5mm to 40mm', ends: 'Square Cut' },
        applications: ['Offshore drilling winch and crane components', 'Arctic earthmoving machine bushings', 'Wind turbine pitch control mechanical sleeves']
      },
      {
        id: 'en-10219-s235jrh-pipe',
        slug: 'en-10219-s235jrh-pipe',
        name: 'EN 10219 S235JRH Pipe',
        code: 'EN 10219 S235JRH Cold Formed Hollow Section',
        standard: 'EN 10219 (Part 1 & 2)',
        uns: 'EN 10219 S235JRH',
        din: '1.0039 (S235JRH)',
        shortDesc: 'Cold formed welded structural hollow section with minimum yield 235 MPa for general building frames and handrails.',
        fullDesc: 'Manufactured from hot rolled steel strip by cold forming and high-frequency welding. Tested for flattening, tensile, and weld integrity per EN 10219.',
        specs: { size: '21.3mm to 508mm OD', schedule: '2.0mm to 16.0mm Wall', ends: 'Square Cut' },
        applications: ['General structural framing and handrails', 'Agricultural equipment frames', 'Light commercial roof trusses']
      },
      {
        id: 'en-10219-s275j0h-pipe',
        slug: 'en-10219-s275j0h-pipe',
        name: 'EN 10219 S275J0H Pipe',
        code: 'EN 10219 S275J0H (0°C Impact Tested)',
        standard: 'EN 10219',
        uns: 'EN 10219 S275J0H',
        din: '1.0149 (S275J0H)',
        shortDesc: 'Cold formed structural hollow section with minimum 275 MPa yield and 27J impact test at 0°C.',
        fullDesc: 'Provides higher structural load efficiency than S235 with guaranteed toughness at freezing temperatures. Widely used across European construction.',
        specs: { size: '33.7mm to 610mm OD', schedule: '2.5mm to 20.0mm Wall', ends: 'Square Cut / Beveled' },
        applications: ['Industrial canopy and shed columns', 'Highway sign gantries', 'Material handling conveyor frames']
      },
      {
        id: 'en-10219-s355j0h-pipe',
        slug: 'en-10219-s355j0h-pipe',
        name: 'EN 10219 S355J0H Pipe',
        code: 'EN 10219 S355J0H (355 MPa High Yield)',
        standard: 'EN 10219',
        uns: 'EN 10219 S355J0H',
        din: '1.0547 (S355J0H)',
        shortDesc: 'High-strength cold formed hollow section (355 MPa yield) with 27J impact energy at 0°C for demanding civil structures.',
        fullDesc: 'S355J0H is the preferred high-strength Euronorm structural grade for reducing member weight in high-rise building columns, sports stadium trusses, and bridges.',
        specs: { size: '42.4mm to 812mm OD', schedule: '3.0mm to 25.0mm Wall', ends: 'Beveled / Square Cut' },
        applications: ['Stadium roof trusses and arch supports', 'High-rise composite building columns', 'Bridge arch tubulars and bracing members', 'Offshore platform living quarters framing']
      },
      {
        id: 'en-10219-structure-pipe',
        slug: 'en-10219-structure-pipe',
        name: 'EN 10219 Structure Pipe',
        code: 'EN 10219 CHS / SHS / RHS Structural Pipe',
        standard: 'EN 10219 / CE EN 1090',
        uns: 'EN 10219 General Structural',
        din: 'Euronorm Hollow Section Series',
        shortDesc: 'Circular, square, and rectangular cold-formed welded structural steel hollow sections conforming to Euronorm civil standards.',
        fullDesc: 'Certified for CE marking execution class EXC3/EXC4 under EN 1090. High strength-to-weight ratio, clean aesthetic profiles, and excellent torsional rigidity.',
        specs: { size: '21.3mm to 1219mm OD', schedule: '2.0mm to 40.0mm Wall', ends: 'Square Cut / Beveled' },
        applications: ['Architectural exposed steel structures (AESS)', 'Airport terminal space frames', 'Industrial plant pipe rack superstructures', 'Tower crane structural tubular masts']
      }
    ]
  },
  {
    id: 'aluminum-pipe',
    slug: 'aluminum-pipe',
    aliases: ['aluminum', 'aluminium', 'aluminium-pipe', 'aluminum-pipes'],
    name: 'Aluminum Pipe',
    headline: 'High-Strength Lightweight & Corrosion-Resistant Aluminum Alloy Seamless Piping',
    image: img_aluminum_pipe,
    shortDesc: 'Premium extruded seamless aluminum and aluminum alloy pipes manufactured to ASTM B241 and EN 755 for aerospace fluid systems, marine shipbuilding, cryogenic storage, and structural engineering.',
    standards: 'ASTM B241 / ASME SB241, ASTM B221, ASTM B429, EN 755-1/2, AMS 4000 Series',
    sizeRange: '1/4" NB to 16" NB (Seamless up to 12" OD)',
    schedules: 'SCH 10, SCH 40, SCH 80, SCH 160',
    availableForms: ['Extruded Seamless Pipe', 'Drawn Round Tube', 'Marine Structural Pipe', 'Anodized Architectural Pipe'],
    grades: [
      {
        id: 'aluminum-pipe',
        slug: 'aluminum-pipe',
        name: 'Aluminum Pipe',
        code: 'ASTM B241 Commercial Aluminum',
        standard: 'ASTM B241 / ASME SB241',
        uns: 'Aluminum Series',
        din: 'EN AW Series',
        shortDesc: 'Commercial extruded seamless aluminum pipe offering one-third the weight of steel, high thermal conductivity, and corrosion resistance.',
        fullDesc: 'Manufactured by seamless extrusion over a mandrel. Features natural atmospheric oxide passivity, non-magnetic properties, and spark-free safety for fuel and pneumatic lines.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10, SCH 40, SCH 80', ends: 'Plain Ends / Beveled' },
        applications: ['Industrial pneumatic air lines', 'Chemical transfer fluid lines', 'Refrigeration and HVAC distribution loops', 'Cryogenic liquefied gas storage systems']
      },
      {
        id: '2014-aluminum-pipe',
        slug: '2014-aluminum-pipe',
        name: '2014 Aluminum Pipe',
        code: 'ASTM B241 Alloy 2014-T6',
        standard: 'ASTM B241 / AMS 4121',
        uns: 'UNS A92014',
        din: '3.1255 (EN AW-2014)',
        shortDesc: 'Copper-alloyed high-strength aerospace aluminum pipe delivering exceptional hardness and tensile strength up to 480 MPa.',
        fullDesc: '2014-T6 is an aluminum-copper-silicon alloy widely used in aerospace structures and heavy-duty vehicles. Provides excellent machinability and high mechanical load-bearing capacity under tension.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 40, SCH 80', ends: 'Plain Cut / Beveled' },
        applications: ['Aerospace aircraft structural frames and landing gear', 'Military vehicle hydraulic lines', 'Heavy transport structural members']
      },
      {
        id: '5052-aluminum-pipe',
        slug: '5052-aluminum-pipe',
        name: '5052 Aluminum Pipe',
        code: 'ASTM B241 Alloy 5052-H32 / H34',
        standard: 'ASTM B241 / AMS 4070',
        uns: 'UNS A95052',
        din: '3.3523 (EN AW-5052 / AlMg2.5)',
        shortDesc: 'Al-Mg alloy pipe with superior resistance to salt spray, marine atmospheres, and exceptional fatigue strength.',
        fullDesc: '5052 is a non-heat-treatable alloy with high fatigue endurance and excellent workability. Unaffected by marine atmospheric corrosion and widely used in hydraulic fluid lines.',
        specs: { size: '1/4" to 8" NB', schedule: 'SCH 10, SCH 40', ends: 'Plain Ends' },
        applications: ['Marine fuel and oil lines', 'Aircraft fuel conduits and hydraulic lines', 'Electronic chassis cooling ducts', 'Chemical storage tank piping']
      },
      {
        id: '5083-aluminum-pipe',
        slug: '5083-aluminum-pipe',
        name: '5083 Aluminum Pipe',
        code: 'ASTM B241 Alloy 5083-H111 / H112',
        standard: 'ASTM B241 / EN 755',
        uns: 'UNS A95083',
        din: '3.3547 (EN AW-5083 / AlMg4.5Mn0.7)',
        shortDesc: 'High-magnesium marine alloy pipe delivering ultimate seawater resistance and cryogenic toughness down to -196°C.',
        fullDesc: '5083 is the premier alloy for shipbuilding and cryogenic technology. Retains exceptional ductility and impact strength without brittle transition at liquid nitrogen temperatures (-196°C). Immune to stress corrosion in marine environments.',
        specs: { size: '1/2" to 12" NB', schedule: 'SCH 10, SCH 40, SCH 80', ends: 'Beveled Ends' },
        applications: ['Shipbuilding hull seawater piping', 'LNG and liquid nitrogen cryogenic tanks and lines', 'Offshore drilling rig helicopter landing deck piping', 'Pressure vessels and rail transport tanks']
      },
      {
        id: '5086-aluminum-pipe',
        slug: '5086-aluminum-pipe',
        name: '5086 Aluminum Pipe',
        code: 'ASTM B241 Alloy 5086-H116 / H32',
        standard: 'ASTM B241 / ASTM B221',
        uns: 'UNS A95086',
        din: '3.3545 (EN AW-5086 / AlMg4)',
        shortDesc: 'Marine structural grade pipe offering high post-weld joint efficiency and supreme corrosion resistance.',
        fullDesc: '5086-H116 is specifically tempered to prevent intergranular and exfoliation corrosion in continuous saltwater submersion. Retains higher strength in the weld heat-affected zone than 5052.',
        specs: { size: '1/2" to 10" NB', schedule: 'SCH 10, SCH 40, SCH 80', ends: 'Beveled Ends' },
        applications: ['High-speed patrol vessel and yacht piping', 'Naval marine superstructures', 'Offshore gangways and marine structural tubulars']
      },
      {
        id: '6061-aluminum-pipe',
        slug: '6061-aluminum-pipe',
        name: '6061 Aluminum Pipe',
        code: 'ASTM B241 Alloy 6061-T6 Seamless',
        standard: 'ASTM B241 / ASME SB241',
        uns: 'UNS A96061',
        din: '3.3211 (EN AW-6061 / AlMg1SiCu)',
        shortDesc: 'Versatile heat-treated (T6) structural aluminum pipe combining medium-to-high strength, good weldability, and corrosion resistance.',
        fullDesc: '6061-T6 is the universal workhorse aluminum pipe. Delivers yield strength of 276 MPa (40 ksi) with excellent machinability, anodizing response, and structural reliability under pressure.',
        specs: { size: '1/4" to 12" NB', schedule: 'SCH 10, SCH 40, SCH 80, SCH 160', ends: 'Plain / Beveled (37.5°)' },
        applications: ['Structural pipe railings and handrails', 'High-pressure hydraulic and pneumatic piping', 'Robotics and industrial automation frameworks', 'Compressed air distribution loops']
      },
      {
        id: '6063-aluminum-pipe',
        slug: '6063-aluminum-pipe',
        name: '6063 Aluminum Pipe',
        code: 'ASTM B241 Alloy 6063-T6 / T52',
        standard: 'ASTM B241 / ASTM B429',
        uns: 'UNS A96063',
        din: '3.3206 (EN AW-6063 / AlMg0.7Si)',
        shortDesc: 'Architectural aluminum pipe engineered for ultra-smooth surface finish, fine extrusion details, and brilliant anodizing.',
        fullDesc: '6063 provides higher surface aesthetic quality and formability than 6061. Widely utilized in visible architectural systems, decorative furniture, cleanrooms, and electrical bus conduits.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 10, SCH 40', ends: 'Square Cut / Deburred' },
        applications: ['Architectural railings and building facades', 'Cleanroom and pharmaceutical framing', 'Electrical conduit and busbar enclosures', 'Irrigation and greenhouse pipe systems']
      },
      {
        id: '7075-aluminum-pipe',
        slug: '7075-aluminum-pipe',
        name: '7075 Aluminum Pipe',
        code: 'ASTM B241 Alloy 7075-T6 (Zinc-Alloyed)',
        standard: 'ASTM B241 / AMS 4154',
        uns: 'UNS A97075',
        din: '3.4365 (EN AW-7075 / AlZn5.5MgCu)',
        shortDesc: 'Ultra-high-strength (503 MPa yield) zinc-alloyed aluminum pipe with strength comparable to structural steel.',
        fullDesc: '7075-T6 is one of the highest-strength aluminum alloys commercially produced. Delivers exceptional strength-to-weight ratio for critical aerospace, defense, and high-stress mechanical tubular components.',
        specs: { size: '1/2" to 8" NB', schedule: 'SCH 40, SCH 80', ends: 'Precision Plain Cut' },
        applications: ['Aerospace aircraft landing gear tubulars', 'Missile and rocketry casing components', 'High-stress defense and tactical equipment', 'High-performance automotive drive shafts']
      }
    ]
  }
];

// Fast helper lookups
const _categoriesMap = new Map();
const _gradesByCatMap = new Map();
const _gradeBySlugMap = new Map();

PIPE_CATEGORIES.forEach(cat => {
  _categoriesMap.set(cat.slug, cat);
  _categoriesMap.set(cat.id, cat);
  if (cat.aliases) {
    cat.aliases.forEach(a => _categoriesMap.set(a, cat));
  }

  const gradesList = cat.grades || [];
  _gradesByCatMap.set(cat.slug, gradesList);

  gradesList.forEach(g => {
    _gradeBySlugMap.set(`${cat.slug}/${g.slug}`, g);
    _gradeBySlugMap.set(g.slug, { ...g, parentCategory: cat });
    _gradeBySlugMap.set(g.id, { ...g, parentCategory: cat });
  });
});

export function getAllPipeCategories() {
  return PIPE_CATEGORIES;
}

export function getPipeCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = String(slug).toLowerCase().trim();
  return _categoriesMap.get(clean) || null;
}

export function getPipeGradeBySlug(categorySlug, gradeSlug) {
  if (!gradeSlug) return null;
  const cleanGrade = String(gradeSlug).toLowerCase().trim();
  if (categorySlug) {
    const cleanCat = String(categorySlug).toLowerCase().trim();
    const direct = _gradeBySlugMap.get(`${cleanCat}/${cleanGrade}`);
    if (direct) {
      const parentCat = _categoriesMap.get(cleanCat);
      return { ...direct, parentCategory: parentCat };
    }
  }
  return _gradeBySlugMap.get(cleanGrade) || null;
}
