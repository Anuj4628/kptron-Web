/**
 * Research-Verified Patapatti / Precision Slit Strips Specifications & Metallurgy
 * Standards: ASTM A240, ASTM A666 (Austenitic Stainless Steel Strip), ASTM A480, DIN 17441, EN 10088-2
 * Forms: Precision Slit Strips, Deburred Banding, Oscillated Wound Coils, Cut-to-Length Patapatti
 * Thickness Range: 0.1 mm to 3.0 mm | Width Range: 5 mm to 300 mm
 * Tempers: Annealed (Soft), 1/4 Hard, 1/2 Hard, 3/4 Hard, Full Hard Spring Temper
 */

export const PATAPATTI_STRIPS_GRADES = [
  {
    id: 'patapatti-ss-304-annealed',
    slug: 'patapatti-ss-304-annealed',
    aliases: ['ss-304-patapatti', '304-slit-strip', 'stainless-patapatti-304', 'patapatti'],
    name: 'Stainless Steel 304 Annealed Precision Strip / Patapatti',
    specification: 'ASTM A240 / ASTM A666',
    grade: 'Type 304 (UNS S30400)',
    class: 'Annealed Soft Temper (Deep Stamping & Bending)',
    code: 'SS304 ANNEALED PATAPATTI',
    badge: 'DEEP FORMING & STAMPING',
    uns: 'UNS S30400',
    din: '1.4301 (X5CrNi18-10)',
    productForm: 'Continuous Slit Strips, Pancake Coils, and Straightened Patapatti',
    standards: 'ASTM A240, ASTM A666, DIN 17441, EN 10088-2',
    shortDesc: 'Bright-annealed austenitic 304 precision slit strip with deburred edges for stamping, roll-forming, and cable strapping.',
    fullDesc: 'Manufactured by precision slitting of cold-rolled, bright-annealed 304 stainless steel coil. Features tight gauge tolerance (±0.015 mm), zero edge burrs, and high elongation (>45%) to ensure trouble-free high-speed progressive die stamping and edge folding.',
    features: [
      'Slit on CNC rotary shear lines with precision deburred edges (No. 1 or No. 5 edge)',
      'High ductility (elongation ≥ 45%) allows sharp 180° flat bends without cracking',
      'Bright annealed (BA) reflective finish free from oil stains and scratches',
      'Available in continuous oscillated wound spools or flat straightened lengths'
    ],
    specs: {
      thicknessRange: '0.15 mm to 3.0 mm (Gauge tolerance ±0.015 mm)',
      widthRange: '6 mm to 250 mm (Width tolerance ±0.05 mm)',
      edges: 'Slit Edge (No. 3), Deburred Edge (No. 5), Full Round Edge (No. 1)',
      testing: 'Erichsen cupping test, Tensile, Micro-hardness, Surface gloss'
    },
    mechanical: {
      tensile: '≥ 515 MPa (75,000 psi)',
      yield: '≥ 205 MPa (30,000 psi)',
      elongation: '≥ 45% in 50 mm',
      hardness: '≤ 88 HRB / 180 HBW',
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
      'Industrial hose clamp banding, ear clamps, and strapping',
      'Electronic sensor stamped terminals, shielding cans, and connectors',
      'Automotive weather-strip roll-formed metal carriers',
      'Thermal insulation cladding banding and pipe insulation jackets'
    ]
  },
  {
    id: 'patapatti-ss-301-full-hard',
    slug: 'patapatti-ss-301-full-hard',
    aliases: ['ss-301-spring-strip', '301-full-hard-strip', 'high-tensile-patapatti'],
    name: 'Stainless Steel 301 Full Hard Spring Temper Strip',
    specification: 'ASTM A666 / EN 10151',
    grade: 'Type 301 (UNS S30100 Full Hard)',
    class: 'Full Hard Temper (Tensile ≥ 1275 MPa / 185 ksi)',
    code: 'SS301 FULL HARD SPRING STRIP',
    badge: '1275 MPA SPRING TEMPER',
    uns: 'UNS S30100',
    din: '1.4310 (X10CrNi18-8)',
    productForm: 'High Tensile Spring Strips & Constant Force Spring Stock',
    standards: 'ASTM A666, EN 10151, ISO 9001',
    shortDesc: 'Work-hardened Type 301 stainless strip delivering extreme tensile strength (≥ 1275 MPa) for clips, clamps, and constant force springs.',
    fullDesc: 'Cold-rolled with heavy reduction ratios to transform austenite into martensite, generating extreme tensile strength (≥ 1275 MPa) and high elastic springback. Extensively specified for electrical spring contacts, tape measures, seat belt retractors, and heavy-duty industrial pipe banding.',
    features: [
      'Extreme work-hardened tensile strength of 1275 to 1450 MPa (185 - 210 ksi)',
      'High fatigue limit and resistance to set under repeated mechanical cycling',
      'Precision slitting with controlled camber (max 1.5 mm per meter)',
      'Corrosion resistant alternative to high-carbon spring steels'
    ],
    specs: {
      thicknessRange: '0.10 mm to 1.50 mm',
      widthRange: '5 mm to 150 mm',
      edges: 'Safety Deburred Edges, Round Edges',
      testing: 'Springback test, Tensile, Micro-Vickers hardness (40 - 45 HRC)'
    },
    mechanical: {
      tensile: '≥ 1275 MPa (185,000 psi)',
      yield: '≥ 965 MPa (140,000 psi)',
      elongation: '≥ 9%',
      hardness: '40 - 45 HRC (380 - 435 HV)',
      maxTemp: '300°C'
    },
    chemistry: {
      cr: '16.0 - 18.0%',
      ni: '6.0 - 8.0%',
      c: '0.08 - 0.15%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Automotive seatbelt retractor constant-force spiral springs',
      'Heavy-duty industrial cable strapping and high-torque hose clamps',
      'Electronic switch spring contacts and diaphragm spring washers',
      'Precision spring blades, scraper knives, and measuring tapes'
    ]
  },
  {
    id: 'patapatti-ss-316l-medical',
    slug: 'patapatti-ss-316l-medical',
    aliases: ['ss-316-patapatti', '316l-slit-strip', 'marine-banding-strip'],
    name: 'Stainless Steel 316 / 316L Chemical & Marine Strip',
    specification: 'ASTM A240 / ASTM A666',
    grade: 'Type 316 / 316L Dual Certified',
    class: 'Bright Annealed & Deburred Marine Banding Strip',
    code: 'SS316L MOLY PATAPATTI',
    badge: 'MARINE STRAPPING & CLADDING',
    uns: 'UNS S31600 / S31603',
    din: '1.4401 / 1.4404',
    productForm: 'Continuous Slit Strapping & Precision Shims',
    standards: 'ASTM A240, ASTM A666, NACE MR0175',
    shortDesc: '2.0-3.0% Molybdenum stainless strip delivering superior resistance to marine saltwater and chemical acid attack.',
    fullDesc: 'Bright-annealed 316L stainless steel slit strip engineered for severe marine and chemical environments. The molybdenum content prevents pitting in salty atmospheres, making it the industry standard for subsea cable strapping, marine pipe jacket securing, and chemical diaphragm shims.',
    features: [
      '2.0 - 3.0% Molybdenum content prevents pitting in salt spray and acids',
      'Smooth deburred rounded edges to protect worker hands during field strapping',
      'Low carbon formulation (C ≤ 0.030%) prevents sensitization during spot welding',
      'Supplied in portable tote dispensers or bulk oscillated coils'
    ],
    specs: {
      thicknessRange: '0.2 mm to 2.5 mm',
      widthRange: '6 mm to 200 mm',
      edges: 'Deburred Safety Edge (No. 5 Edge)',
      testing: 'ASTM G48 Pitting Corrosion, Tensile, Dimensional verification, PMI'
    },
    mechanical: {
      tensile: '≥ 485 MPa (316L) / ≥ 515 MPa (316)',
      yield: '≥ 170 MPa (316L) / ≥ 205 MPa (316)',
      elongation: '≥ 40%',
      hardness: '≤ 88 HRB / 180 HBW',
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
      'Offshore marine subsea umbilical cable bundling and strapping',
      'Subsea thermal insulation jacket banding and sign mounting',
      'Medical surgical instrument components and flexible laparoscopic bands',
      'Chemical plant valve positioner diaphragms and precision shims'
    ]
  },
  {
    id: 'patapatti-inconel-625',
    slug: 'patapatti-inconel-625',
    aliases: ['inconel-625-strip', 'alloy-625-patapatti', 'b443-strip'],
    name: 'Inconel 625 (UNS N06625) Precision Shim Strip',
    specification: 'ASTM B443 / AMS 5599',
    grade: 'UNS N06625 (Alloy 625)',
    class: 'High Temperature Aerospace & Subsea Strip (Up to 980°C)',
    code: 'INCONEL 625 SHIM STRIP',
    badge: 'SEVERE TEMPERATURE & ACID',
    uns: 'UNS N06625',
    din: '2.4856 (NiCr22Mo9Nb)',
    productForm: 'Precision Slit Foils, Shim Stock, and Continuous Strips',
    standards: 'ASTM B443, AMS 5599, NACE MR0175',
    shortDesc: 'Solid-solution strengthened nickel superalloy precision strip engineered for high-temperature aerospace shims and subsea diaphragms.',
    fullDesc: 'Cold-rolled precision nickel superalloy strip fortified with 9% Molybdenum and 3.6% Niobium. Provides tensile strength exceeding 827 MPa from cryogenic temperatures up to 980°C, alongside total immunity to marine crevice attack and sour H2S cracking.',
    features: [
      'High tensile strength (≥ 827 MPa) maintained across extreme temperature swings',
      'Immune to chloride stress corrosion cracking and wet sour gas environments',
      'Extreme precision gauge tolerance (±0.008 mm) for aerospace shims',
      'Approved for aerospace turbine exhaust seals and subsea instruments'
    ],
    specs: {
      thicknessRange: '0.05 mm to 2.0 mm (Precision foil to heavy strip)',
      widthRange: '10 mm to 150 mm',
      finish: 'Cold Rolled Bright Annealed',
      testing: 'Tensile, 100% PMI, Dimensional laser micrometer check'
    },
    mechanical: {
      tensile: '≥ 827 MPa (120,000 psi)',
      yield: '≥ 414 MPa (60,000 psi)',
      elongation: '≥ 30%',
      hardness: '≤ 250 HBW',
      maxTemp: '980°C'
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
      'Aerospace jet engine honeycomb seals and exhaust nozzle shims',
      'Subsea sensor pressure transmitter flexible isolation diaphragms',
      'Nuclear reactor control rod flexible bellows strip stock',
      'High-temperature expansion joint metallic sealing leaf springs'
    ]
  }
];
