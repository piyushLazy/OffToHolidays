import React from 'react';
import './PriceAndButtonSection.css';  // Importing the CSS file

const PriceAndButtonSection = ({ price, onBookNow }) => {
  return (
    <div className="priceAndButtonContainer">
      <div className="priceText">₹ {price} per person</div>
      <button 
        className="bookButton"
        onClick={onBookNow}
      >
        Book Now
      </button>
    </div>
  );
};

PriceAndButtonSection.defaultProps = {
  price: '2,987',
  onBookNow: () => console.log('Book Now clicked'),
};

export default PriceAndButtonSection;
