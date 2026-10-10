import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MaterialsSection from './components/Materials/MaterialsSection';
import ProductsSection from './components/Products/ProductsSection';
import WhyChooseSection from './components/WhyChoose/WhyChooseSection';
import IndustriesSection from './components/Industries/IndustriesSection';
import ValueAddedSection from './components/ValueAdded/ValueAddedSection';
import CertificatesSection from './components/Certificates/CertificatesSection';
import ClientNetworkSection from './components/Clients/ClientNetworkSection';
import GlobalExportSection from './components/Export/GlobalExportSection';
import FinalCTASection from './components/CTA/FinalCTASection';
import Footer from './components/Footer/Footer';
import FloatingContactButtons from './components/UI/FloatingContactButtons';
import CertificateViewerModal from './components/Certificates/CertificateViewerModal';
import { isProductCategorySlug } from './data/productCatalogData';

// Lazy-loaded routes for ultra-fast initial bundle and snappy navigation
const AboutSection = lazy(() => import('./components/About/AboutSection'));
const PipesProductPage = lazy(() => import('./components/Products/pages/PipesProductPage'));
const PipeGradeDetailView = lazy(() => import('./components/Products/pages/PipeGradeDetailView'));
const SheetsPlatesProductPage = lazy(() => import('./components/Products/pages/SheetsPlatesProductPage'));
const SheetPlateGradeDetailView = lazy(() => import('./components/Products/pages/SheetPlateGradeDetailView'));
const BarsProductPage = lazy(() => import('./components/Products/pages/BarsProductPage'));
const BarGradeDetailView = lazy(() => import('./components/Products/pages/BarGradeDetailView'));
const PipeFittingsProductPage = lazy(() => import('./components/Products/pages/PipeFittingsProductPage'));
const PipeFittingGradeDetailView = lazy(() => import('./components/Products/pages/PipeFittingGradeDetailView'));
const FlangesProductPage = lazy(() => import('./components/Products/pages/FlangesProductPage'));
const FlangeGradeDetailView = lazy(() => import('./components/Products/pages/FlangeGradeDetailView'));
const FlangeTypeDetailView = lazy(() => import('./components/Products/pages/FlangeTypeDetailView'));
const FastenersProductPage = lazy(() => import('./components/Products/pages/FastenersProductPage'));
const FastenerGradeDetailView = lazy(() => import('./components/Products/pages/FastenerGradeDetailView'));
const FastenerTypeDetailView = lazy(() => import('./components/Products/pages/FastenerTypeDetailView'));
const ProductsLandingView = lazy(() => import('./components/Products/pages/ProductsLandingView'));
const DivisionView = lazy(() => import('./components/Products/pages/DivisionView'));
const ProductFamilyView = lazy(() => import('./components/Products/pages/ProductFamilyView'));
const ProductDetailView = lazy(() => import('./components/Products/pages/ProductDetailView'));
const MaterialsLandingView = lazy(() => import('./components/Materials/pages/MaterialsLandingView'));
const MaterialDetailView = lazy(() => import('./components/Materials/pages/MaterialDetailView'));
const ContactPage = lazy(() => import('./components/Contact/ContactPage'));

import { preloadRoute } from './utils/preloadRoute';
import QuoteModal from './components/UI/QuoteModal';
import { 
  isFlangeMaterialSlug, 
  isFlangeTypeSlug, 
  normalizeMaterialSlug, 
  normalizeFlangeTypeSlug,
  isFlangeGradeSlug,
  normalizeFlangeGradeSlug,
  matchFlangeTypeAndGrade
} from './data/flangeTypesData';
import {
  isFastenerMaterialSlug,
  isFastenerTypeSlug,
  normalizeFastenerMaterialSlug,
  normalizeFastenerTypeSlug,
  isFastenerGradeSlug,
  normalizeFastenerGradeSlug,
  matchFastenerTypeAndGrade
} from './data/fastenerTypesData';
import { formatProductUrl, cleanProductSlug } from './utils/urlUtils';
import { 
  resolveProductFromPath, 
  SUFFIX_MANUFACTURED, 
  SUFFIX_STOCKIST 
} from './data/productSeoRegistry';
import { getFastenersCategoryBySlug } from './data/fastenersData';
import { getPipeCategoryBySlug } from './data/pipesData';
import { getSheetsPlatesCategoryBySlug } from './data/sheetsPlatesCoilsData';
import { getBarsCategoryBySlug } from './data/barsData';
import { getPipeFittingsCategoryBySlug } from './data/pipeFittingsData';

import './App.css';

/**
 * Route parser for native history-based client routing
 */
