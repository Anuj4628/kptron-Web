/**
 * Research-Verified Flexible Metallic Hose Pipes Specifications & Metallurgy
 * Standards: ISO 10380 (Corrugated Metal Hose Assemblies), BS 6501 Part 1
 * Construction: Hydroformed / Mechanically Formed Annular Corrugations with High-Tensile Wire Braid
 * Temperature Range: -200°C to +600°C (Up to 800°C with Inconel)
 * End Fittings: Flanged (ASME B16.5), Male NPT, Female Camlock, Quick Disconnect, Weld Stubs
 */

export const HOSE_PIPES_GRADES = [
  {
    id: 'metallic-hose-ss316l-single-braid',
    slug: 'metallic-hose-ss316l-single-braid',
    aliases: ['ss-316l-hose', 'flexible-metal-hose-316l', 'ss316-corrugated-hose'],
    name: 'SS 316L Corrugated Core with SS 304 Single Braid Hose',
    specification: 'ISO 10380 Class 1 / BS 6501 Part 1',
    grade: 'Core: AISI 316L / Braid: AISI 304 High-Tensile Wire',
    class: 'ISO 10380 Type 1-10 (High Flexibility, 50,000 Cycle Fatigue)',
    code: 'SS316L/304 SINGLE BRAID',
    badge: 'ISO 10380 CLASS 1 CERTIFIED',
    uns: 'UNS S31603 (Core) / UNS S30400 (Braid)',
    din: '1.4404 / 1.4301',
    productForm: 'Annular Corrugated Flexible Metal Hose Assembly',
    standards: 'ISO 10380, BS 6501, EN ISO 10380:2012',
    shortDesc: 'Flexible annular corrugated 316L metallic inner hose with high-tensile 304 wire braid for thermal movement and chemical transfer.',
    fullDesc: 'Manufactured from strip-formed argon-welded 316L stainless steel tubing, hydroformed into close-pitch annular corrugations. Enclosed in a tight single-layer 304 stainless steel wire braid that prevents elongation under internal pressure while accommodating thermal expansion and misalignment.',
    features: [
      'High chemical corrosion resistance provided by 2.0-3.0% Moly 316L core',
      'High tensile 304 wire braid prevents axial elongation under internal pressure',
      'Accommodates thermal expansion, pipe vibration, and angular settlement',
      '100% Hydrostatic and pneumatic helium bubble tested under water'
    ],
    specs: {
      sizeRange: '1/4" NB to 12" NB (DN 6 to DN 300)',
      workingPressure: 'Up to 250 Bar (1/4") to 25 Bar (6") at 20°C',
      endConnections: 'Fixed/Swivel Flanges (ANSI 150#/300#), Male NPT, BSPT, Camlock',
      testing: 'Pneumatic leak test under water at 1.5x WP, Hydrostatic burst test, Dye PT'
    },
    mechanical: {
      tensile: 'Core ≥ 485 MPa / Braid Wire ≥ 700 MPa',
      yield: 'Core ≥ 170 MPa',
      elongation: 'Core ≥ 35%',
      hardness: 'Core ≤ 85 HRB',
      maxTemp: '600°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '10.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '≤ 2.00%'
    },
    applications: [
      'Chemical loading/unloading tanker manifolds and railcar hoses',
      'Power generation turbine thermal expansion and seismic joints',
      'High-pressure steam boiler header flex connections',
      'Industrial gas transfer lines for LOX, LIN, LAr, and LPG'
    ]
  },
  {
    id: 'metallic-hose-ss321-double-braid',
    slug: 'metallic-hose-ss321-double-braid',
    aliases: ['ss-321-hose', 'double-braid-hose', 'ss321-engine-exhaust-hose'],
    name: 'SS 321 Corrugated Core with SS 304 Double Braid Hose',
    specification: 'ISO 10380 Class 1 Heavy Duty',
    grade: 'Core: AISI 321 (Ti-Stabilized) / Braid: Dual AISI 304 Wire',
    class: 'Heavy Duty Vibration & Elevated Pressure (Double Layer Braid)',
    code: 'SS321/304 DOUBLE BRAID',
    badge: 'HEAVY VIBRATION & PRESSURE',
    uns: 'UNS S32100 (Core) / UNS S30400 (Braid)',
    din: '1.4541 (X6CrNiTi18-10)',
    productForm: 'Heavy Duty Flexible Metallic Hose Assembly',
    standards: 'ISO 10380, BS 6501, EJMA Standards',
    shortDesc: 'Titanium-stabilized 321 flexible metallic hose with dual braided layers delivering 1.5x higher working pressure and cyclic endurance up to 700°C.',
    fullDesc: 'Engineered with a Titanium-stabilized grade 321 corrugated inner core covered by two independent high-tensile 304 braided wire sleeves. The double braid increases pressure capacity by up to 50% while the titanium stabilization prevents intergranular sensitization in diesel exhaust and engine vibration manifolds.',
    features: [
      'Double wire braid increases working pressure rating by 40-50%',
      'Titanium stabilization prevents intergranular attack at elevated temperatures',
      'Superior endurance against high-frequency mechanical vibration from engines',
      'Precision welded end terminations (TIG welded with 100% penetrant inspection)'
    ],
    specs: {
      sizeRange: '1/2" NB to 12" NB (DN 15 to DN 300)',
      workingPressure: 'Up to 350 Bar (1/2") / 40 Bar (6")',
      endConnections: 'Forged Steel Flanges (ANSI 300#/600#), Butt Weld Ends',
      testing: 'Dynamic fatigue impulse test, Hydrostatic proof at 1.5x rating'
    },
    mechanical: {
      tensile: 'Core ≥ 515 MPa / Braid Wire ≥ 750 MPa',
      yield: 'Core ≥ 205 MPa',
      elongation: 'Core ≥ 35%',
      hardness: 'Core ≤ 90 HRB',
      maxTemp: '700°C'
    },
    chemistry: {
      cr: '17.0 - 19.0%',
      ni: '9.0 - 12.0%',
      ti: '5x(C+N) min to 0.70%',
      c: '≤ 0.08%',
      mn: '≤ 2.00%'
    },
    applications: [
      'Heavy marine diesel engine exhaust flex manifolds and turbocharger inlets',
      'Reciprocating compressor discharge lines with severe pulsation',
      'Steel plant blast furnace cooling water and oxygen lance flexible feeds',
      'Gas turbine fuel injection flexible jumper lines'
    ]
  },
  {
    id: 'metallic-hose-inconel-625',
    slug: 'metallic-hose-inconel-625',
    aliases: ['inconel-625-hose', 'alloy-625-flexible-hose'],
    name: 'Inconel 625 (UNS N06625) High Pressure Flexible Hose',
    specification: 'ISO 10380 / ASTM B443',
    grade: 'Core: UNS N06625 / Braid: UNS N06625 Wire',
    class: 'Extreme Pressure & Sour Offshore Service (Up to 815°C)',
    code: 'INCONEL 625 FLEX HOSE',
    badge: 'SEVERE SUBSEA & ACID',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'High Performance Superalloy Flexible Metallic Hose',
    standards: 'ISO 10380, NACE MR0175, ASME B31.3',
    shortDesc: 'All-Inconel 625 corrugated flexible hose engineered for extreme sour gas wells, subsea jumper loops, and severe boiling acid transfer.',
    fullDesc: 'Constructed entirely from nickel-chromium-molybdenum alloy 625 (both corrugated core and outer braid). Offers virtual immunity to chloride stress cracking, pitting, and crevice attack in hot seawater and severe sour gas service containing H2S, CO2, and wet chlorides.',
    features: [
      'All-Inconel 625 construction for core, braid, and end fittings',
      'Immune to chloride stress corrosion cracking and wet H2S sulfide cracking',
      'Maintains ductile toughness at cryogenic temps and strength up to 815°C',
      'Full qualification to NACE MR0175 / ISO 15156 sour service codes'
    ],
    specs: {
      sizeRange: '1/2" NB to 8" NB',
      workingPressure: 'Up to 300 Bar (1/2") / 50 Bar (4")',
      endConnections: 'Inconel 625 Flanges (RTJ), Hub Connectors, High Pressure Unions',
      testing: '100% Radiography on end welds, Helium mass spec test, PMI'
    },
    mechanical: {
      tensile: 'Core ≥ 827 MPa / Braid Wire ≥ 900 MPa',
      yield: 'Core ≥ 414 MPa',
      elongation: 'Core ≥ 30%',
      hardness: '≤ 250 HBW',
      maxTemp: '815°C'
    },
    chemistry: {
      ni: '≥ 58.0%',
      cr: '20.0 - 23.0%',
      mo: '8.0 - 10.0%',
      nb: '3.15 - 4.15%',
      fe: '≤ 5.0%',
      c: '≤ 0.10%'
    },
    applications: [
      'Subsea wellhead dynamic jumper hoses and umbilical fluid transfer',
      'Offshore flare stack burner tip flexible feed lines',
      'Chemical reactor severe chlorinated acid transfer hoses',
      'Nuclear reactor coolant sampling and thermal vibration loops'
    ]
  }
];
