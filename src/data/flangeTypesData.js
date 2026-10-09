/**
 * Dedicated Flange Types Data & Material Hierarchy
 * 
 * Implements the 12 verified Flange Types according to ASME B16.5, ASME B16.36,
 * ASME B16.47, MSS SP-65, MSS SP-97, JIS B2291, and ASTM standards:
 * 01 — Threaded Flange (THRF)
 * 02 — Weld Neck Flange (WNRF)
 * 03 — Slip-On Flange (SORF)
 * 04 — Square Flange (JIS B2291 / ISO 6164)
 * 05 — Orifice Flange (ASME B16.36)
 * 06 — Elbow Flange / Elboflange (90° Branch Flange)
 * 07 — Reducing Flange (ASME B16.5 Table 6)
 * 08 — Expander Flange (MSS SP-65 / ASME B16.5)
 * 09 — Socket Weld Flange (SWRF)
 * 10 — Cast Flange (ASTM A216 WCB / ASTM A351 CF8M)
 * 11 — Blind Flange (BLRF)
 * 12 — Long Weld Neck Flange (LWN / Nozzle Flange)
 */

// Base high-definition flange types images
import img_threaded from '../assets/flanges/types/threaded-flanges.jpg';
import img_weld_neck from '../assets/flanges/types/weld-neck-flanges.jpg';
import img_slip_on from '../assets/flanges/types/slip-on-flanges.jpg';
import img_square from '../assets/flanges/types/square-flanges.jpg';
import img_orifice from '../assets/flanges/types/orifice-flanges.jpg';
import img_elbow from '../assets/flanges/types/elbow-flanges.jpg';
import img_reducing from '../assets/flanges/types/reducing-flanges.jpg';
import img_expander from '../assets/flanges/types/expander-flanges.jpg';
import img_socket_weld from '../assets/flanges/types/socket-weld-flanges.jpg';
import img_cast from '../assets/flanges/types/cast-flanges.jpg';
import img_blind from '../assets/flanges/types/blind-flanges.jpg';
import img_long_weld_neck from '../assets/flanges/types/long-weld-neck-flanges.jpg';
import img_lap_joint from '../assets/flanges/types/lap-joint-flanges.jpg';
import img_spectacle_blind from '../assets/flanges/types/spectacle-blind-flanges.jpg';

// Authentic Carbon Steel product imagery
import img_cs_threaded from '../assets/flanges/types/carbon-steel-flanges.jpg';
import img_cs_weld_neck from '../assets/flanges/types/cs-weld-neck-flanges.jpg';
import img_cs_slip_on from '../assets/flanges/types/cs-slip-on-flanges.jpg';
import img_cs_blind from '../assets/flanges/types/cs-blind-flanges.jpg';
import img_cs_socket_weld from '../assets/flanges/types/cs-socket-weld-flanges.jpg';
import img_cs_lap_joint from '../assets/flanges/types/cs-lap-joint-flanges.jpg';
import img_cs_orifice from '../assets/flanges/types/cs-orifice-flanges.jpg';
import img_cs_long_weld_neck from '../assets/flanges/types/cs-long-weld-neck-flanges.jpg';
import img_cs_spectacle_blind from '../assets/flanges/types/cs-spectacle-blind-flanges.jpg';
import img_cs_reducing from '../assets/flanges/types/cs-reducing-flanges.jpg';
import img_cs_expander from '../assets/flanges/types/cs-expander-flanges.jpg';
import img_cs_square from '../assets/flanges/types/cs-square-flanges.jpg';
import img_cs_elbow from '../assets/flanges/types/cs-elbow-flanges.jpg';
import img_cs_cast from '../assets/flanges/types/cs-cast-flanges.jpg';

// Authentic Alloy Steel product imagery (from dedicated project asset collection)
import img_as_threaded from '../assets/types of product/flanges/alloy steel types/Threaded Flange.jpeg';
import img_as_weld_neck from '../assets/types of product/flanges/alloy steel types/Weld Neck Flange.jpeg';
import img_as_slip_on from '../assets/types of product/flanges/alloy steel types/slip-on-flanges.jpg';
import img_as_blind from '../assets/types of product/flanges/alloy steel types/blind.jpeg';
import img_as_socket_weld from '../assets/types of product/flanges/alloy steel types/socket weld.jpeg';
import img_as_lap_joint from '../assets/types of product/flanges/alloy steel types/lap joint flanges.jpeg';
import img_as_orifice from '../assets/types of product/flanges/alloy steel types/orifice flanges.jpeg';
import img_as_long_weld_neck from '../assets/types of product/flanges/alloy steel types/long weld neck.jpeg';
import img_as_spectacle_blind from '../assets/types of product/flanges/alloy steel types/spectackle blind flanges.jpeg';
import img_as_reducing from '../assets/types of product/flanges/alloy steel types/reducing flanes.jpeg';
import img_as_expander from '../assets/types of product/flanges/alloy steel types/expander flanges.jpeg';
import img_as_elbow from '../assets/types of product/flanges/alloy steel types/elbow flanges.jpeg';
import img_as_cast from '../assets/types of product/flanges/alloy steel types/cast.jpeg';
import img_as_square from '../assets/flanges/types/alloy-steel-square-flanges.jpg';

// Authentic Inconel product imagery (from dedicated project asset collection)
import img_inc_threaded from '../assets/types of product/flanges/iconel types/threaded.jpeg';
import img_inc_weld_neck from '../assets/types of product/flanges/iconel types/weld neck.jpeg';
import img_inc_slip_on from '../assets/types of product/flanges/iconel types/slip on.jpeg';
import img_inc_blind from '../assets/types of product/flanges/iconel types/blind.jpeg';
import img_inc_socket_weld from '../assets/types of product/flanges/iconel types/socket wel fitting.jpeg';
import img_inc_lap_joint from '../assets/types of product/flanges/iconel types/lap joint flanges.jpeg';
import img_inc_orifice from '../assets/types of product/flanges/iconel types/orifice.jpeg';
import img_inc_long_weld_neck from '../assets/types of product/flanges/iconel types/long weld neck.jpeg';
import img_inc_spectacle_blind from '../assets/types of product/flanges/iconel types/specktackle.jpeg';
import img_inc_reducing from '../assets/types of product/flanges/iconel types/reducing.jpeg';
import img_inc_expander from '../assets/types of product/flanges/iconel types/expander.jpeg';
import img_inc_square from '../assets/types of product/flanges/iconel types/sqaure.jpeg';
import img_inc_elbow from '../assets/types of product/flanges/iconel types/elbow.jpeg';
import img_inc_cast from '../assets/types of product/flanges/iconel types/cast.jpeg';

// Authentic Hastelloy product imagery
import img_has_threaded from '../assets/flanges/types/hastelloy-threaded-flanges.jpg';
import img_has_weld_neck from '../assets/flanges/types/hastelloy-weld-neck-flanges.jpg';
import img_has_slip_on from '../assets/flanges/types/hastelloy-slip-on-flanges.jpg';
import img_has_blind from '../assets/flanges/types/hastelloy-blind-flanges.jpg';
import img_has_socket_weld from '../assets/flanges/types/hastelloy-socket-weld-flanges.jpg';
import img_has_lap_joint from '../assets/flanges/types/hastelloy-lap-joint-flanges.jpg';
import img_has_orifice from '../assets/flanges/types/hastelloy-orifice-flanges.jpg';
import img_has_long_weld_neck from '../assets/flanges/types/hastelloy-long-weld-neck-flanges.jpg';
import img_has_spectacle_blind from '../assets/flanges/types/hastelloy-spectacle-blind-flanges.jpg';
import img_has_reducing from '../assets/flanges/types/hastelloy-reducing-flanges.jpg';
import img_has_expander from '../assets/flanges/types/hastelloy-expander-flanges.jpg';
import img_has_square from '../assets/flanges/types/hastelloy-square-flanges.jpg';
import img_has_elbow from '../assets/flanges/types/hastelloy-elbow-flanges.jpg';
import img_has_cast from '../assets/flanges/types/hastelloy-cast-flanges.jpg';

// Authentic Monel product imagery
import img_monel_threaded from '../assets/flanges/types/monel-threaded-flanges.jpg';
import img_monel_weld_neck from '../assets/flanges/types/monel-weld-neck-flanges.jpg';
import img_monel_slip_on from '../assets/flanges/types/monel-slip-on-flanges.jpg';
import img_monel_blind from '../assets/flanges/types/monel-blind-flanges.jpg';
import img_monel_socket_weld from '../assets/flanges/types/monel-socket-weld-flanges.jpg';
import img_monel_lap_joint from '../assets/flanges/types/monel-lap-joint-flanges.jpg';
import img_monel_orifice from '../assets/flanges/types/monel-orifice-flanges.jpg';
import img_monel_long_weld_neck from '../assets/flanges/types/monel-long-weld-neck-flanges.jpg';
import img_monel_spectacle_blind from '../assets/flanges/types/monel-spectacle-blind-flanges.jpg';
import img_monel_reducing from '../assets/flanges/types/monel-reducing-flanges.jpg';
import img_monel_expander from '../assets/flanges/types/monel-expander-flanges.jpg';
import img_monel_square from '../assets/flanges/types/monel-square-flanges.jpg';
import img_monel_elbow from '../assets/flanges/types/monel-elbow-flanges.jpg';
import img_monel_cast from '../assets/flanges/types/monel-cast-flanges.jpg';

// Authentic Copper Nickel product imagery
import img_cuni_threaded from '../assets/flanges/types/cuni-threaded-flanges.jpg';
import img_cuni_weld_neck from '../assets/flanges/types/cuni-weld-neck-flanges.jpg';
import img_cuni_slip_on from '../assets/flanges/types/cuni-slip-on-flanges.jpg';
import img_cuni_blind from '../assets/flanges/types/cuni-blind-flanges.jpg';
import img_cuni_socket_weld from '../assets/flanges/types/cuni-socket-weld-flanges.jpg';
import img_cuni_lap_joint from '../assets/flanges/types/cuni-lap-joint-flanges.jpg';
import img_cuni_orifice from '../assets/flanges/types/cuni-orifice-flanges.jpg';
import img_cuni_long_weld_neck from '../assets/flanges/types/cuni-long-weld-neck-flanges.jpg';
import img_cuni_spectacle_blind from '../assets/flanges/types/cuni-spectacle-blind-flanges.jpg';
import img_cuni_reducing from '../assets/flanges/types/cuni-reducing-flanges.jpg';
import img_cuni_expander from '../assets/flanges/types/cuni-expander-flanges.jpg';
import img_cuni_square from '../assets/flanges/types/cuni-square-flanges.jpg';
import img_cuni_elbow from '../assets/flanges/types/cuni-elbow-flanges.jpg';
import img_cuni_cast from '../assets/flanges/types/cuni-cast-flanges.jpg';

