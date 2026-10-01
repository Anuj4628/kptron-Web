/**
 * Product Grades & Metallurgical Specifications
 * Provides rich technical data for grades across stainless steel, carbon steel,
 * alloy steel, duplex, and titanium piping products, plus flanges, fittings, fasteners,
 * plates, bars, wires, and specialized industrial forms.
 */

import {
  FLANGES_GRADES,
  FLANGES_STAINLESS_STEEL_GRADES,
  FLANGES_CARBON_STEEL_GRADES,
  FLANGES_ALLOY_STEEL_GRADES,
  FLANGES_DUPLEX_GRADES,
  FLANGES_NICKEL_GRADES,
  FLANGES_TITANIUM_GRADES
} from './grades/flangesGrades';

import {
  BUTT_WELD_FITTINGS_GRADES,
  BUTT_WELD_FITTINGS_CARBON_STEEL_GRADES,
  BUTT_WELD_FITTINGS_STAINLESS_STEEL_GRADES,
  BUTT_WELD_FITTINGS_ALLOY_STEEL_GRADES,
  BUTT_WELD_FITTINGS_DUPLEX_GRADES,
  BUTT_WELD_FITTINGS_NICKEL_GRADES,
  BUTT_WELD_FITTINGS_TITANIUM_GRADES
} from './grades/buttWeldFittingsGrades';

import { FORGED_FITTINGS_GRADES } from './grades/forgedFittingsGrades';
import { FASTENERS_GRADES } from './grades/fastenersGrades';
import { FERRULE_FITTINGS_GRADES } from './grades/ferruleFittingsGrades';
import { DAIRY_PHARMA_FITTINGS_GRADES } from './grades/dairyPharmaFittingsGrades';
import { HOSE_PIPES_GRADES } from './grades/hosePipesGrades';
import { PERFORATED_SHEETS_GRADES } from './grades/perforatedSheetsGrades';
import { WIRE_MESH_GRADES } from './grades/wireMeshGrades';

import {
  SHEETS_PLATES_GRADES,
  SHEETS_PLATES_CARBON_STEEL_GRADES,
  SHEETS_PLATES_STAINLESS_STEEL_GRADES,
  SHEETS_PLATES_ALLOY_STEEL_GRADES,
  SHEETS_PLATES_DUPLEX_GRADES,
  SHEETS_PLATES_TITANIUM_GRADES
} from './grades/sheetsPlatesGrades';

import { RODS_BARS_GRADES } from './grades/rodsBarsGrades';
import { WIRES_GRADES } from './grades/wiresGrades';
import { COIL_GRADES } from './grades/coilGrades';
import { FLAT_BARS_GRADES } from './grades/flatBarsGrades';
import { PATAPATTI_STRIPS_GRADES } from './grades/patapattiStripsGrades';
import { CIRCLE_GRADES } from './grades/circleGrades';
import { RING_GRADES } from './grades/ringGrades';

import {
  NICKEL_ALLOYS_PIPE_GRADES,
  HIGH_ALLOYS_PIPE_GRADES,
  EXOTIC_ALLOYS_PIPE_GRADES,
  ALLOY_STEEL_TUBES_GRADES
} from './grades/pipesTubesExtendedGrades';

