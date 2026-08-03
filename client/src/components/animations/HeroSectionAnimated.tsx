/**
 * HeroSectionAnimated.tsx
 * Composant Hero avec animations CSS glow et parallax
 * Basé sur les skills : CSS/HyperFrames + UI-Animation
 */

import React, { useEffect, useState } from 'react';
import './HeroSectionAnimated.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export const HeroSectionAnimated: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* Parallax background overlay */}
      <div 
        className="hero-parallax-overlay"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Content container */}
      <div className="hero-content">
        {/* Animated title with glow effect */}
        <h1 className="hero-title">
          {title}
        </h1>

        {/* Animated subtitle with fade-in */}
        <p 
          className="hero-subtitle"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {subtitle}
        </p>

        {/* CTA Button with ripple effect */}
        <button 
          className="cta-button cta-button-primary"
          onClick={() => window.location.href = ctaLink}
        >
          <span className="button-text">{ctaText}</span>
          <span className="button-ripple" />
        </button>

        {/* Secondary CTA */}
        <button 
          className="cta-button cta-button-secondary"
          onClick={() => {
            const resultsSection = document.getElementById('results');
            resultsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="button-text">Voir nos résultats</span>
          <span className="button-icon">→</span>
        </button>
      </div>

      {/* Animated background elements */}
      <div className="hero-animated-bg">
        <div className="floating-element element-1" />
        <div className="floating-element element-2" />
        <div className="floating-element element-3" />
      </div>
    </section>
  );
};

export default HeroSectionAnimated;
