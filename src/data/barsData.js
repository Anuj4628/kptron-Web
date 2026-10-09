/**
 * Dedicated Bars & Rods Product Catalog Data & Verified Grades Specifications
 * Standards: ASTM A276, ASTM A479, ASTM A182, ASTM A105, ASTM A350, ASTM B166, ASTM B164, ASTM B574, ASTM B160, ASTM B151, ASTM B348, AMS 6512/6514
 */

import img_ss_bars from '../assets/New Product img/Bars/ss-bars.jpg';
import img_duplex_bars from '../assets/New Product img/Bars/duplex-steel-bars.jpg';
import img_cs_bars from '../assets/New Product img/Bars/cs-bars.jpg';
import img_alloy_bars from '../assets/New Product img/Bars/alloy-steel-bars.jpg';
import img_inconel_bars from '../assets/New Product img/Bars/inconel-bars.jpg';
import img_monel_bars from '../assets/New Product img/Bars/monel-bars.jpg';
import img_hastelloy_bars from '../assets/New Product img/Bars/hastelloy-bars.jpg';
import img_nickel_bars from '../assets/New Product img/Bars/nickel-bars.jpg';
import img_cu_ni_bars from '../assets/New Product img/Bars/copper-nickel-bars.jpg';
import img_titanium_bars from '../assets/New Product img/Bars/titanium-bars.jpg';
import img_maraging_bars from '../assets/New Product img/Bars/maraging-350.jpg';