export const STAINLESS_STEEL_GRADES = [
  {
    id: 'ss-pipe',
    name: 'SS Pipe',
    code: 'STANDARD / COMMERCIAL',
    badge: 'GENERAL ALLOY',
    uns: 'UNS S30400 / S31600 Series',
    din: '1.4301 / 1.4404',
    standards: 'ASTM A312 / ASME SA312, ASTM A358, EN 10217-7',
    shortDesc: 'Universal standard austenitic stainless steel piping for fluid transfer, process lines, and municipal distribution.',
    fullDesc: 'Standard commercial stainless steel piping supplied in seamless and welded (ERW/EFW) configurations. Engineered with a balanced chromium-nickel formulation to provide reliable corrosion resistance, excellent weldability, and structural endurance across general industrial piping installations.',
    features: [
      'Universal all-round austenitic stainless steel alloy',
      'Superior weldability & cold-forming characteristics',
      'Dual certified options (304/304L & 316/316L) readily stocked',
      'Full mill test certification (EN 10204 3.1 & 3.2)'
    ],
    specs: {
      sizeRange: '1/8" NB to 36" NB (Seamless up to 24", EFW up to 48")',
      schedules: 'SCH 5S, 10S, 40S, 80S, 160, SCH XXS',
      ends: 'Plain End (PE), Beveled End (BE, 37.5° ASME B16.25), Threaded',
      testing: '100% PMI Spectro, Hydrostatic proof up to 350 Bar, Eddy Current'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB / 200 HBW',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      mo: '—',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Chemical fluid conveyance & process headers',
      'Municipal water distribution & treatment plants',
      'Food, beverage & commercial brewery installations',
      'Architectural, plumbing & general utility networks'
    ]
  },
  {
    id: 'ss-304-304l',
    name: 'SS 304 / 304L Pipe',
    code: '304 / 304L DUAL',
    badge: 'LOW CARBON',
    uns: 'UNS S30400 / S30403 (Dual Certified)',
    din: '1.4301 / 1.4307 (X2CrNi18-9)',
    standards: 'ASTM A312 / ASME SA312, ASTM A358, DIN 17456, EN 10216-5',
    shortDesc: 'Extra-low carbon versatile austenitic pipe eliminating carbide precipitation during welding.',
    fullDesc: 'Dual-certified 304/304L stainless steel pipe featuring low carbon content (max 0.030%) to eliminate intergranular sensitization and carbide precipitation during heavy-section field welding.',
    features: [
      'Eliminates weld-decay sensitization in heavy-section fabrications',
      'High impact toughness retained down to cryogenic temperatures (-196°C)',
      'Resistance to moderately oxidizing organic and inorganic chemicals',
      'Exceptional cold forming, bending, and flaring capabilities'
    ],
    specs: {
      sizeRange: '1/8" NB to 36" NB (Seamless & Large Diameter Welded)',
      schedules: 'SCH 5S to SCH XXS (1.65 mm to 59.54 mm Wall)',
      ends: 'Plain Square Cut, Beveled Ends, Grooved',
      testing: '100% PMI, Hydrostatic, Flaring, Flattening, Intergranular Corrosion'
    },
    mechanical: {
      tensile: '≥ 485 MPa (304L) / ≥ 515 MPa (304)',
      yield: '≥ 170 MPa (304L) / ≥ 205 MPa (304)',
      elongation: '≥ 35% in 2"',
      hardness: '≤ 88 HRB / 187 HBW',
      maxTemp: '870°C (Intermittent) / 925°C (Continuous)'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 12.0%',
      mo: '—',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Dairy, sanitary beverage, and pharmaceutical fluid loops',
      'Petrochemical refinery utility & cooling water headers',
      'Cryogenic liquefied gas (LNG / LOX) distribution lines',
      'Commercial condenser tubing and heat exchanger headers'
    ]
  },
  {
    id: 'ss-304-seamless',
    name: 'SS 304 Seamless Pipe',
    code: '304 SEAMLESS',
    badge: 'HIGH PRESSURE',
    uns: 'UNS S30400 Pierced & Drawn',
    din: '1.4301 Seamless (DIN 17458)',
    standards: 'ASTM A312 TP304 Seamless, ASME SA312, EN 10216-5',
    shortDesc: 'Heavy-wall seamless 304 pipe pierced from solid billets with zero longitudinal weld seams (E=1.0).',
    fullDesc: 'Manufactured through hot rotary piercing and precision cold pilgering from solid forged stainless billets. With no longitudinal or helical weld seams, this pipe offers a joint efficiency factor of E=1.0 per ASME B31.3 codes.',
    features: [
      'Zero longitudinal weld seams (Joint Efficiency Factor E = 1.0)',
      'Superior burst pressure rating and uniform hoop strength',
      'Hydrostatic proof tested up to 400+ Bar without deformation',
      'Tight concentricity and precision bore smoothness'
    ],
    specs: {
      sizeRange: '1/4" NB to 24" NB (Continuous Solid Wall)',
      schedules: 'SCH 10S, 40S, 80S, 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25) with plastic cap protection',
      testing: '100% Ultrasonic Examination (UT), Hydrostatic, PMI Spectro'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      mo: '—',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%',
      p: '≤ 0.040%',
      s: '≤ 0.015%'
    },
    applications: [
      'High-pressure boiler feedwater & steam delivery systems',
      'Hydraulic and pneumatic heavy machinery transmission',
      'High-pressure chemical reactor charging lines',
      'Nuclear research & thermal energy fluid systems'
    ]
  },
  {
    id: 'ss-310-310s',
    name: 'SS 310 / 310S Pipe',
    code: '310 / 310S REFRACTORY',
    badge: '1150°C RATED',
    uns: 'UNS S31000 / S31008',
    din: '1.4845 / 1.4841 (X8CrNi25-21)',
    standards: 'ASTM A312 TP310S, ASTM A358, ASME SA312, EN 10297-2',
    shortDesc: 'Refractory high-chromium (25%) and high-nickel (20%) pipe for continuous elevated service up to 1150°C.',
    fullDesc: 'Engineered specifically for high-temperature thermal processing operations. The heavy 25% chromium and 20% nickel alloy composition creates a tenacious, self-passivating chromia barrier that prevents oxidation up to 1150°C.',
    features: [
      'Continuous service oxidation resistance up to 1150°C in air',
      'Resistant to thermal fatigue, thermal shock, and cyclic spalling',
      'Superior performance in sulfur dioxide and moderately sulfidizing gases',
      'Maintains ductile toughness and creep rupture resistance at red-heat'
    ],
    specs: {
      sizeRange: '1/2" NB to 32" NB (Seamless & Fabricated Heavy-Wall)',
      schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
      ends: 'Beveled for High-Temp Welding',
      testing: 'Hot Tensile Verification, 100% PMI, Dye Penetrant, Radiography'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 40%',
      hardness: '≤ 95 HRB / 217 HBW',
      maxTemp: '1150°C Continuous'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '19.0 - 22.0%',
      mo: '≤ 0.75%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.50%',
      p: '≤ 0.045%',
      s: '≤ 0.030%'
    },
    applications: [
      'Industrial heat treatment furnaces, radiant tubes & retorts',
      'Petrochemical catalytic reformer tubes & flue gas conduits',
      'Fluidized bed coal combustors & thermal incinerator headers',
      'Cement kiln burner pipes & hot gas ducting networks'
    ]
  },
  {
    id: 'ss-316-316l-316h',
    name: 'SS 316 / 316L / 316H Pipe',
    code: '316 / 316L / 316H',
    badge: 'MOLY ENHANCED',
    uns: 'UNS S31600 / S31603 / S31609',
    din: '1.4401 / 1.4404 / 1.4919',
    standards: 'ASTM A312, ASTM A358, ASME SA312, NACE MR0175',
    shortDesc: 'Molybdenum-bearing (2-3%) austenitic pipe delivering exceptional pitting, crevice, and acid corrosion resistance.',
    fullDesc: 'Molybdenum-alloyed austenitic stainless steel pipe providing substantially enhanced pitting and crevice corrosion resistance in chloride-laden media, marine environments, and sulfuric acid streams.',
    features: [
      '2.0% - 3.0% Molybdenum addition elevates PREN to ~25',
      'Superior resistance to pitting, chlorides, and crevice corrosion',
      'NACE MR0175 compliant for sour gas and H2S operating lines',
      'Dual/Triple certification (316/316L/316H) available'
    ],
    specs: {
      sizeRange: '1/8" NB to 36" NB (Seamless, ERW & EFW)',
      schedules: 'SCH 5S to SCH XXS (ASME B36.19M Dimensions)',
      ends: 'Beveled Ends, Plain Ends, Threaded NPT',
      testing: '100% PMI, Hydrostatic, Eddy Current, Intergranular Corrosion'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB / 217 HBW',
      maxTemp: '870°C (Up to 900°C for 316H)'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030% (316L) / 0.04-0.10% (316H)',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Offshore oil & gas production platforms and topside piping',
      'Chemical processing reactors, columns, and acidic transfer lines',
      'Seawater reverse osmosis (RO) desalination manifolds',
      'Pharmaceutical sanitary CIP fluid transfer lines'
    ]
  },
  {
    id: 'ss-316-seamless',
    name: 'SS 316 Seamless Pipe',
    code: '316 SEAMLESS',
    badge: 'OFFSHORE GRADE',
    uns: 'UNS S31600 / S31603 Seamless',
    din: '1.4404 Seamless (EN 10216-5)',
    standards: 'ASTM A312 TP316/316L Seamless, ASME SA312, NACE MR0175',
    shortDesc: 'Solid extruded 316 seamless pipe providing maximum burst strength and sour gas resilience for subsea tie-ins.',
    fullDesc: 'Engineered for safety-critical high-pressure environments where longitudinal weld seams are unacceptable. Produced by rotary hot piercing and cold finishing.',
    features: [
      '100% Solid forged seamless cross section (No weld zones)',
      'Zero risk of weld seam preferential corrosion attack',
      'Tested to ASTM A262 Practice E for intergranular resistance',
      'Full NACE MR0175 / ISO 15156 sour service compliance'
    ],
    specs: {
      sizeRange: '1/4" NB to 24" NB (Heavy Wall Seamless)',
      schedules: 'SCH 40S, SCH 80S, SCH 160, SCH XXS',
      ends: 'Beveled Ends (37.5° with root face) protected with caps',
      testing: '100% Ultrasonic Flaw Detection (UT), Hydrostatic, PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '850°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.035%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Subsea wellhead injection manifolds & flowline jumpers',
      'High-pressure chemical dosing skids in offshore platforms',
      'Cryogenic LNG transfer piping and fuel delivery systems',
      'Severe acidic fluid headers in petrochemical crackers'
    ]
  },
  {
    id: 'ss-316ti',
    name: 'SS 316Ti Pipe',
    code: '316Ti STABILIZED',
    badge: 'TITANIUM STABILIZED',
    uns: 'UNS S31635',
    din: '1.4571 (X6CrNiMoTi17-12-2)',
    standards: 'ASTM A312 TP316Ti, ASME SA312, EN 10216-5, DIN 17458',
    shortDesc: 'Titanium-stabilized derivative of 316 providing enhanced resistance to sensitization in the 550°C - 800°C range.',
    fullDesc: 'Titanium-stabilized modification of 316 stainless steel. The addition of titanium (min 5x[C+N]) preferentially ties up carbon as inert titanium carbides, permanently preventing chromium depletion.',
    features: [
      'Titanium stabilization prevents intergranular sensitization',
      'Retains molybdenum pitting protection at elevated temperatures',
      'Higher elevated temperature yield strength than standard 316L',
      'Standardized specification across European engineering'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless & Welded)',
      schedules: 'SCH 10S to SCH 80S, SCH 160',
      ends: 'Beveled, Plain Square Cut',
      testing: '100% PMI, Hydrostatic, Microstructure Examination'
    },
    mechanical: {
      tensile: '≥ 500 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '16.5 - 18.5%',
      ni: '10.5 - 13.5%',
      mo: '2.00 - 2.50%',
      ti: '5x(C+N) to 0.70%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%'
    },
    applications: [
      'Flue gas desulfurization (FGD) scrubber piping',
      'Automotive and marine thermal exhaust recovery systems',
      'Synthetic fiber & polyester polymer manufacturing reactors',
      'High-temperature marine engine propulsion cooling lines'
    ]
  },
  {
    id: 'ss-317-317l',
    name: 'SS 317 / 317L Pipe',
    code: '317 / 317L HIGH MOLY',
    badge: '3-4% MOLY',
    uns: 'UNS S31700 / S31703',
    din: '1.4438 (X2CrNiMo18-15-4)',
    standards: 'ASTM A312 TP317/317L, ASTM A358, ASME SA312',
    shortDesc: 'Higher molybdenum (3.0-4.0%) formulation providing superior resistance to boiling sulfuric acid and chloride pitting.',
    fullDesc: 'High-molybdenum austenitic stainless pipe engineered specifically to resist severe corrosive chemicals that attack 316L. Delivers PREN ~29-31 for outstanding performance.',
    features: [
      'Elevated 3.0% - 4.0% Mo boosts PREN to ~30',
      'Immunity to pitting in condensing sulfurous acid flue gases',
      'Exceptional performance in paper pulp bleaching chemicals',
      'High tensile and stress rupture properties at moderate temperatures'
    ],
    specs: {
      sizeRange: '1/2" NB to 30" NB (Seamless & Heavy Wall EFW)',
      schedules: 'SCH 10S, SCH 40S, SCH 80S, SCH 160',
      ends: 'Beveled Ends, Plain Ends',
      testing: 'Pitting Corrosion Testing (ASTM G48), Hydrostatic, PMI'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '11.0 - 15.0%',
      mo: '3.00 - 4.00%',
      c: '≤ 0.030% (317L)',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Pulp & paper chlorination, chlorine dioxide bleaching lines',
      'Flue gas scrubber ducting and acid condensation piping',
      'Textile dyeing, chemical scouring and finishing machinery',
      'Phosphoric acid and specialized fertilizer synthesis lines'
    ]
  },
  {
    id: 'ss-321-321h',
    name: 'SS 321 / 321H Pipe',
    code: '321 / 321H CREEP',
    badge: '900°C RATED',
    uns: 'UNS S32100 / S32109',
    din: '1.4541 / 1.4878',
    standards: 'ASTM A312 TP321/321H, ASME SA312, IBR Form III-C Approved',
    shortDesc: 'Titanium-stabilized austenitic stainless pipe specifically formulated for severe elevated-temperature creep up to 900°C.',
    fullDesc: 'Stabilized with titanium to resist intergranular chromium carbide precipitation under long-term elevated thermal exposure. Grade 321H has controlled higher carbon (0.04-0.10%) to deliver high creep rupture endurance. Fully IBR approved.',
    features: [
      'Titanium stabilization prevents intergranular weld sensitization',
      'Outstanding creep rupture strength at temperatures above 500°C',
      'Immune to polythionic acid stress corrosion cracking (PTASCC)',
      'Certified under Indian Boiler Regulations (IBR Form III-C)'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB (Seamless & Fabricated)',
      schedules: 'SCH 10S to SCH XXS (1.65 mm to 60 mm Wall)',
      ends: 'Beveled for high-temperature welding (ASME B16.25)',
      testing: 'Hot Tensile Testing, 100% PMI, Hydrostatic, Ultrasonic'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '900°C'
    },
    chemistry: {
      cr: '17.0 - 19.0%',
      ni: '9.0 - 12.0%',
      ti: '5x(C+N) to 0.70%',
      c: '0.04 - 0.10% (321H)',
      mn: '≤ 2.00%'
    },
    applications: [
      'Supercritical steam boiler superheaters & reheater piping',
      'Petroleum refinery thermal cracking & hydrotreating transfer lines',
      'Aircraft exhaust manifolds, tailpipes, and heat collectors',
      'Chemical reactors operating continuously within 450°C-850°C'
    ]
  },
  {
    id: 'ss-347-347h',
    name: 'SS 347 / 347H Pipe',
    code: '347 / 347H NIOBIUM',
    badge: 'COLUMBIUM ALLOY',
    uns: 'UNS S34700 / S34709',
    din: '1.4550 (X6CrNiNb18-10)',
    standards: 'ASTM A312 TP347/347H, ASME SA312, AMS 5575',
    shortDesc: 'Niobium/Columbium stabilized alloy pipe preventing carbide precipitation during severe cyclic thermal operations in refinery cracking.',
    fullDesc: 'Austenitic stainless steel pipe stabilized through columbium (niobium) and tantalum additions. The niobium addition forms stable niobium carbides, completely preventing chromium depletion.',
    features: [
      'Niobium/Columbium stabilization eliminates intercrystalline decay',
      'Enhanced creep and stress rupture properties up to 870°C',
      'Immune to sensitizing polythionic acid cracking in sour refineries',
      'Preferred alloy for critical nuclear primary coolant circuits'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB',
      schedules: 'SCH 10S, 40S, 80S, 160, SCH XXS',
      ends: 'Beveled Ends (37.5° Angle), Plain Ends',
      testing: '100% PMI, Intergranular Corrosion Test (ASTM A262 Prac. E)'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 92 HRB',
      maxTemp: '870°C'
    },
    chemistry: {
      cr: '17.0 - 19.0%',
      ni: '9.0 - 13.0%',
      nb: '10xC to 1.00%',
      c: '0.04 - 0.10% (347H)',
      mn: '≤ 2.00%'
    },
    applications: [
      'Refinery fluid catalytic cracking (FCC) transfer lines',
      'Radiant superheaters and boiler steam reheater headers',
      'Nuclear power reactor coolant lines and heat exchangers',
      'Severe thermal cycling aerospace and gas turbine conduits'
    ]
  },
  {
    id: 'ss-410',
    name: 'SS 410 Pipe',
    code: '410 MARTENSITIC',
    badge: 'HEAT TREATABLE',
    uns: 'UNS S41000',
    din: '1.4006 (AISI 410)',
    standards: 'ASTM A268 TP410, ASTM A312 Special, ASME SA268',
    shortDesc: 'Martensitic 12% chromium pipe heat-treatable to high mechanical strength, erosion resistance, and wear tolerance.',
    fullDesc: 'Basic 12% chromium martensitic stainless steel pipe. Unlike austenitic grades, Grade 410 is magnetic and can be heat treated (quenched and tempered) to achieve high tensile strength and hardness.',
    features: [
      'Heat-treatable martensitic structure achieving high hardness',
      'High erosion, cavitation, and abrasive wear resistance',
      'Good resistance to dry atmosphere, steam, and mild chemicals',
      'NACE MR0175 compliant hardness control (max 22 HRC)'
    ],
    specs: {
      sizeRange: '1/2" NB to 16" NB (Seamless Heavy Wall)',
      schedules: 'SCH 40, SCH 80, SCH 160',
      ends: 'Plain Cut, Beveled, Threaded',
      testing: 'Hardness Testing (HRC/HBW), Hydrostatic, Ultrasonic'
    },
    mechanical: {
      tensile: '≥ 485 MPa (Annealed) / up to 850 MPa (Q&T)',
      yield: '≥ 275 MPa (Annealed) / up to 650 MPa (Q&T)',
      elongation: '≥ 20%',
      hardness: '≤ 22 HRC (NACE) / Up to 45 HRC (Hardened)',
      maxTemp: '650°C'
    },
    chemistry: {
      cr: '11.5 - 13.5%',
      c: '0.08 - 0.15%',
      mn: '≤ 1.00%',
      si: '≤ 1.00%',
      ni: '≤ 0.75%'
    },
    applications: [
      'Petroleum fractionation columns and steam valve internals',
      'Mining abrasive slurry pipelines and hydrocyclone headers',
      'High-pressure hydraulic turbine sleeve and guide piping',
      'Wear-resistant steam turbine bleed and drain lines'
    ]
  },
  {
    id: 'ss-446',
    name: 'SS 446 Pipe',
    code: '446 FERRITIC',
    badge: 'SULFIDATION RESISTANT',
    uns: 'UNS S44600',
    din: '1.4762 (AISI 446)',
    standards: 'ASTM A268 TP446, ASME SA268',
    shortDesc: 'High-chromium non-hardenable ferritic heat-resistant pipe with outstanding resistance to high-temperature sulfidation up to 1100°C.',
    fullDesc: 'High-chromium (25%) non-hardenable ferritic heat-resistant alloy pipe. Because it contains virtually no nickel, it is immune to catastrophic nickel-sulfide eutectic corrosion.',
    features: [
      'Unsurpassed resistance to sulfur gases and sulfidation at 1000°C+',
      'Immune to catastrophic nickel embrittlement in reducing gases',
      'Resistant to molten copper, lead, and brass contact',
      'High thermal conductivity with low coefficient of thermal expansion'
    ],
    specs: {
      sizeRange: '1/2" NB to 12" NB (Seamless & Welded)',
      schedules: 'SCH 40S, SCH 80S, SCH 160',
      ends: 'Plain Cut, Beveled',
      testing: '100% PMI, High-Temp Oxidation Testing, Hydrostatic'
    },
    mechanical: {
      tensile: '≥ 485 MPa',
      yield: '≥ 275 MPa',
      elongation: '≥ 20%',
      hardness: '≤ 95 HRB / 217 HBW',
      maxTemp: '1100°C in Air'
    },
    chemistry: {
      cr: '23.0 - 27.0%',
      n: '0.12 - 0.25%',
      c: '≤ 0.20%',
      mn: '≤ 1.50%',
      si: '≤ 1.00%'
    },
    applications: [
      'Copper, lead, and brass smelting furnace recuperator tubes',
      'Soot blower pipes and glass furnace molten bubble conduits',
      'Industrial combustion chambers and gas burner nozzles',
      'Thermocouple protection tubes in sulfurous roasting kilns'
    ]
  },
  {
    id: 'ss-904l',
    name: 'SS 904L Pipe',
    code: '904L SUPER AUSTENITIC',
    badge: 'ACID IMMUNE (PREN ≥ 35)',
    uns: 'UNS N08904',
    din: '1.4539 (X1NiCrMoCu25-20-5)',
    standards: 'ASTM A312 TP904L, ASTM B677, ASME SA312 / SB677',
    shortDesc: 'Fully austenitic super-stainless pipe enriched with 25% nickel, 4.5% molybdenum, and 1.5% copper for supreme sulfuric acid resistance.',
    fullDesc: 'High-alloy super-austenitic stainless steel pipe featuring 25% nickel, 4.5% molybdenum, and 1.5% copper. The copper addition imparts supreme corrosion resistance to warm dilute and concentrated sulfuric acid.',
    features: [
      'Copper addition imparts remarkable immunity to sulfuric acid',
      'PREN ≥ 35 eliminates localized pitting & crevice corrosion',
      'High 25% Nickel prevents chloride stress corrosion cracking (SCC)',
      'Fully austenitic stable structure with exceptional ductility'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless & EFW)',
      schedules: 'SCH 10S, SCH 40S, SCH 80S',
      ends: 'Beveled Ends, Plain Ends',
      testing: 'ASTM G48 Ferric Chloride Pitting Test, 100% PMI, UT, Hydro'
    },
    mechanical: {
      tensile: '≥ 490 MPa',
      yield: '≥ 220 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 90 HRB',
      maxTemp: '450°C in Severe Acid'
    },
    chemistry: {
      cr: '19.0 - 23.0%',
      ni: '23.0 - 28.0%',
      mo: '4.00 - 5.00%',
      cu: '1.00 - 2.00%',
      c: '≤ 0.020%'
    },
    applications: [
      'Sulfuric, phosphoric, and acetic acid manufacturing plants',
      'High-salinity seawater desalination & reverse osmosis headers',
      'Sour gas offshore exploration pipelines and scrubbers',
      'Bleaching plants in pulp & paper processing mills'
    ]
  },
  {
    id: 'ss-square-pipe',
    name: 'SS Square Pipe',
    code: 'SQUARE / SHS SECTION',
    badge: 'STRUCTURAL BOX',
    uns: 'Available in 304, 304L, 316, 316L & 201',
    din: 'DIN 2395 / EN 10296-2',
    standards: 'ASTM A554 (Welded Mechanical Tubing), EN 10296-2',
    shortDesc: 'Precision roll-formed square and rectangular hollow box sections with crisp 90° corner radii and structural stiffness.',
    fullDesc: 'Continuous high-frequency roll-formed and induction welded square hollow sections (SHS). Features precision square geometry with sharp, uniform 90° corner radii, high torsional rigidity, and superior surface finish.',
    features: [
      'High torsional rigidity and high moment of inertia for structures',
      'Crisp 90° corners with uniform corner radius wall distribution',
      'Multiple finish options: Mill Pickled, Satin, Hairline, Super Mirror',
      'Custom cut-to-length and precision mitered end processing'
    ],
    specs: {
      sizeRange: '12 x 12 mm to 300 x 300 mm (Square Hollow Sections)',
      schedules: 'Wall Thickness: 1.0 mm to 12.0 mm',
      ends: 'Square Deburred Cut, Laser Chamfered Ends',
      testing: 'Weld Seam Eddy Current, Dimensional & Corner Radius Verification'
    },
    mechanical: {
      tensile: '≥ 515 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 90 HRB',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 0.75%'
    },
    applications: [
      'Architectural facade framing and structural curtain walls',
      'Industrial machinery frames, chassis, and conveyor skids',
      'Sanitary cleanroom structural columns and platform trusses',
      'Marine balustrades, deck safety railings, and designer hardware'
    ]
  }
];

