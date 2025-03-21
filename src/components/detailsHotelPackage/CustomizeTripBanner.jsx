"use client";

import React from "react";
import "./CustomizeTripBanner.css";

const CustomizeTripBanner = ({
  title = "Want to Customize Your Dream Trip?",
  subtitle = "We're here to make it perfect just for you!",
  email = "team@lazyatra.com",
  phone = "+91-1234567890",
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z5iCdpypgKcUidWt/rectangl.png"
}) => {
  return (
    <div 
      className="banner-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-subtitle">{subtitle}</p>
          <p className="banner-contact">
            Leave a mail at{" "}
            <a href={`mailto:${email}`} className="banner-link">
              {email}
            </a>{" "}
            or call us at{" "}
            <a href={`tel:${phone}`} className="banner-link">
              {phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTripBanner;
