import React from 'react';
import './TopExperienceBar.css';

export default function TopExperienceBar() {
  return (
    <div className="top-experience-bar" role="region" aria-label="Company Experience Badge">
      <div className="top-experience-container">
        <span className="experience-arch-line experience-arch-left" aria-hidden="true" />
        <span className="experience-text">20+ YEARS OF EXPERIENCE</span>
        <span className="experience-arch-line experience-arch-right" aria-hidden="true" />
      </div>
    </div>
  );
}
