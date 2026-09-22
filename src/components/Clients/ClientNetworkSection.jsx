import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clientsData } from '../../data/homeSectionsData';
import './ClientNetworkSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ClientNetworkSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance with eyebrow bar draw
      if (headerRef.current) {
        const eyebrowBar = headerRef.current.querySelector('.eyebrow-accent-bar');
        const eyebrowText = headerRef.current.querySelector('.eyebrow-text');
        const heading = headerRef.current.querySelector('.section-display-heading');
        const desc = headerRef.current.querySelector('.cn-supporting-text');

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

      // 2. Synchronized Opposing Row Entrances
      if (row1Ref.current && row2Ref.current) {
        gsap.fromTo(
          row1Ref.current,
          { opacity: 0, x: 70 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row1Ref.current,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(
          row2Ref.current,
          { opacity: 0, x: -70 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row2Ref.current,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );

        // Tactile scroll scrub: gently nudges opposing speeds while scrolling
        gsap.to(row1Ref.current, {
          x: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        });

        gsap.to(row2Ref.current, {
          x: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split into 2 rows for opposing continuous infinite marquees
  const row1Clients = clientsData.slice(0, 6);
  const row2Clients = clientsData.slice(6);

  // Replicate 4x for seamless jump-free infinite continuous scroll
  const marqueeRow1 = [...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients];
  const marqueeRow2 = [...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients];

  return (
    <section id="certificate" ref={sectionRef} className="client-network-section" aria-label="Client Network">
      {/* Subtle ambient */}
      <div className="cn-ambient-orb" aria-hidden="true" />

      <div className="section-container">
        {/* Section Heading */}
        <div ref={headerRef} className="client-network-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">GLOBAL INDUSTRIAL ECOSYSTEM</span>
          </div>

          <h2 className="section-display-heading">
            CLIENT <span className="text-highlight-red">NETWORK</span>
          </h2>

          <p className="cn-supporting-text">
            Trusted by leading industrial conglomerates, energy operators, and engineering enterprises across India and worldwide.
          </p>
        </div>
      </div>

      {/* Dual Continuous Infinite Logo Marquees */}
      <div className="client-marquees-wrapper" aria-label="Approved corporate client and partner logos">
        {/* ROW 1: Right to Left */}
        <div ref={row1Ref} className="client-marquee-row marquee-reverse">
          <div className="client-marquee-track">
            {marqueeRow1.map((client, idx) => (
              <div
                key={`r1-${client.name}-${idx}`}
                className="cn-tile"
                tabIndex={0}
                role="group"
                aria-label={client.name}
              >
                <div className="cn-tile-logo-wrap">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="cn-tile-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Left to Right */}
        <div ref={row2Ref} className="client-marquee-row marquee-forward">
          <div className="client-marquee-track">
            {marqueeRow2.map((client, idx) => (
              <div
                key={`r2-${client.name}-${idx}`}
                className="cn-tile"
                tabIndex={0}
                role="group"
                aria-label={client.name}
              >
                <div className="cn-tile-logo-wrap">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="cn-tile-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