// Authentic Titanium product imagery
import img_ti_threaded from '../assets/flanges/types/titanium-threaded-flanges.jpg';
import img_ti_weld_neck from '../assets/flanges/types/titanium-weld-neck-flanges.jpg';
import img_ti_slip_on from '../assets/flanges/types/titanium-slip-on-flanges.jpg';
import img_ti_blind from '../assets/flanges/types/titanium-blind-flanges.jpg';
import img_ti_socket_weld from '../assets/flanges/types/titanium-socket-weld-flanges.jpg';
import img_ti_lap_joint from '../assets/flanges/types/titanium-lap-joint-flanges.jpg';
import img_ti_orifice from '../assets/flanges/types/titanium-orifice-flanges.jpg';
import img_ti_long_weld_neck from '../assets/flanges/types/titanium-long-weld-neck-flanges.jpg';
import img_ti_spectacle_blind from '../assets/flanges/types/titanium-spectacle-blind-flanges.jpg';
import img_ti_reducing from '../assets/flanges/types/titanium-reducing-flanges.jpg';
import img_ti_expander from '../assets/flanges/types/titanium-expander-flanges.jpg';
import img_ti_square from '../assets/flanges/types/titanium-square-flanges.jpg';
import img_ti_elbow from '../assets/flanges/types/titanium-elbow-flanges.jpg';
import img_ti_cast from '../assets/flanges/types/titanium-cast-flanges.jpg';

// Authentic Nickel Alloy product imagery
import img_ni_threaded from '../assets/flanges/types/nickel-threaded-flanges.jpg';
import img_ni_weld_neck from '../assets/flanges/types/nickel-weld-neck-flanges.jpg';
import img_ni_slip_on from '../assets/flanges/types/nickel-slip-on-flanges.jpg';
import img_ni_blind from '../assets/flanges/types/nickel-blind-flanges.jpg';
import img_ni_socket_weld from '../assets/flanges/types/nickel-socket-weld-flanges.jpg';
import img_ni_lap_joint from '../assets/flanges/types/nickel-lap-joint-flanges.jpg';
import img_ni_orifice from '../assets/flanges/types/nickel-orifice-flanges.jpg';
import img_ni_long_weld_neck from '../assets/flanges/types/nickel-long-weld-neck-flanges.jpg';
import img_ni_spectacle_blind from '../assets/flanges/types/nickel-spectacle-blind-flanges.jpg';
import img_ni_reducing from '../assets/flanges/types/nickel-reducing-flanges.jpg';
import img_ni_expander from '../assets/flanges/types/nickel-expander-flanges.jpg';
import img_ni_square from '../assets/flanges/types/nickel-square-flanges.jpg';
import img_ni_elbow from '../assets/flanges/types/nickel-elbow-flanges.jpg';
import img_ni_cast from '../assets/flanges/types/nickel-cast-flanges.jpg';

/**
 * 12 Core Flange Types Metadata
 */
