import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { specialistProductsData } from '../../data/homeSectionsData';
import SpecialistProductCard from './SpecialistProductCard';
import './SpecialistProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * SpecialistProductsSection
 * Dedicated Industrial Showcase for Alloy Steel Pipes, Tubes, and Plates.
 * Strictly adheres to the website's design language, typography, and animations.
 */
export default function SpecialistProductsSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal animation
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

      // 2. Staggered card entrance
      const cards = gridRef.current.querySelectorAll('.specialist-card');
      if (cards.length > 0) {
        gsap.set(cards, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          transformOrigin: '50% 80%'
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="specialist-products"
      ref={sectionRef}
      className="specialist-products-section"
      aria-label="Specialist Alloy Steel Products"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="specialist-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">HIGH TEMPERATURE & PRESSURE INVENTORY</span>
          </div>

          <h2 className="section-display-heading">
            SPECIALIST <span className="text-highlight-red">ALLOY STEEL PRODUCTS</span>
          </h2>

          <p className="section-description">
            ASTM and ASME certified Chrome-Moly seamless pipes, high-flux boiler tubes, and pressure vessel plates engineered for critical power generation and petrochemical operations.
          </p>
        </div>

        {/* 3-Card Specialist Grid */}
        <div ref={gridRef} className="specialist-grid">
          {specialistProductsData.map((product) => (
            <SpecialistProductCard
              key={product.id}
              product={product}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
