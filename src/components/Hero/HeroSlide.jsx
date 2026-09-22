import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../UI/Button';
import './HeroSlide.css';

// Helper function to render headline with strategic red accent on [bracketed] words and newline support
function renderHeadline(headline) {
  if (!headline) return null;
  const lines = headline.split('\n');
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\[[^\]]+\])/g);
    return (
      <React.Fragment key={lineIdx}>
        {parts.map((part, index) => {
          if (part.startsWith('[') && part.endsWith(']')) {
            const text = part.slice(1, -1);
            return (
              <span key={index} className="hero-headline-accent">
                {text}
              </span>
            );
          }
          return part;
        })}
        {lineIdx < lines.length - 1 && <br className="hero-headline-br" />}
      </React.Fragment>
    );
  });
}

function HeroSlide({ slide, isActive, direction = 1, onNavigate }) {
  const slideRef = useRef(null);
  const bgImageRef = useRef(null);
  const glassCardRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineMaskRef = useRef(null);
  const headlineTextRef = useRef(null);
  const descRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const specTagRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!slideRef.current) return;

    if (isActive) {
      // Kill previous timeline if active
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Bring active slide to top layer
      gsap.set(slideRef.current, {
        zIndex: 2,
        visibility: 'visible',
        opacity: 1
      });

      // Cinematic wipe & layered parallax setup
      const dirOffset = direction > 0 ? 50 : -50;
      
      // Set initial state for background container and image
      gsap.set(bgImageRef.current, {
        scale: 1.15,
        x: dirOffset,
        opacity: 0,
        filter: 'brightness(0.85)'
      });

      // Initial state for glass card and content
      gsap.set(glassCardRef.current, {
        opacity: 0,
        y: 32,
        scale: 0.96,
        rotateX: 2
      });

      const eyebrowBar = eyebrowRef.current?.querySelector('.eyebrow-accent-bar');
      const eyebrowText = eyebrowRef.current?.querySelector('.eyebrow-text');
      if (eyebrowBar) gsap.set(eyebrowBar, { scaleX: 0, transformOrigin: 'left center' });
      if (eyebrowText) gsap.set(eyebrowText, { opacity: 0, x: -12 });

      gsap.set(headlineTextRef.current, { yPercent: 110, opacity: 0 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaGroupRef.current?.children || [], { opacity: 0, y: 18, scale: 0.97 });
      gsap.set(specTagRef.current, { opacity: 0, x: -16 });

      // Build layered cinematic sequence
      // 1. Image uncurtain and multi-layer parallax settlement
      tl.to(bgImageRef.current, {
        opacity: 1,
        scale: 1.0,
        x: 0,
        filter: 'brightness(1)',
        duration: 1.25,
        ease: 'power3.out'
      }, 0)

      // 2. Glass card 3D settle
      .to(glassCardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1.0,
        rotateX: 0,
        duration: 0.85,
        ease: 'power3.out'
      }, 0.15);

      // 3. Eyebrow bar draw and text slide
      if (eyebrowBar) {
        tl.to(eyebrowBar, {
          scaleX: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, 0.25);
      }
      if (eyebrowText) {
        tl.to(eyebrowText, {
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: 'power2.out'
        }, 0.32);
      }

      // 4. Headline line unmask (authoritative industrial reveal)
      tl.to(headlineTextRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.36)

      // 5. Description entrance
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out'
      }, 0.5)

      // 6. Action buttons staggered cascade
      .to(ctaGroupRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out'
      }, 0.62)

      // 7. Precision spec tag slide-in
      .to(specTagRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: 'power2.out'
      }, 0.74);

    } else {
      // Inactive exit transition: smooth layered depth exit without harsh cuts
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          if (slideRef.current) {
            gsap.set(slideRef.current, {
              zIndex: 1,
              visibility: 'hidden'
            });
          }
        }
      });
      timelineRef.current = tl;

      tl.to(glassCardRef.current, {
        opacity: 0,
        y: -16,
        scale: 0.98,
        duration: 0.4,
        ease: 'power2.in'
      }, 0)
      .to(bgImageRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 0.6,
        ease: 'power2.inOut'
      }, 0.05)
      .to(slideRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut'
      }, 0.1);
    }

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [isActive, direction]);

  return (
    <div
      ref={slideRef}
      className={`hero-slide ${isActive ? 'is-active' : ''}`}
      aria-hidden={!isActive}
    >
      {/* Background Image Layer - Bright, crisp, authentic industrial steel view */}
      <div className="hero-slide-bg">
          <img
            ref={bgImageRef}
            src={slide.image}
            alt={slide.alt}
            className="hero-slide-image"
            loading={slide.id === 1 ? 'eager' : 'lazy'}
            fetchPriority={slide.id === 1 ? 'high' : 'auto'}
            decoding={slide.id === 1 ? 'sync' : 'async'}
          />
          {/* Very subtle ambient wash: no heavy dark vignette */}
          <div className="hero-slide-overlay" aria-hidden="true" />
        </div>

        {/* Content Container */}
        <div className="hero-slide-content-wrap">
          <div className="hero-slide-container">
            {/* Refined Translucent Glass Content Card */}
            <div ref={glassCardRef} className="hero-glass-card">
              {/* Engineering Eyebrow */}
              <div ref={eyebrowRef} className="hero-eyebrow">
                <span className="eyebrow-accent-bar" />
                <span className="eyebrow-text">{slide.eyebrow}</span>
              </div>

              {/* Headline with Overflow Mask */}
              <div ref={headlineMaskRef} className="hero-headline-mask">
                <h1
                  ref={headlineTextRef}
                  className="hero-headline"
                  aria-label={slide.headline ? slide.headline.replace(/\[|\]/g, '') : undefined}
                >
                  {renderHeadline(slide.headline)}
                </h1>
              </div>

              {/* Concise Description */}
              <p ref={descRef} className="hero-description">
                {slide.description}
              </p>

              {/* Dual CTAs */}
              <div ref={ctaGroupRef} className="hero-cta-group">
                <Button
                  href={slide.primaryCta.href}
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  onClick={(e) => {
                    if (onNavigate && slide.primaryCta.href) {
                      e.preventDefault();
                      onNavigate(slide.primaryCta.href);
                    }
                  }}
                >
                  {slide.primaryCta.label}
                </Button>

                {slide.secondaryCta && (
                  <Button
                    href={slide.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    icon="chevron"
                    onClick={(e) => {
                      if (onNavigate && slide.secondaryCta.href) {
                        e.preventDefault();
                        onNavigate(slide.secondaryCta.href);
                      }
                    }}
                  >
                    {slide.secondaryCta.label}
                  </Button>
                )}
              </div>

              {/* Technical Specification Badge */}
              <div ref={specTagRef} className="hero-spec-tag">
                <span className="spec-indicator" />
                <span className="spec-text">{slide.specTag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default React.memo(HeroSlide);