export const BARS_CATEGORIES = [
  {
    id: 'stainless-steel-bars',
    slug: 'stainless-steel-bars',
    materialSlug: 'stainless-steel',
    materialName: 'Stainless Steel',
    aliases: ["stainless-steel","stainless","ss-bars","stainless-steel-bars"],
    name: 'Stainless Steel Bars',
    title: 'Stainless Steel Bars',
    image: img_ss_bars,
    standards: 'ASTM A276 / ASME SA276, ASTM A479, EN 10088-3, DIN 1013',
    sizeRange: '2 mm to 350 mm Diameter | Hex: 4 mm to 120 mm | Square: 5 mm to 200 mm',
    finishes: 'Cold Drawn, Centerless Ground, Rough Turned, Peeled & Polished, Black Forged',
    availableForms: ['Solid Round Bar', 'Hexagonal Bar', 'Square Bar', 'Precision Ground Shaft', 'Threaded Rod'],
    shortDesc: 'Precision cold drawn, centerless ground, and hot rolled stainless steel solid round bars and hex shafts offering high tensile strength, exceptional machinability, and superior corrosion resistance across industrial environments.',
    grades: [
      {
        id: 'ss-bars-general',
        slug: 'ss-bars',
        name: 'SS Bars',
        code: 'ASTM A276 / ASTM A479 Commercial & Structural',
        standard: 'ASTM A276, ASTM A479, EN 10088-3',
        uns: 'UNS S30000 / S40000 Series',
        din: 'DIN 1013 / EN 10088-3',
        shortDesc: 'Mill-certified solid stainless steel bars supplied in peeled, ground, and cold-drawn executions for machining and construction.',
        fullDesc: 'Prime certified commercial and engineering stainless steel solid bars available in round, hex, and square profiles. Furnished with tight diameter tolerances (h8/h9) and superior surface finishes for shafting, fasteners, and fluid handling components.',
        specs: { diameter: '3 mm to 350 mm', conditions: 'Cold Drawn, Peeled, Ground, Forged', tolerances: 'h8, h9, h11, k12', lengths: '3 to 6 Meters' },
        applications: ['Pump shafts and drive axles', 'Precision turned components and hardware', 'Food and beverage machinery', 'Petrochemical fluid valves']
      },
      {
        id: 'ss-304-304l-bars',
        slug: 'ss-304-304l-bars',
        name: 'SS 304 / 304L Bars',
        code: 'ASTM A276 / A479 TP304 / TP304L Dual Certified',
        standard: 'ASTM A276, ASTM A479, ASME SA479',
        uns: 'UNS S30400 / UNS S30403',
        din: '1.4301 / 1.4307 (X2CrNi18-9)',
        shortDesc: 'Dual-certified 18/8 austenitic stainless round and hex bars with low carbon content for enhanced weldability and corrosion resistance.',
        fullDesc: 'Solution annealed 304/304L stainless steel bars characterized by excellent ductility, superior forming capabilities, and high resistance to atmospheric corrosion. Low carbon content eliminates intergranular carbide precipitation during welding.',
        specs: { diameter: '2 mm to 300 mm', conditions: 'Cold Drawn, Centerless Ground, Annealed', tolerances: 'ISO h8, h9, h11', lengths: '3m to 6.5m (Cut to size available)' },
        applications: ['Food processing and pharmaceutical shafts', 'Chemical processing valves and fittings', 'Architectural framing and tie rods', 'Cryogenic container structural components']
      },
      {
        id: 'ss-316-316l-316h-bars',
        slug: 'ss-316-316l-316h-bars',
        name: 'SS 316 / 316L / 316H Bars',
        code: 'ASTM A276 / A479 TP316 / TP316L / TP316H',
        standard: 'ASTM A276, ASTM A479, ASME SA479',
        uns: 'UNS S31600 / UNS S31603 / UNS S31609',
        din: '1.4401 / 1.4404 / 1.4919',
        shortDesc: 'Molybdenum-bearing 2-3% Mo austenitic stainless bars offering outstanding resistance to pitting and crevice corrosion in chloride media.',
        fullDesc: 'Premium 316/316L/316H stainless solid bars designed for aggressive marine and chemical service. 316H provides elevated creep strength at operating temperatures above 500°C, while 316L provides superior resistance to intergranular corrosion post-welding.',
        specs: { diameter: '3 mm to 350 mm', conditions: 'Solution Annealed, Cold Drawn, Precision Ground', tolerances: 'h8, h9, DIN 1013', lengths: '3m to 6m' },
        applications: ['Marine propeller shafts and rudder stocks', 'Offshore oil and gas instrumentation fittings', 'Pulp and paper bleaching equipment', 'High-temperature pressure vessel bolting (316H)']
      },
      {
        id: 'ss-316ti-bars',
        slug: 'ss-316ti-bars',
        name: 'SS 316Ti Bars',
        code: 'ASTM A276 / A479 TP316Ti Titanium Stabilized',
        standard: 'ASTM A276, EN 10088-3',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        shortDesc: 'Titanium-stabilized austenitic stainless bar resisting sensitization during prolonged exposure to temperatures between 550°C and 800°C.',
        fullDesc: 'Type 316Ti contains titanium additions equivalent to at least 5 times the carbon content, forming stable titanium carbides and preventing chromium depletion at grain boundaries under elevated thermal cycles.',
        specs: { diameter: '5 mm to 250 mm', conditions: 'Annealed, Centerless Ground, Rough Turned', tolerances: 'h9, h11, k12', lengths: '3 to 6 Meters' },
        applications: ['Exhaust gas scrubber components', 'Chemical reactor agitator shafts', 'High-temperature heat exchanger tie rods', 'Automotive exhaust sensors and flanges']
      },
      {
        id: 'ss-310-310s-bars',
        slug: 'ss-310-310s-bars',
        name: 'SS 310 / 310S Bars',
        code: 'ASTM A276 / A479 TP310 / TP310S High Temperature',
        standard: 'ASTM A276, ASTM A479, EN 10095',
        uns: 'UNS S31000 / UNS S31008',
        din: '1.4841 / 1.4845 (X15CrNiSi25-21)',
        shortDesc: 'High chromium-nickel (25Cr-20Ni) heat-resistant bars capable of continuous operation up to 1150°C in oxidizing atmospheres.',
        fullDesc: 'Refractory grade austenitic bars providing high resistance to cyclic thermal scaling, carburization, and sulfidation. Widely selected for furnace parts, burner nozzles, and thermal treatment fixtures where strength at extreme temperature is critical.',
        specs: { diameter: '6 mm to 250 mm', conditions: 'Hot Rolled, Cold Drawn, Annealed', tolerances: 'h9, h11, ASTM A484', lengths: '3m to 6m' },
        applications: ['Furnace drive rollers and hearth bars', 'Heat treatment baskets and racks', 'Cement kiln burner components', 'Fluidized bed boiler support pins']
      },
      {
        id: 'ss-317-317l-bars',
        slug: 'ss-317-317l-bars',
        name: 'SS 317 / 317L Bars',
        code: 'ASTM A276 / A479 TP317 / TP317L High Moly',
        standard: 'ASTM A276, ASTM A479, ASME SA479',
        uns: 'UNS S31700 / UNS S31703',
        din: '1.4449 / 1.4438 (X2CrNiMo18-15-4)',
        shortDesc: 'High-molybdenum (3-4% Mo) stainless steel bars providing enhanced resistance to pitting and stress cracking in acidic environments.',
        fullDesc: 'Grade 317L provides substantially higher tensile and creep-rupture strengths than 316L, combined with exceptional resistance to sulfuric acid, formic acid, sulfurous vapors, and halogen compounds.',
        specs: { diameter: '6 mm to 200 mm', conditions: 'Solution Annealed, Peeled, Ground', tolerances: 'h9, h11', lengths: '3 to 6 Meters' },
        applications: ['Flue gas desulfurization (FGD) systems', 'Textile dyeing plant agitator shafts', 'Petrochemical acid-wash shafts', 'Explosives manufacturing equipment']
      },
      {
        id: 'ss-321-321h-bars',
        slug: 'ss-321-321h-bars',
        name: 'SS 321 / 321H Bars',
        code: 'ASTM A276 / A479 TP321 / TP321H Titanium Stabilized',
        standard: 'ASTM A276, ASTM A479, ASME SA479',
        uns: 'UNS S32100 / UNS S32109',
        din: '1.4541 / 1.4878 (X6CrNiTi18-10)',
        shortDesc: 'Titanium-stabilized austenitic stainless bars optimized for continuous service in the chromium carbide precipitation range (425°C to 850°C).',
        fullDesc: 'Stabilized with titanium to safeguard against intergranular corrosion after high-temperature exposure. Type 321H contains higher carbon (0.04-0.10%) to deliver significantly higher creep rupture strength for high-temperature service.',
        specs: { diameter: '4 mm to 250 mm', conditions: 'Annealed, Cold Finished, Rough Turned', tolerances: 'h9, h11, ASTM A484', lengths: '3m to 6m' },
        applications: ['Aircraft exhaust manifolds and piston shafts', 'Refinery thermal cracking equipment', 'High-temperature boiler support hangers', 'Superheater header tie rods']
      },
      {
        id: 'ss-347-347h-bars',
        slug: 'ss-347-347h-bars',
        name: 'SS 347 / 347H Bars',
        code: 'ASTM A276 / A479 TP347 / TP347H Niobium Stabilized',
        standard: 'ASTM A276, ASTM A479, ASME SA479',
        uns: 'UNS S34700 / UNS S34709',
        din: '1.4550 / 1.4961 (X6CrNiNb18-10)',
        shortDesc: 'Niobium/columbium stabilized austenitic stainless bars providing high creep resistance and resistance to intergranular attack.',
        fullDesc: 'Stabilized by columbium plus tantalum additions, Grade 347 completely mitigates intergranular corrosion during welding and high-temperature service up to 800°C. Frequently used where operating conditions preclude post-weld annealing.',
        specs: { diameter: '6 mm to 220 mm', conditions: 'Solution Treated, Cold Drawn, Turned', tolerances: 'h9, h11, k12', lengths: '3 to 6 Meters' },
        applications: ['Rocket engine components and thrust chambers', 'Heavy wall boiler superheaters', 'Catalytic cracking regeneration units', 'High-temperature valve stems and shafts']
      },
      {
        id: 'ss-17-4-ph-bar',
        slug: 'ss-17-4-ph-bar',
        name: 'SS 17-4 PH Bar',
        code: 'ASTM A564 Grade 630 / Type 17-4 PH Precipitation Hardened',
        standard: 'ASTM A564, AMS 5643, ASME SA564',
        uns: 'UNS S17400',
        din: '1.4542 (X5CrNiCuNb16-4)',
        shortDesc: 'Martensitic precipitation hardening stainless bar combining high yield strength, fracture toughness, and 304-level corrosion resistance.',
        fullDesc: '17-4 PH (AISI 630) develops exceptional strength through simple low-temperature heat treatment (H900, H1025, H1075, H1150, H1150M). Exhibits negligible distortion during heat treatment, making it ideal for precision pump shafts and aerospace fasteners.',
        specs: { diameter: '4 mm to 300 mm', conditions: 'Condition A, H900, H1025, H1150, H1150-D', tolerances: 'h8, h9, ASTM A484', lengths: '3 to 6 Meters' },
        applications: ['Pump shafts, boat shafting, and valve spindles', 'Aerospace structural actuators and fittings', 'Nuclear reactor core components', 'Offshore oil tool drill collars']
      },
      {
        id: 'ss-15-5-ph-bar',
        slug: 'ss-15-5-ph-bar',
        name: 'SS 15-5 PH Bar',
        code: 'ASTM A564 XM-12 / 15-5 PH Vacuum Arc Remelted',
        standard: 'ASTM A564, AMS 5659',
        uns: 'UNS S15500',
        din: '1.4545 (X5CrNiCuNb15-5)',
        shortDesc: 'Ferrite-free, vacuum-arc remelted (VAR) precipitation-hardening stainless bar with superior transverse toughness and ductility.',
        fullDesc: 'A modification of 17-4 PH engineered with microstructural homogeneity, 15-5 PH eliminates delta ferrite to provide remarkable short-transverse fracture toughness, fatigue resistance, and high strength in critical multi-axial stress environments.',
        specs: { diameter: '6 mm to 250 mm', conditions: 'Condition A, H900, H1025, H1075, H1150', tolerances: 'h9, h11, AMS 5659', lengths: '3 to 6 Meters' },
        applications: ['Aircraft landing gear pins and flap tracks', 'High-pressure valve gate shafts', 'Marine gas turbine components', 'Downhole completion tools']
      },
      {
        id: 'ss-13-8-ph-bar',
        slug: 'ss-13-8-ph-bar',
        name: 'SS 13-8 PH Bar',
        code: 'ASTM A564 XM-13 / 13-8 Mo PH Double Vacuum Melted',
        standard: 'ASTM A564, AMS 5629',
        uns: 'UNS S13800',
        din: '1.4534 (X3CrNiMoAl13-8-2)',
        shortDesc: 'VIM-VAR double-melted precipitation-hardening bar offering ultra-high strength, superior stress-corrosion resistance, and high fracture toughness.',
        fullDesc: 'Produced by vacuum induction melting followed by vacuum arc remelting, 13-8 Mo offers exceptional purity, low residual elements, and remarkable resistance to stress corrosion cracking even in harsh marine and sour gas environments.',
        specs: { diameter: '8 mm to 200 mm', conditions: 'Condition A, H950, H1000, H1050, H1100', tolerances: 'h9, AMS 5629', lengths: '2 to 6 Meters' },
        applications: ['Motorsport and aerospace drive shafts', 'High-pressure missile airframe pins', 'Subsea blow-out preventer shafts', 'Surgical instrument blanks and orthopedic pins']
      },
      {
        id: 'ss-17-7-ph-bar',
        slug: 'ss-17-7-ph-bar',
        name: 'SS 17-7 PH Bar',
        code: 'ASTM A564 631 / 17-7 PH Semi-Austenitic',
        standard: 'ASTM A564, AMS 5644',
        uns: 'UNS S17700',
        din: '1.4568 (X7CrNiAl17-7)',
        shortDesc: 'Semi-austenitic precipitation-hardening bar combining high strength, spring elasticity, and excellent fatigue properties.',
        fullDesc: '17-7 PH provides high strength through transformation from austenite to martensite followed by precipitation hardening heat treatment (TH1050, RH950, CH900). Retains high fatigue strength and elasticity up to 315°C.',
        specs: { diameter: '4 mm to 150 mm', conditions: 'Condition A, TH1050, RH950', tolerances: 'h9, h11', lengths: '2 to 5 Meters' },
        applications: ['Precision aerospace spring shafts', 'Diaphragm actuator stems', 'Retaining rings and Belleville washers', 'High-stress instrumentation pins']
      },
      {
        id: 'nitronic-50-xm-19-bar',
        slug: 'nitronic-50-xm-19-bar',
        name: 'Nitronic 50 - XM 19 Bar',
        code: 'ASTM A276 / A479 XM-19 (Nitronic 50 / N-50)',
        standard: 'ASTM A276, ASTM A479, NACE MR0175',
        uns: 'UNS S20910',
        din: '1.3964 (X2CrNiMnMoNNb21-16-5-3)',
        shortDesc: 'High-nitrogen austenitic stainless bar with nearly double the yield strength of 316 and outstanding marine corrosion resistance.',
        fullDesc: 'Nitronic 50 (XM-19) provides outstanding resistance to sulfide stress cracking, pitting, and crevice corrosion in seawater and marine environments, remaining completely non-magnetic even after severe cold working.',
        specs: { diameter: '6 mm to 250 mm', conditions: 'Annealed, High Strength Hot Rolled', tolerances: 'h9, h11, ASTM A484', lengths: '3 to 6 Meters' },
        applications: ['Marine propeller shafts and pump rods', 'Downhole subsea valve trim', 'Medical bone pins and prosthetics', 'High-strength marine rigging hardware']
      },
      {
        id: 'nitronic-60-bar',
        slug: 'nitronic-60-bar',
        name: 'Nitronic 60 Bar',
        code: 'ASTM A276 / A479 Alloy 218 (Nitronic 60 / N-60)',
        standard: 'ASTM A276, ASTM A479',
        uns: 'UNS S21800',
        din: 'Alloy 218',
        shortDesc: 'Premium anti-galling and wear-resistant austenitic stainless bar engineered for metal-to-metal rubbing contact without seizure.',
        fullDesc: 'Alloyed with 4% silicon and 8% manganese, Nitronic 60 offers superior galling resistance compared to cobalt alloys, eliminating the need for expensive hardfacing or coatings in valves, fasteners, and rotating machinery shafts.',
        specs: { diameter: '8 mm to 220 mm', conditions: 'Annealed, Cold Drawn, Turned', tolerances: 'h9, h11', lengths: '3 to 6 Meters' },
        applications: ['Valve stems, trim, and gate guides', 'High-wear fasteners, pins, and bushings', 'Centrifugal pump wear rings and sleeves', 'Hydroelectric turbine shaft collars']
      }
    ]
  },
  {
    id: 'super-and-duplex-steel-bars',
    slug: 'super-and-duplex-steel-bars',
    name: 'Super and Duplex Steel Bars',
    title: 'Super and Duplex Steel Bars',
    image: img_duplex_bars,
    standards: 'ASTM A276 / ASME SA276, ASTM A479, EN 10088-3, NACE MR0175',
    sizeRange: '6 mm to 300 mm Diameter | Lengths: 3m to 6.5m',
    finishes: 'Peeled & Polished, Smooth Turned, Centerless Ground, Hot Forged',
    availableForms: ['Round Bar', 'Hex Bar', 'Turned Shaft', 'Forged Billet'],
    shortDesc: 'Dual-phase austenitic-ferritic solid round bars providing exceptional mechanical yield strength and outstanding resistance to chloride pitting, crevice corrosion, and stress corrosion cracking.',
    grades: [
      {
        id: 'duplex-bar-general',
        slug: 'duplex-bar',
        name: 'Duplex Bar',
        code: 'ASTM A276 / A479 Standard 2205 Duplex',
        standard: 'ASTM A276, ASTM A479, EN 10088-3',
        uns: 'UNS S31803 / S32205',
        din: '1.4462 (X2CrNiMoN22-5-3)',
        shortDesc: 'Standard 22% chromium duplex stainless solid bars offering approximately twice the yield strength of standard austenitic steel.',
        fullDesc: 'Microstructure with approximately 50/50 balance of austenite and ferrite. Delivers exceptional resistance to chloride stress corrosion cracking, high fatigue endurance, and high thermal conductivity.',
        specs: { diameter: '6 mm to 300 mm', conditions: 'Solution Annealed, Water Quenched, Ground', tolerances: 'h9, h11, DIN 1013', lengths: '3m to 6.5m' },
        applications: ['Offshore oil & gas separation shafts', 'Desalination high-pressure pump shafts', 'Chemical tanker cargo valve stems', 'Geothermal energy piping hardware']
      },
      {
        id: 's31803-s32205-bars',
        slug: 's31803-s32205-bars',
        name: 'S31803 / S32205 Bars',
        code: 'ASTM A276 / A479 UNS S31803 / UNS S32205 (F51 / F60)',
        standard: 'ASTM A276, ASTM A479, ASTM A182 F51/F60, NACE MR0175',
        uns: 'UNS S31803 / UNS S32205',
        din: '1.4462',
        shortDesc: 'Dual-certified 2205 duplex stainless round bars with PREN >= 35, fully compliant with NACE MR0175 for sour gas applications.',
        fullDesc: 'Optimized nitrogen-alloyed 2205 duplex bar delivering high toughness down to -50°C and resistance to localized pitting in seawater. Certified to ASTM A182 F51/F60 and NORSOK M-630 MDS D47 requirements.',
        specs: { diameter: '8 mm to 300 mm', conditions: 'Solution Annealed, Peeled, Turned', tolerances: 'h9, k12, ASTM A484', lengths: '3m to 6m' },
        applications: ['Subsea choke and manifold valve components', 'Marine propeller shafts and winches', 'Seawater RO membrane pressure housings', 'Biofuel processing agitators']
      },
      {
        id: 'super-duplex-bars-general',
        slug: 'super-duplex-bars',
        name: 'Super Duplex Bars',
        code: 'ASTM A276 / A479 25% Cr Super Duplex (PREN >= 42)',
        standard: 'ASTM A276, ASTM A479, NACE MR0175',
        uns: 'UNS S32750 / S32760',
        din: '1.4410 / 1.4501',
        shortDesc: 'High-alloy 25Cr super duplex solid bars designed for aggressive offshore chloride environments and deep-water subsea equipment.',
        fullDesc: 'Super duplex bars combine 25% chromium, 7% nickel, 4% molybdenum, and high nitrogen to achieve a Pitting Resistance Equivalent Number (PREN) exceeding 42, with minimum yield strength of 550 MPa.',
        specs: { diameter: '10 mm to 280 mm', conditions: 'Solution Annealed, Centerless Ground, Turned', tolerances: 'h9, h11, k12', lengths: '3m to 6.5m' },
        applications: ['Deepwater oil subsea riser tie-ins', 'High-salinity reverse osmosis pumps', 'Flue gas desulfurization agitator shafts', 'Offshore platform deluge system valves']
      },
      {
        id: 's32750-s32760-bars',
        slug: 's32750-s32760-bars',
        name: 'S32750 / S32760 Bars',
        code: 'ASTM A276 / A479 UNS S32750 (2507) / S32760 (Zeron 100)',
        standard: 'ASTM A276, ASTM A479, ASTM A182 F53/F55, NORSOK M-630',
        uns: 'UNS S32750 / UNS S32760',
        din: '1.4410 (2507) / 1.4501 (Zeron 100)',
        shortDesc: 'Certified 2507 / Zeron 100 super duplex bars with tungsten and copper additions (S32760) for extreme acid and chloride resistance.',
        fullDesc: 'S32750 and S32760 super duplex bars provide exceptional resistance to pitting, erosion-corrosion, and stress corrosion cracking in high chloride media. S32760 includes copper and tungsten for enhanced resistance in sulfuric and hydrochloric acids.',
        specs: { diameter: '10 mm to 300 mm', conditions: 'Solution Annealed, Precision Turned, Ground', tolerances: 'h9, h11, ASTM A484', lengths: '3 to 6 Meters' },
        applications: ['Subsea Christmas tree valve blocks', 'Offshore fire protection deluge pumps', 'Marine scrubbers and chemical injection quills', 'Mining slurry pump shafts and impellers']
      }
    ]
  },
  {
    id: 'carbon-steel-bar',
    slug: 'carbon-steel-bar',
    name: 'Carbon Steel Bar',
    title: 'Carbon Steel Bar',
    image: img_cs_bars,
    standards: 'ASTM A105, ASTM A350 LF2, EN 10025, DIN 17100',
    sizeRange: '10 mm to 400 mm Diameter | Forged Shafts up to 600 mm',
    finishes: 'Black Forged, Smooth Turned, Cold Drawn, Peeled',
    availableForms: ['Round Bar', 'Square Bar', 'Heavy Forged Shaft', 'Hex Bar'],
    shortDesc: 'High-integrity forged and hot rolled carbon steel round and square bars engineered for heavy structural components, high pressure flanges, low temperature service, and high-wear machining applications.',
    grades: [
      {
        id: 'carbon-steel-bar-general',
        slug: 'carbon-steel-bar',
        name: 'Carbon Steel Bar',
        code: 'ASTM A105 / A36 / AISI 1018 Commercial Carbon Steel',
        standard: 'ASTM A105, ASTM A36, EN 10025 S355JR',
        uns: 'UNS G10180 / G10200',
        din: '1.0570 (S355J2G3) / 1.0402',
        shortDesc: 'Standard structural and engineering carbon steel solid bars for general machining, fabrication, and forging.',
        fullDesc: 'Manufactured through hot rolling or forging followed by controlled cooling, carbon steel solid bars offer dependable machinability, uniform mechanical properties, and excellent weldability.',
        specs: { diameter: '10 mm to 400 mm', conditions: 'Hot Rolled, Forged Rough Turned, Normalized', tolerances: 'DIN 1013, ASTM A29', lengths: '3m to 12m' },
        applications: ['General machinery pins, bushings, and shafts', 'Hydraulic cylinder tie rods', 'Structural anchor bolts and foundation pins', 'Couplings and heavy drive hubs']
      },
      {
        id: 'astm-a105-bar',
        slug: 'astm-a105-bar',
        name: 'ASTM A105 Bar',
        code: 'ASTM A105 / ASME SA105 Forged High-Temp Carbon Steel',
        standard: 'ASTM A105, ASME SA105',
        uns: 'UNS K03504',
        din: '1.0460 (C22.8 / P250GH)',
        shortDesc: 'Normalized forged carbon steel bars engineered for ambient and elevated temperature service in pressurized piping systems.',
        fullDesc: 'ASTM A105 carbon steel bars feature controlled carbon equivalent (CE ≤ 0.45) for optimal weldability. Certified for high-pressure valve bodies, stems, flanges, and piping fittings up to 425°C.',
        specs: { diameter: '12 mm to 350 mm', conditions: 'Normalized, Quenched & Tempered, Turned', tolerances: 'ASTM A29 / ASTM A105', lengths: '3 to 6 Meters' },
        applications: ['Pressure valve stems, discs, and bonnet shafts', 'Boiler and heat exchanger forged components', 'Oilfield high-pressure manifold pins', 'Power generation steam piping hardware']
      },
      {
        id: 'astm-a350-lf2-bar',
        slug: 'astm-a350-lf2-bar',
        name: 'ASTM A350 LF2 Bar',
        code: 'ASTM A350 LF2 Class 1 Low-Temperature Carbon Steel',
        standard: 'ASTM A350, ASME SA350 LF2 CL1, NACE MR0175',
        uns: 'UNS K03011',
        din: '1.0566 (TStE 355)',
        shortDesc: 'Low-temperature normalized carbon steel bar tested for Charpy V-notch impact toughness at -46°C (-50°F).',
        fullDesc: 'ASTM A350 LF2 Class 1 carbon steel bars are specifically refined and normalized to prevent brittle fracture in cold Arctic and cryogenic services. Complies with NACE MR0175 hardness limits (≤ 22 HRC).',
        specs: { diameter: '16 mm to 350 mm', conditions: 'Normalized, Impact Tested at -46°C, Turned', tolerances: 'ASTM A350 Class 1', lengths: '3 to 6 Meters' },
        applications: ['Arctic and cold-climate oilfield valve stems', 'LPG/LNG gas terminal storage hardware', 'Low-temperature pressure vessel tie rods', 'Subsea completion low-temperature shafts']
      }
    ]
  },
  {
    id: 'alloy-steel-bar',
    slug: 'alloy-steel-bar',
    name: 'Alloy Steel Bar',
    title: 'Alloy Steel Bar',
    image: img_alloy_bars,
    standards: 'ASTM A182 / ASME SA182, AISI 4130, AISI 4140, DIN 17200',
    sizeRange: '10 mm to 350 mm Diameter | Lengths: 3m to 6m',
    finishes: 'Normalized & Tempered, Quenched & Tempered, Smooth Turned, Peeled',
    availableForms: ['Round Bar', 'Square Bar', 'Heavy Forged Shaft', 'Hex Bar'],
    shortDesc: 'Normalized and tempered chromium-molybdenum alloy steel bars conforming to ASTM A182, formulated to resist elevated temperature creep, thermal stress, and high cyclic pressures in critical turbine and energy installations.',
    grades: [
      {
        id: 'alloy-steel-bar-general',
        slug: 'alloy-steel-bar',
        name: 'Alloy Steel Bar',
        code: 'ASTM A182 Chrome-Moly / Low Alloy Steel Bar',
        standard: 'ASTM A182, DIN 17200',
        uns: 'UNS K-Series Alloys',
        din: 'DIN 17200',
        shortDesc: 'High-strength chromium-molybdenum alloy steel bars for high temperature, pressure, and high-torque service.',
        fullDesc: 'Engineered with chromium, molybdenum, and vanadium alloying elements to enhance hardenability, creep-rupture strength, and fatigue endurance in demanding engineering machinery.',
        specs: { diameter: '12 mm to 350 mm', conditions: 'Normalized & Tempered, Turned', tolerances: 'ASTM A29 / DIN 1013', lengths: '3 to 6 Meters' },
        applications: ['Heavy drive shafts, couplings, and gears', 'Thermal power plant high-pressure shafts', 'Petrochemical cracking plant valves', 'Industrial forging and tooling dies']
      },
      {
        id: 'astm-a182-gr-f1-alloy-steel-bars',
        slug: 'astm-a182-gr-f1-alloy-steel-bars',
        name: 'ASTM A182 Gr F1 Alloy Steel Bars',
        code: 'ASTM A182 Grade F1 (0.5% Molybdenum)',
        standard: 'ASTM A182, ASME SA182',
        uns: 'UNS K12822',
        din: '1.5415 (16Mo3)',
        shortDesc: 'Carbon-molybdenum alloy steel bar formulated for moderate elevated temperature steam services up to 480°C.',
        fullDesc: 'Grade F1 contains 0.5% molybdenum to impart resistance to creep and graphitization during sustained exposure to high-temperature steam in power piping and boilers.',
        specs: { diameter: '16 mm to 250 mm', conditions: 'Normalized and Tempered, Smooth Turned', tolerances: 'ASTM A182 / A29', lengths: '3m to 6m' },
        applications: ['Steam turbine auxiliary valve stems', 'Boiler feed valve internals and pins', 'Refinery high-pressure condensate hardware', 'High-temperature industrial piping fasteners']
      },
      {
        id: 'astm-a182-gr-f5-alloy-steel-bars',
        slug: 'astm-a182-gr-f5-alloy-steel-bars',
        name: 'ASTM A182 Gr F5 Alloy Steel Bars',
        code: 'ASTM A182 Grade F5 (5% Cr - 0.5% Mo)',
        standard: 'ASTM A182, ASME SA182',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        shortDesc: '5% Chromium - 0.5% Molybdenum alloy steel bar offering high resistance to hot sulfide corrosion and hydrogen attack in refineries.',
        fullDesc: 'Grade F5 alloy bars are specifically selected for petroleum refinery distillation units, hydrodesulfurization reactors, and catalytic reformers operating in high-temperature sulfur-bearing environments up to 600°C.',
        specs: { diameter: '16 mm to 250 mm', conditions: 'Full Annealed or Normalized & Tempered', tolerances: 'ASTM A182', lengths: '3 to 6 Meters' },
        applications: ['Refinery heater valve shafts and stems', 'Petroleum hydrocracker component bars', 'Sour crude oil processing pump shafts', 'Furnace support tie rods']
      },
      {
        id: 'astm-a182-gr-f9-alloy-steel-bars',
        slug: 'astm-a182-gr-f9-alloy-steel-bars',
        name: 'ASTM A182 Gr F9 Alloy Steel Bars',
        code: 'ASTM A182 Grade F9 (9% Cr - 1% Mo)',
        standard: 'ASTM A182, ASME SA182',
        uns: 'UNS K90941',
        din: '1.7386 (X12CrMo9-1)',
        shortDesc: '9% Chromium - 1% Molybdenum alloy steel bar delivering high oxidation resistance and strength up to 650°C.',
        fullDesc: 'Grade F9 provides superior resistance to hot hydrogen attack and high-temperature oxidation in oil refining cracking units. Normalized and tempered to ensure uniform microstructure and ductility.',
        specs: { diameter: '16 mm to 220 mm', conditions: 'Normalized and Tempered, Rough Turned', tolerances: 'ASTM A182', lengths: '3m to 6m' },
        applications: ['Delayed coker and hydrotreater valve trim', 'Petroleum reformer reactor internal shafts', 'High-temperature furnace burner mounts', 'Thermal power plant bypass valve shafts']
      },
      {
        id: 'astm-a182-gr-f11-alloy-steel-bars',
        slug: 'astm-a182-gr-f11-alloy-steel-bars',
        name: 'ASTM A182 Gr F11 Alloy Steel Bars',
        code: 'ASTM A182 Grade F11 Class 2 (1.25% Cr - 0.5% Mo)',
        standard: 'ASTM A182, ASME SA182 Class 2',
        uns: 'UNS K11572',
        din: '1.7335 (13CrMo4-5)',
        shortDesc: '1.25Cr-0.5Mo Class 2 alloy steel bar widely used in fossil fuel power plant steam headers, turbines, and valves up to 550°C.',
        fullDesc: 'Grade F11 Class 2 delivers dependable creep strength, oxidation resistance, and toughness. The premier alloy steel bar for boiler superheaters, high pressure steam turbines, and petrochemical heaters.',
        specs: { diameter: '12 mm to 300 mm', conditions: 'Normalized & Tempered (Min Yield 310 MPa)', tolerances: 'ASTM A182 Class 2', lengths: '3 to 6 Meters' },
        applications: ['Main steam isolation valve stems', 'Boiler superheater support pins and shafts', 'High-pressure turbine casing tie bolts', 'Petrochemical reactor nozzles and pins']
      },
      {
        id: 'astm-a182-gr-f22-alloy-steel-bars',
        slug: 'astm-a182-gr-f22-alloy-steel-bars',
        name: 'ASTM A182 Gr F22 Alloy Steel Bars',
        code: 'ASTM A182 Grade F22 Class 3 (2.25% Cr - 1% Mo)',
        standard: 'ASTM A182, ASME SA182 Class 3',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        shortDesc: '2.25Cr-1Mo Class 3 alloy steel bar offering exceptional creep rupture strength and hydrogen embrittlement resistance up to 600°C.',
        fullDesc: 'Grade F22 Class 3 is a heavy-duty Cr-Mo alloy extensively specified for subsea wellhead equipment, high-pressure steam turbines, and hydroprocessing reactors requiring superior resistance to elevated temperature degradation.',
        specs: { diameter: '16 mm to 350 mm', conditions: 'Normalized & Tempered, Quenched & Tempered', tolerances: 'ASTM A182 / ASTM A29', lengths: '3 to 6 Meters' },
        applications: ['Subsea Christmas tree valves and blocks', 'High-temperature hydrocracker internals', 'Steam turbine main stop valve shafts', 'Heavy industrial heat-recovery boiler pins']
      },
      {
        id: 'astm-a182-gr-f91-alloy-steel-bars',
        slug: 'astm-a182-gr-f91-alloy-steel-bars',
        name: 'ASTM A182 Gr F91 Alloy Steel Bars',
        code: 'ASTM A182 Grade F91 (9% Cr - 1% Mo - V - Nb)',
        standard: 'ASTM A182, ASME SA182 Grade F91',
        uns: 'UNS K90901',
        din: '1.4903 (X10CrMoVNb9-1)',
        shortDesc: 'Modified 9Cr-1Mo-V martensitic alloy steel bar engineered for ultra-supercritical (USC) thermal power generation up to 620°C.',
        fullDesc: 'Grade F91 microalloyed with vanadium, niobium, and nitrogen develops fine carbide precipitates that substantially impede dislocation movement, delivering creep rupture strength almost triple that of conventional 9Cr steel at 600°C.',
        specs: { diameter: '16 mm to 300 mm', conditions: 'Normalized (1040-1080°C) & Tempered (750-780°C)', tolerances: 'ASTM A182 / EN 10088', lengths: '3 to 6 Meters' },
        applications: ['Ultra-supercritical power plant steam valve stems', 'Turbine rotor balance and governor pins', 'High-pressure header tie rods and shafts', 'Nuclear reactor secondary circuit components']
      },
      {
        id: 'aisi-4130-4140-alloy-steel-bars',
        slug: 'aisi-4130-4140-alloy-steel-bars',
        name: 'AISI 4130, 4140 Alloy Steel Bars',
        code: 'AISI / SAE 4130 & 4140 High-Tensile Quenched & Tempered',
        standard: 'ASTM A29, ASTM A434, API 6A / 16A, NACE MR0175',
        uns: 'UNS G41300 / UNS G41400',
        din: '1.7218 (25CrMo4) / 1.7225 (42CrMo4)',
        shortDesc: 'Chromium-molybdenum through-hardening alloy bars providing high yield strength (up to 950 MPa), fatigue toughness, and torsional endurance.',
        fullDesc: 'AISI 4130 and 4140 offer high strength-to-weight ratio, high fatigue resistance, and uniform through-thickness hardness when heat treated. Fully certifiable to API Spec 6A and NACE MR0175 sour service specifications.',
        specs: { diameter: '10 mm to 350 mm', conditions: 'Quenched & Tempered (Q&T), Cold Drawn, Turned', tolerances: 'h9, h11, ASTM A29', lengths: '3m to 6m' },
        applications: ['Oilfield drill collars and completion mandrels', 'High-torque automotive and motorsport axles', 'Hydraulic cylinder shafts and heavy crankpins', 'Machine tool spindles and arbor bars']
      }
    ]
  },
  {
    id: 'inconel-bar',
    slug: 'inconel-bar',
    name: 'Inconel Bar',
    title: 'Inconel Bar',
    image: img_inconel_bars,
    standards: 'ASTM B166 / ASME SB166, ASTM B637, ASTM B408, AMS 5666',
    sizeRange: '4 mm to 250 mm Diameter | Lengths: 2m to 6m',
    finishes: 'Cold Drawn, Centerless Ground, Rough Turned, Peeled & Polished',
    availableForms: ['Round Bar', 'Hex Bar', 'Turned Shaft', 'Forged Billet'],
    shortDesc: 'Solid-solution and age-hardenable nickel-chromium superalloy bars and precision shafts engineered for extreme resistance to thermal oxidation, carburization, and mechanical stress up to 1100°C.',
    grades: [
      {
        id: 'inconel-bar-general',
        slug: 'inconel-bar',
        name: 'Inconel Bar',
        code: 'ASTM B166 / B637 Nickel Superalloy Bar',
        standard: 'ASTM B166, ASTM B637, AMS 5666',
        uns: 'UNS N06000 / N07000 Series',
        din: '2.4816 / 2.4856 / 2.4668',
        shortDesc: 'High-performance nickel-chromium alloy solid bars engineered for aerospace, nuclear, and chemical service.',
        fullDesc: 'Retains high mechanical strength, toughness, and creep-rupture resistance in high-temperature environments where steel alloys degrade or oxidize rapidly.',
        specs: { diameter: '4 mm to 250 mm', conditions: 'Annealed, Age Hardened, Centerless Ground', tolerances: 'h9, h11, ASTM B166', lengths: '2 to 6 Meters' },
        applications: ['Gas turbine rotating shafts and blades', 'Nuclear control rod components', 'Aerospace exhaust and engine shafts', 'Chemical processing agitator shafts']
      },
      {
        id: 'inconel-600-bar',
        slug: 'inconel-600-bar',
        name: 'Inconel 600 Bar',
        code: 'ASTM B166 Alloy 600 (Nickel-Chromium-Iron)',
        standard: 'ASTM B166, ASME SB166, AMS 5665',
        uns: 'UNS N06600',
        din: '2.4816 (NiCr15Fe)',
        shortDesc: 'High-nickel alloy bar virtually immune to chloride-ion stress-corrosion cracking and thermal oxidation up to 1150°C.',
        fullDesc: 'Inconel 600 contains minimum 72% nickel and 14-17% chromium, delivering outstanding resistance to reducing conditions and alkaline solutions, as well as dry chlorine and hydrogen chloride gases.',
        specs: { diameter: '4 mm to 220 mm', conditions: 'Hot Finished, Cold Drawn, Annealed', tolerances: 'h9, h11, ASTM B166', lengths: '2m to 6m' },
        applications: ['Nuclear steam generator tubing support pins', 'Thermal processing furnace rollers and fixtures', 'Chemical production of vinyl chloride and titanium dioxide', 'Gas turbine engine exhaust fasteners']
      },
      {
        id: 'inconel-601-bar',
        slug: 'inconel-601-bar',
        name: 'Inconel 601 Bar',
        code: 'ASTM B166 Alloy 601 (Ni-Cr-Alloyed with Aluminum)',
        standard: 'ASTM B166, ASME SB166, DIN 17752',
        uns: 'UNS N06601',
        din: '2.4851 (NiCr23Fe)',
        shortDesc: 'Aluminum-bearing nickel-chromium alloy bar exhibiting outstanding resistance to thermal oxidation and spalling up to 1250°C.',
        fullDesc: 'The aluminum addition in Inconel 601 forms a tightly adherent protective alumina scale that resists spalling even under severe thermal cycling conditions. Retains high mechanical strength under extreme temperatures.',
        specs: { diameter: '6 mm to 200 mm', conditions: 'Annealed, Ground, Rough Turned', tolerances: 'h9, h11', lengths: '2 to 6 Meters' },
        applications: ['Furnace radiant tubes and burner nozzles', 'Thermal oxidizer reaction shafts and pins', 'Nitric acid catalyst grid support pins', 'Petrochemical reformer combustion hardware']
      },
      {
        id: 'inconel-625-bar',
        slug: 'inconel-625-bar',
        name: 'Inconel 625 Bar',
        code: 'ASTM B446 Grade 1 / Grade 2 Alloy 625 (Ni-Cr-Mo-Nb)',
        standard: 'ASTM B446, ASME SB446, AMS 5666, NACE MR0175',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        shortDesc: 'Solid-solution strengthened Ni-Cr-Mo-Nb superalloy bar providing exceptional marine and acid corrosion resistance without aging.',
        fullDesc: 'Strengthened by the stiffening effect of molybdenum and niobium in its nickel-chromium matrix. Exhibits remarkable fatigue strength, high tensile properties, and freedom from pitting, crevice attack, and stress corrosion in harsh marine and sour environments.',
        specs: { diameter: '4 mm to 250 mm', conditions: 'Annealed (Gr. 1) or Solution Annealed (Gr. 2), Ground', tolerances: 'h8, h9, ASTM B446', lengths: '2m to 6m' },
        applications: ['Subsea valve stems, shafts, and bolting', 'Marine naval propulsion shafting and seals', 'Chemical processing acid waste disposal shafts', 'Aerospace thrust-reverser actuator pins']
      },
      {
        id: 'inconel-718-bar',
        slug: 'inconel-718-bar',
        name: 'Inconel 718 Bar',
        code: 'ASTM B637 Alloy 718 Precipitation Hardened Superalloy',
        standard: 'ASTM B637, AMS 5662 / AMS 5663, NACE MR0175',
        uns: 'UNS N07718',
        din: '2.4668 (NiCr19Fe19Nb5Mo3)',
        shortDesc: 'Age-hardenable nickel superalloy bar offering ultra-high tensile yield strength (≥ 1030 MPa) and creep resistance up to 700°C.',
        fullDesc: 'Precipitation hardened by gamma double prime (γ") phase through niobium additions. Inconel 718 combines tremendous yield strength, high rupture strength, and exceptional weldability without strain-age cracking.',
        specs: { diameter: '4 mm to 250 mm', conditions: 'Solution Treated & Double Aged (AMS 5663), Ground', tolerances: 'h8, h9, ASTM B637', lengths: '2 to 6 Meters' },
        applications: ['Gas turbine rotor shafts, discs, and tie bolts', 'Deepwater high-pressure oilfield valve stems', 'Rocket engine turbopump shafts and pins', 'High-strength aerospace fasteners and actuators']
      },
      {
        id: 'incoloy-800-800h-800ht-bar',
        slug: 'incoloy-800-800h-800ht-bar',
        name: 'Incoloy 800 / 800H / 800HT Bar',
        code: 'ASTM B408 Alloy 800 / 800H / 800HT (Iron-Nickel-Chromium)',
        standard: 'ASTM B408, ASME SB408, EN 10095',
        uns: 'UNS N08800 / UNS N08810 / UNS N08811',
        din: '1.4876 / 1.4958 / 1.4959',
        shortDesc: 'Iron-nickel-chromium bars engineered for high creep strength and carburization resistance in thermal processing above 600°C.',
        fullDesc: 'Alloy 800H and 800HT contain controlled carbon (0.05-0.10%) and aluminum+titanium chemistry combined with high-temperature solution annealing to optimize grain size (ASTM 5 or coarser), delivering superior creep-rupture performance.',
        specs: { diameter: '6 mm to 250 mm', conditions: 'Annealed (800) or Solution Annealed (800H/HT), Turned', tolerances: 'h9, h11, ASTM B408', lengths: '3 to 6 Meters' },
        applications: ['Hydrocarbon cracking furnace pigtails and shafts', 'Nuclear power steam generator internals', 'Industrial thermal treatment fixtures', 'Ethylene pyrolysis quench equipment']
      },
      {
        id: 'incoloy-825-bar',
        slug: 'incoloy-825-bar',
        name: 'Incoloy 825 Bar',
        code: 'ASTM B425 Alloy 825 (Ni-Fe-Cr-Mo-Cu)',
        standard: 'ASTM B425, ASME SB425, NACE MR0175',
        uns: 'UNS N08825',
        din: '2.4858 (NiCr21Mo)',
        shortDesc: 'Titanium-stabilized nickel-iron-chromium-molybdenum alloy bar resisting sulfuric acid, phosphoric acid, and sour gas wells.',
        fullDesc: 'Incoloy 825 features copper and molybdenum additions to provide remarkable resistance to reducing acids, while high nickel prevents chloride-induced stress corrosion cracking.',
        specs: { diameter: '6 mm to 220 mm', conditions: 'Stabilized Annealed, Centerless Ground', tolerances: 'h9, h11, ASTM B425', lengths: '2m to 6m' },
        applications: ['Sour gas downhole production shafts', 'Sulfuric acid pickling heating coils and shafts', 'Phosphoric acid manufacturing pumps', 'Nuclear fuel element reprocessing equipment']
      },
      {
        id: 'incoloy-x-750-bar',
        slug: 'incoloy-x-750',
        name: 'Incoloy X-750',
        code: 'ASTM B637 Alloy X-750 Precipitation Hardened',
        standard: 'ASTM B637, AMS 5667 / AMS 5670',
        uns: 'UNS N07750',
        din: '2.4669 (NiCr15Fe7TiAl)',
        shortDesc: 'Precipitation-hardenable nickel superalloy bar offering high relaxation resistance and spring properties up to 700°C.',
        fullDesc: 'Incoloy X-750 develops high strength through age-hardening with aluminum and titanium. Widely trusted for springs, gas turbine rotor blades, and high-temperature bolts where resistance to load relaxation is crucial.',
        specs: { diameter: '4 mm to 180 mm', conditions: 'Equalized & Aged or Solution Treated & Aged', tolerances: 'h9, AMS 5667', lengths: '2 to 5 Meters' },
        applications: ['Gas turbine high-temperature springs', 'Nuclear reactor core spring pins and fasteners', 'Rocket engine thrust chamber bolts', 'Hot extrusion die and forming components']
      }
    ]
  },
  {
    id: 'monel-bar',
    slug: 'monel-bar',
    name: 'Monel Bar',
    title: 'Monel Bar',
    image: img_monel_bars,
    standards: 'ASTM B164 / ASME SB164, QQ-N-281, DIN 17752, NACE MR0175',
    sizeRange: '4 mm to 250 mm Diameter | Lengths: 2m to 6m',
    finishes: 'Cold Drawn, Centerless Ground, Turned & Polished, Hot Forged',
    availableForms: ['Round Bar', 'Hex Bar', 'Precision Pump Shaft', 'Square Bar'],
    shortDesc: 'Nickel-copper alloy round bars and pump shafts providing remarkable resistance to high-velocity marine seawater, hydrofluoric acid, non-oxidizing acids, and sub-zero cryogenic environments.',
    grades: [
      {
        id: 'monel-bar-general',
        slug: 'monel-bar',
        name: 'Monel Bar',
        code: 'ASTM B164 Nickel-Copper Solid Bar',
        standard: 'ASTM B164, QQ-N-281',
        uns: 'UNS N04400 / N05500',
        din: '2.4360 / 2.4375',
        shortDesc: 'High-ductility nickel-copper alloy solid bars providing immunity to seawater corrosion and chemical attack.',
        fullDesc: 'Engineered for marine engineering and chemical processing, Monel bars offer outstanding toughness across temperatures ranging from sub-zero cryogenic levels up to 480°C.',
        specs: { diameter: '4 mm to 250 mm', conditions: 'Cold Drawn, Annealed, Ground', tolerances: 'h8, h9, ASTM B164', lengths: '2 to 6 Meters' },
        applications: ['Marine propeller shafts and pump impellers', 'Hydrofluoric acid alkylation unit valves', 'Seawater heat exchanger tie rods', 'Offshore splash-zone structural bolts']
      },
      {
        id: 'monel-400-bar',
        slug: 'monel-400-bar',
        name: 'Monel 400 Bar',
        code: 'ASTM B164 Class A Alloy 400 (67% Ni - 30% Cu)',
        standard: 'ASTM B164, ASME SB164, QQ-N-281 Class A, NACE MR0175',
        uns: 'UNS N04400',
        din: '2.4360 (NiCu30Fe)',
        shortDesc: 'Single-phase solid-solution nickel-copper bar offering remarkable corrosion resistance to fast-flowing seawater and non-oxidizing acids.',
        fullDesc: 'Monel 400 exhibits virtually zero corrosion rate in flowing seawater and maintains high ductility and impact strength without brittle transitions down to cryogenic temperatures (-200°C).',
        specs: { diameter: '3 mm to 250 mm', conditions: 'Cold Drawn, Annealed, Stress Relieved, Ground', tolerances: 'h8, h9, ASTM B164', lengths: '2m to 6m' },
        applications: ['Marine propeller shafts and pump sleeves', 'Crude oil distillation column internals', 'Hydrofluoric (HF) acid handling valve shafts', 'Chlorinated solvent recovery equipment']
      },
      {
        id: 'monel-k500-bar',
        slug: 'monel-k500-bar',
        name: 'Monel K500 Bar',
        code: 'ASTM B865 Alloy K-500 Precipitation Hardened',
        standard: 'ASTM B865, QQ-N-286, NACE MR0175',
        uns: 'UNS N05500',
        din: '2.4375 (NiCu30Al)',
        shortDesc: 'Age-hardenable nickel-copper alloy bar with triple the yield strength of Monel 400 while remaining non-magnetic down to -100°C.',
        fullDesc: 'Monel K-500 combines the corrosion resistance of Monel 400 with high tensile strength (up to 1100 MPa) obtained by aging with aluminum and titanium additions. Completely non-magnetic, making it ideal for directional drilling tools and naval ordnance.',
        specs: { diameter: '6 mm to 250 mm', conditions: 'Hot Rolled & Aged, Cold Drawn & Aged, Turned', tolerances: 'h9, h11, ASTM B865', lengths: '2 to 6 Meters' },
        applications: ['Oilfield drill collars and MWD instrument shafts', 'Heavy marine pump shafts and valve stems', 'Non-magnetic naval minesweeper components', 'High-strength marine fasteners and doctor blades']
      }
    ]
  },
  {
    id: 'hastelloy-bar',
    slug: 'hastelloy-bar',
    name: 'Hastelloy Bar',
    title: 'Hastelloy Bar',
    image: img_hastelloy_bars,
    standards: 'ASTM B574 / ASME SB574, DIN 17752, NACE MR0175, ISO 15156',
    sizeRange: '4 mm to 220 mm Diameter | Lengths: 2m to 6m',
    finishes: 'Solution Annealed, Centerless Ground, Rough Turned, Peeled',
    availableForms: ['Round Bar', 'Hex Bar', 'Turned Shaft', 'Precision Pin'],
    shortDesc: 'Nickel-molybdenum-chromium superalloy round bars and shafts delivering exceptional resistance to severe oxidizing, reducing, and mixed acid environments, wet chlorine gas, and aggressive pitting.',
    grades: [
      {
        id: 'hastelloy-bar-general',
        slug: 'hastelloy-bar',
        name: 'Hastelloy Bar',
        code: 'ASTM B574 Nickel-Chromium-Molybdenum Superalloy Bar',
        standard: 'ASTM B574, ASME SB574',
        uns: 'UNS N06022 / N10276 / N10665',
        din: '2.4602 / 2.4819 / 2.4617',
        shortDesc: 'High-alloy solid bars engineered for maximum chemical resistance in hostile acid and halide media.',
        fullDesc: 'Engineered with balanced additions of chromium, molybdenum, and tungsten to resist localized pitting, stress corrosion cracking, and crevice attack in aggressive chemical environments.',
        specs: { diameter: '4 mm to 220 mm', conditions: 'Solution Annealed, Precision Ground', tolerances: 'h8, h9, ASTM B574', lengths: '2 to 6 Meters' },
        applications: ['Chemical reactor agitator shafts', 'Flue gas desulfurization damper pins', 'Hazardous waste incinerator shafts', 'Pharmaceutical synthesis valve stems']
      },
      {
        id: 'hastelloy-c22-bar',
        slug: 'hastelloy-c22-bar',
        name: 'Hastelloy C22 Bar',
        code: 'ASTM B574 Alloy C-22 (Ni-Cr-Mo-W)',
        standard: 'ASTM B574, ASME SB574, NACE MR0175',
        uns: 'UNS N06022',
        din: '2.4602 (NiCr21Mo14W)',
        shortDesc: 'Versatile nickel-chromium-molybdenum-tungsten bar with superior resistance to oxidizing acid media and pitting compared to C-276.',
        fullDesc: 'Hastelloy C-22 provides outstanding resistance to wet chlorine, nitric acid, hypochlorite, and chlorine dioxide mixtures. High chromium content provides superior resistance to oxidizing acid streams.',
        specs: { diameter: '5 mm to 200 mm', conditions: 'Solution Annealed, Rapidly Quenched, Ground', tolerances: 'h8, h9, ASTM B574', lengths: '2m to 6m' },
        applications: ['Pharmaceutical batch reactor agitator shafts', 'Waste treatment chlorination systems', 'Flue gas desulfurization scrubber valve stems', 'Nuclear fuel dissolution equipment']
      },
      {
        id: 'hastelloy-c276-bar',
        slug: 'hastelloy-c276-bar',
        name: 'Hastelloy C276 Bar',
        code: 'ASTM B574 Alloy C-276 (Low Carbon Ni-Mo-Cr-W)',
        standard: 'ASTM B574, ASME SB574, NACE MR0175',
        uns: 'UNS N10276',
        din: '2.4819 (NiMo16Cr15W)',
        shortDesc: 'The gold standard corrosion-resistant alloy bar for severe chemical processing, resistant to wet chlorine gas and ferric chlorides.',
        fullDesc: 'Hastelloy C-276 contains 16% molybdenum and 4% tungsten with extremely low carbon and silicon contents, preventing grain boundary precipitate formation in as-welded or as-machined parts exposed to aggressive chemical media.',
        specs: { diameter: '4 mm to 220 mm', conditions: 'Solution Annealed, Centerless Ground, Turned', tolerances: 'h8, h9, ASTM B574', lengths: '2 to 6 Meters' },
        applications: ['Bleach plant scrubbers and digesters', 'Downhole sour gas deep well shafts and pins', 'Sulfuric and hydrochloric acid pumps', 'Pesticide and agrochemical manufacturing valves']
      },
      {
        id: 'hastelloy-b2-bar',
        slug: 'hastelloy-b2-bar',
        name: 'Hastelloy B2 Bar',
        code: 'ASTM B335 Alloy B-2 (Ni-Mo High Moly Alloy)',
        standard: 'ASTM B335, ASME SB335',
        uns: 'UNS N10665',
        din: '2.4617 (NiMo28)',
        shortDesc: 'Nickel-molybdenum solid bar providing unmatched resistance to hydrochloric acid across all concentrations and boiling temperatures.',
        fullDesc: 'Hastelloy B-2 contains 28% molybdenum with low carbon to minimize precipitation of intermediate phases. Unsurpassed resistance to pure hydrochloric, sulfuric, and acetic acid solutions without oxidizing impurities.',
        specs: { diameter: '6 mm to 180 mm', conditions: 'Solution Annealed, Ground, Turned', tolerances: 'h9, h11', lengths: '2m to 5m' },
        applications: ['Hydrochloric acid synthesis pump shafts', 'Ethylbenzene alkylation unit agitators', 'Acetic acid and formic acid manufacturing', 'Pharmaceutical acid reaction pins and valves']
      }
    ]
  },
  {
    id: 'nickel-bar',
    slug: 'nickel-bar',
    name: 'Nickel Bar',
    title: 'Nickel Bar',
    image: img_nickel_bars,
    standards: 'ASTM B160 / ASME SB160, DIN 17752, Werkstoff 2.4066 / 2.4068',
    sizeRange: '4 mm to 200 mm Diameter | Lengths: 2m to 6m',
    finishes: 'Cold Drawn, Centerless Ground, Turned, Hot Rolled',
    availableForms: ['Round Bar', 'Hex Bar', 'Turned Shaft', 'Anode Bar'],
    shortDesc: 'Commercially pure nickel round bars exhibiting high electrical and thermal conductivity, excellent resistance to dry halogens, caustic alkalis, and concentrated molten hydroxides.',
    grades: [
      {
        id: 'nickel-bar-general',
        slug: 'nickel-bar',
        name: 'Nickel Bar',
        code: 'ASTM B160 Commercially Pure Nickel Solid Bar',
        standard: 'ASTM B160, DIN 17752',
        uns: 'UNS N02200 / N02201',
        din: '2.4066 / 2.4068',
        shortDesc: 'Pure nickel engineering bars offering high electrical conductivity and resistance to caustic alkalies.',
        fullDesc: 'Commercially pure unalloyed nickel with high thermal and electrical conductivities, high Curie temperature, and outstanding magnetostrictive properties.',
        specs: { diameter: '4 mm to 200 mm', conditions: 'Cold Drawn, Annealed, Centerless Ground', tolerances: 'h8, h9, ASTM B160', lengths: '2 to 6 Meters' },
        applications: ['Caustic soda processing valves and shafts', 'Synthetic fiber production machinery', 'Electronic and aerospace lead pins', 'Battery manufacturing bus shafts']
      },
      {
        id: 'nickel-200-bar',
        slug: 'nickel-200-bar',
        name: 'Nickel 200 Bar',
        code: 'ASTM B160 Nickel 200 (99.6% Pure Nickel)',
        standard: 'ASTM B160, ASME SB160, DIN 17752',
        uns: 'UNS N02200',
        din: '2.4066 (Ni99.2)',
        shortDesc: '99.6% commercially pure wrought nickel bar offering superior resistance to caustic alkalis and dry halogens up to 315°C.',
        fullDesc: 'Nickel 200 provides excellent mechanical properties and resistance to caustic evaporator solutions, sodium hydroxide, and neutral salts. Recommended for service below 315°C to avoid graphitization.',
        specs: { diameter: '4 mm to 200 mm', conditions: 'Cold Finished, Annealed, Ground', tolerances: 'h8, h9, ASTM B160', lengths: '2 to 6 Meters' },
        applications: ['Caustic soda evaporator agitator shafts', 'Chlor-alkali plant valve components', 'Food processing equipment handling fatty acids', 'Electrical and electronic lead pins and connectors']
      },
      {
        id: 'nickel-201-bar',
        slug: 'nickel-201-bar',
        name: 'Nickel 201 Bar',
        code: 'ASTM B160 Nickel 201 Low Carbon (C ≤ 0.02%)',
        standard: 'ASTM B160, ASME SB160, DIN 17752',
        uns: 'UNS N02201',
        din: '2.4068 (LC-Ni99)',
        shortDesc: 'Low-carbon wrought nickel bar engineered for high-temperature caustic and molten salt service above 315°C.',
        fullDesc: 'Controlled with carbon C ≤ 0.02% to prevent intergranular graphitization embrittlement during sustained service between 315°C and 650°C. Preferred for handling molten caustic soda and fluorine gas.',
        specs: { diameter: '4 mm to 200 mm', conditions: 'Cold Drawn, Annealed, Precision Turned', tolerances: 'h8, h9, ASTM B160', lengths: '2 to 6 Meters' },
        applications: ['Molten sodium hydroxide reactors and shafts', 'High-temperature chlorination and fluorination hardware', 'Synthetic fiber extrusion components', 'Aerospace thermal lead terminals']
      }
    ]
  },
  {
    id: 'copper-nickel-bar',
    slug: 'copper-nickel-bar',
    name: 'Copper Nickel Bar',
    title: 'Copper Nickel Bar',
    image: img_cu_ni_bars,
    standards: 'ASTM B151 / ASME SB151, DIN 86019, EEMUA 144, BS 2874',
    sizeRange: '6 mm to 200 mm Diameter | Lengths: 3m to 6m',
    finishes: 'Cold Drawn, Turned & Polished, Extruded, Peeled',
    availableForms: ['Round Bar', 'Hex Bar', 'Turned Shaft', 'Naval Shafting'],
    shortDesc: 'Cupronickel 70/30 and 90/10 solid round bars designed for marine propulsion shafts, seawater valves, and offshore installations with high resistance to macrofouling and erosion-corrosion.',
    grades: [
      {
        id: 'copper-nickel-bar-general',
        slug: 'copper-nickel-bar',
        name: 'Copper Nickel Bar',
        code: 'ASTM B151 Cupronickel Solid Bar',
        standard: 'ASTM B151, BS 2874',
        uns: 'UNS C70600 / C71500',
        din: '2.0872 / 2.0882',
        shortDesc: 'Marine-grade cupronickel solid bars offering high biofouling resistance and ductility in seawater.',
        fullDesc: 'Cupronickel bars provide inherent resistance to marine biofouling and barnacle growth, along with high thermal conductivity and excellent resistance to stress corrosion cracking in marine atmospheres.',
        specs: { diameter: '6 mm to 200 mm', conditions: 'Cold Drawn, Stress Relieved, Turned', tolerances: 'ASTM B151 / BS 2874', lengths: '3 to 6 Meters' },
        applications: ['Naval vessel seawater valve spindles', 'Offshore cooling system shafts', 'Marine heat exchanger support pins', 'Desalination plant pump shafts']
      },
      {
        id: 'copper-nickel-70-30-bar',
        slug: 'copper-nickel-70-30-bar',
        name: 'Copper Nickel 70/30 Bar',
        code: 'ASTM B151 C71500 (70% Cu - 30% Ni)',
        standard: 'ASTM B151, ASME SB151, DEF STAN 02-879',
        uns: 'UNS C71500',
        din: '2.0882 (CuNi30Mn1Fe)',
        shortDesc: 'Heavy-duty 70/30 cupronickel bar engineered for higher flow velocities and higher strength in naval marine systems.',
        fullDesc: 'Copper Nickel 70/30 contains iron and manganese additions to dramatically enhance resistance to high-velocity water impingement, erosion-corrosion, and cavitation in critical naval applications.',
        specs: { diameter: '6 mm to 200 mm', conditions: 'Cold Drawn, Annealed, Ground', tolerances: 'h9, ASTM B151', lengths: '3m to 6m' },
        applications: ['Naval submarine seawater valve stems', 'High-pressure desalination pump shafts', 'Offshore platform seawater fire water shafts', 'Shipboard rudder bearing pins and sleeves']
      },
      {
        id: 'copper-nickel-90-10-bar',
        slug: 'copper-nickel-90-10-bar',
        name: 'Copper Nickel 90/10 Bar',
        code: 'ASTM B151 C70600 (90% Cu - 10% Ni)',
        standard: 'ASTM B151, ASME SB151, DIN 86019',
        uns: 'UNS C70600',
        din: '2.0872 (CuNi10Fe1Mn)',
        shortDesc: 'Ductile 90/10 cupronickel bar offering superior resistance to biofouling and pitting in calm and moderate seawater.',
        fullDesc: 'Copper Nickel 90/10 provides high ductility, ease of machining, and spontaneous passivation in clean seawater through the formation of a protective copper oxide film.',
        specs: { diameter: '6 mm to 200 mm', conditions: 'Cold Drawn, Extruded, Turned', tolerances: 'h9, ASTM B151', lengths: '3 to 6 Meters' },
        applications: ['Marine plumbing valve components and pins', 'Aquaculture cage structural pins', 'Seawater condenser tie rods', 'Coastal power plant intake hardware']
      }
    ]
  },
  {
    id: 'titanium-bar',
    slug: 'titanium-bar',
    name: 'Titanium Bar',
    title: 'Titanium Bar',
    image: img_titanium_bars,
    standards: 'ASTM B348 / ASME SB348, AMS 4928, DIN 17862, ISO 5832-3',
    sizeRange: '3 mm to 200 mm Diameter | Lengths: 1m to 4m',
    finishes: 'Centerless Ground, Peeled, Turned & Polished, Cold Drawn',
    availableForms: ['Round Bar', 'Hex Bar', 'Precision Medical Shaft', 'Turned Pin'],
    shortDesc: 'High strength-to-weight ratio titanium round bars and shafts offering total immunity to marine corrosion, outstanding biocompatibility, and superior structural endurance at cryogenic and elevated temperatures.',
    grades: [
      {
        id: 'titanium-bar-general',
        slug: 'titanium-bar',
        name: 'Titanium Bar',
        code: 'ASTM B348 Commercially Pure & Alloyed Titanium Bar',
        standard: 'ASTM B348, AMS 4928',
        uns: 'UNS R50000 / R56000 Series',
        din: '3.7035 / 3.7165',
        shortDesc: 'Lightweight, ultra-corrosion-resistant solid titanium bars for aerospace, chemical, and medical implants.',
        fullDesc: 'Possesses the highest strength-to-weight ratio among structural engineering metals, accompanied by total immunity to chloride pitting, microbiologically influenced corrosion, and marine environments.',
        specs: { diameter: '3 mm to 200 mm', conditions: 'Annealed, Centerless Ground (h7/h8/h9)', tolerances: 'h8, h9, ASTM B348', lengths: '1m to 4m' },
        applications: ['Aerospace airframe pins and hydraulic actuators', 'Chemical chlor-alkali plant agitators', 'Medical orthopedic and surgical pins', 'High-performance motorsport drive shafts']
      },
      {
        id: 'titanium-grade-2-bar',
        slug: 'titanium-grade-2-bar',
        name: 'Titanium Grade 2 Bar',
        code: 'ASTM B348 Grade 2 Commercially Pure (CP-3)',
        standard: 'ASTM B348, ASME SB348, DIN 17862',
        uns: 'UNS R50400',
        din: '3.7035 (Ti 2)',
        shortDesc: 'Workhorse commercially pure titanium bar with balanced yield strength, excellent ductility, and total immunity to seawater.',
        fullDesc: 'Grade 2 titanium provides exceptional resistance to wet chlorine, organic acids, salt solutions, and marine environments. Features optimum balance between moderate strength (min yield 275 MPa) and high formability.',
        specs: { diameter: '3 mm to 180 mm', conditions: 'Annealed, Precision Ground, Polished', tolerances: 'h8, h9, ASTM B348', lengths: '1 to 4 Meters' },
        applications: ['Chemical plant pumps, shafts, and valve internals', 'Marine seawater desalination shafts and fasteners', 'Electroplating anode hooks and baskets', 'Power generation flue gas scrubber rods']
      },
      {
        id: 'titanium-grade-5-bar',
        slug: 'titanium-grade-5-bar',
        name: 'Titanium Grade 5 Bar',
        code: 'ASTM B348 / AMS 4928 Grade 5 (Ti-6Al-4V Alpha-Beta)',
        standard: 'ASTM B348, AMS 4928, ISO 5832-3',
        uns: 'UNS R56400',
        din: '3.7165 (TiAl6V4)',
        shortDesc: 'High-strength alpha-beta titanium alloy bar (Ti-6Al-4V) delivering tensile strength ≥ 895 MPa with aerospace toughness.',
        fullDesc: 'Ti-6Al-4V is the premier aerospace alloy, combining high strength, light weight (4.43 g/cm³), fatigue resistance, and fracture toughness up to 400°C. Fully certifiable for aerospace fasteners, aircraft rotating shafts, and medical implants.',
        specs: { diameter: '3 mm to 200 mm', conditions: 'Annealed or Solution Treated & Aged (STA), Ground', tolerances: 'h7, h8, h9, AMS 4928', lengths: '1 to 4 Meters' },
        applications: ['Aircraft turbine rotor shafts and landing gear pins', 'Medical orthopedic bone screws and hip stems', 'High-end motorsport racing connecting rods', 'Offshore deepwater subsea tool shafts']
      }
    ]
  },
  {
    id: 'maraging-bars',
    slug: 'maraging-bars',
    name: 'Maraging Bars',
    title: 'Maraging Bars',
    image: img_maraging_bars,
    standards: 'AMS 6512, AMS 6514, MIL-S-46850, Werkstoff 1.6358',
    sizeRange: '8 mm to 200 mm Diameter | Lengths: 1m to 4m',
    finishes: 'Solution Annealed, Precision Centerless Ground, Rough Turned',
    availableForms: ['Round Bar', 'Precision Turned Shaft', 'Forged Round Bar'],
    shortDesc: 'Ultra-high-strength iron-nickel maraging steel bars achieving extraordinary yield strength (up to 2400 MPa) through precipitation hardening while retaining high fracture toughness, dimensional stability, and crack resistance.',
    grades: [
      {
        id: 'maraging-250-bars',
        slug: 'maraging-250-bars',
        name: 'Maraging 250 Bars',
        code: 'AMS 6512 / Vascomax 250 (18Ni-250 / 1.6359)',
        standard: 'AMS 6512, MIL-S-46850',
        uns: 'UNS K92890',
        din: '1.6359 (X2NiCoMo18-8-5)',
        shortDesc: '18% Ni maraging steel bar achieving 1750 MPa yield strength after simple aging at 480°C with exceptional fracture toughness.',
        fullDesc: 'Maraging 250 develops ultra-high strength through intermetallic precipitation (nickel-molybdenum-cobalt-titanium) during aging of a soft, carbon-free martensite matrix. Displays minimal dimensional change (0.05%) during heat treatment.',
        specs: { diameter: '8 mm to 200 mm', conditions: 'Solution Annealed (Condition A) or Aged, Ground', tolerances: 'h8, h9, AMS 6512', lengths: '1 to 4 Meters' },
        applications: ['Rocket motor cases and centrifuge drive shafts', 'Motorsport heavy-duty transmission shafts', 'High-pressure extrusion rams and ejector pins', 'Military ordnance projectile casings']
      },
      {
        id: 'maraging-300-bars',
        slug: 'maraging-300-bars',
        name: 'Maraging 300 Bars',
        code: 'AMS 6514 / Vascomax 300 (18Ni-300 / 1.6358)',
        standard: 'AMS 6514, MIL-S-46850',
        uns: 'UNS K93120',
        din: '1.6358 (X2NiCoMo18-9-5)',
        shortDesc: '18Ni-300 maraging steel bar developing 2000 MPa yield strength with superior crack resistance under cyclic impact.',
        fullDesc: 'Vacuum induction melted and consumable electrode remelted (VIM-VAR), Maraging 300 provides exceptional cleanliness, freedom from segregation, and high notch tensile ratio at extreme yield strengths.',
        specs: { diameter: '8 mm to 200 mm', conditions: 'Solution Annealed (30 HRC) or Aged (52-55 HRC)', tolerances: 'h8, h9, AMS 6514', lengths: '1 to 4 Meters' },
        applications: ['Aerospace rocket nozzle actuator shafts', 'Gas centrifuge rotating cylinders and pins', 'Ultra-high-torque Formula 1 drive axles', 'Die casting cores and forging punches']
      },
      {
        id: 'maraging-350-bars',
        slug: 'maraging-350-bars',
        name: 'Maraging 350 Bars',
        code: 'Vascomax 350 (18Ni-350 / Ultra-High Strength 2400 MPa)',
        standard: 'AMS 6514 Equivalent, MIL-S-46850',
        uns: 'UNS K93160',
        din: '1.6356',
        shortDesc: 'The pinnacle of high-strength engineering steels achieving 2400 MPa (350 ksi) tensile strength with titanium and cobalt hardening.',
        fullDesc: 'Maraging 350 represents the pinnacle of structural strength among iron-base alloys. Alloyed with high cobalt and titanium, it delivers Rockwell C 57-60 hardness and tremendous compressive yield strength for defense, space, and ultra-high-pressure tooling.',
        specs: { diameter: '8 mm to 160 mm', conditions: 'Solution Treated or Fully Aged (57-60 HRC), Ground', tolerances: 'h8, h9, High Precision Ground', lengths: '1 to 3 Meters' },
        applications: ['Ultra-centrifuge rotor shafts', 'Defense kinetic penetrator core components', 'Ultra-high-pressure hydraulic intensifier plungers', 'Deep-submergence pressure pins']
      }
    ]
  }
];

