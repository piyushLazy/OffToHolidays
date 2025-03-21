import React from 'react';
import './TravelPackageCard.css';

const TravelPackageCard = () => {
  return (
    <div className="travel-package-card">
      <div className="image-container"></div>
      <div className="content-container">
        <div className="header">
          <span className="package-name">Kashmir Package</span>
          <span className="duration">4 Days/3 Nights</span>
        </div>
        <div className="highlights">
          <h4>Highlights:</h4>
          <ul>
            <li>Stay in a traditional houseboat on Dal Lake</li>
            <li>Gondola ride in Gulmarg’s snowy landscapes</li>
            <li>Stroll through the Mughal Gardens in Srinagar</li>
          </ul>
        </div>
        <div className="inclusions">
          <h4>Inclusions</h4>
          <div className="icons">
            <img src="https://dashboard.codeparrot.ai/api/image/Z7WARTO_YEiK2154/hotel.png" alt="Hotels" />
            <img src="https://dashboard.codeparrot.ai/api/image/Z7WARTO_YEiK2154/car.png" alt="Transportation" />
            <img src="https://dashboard.codeparrot.ai/api/image/Z7WARTO_YEiK2154/chopstic.png" alt="Breakfast" />
            <img src="https://dashboard.codeparrot.ai/api/image/Z7WARTO_YEiK2154/map-draw.png" alt="Sight-Seeing" />
          </div>
        </div>
        <div className="footer">
          <span className="price">₹ 2,987 per person</span>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TravelPackageCard;