export const CARBON_STEEL_GRADES = [
  {
    id: 'carbon-steel-pipe',
    slug: 'carbon-steel-pipe',
    aliases: ['cs-pipe', 'carbon-steel-pipes', 'standard-carbon-pipe'],
    name: 'Carbon Steel Pipe',
    specification: 'ASTM A106 / ASTM A53 / ASME B36.10M',
    grade: 'Commercial / Standard Industrial',
    code: 'STANDARD CARBON STEEL',
    badge: 'GENERAL INDUSTRIAL',
    uns: 'UNS K03006 Series',
    din: '1.0405 / EN 10216-1',
    productForm: 'Seamless & Welded Nominal Pipe',
    standards: 'ASTM A106, ASTM A53, API 5L, ASME B36.10M',
    shortDesc: 'General utility and process carbon steel piping engineered for reliable pressure containment and structural endurance.',
    fullDesc: 'Multipurpose carbon steel nominal pipe manufactured in seamless and electric-resistance welded (ERW) execution. Formulated with balanced carbon-manganese metallurgy to provide dependable structural strength, excellent field weldability, and hydrostatic integrity across industrial utility services.',
    features: [
      'Balanced carbon-manganese alloy ensuring smooth weldability & fabrication',
      'Conforms to standard ASME B36.10M dimensional and schedule tolerances',
      'Mill hydrostatic proof testing up to design allowable working pressures',
      'Supplied with EN 10204 3.1 mill test certification and full heat traceability'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB (Seamless up to 24", Welded up to 48")',
      schedules: 'SCH 10, SCH 20, SCH 40/STD, SCH 80/XS, SCH 160, SCH XXS',
      ends: 'Plain End (PE), Beveled End (BE 37.5° ASME B16.25), Threaded NPT',
      testing: '100% PMI Spectro, Hydrostatic, Flattening, Visual & Dimensional'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 187 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '≤ 1.20%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '≥ 0.10%'
    },
    applications: [
      'Plant cooling water and compressed air utility piping',
      'Low-to-medium pressure non-sour hydrocarbon transfer lines',
      'Civil plumbing, fire protection headers, and drainage loops',
      'General mechanical and structural tubular assemblies'
    ]
  },
  {
    id: 'astm-a53-grade-b',
    slug: 'astm-a53-grade-b',
    aliases: ['a53-b', 'a53-grade-b', 'astm-a53-b'],
    name: 'ASTM A53 Grade B Pipe',
    specification: 'ASTM A53/A53M / ASME SA53',
    grade: 'Grade B',
    code: 'A53 GR. B (ERW / SEAMLESS)',
    badge: 'PRESSURE & STRUCTURAL',
    uns: 'UNS K03005',
    din: '1.0345 / DIN 2448',
    productForm: 'Seamless (Type S) or Welded (Type E)',
    standards: 'ASTM A53/A53M Grade B, ASME SA53, ASME B36.10M',
    shortDesc: 'Dual-purpose seamless and ERW carbon steel pipe for conveyance of water, steam, gas, and structural applications.',
    fullDesc: 'Nominal carbon steel pipe intended for mechanical and pressure applications, and also acceptable for ordinary uses in steam, water, gas, and air lines. Available in Type S (Seamless) and Type E (Electric-Resistance Welded) in Grade B, suitable for field welding, bending, flanging, and coiling.',
    features: [
      'Dual approved for fluid pressure conveyance and structural applications',
      'Available in black un-coated and hot-dipped galvanized protective finishes',
      'Type E high-frequency welded seams inspected by calibrated ultrasonic/eddy current',
      'Strict compliance with ASME B31.1, B31.3, and B31.9 piping code rules'
    ],
    specs: {
      sizeRange: '1/8" NB to 26" NB (Type S & Type E)',
      schedules: 'SCH 10, SCH 40 (STD), SCH 80 (XS), SCH 160',
      ends: 'Plain Square Cut, Beveled Ends (ASME B16.25), Threaded & Coupled',
      testing: 'NDT Electric/Eddy Current on weld seams, Hydrostatic, Flattening, Bend test'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 180 HBW',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '≤ 1.20%',
      p: '≤ 0.050%',
      s: '≤ 0.045%',
      cu: '≤ 0.40%',
      ni: '≤ 0.40%',
      cr: '≤ 0.40%',
      mo: '≤ 0.15%',
      v: '≤ 0.08%'
    },
    applications: [
      'Industrial steam, compressed air, and water distribution lines',
      'Building services HVAC hot and chilled water closed loops',
      'Underground municipal gas distribution headers',
      'Structural columns, bollards, and framework conduits'
    ]
  },
  {
    id: 'astm-a106-grade-b',
    slug: 'astm-a106-grade-b',
    aliases: ['a106-b', 'a106-grade-b', 'astm-a106-b'],
    name: 'ASTM A106 Grade B Pipe',
    specification: 'ASTM A106/A106M / ASME SA106',
    grade: 'Grade B',
    code: 'A106 GR. B SEAMLESS',
    badge: 'HIGH TEMPERATURE',
    uns: 'UNS K03006',
    din: '1.0405 / St 45.8',
    productForm: 'Seamless High-Temperature Pipe',
    standards: 'ASTM A106/A106M Grade B, ASME SA106, IBR Form III-C',
    shortDesc: 'Seamless carbon pipe engineered specifically for continuous high-temperature service in refineries and power plants.',
    fullDesc: 'Seamless carbon steel nominal pipe manufactured from fully killed steel for high-temperature service up to 425°C. Extensively specified across fossil fuel power plants, industrial boilers, petrochemical processing, and refinery process steam systems. Suitable for hot bending, flanging, and fusion welding.',
    features: [
      '100% Solid pierced seamless wall with joint efficiency factor E = 1.0',
      'Controlled carbon equivalent ensuring dependable field and shop weldability',
      'Certified under Indian Boiler Regulations (IBR Form III-C) for steam boilers',
      'Hydrostatic proof tested up to 2500 psi or ultrasonic non-destructive tested'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB (Continuous Seamless Wall)',
      schedules: 'SCH 20, SCH 40, SCH 80, SCH 120, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25 37.5°), Plain Square Cut',
      testing: '100% Ultrasonic / Eddy Current, Tensile, Flattening, Bend test'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 187 HBW',
      maxTemp: '425°C (Continuous per ASME B31.3)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.29 - 1.06%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '≥ 0.10%',
      cr: '≤ 0.40%',
      cu: '≤ 0.40%',
      mo: '≤ 0.15%',
      ni: '≤ 0.40%',
      v: '≤ 0.08%'
    },
    applications: [
      'High-pressure steam mains and superheated boiler feedwater piping',
      'Petrochemical refinery distillation columns and hydrocarbon loops',
      'Gas compressor stations and high-pressure manifold piping',
      'Industrial power generation boiler tubes and steam headers'
    ]
  },
  {
    id: 'astm-a106-grade-c',
    slug: 'astm-a106-grade-c',
    aliases: ['a106-c', 'a106-grade-c', 'astm-a106-c'],
    name: 'ASTM A106 Grade C Pipe',
    specification: 'ASTM A106/A106M / ASME SA106',
    grade: 'Grade C',
    code: 'A106 GR. C HIGH STRENGTH',
    badge: 'HIGH PRESSURE STEAM',
    uns: 'UNS K03501',
    din: '1.0409 / St 52.4',
    productForm: 'Seamless High-Strength High-Temp Pipe',
    standards: 'ASTM A106/A106M Grade C, ASME SA106, ASME B36.10M',
    shortDesc: 'Higher-tensile (485 MPa) seamless carbon steel pipe formulated for heavy-wall high-pressure boiler piping.',
    fullDesc: 'Seamless carbon steel pipe formulated with higher carbon (max 0.35%) and manganese to achieve an elevated minimum tensile strength of 485 MPa (70 ksi) and yield strength of 275 MPa (40 ksi). Designed for severe high-pressure service allowing reduced wall thickness under ASME boiler design stress codes.',
    features: [
      'Elevated mechanical strength: 485 MPa minimum tensile / 275 MPa minimum yield',
      'Allows higher allowable design stresses in ASME Section I & Section VIII codes',
      'Hot finished or cold drawn from fully killed steel with uniform fine grain',
      'High resistance to burst pressure in heavy-wall steam delivery headers'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Heavy Wall Seamless)',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% Ultrasonic examination, Hydrostatic test, Flattening test'
    },
    mechanical: {
      tensile: '≥ 485 MPa (70,000 psi)',
      yield: '≥ 275 MPa (40,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 200 HBW',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.35%',
      mn: '0.29 - 1.06%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '≥ 0.10%',
      cr: '≤ 0.40%',
      cu: '≤ 0.40%',
      mo: '≤ 0.15%',
      ni: '≤ 0.40%',
      v: '≤ 0.08%'
    },
    applications: [
      'Critical high-pressure boiler steam lines and downcomers',
      'High-temperature refinery catalytic cracking units',
      'Heavy-wall hydraulic pressure accumulators and headers',
      'Thermal power generation supercritical steam manifolds'
    ]
  },
  {
    id: 'astm-a53-galvanized',
    slug: 'astm-a53-galvanized',
    aliases: ['a53-galvanized', 'galvanized-pipe', 'a53-gi'],
    name: 'ASTM A53 Galvanized Pipe',
    specification: 'ASTM A53/A53M / ASTM A123',
    grade: 'Grade B (Galvanized)',
    code: 'A53 HOT-DIP GALVANIZED',
    badge: 'ZINC PROTECTED',
    uns: 'UNS K03005 (Galvanized)',
    din: '1.0345 / DIN 2444',
    productForm: 'Hot-Dipped Zinc-Coated Welded & Seamless Pipe',
    standards: 'ASTM A53/A53M, ASTM A123, ASTM A90',
    shortDesc: 'Hot-dip galvanized carbon pipe with a metallurgical zinc barrier for superior atmospheric and water corrosion resistance.',
    fullDesc: 'ASTM A53 Grade B pipe hot-dip galvanized inside and outside by immersion in molten zinc. The resulting multi-layer zinc-iron metallurgical bond creates a durable barrier preventing rust in outdoor, underground, coastal, and non-acidic aqueous environments.',
    features: [
      'Minimum average zinc coating weight ≥ 1.8 oz/ft² (≥ 550 g/m², ≈ 78 μm)',
      'Dual internal and external protective barrier against moisture and air oxidation',
      'Self-healing galvanic sacrificial protection for minor scratches and cuts',
      'Available with threaded ends and galvanized merchant couplings per ASTM A865'
    ],
    specs: {
      sizeRange: '1/2" NB to 16" NB',
      schedules: 'SCH 40 (STD), SCH 80 (XS)',
      ends: 'Threaded & Coupled (NPT ASME B1.20.1), Plain Cut, Grooved',
      testing: 'Zinc coating weight test (Preece / Gravimetric ASTM A90), Hydrostatic, Flattening'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      hardness: '≤ 180 HBW',
      maxTemp: '200°C (Zinc barrier limit)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '≤ 1.20%',
      p: '≤ 0.050%',
      s: '≤ 0.045%',
      zn: '≥ 98.5% (Zinc Bath Purity)'
    },
    applications: [
      'Fire sprinkler distribution lines and deluge networks',
      'Outdoor potable water conveyance and municipal mains',
      'Chilled water HVAC and industrial cooling systems',
      'Agricultural irrigation headers and architectural handrail framing'
    ]
  },
  {
    id: 'astm-a192-boiler-tubes',
    slug: 'astm-a192-boiler-tubes',
    aliases: ['a192-boiler', 'a192', 'astm-a192', 'a192-boiler-tubes'],
    name: 'ASTM A192 Boiler Tubes',
    specification: 'ASTM A192/A192M / ASME SA192',
    grade: 'Single Specification Grade',
    code: 'A192 SEAMLESS BOILER',
    badge: 'HIGH PRESSURE BOILER',
    uns: 'UNS K01201',
    din: '1.0305 / St 35.8',
    productForm: 'Seamless Carbon Steel Boiler & Superheater Tubes',
    standards: 'ASTM A192/A192M, ASME SA192, ASME Sec I',
    shortDesc: 'Seamless low-carbon steel tubes for high-pressure water tube boilers, superheaters, and economizer coils.',
    fullDesc: 'Seamless low-carbon steel boiler and superheater tubes engineered for high-pressure service. Produced by hot finishing or cold drawing with controlled heat treatment (normalized or subcritical annealed), ensuring high ductility for flaring, expanding into tube sheets, and tight U-bending.',
    features: [
      'Controlled low carbon chemistry (0.06 - 0.18%) ensuring maximum ductility for tight bends',
      'Maximum specified hardness 77 HRB (Cold finished) / 137 HBW (Hot finished)',
      '100% Non-destructive electrical test or proof hydrostatic testing per ASTM A450',
      'High thermal conductivity and resistance to thermal shock in steam generation'
    ],
    specs: {
      sizeRange: '1/2" to 7" Outside Diameter (12.7 mm to 177.8 mm OD)',
      schedules: 'Minimum wall thickness: 2.2 mm to 25.4 mm (BWG 14 to BWG 3)',
      ends: 'Square Cut Plain Ends, Chamfered for Tube Sheet Expansion',
      testing: 'Hardness test, Flattening, Flaring, Flange test, Hydrostatic / Eddy Current'
    },
    mechanical: {
      tensile: '≥ 325 MPa (47,000 psi)',
      yield: '≥ 180 MPa (26,000 psi)',
      elongation: '≥ 35% in 2"',
      hardness: '≤ 77 HRB / 137 HBW (ASTM Max)',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '0.06 - 0.18%',
      mn: '0.27 - 0.63%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '≤ 0.25%'
    },
    applications: [
      'Water-tube power boilers and package steam boilers',
      'Boiler economizers and steam superheater elements',
      'Air preheaters and thermal waste-heat recovery units',
      'High-pressure boiler blowdown and feedwater coils'
    ]
  },
  {
    id: 'astm-a179-tube',
    slug: 'astm-a179-tube',
    aliases: ['a179-tube', 'a179', 'astm-a179'],
    name: 'ASTM A179 Tube',
    specification: 'ASTM A179/A179M / ASME SA179',
    grade: 'Single Specification Grade',
    code: 'A179 COLD-DRAWN TUBE',
    badge: 'HEAT EXCHANGER',
    uns: 'UNS K01200',
    din: '1.0305 / St 35.8 (Cold Drawn)',
    productForm: 'Seamless Cold-Drawn Heat Exchanger & Condenser Tubes',
    standards: 'ASTM A179/A179M, ASME SA179, TEMA Standards',
    shortDesc: 'Precision seamless cold-drawn tubes with strict 72 HRB max hardness for shell-and-tube heat exchangers and condensers.',
    fullDesc: 'Seamless cold-drawn low-carbon steel heat exchanger and condenser tubes. Subjected to subcritical annealing or normalized heat treatment after final cold draw, achieving tight dimensional tolerances, smooth interior bore, and exceptional ductility for rolling and expanding into tube sheets.',
    features: [
      'Strict maximum hardness limit of 72 HRB (125 HBW) ensuring smooth tube-sheet expansion',
      'Smooth cold-drawn bore surface minimizing fluid fouling and friction loss',
      'High thermal transfer efficiency in shell-and-tube industrial exchangers',
      'Fully tested by reverse flattening, flaring, flange, and eddy current methods'
    ],
    specs: {
      sizeRange: '1/8" to 3" Outside Diameter (3.2 mm to 76.2 mm OD)',
      schedules: 'Wall thickness: 0.9 mm to 9.5 mm (BWG 20 to BWG 8)',
      ends: 'Plain Square Cut Deburred, Chamfered Ends, U-Bent Bundles',
      testing: 'Hardness test on each lot, Flaring, Flange, Reverse Flattening, 100% NDT / Hydro'
    },
    mechanical: {
      tensile: '≥ 325 MPa (47,000 psi)',
      yield: '≥ 180 MPa (26,000 psi)',
      elongation: '≥ 35% in 2"',
      hardness: '≤ 72 HRB / 125 HBW (ASTM Max)',
      maxTemp: '400°C'
    },
    chemistry: {
      c: '0.06 - 0.18%',
      mn: '0.27 - 0.63%',
      p: '≤ 0.035%',
      s: '≤ 0.035%'
    },
    applications: [
      'Shell and tube heat exchangers and tubular condensers',
      'Petrochemical and oil refinery cooling bundles',
      'Industrial refrigeration evaporators and gas coolers',
      'Fertilizer and chemical processing jacketed coolers'
    ]
  },
  {
    id: 'astm-a252-pipe',
    slug: 'astm-a252-pipe',
    aliases: ['a252-pipe', 'a252', 'astm-a252', 'a252-piling'],
    name: 'ASTM A252 Pipe',
    specification: 'ASTM A252/A252M',
    grade: 'Grade 3 (Piling Quality)',
    code: 'A252 STRUCTURAL PILING',
    badge: 'FOUNDATION PILING',
    uns: 'Structural Pipe Piling',
    din: 'EN 10219-1 / DIN 17120',
    productForm: 'Welded and Seamless Cylindrical Steel Pipe Piles',
    standards: 'ASTM A252/A252M Grade 3 & Grade 2, AWS D1.1',
    shortDesc: 'Heavy-duty cylindrical pipe piles for deep foundation piling, marine piers, bridges, and structural caissons.',
    fullDesc: 'Welded and seamless steel pipe intended for use as structural cylindrical piles where the steel cylinder acts as a permanent load-carrying member, or as a shell to form cast-in-place concrete piles. Governed by minimum tensile and yield strength with controlled phosphorus for on-site weldability.',
    features: [
      'High compression and bending load resistance for deep geotechnical foundations',
      'Manufactured in seamless, ERW, longitudinal submerged arc (LSAW), or helical (SSAW)',
      'Controlled phosphorus (≤ 0.050%) ensuring reliable field splice welding per AWS D1.1',
      'Available with conical drive points, weld shoes, and internal reinforcement rings'
    ],
    specs: {
      sizeRange: '6" to 120" Outside Diameter (OD)',
      schedules: 'Wall thickness: 4.8 mm to 50 mm (0.188" to 2.0")',
      ends: 'Plain Square Cut or Beveled for Field Splicing (ASME B16.25 / AWS)',
      testing: 'Body & Weld Tensile, Straightness verification, Weight tolerance verification'
    },
    mechanical: {
      tensile: '≥ 455 MPa (66,000 psi for Gr. 3)',
      yield: '≥ 310 MPa (45,000 psi for Gr. 3)',
      elongation: '≥ 20% in 2"',
      hardness: '≤ 190 HBW',
      maxTemp: 'Ambient / Geotechnical'
    },
    chemistry: {
      p: '≤ 0.050% (Standard Limit)',
      c: '≤ 0.28% (Typical Practice)',
      mn: '≤ 1.20% (Typical Practice)',
      s: '≤ 0.045% (Typical Practice)'
    },
    applications: [
      'Deep foundation piles for bridges, highway overpasses, and viaducts',
      'Marine harbor wharves, jetties, offshore loading terminals, and docks',
      'Heavy industrial plant foundation caissons and retaining walls',
      'Building foundation micropiles and driven load-bearing columns'
    ]
  },
  {
    id: 'astm-a333-grade-1',
    slug: 'astm-a333-grade-1',
    aliases: ['a333-1', 'a333-grade-1', 'astm-a333-1'],
    name: 'ASTM A333 Grade 1 Pipe',
    specification: 'ASTM A333/A333M / ASME SA333',
    grade: 'Grade 1',
    code: 'A333 GR. 1 LOW-TEMP',
    badge: '-45°C CHARPY IMPACT',
    uns: 'UNS K03008',
    din: '1.0456 / TT St 35 N',
    productForm: 'Seamless & Welded Low-Temperature Pipe',
    standards: 'ASTM A333/A333M Grade 1, ASME SA333, ASME B31.3',
    shortDesc: 'Low-temperature carbon steel pipe impact-tested to guarantee ductile fracture toughness at -45°C.',
    fullDesc: 'Seamless and welded carbon steel pipe intended for sub-zero temperature service. Produced from killed steel and heat treated by normalizing or quenching and tempering. Each production lot is subject to mandatory Charpy V-notch impact testing at -45°C (-50°F) to prevent catastrophic low-temperature brittle failure.',
    features: [
      'Verified minimum Charpy V-notch impact energy absorption of 18 J at -45°C',
      'Fine-grained killed steel practice preventing ductile-to-brittle transition',
      'Heat treated by normalizing or quench & temper for uniform grain microstructure',
      'Compatible with low-temperature ASTM A420 WPL6 fittings and A350 LF2 flanges'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless & Welded)',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25 37.5°)',
      testing: 'Charpy V-notch Impact at -45°C, Hydrostatic proof, Ultrasonic examination'
    },
    mechanical: {
      tensile: '≥ 380 MPa (55,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 35% in 2"',
      impact: '≥ 18 J (13 ft·lbf) at -45°C',
      hardness: '≤ 180 HBW',
      maxTemp: '350°C (Down to -45°C)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.40 - 1.06%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '≥ 0.10%'
    },
    applications: [
      'Low-temperature hydrocarbon and refrigeration gas processing',
      'Industrial chilled ammonia and ethylene glycol piping',
      'Sub-zero chemical storage and vapor transfer manifolds',
      'Cold climate oil and gas gathering lines'
    ]
  },
  {
    id: 'astm-a333-grade-3',
    slug: 'astm-a333-grade-3',
    aliases: ['a333-3', 'a333-grade-3', 'astm-a333-3'],
    name: 'ASTM A333 Grade 3 Pipe',
    specification: 'ASTM A333/A333M / ASME SA333',
    grade: 'Grade 3 (3.5% Nickel Low-Temp)',
    code: 'A333 GR. 3 (-100°C NICKEL)',
    badge: '-100°C CRYOGENIC',
    uns: 'UNS K31918',
    din: '1.5637 / 10Ni14',
    productForm: 'Seamless & Welded 3.5% Nickel Alloy Steel Pipe',
    standards: 'ASTM A333/A333M Grade 3, ASME SA333, ASME B31.3',
    shortDesc: '3.5% Nickel alloyed seamless pipe impact-tested down to -100°C for cryogenic and liquefied gas systems.',
    fullDesc: 'Low-alloy steel pipe enriched with 3.18% to 3.82% Nickel (nominal 3.5% Ni). The nickel addition dramatically depresses the ductile-to-brittle transition temperature, providing verified Charpy V-notch impact toughness at severe low temperatures down to -100°C (-150°F). Heat treated by double normalizing and tempering.',
    features: [
      '3.5% Nickel alloy composition preventing brittle cleavage down to -100°C',
      'Mandatory Charpy V-notch impact energy verification at -100°C (18 J minimum)',
      'Double normalized and tempered or quenched and tempered microstructure',
      'Essential material for liquefied ethylene, ethane, and sub-zero gas loops'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless & Welded)',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends for Cryogenic Welding',
      testing: 'Charpy V-notch at -100°C, 100% Ultrasonic Testing, Hydrostatic proof'
    },
    mechanical: {
      tensile: '≥ 450 MPa (65,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      impact: '≥ 18 J (13 ft·lbf) at -100°C',
      hardness: '≤ 195 HBW',
      maxTemp: '300°C (Down to -100°C)'
    },
    chemistry: {
      c: '≤ 0.19%',
      mn: '0.31 - 0.64%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '0.18 - 0.37%',
      ni: '3.18 - 3.82%'
    },
    applications: [
      'Liquefied ethylene (-104°C) transport and storage systems',
      'Cryogenic liquid ethane and methane separation units',
      'Polar and Arctic extreme environment process headers',
      'Air separation units and deep refrigeration cold boxes'
    ]
  },
  {
    id: 'astm-a333-grade-6',
    slug: 'astm-a333-grade-6',
    aliases: ['a333-6', 'a333-grade-6', 'astm-a333-6'],
    name: 'ASTM A333 Grade 6 Pipe',
    specification: 'ASTM A333/A333M / ASME SA333',
    grade: 'Grade 6',
    code: 'A333 GR. 6 FINE GRAIN',
    badge: '-45°C LOW TEMP',
    uns: 'UNS K03022',
    din: '1.0456 / TT St 45 N',
    productForm: 'Seamless & Welded Fine-Grain Low-Temperature Pipe',
    standards: 'ASTM A333/A333M Grade 6, ASME SA333, NACE MR0175',
    shortDesc: 'Globally preferred low-temperature pipe impact-tested at -45°C for LPG, cryogenic, and offshore Arctic piping.',
    fullDesc: 'Seamless and welded carbon steel pipe intended for sub-zero temperature service. Specifically produced with fully killed fine-grain practice and normalized heat treatment, providing guaranteed Charpy V-notch impact toughness at -45°C (-50°F). The industry standard pipe for cold service across oil, gas, and chemical refining.',
    features: [
      'Most widely specified low-temperature piping grade across international energy projects',
      'Mandatory Charpy V-notch impact energy absorption minimum 18 J at -45°C',
      'Fully killed, fine austenitic grain practice with micro-alloy aluminum addition',
      'NACE MR0175 / ISO 15156 compliant for sour gas low-temperature service'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless up to 24", Welded up to 36")',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends (ASME B16.25 37.5° with root face)',
      testing: 'Charpy V-Notch at -45°C, 100% Ultrasonic examination, Hydrostatic test'
    },
    mechanical: {
      tensile: '≥ 415 MPa (60,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 30% in 2"',
      impact: '≥ 18 J (13 ft·lbf) at -45°C',
      hardness: '≤ 187 HBW',
      maxTemp: '350°C (Down to -45°C)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.29 - 1.06%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '≥ 0.10%'
    },
    applications: [
      'Liquefied petroleum gas (LPG) and liquid propane process loops',
      'Offshore Arctic platform topsides and subsea tie-ins',
      'Natural gas refrigeration dew-point control units',
      'Low-temperature refinery flare headers and chemical storage lines'
    ]
  },
  {
    id: 'astm-a334-grade-1',
    slug: 'astm-a334-grade-1',
    aliases: ['a334-1', 'a334-grade-1', 'astm-a334-1'],
    name: 'ASTM A334 Grade 1 Tube',
    specification: 'ASTM A334/A334M / ASME SA334',
    grade: 'Grade 1',
    code: 'A334 GR. 1 TUBING',
    badge: 'LOW-TEMP HEAT EXCHANGER',
    uns: 'UNS K03008',
    din: '1.0456 / TT St 35 N',
    productForm: 'Seamless & Welded Low-Temperature Tubes',
    standards: 'ASTM A334/A334M Grade 1, ASME SA334, TEMA',
    shortDesc: 'Low-temperature seamless and welded tubes with mandatory -45°C impact testing for sub-zero heat exchangers.',
    fullDesc: 'Seamless and welded carbon steel tubes intended for low-temperature service down to -45°C. Manufactured in hot-finished or cold-drawn condition with normalized heat treatment. Designed specifically for tubular heat exchangers, condensers, and chillers handling cold fluid media.',
    features: [
      'Verified Charpy V-notch impact energy at -45°C (18 J minimum average)',
      'Strict maximum hardness limit of 85 HRB (160 HBW) for tube rolling and expansion',
      'Flaring, flattening, and reverse flattening verified per ASTM A450',
      'High dimensional precision for tight tube-sheet hole clearances'
    ],
    specs: {
      sizeRange: '1/2" to 3" Outside Diameter (12.7 mm to 76.2 mm OD)',
      schedules: 'Wall thickness: 1.2 mm to 10.0 mm',
      ends: 'Plain Square Cut Deburred, Chamfered Ends for Tube Sheets',
      testing: 'Charpy Impact at -45°C, Flaring, Flange, Flattening, Hardness, Eddy Current'
    },
    mechanical: {
      tensile: '≥ 380 MPa (55,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 35% in 2"',
      impact: '≥ 18 J at -45°C',
      hardness: '≤ 85 HRB / 160 HBW',
      maxTemp: '350°C (Down to -45°C)'
    },
    chemistry: {
      c: '≤ 0.30%',
      mn: '0.40 - 1.06%',
      p: '≤ 0.025%',
      s: '≤ 0.025%',
      si: '≥ 0.10%'
    },
    applications: [
      'Low-temperature shell and tube condensers and evaporators',
      'Industrial gas chilling circuits and refrigeration heat exchangers',
      'Liquefied gas vaporizers and cold economizer coils',
      'Petrochemical dewaxing and cryogenic crystallization units'
    ]
  },
  {
    id: 'astm-a572-grade-50',
    slug: 'astm-a572-grade-50',
    aliases: ['a572-50', 'a572-grade-50', 'astm-a572-50'],
    name: 'ASTM A572 Grade 50 Pipe',
    specification: 'ASTM A572/A572M',
    grade: 'Grade 50 (HSLA 50 ksi Yield)',
    code: 'A572 GR. 50 STRUCTURAL',
    badge: 'HIGH-STRENGTH HSLA',
    uns: 'High-Strength Low-Alloy Structural',
    din: '1.0577 / S355J2 (EN 10025-2)',
    productForm: 'High-Strength Low-Alloy (HSLA) Structural Pipe',
    standards: 'ASTM A572/A572M Grade 50, AISC, AWS D1.1',
    shortDesc: 'Micro-alloyed high-strength structural pipe with 345 MPa yield strength for heavy structural columns and machinery.',
    fullDesc: 'High-strength low-alloy (HSLA) columbium-vanadium micro-alloyed structural steel pipe. Developed to deliver higher mechanical yield strength (345 MPa / 50 ksi) with reduced section weight compared to conventional carbon steel, while maintaining excellent atmospheric resistance and field weldability.',
    features: [
      '345 MPa (50 ksi) minimum yield strength allowing weight-optimized structural design',
      'Columbium (Niobium) and Vanadium micro-alloying ensuring fine grain ferrite',
      'Excellent weldability without mandatory high preheats under AWS D1.1',
      'Superior strength-to-weight ratio for heavy load-bearing structural members'
    ],
    specs: {
      sizeRange: '4" NB to 48" NB (Welded & Seamless Hollow Sections)',
      schedules: 'Wall thickness: 6.0 mm to 50 mm',
      ends: 'Plain Square Cut, Beveled Ends for Structural Welding',
      testing: 'Tensile, Yield, Elongation, Weld seam NDT (Ultrasonic / Magnetic Particle)'
    },
    mechanical: {
      tensile: '≥ 450 MPa (65,000 psi)',
      yield: '≥ 345 MPa (50,000 psi)',
      elongation: '≥ 21% in 2"',
      hardness: '≤ 195 HBW',
      maxTemp: 'Ambient / Structural'
    },
    chemistry: {
      c: '≤ 0.23%',
      mn: '≤ 1.35%',
      p: '≤ 0.040%',
      s: '≤ 0.050%',
      si: '≤ 0.40%',
      cb: '0.005 - 0.05%',
      v: '0.01 - 0.15%'
    },
    applications: [
      'Heavy structural columns and portal frames in industrial buildings',
      'Crane booms, excavator chassis, and heavy material handling structures',
      'Highway sign gantries, bridge pylons, and communication towers',
      'Offshore structural jacket bracing and platform tubular legs'
    ]
  },
  {
    id: 'astm-a671-pipe',
    slug: 'astm-a671-pipe',
    aliases: ['a671-pipe', 'a671', 'astm-a671'],
    name: 'ASTM A671 Pipe',
    specification: 'ASTM A671/A671M / ASME SA671',
    grade: 'Multi-Class EFW (Classes 10, 12, 22, 32)',
    code: 'A671 EFW LARGE OD',
    badge: 'LARGE DIAMETER EFW',
    uns: 'Fabricated Plate Pipe',
    din: 'EN 10217-1 / DIN 17172',
    productForm: 'Electric-Fusion-Welded (EFW) Large Diameter Pipe',
    standards: 'ASTM A671/A671M, ASME SA671, ASME B36.10M',
    shortDesc: 'Large diameter (16" to 100" OD) heavy-wall electric-fusion-welded pipe with 100% radiographic examination.',
    fullDesc: 'Electric-fusion-welded (EFW) steel pipe fabricated from pressure vessel quality plate with added filler metal. Specifically intended for atmospheric and lower temperatures. Produced with 100% radiographic examination of all longitudinal and circumferential welded joints to ASME Section VIII standards.',
    features: [
      'Heavy-wall large diameter availability from 16" OD up to 100" OD (406 mm to 2540 mm)',
      '100% Radiographic examination (RT) of all longitudinal and circumferential seams',
      'Supplied in multiple heat-treated conditions: Stress-relieved (SR), Normalized (N)',
      'High structural stability under internal fluid pressure and external vacuum loads'
    ],
    specs: {
      sizeRange: '16" to 100" Outside Diameter (OD)',
      schedules: 'Wall thickness: 6.35 mm to 75 mm (0.25" to 3.0")',
      ends: 'Beveled Ends (ASME B16.25), Plain Square Cut',
      testing: '100% RT Weld Seam Radiography, Weld transverse tensile, Hydrostatic proof'
    },
    mechanical: {
      tensile: '≥ 415 - 550 MPa (Plate dependent)',
      yield: '≥ 220 - 260 MPa',
      elongation: '≥ 22% in 2"',
      hardness: '≤ 190 HBW',
      maxTemp: '450°C'
    },
    chemistry: {
      c: '≤ 0.25%',
      mn: '0.85 - 1.20%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Petrochemical refinery heavy hydrocarbon and flare lines',
      'Industrial power plant cooling water circulating conduits',
      'Gas gathering trunk headers and low-pressure gas pipelines',
      'Large-diameter water intake manifolds and penstocks'
    ]
  },
  {
    id: 'astm-a671-cc60',
    slug: 'astm-a671-cc60',
    aliases: ['a671-cc60', 'astm-a671-cc60-pipe', 'a671-cc60-pipe'],
    name: 'ASTM A671 CC60 Pipe',
    specification: 'ASTM A671/A671M (Plate ASTM A516 Gr. 60)',
    grade: 'Grade CC60 (Class 12 / 22 / 32)',
    code: 'A671 CC60 EFW',
    badge: 'A516-60 PLATE QUALITY',
    uns: 'EFW Fabricated A516 Gr. 60',
    din: '1.0473 (P275NH EFW)',
    productForm: 'EFW Heavy-Wall Pipe from A516 Gr. 60 Plate',
    standards: 'ASTM A671/A671M Grade CC60, ASME SA671, ASTM A516 Gr. 60',
    shortDesc: 'EFW heavy-wall pipe fabricated from fine-grained killed ASTM A516 Gr. 60 plate with 100% radiography.',
    fullDesc: 'Electric-fusion-welded pipe manufactured from fully killed fine-grained ASTM A516 Grade 60 pressure vessel quality carbon steel plate. Fabricated using automatic submerged arc welding with filler metal and 100% radiographic examination. Engineered for severe low and moderate temperature pressure vessel connecting lines.',
    features: [
      'Manufactured from fine-grained fully killed ASTM A516 Grade 60 pressure vessel plate',
      '100% Radiographic inspection per ASME Boiler & Pressure Vessel Code UW-51',
      'Superior notch toughness for moderate and lower temperature applications',
      'Class 22 heat treated by normalizing after plate forming and longitudinal welding'
    ],
    specs: {
      sizeRange: '16" to 100" Outside Diameter (OD)',
      schedules: 'Wall thickness: 6.35 mm to 65 mm (0.25" to 2.5")',
      ends: 'Beveled Ends for Butt-Welding (ASME B16.25)',
      testing: '100% Radiography (RT), Transverse Weld Tensile, Guided Bend, Hydrostatic'
    },
    mechanical: {
      tensile: '415 - 550 MPa (60,000 - 80,000 psi)',
      yield: '≥ 220 MPa (32,000 psi)',
      elongation: '≥ 25% in 2"',
      hardness: '≤ 180 HBW',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.21% (Thk ≤ 12.5mm)',
      mn: '0.60 - 1.20%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'Low-to-moderate temperature hydrocarbon refining conduits',
      'Pressure vessel connecting nozzles and large-diameter headers',
      'Liquefied petroleum gas transfer lines and vapor return headers',
      'Thermal power plant circulating water and auxiliary steam systems'
    ]
  },
  {
    id: 'astm-a671-cc65',
    slug: 'astm-a671-cc65',
    aliases: ['a671-cc65', 'astm-a671-cc65-pipe', 'a671-cc65-pipe'],
    name: 'ASTM A671 CC65 Pipe',
    specification: 'ASTM A671/A671M (Plate ASTM A516 Gr. 65)',
    grade: 'Grade CC65 (Class 12 / 22 / 32)',
    code: 'A671 CC65 EFW',
    badge: 'A516-65 HIGH STRENGTH',
    uns: 'EFW Fabricated A516 Gr. 65',
    din: '1.0487 (P295GH EFW)',
    productForm: 'EFW Heavy-Wall Pipe from A516 Gr. 65 Plate',
    standards: 'ASTM A671/A671M Grade CC65, ASME SA671, ASTM A516 Gr. 65',
    shortDesc: 'Higher-tensile (450 - 585 MPa) EFW pipe fabricated from killed A516 Gr. 65 plate with 100% RT.',
    fullDesc: 'Electric-fusion-welded large-diameter pipe fabricated from fine-grained ASTM A516 Grade 65 pressure vessel carbon steel plate. Provides elevated minimum tensile strength (450 - 585 MPa) and yield strength (240 MPa) compared to CC60, enabling optimized design wall thickness for large industrial pressure headers.',
    features: [
      'Higher allowable tensile strength: 450 to 585 MPa per ASTM A516 Gr. 65',
      '100% Radiographic examination of all longitudinal and girth weld seams',
      'Class 22 normalized heat treatment ensuring homogeneous toughness and stress relief',
      'Full traceability with EN 10204 3.1 plate mill certificates and weld records'
    ],
    specs: {
      sizeRange: '16" to 100" Outside Diameter (OD)',
      schedules: 'Wall thickness: 6.35 mm to 75 mm (0.25" to 3.0")',
      ends: 'Beveled Ends (ASME B16.25 37.5°)',
      testing: '100% RT Radiography, Transverse weld tensile, Guided bend, Hydrostatic'
    },
    mechanical: {
      tensile: '450 - 585 MPa (65,000 - 85,000 psi)',
      yield: '≥ 240 MPa (35,000 psi)',
      elongation: '≥ 23% in 2"',
      hardness: '≤ 187 HBW',
      maxTemp: '425°C'
    },
    chemistry: {
      c: '≤ 0.24% (Thk ≤ 12.5mm)',
      mn: '0.85 - 1.20%',
      p: '≤ 0.035%',
      s: '≤ 0.035%',
      si: '0.15 - 0.40%'
    },
    applications: [
      'High-pressure large-diameter petrochemical header piping',
      'Refinery hydrocracker and catalytic reformer feed ducts',
      'Gas gathering trunk pipelines and cross-country headers',
      'Thermal power generation high-pressure circulating ducts'
    ]
  }
];

