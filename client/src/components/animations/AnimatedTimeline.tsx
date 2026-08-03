/**
 * AnimatedTimeline.tsx
 * Composant de timeline animée pour le processus en 6 étapes
 * Basé sur les skills : CSS/HyperFrames + UI-Animation
 */

import React, { useEffect, useRef, useState } from 'react';
import './AnimatedTimeline.css';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface AnimatedTimelineProps {
  steps: TimelineStep[];
  orientation?: 'horizontal' | 'vertical';
}

export const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({
  steps,
  orientation = 'horizontal',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when bottom of viewport, 1 when top of viewport
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);

      // Update active step based on scroll
      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div 
      ref={timelineRef}
      className={`animated-timeline timeline-${orientation}`}
    >
      {/* Progress bar */}
      <div className="timeline-progress-container">
        <div 
          className="timeline-progress-bar"
          style={{
            width: orientation === 'horizontal' ? `${scrollProgress * 100}%` : undefined,
            height: orientation === 'vertical' ? `${scrollProgress * 100}%` : undefined,
          }}
        />
      </div>

      {/* Timeline steps */}
      <div className="timeline-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-step ${index <= activeStep ? 'active' : ''} ${index === activeStep ? 'current' : ''}`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Step connector */}
            {index < steps.length - 1 && (
              <div className="step-connector" />
            )}

            {/* Step circle */}
            <div className="step-circle">
              {step.icon ? (
                <div className="step-icon">{step.icon}</div>
              ) : (
                <span className="step-number">{step.number}</span>
              )}
            </div>

            {/* Step content */}
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="timeline-decoration">
        <div className="decoration-dot decoration-dot-1" />
        <div className="decoration-dot decoration-dot-2" />
        <div className="decoration-dot decoration-dot-3" />
      </div>
    </div>
  );
};

export default AnimatedTimeline;