// Helper functions for lookup
export const getBarsCategoryBySlug = (slug) => {
  if (!slug) return null;
  const s = slug.toLowerCase().trim();
  return BARS_CATEGORIES.find(c => 
    c.slug === s || 
    c.id === s || 
    c.materialSlug === s ||
    (c.aliases && c.aliases.includes(s)) ||
    c.slug.replace(/-/g, '') === s.replace(/-/g, '')
  ) || null;
};

export const getBarsMaterialList = () => {
  return [
    { slug: 'all', name: 'All Materials' },
    ...BARS_CATEGORIES.map(c => ({
      slug: c.materialSlug,
      name: c.materialName,
      catSlug: c.slug,
      count: c.grades.length
    }))
  ];
};

export const getBarsGradeBySlug = (categorySlug, gradeSlug) => {
  const cat = getBarsCategoryBySlug(categorySlug);
  if (!cat) return null;
  if (!gradeSlug) return cat.grades[0] || null;
  const gs = gradeSlug.toLowerCase().trim();
  return cat.grades.find(g => 
    g.slug === gs || 
    g.id === gs || 
    g.slug.replace(/-/g, '') === gs.replace(/-/g, '') ||
    g.name.toLowerCase().replace(/[^a-z0-9]/g, '') === gs.replace(/[^a-z0-9]/g, '')
  ) || cat.grades[0] || null;
};
