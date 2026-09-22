// Authentic Alternative Product Images from Product Folders
import buttWeldFittingImg from '../assets/Product Images/Butt weld fit/alloy steel.jpg';
import flangesImg from '../assets/Product Images/Flanges/duplex.jpg';
import roundBarsImg from '../assets/Product Images/Rods and BArs/Super duplex.png';
import pipeFittingsImg from '../assets/Product Images/Butt weld fit/alloy steel.jpg';
import tubeFittingsImg from '../assets/Product Images/Forged Fittings/stainles steel.jpg';
import forgedFittingsImg from '../assets/Product Images/Forged Fittings/super duplex.jpeg';
import fastenersImg from '../assets/Product Images/Fasteners/Hastelloy.jpeg';
import sheetsImg from '../assets/Product Images/Sheet and plates/Duplex.png';
import platesImg from '../assets/Product Images/Sheet and plates/Carbon.png';
import pipesImg from '../assets/Product Images/Pipes and Tubes/alloy steel.png';
import tubesImg from '../assets/Product Images/Pipes and Tubes/alloy steel.png';
import coilImg from '../assets/Product Section/Supplier division/Coil/alloy steel.jpg';
import flatBarImg from '../assets/Product Section/Supplier division/flat/super duplex.jpg';

// Authentic Sector Images from Serving Global Mission-Critical Sectors Folder
import aerospaceImg from '../assets/Serving Global Mission-Critical Sectors/aerospace and defence.png';
import heavyEngineeringImg from '../assets/Serving Global Mission-Critical Sectors/heavt engineering.png';
import marineImg from '../assets/Serving Global Mission-Critical Sectors/marine.png';
import nuclearPowerImg from '../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.png';
import petrochemicalImg from '../assets/Serving Global Mission-Critical Sectors/petrochemical.png';
import precisionPipingImg from '../assets/Serving Global Mission-Critical Sectors/precision industrial piping.png';

// Authentic Client Network Partner Logos from Partners Folder
import adaniLogo from '../assets/partners/adani.svg';
import adityaBirlaLogo from '../assets/partners/aditya_birla.svg';
import bhushanPowerLogo from '../assets/partners/bhushan_power.svg';
import godrejLogo from '../assets/partners/godrej.svg';
import haldiaLogo from '../assets/partners/haldia_petrochemicals.svg';
import hpclLogo from '../assets/partners/hindustan_petroleum.svg';
import ioclLogo from '../assets/partners/indian_oil.svg';
import jindalLogo from '../assets/partners/jindal_steel.svg';
import jswLogo from '../assets/partners/jsw_steel.svg';
import relianceLogo from '../assets/partners/reliance.svg';
import tataSteelLogo from '../assets/partners/tata_steel.svg';

// ==========================================
// 1. MATERIALS DATA (Row 1 & Row 2 for continuous marquees)
// ==========================================
export const materialsRow1 = [
  { id: "inc-600", name: "INCONEL", grade: "600" },
  { id: "ti-gr5", name: "TITANIUM", grade: "GRADE 5" },
  { id: "zr-702", name: "ZIRCONIUM", grade: "702" },
  { id: "inc-825", name: "INCOLOY", grade: "825" },
  { id: "hast-c276", name: "HASTELLOY", grade: "C276" },
  { id: "monel-400", name: "MONEL", grade: "400" },
  { id: "cu-ni", name: "COPPER NICKEL", grade: "90/10" }
];

export const materialsRow2 = [
  { id: "sd-uns", name: "SUPER DUPLEX", grade: "UNS S32760" },
  { id: "ss-316", name: "STAINLESS STEEL", grade: "316 / 316L" },
  { id: "sa-904l", name: "SUPER AUSTENITIC", grade: "SS 904L" },
  { id: "duplex-uns", name: "DUPLEX STEEL", grade: "UNS S31803" },
  { id: "na-200", name: "NICKEL ALLOYS", grade: "ALLOY 200" },
  { id: "cs-a106", name: "CARBON STEEL", grade: "ASTM A106" },
  { id: "as-p22", name: "ALLOY STEEL", grade: "P11 / P22 / P91" }
];

