/**
 * AnimatedCounter.tsx
 * Composant de compteur animé pour afficher les résultats
 * Basé sur les skills : UI-Animation + UI_Design_System
 * Timing : 200ms pour les transitions fluides
 */

import React, { useEffect, useRef, useState } from 'react';
import './AnimatedCounter.css';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label?: string;
  icon?: React.ReactNode;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  label = '',
  icon,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer pour déclencher l'animation au scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: ease-out-cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(target * easeProgress);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration]);

  const formattedCount = count.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={counterRef} className="animated-counter">
      {icon && <div className="counter-icon">{icon}</div>}
      
      <div className="counter-value">
        <span className="counter-prefix">{prefix}</span>
        <span className="counter-number">{formattedCount}</span>
        <span className="counter-suffix">{suffix}</span>
      </div>

      {label && <div className="counter-label">{label}</div>}
    </div>
  );
};

interface ResultsGridProps {
  results: Array<{
    target: number;
    label: string;
    suffix?: string;
    icon?: React.ReactNode;
  }>;
}

export const ResultsGrid: React.FC<ResultsGridProps> = ({ results }) => {
  return (
    <div className="results-grid">
      {results.map((result, index) => (
        <div key={index} className="result-card">
          <AnimatedCounter
            target={result.target}
            suffix={result.suffix}
            label={result.label}
            icon={result.icon}
            duration={2500}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;
