/**
 * Research-Verified Industrial Wires & Welding Filler Rods Specifications
 * Standards: ASTM A580 (Stainless Wire), ASTM A313 (Spring Wire), AWS A5.9, AWS A5.14, AWS A5.16
 * Forms: Precision Layer-Wound MIG Spools (12.5 kg, 15 kg), TIG Rods (1000 mm cut lengths), Coil Wire
 * Diameters: 0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm, 2.0 mm, 2.4 mm, 3.2 mm, 4.0 mm
 */

export const WIRES_GRADES = [
  {
    id: 'aws-er308l-welding-wire',
    slug: 'aws-er308l-welding-wire',
    aliases: ['er308l', 'er308l-wire', 'aws-a5-9-er308l', 'ss-308l-mig-wire'],
    name: 'AWS A5.9 ER308L Stainless Welding Wire & TIG Rod',
    specification: 'AWS A5.9 / ASME SFA-5.9',
    grade: 'Grade ER308L (Extra Low Carbon 19-9 Filler)',
    class: 'MIG Wire (Spools) & TIG Filler Rods (1000 mm)',
    code: 'AWS ER308L 19-9 FILLER',
    badge: '304/304L WELDING STANDARD',
    uns: 'UNS S30883',
    din: '1.4316 (G 19 9 L Si)',
    productForm: 'Precision Layer Wound Spools (BS300 / D200) & 1000 mm TIG Cut Lengths',
    standards: 'AWS A5.9, ASME SFA-5.9, ISO 14343-A',
    shortDesc: 'Extra-low carbon (C ≤ 0.03%) stainless filler wire engineered for crack-free welding of 304 and 304L piping and tanks.',
    fullDesc: 'Precision-drawn, layer-wound welding wire with controlled ferrite number (FN 6 - 10) to ensure high resistance to hot cracking and micro-fissuring during GTAW (TIG) and GMAW (MIG) welding of AISI 304 and 304L stainless steels.',
    features: [
      'Low carbon content (C ≤ 0.030%) prevents intergranular carbide precipitation',
      'Controlled delta ferrite (FN 6-10) provides high hot-crack resistance',
      'Smooth wire surface feeding with minimal spatter and stable welding arc',
      'Certified EN 10204 3.1 with all-weld metal tensile and Charpy impact tests'
    ],
    specs: {
      diameterRange: '0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm, 2.0 mm, 2.4 mm, 3.2 mm',
      packaging: '15 kg Plastic Spool (MIG) / 5 kg Tube (TIG 1000 mm rods)',
      shieldingGas: 'Argon + 1-2% O2 / CO2 (MIG) | 100% Argon (TIG)',
      testing: 'All-Weld Tensile, Radiographic Examination (RT), PMI, Ferrite Count'
    },
    mechanical: {
      tensile: '≥ 550 MPa (All Weld Metal)',
      yield: '≥ 400 MPa (Rp 0.2%)',
      elongation: '≥ 35% (A5)',
      hardness: '≤ 190 HBW',
      maxTemp: '800°C',
      impactTest: 'Charpy V-Notch ≥ 70 J at -196°C'
    },
    chemistry: {
      cr: '19.5 - 22.0%',
      ni: '9.0 - 11.0%',
      c: '≤ 0.030%',
      mn: '1.50 - 2.20%',
      si: '0.30 - 0.65%',
      p: '≤ 0.030%',
      s: '≤ 0.020%'
    },
    applications: [
      'TIG & MIG welding of ASTM A312 TP304/304L process pipes',
      'Brewery, dairy, and food processing stainless vessel fabrication',
      'Cryogenic LNG piping and storage tanks operating at -196°C',
      'Architectural stainless steel railings and facade welded structures'
    ]
  },
  {
    id: 'aws-er316l-welding-wire',
    slug: 'aws-er316l-welding-wire',
    aliases: ['er316l', 'er316l-wire', 'aws-a5-9-er316l', 'ss-316l-mig-wire'],
    name: 'AWS A5.9 ER316L Molybdenum Welding Wire & TIG Rod',
    specification: 'AWS A5.9 / ASME SFA-5.9',
    grade: 'Grade ER316L (2.0 - 3.0% Moly Austenitic)',
    class: 'MIG Wire & TIG Rods for Chemical & Marine Service',
    code: 'AWS ER316L MOLY FILLER',
    badge: 'MOLY ACID WELD FILLER',
    uns: 'UNS S31683',
    din: '1.4430 (G 19 12 3 L Si)',
    productForm: 'Layer-Wound MIG Spools & 1000 mm Flag-Tagged TIG Rods',
    standards: 'AWS A5.9, ASME SFA-5.9, ISO 14343-A, NACE MR0175',
    shortDesc: 'Molybdenum-bearing extra-low carbon filler wire for welding 316 and 316L piping in marine, chemical, and offshore installations.',
    fullDesc: 'Precision-manufactured with 2.5% Molybdenum to match the corrosion resistance of 316/316L base metals. Delivers sound, porosity-free weld deposits with high resistance to pitting, crevice attack, and organic acids in aggressive industrial fluids.',
    features: [
      '2.0 - 3.0% Molybdenum content guarantees equivalent pitting resistance to base pipe',
      'Controlled delta ferrite (FN 5-9) prevents hot cracking during heavy pass welding',
      'Compliant with NACE MR0175 / ISO 15156 sour service hardness limitations',
      'Color-coded and embossed flag-tag identification on both ends of every TIG rod'
    ],
    specs: {
      diameterRange: '0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm, 2.0 mm, 2.4 mm, 3.2 mm',
      packaging: '15 kg Spools (GMAW) & 5 kg Tubes (GTAW 1000 mm Rods)',
      shieldingGas: '100% Argon (TIG) | Ar + 2% CO2 (MIG)',
      testing: 'All-Weld Tensile, Radiographic Examination (RT Class 1), PMI'
    },
    mechanical: {
      tensile: '≥ 560 MPa (All Weld Metal)',
      yield: '≥ 420 MPa',
      elongation: '≥ 35%',
      hardness: '≤ 195 HBW',
      maxTemp: '815°C',
      impactTest: '≥ 60 J at -196°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '11.0 - 14.0%',
      mo: '2.00 - 3.00%',
      c: '≤ 0.030%',
      mn: '1.50 - 2.20%',
      si: '0.30 - 0.65%'
    },
    applications: [
      'Welding ASTM A312 TP316/316L marine and chemical process piping',
      'Desalination plant reverse osmosis high-pressure manifold welds',
      'Offshore topside process vessels and acid handling piping',
      'Pharmaceutical bio-reactor sterile sanitary loop welding'
    ]
  },
  {
    id: 'aws-er2209-duplex-wire',
    slug: 'aws-er2209-duplex-wire',
    aliases: ['er2209', 'er2209-wire', 'duplex-2205-welding-wire'],
    name: 'AWS A5.9 ER2209 Duplex Welding Wire & TIG Rod',
    specification: 'AWS A5.9 / ASME SFA-5.9',
    grade: 'Grade ER2209 (22Cr - 8Ni - 3Mo - N)',
    class: 'Duplex 2205 Matching Filler (PREN ≥ 35)',
    code: 'AWS ER2209 DUPLEX FILLER',
    badge: 'DUPLEX 2205 MATCHING',
    uns: 'UNS S39209',
    din: '1.4462 (G 22 9 3 N L)',
    productForm: 'MIG Wire Spools & TIG Cut Rods for Duplex 2205 Piping',
    standards: 'AWS A5.9, ASME SFA-5.9, NORSOK M-601',
    shortDesc: 'Nitrogen-enhanced 22Cr-8Ni-3Mo duplex welding filler wire engineered to yield a balanced 50/50 austenite-ferrite weld deposit.',
    fullDesc: 'Formulated with enriched nickel (8.5%) and nitrogen (0.16%) to compensate for rapid cooling during welding, guaranteeing a balanced 40-60% austenite-ferrite microstructure in the as-welded condition. Delivers tensile strength ≥ 750 MPa and PREN ≥ 35.',
    features: [
      'Enriched nickel content guarantees proper austenite reformation in weld metal',
      'Nitrogen addition (0.14-0.20%) restores corrosion resistance in the HAZ',
      'High Charpy V-Notch impact energy (≥ 50 J at -40°C) per NORSOK M-601',
      'ASTM A923 Method C ferric chloride corrosion tested at 25°C with zero pitting'
    ],
    specs: {
      diameterRange: '1.0 mm, 1.2 mm, 1.6 mm, 2.0 mm, 2.4 mm, 3.2 mm',
      packaging: '15 kg Spools (MIG) / 5 kg Cardboard Tube (TIG Rods)',
      shieldingGas: 'Argon + 2% N2 or Ar + 2% CO2 (MIG) | 100% Argon / Ar+2% N2 (TIG)',
      testing: 'Ferrite scope measurement (40-60% Ferrite), ASTM A923 Method C, RT'
    },
    mechanical: {
      tensile: '≥ 750 MPa (All Weld Metal)',
      yield: '≥ 550 MPa',
      elongation: '≥ 25%',
      hardness: '≤ 290 HBW (≤ 28 HRC)',
      maxTemp: '300°C',
      impactTest: '≥ 50 J at -40°C'
    },
    chemistry: {
      cr: '21.5 - 23.5%',
      ni: '7.5 - 9.5%',
      mo: '2.50 - 3.50%',
      n: '0.14 - 0.20%',
      c: '≤ 0.030%',
      mn: '1.00 - 2.00%'
    },
    applications: [
      'Girth welding of UNS S31803 / S32205 duplex piping and flowlines',
      'Offshore subsea manifolds and production separator vessel welds',
      'Seawater reverse osmosis high-pressure pump piping headers',
      'Chemical tanker deck piping and cargo tank fabrication'
    ]
  },
  {
    id: 'aws-ernicrmo3-inconel-625-wire',
    slug: 'aws-ernicrmo3-inconel-625-wire',
    aliases: ['ernicrmo-3', 'inconel-625-welding-wire', 'alloy-625-wire'],
    name: 'AWS A5.14 ERNiCrMo-3 (Inconel 625) Welding Wire',
    specification: 'AWS A5.14 / ASME SFA-5.14',
    grade: 'Grade ERNiCrMo-3 (Inconel Alloy 625)',
    class: 'Nickel-Chromium-Molybdenum-Niobium Filler',
    code: 'AWS ERNICRMO-3 ALLOY 625',
    badge: 'SUPERALLOY & DISSIMILAR',
    uns: 'UNS N06625',
    din: '2.4831 (SG-NiCr21Mo9Nb)',
    productForm: 'Precision MIG Wire & TIG Filler Rods',
    standards: 'AWS A5.14, ASME SFA-5.14, NACE MR0175',
    shortDesc: 'Premier high-nickel superalloy filler wire for welding Inconel 625, 9% Ni cryogenic steels, and dissimilar metal joints.',
    fullDesc: 'Solid nickel-base welding wire alloyed with 22% Chromium, 9% Molybdenum, and 3.6% Niobium. High strength and extreme corrosion resistance make it the universal choice for cladding, welding Inconel 625, joining 9% Nickel cryogenic tanks, and dissimilar welding of stainless to nickel alloys.',
    features: [
      'High all-weld tensile strength (≥ 760 MPa) and high yield (≥ 450 MPa)',
      'Immune to chloride-induced stress corrosion cracking and pitting',
      'Exceptional cryogenic toughness with Charpy energy ≥ 80 J at -196°C',
      'The premier filler metal for cladding high-wear and sour gas surfaces'
    ],
    specs: {
      diameterRange: '0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm, 2.4 mm, 3.2 mm',
      packaging: '15 kg Spool (MIG) / 5 kg Tube (TIG 1000 mm Rods)',
      shieldingGas: '100% Argon or Ar/He mixtures for TIG/MIG',
      testing: 'All-Weld Tensile, Charpy V-Notch at -196°C, 100% RT, PMI'
    },
    mechanical: {
      tensile: '≥ 760 MPa (110,000 psi)',
      yield: '≥ 450 MPa',
      elongation: '≥ 30%',
      hardness: '≤ 250 HBW',
      maxTemp: '980°C',
      impactTest: '≥ 80 J at -196°C'
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
      'Welding and weld-overlay cladding of Inconel 625 piping and valves',
      'Welding 9% Nickel steel LNG storage tanks operating at -196°C',
      'Dissimilar joints between carbon steel, stainless steel, and nickel alloys',
      'Offshore subsea risers and sour oilfield wellhead flowline joints'
    ]
  },
  {
    id: 'astm-a313-ss304-spring-wire',
    slug: 'astm-a313-ss304-spring-wire',
    aliases: ['ss-304-spring-wire', 'stainless-spring-wire', 'a313-304'],
    name: 'ASTM A313 Stainless Steel 304 Spring Wire',
    specification: 'ASTM A313 / ASTM A580',
    grade: 'Type 304 High Tensile Spring Temper',
    class: 'Cold Drawn Spring Temper (Tensile up to 1800 MPa)',
    code: 'A313 SS304 SPRING WIRE',
    badge: '1800 MPA SPRING TEMPER',
    uns: 'UNS S30400 Spring Temper',
    din: '1.4310 (X10CrNi18-8)',
    productForm: 'Coils and Spools for Precision Spring Coiling',
    standards: 'ASTM A313/A313M, EN 10270-3',
    shortDesc: 'Cold-drawn high-tensile stainless steel spring wire providing tensile strength up to 1800 MPa for compression and extension springs.',
    fullDesc: 'Heavy-reduction cold drawn austenitic stainless wire formulated to develop high tensile strength (1400 to 1800 MPa depending on wire diameter) through work hardening. Provides excellent fatigue endurance, resistance to set, and atmospheric corrosion resistance for precision springs.',
    features: [
      'High work-hardened tensile strength (up to 1800 MPa) for springs and wire forms',
      'High elastic limit and resistance to relaxation under repeated cycling',
      'Coated with light soap or nickel film for smooth, high-speed automated coiling',
      'Supplied in continuous catch-weight coils or spool carriers'
    ],
    specs: {
      diameterRange: '0.2 mm to 12.0 mm',
      packaging: '50 kg to 500 kg Coils / Spool carriers',
      surfaceLubricant: 'Soap Coated, Bright Annealed, Nickel Plated',
      testing: 'Cast and Helix verification, Tensile strength, Torsion test, Wrap test'
    },
    mechanical: {
      tensile: '1400 - 1800 MPa (depending on wire diameter)',
      yield: '≥ 85% of Tensile',
      elongation: '≥ 2% in 250 mm',
      hardness: '40 - 48 HRC',
      maxTemp: '280°C'
    },
    chemistry: {
      cr: '18.0 - 20.0%',
      ni: '8.0 - 10.5%',
      c: '0.04 - 0.08%',
      mn: '≤ 2.00%',
      si: '≤ 1.00%'
    },
    applications: [
      'Precision compression, extension, and torsion mechanical springs',
      'Automotive valve springs and electronic connector contact clips',
      'Industrial screen wire mesh crimping and conveyor wire belts',
      'Marine cable wire rope and rigging hardware strands'
    ]
  }
];
