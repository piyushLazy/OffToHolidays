// import React from 'react';
// import './OccasionalCard.css';
// import image from '../../../data/image/Hotel.avif'; // Replace with the correct path for your image
// import Explorenow from '../../buttons/explorenow/Explorenow';

// function OccasionalCard({ item }) {
//   const isMobile = window.innerWidth <= 750;
//   return (
//     <div className='occasionalCard-card'>
//       <div className='occasionalCard-image'>
//         <img src={image} alt='Relaxing Retreats' />
//       </div>
//       <div className='occasionalCard-content'>
//         <p className={`occasionalCard-content-title ${isMobile ? "MobileBodySmall-Bold" : "DesktopCaptionBold"
//              }`}>
//               {item.category}
//              </p>
//         <p className='occasionalCard-content-desc DesktopCaptionRegular'>Starting at {item.startingPrice}</p>
//       </div>
//       <div className='occasionalCard-footer'>
//         <Explorenow />
//       </div>
//     </div>
//   );
// }

// export default OccasionalCard;

//=====================================

import React from 'react';
import './OccasionalCard.css';
// import Occasional from '../../occasional/Occasional';

const  OccasionalCard = ({
  title = "Adventurous Escapes", 
  price = "$3,789", 
  backgroundImage = "https://dashboard.codeparrot.ai/api/assets/Z43ior9JV5SvYOps", // Default background image
  ctaText = "Explore Now", // Default CTA text
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
