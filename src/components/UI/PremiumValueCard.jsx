import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PremiumValueCard.css';

export default function PremiumValueCard({
  number,
  prefix = 'CRITERION',
  title,
  description,
  badge,
  Icon,
  isDark = false,
  actionHref,
  onAction,
  ariaLabel,
  className = ''
}) {
  const ActionWrapper = actionHref ? 'a' : 'div';
  const actionProps = actionHref
    ? { href: actionHref, 'aria-label': ariaLabel || `Inquire about ${title}` }
    : { 'aria-hidden': 'true' };

  return (
    <article
      className={`premium-value-card ${isDark ? 'card-theme-dark' : 'card-theme-light'} ${className}`.trim()}
      tabIndex={0}
      role="region"
      aria-label={`${prefix} ${number}: ${title}`}
    >
      {/* Precision Technical Corner Accents */}
      <div className="card-corner-accent top-left" aria-hidden="true" />
      <div className="card-corner-accent bottom-right" aria-hidden="true" />

      {/* Subtle Technical Mesh Ambience */}
      <div className="card-blueprint-pattern" aria-hidden="true" />

      {/* 1. TOP ROW: Criterion/Service Label & Refined Technical Icon */}
      <div className="card-top-row">
        <div className="card-identifier-pill">
          <span className="identifier-dot" aria-hidden="true" />
          <span className="identifier-text">{prefix} // {number}</span>
        </div>

        {Icon && (
          <div className="card-icon-container">
            <Icon size={20} strokeWidth={1.8} className="card-lucide-icon" />
          </div>
        )}
      </div>

      {/* Technical Hairline Divider with Micro Laser Accent */}
      <div className="card-technical-line" aria-hidden="true">
        <span className="line-laser-pip" />
      </div>

      {/* 2. MIDDLE CONTENT: Authoritative Title & Description */}
      <div className="card-content-area">
        <h3 className="card-title-heading">{title}</h3>
        <p className="card-desc-body">{description}</p>
      </div>

      {/* 3. BOTTOM ROW: Specification Badge on Left, Action Arrow on Right */}
      <div className="card-bottom-row">
        {badge && (
          <div className="card-spec-badge">
            <span className="spec-badge-dot" aria-hidden="true" />
            <span className="spec-badge-label">{badge}</span>
          </div>
        )}

        <ActionWrapper className="card-action-btn" {...actionProps}>
          <ArrowRight size={17} strokeWidth={2.4} className="action-arrow-icon" />
        </ActionWrapper>
      </div>

      {/* Precision Bottom Hover Line */}
      <div className="card-hover-laser" aria-hidden="true" />
    </article>
  );
}
