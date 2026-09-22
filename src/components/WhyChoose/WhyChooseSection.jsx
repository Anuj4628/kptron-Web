import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseData } from '../../data/homeSectionsData';
import { ShieldCheck, Globe, Award, Settings, Headphones, Truck } from 'lucide-react';
import PremiumValueCard from '../UI/PremiumValueCard';
import './WhyChooseSection.css';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck,
  Globe,
  Award,
  Cpu: Settings,
  Settings,
  Headphones,
  Truck
};

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const mm = gsap.matchMedia();

    // 1. Header entrance with eyebrow draw
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

    const cards = gridRef.current.querySelectorAll('.why-choose-card');

    // Desktop & Tablet (> 768px): Staggered 3D Depth Card Settlement
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 83%',
          toggleActions: 'play none none none'
        }
      });

      tl.fromTo(
        cards,
        {
          opacity: 0,
          y: 42,
          scale: 0.93,
          rotateX: 3
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,animation'
        }
      );

      // Micro laser accent line draw inside cards
      const laserLines = gridRef.current.querySelectorAll('.card-technical-line');
      if (laserLines.length > 0) {
        tl.fromTo(
          laserLines,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
          },
          0.3
        );
      }
    });

    // Mobile: 1-column layout (<= 768px) - Sequential card reveal on scroll
    mm.add('(max-width: 768px)', () => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 28,
            scale: 0.96
          },
          {
            opacity: 1,
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
    <section id="about" ref={sectionRef} className="why-choose-section" aria-label="Why Choose Us">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="why-choose-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">UNCOMPROMISING INDUSTRIAL EXCELLENCE</span>
          </div>

          <h2 className="section-display-heading">
            WHY <span className="text-highlight-red">CHOOSE US</span>
          </h2>

          <p className="section-description">
            Engineered around stringent international metallurgy codes, certified third-party testing, and dependable global project delivery.
          </p>
        </div>

        {/* 3x2 Alternating Dark/Light Checkerboard Grid */}
        <div ref={gridRef} className="why-choose-grid">
          {whyChooseData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            // Checkerboard: Row 1 (0: Dark, 1: Light, 2: Dark), Row 2 (3: Light, 4: Dark, 5: Light)
            const isDark = idx % 2 === 0;

            return (
              <PremiumValueCard
                key={item.number}
                number={item.number}
                prefix="CRITERION"
                title={item.title}
                description={item.description}
                badge={item.badge}
                Icon={Icon}
                isDark={isDark}
                className="why-choose-card"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
