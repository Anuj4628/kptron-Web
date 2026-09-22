import React from 'react';
import './HeroControls.css';

export default function HeroProgress({
  currentSlideIndex,
  totalSlides,
  progressPercent,
  onSelectSlide
}) {
  const currentFormatted = String(currentSlideIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');

  return (
    <div className="hero-telemetry-dock" aria-label="Hero Slider Telemetry Progress">
      {/* Precision Industrial Slide Counter Badge */}
      <div className="telemetry-counter-badge">
        <span className="telemetry-status-pip" aria-hidden="true" />
        <span className="telemetry-label">PHASE</span>
        <div className="telemetry-counter-numbers">
          <span className="telemetry-current">{currentFormatted}</span>
          <span className="telemetry-slash" aria-hidden="true">/</span>
          <span className="telemetry-total">{totalFormatted}</span>
        </div>
      </div>

      {/* High-Precision Segmented Interactive Progress Indicators */}
      <div className="telemetry-progress-track" role="tablist">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentSlideIndex;
          const isPassed = idx < currentSlideIndex;
          const fillWidth = isActive ? `${progressPercent}%` : isPassed ? '100%' : '0%';

          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Switch to slide ${idx + 1}`}
              className={`telemetry-segment-btn ${isActive ? 'is-active' : isPassed ? 'is-passed' : ''}`}
              onClick={() => onSelectSlide(idx)}
            >
              <div className="segment-track-housing">
                <div
                  className="segment-track-fill"
                  style={{ width: fillWidth }}
                >
                  {isActive && <span className="segment-laser-head" aria-hidden="true" />}
                </div>
              </div>
              <span className="segment-step-tag">0{idx + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