// ==========================================
// 2. PRODUCTS DATA (13 Products with Category Tabs)
// ==========================================
export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "fittings", label: "Fittings & Flanges" },
  { id: "pipes", label: "Pipes & Tubes" },
  { id: "plates", label: "Sheets & Plates" },
  { id: "bars", label: "Bars & Fasteners" }
];

export const productsData = [
  {
    id: "butt-weld-fitting",
    name: "Butt Weld Fitting",
    category: "fittings",
    specTag: "ASME B16.9 // ELBOWS, TEES, REDUCERS",
    image: buttWeldFittingImg,
    route: "/products/manufacturer/butt-weld-fittings",
    alt: "Precision industrial buttweld pipe fittings in stainless and alloy steel"
  },
  {
    id: "fasteners",
    name: "Fasteners",
    category: "bars",
    specTag: "ASTM A193 / A194 // STUDS, BOLTS & SPECIALS",
    image: fastenersImg,
    route: "/products/manufacturer/fasteners",
    alt: "High tensile industrial alloy fasteners"
  },
  {
    id: "flanges",
    name: "Flanges",
    category: "fittings",
    specTag: "ASME B16.5 // WELD NECK, SLIP-ON, BLIND",
    image: flangesImg,
    route: "/products/manufacturer/flanges",
    alt: "High-pressure industrial forged steel flanges"
  },
  {
    id: "forge-fitting",
    name: "Forge Fitting",
    category: "fittings",
    specTag: "ASME B16.11 // 3000# / 6000# / 9000#",
    image: forgedFittingsImg,
    route: "/products/manufacturer/forged-fittings",
    alt: "High-pressure forged socket weld and threaded fittings"
  },
  {
    id: "coil",
    name: "Coil",
    category: "plates",
    specTag: "ASTM A240 // HOT & COLD ROLLED COILS",
    image: coilImg,
    route: "/products/supplier/coil",
    alt: "High grade precision cold and hot rolled coils"
  },
  {
    id: "flat-bar",
    name: "Flat Bar",
    category: "bars",
    specTag: "ASTM A276 / A484 // COLD DRAWN & HRAP",
    image: flatBarImg,
    route: "/products/supplier/flat",
    alt: "Engineered stainless steel and titanium flat bars"
  },
  {
    id: "pipes-and-tubes",
    name: "Pipes and Tubes",
    category: "pipes",
    specTag: "ASTM A312 / A269 // SEAMLESS & WELDED",
    image: pipesImg,
    route: "/products/supplier/pipes-tubes",
    alt: "High performance seamless and welded industrial pipes and tubes"
  },
  {
    id: "sheets-and-plates",
    name: "Sheets and Plates",
    category: "plates",
    specTag: "ASTM A240 / ASME SA516 // COLD & HOT ROLLED",
    image: sheetsImg,
    route: "/products/supplier/sheet-and-plates",
    alt: "Industrial stainless and carbon steel sheets and plates"
  },
  {
    id: "rods-and-bars",
    name: "Rods and Bars",
    category: "bars",
    specTag: "ASTM A276 / A479 // BRIGHT & BLACK FINISH",
    image: roundBarsImg,
    route: "/products/supplier/rods-and-bars",
    alt: "Stainless steel and alloy solid rounds and bars"
  }
];