export const CORE_FLANGE_TYPES = [
  {
    number: '01',
    id: 'threaded-flange',
    slug: 'threaded-flange',
    aliases: ['threaded', 'screwed-flange', 'screwed', 'thrf'],
    name: 'Threaded Flange',
    shortCode: 'THRF',
    technicalDesignation: 'Threaded / Screwed Flange (THRF)',
    categoryClassification: 'Standard ASME B16.5 Flange',
    defaultImage: img_threaded,
    shortDesc: 'Internally threaded companion pipe flanges engineered for rapid mechanical jointing without welding in low-pressure and hazardous environments.',
    whatIs: 'A Threaded Flange (also known as a Screwed Flange) features internal female pipe threads (conforming to ASME B1.20.1 NPT or ISO 7-1 BSPT) within its bore that thread directly onto male external pipe threads. It enables pipeline assembly without welding.',
    designAndFeatures: 'Manufactured with tapered or parallel internal threads precision-cut into the bore. The flange outer diameter, bolt circle, and bolt holes adhere to ASME B16.5, allowing standard bolting and gasket sealing.',
    howItConnects: 'Screws directly onto externally threaded pipe ends. A pipe thread sealant or PTFE tape is applied to the threads before torquing to achieve a hermetic seal without applying heat.',
    purpose: 'Designed for installations where welding is hazardous, inconvenient, or prohibited by safety codes (e.g., explosive chemical environments, volatile gas lines, or maintenance turnarounds).',
    applications: [
      'Low-pressure utility piping and cooling water circuits',
      'Explosive or flammable hydrocarbon zones where open-flame welding is prohibited',
      'Small diameter plumbing and compressed air distribution',
      'Galvanized piping networks where welding would burn off protective zinc coatings'
    ],
    standardSizes: '1/2" NB to 4" NB (DN15 to DN100)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'ASME B16.5, ASME B1.20.1 (NPT), BS 21 / ISO 7-1 (BSPT)',
    manufacturingMethod: 'Closed-die drop forging followed by CNC turning and thread tapping'
  },
  {
    number: '02',
    id: 'weld-neck-flange',
    slug: 'weld-neck-flange',
    aliases: ['weld-neck', 'welding-neck', 'wnrf'],
    name: 'Weld Neck Flange',
    shortCode: 'WNRF',
    technicalDesignation: 'Weld Neck Flange (WNRF)',
    categoryClassification: 'Standard ASME B16.5 Flange',
    defaultImage: img_weld_neck,
    shortDesc: 'High-integrity circular forged flange featuring a long tapered reinforcement hub designed for full-penetration butt-welding to matching pipe schedules.',
    whatIs: 'A Weld Neck Flange (WNRF) is recognized by its long tapered hub that provides an essential gradual transition of wall thickness from the flange ring down to the matching pipe wall.',
    designAndFeatures: 'The tapered hub distributes mechanical and thermal stresses evenly, minimizing localized bending moments at the joint. The bore is machined to match the exact inside diameter (schedule) of the mating pipe, ensuring seamless laminar flow without turbulent pockets.',
    howItConnects: 'Joined to the pipeline via a single full-penetration V-groove circumferential butt weld at the beveled hub end, followed by 100% radiographic or ultrasonic volumetric non-destructive testing.',
    purpose: 'The industry-standard choice for severe, critical, and cyclic piping services subjected to elevated pressures, thermal fluctuations, sub-zero cryogenic shock, and aggressive fluids.',
    applications: [
      'High-pressure steam headers and boiler feed pipelines',
      'Petrochemical refinery distillation and hydrocracking loops',
      'Offshore oil & gas subsea manifolds and riser tie-ins',
      'Cryogenic LNG transfer piping and nuclear reactor auxiliary lines'
    ],
    standardSizes: '1/2" NB to 60" NB (DN15 to DN1500)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500# (PN10 to PN400)',
    applicableStandards: 'ASME B16.5, ASME B16.47 Series A & B, MSS SP-44, EN 1092-1 Type 11',
    manufacturingMethod: 'Closed-die drop forging, hot normalizing/quenching, precision CNC machining'
  },
  {
    number: '03',
    id: 'slip-on-flange',
    slug: 'slip-on-flange',
    aliases: ['slip-on', 'so-flange', 'sorf'],
    name: 'Slip-On Flange',
    shortCode: 'SORF',
    technicalDesignation: 'Slip-On Raised Face Flange (SORF)',
    categoryClassification: 'Standard ASME B16.5 Flange',
    defaultImage: img_slip_on,
    shortDesc: 'Low-profile companion flange bored slightly larger than pipe OD, allowing easy slide-over positioning and dual fillet-weld fabrication.',
    whatIs: 'A Slip-On Flange (SORF) has an internal diameter slightly larger than the outside diameter of the matching pipe. The pipe slips inside the flange bore prior to welding.',
    designAndFeatures: 'Engineered with a low hub that simplifies alignment and cut-to-length installation. Its lower material volume provides a lightweight, cost-effective alternative to weld neck flanges.',
    howItConnects: 'Secured to the pipe with two fillet welds: one external weld on the rear hub shoulder and one internal seal weld inside the flange face recessed roughly 1/16" from the gasket contact plane.',
    purpose: 'Offers fast, forgiving fit-up and cost-effective fabrication on low-to-medium pressure pipelines where mechanical fatigue and severe thermal cycles are absent.',
    applications: [
      'Cooling water loops and utility process lines',
      'Firewater ring headers and low-pressure steam delivery',
      'Tank farm loading/unloading manifolds',
      'HVAC chilled water circuits and industrial plumbing'
    ],
    standardSizes: '1/2" NB to 48" NB (DN15 to DN1200)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#',
    applicableStandards: 'ASME B16.5, ASME B16.47 Series A & B, EN 1092-1 Type 12',
    manufacturingMethod: 'Forged disc piercing and precision boring on multi-axis CNC lathes'
  },
  {
    number: '04',
    id: 'square-flange',
    slug: 'square-flange',
    aliases: ['square', 'sq-flange', 'hydraulic-square-flange'],
    name: 'Square Flange',
    shortCode: 'SQF',
    technicalDesignation: 'Hydraulic High-Pressure Square Flange (JIS B2291 / ISO 6164)',
    categoryClassification: 'Special Hydraulic High-Pressure Flange',
    defaultImage: img_square,
    shortDesc: 'Heavy-gauge four-bolt square profile companion flange specifically manufactured for high-pressure hydraulic oil systems and compact manifold blocks.',
    whatIs: 'A Square Flange is a specialty four-bolt flanged fitting standardized according to JIS B2291, JIS B2290, and ISO 6164. Unlike circular ASME flanges, it features a square external perimeter.',
    designAndFeatures: 'Engineered with a 4-bolt symmetrical square bolt pattern and integrated O-ring groove face to ensure zero-leak sealing under severe hydraulic pulsations up to 350 kgf/cm² (5000 PSI).',
    howItConnects: 'Joined to high-pressure seamless tubing via socket weld (SHAB type) or butt weld (SSA type) ends, with 4 high-tensile socket-head cap screws clamping the mating faces against an elastomeric O-ring.',
    purpose: 'Standard in compact hydraulic power units, plastic injection molding machinery, forging presses, and mobile marine hydraulics where space is limited and pressure exceeds normal pipe class ratings.',
    applications: [
      'High-pressure hydraulic power packs and valve manifolds',
      'Steel mill rolling equipment and heavy extrusion presses',
      'Shipboard deck crane winches and steering gear hydraulics',
      'Offshore drilling BOP hydraulic accumulator lines'
    ],
    standardSizes: '1/4" to 6" (10A to 150A / ISO 6164 DN13 to DN100)',
    standardPressures: '210 kgf/cm² (21 MPa), 280 kgf/cm², 350 kgf/cm² (ISO 6164 420 Bar)',
    applicableStandards: 'JIS B2291, JIS B2290, ISO 6164, SAE J518-like Square Code',
    manufacturingMethod: 'High-density square billet closed-die hot forging and 4-axis CNC milling'
  },
  {
    number: '05',
    id: 'orifice-flange',
    slug: 'orifice-flange',
    aliases: ['orifice', 'orifice-flanges', 'metering-flange'],
    name: 'Orifice Flange',
    shortCode: 'ORIF',
    technicalDesignation: 'Orifice Metering Flange Union (ASME B16.36)',
    categoryClassification: 'Engineered Differential Pressure Measurement Flange',
    defaultImage: img_orifice,
    shortDesc: 'Precision-tapped flange pairs equipped with radial pressure sensing ports and jack screws designed to hold differential pressure orifice flowmeter plates.',
    whatIs: 'An Orifice Flange is a specialized flange union conforming to ASME B16.36 designed specifically to house an orifice metering plate for measuring fluid flow rates in pipelines.',
    designAndFeatures: 'Supplied in matched pairs with radial 1/2" NPT or socket-weld tapping holes drilled through the flange rim directly into the bore. Fitted with heavy jacking screws in the flange rim to easily spread the joint apart during orifice plate replacement.',
    howItConnects: 'Installed into the pipeline via butt-welding (Weld Neck Orifice) or slip-on welding, sandwiching an engineered orifice plate and calibrated metering gaskets between the two tapped flanges.',
    purpose: 'Enables accurate measurement of volumetric flow rate based on Bernoulli’s differential pressure principle across gases, steam, water, and crude hydrocarbons.',
    applications: [
      'Fiscal custody transfer metering stations',
      'Natural gas transmission pipeline flow monitoring',
      'Refinery steam production and boiler efficiency measurement',
      'Chemical plant reactor feed dosing manifolds'
    ],
    standardSizes: '1" NB to 24" NB (DN25 to DN600)',
    standardPressures: 'Class 300#, 600#, 900#, 1500#, 2500# (ASME B16.36 minimum Class 300#)',
    applicableStandards: 'ASME B16.36, AGA Report No. 3, ISO 5167, API MPMS Chapter 14.3',
    manufacturingMethod: 'Forged ring roughing, precision coordinate drilling/tapping of ports, and match-marking'
  },
  {
    number: '06',
    id: 'elbow-flange',
    slug: 'elbow-flange',
    aliases: ['elbow', 'elboflange', '90-deg-flange', 'elbow-type-flange'],
    name: 'Elbow Flange / Elboflange',
    shortCode: 'ELBF',
    technicalDesignation: 'Elboflange / 90° Contoured Branch Flange (MSS SP-97 / ASME B16.5)',
    categoryClassification: 'Engineered Contoured Branch Connection Flange',
    defaultImage: img_elbow,
    shortDesc: 'Monolithic 90-degree curved branch connection integrating a contoured butt-weld fitting directly with a standard bolted flange face.',
    whatIs: 'An Elbow Flange (commercially termed an Elboflange or Flanged Branch Fitting) combines a 90° contoured elbow branch body directly with an integral ASME B16.5 bolted flange face in a single monolithic forging.',
    designAndFeatures: 'Eliminates multiple separate welds: instead of cutting a pipe, welding an elbowlet/sockolet, welding a pipe spool, and welding a flange, the single-piece Elboflange mounts directly onto the heel of a 90° pipe elbow.',
    howItConnects: 'The contoured curved base is butt-welded directly onto an existing piping elbow or manifold line, leaving the flanged face pointing perpendicularly for instrument tie-ins or branch valves.',
    purpose: 'Drastically reduces weld joints, non-destructive examination (NDE) costs, and stress concentrations on tight-space manifold bends and offshore skid piping.',
    applications: [
      'Instrument taps on the heel or throat of 90° pipe elbows',
      'Offshore production skid compact branch manifolds',
      'Drain and vent connections on large diameter pump headers',
      'Thermowell and sampling nozzle insertions in high-velocity piping'
    ],
    standardSizes: 'Run Size: 2" to 36" | Branch Size: 1/2" to 12" NB',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'MSS SP-97, ASME B16.5, ASME B31.3 Chapter IX',
    manufacturingMethod: 'Specialized contoured closed-die forging and 5-axis simultaneous CNC profiling'
  },
  {
    number: '07',
    id: 'reducing-flange',
    slug: 'reducing-flange',
    aliases: ['reducing', 'reducer-flange', 'red-flange'],
    name: 'Reducing Flange',
    shortCode: 'REDF',
    technicalDesignation: 'Reducing Flange (ASME B16.5 Table 6)',
    categoryClassification: 'Special Piping Transition Flange',
    defaultImage: img_reducing,
    shortDesc: 'Engineered flange designed to transition between differing pipe diameters without requiring a separate welded pipe reducer fitting.',
    whatIs: 'A Reducing Flange is designed to mate a smaller pipe size into a larger nominal flange connection. It features the outside diameter and bolt circle of a larger pipe size, but with a central bore tailored to a smaller pipe diameter.',
    designAndFeatures: 'Manufactured with standard ASME B16.5 outer dimensions and bolt circle matching the larger mating connection, but with the hub bore and facing contoured to the smaller pipe size.',
    howItConnects: 'Connected to the smaller pipe via threaded, slip-on, or butt-weld hubs, and bolted directly to the larger mating flange using standard bolt lengths.',
    purpose: 'Saves valuable piping envelope space and eliminates one complete circumferential weld joint by combining the function of a concentric pipe reducer and a flange into a single piece.',
    applications: [
      'Pump inlet and discharge nozzle piping transitions',
      'Flowmeter line step-downs and valve manifold tie-ins',
      'Space-constrained offshore modules and skid packaging',
      'Compressor interstage piping diameter transitions'
    ],
    standardSizes: 'From 2" x 1/2" NB up to 36" x 24" NB',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'ASME B16.5 Table 6, ASME B16.47, EN 1092-1',
    manufacturingMethod: 'Solid forging with precision multi-stage boring and facing'
  },
  {
    number: '08',
    id: 'expander-flange',
    slug: 'expander-flange',
    aliases: ['expander', 'expanding-flange', 'expanding-type-flange'],
    name: 'Expander Flange',
    shortCode: 'EXPF',
    technicalDesignation: 'Expander / Expanding Flange (MSS SP-65 / ASME B16.5)',
    categoryClassification: 'Engineered Expanding Nozzle Flange',
    defaultImage: img_expander,
    shortDesc: 'A weld-neck flange featuring an integrated conical expander hub that steps up one or two pipe sizes to connect directly to valves and equipment nozzles.',
    whatIs: 'An Expander Flange (often called an Expanding Flange) is a specialty weld neck flange whose neck transitions outward into a larger nominal flange face (e.g. 2" pipe welding end expanding to a 3" flange face).',
    designAndFeatures: 'Manufactured with an integrated diverging conical transition hub per MSS SP-65. It increases pipe diameter immediately at the flanged connection point without adding an extra welded reducer.',
    howItConnects: 'The smaller hub end is butt-welded directly to the upstream process pipe, while the larger flanged face bolts directly to valves, pumps, compressors, or vessels.',
    purpose: 'Commonly specified to connect pipelines to valves and pumps that have larger inlet/discharge ports than the upstream pipeline, saving weight and eliminating a weld.',
    applications: [
      'Direct connection to larger flanged ball valves, gate valves, and check valves',
      'Centrifugal pump suction and discharge lines to minimize inlet cavitation',
      'Turbine exhaust and compressor inlet piping',
      'Compact offshore topsides where piping spool lengths must be minimized'
    ],
    standardSizes: 'Pipe End: 1/2" to 24" | Flange End: 1" to 30" (e.g. 2"x3", 3"x4", 4"x6", 6"x8")',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'MSS SP-65, ASME B16.5, ASME Section VIII',
    manufacturingMethod: 'Heavy closed-die forging with conical internal taper CNC profiling'
  },
  {
    number: '09',
    id: 'socket-weld-flange',
    slug: 'socket-weld-flange',
    aliases: ['socket-weld', 'sw-flange', 'swrf'],
    name: 'Socket Weld Flange',
    shortCode: 'SWRF',
    technicalDesignation: 'Socket Weld Raised Face Flange (SWRF)',
    categoryClassification: 'Standard ASME B16.5 Flange',
    defaultImage: img_socket_weld,
    shortDesc: 'Companion flange with an internal counter-bore shoulder designed for small-bore, high-pressure piping with a single external fillet weld.',
    whatIs: 'A Socket Weld Flange (SWRF) is designed for small-bore high-pressure piping. It features an internal socket bore with a shoulder that stops the pipe insertion at an exact depth.',
    designAndFeatures: 'The pipe end rests inside the socket with an approximate 1/16" (1.6mm) expansion clearance gap maintained before welding to prevent thermal stresses during weld solidification.',
    howItConnects: 'Secured with a single external circumferential fillet weld around the outer hub shoulder. Smooth internal bore minimizes fluid flow resistance.',
    purpose: 'Engineered for small-bore pipelines (typically 2" NB and under) subjected to elevated pressure where butt-weld fit-up would be difficult on small pipe diameters.',
    applications: [
      'Chemical processing small-bore toxic/hazardous utility lines',
      'High-pressure hydraulic and steam tracing manifolds',
      'Instrumentation valve racks and bypass piping',
      'Oil refinery sampling stations and lube oil circulating systems'
    ],
    standardSizes: '1/2" NB to 3" NB (DN15 to DN80, predominantly 1/2" to 2")',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#',
    applicableStandards: 'ASME B16.5, BS 3293, DIN 2633',
    manufacturingMethod: 'Precision forging and multi-step CNC counter-boring'
  },
  {
    number: '10',
    id: 'cast-flange',
    slug: 'cast-flange',
    aliases: ['cast', 'cast-steel-flange', 'cstf'],
    name: 'Cast Flange',
    shortCode: 'CSTF',
    technicalDesignation: 'Cast Steel / Cast Iron Flange (ASTM A216 WCB / ASTM A351 CF8M / MSS SP-51)',
    categoryClassification: 'Cast Process Piping Flange',
    defaultImage: img_cast,
    shortDesc: 'Flange manufactured via precision sand casting or investment casting for low-pressure municipal utilities, valve bodies, and pump connections.',
    whatIs: 'A Cast Flange is produced by pouring molten metal into precision sand or investment molds rather than mechanical forging, making it ideal for low-pressure utilities and complex pump casings.',
    designAndFeatures: 'Features a cast metallic exterior finish, machined gasket sealing face, and drilled bolt holes. Conforms strictly to MSS SP-51 and ASME B16.1 / B16.24 standards.',
    howItConnects: 'Available in slip-on, threaded, or integral cast configurations that bolt to mating flanges with standard gaskets.',
    purpose: 'Provides an economical solution for low-pressure, non-cyclic services where heavy forged pressure-retaining properties are not required by design codes.',
    applications: [
      'Municipal water distribution and sewage treatment works',
      'Low-pressure HVAC cooling towers and condenser loops',
      'Pump casing suction and discharge companion flanges',
      'Agricultural irrigation and industrial washwater pipelines'
    ],
    standardSizes: '1/2" NB to 36" NB (DN15 to DN900)',
    standardPressures: 'Class 125#, 150# (PN6, PN10, PN16)',
    applicableStandards: 'ASTM A216 WCB, ASTM A351 CF8M, MSS SP-51, ASME B16.1, ASME B16.5 (cast equivalent)',
    manufacturingMethod: 'Precision sand / shell mold casting, heat treatment, and CNC face turning'
  },
  {
    number: '11',
    id: 'blind-flange',
    slug: 'blind-flange',
    aliases: ['blind', 'blrf', 'blanking-flange'],
    name: 'Blind Flange',
    shortCode: 'BLRF',
    technicalDesignation: 'Blind Flange (BLRF)',
    categoryClassification: 'Standard ASME B16.5 Flange',
    defaultImage: img_blind,
    shortDesc: 'Solid circular forged disk with standard perimeter bolt holes and no central bore, manufactured to seal pipe ends and pressure vessel inspection ports.',
    whatIs: 'A Blind Flange is a solid circular plate without a central opening, drilled with the standard bolt circle of its matching nominal pipe size and pressure class.',
    designAndFeatures: 'Unlike other flanges, a blind flange experiences significant bending stresses at its center due to fluid pressure pushing against the flat surface, requiring heavy engineered plate thickness.',
    howItConnects: 'Bolted directly against a companion flange with a standard gasket sandwiched between faces, completely blocking fluid flow.',
    purpose: 'Used to blank off the end of piping headers, provide future line expansion tie-in points, and serve as temporary test seals during hydrostatic pressure testing.',
    applications: [
      'Dead-end isolation for refinery and chemical plant headers',
      'Pressure vessel cleanout, maintenance, and inspection nozzles',
      'Hydrostatic testing blanking covers for newly fabricated piping',
      'Offshore export manifold future tie-in termination points'
    ],
    standardSizes: '1/2" NB to 60" NB (DN15 to DN1500)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500# (PN6 to PN400)',
    applicableStandards: 'ASME B16.5, ASME B16.47 Series A & B, EN 1092-1 Type 05, DIN 2527',
    manufacturingMethod: 'Closed-die solid forging or ultrasonic-tested heavy plate trepanning'
  },
  {
    number: '12',
    id: 'long-weld-neck-flange',
    slug: 'long-weld-neck-flange',
    aliases: ['long-weld-neck', 'lwn', 'long-neck', 'nozzle-flange'],
    name: 'Long Weld Neck Flange',
    shortCode: 'LWN',
    technicalDesignation: 'Long Weld Neck Flange / Nozzle Flange (LWN / HB)',
    categoryClassification: 'Special Self-Reinforced Pressure Vessel Flange',
    defaultImage: img_long_weld_neck,
    shortDesc: 'Heavy-duty monolithic nozzle flange featuring an elongated, heavy-wall cylindrical barrel designed for direct full-penetration welding into pressure vessel shells.',
    whatIs: 'A Long Weld Neck Flange (LWN), frequently termed a Nozzle Flange, features an extended cylindrical barrel without a hub taper, acting as a self-reinforcing nozzle neck.',
    designAndFeatures: 'Manufactured with an extended straight or heavy barrel (HB type) neck. The neck wall thickness is reinforced to eliminate the need for separate reinforcing pads (re-pads) on pressure vessel shells.',
    howItConnects: 'The extended barrel is welded directly into the shell or dished head of a pressure vessel, column, or heat exchanger with a full-penetration nozzle weld.',
    purpose: 'Serves as an engineered one-piece nozzle connection for process columns, reactors, boilers, and heat exchangers operating under high pressure and elevated temperatures.',
    applications: [
      'Petrochemical pressure vessel and distillation column nozzles',
      'Shell-and-tube heat exchanger channel heads and shell inlet/outlets',
      'High-pressure steam boiler drums and economizer headers',
      'Refinery catalytic reactors and desulfurization vessels'
    ],
    standardSizes: '1/2" NB to 24" NB (Lengths: 9", 12", 18", 24", 36" or Custom)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'ASME B16.5, ASME Section VIII Div 1 & 2 Nozzle Rules',
    manufacturingMethod: 'Monolithic closed-die forging with gun-drilled or deep CNC bored barrel'
  },
  {
    number: '13',
    id: 'lap-joint-flange',
    slug: 'lap-joint-flange',
    aliases: ['lap-joint', 'ljrf', 'lap-flange', 'loose-flange', 'van-stone-flange'],
    name: 'Lap Joint Flange',
    shortCode: 'LJRF',
    technicalDesignation: 'Lap Joint Flange (LJRF) with Matching Stub End',
    categoryClassification: 'Standard ASME B16.5 Loose Backing Flange',
    defaultImage: img_lap_joint,
    shortDesc: 'Loose backing companion flange featuring a precision radiused bore shoulder engineered to clamp over ASME B16.9 lap joint stub end fittings without welding to the pipe.',
    whatIs: 'A Lap Joint Flange (LJRF) slides directly over the pipe and is paired with a Lap Joint Stub End fitting. The flange itself is never welded to the pipe, remaining free to rotate for rapid bolt hole alignment.',
    designAndFeatures: 'Manufactured with a curved internal radius at the bore corner to fit smoothly against the matching radiused hub of the stub end. Because only the stub end comes into contact with the process fluid, an economical carbon steel lap joint flange can be paired with high-alloy or stainless steel stub ends.',
    howItConnects: 'The matching stub end is butt-welded to the pipe run, while the lap joint flange slips freely behind the stub end shoulder and is clamped against the mating flange with standard perimeter bolting.',
    purpose: 'Engineered for piping systems requiring frequent dismantling for inspection, cleaning, or maintenance, and for reducing project costs in expensive stainless steel and exotic nickel alloy pipelines.',
    applications: [
      'Chemical processing lines requiring rapid maintenance dismantling',
      'Food, beverage, and pharmaceutical sanitary CIP washdown lines',
      'Corrosive slurry pipelines where frequent pipe rotation is required to distribute wall wear',
      'Confined space module tie-ins where aligning bolt holes is challenging'
    ],
    standardSizes: '1/2" NB to 24" NB (DN15 to DN600)',
    standardPressures: 'Class 150#, 300#, 600#',
    applicableStandards: 'ASME B16.5, ASME B16.9 (Stub End), EN 1092-1 Type 02, DIN 2642',
    manufacturingMethod: 'Closed-die drop forging with precision CNC bore radiusing and face turning'
  },
  {
    number: '14',
    id: 'spectacle-blind-flange',
    slug: 'spectacle-blind-flange',
    aliases: ['spectacle-blind', 'figure-8-blind', 'spbf', 'figure-8', 'paddle-blind', 'line-blind'],
    name: 'Spectacle Blind Flange',
    shortCode: 'SPBF',
    technicalDesignation: 'Spectacle Blind / Figure-8 Line Blanking Device (ASME B16.48)',
    categoryClassification: 'Piping Line Blinding Device',
    defaultImage: img_spectacle_blind,
    shortDesc: 'Figure-8 mechanical safety line blinding device combining a solid blank disk and an open spacer ring connected by a steel web handle for positive, visual pipeline isolation.',
    whatIs: 'A Spectacle Blind (standardized under ASME B16.48) is a safety device named for its resemblance to a pair of eyeglasses (figure-8). It consists of two circular steel disks—one solid blank disk and one open spacer ring—connected by a center bridge.',
    designAndFeatures: 'Precision machined with raised faces on both the blank and spacer sections. A handle hole in the center of the web bridge facilitates pivoting the blind to change piping flow status from open to positive shut-off.',
    howItConnects: 'Sandwiched between two ASME B16.5 companion flanges with gaskets. To isolate flow, the bolts are loosened, the flange joint is jacked open, and the blind is rotated so the solid blank disk blocks the line.',
    purpose: 'Provides 100% positive, visual, and tamper-proof mechanical line isolation during turnaround maintenance, inspections, and emergency shutdowns without removing pipe spools.',
    applications: [
      'Refinery turnaround positive isolation headers',
      'Petrochemical chemical reactor feed and discharge lines',
      'Crude oil storage tank farm loading/unloading manifolds',
      'Offshore export manifold maintenance isolation'
    ],
    standardSizes: '1/2" NB to 24" NB (DN15 to DN600)',
    standardPressures: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#',
    applicableStandards: 'ASME B16.48, ASME B16.5, API 598',
    manufacturingMethod: 'Precision CNC waterjet profiling from heavy forged plate followed by multi-pass CNC facing'
  }
];

