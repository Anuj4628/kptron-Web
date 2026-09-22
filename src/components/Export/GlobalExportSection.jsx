import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  exportCountriesList,
  exportCountryCategories
} from '../../data/homeSectionsData';
import { Search, X, Globe } from 'lucide-react';
import './GlobalExportSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalExportSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);

  // Filter countries based on region category and search query
  const filteredCountries = useMemo(() => {
    return exportCountriesList.filter(country => {
      const matchesCategory =
        activeCategory === 'all' || country.region === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        country.name.toLowerCase().includes(q) ||
        country.code.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Section entrance reveal with ScrollTrigger
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header GSAP entrance with eyebrow bar draw
      if (headerRef.current) {
        const eyebrowBar = headerRef.current.querySelector('.eyebrow-accent-bar');
        const eyebrowText = headerRef.current.querySelector('.eyebrow-text');
        const heading = headerRef.current.querySelector('.section-display-heading');
        const desc = headerRef.current.querySelector('.section-description');
        const metricPill = headerRef.current.querySelector('.export-metric-pill-badge');

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
        if (metricPill) {
          gsap.set(metricPill, { opacity: 0, scale: 0.92, y: 12 });
          tl.to(metricPill, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' }, 0.35);
        }
      }

      // 2. Filter bar entrance
      if (filterRef.current) {
        gsap.fromTo(
          filterRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: filterRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 3. Initial Country cards 2D matrix radial ripple entrance
      if (gridRef.current) {
        const initialCards = gridRef.current.querySelectorAll('.export-country-card');
        if (initialCards.length > 0) {
          gsap.fromTo(
            initialCards,
            { opacity: 0, y: 28, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: {
                grid: 'auto',
                from: 'center',
                amount: 0.45
              },
              ease: 'power3.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 86%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP animation triggered when region category or search query changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.export-country-card');
    if (cards.length === 0) return;

    // Smooth radial matrix ripple re-stagger without jitter
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 16, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: {
            grid: 'auto',
            from: 'start',
            amount: 0.35
          },
          ease: 'power3.out',
          overwrite: 'auto'
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory, searchQuery]);

  return (
    <section id="export" ref={sectionRef} className="global-export-section" aria-label="Countries We Export To">
      {/* Background subtle pattern */}
      <div className="export-bg-pattern" aria-hidden="true" />
      <div className="export-bg-glow" aria-hidden="true" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="export-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">GLOBAL EXPORT NETWORK // INTERNATIONAL TRADE</span>
          </div>

          <h2 className="section-display-heading">
            COUNTRIES WE <span className="text-highlight-blue">EXPORT TO</span>
          </h2>

          <p className="section-description">
            Approved material supplier providing seaworthy packed stainless, alloy, and nickel piping products to mission-critical infrastructure across 45+ international destinations.
          </p>

          {/* Compact Supporting Metric Badge */}
          <div className="export-metric-pill-badge">
            <span className="metric-pill-accent">45+</span>
            <span className="metric-pill-label">GLOBAL EXPORT DESTINATIONS &bull; 100% TRACEABLE DISPATCH</span>
          </div>
        </div>

        {/* Interactive Controls: Region Filters & Live Search */}
        <div ref={filterRef} className="export-controls-container">
          {/* Region Filter Tabs */}
          <div className="export-region-tabs" role="tablist" aria-label="Filter countries by region">
            {exportCountryCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`region-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Live Search Country Input */}
          <div className="export-search-wrapper">
            <Search size={16} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="country-search-input"
              aria-label="Search countries"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Clear search field"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Count Status Indicator */}
        <div className="export-status-bar">
          <div className="status-counter-wrap">
            <Globe size={14} className="status-globe-icon" />
            <span className="status-counter-text">
              Showing <strong>{filteredCountries.length}</strong> of <strong>{exportCountriesList.length}</strong> Export Destinations
            </span>
          </div>
          {searchQuery && (
            <span className="status-filter-tag">Filter: "{searchQuery}"</span>
          )}
        </div>

        {/* Country Cards Grid — Horizontal Row: Flag + Name + Hub */}
        <div ref={gridRef} className="export-countries-grid">
          {filteredCountries.map(country => (
            <div
              key={country.code}
              className="export-country-card"
              tabIndex={0}
              role="group"
              aria-label={country.name}
            >
              {/* Circular Flag Container */}
              <div className="country-flag-box">
                <img
                  src={`https://hatscripts.github.io/circle-flags/flags/${country.code.toLowerCase()}.svg`}
                  alt={`${country.name} flag`}
                  className="country-flag-img"
                  loading="lazy"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallback) {
                      e.currentTarget.dataset.fallback = 'true';
                      e.currentTarget.src = `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`;
                    } else {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement.querySelector('.country-flag-fallback');
                      if (fallback) fallback.style.display = 'inline-block';
                    }
                  }}
                />
                <span className="country-flag-fallback" style={{ display: 'none' }}>
                  {country.flag}
                </span>
              </div>

              {/* Country Name */}
              <h3 className="country-name-text">{country.name}</h3>
            </div>
          ))}

          {filteredCountries.length === 0 && (
            <div className="no-countries-state">
              <p>No export countries found matching "{searchQuery}".</p>
              <button
                type="button"
                className="reset-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
