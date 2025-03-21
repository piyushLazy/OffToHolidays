"use client";

import React from "react";
import "./PriceCard_CustomizePackageButton.css";

const PriceCard_CustomizePackageButton = () => {
  return (
    <div className="price-card">
      <div className="price-card-content">
        {/* Price Section */}
        <div className="price-section">
          <span className="original-price">₹ 20,897</span>
          <div className="discounted-price">
            <span className="price">₹ 19,987</span>
            <span className="per-person">per person</span>
          </div>
        </div>

        {/* Duration & Total Price */}
        <div className="duration-price-section">
          <div className="duration">
            <span>Duration</span>
            <span>6 Days / 5 Nights</span>
          </div>
          <div className="total-price">
            <span>Total Price (including Taxes)</span>
            <span>₹39,974</span>
          </div>
        </div>

        {/* Buttons */}
        <button className="book-now-button" aria-label="Book this package">
          Book Now
        </button>
      </div>
{/* 
      <div className="personalize-text">Want to personalize this trip?</div>
      <button 
        className="customize-package-button" 
        aria-label="Customize this package"
      >
        Customize Package
      </button> */}
    </div>
  );
};

export default PriceCard_CustomizePackageButton;
