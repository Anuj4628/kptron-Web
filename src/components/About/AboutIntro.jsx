import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutHeroSteels from '../../assets/images/about-hero-steels.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const specPillRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Subtle background parallax & clarity settlement
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.08, filter: 'brightness(0.92)' },
          {
            scale: 1.0,
            filter: 'brightness(1.0)',
            duration: 1.4,
            ease: 'power3.out'
          }
        );

        // Gentle scroll scrub parallax
        gsap.to(bgImageRef.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      }

      // Left content sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
          0.1
        );
      }

      const headlineLines = headlineRef.current?.querySelectorAll('.about-hero-headline-line');
      if (headlineLines && headlineLines.length) {
        tl.fromTo(
          headlineLines,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.85,
            ease: 'power4.out'
          },
          0.2
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.38
        );
      }

      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.about-hero-stat-item');
        tl.fromTo(
          statItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
          0.5
        );
      }

      if (specPillRef.current) {
        tl.fromTo(
          specPillRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
          0.65
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-intro-phase">
      {/* High-Clarity Dominant Industrial Background Image Layer */}
      <div className="about-hero-bg-wrapper" aria-hidden="true">
        <img
          ref={bgImageRef}
          src={aboutHeroSteels}
          alt="Precision stainless pipes, flanges, and fittings"
          className="about-hero-bg-img"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        {/* Localized Left Scrim Gradient: leaves right-side steel products fully visible & crisp */}
        <div className="about-hero-gradient-scrim" />
      </div>

      {/* Main Left-Aligned Asymmetric Content Container */}
      <div className="about-hero-container">
        <div className="about-hero-content-column">
          {/* Engineering Eyebrow Tag */}
          <div ref={eyebrowRef} className="about-hero-eyebrow">
            <span className="about-hero-eyebrow-bar" />
            <span className="about-hero-eyebrow-text">ENTERPRISE OVERVIEW // SECTION 01</span>
            <span className="about-hero-eyebrow-dot" />
            <span className="about-hero-eyebrow-spec">EST. MUMBAI</span>
          </div>

          {/* Authoritative Industrial Headline */}
          <h1 ref={headlineRef} className="about-hero-display-title">
            <div className="about-hero-headline-mask">
              <span className="about-hero-headline-line">PRECISION IN METALLURGY.</span>
            </div>
            <div className="about-hero-headline-mask">
              <span className="about-hero-headline-line highlight-text">
                PROVEN ACROSS CRITICAL SECTORS.
              </span>
            </div>
          </h1>

          {/* Concise Industrial Supporting Copy */}
          <div ref={descRef} className="about-hero-description-group">
            <p className="about-hero-lead-para">
              Delivering mill-certified precision piping, flanges, and specialized metallurgical alloys engineered for mission-critical industrial and energy infrastructure worldwide.
            </p>
          </div>

          {/* Sleek Integrated Minimal Stats Strip */}
          <div ref={statsRef} className="about-hero-stats-strip">
            <div className="about-hero-stat-item">
              <div className="about-stat-number-wrap">
                <span className="about-stat-number">25</span>
                <span className="about-stat-plus">+</span>
              </div>
              <span className="about-stat-label">Years of Metallurgical Mastery</span>
            </div>

            <div className="about-stat-divider" aria-hidden="true" />

            <div className="about-hero-stat-item">
              <div className="about-stat-number-wrap">
                <span className="about-stat-number">40</span>
                <span className="about-stat-plus">+</span>
              </div>
              <span className="about-stat-label">Global Export Hubs & Ports</span>
            </div>

            <div className="about-stat-divider" aria-hidden="true" />

            <div className="about-hero-stat-item">
              <div className="about-stat-number-wrap">
                <span className="about-stat-number">100</span>
                <span className="about-stat-percent">%</span>
              </div>
              <span className="about-stat-label">Mill Certified Heat Lots & MTRs</span>
            </div>
          </div>

          {/* Technical Standards Pill */}
          <div ref={specPillRef} className="about-hero-standards-pill">
            <span className="standards-pulse-pip" aria-hidden="true" />
            <span className="standards-text">EN 10204 3.1 & 3.2 CERTIFICATION // IBR & NACE MR0175 COMPLIANT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

