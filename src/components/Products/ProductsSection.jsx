import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productsData } from '../../data/homeSectionsData';
import ProductCard from './ProductCard';
import './ProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP ScrollTrigger animation on section entrance
  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal with eyebrow line draw
      if (headerRef.current) {
        const eyebrowBar = headerRef.current.querySelector('.eyebrow-accent-bar');
        const eyebrowText = headerRef.current.querySelector('.eyebrow-text');
        const heading = headerRef.current.querySelector('.section-display-heading');
        const desc = headerRef.current.querySelector('.section-description');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });

        if (eyebrowBar) {
          gsap.set(eyebrowBar, { scaleX: 0, transformOrigin: 'left center' });
          tl.to(eyebrowBar, { scaleX: 1, duration: 0.55, ease: 'power3.out' }, 0);
        }
        if (eyebrowText) {
          gsap.set(eyebrowText, { opacity: 0, x: -14 });
          tl.to(eyebrowText, { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' }, 0.1);
        }
        if (heading) {
          gsap.set(heading, { opacity: 0, y: 28 });
          tl.to(heading, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.16);
        }
        if (desc) {
          gsap.set(desc, { opacity: 0, y: 18 });
          tl.to(desc, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.26);
        }
      }

      // 2. Product cards 2D Matrix Staggered Reveal
      const cards = gridRef.current.querySelectorAll('.product-card');
      if (cards.length > 0) {
        // Set initial states
        gsap.set(cards, {
          opacity: 0,
          y: 45,
          scale: 0.94,
          transformOrigin: '50% 80%'
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: {
            grid: 'auto',
            from: 'start',
            amount: 0.55
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none'
          }
        });

        // Layered image counter-zoom inside cards
        const cardImgs = gridRef.current.querySelectorAll('.product-card-img');
        if (cardImgs.length > 0) {
          gsap.fromTo(
            cardImgs,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.1,
              stagger: {
                grid: 'auto',
                from: 'start',
                amount: 0.55
              },
              ease: 'power3.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 84%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      }

      // 3. Bottom Button reveal with subtle arrow nudge
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 22, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="products-section" aria-label="Our Products">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="products-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">ENGINEERING INVENTORY & PRODUCTION</span>
          </div>

          <h2 className="section-display-heading">
            OUR <span className="text-highlight-red">PRODUCTS</span>
          </h2>

          <p className="section-description">
            Precision-engineered steel products for demanding industrial and engineering applications.
          </p>
        </div>

        {/* 9 Products Grid */}
        <div ref={gridRef} className="products-grid">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Medium-sized Centered Button: ALL PRODUCTS → */}
        <div ref={ctaRef} className="products-action-center">
          <a
            href="/products"
            className="all-products-main-btn"
            aria-label="View All Products"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/products');
              }
            }}
          >
            <span>ALL PRODUCTS</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
