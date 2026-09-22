import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sectorsData } from '../../data/homeSectionsData';
import { ArrowUpRight } from 'lucide-react';
import './IndustriesSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance with eyebrow bar draw
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

      // 2. Viewport entrance and scroll-scrub velocity modulation
      if (viewportRef.current) {
        gsap.fromTo(
          viewportRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: viewportRef.current,
              start: 'top 86%',
              toggleActions: 'play none none none'
            }
          }
        );

        if (trackRef.current) {
          gsap.to(trackRef.current, {
            x: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9
            }
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Repeat 4 times for an unbroken seamless continuous loop across any resolution
  const repeatedSectors = [...sectorsData, ...sectorsData, ...sectorsData, ...sectorsData];

  return (
    <section id="industries" ref={sectionRef} className="industries-section" aria-label="Serving Global Missions and Critical Sectors">
      {/* Background Subtle Industrial Ambient Line */}
      <div className="industries-bg-gradient" aria-hidden="true" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="industries-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">APPLICATION SECTORS & GLOBAL MISSIONS</span>
          </div>

          <h2 className="section-display-heading">
            SERVING GLOBAL MISSIONS <span className="text-highlight-red">AND CRITICAL SECTORS</span>
          </h2>

          <p className="section-description">
            Certified precision steel and high-performance alloy solutions engineered to endure intense thermal cycling, corrosive extremes, and mission-critical industrial demands globally.
          </p>
        </div>
      </div>

      {/* Premium Horizontal Moving Showcase (Infinite Continuous Marquee) */}
      <div ref={viewportRef} className="sectors-marquee-viewport" aria-label="Continuous showcase of mission-critical industry sectors">
        <div ref={trackRef} className="sectors-marquee-track">
          {repeatedSectors.map((sector, idx) => (
            <div
              key={`${sector.id}-${idx}`}
              className="sector-showcase-card"
              tabIndex={0}
              role="group"
              aria-label={`${sector.name} - ${sector.tag}`}
            >
              {/* Separate Image Area at Top */}
              <div className="sector-card-media">
                <img
                  src={sector.image}
                  alt={`${sector.name} industrial setting`}
                  className="sector-image"
                  loading="lazy"
                />
                <div className="sector-media-gradient-overlay" aria-hidden="true" />

                {/* Technical Identifier Badge */}
                <div className="sector-top-badge">
                  <span className="sector-code">{sector.code}</span>
                  <span className="sector-divider-dot" aria-hidden="true" />
                  <span className="sector-tag">{sector.tag}</span>
                </div>
              </div>

              {/* Separate Dark Content Area Below Image */}
              <div className="sector-card-content">
                <div className="sector-content-main">
                  <h3 className="sector-title">{sector.name}</h3>
                  <div className="sector-accent-line" aria-hidden="true" />
                  <p className="sector-description">{sector.shortDesc}</p>
                </div>

                {/* Clean Engineered Action / Standards Footer */}
                <div className="sector-card-footer">
                  <span className="sector-footer-label">CRITICAL ALLOY SUPPLY</span>
                  <div className="sector-action-element" aria-hidden="true">
                    <ArrowUpRight size={15} className="sector-action-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