// ==========================================
// 3. WHY CHOOSE US (6 Pillars)
// ==========================================
export const whyChooseData = [
  {
    number: "01",
    title: "ENGINEERED PRODUCT RANGE",
    description: "A comprehensive range of stainless steel, alloy steel, nickel alloys, duplex grades and specialty metals for demanding industrial applications.",
    badge: "MULTI-GRADE MATERIAL RANGE",
    iconName: "ShieldCheck",
    featured: true
  },
  {
    number: "02",
    title: "RELIABLE SOURCING",
    description: "Carefully coordinated sourcing from established mills, stockists and approved supply channels to support consistent material availability.",
    badge: "VERIFIED SUPPLY CHANNELS",
    iconName: "Globe",
    featured: false
  },
  {
    number: "03",
    title: "MATERIAL TRACEABILITY",
    description: "Material identification and documentation are maintained across the supply process to support transparent and controlled order execution.",
    badge: "HEAT & MATERIAL TRACEABILITY",
    iconName: "Award",
    featured: false
  },
  {
    number: "04",
    title: "TECHNICAL PRECISION",
    description: "Product selection and supply are aligned with required grades, dimensions, specifications and applicable engineering standards.",
    badge: "SPECIFICATION-BASED SUPPLY",
    iconName: "Cpu",
    featured: false
  },
  {
    number: "05",
    title: "PROJECT RESPONSIVENESS",
    description: "Coordinated handling from enquiry and material selection through documentation, packing and dispatch for project-driven requirements.",
    badge: "PROJECT-FOCUSED EXECUTION",
    iconName: "Headphones",
    featured: false
  },
  {
    number: "06",
    title: "CONSISTENT DELIVERY",
    description: "Structured order coordination and dispatch planning help maintain dependable material movement for scheduled industrial requirements.",
    badge: "CONTROLLED ORDER DISPATCH",
    iconName: "Truck",
    featured: false
  }
];

// ==========================================
// 4. SERVING GLOBAL MISSIONS AND CRITICAL SECTORS (6 Authentic Sectors)
// ==========================================
export const sectorsData = [
  {
    id: "aerospace-defense",
    name: "Aerospace & Defense",
    shortDesc: "High-integrity titanium and nickel superalloys for aerospace propulsion and defense systems.",
    code: "SECTOR-01",
    image: aerospaceImg,
    tag: "AS9100 STANDARDS"
  },
  {
    id: "heavy-engineering",
    name: "Heavy Engineering",
    shortDesc: "High-tensile structural grades and heavy forged components for industrial plant machinery.",
    code: "SECTOR-02",
    image: heavyEngineeringImg,
    tag: "HEAVY FORGINGS"
  },
  {
    id: "marine-offshore",
    name: "Marine & Offshore",
    shortDesc: "Corrosion-resistant duplex and cupronickel piping for offshore and marine environments.",
    code: "SECTOR-03",
    image: marineImg,
    tag: "OFFSHORE GRADE"
  },
  {
    id: "nuclear-thermal-power",
    name: "Nuclear & Thermal Power",
    shortDesc: "High-purity reactor alloys and pressure-rated tubes engineered for thermal power cycles.",
    code: "SECTOR-04",
    image: nuclearPowerImg,
    tag: "CLASS-1 CODE"
  },
  {
    id: "petrochemical-refineries",
    name: "Petrochemical & Refineries",
    shortDesc: "Corrosion-resistant nickel and chrome-moly piping for severe refinery process units.",
    code: "SECTOR-05",
    image: petrochemicalImg,
    tag: "NACE MR0175"
  },
  {
    id: "precision-industrial-piping",
    name: "Precision Industrial Piping",
    shortDesc: "High-tolerance instrumentation tubing and leak-tight fittings for critical process lines.",
    code: "SECTOR-06",
    image: precisionPipingImg,
    tag: "ZERO-DEFECT BORE"
  }
];

// Backwards compatibility alias
export const industriesData = sectorsData;

