import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MaterialsSection from './components/Materials/MaterialsSection';
import ProductsSection from './components/Products/ProductsSection';
import SpecialistProductsSection from './components/Products/SpecialistProductsSection';
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
const ProductsLandingView = lazy(() => import('./components/Products/pages/ProductsLandingView'));
const DivisionView = lazy(() => import('./components/Products/pages/DivisionView'));
const ProductFamilyView = lazy(() => import('./components/Products/pages/ProductFamilyView'));
const ProductDetailView = lazy(() => import('./components/Products/pages/ProductDetailView'));
const MaterialsLandingView = lazy(() => import('./components/Materials/pages/MaterialsLandingView'));
const MaterialDetailView = lazy(() => import('./components/Materials/pages/MaterialDetailView'));
const ContactPage = lazy(() => import('./components/Contact/ContactPage'));

export { preloadRoute } from './utils/preloadRoute';
import { preloadRoute } from './utils/preloadRoute';

import './App.css';

/**
 * Route parser for native history-based client routing
 */
function parseRoute(pathname = window.location.pathname) {
  const cleanPath = (pathname || '').split('?')[0].split('#')[0];
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
    const raw = cleanPath.replace(/^\/products\/?/i, '');
    const parts = raw.split('/').filter(Boolean);

    if (parts.length === 0) {
      return { page: 'products', view: 'landing' };
    }

    const p0 = parts[0].toLowerCase();

    // Dedicated Pipes Product Page & Grade Detail Routes
    if (p0 === 'pipes' || p0 === 'pipe' || p0 === 'pipes-and-tubes' || p0 === 'pipes-tubes') {
      if (parts.length === 1) {
        return { page: 'products', view: 'pipes-listing' };
      }
      if (parts.length === 2) {
        return { 
          page: 'products', 
          view: 'pipe-grade-detail', 
          categorySlug: parts[1].toLowerCase(),
          gradeSlug: null 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'pipe-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase() 
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
        return { page: 'products', view: 'sheets-plates-listing' };
      }
      if (parts.length === 2) {
        return { 
          page: 'products', 
          view: 'sheet-plate-grade-detail', 
          categorySlug: parts[1].toLowerCase(),
          gradeSlug: null 
        };
      }
      if (parts.length >= 3) {
        return { 
          page: 'products', 
          view: 'sheet-plate-grade-detail', 
          categorySlug: parts[1].toLowerCase(), 
          gradeSlug: parts[2].toLowerCase() 
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

  // Centralized page and section navigation handler
  const navigateTo = useCallback((target, param = null) => {
    // If target is a path string starting with '/'
    if (typeof target === 'string' && target.startsWith('/')) {
      const cleanPath = target.split('?')[0].split('#')[0];
      const targetQuery = target.includes('?') ? '?' + target.split('?')[1] : '';
      if (window.location.pathname !== cleanPath || window.location.search !== targetQuery) {
        window.history.pushState({}, '', target);
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
      const dest = param ? (param.startsWith('/') ? param : `/products/${param}`) : '/products';
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
      />

      {/* 2. Page Switcher with Instant Suspense Fallback */}
      {route.page === 'about' ? (
        /* Dedicated Independent About Page */
        <main id="main-content" className="about-page-main">
          <Suspense fallback={<div className="page-load-shell about-shell" aria-hidden="true" />}>
            <AboutSection onNavigate={navigateTo} onSelectCertificate={setActiveCertificate} />
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
            {route.view === 'pipes-listing' ? (
              <PipesProductPage onNavigate={navigateTo} />
            ) : route.view === 'pipe-grade-detail' ? (
              <PipeGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                onNavigate={navigateTo}
              />
            ) : route.view === 'sheets-plates-listing' ? (
              <SheetsPlatesProductPage onNavigate={navigateTo} />
            ) : route.view === 'sheet-plate-grade-detail' ? (
              <SheetPlateGradeDetailView
                categorySlug={route.categorySlug}
                gradeSlug={route.gradeSlug}
                onNavigate={navigateTo}
              />
            ) : route.view === 'division' ? (
              <DivisionView
                divisionSlug={route.divisionSlug}
                onNavigate={navigateTo}
              />
            ) : route.view === 'family' ? (
              <ProductFamilyView
                divisionSlug={route.divisionSlug}
                groupSlug={route.groupSlug}
                onNavigate={navigateTo}
              />
            ) : route.view === 'detail' ? (
              <ProductDetailView
                divisionSlug={route.divisionSlug}
                groupSlug={route.groupSlug}
                productSlug={route.productSlug}
                onNavigate={navigateTo}
              />
            ) : (
              <ProductsLandingView onNavigate={navigateTo} />
            )}
          </Suspense>
        </main>
      ) : (
        /* Full Commercial Home Page (About and Products catalog views are isolated) */
        <main id="main-content" className="home-page-main">
          <Hero onNavigate={navigateTo} />
          <SpecialistProductsSection onNavigate={navigateTo} />
          <ProductsSection onNavigate={navigateTo} />
          <MaterialsSection onNavigate={navigateTo} />
          <WhyChooseSection />
          <IndustriesSection />
          <ValueAddedSection />
          <CertificatesSection onSelectCertificate={setActiveCertificate} />
          <ClientNetworkSection />
          <GlobalExportSection />
          <FinalCTASection onNavigate={navigateTo} />
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
    </div>
  );
}
