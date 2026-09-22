import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../UI/Button';
import slide1Img from '../../assets/images/slide-1.jpg';
import { Mail, Clock, ShieldCheck, ArrowRight, Phone, Zap } from 'lucide-react';
import { brandDetails } from '../../data/navigationData';
import './FinalCTASection.css';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection({ onNavigate }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      const card = cardRef.current;
      const bgImg = card.querySelector('.cta-bg-image');
      const contentSide = card.querySelector('.cta-content-side');
      const infoPanel = card.querySelector('.cta-info-panel');
      const infoCards = card.querySelectorAll('.cta-info-card');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 84%',
          toggleActions: 'play none none none'
        }
      });

      // 1. Card container smooth expansion and 3D depth settle
      tl.fromTo(
        card,
        { opacity: 0, y: 42, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out'
        },
        0
      );

      // 2. Background image subtle parallax scale settling
      if (bgImg) {
        tl.fromTo(
          bgImg,
          { scale: 1.12, filter: 'brightness(0.7)' },
          {
            scale: 1,
            filter: 'brightness(1)',
            duration: 1.2,
            ease: 'power3.out'
          },
          0
        );
      }

      // 3. Left Content Staggered Cascade
      if (contentSide) {
        const eyebrow = contentSide.querySelector('.cta-eyebrow');
        const heading = contentSide.querySelector('.cta-main-heading');
        const subheading = contentSide.querySelector('.cta-subheading');
        const buttons = contentSide.querySelector('.cta-buttons-group');

        if (eyebrow) {
          tl.fromTo(
            eyebrow,
            { opacity: 0, x: -16 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
            0.2
          );
        }
        if (heading) {
          tl.fromTo(
            heading,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            0.28
          );
        }
        if (subheading) {
          tl.fromTo(
            subheading,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
            0.38
          );
        }
        if (buttons) {
          tl.fromTo(
            buttons.children,
            { opacity: 0, y: 18, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.09, duration: 0.5, ease: 'power3.out' },
            0.48
          );
        }
      }

      // 4. Right Contact Info Cards Unboxing
      if (infoCards.length > 0) {
        tl.fromTo(
          infoCards,
          { opacity: 0, x: 28, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out'
          },
          0.35
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quote" ref={sectionRef} className="final-cta-section" aria-label="Discuss Steel Requirements">
      <div className="section-container">
        <div ref={cardRef} className="cta-banner-card">
          {/* Background Industrial Photographic Layer */}
          <div className="cta-bg-layer">
            <img
              src={slide1Img}
              alt="Industrial steel manufacturing infrastructure"
              className="cta-bg-image"
              loading="lazy"
            />
            <div className="cta-dark-overlay" aria-hidden="true" />
            <div className="cta-blue-gradient" aria-hidden="true" />
          </div>

          {/* Accent Lines */}
          <div className="cta-top-accent" aria-hidden="true" />
          <div className="cta-bottom-accent" aria-hidden="true" />

          {/* Split Layout: Left Content + Right Contact Panel */}
          <div className="cta-split-layout">
            {/* Left: Content */}
            <div className="cta-content-side">
              <div className="cta-eyebrow">
                <span className="cta-accent-dot" />
                <span className="cta-eyebrow-text">TECHNICAL CONSULTATION & QUOTATION</span>
              </div>

              <h2 className="cta-main-heading">
                READY TO DISCUSS<br/>YOUR <span className="cta-heading-highlight">STEEL REQUIREMENT?</span>
              </h2>

              <p className="cta-subheading">
                Connect with our metallurgical engineering desk for immediate product availability, specification compliance, and worldwide project dispatch support.
              </p>

              {/* CTA Buttons */}
              <div className="cta-buttons-group">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('contact');
                    }
                  }}
                >
                  Get a Quote
                </Button>

                <Button
                  href="/products"
                  variant="secondary"
                  size="lg"
                  icon="chevron"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/products');
                    }
                  }}
                >
                  Explore Products
                </Button>
              </div>
            </div>

            {/* Right: Contact Info Panel */}
            <div className="cta-info-panel">
              <div className="cta-info-card">
                <div className="cta-info-icon-wrap">
                  <Clock size={18} />
                </div>
                <div className="cta-info-details">
                  <span className="cta-info-label">Response Time</span>
                  <span className="cta-info-value">Within 4 Business Hours</span>
                </div>
              </div>

              <div className="cta-info-card">
                <div className="cta-info-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div className="cta-info-details">
                  <span className="cta-info-label">Quality Assurance</span>
                  <span className="cta-info-value">100% Certified Heat Lots & MTRs</span>
                </div>
              </div>

              <div className="cta-info-card">
                <div className="cta-info-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="cta-info-details">
                  <span className="cta-info-label">Direct Inquiries</span>
                  <a
                    href={`mailto:${brandDetails.contact.email}`}
                    className="cta-info-value"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {brandDetails.contact.email}
                  </a>
                </div>
              </div>

              <div className="cta-info-card">
                <div className="cta-info-icon-wrap">
                  <Zap size={18} />
                </div>
                <div className="cta-info-details">
                  <span className="cta-info-label">Global Dispatch</span>
                  <span className="cta-info-value">48+ Export Destinations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