/**
 * Materials Database with Specific Grade Mappings and Supported Flange Types
 */
export const FLANGE_MATERIALS = [
  {
    id: 'stainless-steel',
    slug: 'stainless-steel',
    urlSlug: 'stainless-steel',
    altSlugs: ['stainless-steel-flanges', 'ss', 'stainless'],
    name: 'Stainless Steel',
    title: 'Stainless Steel Flanges',
    standard: 'ASTM A182 / ASME SA182',
    primaryGrades: 'F304, F304L, F316, F316L, F316Ti, F310, F317L, F321, 904L',
    materialDesc: 'Austenitic and refractory stainless steel flanges delivering superior corrosion resistance in acidic, chloride, and sanitary media.',
    // All 14 types genuinely supported for Stainless Steel
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    // Material-specific image overrides per type
    typeImages: {
      'threaded-flange': img_threaded,
      'weld-neck-flange': img_weld_neck,
      'slip-on-flange': img_slip_on,
      'blind-flange': img_blind,
      'socket-weld-flange': img_socket_weld,
      'lap-joint-flange': img_lap_joint,
      'orifice-flange': img_orifice,
      'long-weld-neck-flange': img_long_weld_neck,
      'spectacle-blind-flange': img_spectacle_blind,
      'reducing-flange': img_reducing,
      'expander-flange': img_expander,
      'square-flange': img_square,
      'elbow-flange': img_elbow,
      'cast-flange': img_cast
    },
    // Authentic Material Grades from Existing Project Catalog
    grades: [
      {
        id: 'ss-304-304l',
        slug: '304l',
        aliases: ['304', '304l', 'ss-304', 'ss-304l', 'ss-304-304l-flanges'],
        name: 'SS 304 / 304L',
        shortName: '304 / 304L',
        code: 'ASTM A182 F304 / F304L Dual Certified',
        uns: 'UNS S30400 / UNS S30403',
        din: '1.4301 / 1.4307',
        standard: 'ASTM A182 / ASME SA182, ASME B16.5',
        shortDesc: 'Dual-certified 18/8 low-carbon stainless forged flanges offering versatile weldability and general corrosion resistance.',
        fullDesc: 'Low carbon 304/304L stainless steel forged flanges formulated to eliminate carbide precipitation during site welding. Engineered for sanitary fluid handling, chemical lines, and municipal potable water circuits.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'square-flange',
          'orifice-flange',
          'elbow-flange',
          'reducing-flange',
          'expander-flange',
          'socket-weld-flange',
          'cast-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'ss-316-316l',
        slug: '316l',
        aliases: ['316', '316l', 'ss-316', 'ss-316l', 'ss-316-316l-316h-flanges'],
        name: 'SS 316 / 316L',
        shortName: '316 / 316L',
        code: 'ASTM A182 F316 / F316L Molybdenum Grade',
        uns: 'UNS S31600 / UNS S31603',
        din: '1.4401 / 1.4404',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: 'Marine-grade molybdenum-enhanced stainless flanges resisting pitting and crevice corrosion in chloride media.',
        fullDesc: 'High-integrity 2.0–3.0% Molybdenum bearing austenitic stainless steel forged flanges providing superior resistance to chloride pitting, coastal atmospheres, and organic acids.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'square-flange',
          'orifice-flange',
          'elbow-flange',
          'reducing-flange',
          'expander-flange',
          'socket-weld-flange',
          'cast-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'ss-316ti',
        slug: '316ti',
        aliases: ['316ti', 'ss-316ti', 'ss-316ti-flanges'],
        name: 'SS 316Ti',
        shortName: '316Ti',
        code: 'ASTM A182 F316Ti Titanium Stabilized',
        uns: 'UNS S31635',
        din: '1.4571 (X6CrNiMoTi17-12-2)',
        standard: 'ASTM A182, DIN EN 1092-1, ASME B16.5',
        shortDesc: 'Titanium-stabilized grade preventing intergranular corrosion under prolonged elevated thermal stress.',
        fullDesc: 'Stabilized austenitic stainless steel flanges formulated with titanium additions to lock chromium into solution, preventing sensitization during sustained exposure up to 800°C.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'orifice-flange',
          'reducing-flange',
          'socket-weld-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'ss-310-310s',
        slug: '310s',
        aliases: ['310', '310s', 'ss-310', 'ss-310s', 'ss-310-310s-flanges'],
        name: 'SS 310 / 310S',
        shortName: '310 / 310S',
        code: 'ASTM A182 F310 / F310S 25Cr-20Ni High Heat',
        uns: 'UNS S31000 / UNS S31008',
        din: '1.4841 / 1.4845',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: 'High-chromium refractory flanges delivering continuous oxidation resistance in furnaces up to 1150°C.',
        fullDesc: 'High-alloy 25% Chromium and 20% Nickel refractory forged flanges delivering remarkable resistance to cyclic thermal scaling, carburization, and furnace atmospheres.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'reducing-flange',
          'socket-weld-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'ss-317-317l',
        slug: '317l',
        aliases: ['317', '317l', 'ss-317', 'ss-317l', 'ss-317-317l-flanges'],
        name: 'SS 317 / 317L',
        shortName: '317 / 317L',
        code: 'ASTM A182 F317 / F317L High Moly 3-4% Mo',
        uns: 'UNS S31700 / UNS S31703',
        din: '1.4438',
        standard: 'ASTM A182, ASME B16.5',
        shortDesc: 'High molybdenum stainless flanges resisting aggressive sulfuric, sulfurous, and phosphoric acid attack.',
        fullDesc: 'Molybdenum-enriched 317/317L forged flanges formulated for enhanced creep rupture strength and maximum protection against localized pitting in severe acid scrubbers and paper digestion tanks.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'orifice-flange',
          'reducing-flange',
          'socket-weld-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'ss-321-321h',
        slug: '321',
        aliases: ['321', '321h', 'ss-321', 'ss-321h', 'ss-321-321h-flanges'],
        name: 'SS 321 / 321H',
        shortName: '321 / 321H',
        code: 'ASTM A182 F321 / F321H Titanium Stabilized',
        uns: 'UNS S32100 / UNS S32109',
        din: '1.4541 / 1.4878',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: 'Titanium-stabilized heat-resistant flanges for sustained high-temperature steam and refinery piping.',
        fullDesc: 'Austenitic stainless steel forged flanges tailored for high-temperature service between 427°C and 816°C with excellent creep-rupture performance.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'reducing-flange',
          'socket-weld-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      }
    ]
  },
  {
    id: 'carbon-steel',
    slug: 'carbon-steel',
    urlSlug: 'carbon-steel',
    altSlugs: ['carbon-steel-flanges', 'cs', 'carbon'],
    name: 'Carbon Steel',
    title: 'Carbon Steel Flanges',
    standard: 'ASTM A105, ASTM A350 LF2, ASTM A694, ASTM A181',
    primaryGrades: 'A105, A350 LF2 Class 1, A694 F42/F52/F60/F65/F70, A181 Class 60/70',
    materialDesc: 'Forged high-strength carbon steel flanges designed for ambient, high-temperature, and low-temperature impact service.',
    // All 14 types genuinely supported for Carbon Steel
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_cs_threaded,
      'weld-neck-flange': img_cs_weld_neck,
      'slip-on-flange': img_cs_slip_on,
      'blind-flange': img_cs_blind,
      'socket-weld-flange': img_cs_socket_weld,
      'lap-joint-flange': img_cs_lap_joint,
      'orifice-flange': img_cs_orifice,
      'long-weld-neck-flange': img_cs_long_weld_neck,
      'spectacle-blind-flange': img_cs_spectacle_blind,
      'reducing-flange': img_cs_reducing,
      'expander-flange': img_cs_expander,
      'square-flange': img_cs_square,
      'elbow-flange': img_cs_elbow,
      'cast-flange': img_cs_cast
    },
    grades: [
      {
        id: 'cs-a105',
        slug: 'a105',
        aliases: ['a105', 'a105n', 'astm-a105', 'astm-a105-forged-steel-flanges'],
        name: 'ASTM A105 / A105N',
        shortName: 'A105 / A105N',
        code: 'ASTM A105 / ASME SA105 Normalized',
        uns: 'UNS K03504',
        din: '1.0460 (C22.8 / P250GH)',
        standard: 'ASTM A105, ASME SA105, ASME B16.5, ASME B16.47',
        shortDesc: 'The global industry benchmark normalized carbon steel forging for ambient and elevated temperature pressure service.',
        fullDesc: 'Standard normalized carbon steel forging delivering high tensile strength, ductility, and pressure reliability across oil, gas, steam, and hydrocarbon services. Fully NACE MR0175 compliant.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'square-flange',
          'orifice-flange',
          'elbow-flange',
          'reducing-flange',
          'expander-flange',
          'socket-weld-flange',
          'cast-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'cs-a350-lf2',
        slug: 'a350-lf2',
        aliases: ['lf2', 'a350-lf2', 'astm-a350-lf2', 'astm-a350-lf2-flanges'],
        name: 'ASTM A350 LF2 Class 1',
        shortName: 'A350 LF2',
        code: 'ASTM A350 LF2 Class 1 Charpy Impact (-46°C)',
        uns: 'UNS K03011',
        din: '1.0488 (TStE 355)',
        standard: 'ASTM A350, ASME SA350, ASME B16.5',
        shortDesc: 'Low-temperature forged carbon steel flanges impact tested at -46°C for arctic and cryogenic pipelines.',
        fullDesc: 'Normalized and tempered low-temperature carbon steel flanges tested for Charpy V-notch toughness down to -46°C, eliminating brittle fracture risks in arctic and sub-zero service.',
        supportedTypeSlugs: [
          'threaded-flange',
          'weld-neck-flange',
          'slip-on-flange',
          'orifice-flange',
          'reducing-flange',
          'expander-flange',
          'socket-weld-flange',
          'blind-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'cs-a694',
        slug: 'a694',
        aliases: ['a694', 'a694-f52', 'a694-f60', 'a694-f64', 'a694-f65', 'f64', 'astm-a694', 'astm-a694-flanges', 'astm-a694-f64'],
        name: 'ASTM A694 F42-F70',
        shortName: 'A694 High Yield',
        code: 'ASTM A694 F42 / F52 / F60 / F65 / F70 High Yield',
        uns: 'UNS K03014',
        din: 'DIN EN 10222-4',
        standard: 'ASTM A694, ASME SA694, MSS SP-44, ASME B16.47',
        shortDesc: 'High-yield forged carbon/microalloyed steel flanges for high-pressure cross-country transmission pipelines.',
        fullDesc: 'High-yield transmission pipeline flanges with yield strengths up to 70,000 PSI, engineered for compressor stations and natural gas transmission lines.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'blind-flange',
          'slip-on-flange',
          'orifice-flange',
          'expander-flange',
          'reducing-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'cs-a181',
        slug: 'a181',
        aliases: ['a181', 'astm-a181', 'astm-a181-flanges'],
        name: 'ASTM A181 Class 60/70',
        shortName: 'A181 Utility',
        code: 'ASTM A181 Class 60 / Class 70 General Utility',
        uns: 'UNS K03502',
        din: 'DIN 2576 / St 37-2',
        standard: 'ASTM A181, ASME B16.5',
        shortDesc: 'Economical forged carbon steel flanges for general non-critical low-to-medium pressure service.',
        fullDesc: 'Cost-effective carbon steel flanges for plumbing, fire sprinkler mains, HVAC chilled water, and general factory utility air lines.',
        supportedTypeSlugs: [
          'threaded-flange',
          'slip-on-flange',
          'blind-flange',
          'weld-neck-flange',
          'cast-flange'
        ]
      }
    ]
  },
  {
    id: 'alloy-steel',
    slug: 'alloy-steel',
    urlSlug: 'alloy-steel',
    altSlugs: ['alloy-steel-flanges', 'alloy', 'chrome-moly'],
    name: 'Alloy Steel',
    title: 'Alloy Steel Flanges',
    standard: 'ASTM A182 / ASME SA182',
    primaryGrades: 'F1, F5, F9, F11 Class 2, F22 Class 3, F91, F92',
    materialDesc: 'Chrome-Moly high creep rupture strength forged flanges engineered for power boilers and superheated steam lines.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_as_threaded,
      'weld-neck-flange': img_as_weld_neck,
      'slip-on-flange': img_as_slip_on,
      'blind-flange': img_as_blind,
      'socket-weld-flange': img_as_socket_weld,
      'lap-joint-flange': img_as_lap_joint,
      'orifice-flange': img_as_orifice,
      'long-weld-neck-flange': img_as_long_weld_neck,
      'spectacle-blind-flange': img_as_spectacle_blind,
      'reducing-flange': img_as_reducing,
      'expander-flange': img_as_expander,
      'square-flange': img_as_square,
      'elbow-flange': img_as_elbow,
      'cast-flange': img_as_cast
    },
    grades: [
      {
        id: 'as-f11',
        slug: 'f11',
        aliases: ['f11', 'f11-cl2', 'astm-a182-gr-f11-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F11',
        shortName: 'F11 Class 2',
        code: 'ASTM A182 F11 Class 1 / Class 2 (1.25% Cr - 0.5% Mo)',
        uns: 'UNS K11572 / K11597',
        din: '1.7335 (13CrMo4-5)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: '1.25Cr-0.5Mo industry standard Chrome-Moly forged flanges for high-pressure steam and hydrotreater service.',
        fullDesc: 'Widely specified 1.25% Chromium - 0.5% Molybdenum alloy forged flanges engineered for elevated steam manifolds up to 550°C.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'slip-on-flange',
          'blind-flange',
          'socket-weld-flange',
          'threaded-flange',
          'orifice-flange',
          'reducing-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'as-f22',
        slug: 'f22',
        aliases: ['f22', 'f22-cl3', 'astm-a182-gr-f22-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F22',
        shortName: 'F22 Class 3',
        code: 'ASTM A182 F22 Class 1 / Class 3 (2.25% Cr - 1% Mo)',
        uns: 'UNS K21590',
        din: '1.7380 (10CrMo9-10)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: '2.25Cr-1Mo heavy-duty Chrome-Moly forged flanges with elevated creep rupture resistance to 600°C.',
        fullDesc: 'High-performance 2.25% Chromium - 1% Molybdenum alloy flanges delivering high resistance to hydrogen attack and creep embrittlement in supercritical power plants.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'slip-on-flange',
          'blind-flange',
          'socket-weld-flange',
          'threaded-flange',
          'orifice-flange',
          'reducing-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'as-f91',
        slug: 'f91',
        aliases: ['f91', 'astm-a182-gr-f91-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F91',
        shortName: 'F91 Modified',
        code: 'ASTM A182 F91 Class 1 / Class 2 (9Cr-1Mo-V-Nb Modified)',
        uns: 'UNS K90901',
        din: '1.4903 (X10CrMoVNb9-1)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: 'Advanced 9Cr-1Mo-V-Nb modified martensitic alloy flanges for ultra-supercritical (USC) power stations.',
        fullDesc: 'State-of-the-art modified martensitic creep-strength enhanced ferritic steel (CSEF) flanges engineered for steam headers up to 600°C.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'blind-flange',
          'slip-on-flange',
          'orifice-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'as-f5',
        slug: 'f5',
        aliases: ['f5', 'astm-a182-gr-f5-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F5',
        shortName: 'F5 Chrome-Moly',
        code: 'ASTM A182 F5 (5% Cr - 0.5% Mo Chrome Moly)',
        uns: 'UNS K41545',
        din: '1.7362 (12CrMo19-5)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: '5Cr-0.5Mo forged flanges with superior resistance to hot sulfur corrosion in crude distillation.',
        fullDesc: 'Intermediate Chrome-Moly alloy forged flanges delivering excellent resistance to hot sulfide attack in petroleum refineries up to 650°C.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'slip-on-flange',
          'blind-flange',
          'socket-weld-flange',
          'threaded-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'as-f9',
        slug: 'f9',
        aliases: ['f9', 'astm-a182-gr-f9-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F9',
        shortName: 'F9 Alloy Steel',
        code: 'ASTM A182 F9 (9% Cr - 1% Mo Alloy Steel)',
        uns: 'UNS K90941',
        din: '1.7386 (X12CrMo9-1)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: '9Cr-1Mo alloy forged flanges engineered for high-sulfur and high-temperature refinery crackers.',
        fullDesc: 'High-chromium alloy forged flanges formulating 9% Chromium and 1% Molybdenum, providing outstanding corrosion resistance in sour crude refinery services.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'slip-on-flange',
          'blind-flange',
          'socket-weld-flange',
          'long-weld-neck-flange'
        ]
      },
      {
        id: 'as-f1',
        slug: 'f1',
        aliases: ['f1', 'astm-a182-gr-f1-alloy-steel-flanges'],
        name: 'ASTM A182 Gr F1',
        shortName: 'F1 Carbon-Moly',
        code: 'ASTM A182 F1 (0.5% Mo Carbon-Moly Steel)',
        uns: 'UNS K12822',
        din: '1.5415 (15Mo3 / 16Mo3)',
        standard: 'ASTM A182, ASME SA182, ASME B16.5',
        shortDesc: 'Carbon-Molybdenum forged flanges for medium elevated temperature steam service up to 500°C.',
        fullDesc: 'Molybdenum alloy forged flanges designed to enhance creep strength in utility boilers and process steam piping.',
        supportedTypeSlugs: [
          'weld-neck-flange',
          'slip-on-flange',
          'blind-flange',
          'threaded-flange',
          'socket-weld-flange'
        ]
      }
    ]
  },
  {
    id: 'inconel',
    slug: 'inconel',
    urlSlug: 'inconel',
    altSlugs: ['inconel-flanges', 'nickel-chromium'],
    name: 'Inconel',
    title: 'Inconel Alloy Flanges',
    standard: 'ASTM B564 / ASME SB564',
    primaryGrades: 'Inconel 600, Inconel 625, Inconel 718, Inconel 825',
    materialDesc: 'Nickel-Chromium superalloy forged flanges delivering complete immunity to chloride stress corrosion cracking up to 1093°C.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_inc_threaded,
      'weld-neck-flange': img_inc_weld_neck,
      'slip-on-flange': img_inc_slip_on,
      'blind-flange': img_inc_blind,
      'socket-weld-flange': img_inc_socket_weld,
      'lap-joint-flange': img_inc_lap_joint,
      'orifice-flange': img_inc_orifice,
      'long-weld-neck-flange': img_inc_long_weld_neck,
      'spectacle-blind-flange': img_inc_spectacle_blind,
      'reducing-flange': img_inc_reducing,
      'expander-flange': img_inc_expander,
      'square-flange': img_inc_square,
      'elbow-flange': img_inc_elbow,
      'cast-flange': img_inc_cast
    },
    grades: [
      {
        id: 'inc-625',
        slug: 'inconel-625',
        aliases: ['inconel-625', '625', 'n06625'],
        name: 'Inconel 625',
        shortName: 'Inconel 625',
        code: 'ASTM B564 UNS N06625',
        uns: 'UNS N06625',
        din: '2.4856',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        shortDesc: 'Supreme pitting and chloride stress corrosion cracking immunity with extreme tensile strength.',
        fullDesc: 'Nickel-Chromium-Molybdenum-Niobium superalloy flanges engineered for offshore risers, subsea manifolds, and chemical reactors.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'socket-weld-flange', 'threaded-flange', 'orifice-flange', 'long-weld-neck-flange']
      },
      {
        id: 'inc-600',
        slug: 'inconel-600',
        aliases: ['inconel-600', '600', 'n06600'],
        name: 'Inconel 600',
        shortName: 'Inconel 600',
        code: 'ASTM B564 UNS N06600',
        uns: 'UNS N06600',
        din: '2.4816',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        shortDesc: 'Outstanding resistance to high-temperature oxidation and carburization up to 1093°C.',
        fullDesc: 'Solid-solution nickel-chromium alloy flanges designed for furnace components and chemical processing reactors.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'threaded-flange', 'socket-weld-flange']
      },
      {
        id: 'inc-718',
        slug: 'inconel-718',
        aliases: ['inconel-718', '718', 'n07718'],
        name: 'Inconel 718',
        shortName: 'Inconel 718',
        code: 'ASTM B564 UNS N07718',
        uns: 'UNS N07718',
        din: '2.4668',
        standard: 'ASTM B564, API 6A, ASME B16.5',
        shortDesc: 'Precipitation-hardenable high-strength superalloy flange for severe subsea wellheads.',
        fullDesc: 'High-yield superalloy forged flanges delivering yield strengths exceeding 120,000 PSI for high-pressure oil & gas wellhead trees.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'long-weld-neck-flange']
      },
      {
        id: 'inc-825',
        slug: 'inconel-825',
        aliases: ['inconel-825', '825', 'n08825'],
        name: 'Incoloy 825',
        shortName: 'Incoloy 825',
        code: 'ASTM B564 UNS N08825',
        uns: 'UNS N08825',
        din: '2.4858',
        standard: 'ASTM B564, ASME B16.5',
        shortDesc: 'Outstanding resistance to reducing and oxidizing acids, particularly sulfuric acid.',
        fullDesc: 'Nickel-Iron-Chromium-Molybdenum-Copper alloy flanges providing exceptional resistance to acid attack and pitting.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'reducing-flange', 'socket-weld-flange']
      }
    ]
  },
  {
    id: 'monel',
    slug: 'monel',
    urlSlug: 'monel',
    altSlugs: ['monel-flanges', 'nickel-copper'],
    name: 'Monel',
    title: 'Monel Alloy Flanges',
    standard: 'ASTM B564 / ASME SB564',
    primaryGrades: 'Monel 400 (UNS N04400), Monel K500 (UNS N05500)',
    materialDesc: 'Nickel-Copper solid solution forged flanges offering unmatched resistance to marine seawater and hydrofluoric acid.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_monel_threaded,
      'weld-neck-flange': img_monel_weld_neck,
      'slip-on-flange': img_monel_slip_on,
      'blind-flange': img_monel_blind,
      'socket-weld-flange': img_monel_socket_weld,
      'lap-joint-flange': img_monel_lap_joint,
      'orifice-flange': img_monel_orifice,
      'long-weld-neck-flange': img_monel_long_weld_neck,
      'spectacle-blind-flange': img_monel_spectacle_blind,
      'reducing-flange': img_monel_reducing,
      'expander-flange': img_monel_expander,
      'square-flange': img_monel_square,
      'elbow-flange': img_monel_elbow,
      'cast-flange': img_monel_cast
    },
    grades: [
      {
        id: 'mon-400',
        slug: 'monel-400',
        aliases: ['monel-400', '400', 'n04400'],
        name: 'Monel 400',
        shortName: 'Monel 400',
        code: 'ASTM B564 UNS N04400',
        uns: 'UNS N04400',
        din: '2.4360',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        shortDesc: 'Solid-solution Nickel-Copper forged flanges engineered for marine seawater and HF acid environments.',
        fullDesc: 'Forged Monel 400 flanges exhibiting zero cavitation damage and exceptional corrosion resistance in high-velocity seawater and HF alkylation units.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'socket-weld-flange', 'threaded-flange', 'reducing-flange']
      },
      {
        id: 'mon-k500',
        slug: 'monel-k500',
        aliases: ['monel-k500', 'k500', 'n05500'],
        name: 'Monel K500',
        shortName: 'Monel K500',
        code: 'ASTM B564 UNS N05500',
        uns: 'UNS N05500',
        din: '2.4375',
        standard: 'ASTM B564, ASME B16.5',
        shortDesc: 'Age-hardened high-strength Nickel-Copper flange for marine shafting and subsea equipment.',
        fullDesc: 'Precipitation-strengthened alloy combining Monel 400 corrosion immunity with triple the yield strength for severe marine pumps and valves.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange']
      }
    ]
  },
  {
    id: 'hastelloy',
    slug: 'hastelloy',
    urlSlug: 'hastelloy',
    altSlugs: ['hastelloy-flanges', 'hastelloy-alloy'],
    name: 'Hastelloy',
    title: 'Hastelloy Flanges',
    standard: 'ASTM B564 / ASME SB564',
    primaryGrades: 'Hastelloy C276 (UNS N10276), Hastelloy C22 (UNS N06022), Hastelloy B2',
    materialDesc: 'Nickel-Molybdenum-Chromium flanges with outstanding resistance to localized pitting and stress corrosion cracking.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_has_threaded,
      'weld-neck-flange': img_has_weld_neck,
      'slip-on-flange': img_has_slip_on,
      'blind-flange': img_has_blind,
      'socket-weld-flange': img_has_socket_weld,
      'lap-joint-flange': img_has_lap_joint,
      'orifice-flange': img_has_orifice,
      'long-weld-neck-flange': img_has_long_weld_neck,
      'spectacle-blind-flange': img_has_spectacle_blind,
      'reducing-flange': img_has_reducing,
      'expander-flange': img_has_expander,
      'square-flange': img_has_square,
      'elbow-flange': img_has_elbow,
      'cast-flange': img_has_cast
    },
    grades: [
      {
        id: 'has-c276',
        slug: 'hastelloy-c276',
        aliases: ['hastelloy-c276', 'c276', 'n10276'],
        name: 'Hastelloy C276',
        shortName: 'C276',
        code: 'ASTM B564 UNS N10276',
        uns: 'UNS N10276',
        din: '2.4819',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        shortDesc: 'Premier corrosion-resistant superalloy flanges for aggressive chemical and wet chlorine systems.',
        fullDesc: 'High molybdenum and tungsten nickel superalloy flanges preventing intergranular precipitate formation in weld heat-affected zones.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'socket-weld-flange', 'threaded-flange', 'orifice-flange', 'reducing-flange', 'long-weld-neck-flange']
      },
      {
        id: 'has-c22',
        slug: 'hastelloy-c22',
        aliases: ['hastelloy-c22', 'c22', 'n06022'],
        name: 'Hastelloy C22',
        shortName: 'C22',
        code: 'ASTM B564 UNS N06022',
        uns: 'UNS N06022',
        din: '2.4602',
        standard: 'ASTM B564, ASME B16.5',
        shortDesc: 'Enhanced chromium-molybdenum-tungsten alloy with universal resistance to mixed acid media.',
        fullDesc: 'Superior resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive oxidizing and reducing environments.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange', 'socket-weld-flange']
      }
    ]
  },
  {
    id: 'nickel',
    slug: 'nickel',
    urlSlug: 'nickel',
    altSlugs: ['nickel-flanges', 'nickel-alloy'],
    name: 'Nickel Alloy',
    title: 'Nickel 200 / 201 Flanges',
    standard: 'ASTM B564 / ASME SB564',
    primaryGrades: 'Nickel 200 (UNS N02200), Nickel 201 (UNS N02201)',
    materialDesc: 'Commercially pure wrought nickel flanges designed for high caustic alkali solutions and dry halogen media.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_ni_threaded,
      'weld-neck-flange': img_ni_weld_neck,
      'slip-on-flange': img_ni_slip_on,
      'blind-flange': img_ni_blind,
      'socket-weld-flange': img_ni_socket_weld,
      'lap-joint-flange': img_ni_lap_joint,
      'orifice-flange': img_ni_orifice,
      'long-weld-neck-flange': img_ni_long_weld_neck,
      'spectacle-blind-flange': img_ni_spectacle_blind,
      'reducing-flange': img_ni_reducing,
      'expander-flange': img_ni_expander,
      'square-flange': img_ni_square,
      'elbow-flange': img_ni_elbow,
      'cast-flange': img_ni_cast
    },
    grades: [
      {
        id: 'ni-200',
        slug: 'nickel-200',
        aliases: ['nickel-200', '200', 'n02200'],
        name: 'Nickel 200',
        shortName: 'Nickel 200',
        code: 'ASTM B564 UNS N02200',
        uns: 'UNS N02200',
        din: '2.4066',
        standard: 'ASTM B564, ASME SB564, ASME B16.5',
        shortDesc: 'Commercially pure wrought nickel flanges offering exceptional resistance to caustic alkalis.',
        fullDesc: 'Pure nickel forged flanges delivering extraordinary resistance to hot concentrated sodium hydroxide (caustic soda) solutions and anhydrous ammonia.',
        supportedTypeSlugs: ['weld-neck-flange', 'slip-on-flange', 'blind-flange', 'socket-weld-flange', 'threaded-flange']
      },
      {
        id: 'ni-201',
        slug: 'nickel-201',
        aliases: ['nickel-201', '201', 'n02201'],
        name: 'Nickel 201',
        shortName: 'Nickel 201',
        code: 'ASTM B564 UNS N02201',
        uns: 'UNS N02201',
        din: '2.4068',
        standard: 'ASTM B564, ASME B16.5',
        shortDesc: 'Low carbon commercially pure nickel preventing graphitization in services above 315°C.',
        fullDesc: 'Ultra-low carbon nickel formulation engineered for caustic evaporators and halogen manufacturing above 315°C.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange']
      }
    ]
  },
  {
    id: 'copper-nickel',
    slug: 'copper-nickel',
    urlSlug: 'copper-nickel',
    altSlugs: ['copper-nickel-flanges', 'cu-ni', 'cupro-nickel'],
    name: 'Copper Nickel',
    title: 'Copper Nickel Flanges',
    standard: 'ASTM B151, ASTM B171, DIN 86037',
    primaryGrades: 'Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500)',
    materialDesc: 'Cupro-nickel marine flanges resistant to biofouling, macro-fouling, and fast-flowing seawater erosion.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_cuni_threaded,
      'weld-neck-flange': img_cuni_weld_neck,
      'slip-on-flange': img_cuni_slip_on,
      'blind-flange': img_cuni_blind,
      'socket-weld-flange': img_cuni_socket_weld,
      'lap-joint-flange': img_cuni_lap_joint,
      'orifice-flange': img_cuni_orifice,
      'long-weld-neck-flange': img_cuni_long_weld_neck,
      'spectacle-blind-flange': img_cuni_spectacle_blind,
      'reducing-flange': img_cuni_reducing,
      'expander-flange': img_cuni_expander,
      'square-flange': img_cuni_square,
      'elbow-flange': img_cuni_elbow,
      'cast-flange': img_cuni_cast
    },
    grades: [
      {
        id: 'cuni-90-10',
        slug: 'cu-ni-90-10',
        aliases: ['cu-ni-90-10', '90-10', 'c70600'],
        name: 'Cu-Ni 90/10',
        shortName: '90/10',
        code: 'UNS C70600 / DIN 86037',
        uns: 'UNS C70600',
        din: '2.0872',
        standard: 'DIN 86037, EEMUA 145, ASME B16.5',
        shortDesc: 'Marine-grade 90/10 cupro-nickel flanges for naval shipbuilding and offshore seawater cooling lines.',
        fullDesc: 'Natural antifouling protective copper oxide passivation layer providing outstanding erosion-corrosion resistance in seawater.',
        supportedTypeSlugs: ['slip-on-flange', 'weld-neck-flange', 'blind-flange', 'reducing-flange']
      },
      {
        id: 'cuni-70-30',
        slug: 'cu-ni-70-30',
        aliases: ['cu-ni-70-30', '70-30', 'c71500'],
        name: 'Cu-Ni 70/30',
        shortName: '70/30',
        code: 'UNS C71500 / EEMUA 145',
        uns: 'UNS C71500',
        din: '2.0882',
        standard: 'DIN 86037, EEMUA 145, ASME B16.5',
        shortDesc: 'Higher strength 70/30 cupro-nickel flanges engineered for high-velocity seawater piping systems.',
        fullDesc: 'Iron and manganese reinforced 70/30 copper nickel alloy delivering superior velocity limits and impingement resistance.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange']
      }
    ]
  },
  {
    id: 'titanium',
    slug: 'titanium',
    urlSlug: 'titanium',
    altSlugs: ['titanium-flanges', 'titanium-alloy'],
    name: 'Titanium',
    title: 'Titanium Flanges',
    standard: 'ASTM B381 / ASME SB381',
    primaryGrades: 'Grade 2 (UNS R50400 Commercial Pure), Grade 5 (Ti-6Al-4V), Grade 7',
    materialDesc: 'Ultra-lightweight, high strength-to-density ratio forged titanium flanges immune to seawater and chlorine gas attack.',
    supportedTypeSlugs: [
      'threaded-flange',
      'weld-neck-flange',
      'slip-on-flange',
      'blind-flange',
      'socket-weld-flange',
      'lap-joint-flange',
      'orifice-flange',
      'long-weld-neck-flange',
      'spectacle-blind-flange',
      'reducing-flange',
      'expander-flange',
      'square-flange',
      'elbow-flange',
      'cast-flange'
    ],
    typeImages: {
      'threaded-flange': img_ti_threaded,
      'weld-neck-flange': img_ti_weld_neck,
      'slip-on-flange': img_ti_slip_on,
      'blind-flange': img_ti_blind,
      'socket-weld-flange': img_ti_socket_weld,
      'lap-joint-flange': img_ti_lap_joint,
      'orifice-flange': img_ti_orifice,
      'long-weld-neck-flange': img_ti_long_weld_neck,
      'spectacle-blind-flange': img_ti_spectacle_blind,
      'reducing-flange': img_ti_reducing,
      'expander-flange': img_ti_expander,
      'square-flange': img_ti_square,
      'elbow-flange': img_ti_elbow,
      'cast-flange': img_ti_cast
    },
    grades: [
      {
        id: 'ti-gr2',
        slug: 'titanium-grade-2',
        aliases: ['grade-2', 'gr2', 'titanium-grade-2', 'r50400'],
        name: 'Titanium Grade 2',
        shortName: 'Grade 2',
        code: 'ASTM B381 Grade 2 Unalloyed CP',
        uns: 'UNS R50400',
        din: '3.7035',
        standard: 'ASTM B381, ASME SB381, ASME B16.5',
        shortDesc: 'Commercially pure titanium forged flanges offering absolute immunity to chloride corrosion and seawater.',
        fullDesc: 'ASTM B381 Grade 2 unalloyed commercially pure titanium forged flanges featuring a self-healing titanium dioxide film impervious to wet chlorine and marine environments.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange', 'socket-weld-flange', 'threaded-flange', 'long-weld-neck-flange']
      },
      {
        id: 'ti-gr5',
        slug: 'titanium-grade-5',
        aliases: ['grade-5', 'gr5', 'ti-6al-4v', 'r56400'],
        name: 'Titanium Grade 5',
        shortName: 'Grade 5 (Ti-6Al-4V)',
        code: 'ASTM B381 Grade 5 (Ti-6Al-4V)',
        uns: 'UNS R56400',
        din: '3.7165',
        standard: 'ASTM B381, ASME B16.5',
        shortDesc: 'High-strength alpha-beta titanium alloy forged flanges for aerospace and subsea deepwater lines.',
        fullDesc: 'Extreme strength-to-weight ratio alloy formulation engineered for deep sea oil exploration and aerospace fluids.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange']
      },
      {
        id: 'ti-gr7',
        slug: 'titanium-grade-7',
        aliases: ['grade-7', 'gr7', 'r52400'],
        name: 'Titanium Grade 7',
        shortName: 'Grade 7 (0.15% Pd)',
        code: 'ASTM B381 Grade 7 (0.15% Palladium)',
        uns: 'UNS R52400',
        din: '3.7235',
        standard: 'ASTM B381, ASME B16.5',
        shortDesc: 'Palladium-enhanced titanium forged flanges resisting crevice corrosion in reducing acid media.',
        fullDesc: 'Grade 2 titanium augmented with 0.15% Palladium to dramatically enhance resistance to hot dilute hydrochloric and sulfuric acids.',
        supportedTypeSlugs: ['weld-neck-flange', 'blind-flange', 'slip-on-flange']
      }
    ]
  }
];

