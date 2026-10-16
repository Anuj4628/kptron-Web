import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MATERIALS } from '../../data/materialsData';
import { ArrowRight } from 'lucide-react';
import './MaterialsSection.css';

gsap.registerPlugin(ScrollTrigger);

// 4-Point Star Separator between cards
const StarSeparator = () => (
  <span className="marquee-star-separator" aria-hidden="true">
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6Z" />
    </svg>
  </span>
);

// The genuine materials from the central materials database
const bannerMaterials = [
  { id: 'stainless-steel', slug: 'stainless-steel', name: 'STAINLESS STEEL' },
  { id: 'carbon-steel', slug: 'carbon-steel', name: 'CARBON STEEL' },
  { id: 'alloy-steel', slug: 'alloy-steel', name: 'ALLOY STEEL' },
  { id: 'duplex-steel', slug: 'duplex-steel', name: 'DUPLEX STEEL' },
  { id: 'super-duplex-steel', slug: 'super-duplex-steel', name: 'SUPER DUPLEX' },
  { id: 'inconel', slug: 'inconel', name: 'INCONEL' },
  { id: 'monel', slug: 'monel', name: 'MONEL' },
  { id: 'hastelloy', slug: 'hastelloy', name: 'HASTELLOY' },
  { id: 'nickel-alloys', slug: 'nickel-alloys', name: 'NICKEL ALLOYS' },
  { id: 'copper-nickel', slug: 'copper-nickel', name: 'COPPER NICKEL' },
  { id: 'titanium', slug: 'titanium', name: 'TITANIUM' },
  { id: 'maraging-steel', slug: 'maraging-steel', name: 'MARAGING STEEL' },
];

export default function MaterialsSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance animation with clip-mask reveal
      if (headerRef.current) {
        const eyebrowBar = headerRef.current.querySelector('.eyebrow-accent-bar');
        const eyebrowText = headerRef.current.querySelector('.eyebrow-text');
        const heading = headerRef.current.querySelector('.materials-display-heading');
        const desc = headerRef.current.querySelector('.materials-supporting-line');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });

        if (eyebrowBar) {
          gsap.set(eyebrowBar, { scaleX: 0, transformOrigin: 'left center' });
          tl.to(eyebrowBar, { scaleX: 1, duration: 0.6, ease: 'power3.out' }, 0);
        }
        if (eyebrowText) {
          gsap.set(eyebrowText, { opacity: 0, x: -16 });
          tl.to(eyebrowText, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, 0.1);
        }
        if (heading) {
          gsap.set(heading, { opacity: 0, y: 32 });
          tl.to(heading, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.18);
        }
        if (desc) {
          gsap.set(desc, { opacity: 0, y: 20 });
          tl.to(desc, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0.28);
        }
      }

      // 2. Banner container entrance & scroll-linked subtle parallax
      if (marqueeContainerRef.current) {
        gsap.fromTo(
          marqueeContainerRef.current,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: marqueeContainerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );

        if (trackRef.current) {
          gsap.to(trackRef.current, {
            x: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8
            }
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (mat) => {
    if (typeof onNavigate === 'function') {
      onNavigate('materials', mat.slug);
    }
  };

  // Quadruple repetition of the 9 materials for smooth continuous infinite loop
  const repeatedItems = [
    ...bannerMaterials,
    ...bannerMaterials,
    ...bannerMaterials,
    ...bannerMaterials
  ];

  return (
    <section id="materials" ref={sectionRef} className="materials-section" aria-label="Materials We Work With">
      {/* Subtle Industrial Background Ambience */}
      <div className="materials-bg-overlay" aria-hidden="true" />

      {/* Section Header */}
      <div className="section-container">
        <div ref={headerRef} className="materials-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">METALLURGICAL GRADES & ALLOYS</span>
          </div>

          <h2 className="materials-display-heading">
            MATERIAL <span className="text-highlight-red">WE WORK WITH</span>
          </h2>

          <p className="materials-supporting-line">
            High-performance alloys and special steels engineered for demanding international industrial applications.
          </p>
        </div>
      </div>

      {/* Single Continuous Infinite Banner Slider */}
      <div
        ref={marqueeContainerRef}
        className="materials-single-banner-wrapper"
        aria-label="Continuous stream of metallurgical materials"
      >
        <div ref={trackRef} className="materials-banner-scroll-lane">
          <div className="materials-banner-track">
            {repeatedItems.map((mat, index) => (
              <React.Fragment key={`banner-${mat.id}-${index}`}>
                <div
                  className="material-banner-card"
                  tabIndex={0}
                  role="button"
                  onClick={() => handleCardClick(mat)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(mat);
                    }
                  }}
                  aria-label={mat.name}
                >
                  <span className="banner-card-beacon" aria-hidden="true" />
                  <span className="banner-card-name">{mat.name}</span>
                </div>
                <StarSeparator />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Explore All Materials CTA Button */}
      <div className="materials-action-row">
        <a
          href="/materials"
          className="materials-explore-btn"
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavigate === 'function') {
              onNavigate('/materials');
            }
          }}
          aria-label="Explore All Certified Metallurgical Materials"
        >
          <span>Explore All Materials</span>
          <ArrowRight size={16} className="materials-btn-arrow" />
        </a>
      </div>

      {/* Subtle Bottom Technical Divider */}
      <div className="materials-bottom-divider" aria-hidden="true" />
    </section>
  );
}



