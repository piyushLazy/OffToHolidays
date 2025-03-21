import React from 'react';
import './TravelPackage.css';

const TravelPackage = ({ 
  title = "Discover Packages Tailored to Your Travel Style.",
  description = "Whether you seek adventure, relaxation, or romance, we have the perfect getaway for every mood and occasion.",
  ctaText = "Discover All"
}) => {
  return (
    <div className="travel-package">
      <h1 className="travel-package__title">
        {title}
      </h1>
      <p className="travel-package__description">
        {description}
      </p>
      <div className="travel-package__cta">
        <span className="travel-package__cta-text">{ctaText}</span>
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z43fIr9JV5SvYOpq" 
          alt="arrow" 
          className="travel-package__cta-icon"
        />
      </div>
    </div>
  );
};

export default TravelPackage;