// ==========================================
// 5. VALUE ADDED SERVICES (6 Items)
// ==========================================
export const valueAddedData = [
  {
    id: "material-sourcing",
    number: "01",
    title: "MATERIAL SOURCING",
    description: "Sourcing support for standard, special and hard-to-find grades across stainless steel, alloy steel, nickel alloys and other engineering materials.",
    badge: "SPECIAL-GRADE SOURCING"
  },
  {
    id: "quality-inspection",
    number: "02",
    title: "INSPECTION SUPPORT",
    description: "Inspection coordination can be arranged according to project requirements, including dimensional checks, visual inspection and applicable testing.",
    badge: "PROJECT INSPECTION SUPPORT"
  },
  {
    id: "testing-documentation",
    number: "03",
    title: "TESTING & CERTIFICATION",
    description: "Relevant material test reports and supporting quality documentation can be coordinated with supplied materials as required.",
    badge: "MATERIAL TEST DOCUMENTATION"
  },
  {
    id: "custom-requirements",
    number: "04",
    title: "CUSTOM PROCESSING",
    description: "Selected material processing requirements such as cutting, sizing, profiling and preparation can be coordinated according to order specifications.",
    badge: "CUSTOM MATERIAL PREPARATION"
  },
  {
    id: "project-supply",
    number: "05",
    title: "PROJECT COORDINATION",
    description: "Multi-product and project requirements can be coordinated through a structured process covering material planning, documentation and dispatch.",
    badge: "INTEGRATED PROJECT SUPPORT"
  },
  {
    id: "export-packaging",
    number: "06",
    title: "EXPORT PACKAGING",
    description: "Material is prepared and packed according to transportation and handling requirements to support safe movement during domestic or international shipment.",
    badge: "TRANSPORT-READY PACKAGING"
  }
];

// ==========================================
// 6. CLIENT NETWORK (Official Corporate Partner Logos)
// ==========================================
export const clientsData = [
  { name: "Tata Steel", logo: tataSteelLogo },
  { name: "Reliance Industries", logo: relianceLogo },
  { name: "Adani Group", logo: adaniLogo },
  { name: "Indian Oil", logo: ioclLogo },
  { name: "JSW Steel", logo: jswLogo },
  { name: "Jindal Steel & Power", logo: jindalLogo },
  { name: "Aditya Birla Group", logo: adityaBirlaLogo },
  { name: "Hindustan Petroleum", logo: hpclLogo },
  { name: "Bhushan Power & Steel", logo: bhushanPowerLogo },
  { name: "Godrej", logo: godrejLogo },
  { name: "Haldia Petrochemicals", logo: haldiaLogo }
];

// ==========================================
// 7. COUNTRIES WE EXPORT TO (45+ Comprehensive Global Export System)
// ==========================================
export const exportCountryCategories = [
  { id: "all", label: "All Countries" },
  { id: "europe", label: "Europe" },
  { id: "middle-east", label: "Middle East" },
  { id: "asia-pacific", label: "Asia Pacific" },
  { id: "americas", label: "Americas" },
  { id: "africa", label: "Africa" },
  { id: "oceania", label: "Australia / Oceania" }
];

