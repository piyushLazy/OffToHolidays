

import React from 'react';
import './OccasionalCard.css';
// import Occasional from '../../occasional/Occasional';

const  OccasionalCard = ({
  title = "Adventurous Escapes", 
  price = "$3,789", 
  backgroundImage = "https://dashboard.codeparrot.ai/api/assets/Z43ior9JV5SvYOps", // Default background image
  ctaText = "Explore Now", 
  arrowIcon = "https://dashboard.codeparrot.ai/api/assets/Z43ior9JV5SvYOpt", // Default arrow icon
}) => {
  return (
    <div className="adventure-card">
      <div
        className="adventure-card__image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="adventure-card__content">
        <div className="adventure-card__info">
      
          <h3 className="adventure-card__title">{title}</h3>

          <p className="adventure-card__price">Starting at {price}</p>

          <div className="adventure-card__cta">
            <span className="adventure-card__cta-text">{ctaText}</span>
            <img src={arrowIcon} alt="arrow" className="adventure-card__cta-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionalCard;