export const ALLOY_STEEL_GRADES = [
  {
    id: 'as-p11',
    name: 'ASTM A335 Grade P11 Pipe',
    code: '1.25Cr - 0.5Mo ALLOY',
    badge: 'CREEP RESISTANT',
    uns: 'UNS K11597',
    din: '1.7335 (13CrMo4-5)',
    standards: 'ASTM A335 / ASME SA335 Gr. P11, IBR Form III-A & III-C',
    shortDesc: 'Ferritic chrome-moly seamless pipe engineered for steam headers and heat exchangers operating up to 570°C.',
    fullDesc: 'Low-alloy chrome-moly seamless pipe formulated with 1.25% Chromium and 0.5% Molybdenum. Engineered to resist graphitization and creep deformation in power generation steam lines.',
    features: [
      'Creep-rupture strength up to 570°C operating temperature',
      'High resistance to hydrogen embrittlement in sour refining',
      'IBR approved with certified Form III-C documentation',
      '100% Ultrasonic & Eddy Current non-destructive tested'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB',
      schedules: 'SCH 40 to SCH XXS (1.73 mm to 60 mm Wall)',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: '100% PMI, Hydrostatic up to 700 Bar, UT, Flattening'
    },
    mechanical: {
      tensile: '≥ 415 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 163 HBW',
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
      'Thermal power plant high-pressure steam distribution',
      'Petrochemical refinery hydrotreater and reformer coils',
      'Superheater coils and boiler header tubes',
      'High-pressure gas processing lines'
    ]
  },
  {
    id: 'as-p22',
    name: 'ASTM A335 Grade P22 Pipe',
    code: '2.25Cr - 1.0Mo ALLOY',
    badge: 'POWER GENERATION',
    uns: 'UNS K21590',
    din: '1.7380 (10CrMo9-10)',
    standards: 'ASTM A335 / ASME SA335 Gr. P22, IBR Form III-C',
    shortDesc: '2.25% Chromium alloy pipe delivering exceptional creep rupture properties up to 600°C in high-pressure steam boilers.',
    fullDesc: 'High-performance 2.25% Chromium, 1% Molybdenum seamless ferritic alloy pipe. Extensively specified in supercritical fossil fuel boilers and refinery hydrocrackers.',
    features: [
      'Superior creep strength up to 600°C continuous service',
      'Excellent resistance to hydrogen attack under elevated pressure',
      'Resistant to high-temperature thermal cycling and fatigue',
      'Normalized and tempered heat treatment condition'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB (Seamless)',
      schedules: 'SCH 40 to SCH XXS',
      ends: 'Beveled Ends (37.5°)',
      testing: 'Hot Tensile, PMI Spectro, Hydrostatic, 100% UT'
    },
    mechanical: {
      tensile: '≥ 415 MPa',
      yield: '≥ 205 MPa',
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
      'Supercritical steam generator main steam piping',
      'Refinery catalytic hydrocracking unit piping',
      'Nuclear secondary coolant loops and heat exchangers',
      'Waste-to-energy plant boiler superheater lines'
    ]
  },
  {
    id: 'as-p5',
    name: 'ASTM A335 Grade P5 Pipe',
    code: '5.0Cr - 0.5Mo ALLOY',
    badge: 'REFINERY CRACKER',
    uns: 'UNS K41545',
    din: '1.7362 (12CrMo19-5)',
    standards: 'ASTM A335 Gr. P5, ASME SA335, NACE MR0175',
    shortDesc: '5% Chromium seamless pipe designed to resist severe sulfidic and naphthenic acid corrosion in crude oil refineries.',
    fullDesc: 'Engineered with 5% Chromium and 0.5% Molybdenum, providing significant resistance to oxidation, sulfur corrosion, and naphthenic acid attack in crude oil refining units.',
    features: [
      'High resistance to sulfur-bearing crude oils at elevated temps',
      'Immune to naphthenic acid thinning up to 650°C',
      'Hardness controlled for sour service per NACE MR0175',
      'Full penetration seamless extrusion'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 40, SCH 80, SCH 160, SCH XXS',
      ends: 'Beveled Ends',
      testing: '100% PMI, Hardness testing (max 22 HRC), Hydro'
    },
    mechanical: {
      tensile: '≥ 415 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 217 HBW',
      maxTemp: '650°C'
    },
    chemistry: {
      cr: '4.00 - 6.00%',
      mo: '0.45 - 0.65%',
      c: '≤ 0.15%',
      mn: '0.30 - 0.60%',
      si: '≤ 0.50%'
    },
    applications: [
      'Petroleum crude distillation column furnace tubes',
      'Delayed coker heater coils and transfer headers',
      'High-temperature desulfurizer feed conduits',
      'Visbreaker furnace piping networks'
    ]
  },
  {
    id: 'as-p9',
    name: 'ASTM A335 Grade P9 Pipe',
    code: '9.0Cr - 1.0Mo ALLOY',
    badge: 'CORROSION & OXIDATION',
    uns: 'UNS K90941',
    din: '1.7386 (X12CrMo9-1)',
    standards: 'ASTM A335 Gr. P9, ASME SA335',
    shortDesc: '9% Chromium pipe offering high resistance to elevated-temperature oxidation and aggressive sulfidation in sour cracking.',
    fullDesc: '9% Chromium, 1% Molybdenum seamless ferritic alloy pipe. Features elevated chromium content to resist scaling, carburization, and aggressive sulfide attack in severe refinery environments.',
    features: [
      'High chromium content prevents scaling up to 650°C',
      'Resistant to hot sulfur corrosion and hydrocarbon cracking',
      'Full normalization and tempering heat treatment',
      '100% Spectro PMI verification on every length'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 40 to SCH 160',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'Ultrasonic Examination, Hydrostatic, Microstructure'
    },
    mechanical: {
      tensile: '≥ 415 MPa',
      yield: '≥ 205 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 217 HBW',
      maxTemp: '650°C'
    },
    chemistry: {
      cr: '8.00 - 10.00%',
      mo: '0.90 - 1.10%',
      c: '≤ 0.15%',
      mn: '0.30 - 0.60%',
      si: '0.25 - 1.00%'
    },
    applications: [
      'Catalytic cracking unit radiant and convection sections',
      'Asphalt and bitumen heater tube bundles',
      'High-pressure chemical reactor conduits',
      'Refinery gas synthesis furnaces'
    ]
  },
  {
    id: 'as-p91',
    name: 'ASTM A335 Grade P91 Pipe',
    code: '9Cr - 1Mo - V (CSEF)',
    badge: 'ULTRA SUPERCRITICAL',
    uns: 'UNS K91560',
    din: '1.4903 (X10CrMoVNb9-1)',
    standards: 'ASTM A335 Gr. P91, ASME SA335, EN 10216-2',
    shortDesc: 'Creep Strength Enhanced Ferritic (CSEF) alloy with Vanadium and Niobium for ultra-supercritical power plants up to 650°C.',
    fullDesc: 'Advanced 9Cr-1Mo alloy modified with Vanadium, Niobium, and Nitrogen. Provides nearly double the creep rupture strength of Grade P22 at 600°C, enabling substantially thinner pipe walls and reduced thermal fatigue.',
    features: [
      'Nearly double the creep strength of standard P22 at 600°C',
      'Enables thinner pipe walls, reducing thermal stress and weight',
      'Strict control of trace tramp elements (Sn, Sb, As, Cu)',
      'Certified under IBR regulations with complete MTC 3.1 / 3.2'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB (Seamless Heavy Wall)',
      schedules: 'SCH 80 to SCH XXS (Up to 80 mm Wall)',
      ends: 'Precision Beveled (Narrow Groove for Auto TIG Welding)',
      testing: '100% Ultrasonic (UT), Hardness (190-250 HBW), PMI'
    },
    mechanical: {
      tensile: '≥ 585 MPa',
      yield: '≥ 415 MPa',
      elongation: '≥ 20%',
      hardness: '190 - 250 HBW (196 - 265 HV)',
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
      'Ultra-supercritical power station main steam and hot reheat lines',
      'High-pressure steam turbine bypass piping networks',
      'Severe thermal cycling boiler headers and manifolds',
      'Advanced coal gasification and hydrogen reforming units'
    ]
  },
  {
    id: 'as-p92',
    name: 'ASTM A335 Grade P92 Pipe',
    code: '9Cr - 0.5Mo - 1.8W - V',
    badge: '650°C+ SUPERCRITICAL',
    uns: 'UNS K92460',
    din: '1.4901 (X10CrWMoVNb9-2)',
    standards: 'ASTM A335 Gr. P92, ASME SA335',
    shortDesc: 'Tungsten-strengthened martensitic alloy steel pipe offering maximum creep endurance for 650°C+ thermal plants.',
    fullDesc: '9Cr-0.5Mo steel modified with 1.8% Tungsten, Vanadium, Niobium, and Boron. Features the highest allowable design stress among ferritic steels at temperatures exceeding 600°C.',
    features: [
      'Tungsten addition enhances high-temperature solid solution strengthening',
      'Higher allowable stress than P91 above 600°C',
      'Superior resistance to type IV cracking in welded joints',
      'Strictly austenitized and tempered heat treatment'
    ],
    specs: {
      sizeRange: '1/2" NB to 36" NB',
      schedules: 'SCH 80 to SCH XXS',
      ends: 'Precision Beveled',
      testing: 'Hot Creep Verification, 100% UT, Hardness (200-260 HBW)'
    },
    mechanical: {
      tensile: '≥ 620 MPa',
      yield: '≥ 440 MPa',
      elongation: '≥ 20%',
      hardness: '200 - 260 HBW',
      maxTemp: '650°C+'
    },
    chemistry: {
      cr: '8.50 - 9.50%',
      w: '1.50 - 2.00%',
      mo: '0.30 - 0.60%',
      v: '0.15 - 0.25%',
      b: '0.001 - 0.006%',
      c: '0.07 - 0.13%'
    },
    applications: [
      'State-of-the-art ultra-supercritical boiler main steam pipes',
      'High-efficiency thermal power turbine live-steam connections',
      'Advanced solar thermal molten salt receiver piping',
      'Nuclear high-temperature helium gas reactor circuits'
    ]
  }
];