/**
 * Normalizes any material slug (e.g. 'stainless-steel-flanges' -> 'stainless-steel')
 */
export function normalizeMaterialSlug(slug) {
  if (!slug) return 'stainless-steel';
  const clean = slug.toLowerCase().trim();
  const matched = FLANGE_MATERIALS.find(
    m => m.slug === clean || m.id === clean || m.urlSlug === clean || m.altSlugs.includes(clean)
  );
  return matched ? matched.slug : 'stainless-steel';
}

/**
 * Normalizes any flange type slug (e.g. 'weld-neck' -> 'weld-neck-flange')
 */
export function normalizeFlangeTypeSlug(slug) {
  if (!slug) return 'weld-neck-flange';
  const clean = slug.toLowerCase().trim();
  const matched = CORE_FLANGE_TYPES.find(
    t => t.slug === clean || t.id === clean || (t.aliases && t.aliases.includes(clean))
  );
  return matched ? matched.slug : null;
}

/**
 * Checks if a slug represents a known flange material
 */
export function isFlangeMaterialSlug(slug) {
  if (!slug) return false;
  const clean = slug.toLowerCase().trim();
  return FLANGE_MATERIALS.some(
    m => m.slug === clean || m.id === clean || m.urlSlug === clean || m.altSlugs.includes(clean)
  );
}

