/**
 * Research-Verified Industrial Wire Mesh & Filter Cloth Specifications
 * Standards: ASTM E2016 (Industrial Woven Wire Cloth), ISO 9044, DIN 4189
 * Weave Types: Plain Weave, Twilled Weave, Plain Dutch Weave (PDR), Twilled Dutch Weave (TDR), Reverse Dutch Weave
 * Aperture Range: 2 Mesh (11.1 mm aperture) down to 500 Mesh (25 micron absolute filtration)
 * Roll Widths: 1000 mm, 1220 mm, 1500 mm, 2000 mm | Roll Length: 30 meters
 */

export const WIRE_MESH_GRADES = [
  {
    id: 'wire-mesh-ss-304',
    slug: 'wire-mesh-ss-304',
    aliases: ['ss-304-wire-mesh', 'ss304-woven-mesh', 'stainless-wire-cloth-304'],
    name: 'Stainless Steel 304 Industrial Woven Wire Mesh',
    specification: 'ASTM E2016 / ASTM A580',
    grade: 'Grade 304 (UNS S30400)',
    class: 'Weave Styles: Plain Weave & Twilled Square Mesh',
    code: 'SS304 INDUSTRIAL MESH',
    badge: 'UNIVERSAL SIEVING & FILTER',
    uns: 'UNS S30400',
    din: '1.4301 (X5CrNi18-10)',
    productForm: 'Woven Wire Cloth, Filter Discs, Sieve Screens',
    standards: 'ASTM E2016, ISO 9044, DIN 4189',
    shortDesc: 'Universal 18-8 stainless steel woven wire mesh for industrial sieving, particle sizing, and extruder screens.',
    fullDesc: 'Precision-woven on advanced rapier and shuttle looms from cold-drawn, annealed 304 stainless steel wire. Delivers accurate aperture uniformity, high tensile strength, and dependable resistance to atmospheric and chemical corrosion.',
    features: [
      'Accurate geometric aperture sizing conforming to ASTM E2016 tolerances',
      'High open area ensuring high flow velocity with minimal pressure drop',
      'Firm warp-and-weft interlocking preventing aperture distortion under flow',
      'Ultrasonically degreased and cleaned surface free from drawing lubricants'
    ],
    specs: {
      meshCount: '2 Mesh to 400 Mesh (Aperture: 11.1 mm down to 0.038 mm / 38 micron)',
      wireDiameter: '0.03 mm to 2.0 mm',
      weaveStyle: 'Square Plain Weave, Twill Weave',
      testing: 'Optical micrometer aperture verification, Tensile test, 100% PMI'
    },
    mechanical: {
      tensile: '≥ 600 - 850 MPa (Drawn Wire)',
      yield: '≥ 400 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 90 HRB',
      maxTemp: '800°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Polymer and plastic melt extrusion filter packs and screen changers',
      'Laboratory test sieves for pharmaceutical and mineral particle analysis',
      'Fly-ash and cement vibratory screening decks',
      'Architectural security infill panels and insect screening'
    ]
  },
  {
    id: 'wire-mesh-ss-316l',
    slug: 'wire-mesh-ss-316l',
    aliases: ['ss-316-wire-mesh', 'ss316l-filter-cloth', 'dutch-weave-316l'],
    name: 'Stainless Steel 316 / 316L Precision Filter Cloth',
    specification: 'ASTM E2016 / ASTM A580',
    grade: 'Grade 316 / 316L (UNS S31600 / S31603)',
    class: 'Weave Styles: Plain Dutch Weave & Twilled Dutch Weave',
    code: 'SS316L DUTCH FILTER CLOTH',
    badge: 'MICRON RATED FILTRATION',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Dutch Weave Filter Cloth, Filter Leaves, Pleated Elements',
    standards: 'ASTM E2016, ISO 9044, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum Dutch-weave wire cloth engineered for sub-micron particle filtration in aggressive marine and chemical fluids.',
    fullDesc: 'Woven with coarse warp wires and densely packed fine weft wires (Dutch weave) to create tortuous wedge-shaped micro-pores. Delivers precise particle retention down to 5 microns absolute while resisting pitting from chlorides and sour oilfield chemicals.',
    features: [
      'Dense Dutch weave creates zero straight-through pores for absolute filtration',
      'Molybdenum content provides exceptional resistance to chloride pitting',
      'High mechanical pressure resistance without wire displacement or tearing',
      'Easily backwashed and cleaned by ultrasonic cavitation for multiple reuses'
    ],
    specs: {
      filtrationRating: '5 Micron to 200 Micron Absolute (Dutch Weave)',
      meshCombinations: '12x64, 24x110, 50x250, 80x700, 165x1400 Mesh',
      weaveStyle: 'Plain Dutch Weave (PDR), Twilled Dutch Weave (TDR)',
      testing: 'Bubble point pore size verification per ISO 4003, PMI Spectro'
    },
    mechanical: {
      tensile: '≥ 620 - 880 MPa',
      yield: '≥ 420 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 90 HRB',
      maxTemp: '815°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Aviation jet fuel sub-micron filtration and coalescer elements',
      'Pharmaceutical active ingredient pressure nutsche filters',
      'Offshore water injection and chemical injection fluid filtration',
      'Desalination pre-membrane cartridge filter leaves'
    ]
  },
  {
    id: 'wire-mesh-ss-310s',
    slug: 'wire-mesh-ss-310s',
    aliases: ['ss-310-wire-mesh', 'high-temp-furnace-mesh', '310s-heat-mesh'],
    name: 'Stainless Steel 310S High Temperature Mesh',
    specification: 'ASTM E2016 / ASTM A580',
    grade: 'Grade 310S (UNS S31008)',
    class: 'Heat Resistant Furnace Service up to 1150°C',
    code: 'SS310S 1150°C FURNACE MESH',
    badge: '1150°C THERMAL RESISTANT',
    uns: 'UNS S31008',
    din: '1.4845 (X8CrNi25-21)',
    productForm: 'Heavy Woven Mesh, Heat Treating Baskets, Conveyor Belts',
    standards: 'ASTM E2016, ASTM A580',
    shortDesc: '25Cr-20Ni refractory stainless wire mesh providing continuous oxidation and thermal shock resistance up to 1150°C.',
    fullDesc: 'Woven from heavy-gauge 25% Chromium, 20% Nickel stainless steel wire. Forms a tenacious chromia scale that resists scaling, carburization, and thermal cycling in industrial heat-treating retorts and sintering furnaces.',
    features: [
      'Maintains structural integrity and ductility at temperatures up to 1150°C',
      'High resistance to carburization, oxidation, and cyclic thermal shock',
      'Heavy wire gauge construction resists sagging under heavy payload at heat',
      'Full material test certificate (EN 10204 3.1) with heat analysis'
    ],
    specs: {
      meshCount: '2 Mesh to 50 Mesh',
      wireDiameter: '0.5 mm to 3.0 mm',
      weaveStyle: 'Double Crimp, Intermediate Crimp, Plain Weave',
      testing: 'High-temperature scaling verification, Tensile, PMI'
    },
    mechanical: {
      tensile: '≥ 650 MPa (Drawn Wire)',
      yield: '≥ 350 MPa',
      elongation: '≥ 25%',
      hardness: '≤ 92 HRB',
      maxTemp: '1150°C'
    },
    chemistry: {
      cr: '24.0 - 26.0%',
      ni: '19.0 - 22.0%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.50%'
    },
    applications: [
      'Industrial heat treatment furnace quenching baskets and trays',
      'Ceramic kiln car furniture and sintering furnace conveyor belts',
      'Catalytic reformer mesh support screens and catalyst retention grids',
      'Flare stack burner tip radiation screens and spark arrestors'
    ]
  },
  {
    id: 'wire-mesh-monel-400',
    slug: 'wire-mesh-monel-400',
    aliases: ['monel-400-mesh', 'monel-wire-cloth', 'alloy-400-mesh'],
    name: 'Monel 400 (UNS N04400) Demister & Marine Mesh',
    specification: 'ASTM E2016 / ASTM B164',
    grade: 'UNS N04400 (Alloy 400)',
    class: 'Seawater & Hydrofluoric Acid Service',
    code: 'MONEL 400 DEMISTER MESH',
    badge: 'HF ACID & MARINE SPECIALIST',
    uns: 'UNS N04400',
    din: '2.4360 (NiCu30Fe)',
    productForm: 'Knitted Demister Mesh Pads and Woven Wire Cloth',
    standards: 'ASTM E2016, ASTM B164, NACE MR0175',
    shortDesc: 'Nickel-copper alloy wire mesh providing total immunity to marine bio-fouling, seawater pitting, and hydrofluoric (HF) acid.',
    fullDesc: 'Woven from solid 67% Nickel, 30% Copper alloy wire. Extensively specified for offshore mist eliminators (demisters) and refinery HF alkylation units where stainless steels suffer catastrophic stress corrosion cracking.',
    features: [
      'Immune to chloride stress corrosion cracking in high-velocity seawater',
      'Exceptional resistance to hydrofluoric acid (HF) and anhydrous hydrogen fluoride',
      'Natural anti-fouling copper content prevents marine organism attachment',
      'Knitted mesh configuration creates high voidage (98%) for droplet coalescing'
    ],
    specs: {
      meshCount: '10 Mesh to 200 Mesh (Woven) / Knitted Wire Density: 144 kg/m³',
      wireDiameter: '0.15 mm to 0.50 mm',
      weaveStyle: 'Square Plain Weave, Interlocking Knitted Mesh',
      testing: '100% Optical Emission PMI Spectro, Tensile, Cleanliness'
    },
    mechanical: {
      tensile: '≥ 550 - 750 MPa',
      yield: '≥ 300 MPa',
      elongation: '≥ 25%',
      hardness: '≤ 85 HRB',
      maxTemp: '480°C'
    },
    chemistry: {
      ni: '≥ 63.0%',
      cu: '28.0 - 34.0%',
      fe: '≤ 2.5%',
      mn: '≤ 2.0%',
      c: '≤ 0.30%'
    },
    applications: [
      'Offshore gas separator vessel mist eliminator (demister) pads',
      'Petroleum refinery hydrofluoric (HF) alkylation process scrubbers',
      'Seawater intake marine bio-fouling exclusion strainers',
      'Chlorinated swimming pool water circulation filter leaves'
    ]
  }
];
