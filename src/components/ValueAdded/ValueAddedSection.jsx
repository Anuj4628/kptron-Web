import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { valueAddedData } from '../../data/homeSectionsData';
import { CheckCircle2, FileCheck, Layers, PackageCheck, Ship, Sliders, ShieldAlert } from 'lucide-react';
import PremiumValueCard from '../UI/PremiumValueCard';
import './ValueAddedSection.css';

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = {
  "material-sourcing": Layers,
  "quality-inspection": ShieldAlert,
  "testing-documentation": FileCheck,
  "custom-requirements": Sliders,
  "project-supply": CheckCircle2,
  "export-packaging": PackageCheck,
  "logistics-support": Ship
};

const serviceSpecs = {
  "material-sourcing": "SPECIAL-GRADE SOURCING",
  "quality-inspection": "PROJECT INSPECTION SUPPORT",
  "testing-documentation": "MATERIAL TEST DOCUMENTATION",
  "custom-requirements": "CUSTOM MATERIAL PREPARATION",
  "project-supply": "INTEGRATED PROJECT SUPPORT",
  "export-packaging": "TRANSPORT-READY PACKAGING"
};

export default function ValueAddedSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const mm = gsap.matchMedia();

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

    const cards = gridRef.current.querySelectorAll('.value-service-card');

    // Directional Layered Cascade Reveal (> 768px)
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 84%',
          toggleActions: 'play none none none'
        }
      });

      cards.forEach((card, idx) => {
        // Alternating directional drift: even from slight left, odd from slight right
        const driftX = idx % 2 === 0 ? -28 : 28;

        tl.fromTo(
          card,
          {
            opacity: 0,
            x: driftX,
            y: 35,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,animation'
          },
          idx * 0.08
        );
      });

      // Internal icon containers pop
      const iconContainers = gridRef.current.querySelectorAll('.card-icon-container');
      if (iconContainers.length > 0) {
        tl.fromTo(
          iconContainers,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.6)'
          },
          0.2
        );
      }
    });

    // Mobile: 1-column layout (<= 768px) - Smooth directional entry
    mm.add('(max-width: 768px)', () => {
      cards.forEach((card, idx) => {
        const driftX = idx % 2 === 0 ? -24 : 24;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: driftX,
            y: 20,
            scale: 0.96
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,animation',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="value-added-section" aria-label="Value Added Services">
      <div className="section-container">
        {/* Standardized Section Header */}
        <div ref={headerRef} className="value-added-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">BEYOND BASIC MATERIAL SUPPLY</span>
          </div>

          <h2 className="section-display-heading">
            VALUE ADDED <span className="text-highlight-red">SERVICES</span>
          </h2>

          <p className="section-description">
            End-to-end metallurgical solutions supporting complex engineering procurement, mill-certified third-party inspection, and synchronized project dispatch.
          </p>
        </div>

        {/* Alternating Dark/Light Cards Grid */}
        <div ref={gridRef} className="value-services-grid">
          {valueAddedData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || CheckCircle2;
            const specBadge = service.badge || serviceSpecs[service.id];
            // Alternating checkerboard theme
            const isDark = idx % 2 === 0;

            return (
              <PremiumValueCard
                key={service.id}
                number={service.number}
                prefix="SERVICE"
                title={service.title}
                description={service.description}
                badge={specBadge}
                Icon={Icon}
                isDark={isDark}
                actionHref="#quote"
                ariaLabel={`Inquire about ${service.title}`}
                className="value-service-card"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