/**
 * Checks if a slug represents a known flange type
 */
export function isFlangeTypeSlug(slug) {
  if (!slug) return false;
  const clean = slug.toLowerCase().trim();
  return CORE_FLANGE_TYPES.some(
    t => t.slug === clean || t.id === clean || (t.aliases && t.aliases.includes(clean))
  );
}

/**
 * Normalizes any grade slug within a material (e.g. 'ss-316-316l-316h-flanges' or '316' -> '316l')
 */
export function normalizeFlangeGradeSlug(materialSlug, gradeSlug) {
  if (!gradeSlug) return null;
  const mat = getFlangeMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return null;
  const clean = gradeSlug.toLowerCase().trim();
  const matched = mat.grades.find(
    g => g.slug === clean || g.id === clean || (g.aliases && g.aliases.includes(clean))
  );
  return matched ? matched.slug : null;
}

/**
 * Checks if a slug represents a known grade for the given material
 */
export function isFlangeGradeSlug(materialSlug, slug) {
  if (!slug) return false;
  const mat = getFlangeMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return false;
  const clean = slug.toLowerCase().trim();
  return mat.grades.some(
    g => g.slug === clean || g.id === clean || (g.aliases && g.aliases.includes(clean))
  );
}

/**
 * Returns material object by slug
 */