function parseRoute(pathname = (typeof window !== 'undefined' ? window.location.pathname : '')) {
  let activePath = pathname;
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;
    if (hash && (hash.startsWith('#products') || hash.startsWith('#/products') || hash.startsWith('#category') || hash.startsWith('#/category'))) {
      activePath = hash.replace(/^#\/?/, '/');
    }
  }

  const cleanPath = (activePath || '').split('?')[0].split('#')[0];
  const clean = cleanPath.toLowerCase();

  if (clean.includes('about')) {
    return { page: 'about' };
  }

  if (clean.includes('contact')) {
    return { page: 'contact' };
  }

  if (clean.startsWith('/materials')) {
    const raw = cleanPath.replace(/^\/materials\/?/i, '');
    const parts = raw.split('/').filter(Boolean);

    if (parts.length === 0) {
      return { page: 'materials', view: 'landing' };
    }

    return { page: 'materials', view: 'material', materialSlug: parts[0].toLowerCase() };
  }

  if (clean.startsWith('/products')) {
    // Extract query parameters like ?grade=...
    let queryGrade = null;
    if (activePath.includes('?')) {
      const q = activePath.split('?')[1].split('#')[0];
      queryGrade = new URLSearchParams(q).get('grade');
    } else if (typeof window !== 'undefined' && window.location.search) {
      queryGrade = new URLSearchParams(window.location.search).get('grade');
    }

    // 0. Primary SEO Registry Resolution: Check if path matches any clean alternating SEO URL or alias
    const resolvedProduct = resolveProductFromPath(cleanPath);
    if (resolvedProduct) {
      const isManufactured = resolvedProduct.suffix === SUFFIX_MANUFACTURED;
      const isStockist = resolvedProduct.suffix === SUFFIX_STOCKIST;

      if (resolvedProduct.division === 'pipes') {
        return {
          page: 'products',
          view: 'pipe-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          gradeSlug: resolvedProduct.gradeSlug || queryGrade,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
      if (resolvedProduct.division === 'flanges') {
        if (resolvedProduct.typeSlug) {
          const pathSegments = cleanPath.replace(/^\/products\/?/i, '').split('/').filter(Boolean);
          const segmentGrade = (pathSegments.length >= 4 && pathSegments[0] === 'flanges') ? pathSegments[3] : null;

          return {
            page: 'products',
            view: 'flange-type-detail',
            materialSlug: resolvedProduct.materialSlug,
            typeSlug: resolvedProduct.typeSlug,
            gradeSlug: queryGrade || segmentGrade || resolvedProduct.gradeSlug || null,
            canonicalUrl: resolvedProduct.canonicalUrl,
            isManufacturedInMumbai: isManufactured,
            isStockistInMumbai: isStockist
          };
        }
        return {
          page: 'products',
          view: 'flange-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          materialSlug: resolvedProduct.materialSlug,
          gradeSlug: resolvedProduct.gradeSlug || queryGrade,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
      if (resolvedProduct.division === 'fasteners') {
        if (resolvedProduct.typeSlug) {
          const pathSegments = cleanPath.replace(/^\/products\/?/i, '').split('/').filter(Boolean);
          const segmentGrade = (pathSegments.length >= 4 && pathSegments[0] === 'fasteners') ? pathSegments[3] : null;

          return {
            page: 'products',
            view: 'fastener-type-detail',
            materialSlug: resolvedProduct.materialSlug,
            typeSlug: resolvedProduct.typeSlug,
            gradeSlug: queryGrade || segmentGrade || resolvedProduct.gradeSlug || null,
            canonicalUrl: resolvedProduct.canonicalUrl,
            isManufacturedInMumbai: isManufactured,
            isStockistInMumbai: isStockist
          };
        }
        return {
          page: 'products',
          view: 'fastener-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          materialSlug: resolvedProduct.materialSlug,
          gradeSlug: resolvedProduct.gradeSlug || queryGrade,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
      if (resolvedProduct.division === 'sheets-plates') {
        return {
          page: 'products',
          view: 'sheet-plate-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          gradeSlug: resolvedProduct.gradeSlug,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
      if (resolvedProduct.division === 'bars') {
        return {
          page: 'products',
          view: 'bar-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          gradeSlug: resolvedProduct.gradeSlug,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
      if (resolvedProduct.division === 'pipe-fittings') {
        return {
          page: 'products',
          view: 'pipe-fitting-grade-detail',
          categorySlug: resolvedProduct.categorySlug,
          gradeSlug: resolvedProduct.gradeSlug,
          canonicalUrl: resolvedProduct.canonicalUrl,
          isManufacturedInMumbai: isManufactured,
          isStockistInMumbai: isStockist
        };
      }
    }

    const raw = cleanPath.replace(/^\/products\/?/i, '');
    let rawParts = raw.split('/').filter(Boolean);

    // If first segment is 'category', e.g. /products/category/...
    if (rawParts.length > 0 && rawParts[0].toLowerCase() === 'category') {
      rawParts.shift();
    }

    const isManufacturedInMumbai = clean.includes('manufactured-in-mumbai');
    const isStockistInMumbai = clean.includes('stockist-in-mumbai');
    const parts = rawParts
      .filter(p => p.toLowerCase() !== 'manufactured-in-mumbai' && p.toLowerCase() !== 'stockist-in-mumbai')
      .map(p => cleanProductSlug(p));

    if (parts.length === 0) {
      return { page: 'products', view: 'landing', isManufacturedInMumbai };
    }

    const p0 = parts[0].toLowerCase();

    // Dedicated Pipes Product Page & Grade Detail Routes
    if (p0 === 'pipes' || p0 === 'pipe' || p0 === 'pipes-and-tubes' || p0 === 'pipes-tubes') {
      if (parts.length === 1) {
        return { page: 'products', view: 'pipes-listing', materialSlug: null, isManufacturedInMumbai };
      }
      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'pipes-listing', materialSlug: null, isManufacturedInMumbai };
        }
        const cat = getPipeCategoryBySlug(p1);
        if (cat) {
          return { page: 'products', view: 'pipes-listing', materialSlug: cat.materialSlug || cat.slug || p1, isManufacturedInMumbai };
        }
        return { 
          page: 'products', 
          view: 'pipe-grade-detail', 
          categorySlug: p1,
          gradeSlug: null,
          isManufacturedInMumbai 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'pipe-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase(),
          isManufacturedInMumbai 
        };
      }
    }

    // Dedicated Sheets, Plates & Coils Product Page & Grade Detail Routes
    if (
      p0 === 'sheets-plates-coils' ||
      p0 === 'sheet-plates-coils' ||
      p0 === 'sheets-and-plates' ||
      p0 === 'sheet-and-plates' ||
      p0 === 'sheets-plates' ||
      p0 === 'sheets' ||
      p0 === 'plates' ||
      p0 === 'coils'
    ) {
      if (parts.length === 1) {
        return { page: 'products', view: 'sheets-plates-listing', materialSlug: null, isManufacturedInMumbai };
      }
      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'sheets-plates-listing', materialSlug: null, isManufacturedInMumbai };
        }
        const cat = getSheetsPlatesCategoryBySlug(p1);
        if (cat) {
          return { page: 'products', view: 'sheets-plates-listing', materialSlug: cat.materialSlug || cat.slug || p1, isManufacturedInMumbai };
        }
        return { 
          page: 'products', 
          view: 'sheet-plate-grade-detail', 
          categorySlug: p1,
          gradeSlug: null,
          isManufacturedInMumbai 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'sheet-plate-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase(),
          isManufacturedInMumbai 
        };
      }
    }

    // Dedicated Bars Product Page & Grade Detail Routes
    if (
      p0 === 'bars' ||
      p0 === 'bar' ||
      p0 === 'rods-and-bars' ||
      p0 === 'rods-bars' ||
      p0 === 'rods-and-bar'
    ) {
      if (parts.length === 1) {
        return { page: 'products', view: 'bars-listing', materialSlug: null, isManufacturedInMumbai };
      }
      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'bars-listing', materialSlug: null, isManufacturedInMumbai };
        }
        const cat = getBarsCategoryBySlug(p1);
        if (cat) {
          return { page: 'products', view: 'bars-listing', materialSlug: cat.materialSlug || cat.slug || p1, isManufacturedInMumbai };
        }
        return { 
          page: 'products', 
          view: 'bar-grade-detail', 
          categorySlug: p1,
          gradeSlug: null,
          isManufacturedInMumbai 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'bar-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase(),
          isManufacturedInMumbai 
        };
      }
    }

    // Dedicated Pipe Fittings Product Page & Grade Detail Routes
    if (
      p0 === 'pipe-fittings' ||
      p0 === 'pipe-fitting' ||
      p0 === 'fittings' ||
      p0 === 'butt-weld-fittings' ||
      p0 === 'buttweld-fittings'
    ) {
      if (parts.length === 1) {
        return { page: 'products', view: 'pipe-fittings-listing', materialSlug: null, isManufacturedInMumbai };
      }
      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'pipe-fittings-listing', materialSlug: null, isManufacturedInMumbai };
        }
        const cat = getPipeFittingsCategoryBySlug(p1);
        if (cat) {
          return { page: 'products', view: 'pipe-fittings-listing', materialSlug: cat.materialSlug || cat.slug || p1, isManufacturedInMumbai };
        }
        return { 
          page: 'products', 
          view: 'pipe-fitting-grade-detail', 
          categorySlug: p1,
          gradeSlug: null,
          isManufacturedInMumbai 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'pipe-fitting-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase(),
          isManufacturedInMumbai 
        };
      }
    }

    // Dedicated Flanges Product Page, Types of Flanges & Grade Detail Routes
    if (p0 === 'flanges' || p0 === 'flange') {
      if (parts.length === 1) {
        return { page: 'products', view: 'flanges-listing', materialSlug: null, isManufacturedInMumbai };
      }

      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'flanges-listing', materialSlug: null, isManufacturedInMumbai };
        }
        if (isFlangeMaterialSlug(p1)) {
          return { 
            page: 'products', 
            view: 'flanges-listing', 
            materialSlug: normalizeMaterialSlug(p1),
            isManufacturedInMumbai
          };
        }
        if (isFlangeTypeSlug(p1)) {
          return { 
            page: 'products', 
            view: 'flange-type-detail', 
            materialSlug: 'carbon-steel', 
            typeSlug: normalizeFlangeTypeSlug(p1),
            gradeSlug: null,
            isManufacturedInMumbai
          };
        }
        return { 
          page: 'products', 
          view: 'flange-grade-detail', 
          categorySlug: p1,
          materialSlug: normalizeMaterialSlug(p1),
          gradeSlug: null,
          isManufacturedInMumbai
        };
      }

      if (parts.length === 3) {
        const p1 = parts[1].toLowerCase();
        const p2 = parts[2].toLowerCase();
        const normMat = normalizeMaterialSlug(p1);

        // Case: /products/flanges/:material/types
        if (p2 === 'types' || p2 === 'type') {
          return { 
            page: 'products', 
            view: 'flanges-listing', 
            materialSlug: normMat,
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/grades
        if (p2 === 'grades' || p2 === 'grade') {
          return { 
            page: 'products', 
            view: 'flanges-listing', 
            materialSlug: normMat,
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/:typeSlug
        if (isFlangeTypeSlug(p2)) {
          return { 
            page: 'products', 
            view: 'flange-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFlangeTypeSlug(p2),
            gradeSlug: null,
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/:gradeSlug
        if (isFlangeGradeSlug(normMat, p2)) {
          return { 
            page: 'products', 
            view: 'flange-grade-detail', 
            materialSlug: normMat,
            categorySlug: p1, 
            gradeSlug: normalizeFlangeGradeSlug(normMat, p2),
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/:typeSlug-:gradeSlug (e.g. threaded-flange-316l)
        const combo = matchFlangeTypeAndGrade(normMat, p2);
        if (combo) {
          return {
            page: 'products',
            view: 'flange-type-detail',
            materialSlug: normMat,
            typeSlug: combo.typeSlug,
            gradeSlug: combo.gradeSlug,
            isManufacturedInMumbai
          };
        }

        // Default legacy: /products/flanges/:categorySlug/:gradeSlug
        return { 
          page: 'products', 
          view: 'flange-grade-detail', 
          materialSlug: normMat,
          categorySlug: p1, 
          gradeSlug: p2,
          isManufacturedInMumbai
        };
      }

      if (parts.length >= 4) {
        const p1 = parts[1].toLowerCase();
        const p2 = parts[2].toLowerCase();
        const p3 = parts[3].toLowerCase();
        const normMat = normalizeMaterialSlug(p1);

        // Case: /products/flanges/:material/types/:typeSlug
        if ((p2 === 'types' || p2 === 'type') && isFlangeTypeSlug(p3)) {
          const p4 = parts[4] ? parts[4].toLowerCase() : null;
          return { 
            page: 'products', 
            view: 'flange-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFlangeTypeSlug(p3),
            gradeSlug: p4 ? normalizeFlangeGradeSlug(normMat, p4) : null,
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/grades/:gradeSlug
        if ((p2 === 'grades' || p2 === 'grade') && isFlangeGradeSlug(normMat, p3)) {
          return { 
            page: 'products', 
            view: 'flange-grade-detail', 
            materialSlug: normMat,
            categorySlug: p1, 
            gradeSlug: normalizeFlangeGradeSlug(normMat, p3),
            isManufacturedInMumbai
          };
        }

        // Case: /products/flanges/:material/:typeSlug/:gradeSlug (Level 4 Combination!)
        if (isFlangeTypeSlug(p2)) {
          return { 
            page: 'products', 
            view: 'flange-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFlangeTypeSlug(p2),
            gradeSlug: normalizeFlangeGradeSlug(normMat, p3) || p3,
            isManufacturedInMumbai
          };
        }

        // Default legacy
        return { 
          page: 'products', 
          view: 'flange-grade-detail', 
          materialSlug: normMat,
          categorySlug: p1, 
          gradeSlug: p2,
          isManufacturedInMumbai
        };
      }
    }

    // Dedicated Fasteners Product Page, Types of Fasteners & Grade Detail Routes
    if (p0 === 'fasteners' || p0 === 'fastener') {
      if (parts.length === 1) {
        return { page: 'products', view: 'fasteners-listing', materialSlug: null, isManufacturedInMumbai };
      }

      if (parts.length === 2) {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'all') {
          return { page: 'products', view: 'fasteners-listing', materialSlug: null, isManufacturedInMumbai };
        }
        if (isFastenerMaterialSlug(p1)) {
          return { 
            page: 'products', 
            view: 'fasteners-listing', 
            materialSlug: normalizeFastenerMaterialSlug(p1),
            isManufacturedInMumbai
          };
        }
        if (isFastenerTypeSlug(p1)) {
          return { 
            page: 'products', 
            view: 'fastener-type-detail', 
            materialSlug: 'stainless-steel', 
            typeSlug: normalizeFastenerTypeSlug(p1),
            gradeSlug: null,
            isManufacturedInMumbai
          };
        }
        return { 
          page: 'products', 
          view: 'fastener-grade-detail', 
          categorySlug: p1,
          materialSlug: normalizeFastenerMaterialSlug(p1),
          gradeSlug: null,
          isManufacturedInMumbai
        };
      }

      if (parts.length === 3) {
        const p1 = parts[1].toLowerCase();
        const p2 = parts[2].toLowerCase();
        const normMat = normalizeFastenerMaterialSlug(p1);

        // Case: /products/fasteners/:material/types
        if (p2 === 'types' || p2 === 'type') {
          return { 
            page: 'products', 
            view: 'fasteners-listing', 
            materialSlug: normMat,
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/grades
        if (p2 === 'grades' || p2 === 'grade') {
          return { 
            page: 'products', 
            view: 'fasteners-listing', 
            materialSlug: normMat,
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/:typeSlug
        if (isFastenerTypeSlug(p2)) {
          return { 
            page: 'products', 
            view: 'fastener-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFastenerTypeSlug(p2),
            gradeSlug: null,
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/:gradeSlug
        if (isFastenerGradeSlug(normMat, p2)) {
          return { 
            page: 'products', 
            view: 'fastener-grade-detail', 
            materialSlug: normMat,
            categorySlug: p1, 
            gradeSlug: normalizeFastenerGradeSlug(normMat, p2),
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/:typeSlug-:gradeSlug
        const combo = matchFastenerTypeAndGrade(normMat, p2);
        if (combo) {
          return {
            page: 'products',
            view: 'fastener-type-detail',
            materialSlug: normMat,
            typeSlug: combo.typeSlug,
            gradeSlug: combo.gradeSlug,
            isManufacturedInMumbai
          };
        }

        // Default legacy: /products/fasteners/:categorySlug/:gradeSlug
        return { 
          page: 'products', 
          view: 'fastener-grade-detail', 
          materialSlug: normMat,
          categorySlug: p1, 
          gradeSlug: p2,
          isManufacturedInMumbai
        };
      }

      if (parts.length >= 4) {
        const p1 = parts[1].toLowerCase();
        const p2 = parts[2].toLowerCase();
        const p3 = parts[3].toLowerCase();
        const normMat = normalizeFastenerMaterialSlug(p1);

        // Case: /products/fasteners/:material/types/:typeSlug
        if ((p2 === 'types' || p2 === 'type') && isFastenerTypeSlug(p3)) {
          const p4 = parts[4] ? parts[4].toLowerCase() : null;
          return { 
            page: 'products', 
            view: 'fastener-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFastenerTypeSlug(p3),
            gradeSlug: p4 ? normalizeFastenerGradeSlug(normMat, p4) : null,
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/grades/:gradeSlug
        if ((p2 === 'grades' || p2 === 'grade') && isFastenerGradeSlug(normMat, p3)) {
          return { 
            page: 'products', 
            view: 'fastener-grade-detail', 
            materialSlug: normMat,
            categorySlug: p1, 
            gradeSlug: normalizeFastenerGradeSlug(normMat, p3),
            isManufacturedInMumbai
          };
        }

        // Case: /products/fasteners/:material/:typeSlug/:gradeSlug (Level 4 Combination!)
        if (isFastenerTypeSlug(p2)) {
          return { 
            page: 'products', 
            view: 'fastener-type-detail', 
            materialSlug: normMat, 
            typeSlug: normalizeFastenerTypeSlug(p2),
            gradeSlug: normalizeFastenerGradeSlug(normMat, p3) || p3,
            isManufacturedInMumbai
          };
        }

        // Default legacy
        return { 
          page: 'products', 
          view: 'fastener-grade-detail', 
          materialSlug: normMat,
          categorySlug: p1, 
          gradeSlug: p2,
          isManufacturedInMumbai
        };
      }
    }

    if (parts.length === 1) {
      if (p0 === 'manufacturer' || p0 === 'supplier') {
        return { page: 'products', view: 'division', divisionSlug: p0 };
      }
      if (isProductCategorySlug(p0)) {
        return { page: 'products', view: 'detail', productSlug: p0 };
      }
      return { page: 'products', view: 'family', groupSlug: parts[0] };
    }

    if (parts.length === 2) {
      if (p0 === 'manufacturer' || p0 === 'supplier') {
        const p1 = parts[1].toLowerCase();
        if (p1 === 'pipes' || p1 === 'pipe' || p1 === 'pipes-tubes' || p1 === 'pipes-and-tubes') {
          return { page: 'products', view: 'pipes-listing' };
        }
        if (
          p1 === 'sheet-and-plates' ||
          p1 === 'sheets-and-plates' ||
          p1 === 'sheets-plates-coils' ||
          p1 === 'sheet-plates-coils' ||
          p1 === 'sheets' ||
          p1 === 'plates'
        ) {
          return { page: 'products', view: 'sheets-plates-listing' };
        }
        if (
          p1 === 'rods-and-bars' ||
          p1 === 'rods-bars' ||
          p1 === 'bars' ||
          p1 === 'bar' ||
          p1 === 'rods-and-bar'
        ) {
          return { page: 'products', view: 'bars-listing' };
        }
        if (
          p1 === 'butt-weld-fittings' ||
          p1 === 'buttweld-fittings' ||
          p1 === 'pipe-fittings' ||
          p1 === 'pipe-fitting' ||
          p1 === 'fittings'
        ) {
          return { page: 'products', view: 'pipe-fittings-listing' };
        }
        if (p1 === 'flanges' || p1 === 'flange') {
          return { page: 'products', view: 'flanges-listing' };
        }
        if (p1 === 'fasteners' || p1 === 'fastener') {
          return { page: 'products', view: 'fasteners-listing' };
        }
        if (isProductCategorySlug(parts[1])) {
          return { page: 'products', view: 'detail', divisionSlug: p0, productSlug: parts[1].toLowerCase() };
        }
        return { page: 'products', view: 'family', divisionSlug: p0, groupSlug: parts[1] };
      }
      return { page: 'products', view: 'detail', groupSlug: parts[0], productSlug: parts[1] };
    }

    if (parts.length >= 3) {
      if (p0 === 'supplier' || p0 === 'manufacturer') {
        const p1 = parts[1].toLowerCase();
        if (
          p1 === 'sheet-and-plates' ||
          p1 === 'sheets-and-plates' ||
          p1 === 'sheets-plates-coils' ||
          p1 === 'sheet-plates-coils'
        ) {
          return {
            page: 'products',
            view: 'sheet-plate-grade-detail',
            categorySlug: parts[2].toLowerCase(),
            gradeSlug: parts[3] ? parts[3].toLowerCase() : null
          };
        }
        if (
          p1 === 'rods-and-bars' ||
          p1 === 'rods-bars' ||
          p1 === 'bars' ||
          p1 === 'bar'
        ) {
          return {
            page: 'products',
            view: 'bar-grade-detail',
            categorySlug: parts[2].toLowerCase(),
            gradeSlug: parts[3] ? parts[3].toLowerCase() : null
          };
        }
        if (
          p1 === 'butt-weld-fittings' ||
          p1 === 'buttweld-fittings' ||
          p1 === 'pipe-fittings' ||
          p1 === 'pipe-fitting' ||
          p1 === 'fittings'
        ) {
          return {
            page: 'products',
            view: 'pipe-fitting-grade-detail',
            categorySlug: parts[2].toLowerCase(),
            gradeSlug: parts[3] ? parts[3].toLowerCase() : null
          };
        }
        if (p1 === 'flanges' || p1 === 'flange') {
          return {
            page: 'products',
            view: 'flange-grade-detail',
            categorySlug: parts[2].toLowerCase(),
            gradeSlug: parts[3] ? parts[3].toLowerCase() : null
          };
        }
        if (p1 === 'fasteners' || p1 === 'fastener') {
          return {
            page: 'products',
            view: 'fastener-grade-detail',
            categorySlug: parts[2].toLowerCase(),
            gradeSlug: parts[3] ? parts[3].toLowerCase() : null
          };
        }
      }
      return {
        page: 'products',
        view: 'detail',
        divisionSlug: parts[0].toLowerCase(),
        groupSlug: parts[1],
        productSlug: parts[2]
      };
    }
  }

  return { page: 'home' };
}

/**
 * Redcore Steels - Application Root
 */
export default function App() {
  const [route, setRoute] = useState(parseRoute);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalContext, setQuoteModalContext] = useState(null);

  const openQuoteModal = useCallback((context = null) => {
    setQuoteModalContext(context);
    setQuoteModalOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setQuoteModalOpen(false);
    setQuoteModalContext(null);
  }, []);

  // Centralized page and section navigation handler
  const navigateTo = useCallback((target, param = null) => {
    // If target is a path string starting with '/'
    if (typeof target === 'string' && target.startsWith('/')) {
      const formattedTarget = formatProductUrl(target);
      const cleanPath = formattedTarget.split('?')[0].split('#')[0];
      const targetQuery = formattedTarget.includes('?') ? '?' + formattedTarget.split('?')[1] : '';
      if (window.location.pathname !== cleanPath || window.location.search !== targetQuery) {
        window.history.pushState({}, '', formattedTarget);
      }
      setRoute(parseRoute(cleanPath));
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (target === 'about') {
      if (window.location.pathname !== '/about') {
        window.history.pushState({ page: 'about' }, '', '/about');
      }
      setRoute({ page: 'about' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (target === 'contact') {
      if (window.location.pathname !== '/contact') {
        window.history.pushState({ page: 'contact' }, '', '/contact');
      }
      setRoute({ page: 'contact' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (target === 'materials') {
      const dest = param ? (param.startsWith('/') ? param : `/materials/${param}`) : '/materials';
      if (window.location.pathname !== dest) {
        window.history.pushState({ page: 'materials' }, '', dest);
      }
      setRoute(parseRoute(dest));
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (target === 'products') {
      const rawDest = param ? (param.startsWith('/') ? param : `/products/${param}`) : '/products';
      const dest = formatProductUrl(rawDest);
      if (window.location.pathname !== dest) {
        window.history.pushState({ page: 'products' }, '', dest);
      }
      setRoute(parseRoute(dest));
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Navigate to Home with optional section scrolling
    const targetUrl = param ? `/#${param}` : '/';
    if (window.location.pathname !== '/' || param) {
      window.history.pushState({ page: 'home', section: param }, '', targetUrl);
    }
    setRoute({ page: 'home' });

    if (param) {
      setTimeout(() => {
        const el = document.getElementById(param);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  // Listen to browser Back and Forward navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = parseRoute(window.location.pathname);
      setRoute(prevRoute => {
        // If navigating within the same product detail view (e.g. query param changed), do not reset scroll!
        const isSameProductDetail =
          prevRoute.page === 'products' &&
          nextRoute.page === 'products' &&
          prevRoute.view === 'detail' &&
          nextRoute.view === 'detail' &&
          prevRoute.productSlug === nextRoute.productSlug;

        if (!isSameProductDetail) {
          const hash = window.location.hash;
          if (hash && nextRoute.page === 'home') {
            setTimeout(() => {
              const el = document.getElementById(hash.replace('#', ''));
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 80);
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }
        return nextRoute;
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle canonical permanent client-side redirects and canonical link updates (Requirement 9 & 10)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canonicalPath = route?.canonicalUrl || window.location.pathname;
      const currentPath = window.location.pathname.toLowerCase();

      // Permanent redirect if current path differs from canonicalUrl
      if (route?.canonicalUrl && currentPath !== route.canonicalUrl.toLowerCase() && !window.location.hash) {
        const search = window.location.search || '';
        window.history.replaceState(null, '', `${route.canonicalUrl}${search}`);
      }

      // Update <link rel="canonical"> in document head
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `${window.location.origin}${canonicalPath}`);
    }
  }, [route]);

  // Normalize initial address bar URL to SEO format if landing on a product route
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (
        currentPath.startsWith('/products') &&
        currentPath !== '/products' &&
        !currentPath.includes('manufactured-in-mumbai') &&
        !currentPath.includes('stockist-in-mumbai')
      ) {
        const formatted = formatProductUrl(currentPath + window.location.search + window.location.hash);
        if (formatted !== currentPath) {
          window.history.replaceState({}, '', formatted);
        }
      }
    }
  }, []);

  // Idle preloading of secondary route bundles once initial page load is quiet
  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const idleId = idleCallback(() => {
      preloadRoute('about');
      preloadRoute('contact');
      preloadRoute('products');
      preloadRoute('materials');
    });
    return () => {
      if (window.cancelIdleCallback && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <div className="app-container">
      {/* 1. Global Navbar with integrated page navigation */}
      <Navbar
        currentPage={route.page}
        onNavigate={navigateTo}
        onSelectCertificate={setActiveCertificate}
        onOpenQuoteModal={openQuoteModal}
      />

      {/* 2. Page Switcher with Instant Suspense Fallback */}
      {route.page === 'about' ? (
        /* Dedicated Independent About Page */
        <main id="main-content" className="about-page-main">
          <Suspense fallback={<div className="page-load-shell about-shell" aria-hidden="true" />}>
            <AboutSection 
              onNavigate={navigateTo} 
              onSelectCertificate={setActiveCertificate}
              onOpenQuoteModal={openQuoteModal}
            />
          </Suspense>
        </main>
      ) : route.page === 'contact' ? (
        /* Dedicated Independent Contact Page */
        <main id="main-content" className="contact-page-main">
          <Suspense fallback={<div className="page-load-shell contact-shell" aria-hidden="true" />}>
            <ContactPage onNavigate={navigateTo} />
          </Suspense>
        </main>
      ) : route.page === 'materials' ? (
        /* Dedicated Materials Catalog Pages */
        <main id="main-content" className="materials-page-main">
          <Suspense fallback={<div className="page-load-shell materials-shell" aria-hidden="true" />}>
            {route.view === 'material' ? (
              <MaterialDetailView
                materialSlug={route.materialSlug}
                onNavigate={navigateTo}
              />
            ) : (
              <MaterialsLandingView onNavigate={navigateTo} />
            )}
          </Suspense>
        </main>
      ) : route.page === 'products' ? (
        /* Dedicated Bright Products Catalog Pages */
        <main id="main-content" className="products-page-main">
          <Suspense fallback={<div className="page-load-shell products-shell" aria-hidden="true" />}>
            {route.view === 'flange-type-detail' ? (
              <FlangeTypeDetailView
                materialSlug={route.materialSlug}
                typeSlug={route.typeSlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'flanges-listing' ? (
              <FlangesProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'flange-grade-detail' ? (
              <FlangeGradeDetailView
                categorySlug={route.categorySlug}
                materialSlug={route.materialSlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'fastener-type-detail' ? (
              <FastenerTypeDetailView
                materialSlug={route.materialSlug}
                typeSlug={route.typeSlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'fasteners-listing' ? (
              <FastenersProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai} 
                isStockistInMumbai={route.isStockistInMumbai} 
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'fastener-grade-detail' ? (
              <FastenerGradeDetailView
                categorySlug={route.categorySlug}
                materialSlug={route.materialSlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'pipe-fittings-listing' ? (
              <PipeFittingsProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai} 
                isStockistInMumbai={route.isStockistInMumbai} 
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'pipe-fitting-grade-detail' ? (
              <PipeFittingGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'bars-listing' ? (
              <BarsProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai} 
                isStockistInMumbai={route.isStockistInMumbai} 
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'bar-grade-detail' ? (
              <BarGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'pipes-listing' ? (
              <PipesProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai} 
                isStockistInMumbai={route.isStockistInMumbai} 
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'pipe-grade-detail' ? (
              <PipeGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'sheets-plates-listing' ? (
              <SheetsPlatesProductPage 
                materialSlug={route.materialSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai} 
                isStockistInMumbai={route.isStockistInMumbai} 
                onNavigate={navigateTo} 
                onOpenQuoteModal={openQuoteModal} 
              />
            ) : route.view === 'sheet-plate-grade-detail' ? (
              <SheetPlateGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                isManufacturedInMumbai={route.isManufacturedInMumbai}
                isStockistInMumbai={route.isStockistInMumbai}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'division' ? (
              <DivisionView
                divisionSlug={route.divisionSlug}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'family' ? (
              <ProductFamilyView
                divisionSlug={route.divisionSlug}
                groupSlug={route.groupSlug}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : route.view === 'detail' ? (
              <ProductDetailView
                divisionSlug={route.divisionSlug}
                groupSlug={route.groupSlug}
                productSlug={route.productSlug}
                onNavigate={navigateTo}
                onOpenQuoteModal={openQuoteModal}
              />
            ) : (
              <ProductsLandingView onNavigate={navigateTo} onOpenQuoteModal={openQuoteModal} />
            )}
          </Suspense>
        </main>
      ) : (
        /* Full Commercial Home Page (About and Products catalog views are isolated) */
        <main id="main-content" className="home-page-main">
          <Hero onNavigate={navigateTo} onOpenQuoteModal={openQuoteModal} />
          <ProductsSection onNavigate={navigateTo} />
          <MaterialsSection onNavigate={navigateTo} />
          <WhyChooseSection />
          <IndustriesSection />
          <ValueAddedSection />
          <CertificatesSection onSelectCertificate={setActiveCertificate} />
          <ClientNetworkSection />
          <GlobalExportSection />
          <FinalCTASection onNavigate={navigateTo} onOpenQuoteModal={openQuoteModal} />
        </main>
      )}

      {/* 3. Corporate Footer */}
      <Footer currentPage={route.page} onNavigate={navigateTo} />

      {/* 4. Floating Direct Contact Buttons (WhatsApp & Direct Call) */}
      <FloatingContactButtons />

      {/* 5. Document Inspection Modal for Official Certificates */}
      <CertificateViewerModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

      {/* 6. Instant Industrial RFQ / Get Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        initialContext={quoteModalContext}
      />
    </div>
  );
}
