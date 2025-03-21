"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./PriceCard_CustomizePackageButton.css"; // Importing global CSS

const PriceCard_CustomizePackageButton = () => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push("/checkout"); // Redirect to checkout page
  };

  return (
    <div className="price-card">
      <div className="price-card-content">
        <div className="price-section">
          <span className="original-price">₹ 20,897</span>
          <div className="discounted-price">
            <span className="price">₹ 19,987</span>
            <span className="per-person">per person</span>
          </div>
        </div>
        <div className="duration-price-section">
          <div className="duration">
            <span>Duration</span>
            <span>6 Days/5 Nights</span>
          </div>
          <div className="total-price">
            <span>Total Price (including Taxes)</span>
            <span>₹39,974</span>
          </div>
        </div>
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
      <div className="personalize-text">Want to personalize this trip?</div>
      <button className="customize-package-button">Customize Package</button>
    </div>
  );
};

export default PriceCard_CustomizePackageButton;