export const DUPLEX_STEEL_GRADES = [
  {
    id: 'duplex-2205',
    name: 'Duplex 2205 Pipe (UNS S31803 / S32205)',
    code: '2205 DUPLEX (50:50)',
    badge: 'DOUBLE YIELD STRENGTH',
    uns: 'UNS S31803 / UNS S32205',
    din: '1.4462 (X2CrNiMoN22-5-3)',
    standards: 'ASTM A790 / ASME SA790, ASTM A928, NACE MR0175',
    shortDesc: 'Balanced 50/50 austenitic-ferritic microstructure delivering twice the yield strength of standard austenitic stainless steels.',
    fullDesc: 'Seamless and welded 2205 duplex pipe offering remarkable resistance to chloride stress corrosion cracking, pitting, and crevice corrosion. Twice the mechanical yield strength of 316L.',
    features: [
      'Twice the yield strength of 316L, allowing substantial weight saving',
      'PREN ≥ 35 ensures superior pitting & crevice resistance',
      'Immunity to chloride stress corrosion cracking in seawater',
      'NACE MR0175 / ISO 15156 compliant for sour oil & gas'
    ],
    specs: {
      sizeRange: '1/2" NB to 30" NB (Seamless up to 16", EFW up to 36")',
      schedules: 'SCH 10S to SCH XXS',
      ends: 'Beveled Ends (ASME B16.25)',
      testing: 'ASTM A923 Method C (Ferric Chloride Corrosion), 100% PMI, UT'
    },
    mechanical: {
      tensile: '≥ 655 MPa',
      yield: '≥ 450 MPa',
      elongation: '≥ 25%',
      hardness: '≤ 28 HRC / 290 HBW',
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
      'Offshore oil & gas subsea manifolds and production risers',
      'Seawater reverse osmosis desalination high-pressure headers',
      'Chemical tanker cargo piping and sulfuric acid scrubbers',
      'Flue gas desulfurization (FGD) absorber loops'
    ]
  },
  {
    id: 'super-duplex-2507',
    name: 'Super Duplex 2507 Pipe (UNS S32750)',
    code: '2507 SUPER DUPLEX',
    badge: 'PREN ≥ 42 EXTREME',
    uns: 'UNS S32750',
    din: '1.4410 (X2CrNiMoN25-7-4)',
    standards: 'ASTM A790 / ASME SA790, ASTM A928, NORSOK M-650',
    shortDesc: 'High-alloy 25% Cr super duplex pipe with PREN ≥ 42 for severe marine and aggressive chloride environments.',
    fullDesc: 'High-performance super duplex alloy pipe engineered for extreme environments. Features 25% Chromium, 4% Molybdenum, and 0.28% Nitrogen to attain a Pitting Resistance Equivalent Number (PREN) exceeding 42.',
    features: [
      'PREN ≥ 42 for supreme resistance to pitting in chlorinated seawater',
      'High mechanical tensile strength (≥ 750 MPa)',
      'Exceptional resistance to erosion corrosion in high-velocity flows',
      'NORSOK M-650 qualified mill manufacturing'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S to SCH XXS',
      ends: 'Beveled Ends',
      testing: 'ASTM G48 Method A Corrosion Test at 50°C, 100% UT, PMI'
    },
    mechanical: {
      tensile: '≥ 750 MPa',
      yield: '≥ 550 MPa',
      elongation: '≥ 15%',
      hardness: '≤ 32 HRC / 310 HBW',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '6.0 - 8.0%',
      mo: '3.0 - 5.0%',
      n: '0.24 - 0.32%',
      c: '≤ 0.030%'
    },
    applications: [
      'Subsea flowlines, manifolds, and umbilical tubes',
      'Offshore firewater main loops and deluge systems',
      'Geothermal brine extraction and re-injection piping',
      'High-pressure acid leach (HPAL) mining circuits'
    ]
  },
  {
    id: 'super-duplex-zeron100',
    name: 'Super Duplex Zeron 100 Pipe (UNS S32760)',
    code: 'ZERON 100 (W + Cu)',
    badge: 'TUNGSTEN ENHANCED',
    uns: 'UNS S32760',
    din: '1.4501 (X2CrNiMoCuWN25-7-4)',
    standards: 'ASTM A790, ASME SA790, NACE MR0175',
    shortDesc: 'Super duplex pipe fortified with Tungsten and Copper additions for aggressive acid and sour oilfield environments.',
    fullDesc: '25% Cr super duplex stainless steel pipe enhanced with purposeful additions of Tungsten (0.5-1.0%) and Copper (0.5-1.0%). Delivers outstanding resistance to crevice corrosion in hot seawater and strong sulfuric/hydrochloric acid.',
    features: [
      'Tungsten & copper additions enhance resistance in sulfuric acid',
      'Guaranteed PREN ≥ 42',
      'High resistance to stress corrosion cracking in sour environments',
      'Immunity to intergranular attack'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB',
      schedules: 'SCH 10S to SCH XXS',
      ends: 'Beveled Ends',
      testing: '100% PMI, Microstructural Phase Count (40-60% Ferrite)'
    },
    mechanical: {
      tensile: '≥ 750 MPa',
      yield: '≥ 550 MPa',
      elongation: '≥ 25%',
      hardness: '≤ 28 HRC',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '6.0 - 8.0%',
      mo: '3.0 - 4.0%',
      w: '0.50 - 1.00%',
      cu: '0.50 - 1.00%',
      n: '0.20 - 0.30%'
    },
    applications: [
      'Offshore seawater injection and topside process lines',
      'Sour gas gathering pipelines (H2S and CO2 saturated)',
      'Phosphoric and sulfuric acid production headers',
      'Marine propeller shaft sleeves and seawater piping'
    ]
  }
];