export function getFlangeMaterialBySlug(slug) {
  const normalized = normalizeMaterialSlug(slug);
  return FLANGE_MATERIALS.find(m => m.slug === normalized) || FLANGE_MATERIALS[0];
}

/**
 * Returns core flange type object by slug
 */
export function getCoreFlangeTypeBySlug(slug) {
  const normalized = normalizeFlangeTypeSlug(slug);
  return CORE_FLANGE_TYPES.find(t => t.slug === normalized) || null;
}

/**
 * Returns all flange types available for a specific material
 */
export function getFlangeTypesForMaterial(materialSlug) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  return CORE_FLANGE_TYPES.filter(type => mat.supportedTypeSlugs.includes(type.slug)).map(type => {
    const matImage = mat.typeImages && mat.typeImages[type.slug] ? mat.typeImages[type.slug] : type.defaultImage;
    return {
      ...type,
      materialId: mat.id,
      materialSlug: mat.slug,
      materialName: mat.name,
      materialFullTitle: `${mat.name} ${type.name}s`,
      displayImage: matImage,
      routeUrl: `/products/flanges/${mat.slug}/${type.slug}-manufactured-in-mumbai`
    };
  });
}

/**
 * Returns all grades available for a specific material
 */
export function getFlangeGradesForMaterial(materialSlug) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return [];
  return mat.grades.map(grade => ({
    ...grade,
    materialId: mat.id,
    materialSlug: mat.slug,
    materialName: mat.name,
    routeUrl: `/products/flanges/${mat.slug}/grades/${grade.slug}-manufactured-in-mumbai`
  }));
}