export const exportCountriesList = [
  // Top 20 Countries matching layout screenshot
  // Row 1
  { code: "US", name: "United States", region: "americas", regionLabel: "Americas", flag: "🇺🇸", hub: "Houston / New York" },
  { code: "CA", name: "Canada", region: "americas", regionLabel: "Americas", flag: "🇨🇦", hub: "Vancouver / Montreal" },
  { code: "MX", name: "Mexico", region: "americas", regionLabel: "Americas", flag: "🇲🇽", hub: "Veracruz / Manzanillo" },
  { code: "BR", name: "Brazil", region: "americas", regionLabel: "Americas", flag: "🇧🇷", hub: "Santos / Rio" },
  { code: "AR", name: "Argentina", region: "americas", regionLabel: "Americas", flag: "🇦🇷", hub: "Buenos Aires" },

  // Row 2
  { code: "CL", name: "Chile", region: "americas", regionLabel: "Americas", flag: "🇨🇱", hub: "Valparaíso" },
  { code: "GB", name: "United Kingdom", region: "europe", regionLabel: "Europe", flag: "🇬🇧", hub: "London / Southampton" },
  { code: "DE", name: "Germany", region: "europe", regionLabel: "Europe", flag: "🇩🇪", hub: "Hamburg / Bremen" },
  { code: "FR", name: "France", region: "europe", regionLabel: "Europe", flag: "🇫🇷", hub: "Le Havre / Marseille" },
  { code: "IT", name: "Italy", region: "europe", regionLabel: "Europe", flag: "🇮🇹", hub: "Genoa / Trieste" },

  // Row 3
  { code: "ES", name: "Spain", region: "europe", regionLabel: "Europe", flag: "🇪🇸", hub: "Valencia / Barcelona" },
  { code: "PT", name: "Portugal", region: "europe", regionLabel: "Europe", flag: "🇵🇹", hub: "Lisbon / Sines" },
  { code: "NL", name: "Netherlands", region: "europe", regionLabel: "Europe", flag: "🇳🇱", hub: "Rotterdam" },
  { code: "BE", name: "Belgium", region: "europe", regionLabel: "Europe", flag: "🇧🇪", hub: "Antwerp" },
  { code: "CH", name: "Switzerland", region: "europe", regionLabel: "Europe", flag: "🇨🇭", hub: "Basel / Zurich" },

  // Row 4
  { code: "AT", name: "Austria", region: "europe", regionLabel: "Europe", flag: "🇦🇹", hub: "Vienna" },
  { code: "SE", name: "Sweden", region: "europe", regionLabel: "Europe", flag: "🇸🇪", hub: "Gothenburg" },
  { code: "NO", name: "Norway", region: "europe", regionLabel: "Europe", flag: "🇳🇴", hub: "Stavanger / Oslo" },
  { code: "DK", name: "Denmark", region: "europe", regionLabel: "Europe", flag: "🇩🇰", hub: "Copenhagen" },
  { code: "FI", name: "Finland", region: "europe", regionLabel: "Europe", flag: "🇫🇮", hub: "Helsinki" },

  // Additional Americas & Europe
  { code: "CO", name: "Colombia", region: "americas", regionLabel: "Americas", flag: "🇨🇴", hub: "Cartagena" },
  { code: "PE", name: "Peru", region: "americas", regionLabel: "Americas", flag: "🇵🇪", hub: "Callao" },
  { code: "PL", name: "Poland", region: "europe", regionLabel: "Europe", flag: "🇵🇱", hub: "Gdansk" },
  { code: "TR", name: "Turkey", region: "europe", regionLabel: "Europe", flag: "🇹🇷", hub: "Istanbul / Mersin" },

  // Middle East
  { code: "AE", name: "United Arab Emirates", region: "middle-east", regionLabel: "Middle East", flag: "🇦🇪", hub: "Jebel Ali, Dubai" },
  { code: "SA", name: "Saudi Arabia", region: "middle-east", regionLabel: "Middle East", flag: "🇸🇦", hub: "Dammam / Jeddah" },
  { code: "QA", name: "Qatar", region: "middle-east", regionLabel: "Middle East", flag: "🇶🇦", hub: "Hamad Port, Doha" },
  { code: "OM", name: "Oman", region: "middle-east", regionLabel: "Middle East", flag: "🇴🇲", hub: "Sohar / Salalah" },
  { code: "KW", name: "Kuwait", region: "middle-east", regionLabel: "Middle East", flag: "🇰🇼", hub: "Shuwaikh Port" },
  { code: "BH", name: "Bahrain", region: "middle-east", regionLabel: "Middle East", flag: "🇧🇭", hub: "Khalifa Bin Salman" },
  { code: "IQ", name: "Iraq", region: "middle-east", regionLabel: "Middle East", flag: "🇮🇶", hub: "Umm Qasr" },

  // Asia Pacific
  { code: "IN", name: "India", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇮🇳", hub: "Nhava Sheva / Mundra" },
  { code: "SG", name: "Singapore", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇸🇬", hub: "Port of Singapore" },
  { code: "MY", name: "Malaysia", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇲🇾", hub: "Port Klang" },
  { code: "VN", name: "Vietnam", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇻🇳", hub: "Ho Chi Minh City" },
  { code: "JP", name: "Japan", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇯🇵", hub: "Yokohama / Kobe" },
  { code: "KR", name: "South Korea", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇰🇷", hub: "Busan" },
  { code: "ID", name: "Indonesia", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇮🇩", hub: "Jakarta / Surabaya" },
  { code: "TH", name: "Thailand", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇹🇭", hub: "Laem Chabang" },
  { code: "PH", name: "Philippines", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇵🇭", hub: "Manila" },
  { code: "TW", name: "Taiwan", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇹🇼", hub: "Kaohsiung" },
  { code: "KZ", name: "Kazakhstan", region: "asia-pacific", regionLabel: "Asia Pacific", flag: "🇰🇿", hub: "Aktau Port" },

  // Africa
  { code: "ZA", name: "South Africa", region: "africa", regionLabel: "Africa", flag: "🇿🇦", hub: "Durban / Cape Town" },
  { code: "NG", name: "Nigeria", region: "africa", regionLabel: "Africa", flag: "🇳🇬", hub: "Lagos / Apapa" },
  { code: "EG", name: "Egypt", region: "africa", regionLabel: "Africa", flag: "🇪🇬", hub: "Alexandria / Port Said" },
  { code: "KE", name: "Kenya", region: "africa", regionLabel: "Africa", flag: "🇰🇪", hub: "Mombasa" },
  { code: "GH", name: "Ghana", region: "africa", regionLabel: "Africa", flag: "🇬🇭", hub: "Tema" },
  { code: "DZ", name: "Algeria", region: "africa", regionLabel: "Africa", flag: "🇩🇿", hub: "Algiers" },
  { code: "MA", name: "Morocco", region: "africa", regionLabel: "Africa", flag: "🇲🇦", hub: "Tanger Med" },
  { code: "AO", name: "Angola", region: "africa", regionLabel: "Africa", flag: "🇦🇴", hub: "Luanda" },

  // Australia & Oceania
  { code: "AU", name: "Australia", region: "oceania", regionLabel: "Australia / Oceania", flag: "🇦🇺", hub: "Sydney / Melbourne" },
  { code: "NZ", name: "New Zealand", region: "oceania", regionLabel: "Australia / Oceania", flag: "🇳🇿", hub: "Auckland / Tauranga" }
];

export const exportRegions = [
  {
    region: "North America",
    destinations: ["United States", "Canada", "Mexico"],
    hub: "Houston & New York"
  },
  {
    region: "Europe",
    destinations: ["Germany", "United Kingdom", "Italy", "Netherlands", "France", "Spain", "Norway", "Belgium"],
    hub: "Rotterdam & Antwerp"
  },
  {
    region: "Middle East",
    destinations: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
    hub: "Jebel Ali & Dammam"
  },
  {
    region: "Asia & Southeast Asia",
    destinations: ["Singapore", "Malaysia", "Vietnam", "Japan", "South Korea", "Indonesia", "Thailand"],
    hub: "Singapore & Yokohama"
  },
  {
    region: "Africa",
    destinations: ["South Africa", "Nigeria", "Egypt", "Kenya", "Ghana", "Morocco"],
    hub: "Durban & Alexandria"
  },
  {
    region: "South America",
    destinations: ["Brazil", "Chile", "Argentina", "Colombia", "Peru"],
    hub: "Santos & Valparaíso"
  },
  {
    region: "Australia / Oceania",
    destinations: ["Australia", "New Zealand"],
    hub: "Sydney & Melbourne"
  }
];

export const exportMetrics = [
  { label: "Global Export Markets", value: "48+", numValue: 48, suffix: "Countries" },
  { label: "On-Spec Compliance", value: "100%", numValue: 100, suffix: "Verified" },
  { label: "Annual Supply Volume", value: "25,000+", numValue: 25000, suffix: "Metric Tons" },
  { label: "Global Logistics Hubs", value: "12", numValue: 12, suffix: "Strategic Ports" }
];