export const TITANIUM_GRADES = [
  {
    id: 'ti-grade-2',
    name: 'Titanium Grade 2 Pipe',
    code: 'COMMERCIALLY PURE (CP-2)',
    badge: 'WORKHORSE TITANIUM',
    uns: 'UNS R50400',
    din: '3.7035',
    standards: 'ASTM B861 (Seamless), ASTM B862 (Welded), ASME SB861',
    shortDesc: 'The industrial workhorse titanium pipe offering superior strength-to-weight ratio and total immunity to seawater.',
    fullDesc: 'Commercially pure (CP) Grade 2 titanium pipe provides outstanding corrosion resistance in seawater, moist chlorine, chlorites, nitric acid, and oxidizing environments.',
    features: [
      'Total immunity to general and localized corrosion in seawater',
      'Approximately 45% lighter than steel of comparable size',
      'Excellent formability, weldability, and impact toughness',
      'Non-magnetic with low thermal expansion coefficient'
    ],
    specs: {
      sizeRange: '1/2" NB to 24" NB (Seamless up to 6", Welded up to 24")',
      schedules: 'SCH 5S, SCH 10S, SCH 40S',
      ends: 'Plain Cut, Beveled',
      testing: '100% Eddy Current / Ultrasonic, Pneumatic/Hydrostatic'
    },
    mechanical: {
      tensile: '≥ 345 MPa',
      yield: '≥ 275 - 450 MPa',
      elongation: '≥ 20%',
      hardness: '≤ 200 HBW',
      maxTemp: '315°C'
    },
    chemistry: {
      ti: 'Balance (≥ 99.2%)',
      fe: '≤ 0.30%',
      o: '≤ 0.25%',
      c: '≤ 0.08%',
      n: '≤ 0.03%',
      h: '≤ 0.015%'
    },
    applications: [
      'Seawater cooling systems in coastal chemical plants',
      'Offshore oil platform titanium heat exchangers',
      'Chlor-alkali cell piping and bleaching chemical transfer',
      'Desalination plant falling-film evaporators'
    ]
  },
  {
    id: 'ti-grade-5',
    name: 'Titanium Grade 5 Pipe (Ti-6Al-4V)',
    code: 'Ti-6Al-4V ALPHA-BETA',
    badge: 'AEROSPACE GRADE',
    uns: 'UNS R56400',
    din: '3.7165',
    standards: 'ASTM B861 Gr. 5, AMS 4928, ASME SB861',
    shortDesc: 'Alpha-beta titanium alloy pipe delivering extreme tensile strength (≥ 895 MPa) for aerospace and high-stress marine service.',
    fullDesc: 'The most widely used titanium alloy. Ti-6Al-4V combines high mechanical strength, light weight, and high corrosion resistance. Can be heat treated to achieve high strength-to-weight ratios.',
    features: [
      'Extreme tensile strength (≥ 895 MPa) combined with low density',
      'High fatigue endurance and fracture toughness',
      'Excellent performance in offshore deep-water drilling risers',
      'Superior cryogenic properties down to liquid hydrogen temperatures'
    ],
    specs: {
      sizeRange: '1/2" NB to 16" NB',
      schedules: 'SCH 40, SCH 80, SCH 160',
      ends: 'Precision Machined Ends',
      testing: '100% Ultrasonic Flaw Detection, Hardness, Microstructure'
    },
    mechanical: {
      tensile: '≥ 895 MPa',
      yield: '≥ 828 MPa',
      elongation: '≥ 10%',
      hardness: '30 - 36 HRC',
      maxTemp: '400°C'
    },
    chemistry: {
      ti: 'Balance',
      al: '5.50 - 6.75%',
      v: '3.50 - 4.50%',
      fe: '≤ 0.40%',
      o: '≤ 0.20%'
    },
    applications: [
      'Aerospace hydraulic lines and jet engine air conduits',
      'Deepwater offshore titanium drilling stress joints and risers',
      'High-performance motorsport exhaust and suspension piping',
      'Marine naval submarine hull penetrations and sonar housings'
    ]
  }
];