/**
 * Returns a specific grade object for a material
 */
export function getFlangeGradeBySlug(materialSlug, gradeSlug) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  if (!mat || !mat.grades) return null;
  const normalizedSlug = normalizeFlangeGradeSlug(materialSlug, gradeSlug);
  return mat.grades.find(g => g.slug === normalizedSlug) || mat.grades[0] || null;
}

/**
 * Returns the list of grades supported for a specific (material + type) combination
 */
export function getFlangeGradesForType(materialSlug, typeSlug) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  const type = getCoreFlangeTypeBySlug(typeSlug);
  if (!mat || !mat.grades || !type) return [];
  return mat.grades.filter(grade => grade.supportedTypeSlugs.includes(type.slug)).map(grade => ({
    ...grade,
    materialSlug: mat.slug,
    typeSlug: type.slug,
    routeUrl: `/products/flanges/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
  }));
}

/**
 * Returns the list of flange types supported for a specific (material + grade) combination
 */
export function getFlangeTypesForGrade(materialSlug, gradeSlug) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  const grade = getFlangeGradeBySlug(materialSlug, gradeSlug);
  if (!mat || !grade) return getFlangeTypesForMaterial(materialSlug);
  return CORE_FLANGE_TYPES.filter(type => grade.supportedTypeSlugs.includes(type.slug)).map(type => {
    const matImage = mat.typeImages && mat.typeImages[type.slug] ? mat.typeImages[type.slug] : type.defaultImage;
    return {
      ...type,
      materialId: mat.id,
      materialSlug: mat.slug,
      materialName: mat.name,
      gradeSlug: grade.slug,
      gradeName: grade.shortName,
      materialFullTitle: `${grade.shortName} ${mat.name} ${type.name}s`,
      displayImage: matImage,
      routeUrl: `/products/flanges/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
    };
  });
}

/**
 * Matches composite flange type and grade slug, e.g. "threaded-flange-316l"
 */
export function matchFlangeTypeAndGrade(materialSlug, slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/-manufactured-in-mumbai$/i, '').trim();
  const mat = getFlangeMaterialBySlug(materialSlug);
  if (!mat) return null;

  for (const type of CORE_FLANGE_TYPES) {
    const candidates = [type.slug, ...(type.aliases || [])];
    for (const cand of candidates) {
      if (clean === cand) {
        return { typeSlug: type.slug, gradeSlug: null };
      }
      if (clean.startsWith(cand + '-')) {
        const gradePart = clean.slice(cand.length + 1);
        const normGrade = normalizeFlangeGradeSlug(mat.slug, gradePart);
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
 * Returns complete combined details for a specific (material + type) pair
 */
export function getFlangeTypeDetail(materialSlug, typeSlug, gradeSlug = null) {
  const mat = getFlangeMaterialBySlug(materialSlug);
  const type = getCoreFlangeTypeBySlug(typeSlug);

  if (!type) return null;

  const isSupported = mat.supportedTypeSlugs.includes(type.slug);
  const displayImage = (mat.typeImages && mat.typeImages[type.slug]) || type.defaultImage;

  // If a specific grade is selected (Level 4 detail)
  const grade = gradeSlug ? getFlangeGradeBySlug(mat.slug, gradeSlug) : null;
  const availableGrades = getFlangeGradesForType(mat.slug, type.slug);

  const fullName = grade 
    ? `${grade.shortName} ${mat.name} ${type.name}s`
    : `${mat.name} ${type.name}s`;

  const canonicalUrl = grade
    ? `/products/flanges/${mat.slug}/${type.slug}/${grade.slug}-manufactured-in-mumbai`
    : `/products/flanges/${mat.slug}/${type.slug}-manufactured-in-mumbai`;

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
    isSupportedInCatalogue: isSupported,
    shortDesc: grade
      ? `Premium certified ${fullName} manufactured in conformance with ${grade.standard}. ${grade.shortDesc}`
      : `Industrial-grade ${fullName} engineered to international standards. ${type.shortDesc}`,
    overview: {
      whatIs: grade 
        ? `${fullName} combine the high-integrity mechanical design of ${type.name} with the verified chemical and corrosion-resistant metallurgy of ${grade.name} (${grade.code}). ${type.whatIs}`
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
      unsDin: grade && grade.uns ? `${grade.uns} / ${grade.din || 'N/A'}` : 'Per Grade Heat Batch',
      sizeRange: type.standardSizes,
      pressureClass: type.standardPressures,
      facing: 'Raised Face (RF 125-250 RMS), Ring Type Joint (RTJ), Flat Face (FF)',
      dimensions: 'Conforming strictly to ASME B16.5 / ASME B16.47 / MSS SP specification tables',
      manufacturingMethod: type.manufacturingMethod,
      connectionType: type.technicalDesignation,
      testingInspection: '100% PMI Spectro verification, Hydrostatic pressure test, Ultrasonic (UT) NDT inspection, EN 10204 3.1 & 3.2 Mill Test Certificate provided'
    },
    seo: {
      title: `${fullName} | ASME Certified Manufacturer & Supplier`,
      description: `Complete dimensions, pressure classes, and MTC specifications for ${fullName}. Available in sizes ${type.standardSizes} with fast global dispatch.`
    }
  };
}
