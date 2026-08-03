/**
 * ServiceCard.tsx
 * Composant de carte de service avec animations hover premium
 * Basé sur les skills : UI-Animation + UI_Design_System
 */

import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon?: React.ReactNode;
  highlighted?: boolean;
  ctaText?: string;
  ctaLink?: string;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  icon,
  highlighted = false,
  ctaText = 'Demander',
  ctaLink = '#',
  index = 0,
}) => {
  return (
    <div 
      className={`service-card ${highlighted ? 'highlighted' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card background gradient */}
      <div className="card-bg-gradient" />

      {/* Icon */}
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="card-title">{title}</h3>

      {/* Description */}
      <p className="card-description">{description}</p>

      {/* Price */}
      <div className="card-price">
        <span className="price-value">{price}</span>
      </div>

      {/* Features list */}
      <ul className="card-features">
        {features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <span className="feature-icon">✓</span>
            <span className="feature-text">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button 
        className="card-cta"
        onClick={() => window.location.href = ctaLink}
      >
        <span className="cta-text">{ctaText}</span>
        <span className="cta-arrow">→</span>
      </button>

      {/* Hover effect overlay */}
      <div className="card-hover-overlay" />
    </div>
  );
};

interface ServiceGridProps {
  services: ServiceCardProps[];
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServiceCard;