// Re-export all modular research-verified grade collections
export {
  FLANGES_GRADES,
  FLANGES_STAINLESS_STEEL_GRADES,
  FLANGES_CARBON_STEEL_GRADES,
  FLANGES_ALLOY_STEEL_GRADES,
  FLANGES_DUPLEX_GRADES,
  FLANGES_NICKEL_GRADES,
  FLANGES_TITANIUM_GRADES,
  BUTT_WELD_FITTINGS_GRADES,
  BUTT_WELD_FITTINGS_CARBON_STEEL_GRADES,
  BUTT_WELD_FITTINGS_STAINLESS_STEEL_GRADES,
  BUTT_WELD_FITTINGS_ALLOY_STEEL_GRADES,
  BUTT_WELD_FITTINGS_DUPLEX_GRADES,
  BUTT_WELD_FITTINGS_NICKEL_GRADES,
  BUTT_WELD_FITTINGS_TITANIUM_GRADES,
  FORGED_FITTINGS_GRADES,
  FASTENERS_GRADES,
  FERRULE_FITTINGS_GRADES,
  DAIRY_PHARMA_FITTINGS_GRADES,
  HOSE_PIPES_GRADES,
  PERFORATED_SHEETS_GRADES,
  WIRE_MESH_GRADES,
  SHEETS_PLATES_GRADES,
  SHEETS_PLATES_CARBON_STEEL_GRADES,
  SHEETS_PLATES_STAINLESS_STEEL_GRADES,
  SHEETS_PLATES_ALLOY_STEEL_GRADES,
  SHEETS_PLATES_DUPLEX_GRADES,
  SHEETS_PLATES_TITANIUM_GRADES,
  RODS_BARS_GRADES,
  WIRES_GRADES,
  COIL_GRADES,
  FLAT_BARS_GRADES,
  PATAPATTI_STRIPS_GRADES,
  CIRCLE_GRADES,
  RING_GRADES,
  NICKEL_ALLOYS_PIPE_GRADES,
  HIGH_ALLOYS_PIPE_GRADES,
  EXOTIC_ALLOYS_PIPE_GRADES,
  ALLOY_STEEL_TUBES_GRADES
};

