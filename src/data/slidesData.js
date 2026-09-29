import heroSlide1Img from '../assets/pipe/pipe.png';
import heroSlide2Img from '../assets/Product BG/kptron-hero-slide2-partnership.jpg';
import precisionPipesImg from '../assets/Serving Global Mission-Critical Sectors/precision industrial piping.png';
import superiorRoundsImg from '../assets/Product Images/Butt weld fit/alloy steel.jpg';

export const heroSlides = [
  // Slide 01: Core Company / Global Piping
  {
    id: 1,
    slideNumber: "01",
    eyebrow: "LARGE DIAMETER ALLOY STEEL PIPES",
    headline: "ENGINEERED FOR\n[INDUSTRIAL SCALE.]\nBUILT FOR GLOBAL DEMAND.",
    description: "Supplying and exporting large-diameter alloy steel pipes engineered for demanding industrial applications, with a strong focus on quality, dimensional precision, durability, and dependable performance across global markets.",
    primaryCta: {
      label: "Explore Products",
      href: "/products",
      variant: "primary"
    },
    secondaryCta: {
      label: "Get In Touch",
      href: "/contact",
      variant: "secondary"
    },
    image: heroSlide1Img,
    specTag: "LARGE DIAMETER ALLOY STEEL PIPE // GLOBAL EXPORT",
    alt: "Large-diameter alloy steel pipes engineered for industrial scale and global demand"
  },
  // Slide 02: Reliable Solutions & Lasting Partnerships
  {
    id: 2,
    slideNumber: "02",
    eyebrow: "BUILT ON QUALITY",
    headline: "[RELIABLE] SOLUTIONS.\nLASTING PARTNERSHIPS.",
    description: "Committed to dependable products, professional service and long-term relationships with industrial customers.",
    primaryCta: {
      label: "Get In Touch",
      href: "/contact",
      variant: "primary"
    },
    secondaryCta: {
      label: "Explore Products",
      href: "/products",
      variant: "secondary"
    },
    image: heroSlide2Img,
    specTag: "IBR APPROVED TEST CERTIFICATES // DIRECT STOCKIST",
    alt: "Reliable industrial piping solutions and lasting engineering partnerships"
  },
  // Slide 03: Industrial Piping Solutions
  {
    id: 3,
    slideNumber: "03",
    eyebrow: "INDUSTRIAL PIPING SOLUTIONS",
    headline: "[PRECISION] PIPING FOR\nDEMANDING APPLICATIONS.",
    description: "Quality-focused piping solutions designed to meet the requirements of modern industrial systems and critical applications.",
    primaryCta: {
      label: "View Products",
      href: "/products",
      variant: "primary"
    },
    secondaryCta: {
      label: "Request Quote",
      href: "/contact",
      variant: "secondary"
    },
    image: precisionPipesImg,
    specTag: "ALLOY & STAINLESS STEEL PIPES // ASTM A335 & SA 213",
    alt: "Precision industrial pipes, fittings and flanges for demanding process systems"
  },
  // Slide 04: Quality Materials
  {
    id: 4,
    slideNumber: "04",
    eyebrow: "QUALITY MATERIALS",
    headline: "QUALITY [MATERIALS].\nCONSISTENT PERFORMANCE.",
    description: "A focused range of industrial materials and piping products selected to deliver reliability, durability and consistent performance.",
    primaryCta: {
      label: "Explore Materials",
      href: "/materials",
      variant: "primary"
    },
    secondaryCta: {
      label: "Technical Specs",
      href: "/contact",
      variant: "secondary"
    },
    image: superiorRoundsImg,
    specTag: "CARBON, ALLOY & STAINLESS GRADES // HIGH PRESSURE",
    alt: "High performance stainless, alloy and carbon steel piping materials"
  }
];
