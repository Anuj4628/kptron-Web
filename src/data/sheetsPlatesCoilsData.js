/**
 * Dedicated Sheets, Plates & Coils Product Catalog & Verified Grades Data
 * Source of truth for KPTRON Sheets, Plates & Coils Division.
 * Standards: ASTM A240, ASTM A516, ASTM A387, ASTM A36, ASTM B168, ASTM B443, ASTM B575, ASTM B265, EN 10028, IS 2062
 */

import img_ss_sheet from '../assets/New Product img/sheet plates coil/ss-sheet.jpg';
import img_duplex_sheet from '../assets/New Product img/sheet plates coil/duplex-steel-sheet.jpg';
import img_carbon_sheet from '../assets/New Product img/sheet plates coil/cs-sheet carbon.jpg';
import img_alloy_sheet from '../assets/New Product img/sheet plates coil/alloy-steel-sheet.jpg';
import img_inconel_sheet from '../assets/New Product img/sheet plates coil/inconel-sheet.jpg';
import img_hastelloy_sheet from '../assets/New Product img/sheet plates coil/hastelloy-coils.jpg';
import img_titanium_sheet from '../assets/New Product img/sheet plates coil/titanium-coil.jpg';

export const SHEETS_PLATES_COILS_CATEGORIES = [
  {
    id: 'ss-sheets-plates-coils',
    slug: 'ss-sheets-plates-coils',
    materialSlug: 'stainless-steel',
    materialName: 'Stainless Steel',
    aliases: ['stainless-steel-sheets', 'ss-sheets', 'stainless-steel-plates-coils', 'ss-sheet-plate-coil'],
    name: 'SS Sheets, Plates, Coils',
    headline: 'Austenitic, Ferritic & Martensitic Cold Rolled Sheets, Heavy Plates & Precision Slit Coils',
    image: img_ss_sheet,
    shortDesc: 'Cold-rolled sheets, hot-rolled pickled plates, and precision strip coils in commercial, food-grade, high-temperature, and super austenitic stainless steel alloys conforming strictly to ASTM A240 and EN 10088-2.',
    standards: 'ASTM A240 / ASME SA240, ASTM A480, EN 10088-2, JIS G4304 / G4305',
    sizeRange: '0.4 mm to 120 mm Thickness | Widths: 1000 mm to 2500 mm | Lengths up to 12000 mm',
    finishes: '2B (Cold Rolled), BA (Bright Annealed), No. 1 (HRAP), No. 4 (Hairline/Satin), Chequered (Tear Drop)',
    availableForms: ['Cold Rolled Sheet', 'Hot Rolled Plate', 'Slit Strip Coil', 'Shim Sheet', 'Chequered Floor Plate'],
    grades: [
      {
        id: 'ss-sheets-plates-coils-commercial',
        slug: 'ss-sheets-plates-coils',
        name: 'SS Sheets, Plates, Coils',
        code: 'ASTM A240 General Commercial',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S30400 / S31600 Series',
        din: '1.4301 / 1.4404',
        shortDesc: 'Commercial cold rolled sheets, hot rolled plates, and coils for industrial fabrication, storage tanks, and architectural panels.',
        fullDesc: 'Prime certified stainless steel sheets, heavy plates, and slit coils available in diverse surface finishes (2B, No. 1, BA, No. 4). Supplied with PVC laser protection film for sheet metal forming and laser cutting.',
        specs: { thickness: '0.5 mm to 100 mm', dimensions: '1250x2500, 1500x3000, 2000x6000 mm', finishes: '2B, No. 1, No. 4, BA' },
        applications: ['Storage silos and atmospheric tanks', 'Industrial machine panels and guards', 'Commercial kitchen equipment', 'Architectural facades and elevator claddings']
      },
      {
        id: 'ss-304-304l-sheets-plates-coils',
        slug: 'ss-304-304l-sheets-plates-coils',
        name: 'SS 304 / 304L Sheets, Plates, Coils',
        code: 'ASTM A240 TP304 / TP304L Dual Certified',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S30400 / S30403',
        din: '1.4301 / 1.4307 (X2CrNi18-9)',
        shortDesc: 'Dual-certified 18/8 austenitic stainless sheet, plate, and coil offering high ductility, weldability, and corrosion resistance.',
        fullDesc: 'Solution-annealed 304/304L stainless sheet and plate with low carbon (C ≤ 0.030%) to eliminate carbide precipitation during welding. Excellent deep drawing, stamping, and roll-forming behavior.',
        specs: { thickness: '0.4 mm to 100 mm', dimensions: '1000x2000, 1250x2500, 1500x3000, 2000x6000 mm', finishes: '2B, No. 4 Satin, No. 1 Pickled' },
        applications: ['Food, dairy, brewery, and winery processing vessels', 'Chemical reaction tanks and mixers', 'Cryogenic LNG container liners', 'Architectural exterior curtain walls']
      },
      {
        id: 'ss-316-316l-316h-sheets-plates-coils',
        slug: 'ss-316-316l-316h-sheets-plates-coils',
        name: 'SS 316 / 316L / 316H Sheets, Plates, Coils',
        code: 'ASTM A240 TP316 / TP316L / TP316H',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S31600 / S31603 / S31609',
        din: '1.4401 / 1.4404 / 1.4435',
        shortDesc: '2.0-3.0% Molybdenum-bearing stainless plate and coil delivering supreme resistance to marine pitting and chemical acids.',
        fullDesc: 'Heavy plates and coils with 2.5% Molybdenum addition for high resistance to localized pitting in marine atmospheres, brine solutions, and acetic acid environments. Grade 316H provides elevated creep strength for high-temperature service.',
        specs: { thickness: '0.5 mm to 120 mm', dimensions: '1250x2500, 1500x3000, 2000x6000 mm', finishes: '2B Cold Rolled, No. 1 HRAP Pickled' },
        applications: ['Offshore oil & gas separator vessels and topside bulkheads', 'Pharmaceutical sterile mixing tanks', 'Marine saltwater desalination evaporator vessels', 'Paper and pulp bleaching digesters']
      },
      {
        id: 'ss-316ti-sheets-plates-coils',
        slug: 'ss-316ti-sheets-plates-coils',
        name: 'SS 316Ti Sheets, Plates, Coils',
        code: 'ASTM A240 TP316Ti (Titanium Stabilized)',
        standard: 'ASTM A240 / EN 10088-2',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        shortDesc: 'Titanium-stabilized molybdenum stainless steel plate resisting sensitization and intergranular corrosion between 425°C and 800°C.',
        fullDesc: 'Stabilized with titanium to tie up carbon as titanium carbides, preserving maximum corrosion resistance during continuous high-temperature exposure and heavy welding without post-weld annealing.',
        specs: { thickness: '1.0 mm to 80 mm', dimensions: '1500x3000, 2000x6000 mm', finishes: 'No. 1 HRAP, 2B' },
        applications: ['Exhaust gas scrubbers and expansion bellows', 'Chemical processing equipment operating at 500-800°C', 'Automotive catalytic converter headers']
      },
      {
        id: 'ss-310-310s-sheets-plates-coils',
        slug: 'ss-310-310s-sheets-plates-coils',
        name: 'SS 310 / 310S Sheets, Plates, Coils',
        code: 'ASTM A240 TP310 / TP310S Refractory Grade',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S31000 / S31008',
        din: '1.4845 (X8CrNi25-21)',
        shortDesc: '25% Cr, 20% Ni refractory austenitic plate resisting cyclic scaling, oxidation, and carburization up to 1150°C.',
        fullDesc: 'High-chromium, high-nickel heat-resistant stainless steel plate. Forms a tenacious chromia surface layer that prevents destructive scaling in thermal treatment equipment, incinerators, and kiln shells.',
        specs: { thickness: '1.5 mm to 60 mm', dimensions: '1500x3000, 2000x6000 mm', finishes: 'No. 1 Hot Rolled Annealed & Pickled' },
        applications: ['Industrial furnace hearth plates, baffles, and doors', 'Cement kiln preheaters and burner hoods', 'Fluidized bed boiler tube shields', 'Thermal waste incinerator chambers']
      },
      {
        id: 'ss-317-317l-sheets-plates-coils',
        slug: 'ss-317-317l-sheets-plates-coils',
        name: 'SS 317 / 317L Sheets, Plates, Coils',
        code: 'ASTM A240 TP317 / TP317L (3-4% Moly)',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S31700 / S31703',
        din: '1.4438 (X2CrNiMo18-15-4)',
        shortDesc: 'Higher molybdenum (3.0-4.0% Mo) austenitic plate providing enhanced resistance to chemical pitting and sulfurous acids.',
        fullDesc: 'Low-carbon austenitic stainless plate containing up to 4% molybdenum, delivering significantly better resistance to pitting, crevice corrosion, and chemical attack in pulp, paper, and textile bleaching systems.',
        specs: { thickness: '2.0 mm to 60 mm', dimensions: '1500x3000, 2000x6000 mm', finishes: 'No. 1 HRAP Pickled' },
        applications: ['Flue gas desulfurization (FGD) scrubbers', 'Pulp and paper bleaching equipment', 'Petrochemical distillation columns', 'Textile dyeing machinery']
      },
      {
        id: 'ss-321-321h-sheets-plates-coils',
        slug: 'ss-321-321h-sheets-plates-coils',
        name: 'SS 321 / 321H Sheets, Plates, Coils',
        code: 'ASTM A240 TP321 / TP321H',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S32100 / S32109',
        din: '1.4541 (X6CrNiTi18-10)',
        shortDesc: 'Titanium-stabilized austenitic stainless plate engineered for intermittent and continuous high-temperature service up to 900°C.',
        fullDesc: 'Stabilized with titanium to prevent intercrystalline chromium depletion during exposure between 425°C and 850°C. Grade 321H features controlled carbon for higher creep resistance in high-temperature boilers.',
        specs: { thickness: '0.8 mm to 70 mm', dimensions: '1250x2500, 1500x3000, 2000x6000 mm', finishes: '2B, No. 1 Pickled' },
        applications: ['Aircraft exhaust manifolds and heat shields', 'Refinery expansion joints and thermal baffles', 'Waste heat boiler shells and stack dampers']
      },
      {
        id: 'ss-347-347h-sheets-plates-coils',
        slug: 'ss-347-347h-sheets-plates-coils',
        name: 'SS 347 / 347H Sheets, Plates, Coils',
        code: 'ASTM A240 TP347 / TP347H (Niobium Stabilized)',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S34700 / S34709',
        din: '1.4550 (X6CrNiNb18-10)',
        shortDesc: 'Niobium-stabilized stainless plate immune to intergranular corrosion under severe thermal cycling and heavy welding.',
        fullDesc: 'Stabilized with columbium/niobium to prevent chromium carbide precipitation. Excellent resistance to polythionic acid stress corrosion cracking in petroleum refinery hydrocracking and catalytic reforming.',
        specs: { thickness: '1.0 mm to 65 mm', dimensions: '1500x3000, 2000x6000 mm', finishes: 'No. 1 HRAP Pickled' },
        applications: ['Refinery catalytic cracking reactors', 'High-pressure steam boiler tubesheets', 'Rocket engine thrust chamber jackets']
      },
      {
        id: 'ss-410-sheets-plates-coils',
        slug: 'ss-410-sheets-plates-coils',
        name: 'SS 410 Sheets, Plates, Coils',
        code: 'ASTM A240 Type 410 Martensitic',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S41000',
        din: '1.4006 (X12Cr13)',
        shortDesc: '12% Chromium martensitic stainless steel plate heat-treatable to high hardness, tensile strength, and wear resistance.',
        fullDesc: 'Hardens by oil quenching and tempering to achieve high strength, abrasion resistance, and mild atmospheric corrosion protection. Widely utilized in steam turbine diaphragms and mining chutes.',
        specs: { thickness: '1.5 mm to 50 mm', dimensions: '1250x2500, 1500x3000 mm', finishes: 'Annealed No. 1 / 2B' },
        applications: ['Steam turbine diaphragms and runner blades', 'Mining wear plates and slurry chutes', 'Valve trim plates and pump wear rings']
      },
      {
        id: 'ss-446-sheets-plates-coils',
        slug: 'ss-446-sheets-plates-coils',
        name: 'SS 446 Sheets, Plates, Coils',
        code: 'ASTM A240 Type 446 Ferritic Heat Resistant',
        standard: 'ASTM A240',
        uns: 'UNS S44600',
        din: '1.4762 (X10CrAlSi25)',
        shortDesc: 'High-chromium (25% Cr) ferritic stainless plate providing exceptional resistance to high-temperature sulfidation up to 1050°C.',
        fullDesc: 'Non-nickel ferritic heat-resistant alloy plate. Offers outstanding resistance to sulfur-bearing flue gases, molten copper, and brass dross at temperatures where nickel alloys suffer sulfidation.',
        specs: { thickness: '2.0 mm to 40 mm', dimensions: '1250x2500, 1500x3000 mm', finishes: 'No. 1 Pickled' },
        applications: ['Sulfur burner combustion boxes', 'Glass furnace regenerator ports', 'Lead and copper smelting rabble blades']
      },
      {
        id: 'ss-904l-sheets-plates-coils',
        slug: 'ss-904l-sheets-plates-coils',
        name: 'SS 904L Sheets, Plates, Coils',
        code: 'ASTM A240 UNS N08904 / 904L Super Austenitic',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS N08904',
        din: '1.4539 (X1NiCrMoCu25-20-5)',
        shortDesc: 'Super austenitic stainless plate containing 4.5% Mo and 1.5% Copper, engineered specifically for warm sulfuric acid.',
        fullDesc: 'High-nickel, high-molybdenum super austenitic stainless steel plate with added copper. Provides exceptional resistance to strong reducing acids like sulfuric and phosphoric acids across high concentrations.',
        specs: { thickness: '1.0 mm to 50 mm', dimensions: '1500x3000, 2000x6000 mm', finishes: '2B, No. 1 HRAP Pickled' },
        applications: ['Sulfuric and phosphoric acid storage tanks and reactors', 'Flue gas desulfurization (FGD) scrubbers', 'Seawater cooling plate heat exchangers']
      }
    ]
  },
  {
    id: 'super-duplex-sheets-plates-coils',
    slug: 'super-duplex-sheets-plates-coils',
    materialSlug: 'duplex-steel',
    materialName: 'Duplex & Super Duplex',
    aliases: ['duplex-sheets', 'super-duplex-plates', 'duplex-steel-sheet-plate-coil'],
    name: 'Super & Duplex Sheets, Plates, Coils',
    headline: 'High-Strength Dual-Phase Austenitic-Ferritic Marine & Chemical Process Plates',
    image: img_duplex_sheet,
    shortDesc: 'Dual-phase austenitic-ferritic stainless steel heavy plates and slit coils offering twice the mechanical yield strength of standard austenitic grades, paired with exceptional resistance to marine pitting (PREN ≥ 35–42) and chloride stress corrosion cracking.',
    standards: 'ASTM A240 / ASME SA240, NORSOK M-650 MDS D45/D55, EN 10028-7',
    sizeRange: '1.5 mm to 80 mm Thickness | Widths: 1500 mm to 3000 mm | Lengths up to 12000 mm',
    finishes: 'No. 1 HRAP Pickled & Passivated, Cut-to-Size Plasma/Waterjet Profiling',
    availableForms: ['Heavy Rolled Plate', 'Cold Rolled Sheet', 'Slit Coil', 'Cut-to-Length Profiles'],
    grades: [
      {
        id: 'duplex-steel-s31803-sheet-plate-coil',
        slug: 'duplex-steel-s31803-sheet-plate-coil',
        name: 'Duplex Steel S31803 Sheet, Plate, Coil',
        code: 'ASTM A240 UNS S31803 (Standard 2205)',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S31803',
        din: '1.4462 (X2CrNiMoN22-5-3)',
        shortDesc: '22% Cr, 5% Ni, 3% Mo duplex stainless plate delivering minimum yield strength of 450 MPa and high chloride immunity.',
        fullDesc: 'Standard duplex stainless steel plate providing a balanced 50/50 ferrite-austenite microstructure. Yield strength is more than twice that of 316L, allowing 30% reduction in vessel wall thickness.',
        specs: { thickness: '1.5 mm to 80 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'ASTM A923 Method C, 100% UT' },
        applications: ['Offshore oil & gas separator vessels', 'Chemical tanker cargo tanks and bulkheads', 'Pulp and paper continuous digesters']
      },
      {
        id: 'duplex-steel-s32205-sheet-plate-coil',
        slug: 'duplex-steel-s32205-sheet-plate-coil',
        name: 'Duplex Steel S32205 Sheet, Plate, Coil',
        code: 'ASTM A240 UNS S32205 (Restricted 2205)',
        standard: 'ASTM A240 / NORSOK M-650',
        uns: 'UNS S32205',
        din: '1.4462 Restricted (F51)',
        shortDesc: 'Optimized chemistry high-nitrogen 2205 duplex plate delivering guaranteed PREN ≥ 35 for offshore oil and gas production.',
        fullDesc: 'Features higher minimum chromium, molybdenum, and nitrogen content than S31803. Fully qualified under NORSOK M-650 MDS D45 for offshore oil and gas pressure vessels and topside equipment.',
        specs: { thickness: '2.0 mm to 80 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'ASTM G48 Method A at 25°C' },
        applications: ['Subsea manifold structural plates', 'Desalination plant high-pressure pump casings', 'Bioreactor pressure shells']
      },
      {
        id: 'super-duplex-s32750-sheet-plate-coil',
        slug: 'super-duplex-s32750-sheet-plate-coil',
        name: 'Super Duplex S32750 Sheet, Plate, Coil',
        code: 'ASTM A240 UNS S32750 (2507 Super Duplex)',
        standard: 'ASTM A240 / ASME SA240',
        uns: 'UNS S32750',
        din: '1.4410 (X2CrNiMoN25-7-4)',
        shortDesc: '25% Cr, 7% Ni, 4% Mo super duplex plate with PREN ≥ 42 and 550 MPa yield strength for severe subsea and chlorinated seawater.',
        fullDesc: 'Super duplex stainless steel plate designed for extreme marine and chemical services. Yield strength minimum 550 MPa with complete resistance to pitting and crevice corrosion in hot seawater up to 50°C.',
        specs: { thickness: '3.0 mm to 60 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'ASTM G48 Method A at 50°C (Zero Pitting)' },
        applications: ['Offshore deluge firewater storage tanks', 'Subsea Christmas tree frames and manifold plates', 'HPAL autoclaves in nickel mining']
      },
      {
        id: 'super-duplex-s32760-sheet-plate-coil',
        slug: 'super-duplex-s32760-sheet-plate-coil',
        name: 'Super Duplex S32760 Sheet, Plate, Coil',
        code: 'ASTM A240 UNS S32760 (Zeron 100)',
        standard: 'ASTM A240 / NORSOK M-650',
        uns: 'UNS S32760',
        din: '1.4501 (X2CrNiMoCuWN25-7-4)',
        shortDesc: 'Tungsten and copper fortified super duplex plate providing PREN ≥ 42 and superior erosion resistance in acidic chlorides.',
        fullDesc: 'Super duplex plate with deliberate additions of tungsten (0.5-1.0%) and copper (0.5-1.0%). Delivers outstanding resistance to localized erosion-corrosion in high-velocity marine slurries and hot sulfuric acid.',
        specs: { thickness: '3.0 mm to 60 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'ASTM G48 Method A at 50°C, 100% UT' },
        applications: ['Flue gas cleaning and scrubber vessels', 'Phosphoric acid manufacturing evaporators', 'Geothermal energy brine separator plates']
      }
    ]
  },
  {
    id: 'carbon-steel-sheets-plates-coils',
    slug: 'carbon-steel-sheets-plates-coils',
    materialSlug: 'carbon-steel',
    materialName: 'Carbon Steel',
    aliases: ['carbon-steel-plates', 'cs-plates', 'carbon-steel-sheet-plate-coil'],
    name: 'Carbon Steel Sheets, Plates, Coils',
    headline: 'Certified Boiler Quality (BQ), High-Tensile Structural & Pressure Vessel Heavy Steel Plates',
    image: img_carbon_sheet,
    shortDesc: 'Fully killed, vacuum degassed carbon steel pressure vessel plates, structural steel plates, and hot rolled coils conforming to ASTM A516, ASTM A36, ASTM A283, ASTM A572, and IS 2062 for boilers, tanks, bridges, and heavy industrial fabrication.',
    standards: 'ASTM A516 / ASME SA516, ASTM A36, ASTM A572, ASTM A283, ASTM A285, IS 2062, EN 10025',
    sizeRange: '1.6 mm to 150 mm Thickness | Widths: 1500 mm to 3500 mm | Lengths up to 12000 mm',
    finishes: 'Hot Rolled Black, Shot Blasted & Primed, Normalized, Cut-to-Size Profiles',
    availableForms: ['Boiler Quality (BQ) Plate', 'Structural Mild Steel Plate', 'Hot Rolled Coil', 'Dished End Blank Plate'],
    grades: [
      {
        id: 'carbon-steel-sheet-plate-coil-commercial',
        slug: 'carbon-steel-sheet-plate-coil',
        name: 'Carbon Steel Sheet, Plate, Coil',
        code: 'ASTM / IS Carbon Steel Standard Plate',
        standard: 'ASTM A36 / IS 2062 / EN 10025',
        uns: 'Carbon Steel Commercial',
        din: '1.0038 / 1.0577',
        shortDesc: 'General industrial structural carbon steel sheets, heavy plates, and hot rolled coils for fabrication and engineering.',
        fullDesc: 'Prime certified carbon steel plate supplied in as-rolled or normalized conditions. Conforms to major international engineering standards with reliable tensile strength, good weldability, and clean flame/plasma cutting edges.',
        specs: { thickness: '2 mm to 120 mm', dimensions: '1500x6000, 2000x8000, 2500x12000 mm', testing: 'Tensile, Bend, Ultrasonic ASTM A578' },
        applications: ['Industrial machinery beds and bases', 'Storage tanks and silos', 'Building columns and heavy civil fabrication']
      },
      {
        id: 'astm-a36-sheet-plate-coil',
        slug: 'astm-a36-sheet-plate-coil',
        name: 'ASTM A36 Sheet, Plate, Coil',
        code: 'ASTM A36 / ASME SA36 Structural Steel',
        standard: 'ASTM A36 / ASME SA36',
        uns: 'UNS K02600',
        din: '1.0038 (S235JR Equivalent)',
        shortDesc: 'Universal structural carbon steel plate with minimum yield strength of 250 MPa (36 ksi) and excellent weldability.',
        fullDesc: 'ASTM A36 is the most widely specified structural carbon steel plate in North America. Features low carbon content for easy cutting, drilling, and welding without preheating for standard thicknesses.',
        specs: { thickness: '3 mm to 100 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Tensile, Elongation, 180° Bend' },
        applications: ['Bridges, buildings, and industrial warehouse structures', 'Truck chassis and material handling frames', 'Gusset plates, base plates, and structural brackets']
      },
      {
        id: 'astm-a283-grade-c-sheet-plate-coil',
        slug: 'astm-a283-grade-c-sheet-plate-coil',
        name: 'ASTM A283 Grade C Sheet, Plate, Coil',
        code: 'ASTM A283 Gr. C Intermediate Strength',
        standard: 'ASTM A283 / ASME SA283',
        uns: 'UNS K02401',
        din: '1.0037 (St 37-2)',
        shortDesc: 'Low and intermediate tensile strength (380-515 MPa) structural plate ideal for cold forming and welding.',
        fullDesc: 'Four-grade structural steel specification where Grade C is the most common. Offers high ductility and ease of fabrication for atmospheric storage tanks and non-critical civil structures.',
        specs: { thickness: '4 mm to 80 mm', dimensions: '1500x6000, 2000x6000 mm', testing: 'Tensile, Bend' },
        applications: ['Water storage tanks and non-pressure vessels', 'Transmission tower foundation plates', 'General automotive and railway car frames']
      },
      {
        id: 'astm-a285-grade-c-sheet-plate-coil',
        slug: 'astm-a285-grade-c-sheet-plate-coil',
        name: 'ASTM A285 Grade C Sheet, Plate, Coil',
        code: 'ASTM A285 Gr. C Low/Intermediate Pressure Vessel',
        standard: 'ASTM A285 / ASME SA285',
        uns: 'UNS K02801',
        din: '1.0425 (P265GH Equivalent)',
        shortDesc: 'Pressure vessel plate for low and intermediate pressure tanks, boilers, and stationary equipment.',
        fullDesc: 'Low-to-intermediate tensile strength carbon steel plate intended for fusion-welded pressure vessels. Readily cold-formed and roll-curved into vessel shells.',
        specs: { thickness: '5 mm to 50 mm', dimensions: '1500x6000 mm', testing: 'ASME Section II Tensile, Bend' },
        applications: ['Low-pressure steam boilers and water heaters', 'Stationary storage vessels and air receivers']
      },
      {
        id: 'astm-a515-gr-60-sheet-plate-coil',
        slug: 'astm-a515-gr-60-sheet-plate-coil',
        name: 'ASTM A515 Gr 60 Sheet, Plate, Coil',
        code: 'ASTM A515 Grade 60 (High-Temp Service)',
        standard: 'ASTM A515 / ASME SA515',
        uns: 'UNS K02400',
        din: '1.0486 (P275GH)',
        shortDesc: 'Coarse-grain carbon-silicon steel plate engineered for intermediate and higher-temperature service in boilers.',
        fullDesc: 'Coarse-grain practice carbon steel plate intended primarily for intermediate- and higher-temperature service in boilers and other pressure vessels.',
        specs: { thickness: '6 mm to 100 mm', dimensions: '1500x6000, 2000x6000 mm', testing: 'High-Temp Tensile, UT ASTM A578' },
        applications: ['Stationary boiler shells and steam drums', 'High-temperature heat exchanger shells']
      },
      {
        id: 'astm-a515-gr-70-sheet-plate-coil',
        slug: 'astm-a515-gr-70-sheet-plate-coil',
        name: 'ASTM A515 Gr 70 Sheet, Plate, Coil',
        code: 'ASTM A515 Grade 70 (High-Temp Pressure Vessel)',
        standard: 'ASTM A515 / ASME SA515',
        uns: 'UNS K03100',
        din: '1.0487 (P295GH)',
        shortDesc: 'High-tensile (485-620 MPa) coarse-grained boiler plate engineered for elevated temperature pressure service.',
        fullDesc: 'Delivers higher tensile strength than Grade 60 for pressure vessels operating at elevated temperatures in power plants and oil refineries.',
        specs: { thickness: '6 mm to 120 mm', dimensions: '2000x6000, 2500x8000 mm', testing: 'ASME SA515 Tensile, UT' },
        applications: ['High-temperature steam drum shells', 'Refinery cracking vessel heads and shells']
      },
      {
        id: 'astm-a572-grade-50-sheet-plate-coil',
        slug: 'astm-a572-grade-50-sheet-plate-coil',
        name: 'ASTM A572 Grade 50 Sheet, Plate, Coil',
        code: 'ASTM A572 Grade 50 (HSLA Steel)',
        standard: 'ASTM A572 / ASME SA572',
        uns: 'UNS K02303',
        din: '1.0577 (S355J2 Equivalent)',
        shortDesc: 'High-strength low-alloy (HSLA) columbium-vanadium structural steel plate with minimum yield strength of 345 MPa (50 ksi).',
        fullDesc: 'Micro-alloyed HSLA steel plate providing high strength-to-weight ratio for bridge construction, crane booms, and heavy civil projects without excessive weight penalties.',
        specs: { thickness: '6 mm to 100 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Charpy Impact, Tensile, Elongation' },
        applications: ['Highway bridges and overhead sign structures', 'Heavy mobile crane booms and outriggers', 'Mining truck dump bodies and excavator arms']
      },
      {
        id: 'astm-a516-grade-60-sheet-plate-coil',
        slug: 'astm-a516-grade-60-sheet-plate-coil',
        name: 'ASTM A516 Grade 60 Sheet, Plate, Coil',
        code: 'ASTM A516 Grade 60 (Fine Grain BQ)',
        standard: 'ASTM A516 / ASME SA516',
        uns: 'UNS K02100',
        din: '1.0486 (P275NH)',
        shortDesc: 'Lower-carbon (C ≤ 0.21%) boiler plate providing superior cold-head forming ductility and low-temperature impact toughness.',
        fullDesc: 'Fully killed, fine-grained carbon steel pressure vessel plate. Excellent weldability and notch toughness down to -50°C, ideal for vessels requiring dished and torispherical head forming.',
        specs: { thickness: '6 mm to 120 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Charpy at -50°C, 100% Ultrasonic' },
        applications: ['Dished ends and ellipsoidal heads for vessels', 'Refrigerated gas low-temperature storage tanks', 'Hydrocarbon distillation column shell plates']
      },
      {
        id: 'astm-a516-grade-65-sheet-plate-coil',
        slug: 'astm-a516-grade-65-sheet-plate-coil',
        name: 'ASTM A516 Grade 65 Sheet, Plate, Coil',
        code: 'ASTM A516 Grade 65 (Balanced Pressure Plate)',
        standard: 'ASTM A516 / ASME SA516',
        uns: 'UNS K02403',
        din: '1.0488',
        shortDesc: 'Balanced tensile strength (450-585 MPa) fine-grained boiler plate for moderate and lower temperature vessels.',
        fullDesc: 'Provides balanced properties between Grade 60 and Grade 70, frequently specified in chemical processing vessels requiring both good forming behavior and robust design stress allowances.',
        specs: { thickness: '6 mm to 120 mm', dimensions: '2000x6000 mm', testing: 'Charpy V-Notch, Tensile, UT' },
        applications: ['Chemical reactor shell plates', 'Refinery accumulator drums', 'LPG storage tanks']
      },
      {
        id: 'astm-a516-grade-70-sheet-plate-coil',
        slug: 'astm-a516-grade-70-sheet-plate-coil',
        name: 'ASTM A516 Grade 70 Sheet, Plate, Coil',
        code: 'ASTM A516 Grade 70 (The Global Standard BQ Plate)',
        standard: 'ASTM A516 / ASME SA516',
        uns: 'UNS K02700',
        din: '1.0487 (P295GH / 17Mn4)',
        shortDesc: 'Fine-grained aluminum-killed boiler plate providing superior notch toughness (485-620 MPa tensile) in pressure vessels.',
        fullDesc: 'The global benchmark carbon steel pressure vessel plate. Produced using fine austenitic grain practice and normalized when thickness exceeds 40 mm. Tested with optional HIC testing for sour gas service.',
        specs: { thickness: '6 mm to 150 mm', dimensions: '1500x6000 to 3000x12000 mm', testing: 'Charpy at -20°C/-46°C, UT ASTM A578' },
        applications: ['Boiler steam drums and deaerator vessels', 'Petrochemical fractionating towers and reactors', 'High-pressure bullet tanks and LPG spheres', 'Heat exchanger heavy tubesheet backing plates']
      },
      {
        id: 'astm-a537-class-2-sheet-plate-coil',
        slug: 'astm-a537-class-2-sheet-plate-coil',
        name: 'ASTM A537 Class 2 Sheet, Plate, Coil',
        code: 'ASTM A537 Class 2 (Quenched & Tempered BQ)',
        standard: 'ASTM A537 / ASME SA537',
        uns: 'UNS K12437',
        din: '1.8902 (P460NH / P460QH)',
        shortDesc: 'Heat-treated carbon-manganese-silicon steel plate quenched and tempered to high yield strength (minimum 415 MPa / 60 ksi).',
        fullDesc: 'Quenched and tempered high-yield pressure vessel steel plate. Provides substantially higher allowable design stresses than standard A516-70 while maintaining good notch toughness.',
        specs: { thickness: '8 mm to 100 mm', dimensions: '2000x6000 mm', testing: 'Quenched & Tempered Tensile, Charpy at -46°C' },
        applications: ['High-pressure gas storage spheres', 'Offshore production separator vessels', 'Heavy-wall hydrotreating reactors']
      },
      {
        id: 'astm-a709-grade-36-sheet-plate-coil',
        slug: 'astm-a709-grade-36-sheet-plate-coil',
        name: 'ASTM A709 Grade 36 Sheet, Plate, Coil',
        code: 'ASTM A709 Grade 36 (Structural Steel for Bridges)',
        standard: 'ASTM A709 / AASHTO M270',
        uns: 'UNS K02600',
        din: '1.0038 Bridge Spec',
        shortDesc: 'Carbon steel plate specifically intended for structural use in highway and railroad bridges with mandatory impact toughness.',
        fullDesc: 'Certified for bridge engineering conforming to AASHTO requirements. Tested for fracture-critical and non-fracture-critical bridge tension components.',
        specs: { thickness: '6 mm to 80 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Charpy V-Notch per AASHTO Zone 1/2/3' },
        applications: ['Highway bridge girders and crossbeams', 'Railroad overpass structural steel plates', 'Pedestrian bridge truss joints']
      },
      {
        id: 'c45-sheet-plate-coil',
        slug: 'c45-sheet-plate-coil',
        name: 'C45 Sheet, Plate, Coil',
        code: 'EN 10083-2 C45 / 1.0503 (Medium Carbon)',
        standard: 'EN 10083-2 / DIN 17200 / AISI 1045',
        uns: 'UNS G10450',
        din: '1.0503 (C45 / C45E)',
        shortDesc: 'Medium carbon (0.45% C) machinery steel plate heat-treatable for high wear resistance, flame induction hardening, and shafts.',
        fullDesc: 'Medium carbon engineering steel plate. Can be through-hardened or flame/induction hardened to achieve high surface hardness for gear blanks, machine plates, and die bases.',
        specs: { thickness: '8 mm to 120 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'Tensile, Hardness (170-220 HBW as supplied)' },
        applications: ['Machine tool baseplates and guide rails', 'Press brake dies and punch tooling blocks', 'Agricultural machinery blades and wear parts']
      },
      {
        id: 'is-2062-e250-e350-sheet-plate-coil',
        slug: 'is-2062-e250-e350-sheet-plate-coil',
        name: 'IS 2062 E250 / E350 Sheet, Plate, Coil',
        code: 'IS 2062 Grade E250 / E350 (BIS Certified)',
        standard: 'IS 2062:2011 (Bureau of Indian Standards)',
        uns: 'IS 2062 Series',
        din: '1.0044 / 1.0577 Equivalent',
        shortDesc: 'BIS-certified structural steel plates and coils in Grade E250 and E350 (micro-alloyed high-tensile) for infrastructure projects.',
        fullDesc: 'Hot rolled medium and high tensile structural steel plates manufactured to Bureau of Indian Standards (BIS) specifications. Available in Quality A, B, and C with mandatory impact testing at 0°C or -20°C.',
        specs: { thickness: '2 mm to 100 mm', dimensions: '1250x2500, 1500x6000, 2000x8000 mm', testing: 'Charpy Impact at 0°C/-20°C, Bend, UT' },
        applications: ['Power plant boiler structural columns and beams', 'Expressway flyover girder plates', 'Industrial sheds and PEB building frames', 'Heavy crane gantry girder plates']
      }
    ]
  },
  {
    id: 'alloy-steel-sheets-plates-coils',
    slug: 'alloy-steel-sheets-plates-coils',
    materialSlug: 'alloy-steel',
    materialName: 'Alloy Steel',
    aliases: ['alloy-steel-plates', 'chrome-moly-plates', 'alloy-steel-sheet-plate-coil'],
    name: 'Alloy Steel Sheets, Plates, Coils',
    headline: 'High-Temperature Chrome-Moly (Cr-Mo) Creep-Resistant Pressure Vessel Steel Plates',
    image: img_alloy_sheet,
    shortDesc: 'Normalized and tempered chromium-molybdenum alloy steel plates conforming to ASTM A387 and EN 10028-2, formulated to resist elevated-temperature creep rupture, hydrogen attack, and thermal fatigue in power generation boilers and refinery reactors up to 600°C.',
    standards: 'ASTM A387 / ASME SA387, EN 10028-2, DIN 17155',
    sizeRange: '6 mm to 150 mm Thickness | Widths: 1500 mm to 3500 mm | Lengths up to 12000 mm',
    finishes: 'Normalized & Tempered (N+T), Shot Blasted, Beveled Edge Preparation',
    availableForms: ['Normalized & Tempered Heavy Plate', 'Dished Head Blank Plate', 'Custom Flame/Plasma Profiles'],
    grades: [
      {
        id: 'alloy-steel-sheet-plate-coil-commercial',
        slug: 'alloy-steel-sheet-plate-coil',
        name: 'Alloy Steel Sheet, Plate, Coil',
        code: 'ASTM A387 Chrome-Moly Commercial Plate',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'Chrome-Moly Alloy Steel',
        din: '1.7335 / 1.7380',
        shortDesc: 'Elevated temperature chrome-moly pressure vessel plate providing high creep-rupture strength for thermal utility stations.',
        fullDesc: 'Prime alloy steel plates containing chromium and molybdenum for high-temperature service in boilers, pressure vessels, and heat exchangers.',
        specs: { thickness: '6 mm to 120 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Hot Tensile, Ultrasonic ASTM A578' },
        applications: ['Boiler steam drums and headers', 'Refinery hydroprocessing reactors', 'High-temperature industrial pressure vessels']
      },
      {
        id: 'astm-a387-grade-1-sheet-plate-coil',
        slug: 'astm-a387-grade-1-sheet-plate-coil',
        name: 'ASTM A387 Grade 1 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 1 (0.5Mo Alloy Steel)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K11215',
        din: '1.5415 (16Mo3 Equivalent)',
        shortDesc: '0.5% Molybdenum alloy steel boiler plate providing improved creep strength over carbon steel up to 500°C.',
        fullDesc: 'Molybdenum-alloyed pressure vessel plate providing resistance to graphitization and thermal creep in moderate high-temperature steam generation.',
        specs: { thickness: '6 mm to 100 mm', dimensions: '1500x6000 mm', testing: 'Tensile, Charpy V-Notch' },
        applications: ['Industrial steam boiler shells', 'Flue gas heat recovery ducts', 'Power station steam piping backing plates']
      },
      {
        id: 'astm-a387-grade-5-sheet-plate-coil',
        slug: 'astm-a387-grade-5-sheet-plate-coil',
        name: 'ASTM A387 Grade 5 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 5 (5Cr - 0.5Mo)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        shortDesc: '5% Chromium, 0.5% Molybdenum alloy plate offering superior oxidation and sulfidation resistance in oil refineries up to 600°C.',
        fullDesc: 'Intermediate chrome-moly alloy steel plate designed for sulfur-bearing petroleum refining environments, delayed cokers, and cracking furnaces.',
        specs: { thickness: '6 mm to 100 mm', dimensions: '1500x6000, 2000x6000 mm', testing: 'Hot Tensile, Step Cooling, UT' },
        applications: ['Petroleum refinery furnace casings', 'Coker drums and cracking vessels', 'High-temperature sulfur recovery units']
      },
      {
        id: 'astm-a387-grade-9-sheet-plate-coil',
        slug: 'astm-a387-grade-9-sheet-plate-coil',
        name: 'ASTM A387 Grade 9 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 9 (9Cr - 1Mo)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K90941',
        din: '1.7386 (X11CrMo9-1)',
        shortDesc: '9% Chromium, 1% Molybdenum alloy plate for severe catalytic cracking units and hot hydrogen atmosphere reactors.',
        fullDesc: 'High-chromium alloy pressure vessel plate providing robust resistance to hot hydrogen attack, graphitization, and oxidation under severe petrochemical refining conditions.',
        specs: { thickness: '6 mm to 100 mm', dimensions: '1500x6000 mm', testing: 'Elevated Temperature Tensile, 100% UT' },
        applications: ['Catalytic hydrotreating reactors', 'Refinery high-temperature transfer headers', 'Petrochemical cracker shells']
      },
      {
        id: 'astm-a387-grade-11-sheet-plate-coil',
        slug: 'astm-a387-grade-11-sheet-plate-coil',
        name: 'ASTM A387 Grade 11 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 11 Class 2 (1.25Cr - 0.5Mo)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K11789',
        din: '1.7335 (13CrMo4-5)',
        shortDesc: '1.25% Chromium, 0.5% Molybdenum Class 2 plate; the industry benchmark for utility boilers and steam generators up to 570°C.',
        fullDesc: 'Normalized and tempered 1.25Cr-0.5Mo boiler plate with Class 2 tensile properties (515-690 MPa). High creep rupture resistance and thermal fatigue endurance.',
        specs: { thickness: '6 mm to 120 mm', dimensions: '1500x6000, 2000x8000 mm', testing: 'Hot Tensile, Charpy at 0°C/-20°C, UT' },
        applications: ['Thermal power station steam drums and headers', 'Refinery hydrodesulfurization (HDS) reactors', 'Chemical processing heat exchanger tubesheets']
      },
      {
        id: 'astm-a387-grade-22-sheet-plate-coil',
        slug: 'astm-a387-grade-22-sheet-plate-coil',
        name: 'ASTM A387 Grade 22 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 22 Class 2 (2.25Cr - 1.0Mo)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        shortDesc: '2.25% Chromium, 1.0% Molybdenum heavy plate engineered for hydrogen service and supercritical boilers up to 600°C.',
        fullDesc: 'Heavy-gauge alloy steel plate with controlled J-factor (J ≤ 100) to prevent temper embrittlement. Meets Nelson curve criteria for high-pressure hydrogen service in oil refinery hydrocrackers.',
        specs: { thickness: '6 mm to 150 mm', dimensions: '2000x6000, 2500x10000 mm', testing: 'Step Cooling Test, Charpy at -30°C, 100% UT' },
        applications: ['Refinery catalytic hydrocracker heavy-wall reactors', 'Supercritical fossil fuel boiler drums and steam manifolds', 'Coal gasification synthesis reactors']
      },
      {
        id: 'astm-a387-grade-91-sheet-plate-coil',
        slug: 'astm-a387-grade-91-sheet-plate-coil',
        name: 'ASTM A387 Grade 91 Sheet, Plate, Coil',
        code: 'ASTM A387 Grade 91 Class 2 (9Cr - 1Mo - V - Nb)',
        standard: 'ASTM A387 / ASME SA387',
        uns: 'UNS K90901',
        din: '1.4903 (X10CrMoVNb9-1)',
        shortDesc: 'Modified 9Cr-1Mo-V-Nb advanced alloy steel plate delivering ultra-high creep strength for supercritical power plants up to 650°C.',
        fullDesc: 'Advanced martensitic alloy plate micro-alloyed with vanadium and niobium. Allows substantial reduction in plate thickness while operating under ultra-supercritical steam conditions.',
        specs: { thickness: '8 mm to 100 mm', dimensions: '1500x6000, 2000x6000 mm', testing: 'Hot Tensile, Creep Rupture, 100% UT' },
        applications: ['Ultra-supercritical power plant headers and drums', 'High-temperature steam turbine casings', 'Advanced petrochemical gasification vessels']
      }
    ]
  },
  {
    id: 'inconel-sheets-plates-coils',
    slug: 'inconel-sheets-plates-coils',
    materialSlug: 'inconel',
    materialName: 'Inconel',
    aliases: ['inconel-plates', 'inconel-sheet-plate-coil', 'nickel-alloy-plates'],
    name: 'Inconel Sheets, Plates, Coils',
    headline: 'Nickel-Chromium High-Temperature Superalloy Sheets, Heavy Plates & Strip Coils',
    image: img_inconel_sheet,
    shortDesc: 'Solid-solution and age-hardenable nickel-chromium superalloy sheets and plates engineered for extreme resistance to thermal oxidation up to 1200°C, carburization, and chloride stress corrosion cracking in aerospace, nuclear, and sour gas applications.',
    standards: 'ASTM B168 / ASME SB168, ASTM B443, ASTM B409, ASTM B670, AMS 5596, NACE MR0175',
    sizeRange: '0.5 mm to 60 mm Thickness | Widths: 1000 mm to 2000 mm | Lengths up to 6000 mm',
    finishes: 'Cold Rolled Bright Annealed (CR BA), Hot Rolled Pickled (No. 1 HRAP)',
    availableForms: ['Precision Sheet', 'Heavy Rolled Plate', 'Cold Rolled Slit Coil', 'High-Temp Shim Strip'],
    grades: [
      {
        id: 'inconel-sheets-plates-coils-commercial',
        slug: 'inconel-sheets-plates-coils',
        name: 'Inconel Sheets, Plates, Coils',
        code: 'ASTM B168 / B443 Inconel Standard',
        standard: 'ASTM B168 / ASTM B443',
        uns: 'UNS N06600 / N06625 Series',
        din: '2.4816 / 2.4856',
        shortDesc: 'Prime nickel-chromium superalloy plates and coils engineered for extreme thermal and corrosive chemical services.',
        fullDesc: 'High-nickel superalloy sheets and heavy plates providing virtual immunity to chloride stress corrosion cracking, high-temperature scaling, and corrosive chemical attack.',
        specs: { thickness: '0.8 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: '100% PMI, Tensile, Ultrasonic' },
        applications: ['Chemical reactor vessels and distillation trays', 'Aerospace gas turbine components', 'Nuclear steam generator internals']
      },
      {
        id: 'inconel-600-sheets-plates-coils',
        slug: 'inconel-600-sheets-plates-coils',
        name: 'Inconel 600 Sheets, Plates, Coils',
        code: 'ASTM B168 Inconel 600 (72% Nickel)',
        standard: 'ASTM B168 / ASME SB168',
        uns: 'UNS N06600',
        din: '2.4816 (NiCr15Fe)',
        shortDesc: '72% Nickel alloy plate providing virtual immunity to chloride stress corrosion cracking and oxidation up to 1150°C.',
        fullDesc: 'Standard engineering material for applications requiring resistance to corrosion and heat. High nickel content prevents chloride stress corrosion cracking while chromium provides resistance to sulfur compounds.',
        specs: { thickness: '0.5 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: 'Tensile, Hardness, UT' },
        applications: ['Nuclear steam generator heater plates', 'Caustic soda evaporator pans and heaters', 'Furnace retorts, muffles, and heat-treating baskets']
      },
      {
        id: 'inconel-601-sheets-plates-coils',
        slug: 'inconel-601-sheets-plates-coils',
        name: 'Inconel 601 Sheets, Plates, Coils',
        code: 'ASTM B168 Inconel 601 (Al-Modified)',
        standard: 'ASTM B168 / ASME SB168',
        uns: 'UNS N06601',
        din: '2.4851 (NiCr23Fe)',
        shortDesc: 'Aluminum-bearing nickel-chromium alloy sheet offering outstanding resistance to thermal cyclic oxidation up to 1250°C.',
        fullDesc: 'Contains an addition of aluminum that forms a tightly adherent protective oxide layer resisting spalling even under severe thermal cycling conditions.',
        specs: { thickness: '1.0 mm to 40 mm', dimensions: '1250x2500, 1500x3000 mm', testing: 'Thermal Cyclic Oxidation Testing, PMI' },
        applications: ['Thermal oxidizers and incineration chambers', 'Petrochemical reformer furnace radiant tubes and shields', 'Ceramic kiln furniture and support plates']
      },
      {
        id: 'inconel-625-sheets-plates-coils',
        slug: 'inconel-625-sheets-plates-coils',
        name: 'Inconel 625 Sheets, Plates, Coils',
        code: 'ASTM B443 Inconel 625 (Ni-Cr-Mo-Nb)',
        standard: 'ASTM B443 / ASME SB443',
        uns: 'UNS N06625',
        din: '2.4856 (NiCr22Mo9Nb)',
        shortDesc: 'High-strength Ni-Cr-Mo-Nb plate delivering supreme resistance to marine pitting, crevice corrosion, and sour gas wet H2S.',
        fullDesc: 'Solid-solution strengthened by molybdenum and niobium. Exhibits total immunity to chloride pitting and crevice corrosion without requiring precipitation heat treatment.',
        specs: { thickness: '0.5 mm to 60 mm', dimensions: '1250x2500, 1500x3000 mm', testing: 'ASTM G48 Ferric Chloride, 100% UT, PMI' },
        applications: ['Subsea production manifold cladding and structural plates', 'Offshore flare tip components and ducting', 'Sour gas (H2S / CO2) scrubber vessels', 'Seawater expansion joints and bellows']
      },
      {
        id: 'inconel-718-sheets-plates-coils',
        slug: 'inconel-718-sheets-plates-coils',
        name: 'Inconel 718 Sheets, Plates, Coils',
        code: 'ASTM B670 / AMS 5596 Inconel 718',
        standard: 'ASTM B670 / AMS 5596',
        uns: 'UNS N07718',
        din: '2.4668 (NiCr19Fe19Nb5Mo3)',
        shortDesc: 'Precipitation-hardenable superalloy sheet delivering extreme yield strength (1000+ MPa) and creep resistance up to 700°C.',
        fullDesc: 'Combines high yield strength and creep-rupture properties with excellent weldability and post-weld crack resistance. Primary material for aerospace turbines and downhole sour oil tools.',
        specs: { thickness: '0.5 mm to 40 mm', dimensions: '1000x2000, 1250x2500 mm', testing: 'Stress Rupture, Tensile, Hardness (up to 44 HRC)' },
        applications: ['Aerospace gas turbine casing rings and exhaust ducts', 'Rocket engine thrust chamber shells', 'High-pressure oil & gas downhole tool components']
      },
      {
        id: 'incoloy-800-800h-800ht-sheets-plates-coils',
        slug: 'incoloy-800-800h-800ht-sheets-plates-coils',
        name: 'Incoloy 800 / 800H / 800HT Sheets, Plates, Coils',
        code: 'ASTM B409 Incoloy 800 / 800H / 800HT',
        standard: 'ASTM B409 / ASME SB409',
        uns: 'UNS N08800 / N08810 / N08811',
        din: '1.4876 (X10NiCrAlTi32-21)',
        shortDesc: 'Iron-nickel-chromium alloy plate resisting carburization, oxidation, and rupture at sustained service above 600°C.',
        fullDesc: 'Grade 800H/800HT features controlled carbon, aluminum, and titanium additions combined with high-temperature solution annealing for maximum creep and rupture strength above 600°C.',
        specs: { thickness: '1.5 mm to 60 mm', dimensions: '1500x3000, 2000x6000 mm', testing: 'Grain Size (ASTM No. 5 or coarser), Hot Tensile' },
        applications: ['Petrochemical ethylene furnace cracker pigtails and headers', 'Hydrocarbon steam methane reformer vessels', 'Industrial thermal processing heat shields']
      },
      {
        id: 'incoloy-825-sheets-plates-coils',
        slug: 'incoloy-825-sheets-plates-coils',
        name: 'Incoloy 825 Sheets, Plates, Coils',
        code: 'ASTM B424 Incoloy 825 (Ni-Fe-Cr-Mo-Cu)',
        standard: 'ASTM B424 / ASME SB424',
        uns: 'UNS N08825',
        din: '2.4858 (NiCr21Mo)',
        shortDesc: 'Titanium-stabilized Ni-Fe-Cr-Mo-Cu plate engineered for supreme resistance to sulfuric and phosphoric acids.',
        fullDesc: 'Specifically formulated with molybdenum and copper to resist reducing acids like sulfuric and phosphoric acid, alongside resistance to pitting and stress corrosion in sour oilfield environments.',
        specs: { thickness: '1.0 mm to 50 mm', dimensions: '1250x2500, 1500x3000 mm', testing: 'Sulfuric Acid Immersion, PMI, UT' },
        applications: ['Sulfuric acid pickling tanks and heating coils', 'Phosphoric acid manufacturing evaporators', 'Nuclear fuel reprocessing dissolver vessels', 'Sour oil and gas production equipment']
      }
    ]
  },
  {
    id: 'hastelloy-sheets-plates-coils',
    slug: 'hastelloy-sheets-plates-coils',
    materialSlug: 'hastelloy',
    materialName: 'Hastelloy',
    aliases: ['hastelloy-plates', 'hastelloy-sheet-plate-coil'],
    name: 'Hastelloy Sheets, Plates, Coils',
    headline: 'Corrosion-Resistant Nickel-Molybdenum-Chromium Alloy Heavy Plates & Slit Strip Coils',
    image: img_hastelloy_sheet,
    shortDesc: 'Nickel-molybdenum-chromium superalloy plates and strip coils delivering exceptional resistance to severe oxidizing, reducing, and mixed acid chemical environments, wet chlorine gas, and localized pitting.',
    standards: 'ASTM B575 / ASME SB575, DIN 17750, NACE MR0175',
    sizeRange: '0.8 mm to 50 mm Thickness | Widths: 1000 mm to 2000 mm | Lengths up to 6000 mm',
    finishes: 'Solution Annealed & Pickled (No. 1 HRAP), Cold Rolled Mill Finish',
    availableForms: ['Heavy Rolled Plate', 'Cold Rolled Sheet', 'Slit Strip Coil', 'Laser Profiled Blanks'],
    grades: [
      {
        id: 'hastelloy-sheets-plates-coils-commercial',
        slug: 'hastelloy-sheets-plates-coils',
        name: 'Hastelloy Sheets, Plates, Coils',
        code: 'ASTM B575 Hastelloy Standard Plate',
        standard: 'ASTM B575 / ASME SB575',
        uns: 'UNS N10276 / N06022',
        din: '2.4819 / 2.4602',
        shortDesc: 'High-alloy nickel-moly-chrome plate and coil for severe chemical reactors and pollution control ducting.',
        fullDesc: 'Hastelloy sheet and plate materials deliver extraordinary resistance to localized corrosion, wet chlorine, formic acid, and ferric chloride solutions under severe chemical processing conditions.',
        specs: { thickness: '1.0 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: '100% PMI, ASTM G28 Corrosion Test' },
        applications: ['Chemical reactor vessels and distillation columns', 'Waste incineration scrubbers and stack liners', 'Pharmaceutical active ingredient processing vessels']
      },
      {
        id: 'hastelloy-c22-sheets-plates-coils',
        slug: 'hastelloy-c22-sheets-plates-coils',
        name: 'Hastelloy C22 Sheets, Plates, Coils',
        code: 'ASTM B575 UNS N06022 (Alloy C-22)',
        standard: 'ASTM B575 / ASME SB575',
        uns: 'UNS N06022',
        din: '2.4602 (NiCr21Mo14W)',
        shortDesc: 'Enhanced Ni-Cr-Mo-W alloy plate providing superior resistance to pitting, crevice corrosion, and oxidizing aqueous media.',
        fullDesc: 'Contains balanced chromium, molybdenum, and tungsten. Offers significantly better overall corrosion resistance and thermal stability compared to C-276 in oxidizing acid environments containing ferric or cupric ions.',
        specs: { thickness: '0.8 mm to 40 mm', dimensions: '1250x2500, 1500x3000 mm', testing: 'ASTM G28 Method A, 100% UT' },
        applications: ['Chlorination systems and bleach plants', 'Flue gas desulfurization (FGD) scrubber absorber walls', 'Agrochemical and pesticide reaction tanks']
      },
      {
        id: 'hastelloy-c276-sheets-plates-coils',
        slug: 'hastelloy-c276-sheets-plates-coils',
        name: 'Hastelloy C276 Sheets, Plates, Coils',
        code: 'ASTM B575 UNS N10276 (Alloy C-276)',
        standard: 'ASTM B575 / ASME SB575',
        uns: 'UNS N10276',
        din: '2.4819 (NiMo16Cr15W)',
        shortDesc: 'Universal Ni-Mo-Cr alloy plate with exceptional resistance to wet chlorine gas, hypochlorite, and severe mixed acids.',
        fullDesc: 'The premier versatile corrosion-resistant alloy plate. Resists grain-boundary precipitate formation in the weld heat-affected zone, enabling as-welded use in chemical vessels, FGD scrubbers, and paper digesters.',
        specs: { thickness: '0.8 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: 'ASTM G28, 100% UT, Spectro PMI' },
        applications: ['Sulfuric, hydrochloric, and hydrofluoric acid mixing tanks', 'Pulp and paper chlorine dioxide bleaching vessels', 'Chemical waste disposal incinerator linings', 'Sour crude gas desulfurization equipment']
      }
    ]
  },
  {
    id: 'titanium-sheets-plates-coils',
    slug: 'titanium-sheets-plates-coils',
    materialSlug: 'titanium',
    materialName: 'Titanium',
    aliases: ['titanium-plates', 'titanium-sheet-plate-coil', 'ti-plates'],
    name: 'Titanium Sheets, Plates, Coils',
    headline: 'High-Strength Lightweight & Seawater-Immune Titanium Sheets, Heavy Plates & Strip Coils',
    image: img_titanium_sheet,
    shortDesc: 'Commercially pure and high-strength alpha-beta titanium sheets, heavy plates, and strip coils conforming to ASTM B265 and ASME SB265 for plate heat exchangers, chlor-alkali cells, aerospace structures, and marine offshore installations.',
    standards: 'ASTM B265 / ASME SB265, AMS 4911, ISO 5832-2',
    sizeRange: '0.5 mm to 50 mm Thickness | Widths: 1000 mm to 2000 mm | Lengths up to 6000 mm',
    finishes: 'Cold Rolled Bright Annealed, Hot Rolled Descaled & Pickled',
    availableForms: ['Precision Strip Coil', 'Cold Rolled Sheet', 'Heavy Rolled Plate', 'Plate Heat Exchanger Blanks'],
    grades: [
      {
        id: 'titanium-sheets-plates-coils-commercial',
        slug: 'titanium-sheets-plates-coils',
        name: 'Titanium Sheets, Plates, Coils',
        code: 'ASTM B265 Commercial Titanium Plate',
        standard: 'ASTM B265 / ASME SB265',
        uns: 'UNS R50400 / R56400 Series',
        din: '3.7035 / 3.7165',
        shortDesc: 'Lightweight titanium sheet, plate, and coil providing complete immunity to marine seawater pitting and 45% weight savings.',
        fullDesc: 'Prime titanium sheets, heavy plates, and coils forming a self-healing titanium dioxide passive film that resists severe erosive attack, chlorites, and marine biofouling without chemical biocide treatment.',
        specs: { thickness: '0.5 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: '100% Ultrasonic examination, Tensile, PMI' },
        applications: ['Plate heat exchanger corrugated plates', 'Chlor-alkali electrolysis cell plates', 'Offshore marine splash-zone cladding']
      },
      {
        id: 'titanium-grade-2-sheets-plates-coils',
        slug: 'titanium-grade-2-sheets-plates-coils',
        name: 'Titanium Grade 2 Sheets, Plates, Coils',
        code: 'ASTM B265 Grade 2 (CP Titanium)',
        standard: 'ASTM B265 / ASME SB265',
        uns: 'UNS R50400',
        din: '3.7035 (Titanium Gr. 2)',
        shortDesc: 'Commercially pure unalloyed titanium plate balancing moderate mechanical strength with extraordinary ductility and seawater immunity.',
        fullDesc: 'The workhorse titanium grade for chemical process engineering and marine applications. Fully immune to crevice corrosion in seawater at temperatures up to 80°C and resistant to wet chlorine gas, nitric acid, and organic acids.',
        specs: { thickness: '0.5 mm to 50 mm', dimensions: '1000x2000, 1250x2500, 1500x3000 mm', testing: 'Tensile, 180° Bend, 100% UT' },
        applications: ['Seawater plate heat exchangers in offshore rigs and power plants', 'Chlor-alkali cell cathode plates and bleaching towers', 'Desalination multi-stage flash evaporator shell plates', 'Naval submarine acoustic fairing plates']
      },
      {
        id: 'titanium-grade-5-sheets-plates-coils',
        slug: 'titanium-grade-5-sheets-plates-coils',
        name: 'Titanium Grade 5 Sheets, Plates, Coils',
        code: 'ASTM B265 Grade 5 (Ti-6Al-4V / AMS 4911)',
        standard: 'ASTM B265 / AMS 4911',
        uns: 'UNS R56400',
        din: '3.7165 (TiAl6V4)',
        shortDesc: 'Alpha-beta titanium alloy plate featuring 6% Aluminum and 4% Vanadium for high tensile strength up to 895 MPa.',
        fullDesc: 'Ti-6Al-4V is the premier aerospace and defense titanium alloy plate. Provides high fatigue strength, fracture toughness, and heat resistance up to 400°C with significant weight savings over high-strength steel.',
        specs: { thickness: '1.0 mm to 40 mm', dimensions: '1000x2000, 1250x2500 mm', testing: 'Tensile (≥ 895 MPa), Microstructure, 100% UT' },
        applications: ['Aerospace airframe structural brackets and wing spars', 'Rocket engine casing and satellite propellant tanks', 'High-performance marine racing hull plates and hydrofoils', 'Deepwater subsea pressure vessel housings']
      }
    ]
  }
];

// Helper Lookups
const _catMap = new Map();
const _gradeMap = new Map();

SHEETS_PLATES_COILS_CATEGORIES.forEach(cat => {
  _catMap.set(cat.slug, cat);
  _catMap.set(cat.id, cat);
  if (cat.materialSlug) {
    _catMap.set(cat.materialSlug, cat);
  }
  if (cat.aliases) {
    cat.aliases.forEach(a => _catMap.set(a, cat));
  }

  const grades = cat.grades || [];
  grades.forEach(g => {
    _gradeMap.set(`${cat.slug}/${g.slug}`, g);
    _gradeMap.set(g.slug, { ...g, parentCategory: cat });
    _gradeMap.set(g.id, { ...g, parentCategory: cat });
  });
});

export function getAllSheetsPlatesCoilsCategories() {
  return SHEETS_PLATES_COILS_CATEGORIES;
}

export function getSheetsPlatesCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = String(slug).toLowerCase().trim();
  return _catMap.get(clean) || null;
}

export function getSheetsPlatesGradeBySlug(categorySlug, gradeSlug) {
  if (!gradeSlug) return null;
  const cleanGrade = String(gradeSlug).toLowerCase().trim();
  if (categorySlug) {
    const cleanCat = String(categorySlug).toLowerCase().trim();
    const direct = _gradeMap.get(`${cleanCat}/${cleanGrade}`);
    if (direct) {
      const parentCat = _catMap.get(cleanCat);
      return { ...direct, parentCategory: parentCat };
    }
  }
  return _gradeMap.get(cleanGrade) || null;
}


export function getSheetsPlatesMaterialList() {
  return [
    { slug: 'all', name: 'All Materials' },
    ...SHEETS_PLATES_COILS_CATEGORIES.map(c => ({
      slug: c.materialSlug,
      name: c.materialName,
      catSlug: c.slug,
      count: c.grades.length
    }))
  ];
}