/**
 * Data-Driven Product Grades Resolver
 * Accurately matches any product in the catalog to its verified industrial specification dataset.
 */
export function getProductGrades(product) {
  if (!product) return STAINLESS_STEEL_GRADES;

  const slug = (product.slug || '').toLowerCase().trim();
  const id = (product.id || '').toLowerCase().trim();
  const groupSlug = (product.groupSlug || '').toLowerCase().trim();
  const material = (product.materialName || '').toLowerCase().trim();

  // 1. Stainless Steel Pipe (14 grades) — STRICTLY PRESERVED REFERENCE IMPLEMENTATION
  if (
    id === 'pipes-tubes-stainless-steel' ||
    ((groupSlug === 'pipes-tubes' || groupSlug === 'pipes-and-tubes' || !groupSlug) &&
     (id === 'stainless-steel-pipe' || slug === 'stainless-steel-pipe' || (slug === 'stainless-steel' && (groupSlug === 'pipes-tubes' || !groupSlug))))
  ) {
    return STAINLESS_STEEL_GRADES;
  }

  // 2. Carbon Steel Pipe (16 ASTM grades) — STRICTLY PRESERVED REFERENCE IMPLEMENTATION
  if (
    id === 'pipes-tubes-carbon-steel' ||
    ((groupSlug === 'pipes-tubes' || groupSlug === 'pipes-and-tubes' || !groupSlug) &&
     (id === 'carbon-steel-pipe' || slug === 'carbon-steel-pipe' || (slug === 'carbon-steel' && (groupSlug === 'pipes-tubes' || !groupSlug))))
  ) {
    return CARBON_STEEL_GRADES;
  }

  // 3. Flanges (Manufacturer Division)
  if (groupSlug === 'flanges' || id.includes('flanges') || slug.includes('flanges')) {
    if (material.includes('carbon') || slug.includes('carbon')) return FLANGES_CARBON_STEEL_GRADES;
    if (material.includes('stainless') || slug.includes('stainless')) return FLANGES_STAINLESS_STEEL_GRADES;
    if (material.includes('alloy') || slug.includes('alloy')) return FLANGES_ALLOY_STEEL_GRADES;
    if (material.includes('duplex') || slug.includes('duplex')) return FLANGES_DUPLEX_GRADES;
    if (material.includes('nickel') || slug.includes('nickel') || material.includes('high alloy')) return FLANGES_NICKEL_GRADES;
    if (material.includes('titanium') || slug.includes('titanium')) return FLANGES_TITANIUM_GRADES;
    return FLANGES_GRADES;
  }

  // 4. Butt Weld Fittings (Manufacturer Division)
  if (groupSlug === 'butt-weld-fittings' || id.includes('butt-weld') || id.includes('buttweld') || slug.includes('butt-weld') || slug.includes('buttweld')) {
    if (material.includes('carbon') || slug.includes('carbon')) return BUTT_WELD_FITTINGS_CARBON_STEEL_GRADES;
    if (material.includes('stainless') || slug.includes('stainless')) return BUTT_WELD_FITTINGS_STAINLESS_STEEL_GRADES;
    if (material.includes('alloy') || slug.includes('alloy')) return BUTT_WELD_FITTINGS_ALLOY_STEEL_GRADES;
    if (material.includes('duplex') || slug.includes('duplex')) return BUTT_WELD_FITTINGS_DUPLEX_GRADES;
    if (material.includes('nickel') || slug.includes('nickel') || material.includes('high alloy')) return BUTT_WELD_FITTINGS_NICKEL_GRADES;
    if (material.includes('titanium') || slug.includes('titanium')) return BUTT_WELD_FITTINGS_TITANIUM_GRADES;
    return BUTT_WELD_FITTINGS_GRADES;
  }

  // 5. Forged Fittings (Socket Weld & Threaded, ASME B16.11)
  if (groupSlug === 'forged-fittings' || id.includes('forged-fittings') || slug.includes('forged-fittings') || id.includes('forge-fitting')) {
    return FORGED_FITTINGS_GRADES;
  }

  // 6. Fasteners (Stud Bolts, Heavy Hex Bolts & Heavy Hex Nuts)
  if (groupSlug === 'fasteners' || id.includes('fasteners') || slug.includes('fasteners')) {
    return FASTENERS_GRADES;
  }

  // 7. Ferrule Fittings (Twin Ferrule Tube Compression Fittings)
  if (groupSlug === 'ferrule-fittings' || id.includes('ferrule') || slug.includes('ferrule')) {
    return FERRULE_FITTINGS_GRADES;
  }

  // 8. Dairy & Pharma Fittings (Sanitary ASME BPE, DIN 11850, 3-A)
  if (groupSlug === 'dairy-pharma-fittings' || id.includes('dairy-pharma') || slug.includes('dairy-pharma') || id.includes('sanitary')) {
    return DAIRY_PHARMA_FITTINGS_GRADES;
  }

  // 9. Hose Pipes (Corrugated Metallic Flexible Hoses & Assemblies)
  if (groupSlug === 'hose-pipes' || id.includes('hose-pipes') || slug.includes('hose-pipes') || id.includes('metallic-hose')) {
    return HOSE_PIPES_GRADES;
  }

  // 10. Perforated Sheets (Round, Square, Slotted Patterns)
  if (groupSlug === 'perforated-sheets' || id.includes('perforated-sheets') || slug.includes('perforated-sheets') || id.includes('perforated')) {
    return PERFORATED_SHEETS_GRADES;
  }

  // 11. Wire Mesh (Woven Industrial Mesh & Dutch Filter Cloth)
  if (groupSlug === 'wire-mesh' || id.includes('wire-mesh') || slug.includes('wire-mesh')) {
    return WIRE_MESH_GRADES;
  }

  // 12. Sheets & Plates (Supplier Division)
  if (groupSlug === 'sheet-and-plates' || id.includes('sheet-and-plates') || slug.includes('sheet-and-plates') || slug.includes('sheets-and-plates')) {
    if (material.includes('carbon') || slug.includes('carbon')) return SHEETS_PLATES_CARBON_STEEL_GRADES;
    if (material.includes('stainless') || slug.includes('stainless')) return SHEETS_PLATES_STAINLESS_STEEL_GRADES;
    if (material.includes('alloy') || slug.includes('alloy')) return SHEETS_PLATES_ALLOY_STEEL_GRADES;
    if (material.includes('duplex') || slug.includes('duplex')) return SHEETS_PLATES_DUPLEX_GRADES;
    if (material.includes('titanium') || slug.includes('titanium')) return SHEETS_PLATES_TITANIUM_GRADES;
    return SHEETS_PLATES_GRADES;
  }

  // 13. Rods & Bars (Solid Round Bars & Turned Shafts)
  if (groupSlug === 'rods-and-bars' || id.includes('rods-and-bars') || slug.includes('rods-and-bars')) {
    return RODS_BARS_GRADES;
  }

  // 14. Wires (Welding Filler Rods, TIG Wire, Spring Wire)
  if (groupSlug === 'wires' || id.includes('wires') || slug.includes('wires')) {
    return WIRES_GRADES;
  }

  // 15. Coil (Hot Rolled & Cold Rolled Strip Coils)
  if (groupSlug === 'coil' || id.includes('coil') || slug.includes('coil')) {
    return COIL_GRADES;
  }

  // 16. Flat Bars (HRAP & Cold Drawn Rectangular Bars)
  if (groupSlug === 'flat' || id.includes('flat') || slug.includes('flat')) {
    return FLAT_BARS_GRADES;
  }

  // 17. Patapatti / Strips (Precision Slit Strips & Banding)
  if (groupSlug === 'patapatti' || id.includes('patapatti') || slug.includes('patapatti')) {
    return PATAPATTI_STRIPS_GRADES;
  }

  // 18. Circle (Circular Blanks, Dished Ends & Tubesheets)
  if (groupSlug === 'circle' || id.includes('circle') || slug.includes('circle')) {
    return CIRCLE_GRADES;
  }

  // 19. Ring (Forged Seamless Rolled Rings & RTJ Gaskets)
  if (groupSlug === 'ring' || id.includes('ring') || slug.includes('ring')) {
    return RING_GRADES;
  }

  // 20. Pipes & Tubes (Supplier Division remaining materials)
  if (groupSlug === 'pipes-tubes' || groupSlug === 'pipes-and-tubes' || id.includes('pipes-tubes')) {
    if (slug === 'alloy-steel' || slug === 'seamless-alloy-steel-pipes-a335' || id.includes('alloy-steel')) {
      return ALLOY_STEEL_GRADES;
    }
    if (slug === 'duplex' || slug === 'super-duplex' || id.includes('duplex')) {
      return DUPLEX_STEEL_GRADES;
    }
    if (slug === 'titanium' || id.includes('titanium')) {
      return TITANIUM_GRADES;
    }
    if (slug === 'nickel-alloys' || id.includes('nickel-alloys')) {
      return NICKEL_ALLOYS_PIPE_GRADES;
    }
    if (slug === 'high-alloys' || id.includes('high-alloys')) {
      return HIGH_ALLOYS_PIPE_GRADES;
    }
    if (slug === 'exotic-alloys' || id.includes('exotic-alloys')) {
      return EXOTIC_ALLOYS_PIPE_GRADES;
    }
  }

  // 21. Specialist Alloy Steel Products (Showcase Products)
  if (slug === 'seamless-alloy-steel-pipes' || id.includes('seamless-alloy-steel-pipes')) {
    return ALLOY_STEEL_GRADES;
  }
  if (slug === 'alloy-steel-tubes' || id.includes('alloy-steel-tubes')) {
    return ALLOY_STEEL_TUBES_GRADES;
  }
  if (slug === 'alloy-steel-plates' || id.includes('alloy-steel-plates')) {
    return SHEETS_PLATES_ALLOY_STEEL_GRADES;
  }

  return STAINLESS_STEEL_GRADES;
}

