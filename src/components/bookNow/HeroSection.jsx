"use client"; // ✅ Needed for client-side interactivity

import React from "react";
import "./HeroSection.css"; // ✅ Ensure CSS file exists

const HeroSection = ({ 
  title = "Your unforgettable journey begins right here!", 
  buttonText = "Book Now", 
  backgroundImage = "https://dashboard.codeparrot.ai/api/assets/Z448jL9JV5SvYOxm" 
}) => {
  return (
    <div 
      className="hero-container  " 
      style={{ backgroundImage: `url(${backgroundImage})` }} // ✅ Dynamic background
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <button className="hero-button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
