"use client"; // ✅ Required for Next.js client components

import React from "react";
import "./DestinationsCard.css";

const defaultDestinations = [
  { name: "Kashmir", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOo", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrB" },
  { name: "Rajasthan", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOq", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrC" },
  { name: "Thailand", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOs", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrD" },
  { name: "Kashmir", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOo", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrE" },
  { name: "Kashmir", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOo", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrF" },
  { name: "Kashmir", image: "https://dashboard.codeparrot.ai/api/assets/Z4u0nSAPZCF-suOo", icon: "https://dashboard.codeparrot.ai/api/assets/Z430Db9JV5SvYOrG" },
];

const DestinationCard = ({ destinations = defaultDestinations }) => {
  return (
    <div className="destination-grid">
      <div className="destination-row">
        <div className="first-row">
          <div className="destination-card medium" style={{ backgroundImage: `url(${destinations[0].image})` }}>
            <div className="destination-label">
              <span>{destinations[0].name}</span>
              <img src={destinations[0].icon} alt="icon" />
            </div>
          </div>
          <div className="destination-card small" style={{ backgroundImage: `url(${destinations[1].image})` }}>
            <div className="destination-label">
              <span>{destinations[1].name}</span>
              <img src={destinations[1].icon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="destination-card large" style={{ backgroundImage: `url(${destinations[2].image})` }}>
          <div className="destination-label">
            <span>{destinations[2].name}</span>
            <img src={destinations[2].icon} alt="icon" />
          </div>
        </div>
      </div>

      <div className="destination-row">
        <div className="first-row">
          <div className="destination-card small" style={{ backgroundImage: `url(${destinations[3].image})` }}>
            <div className="destination-label">
              <span>{destinations[3].name}</span>
              <img src={destinations[3].icon} alt="icon" />
            </div>
          </div>
          <div className="destination-card medium" style={{ backgroundImage: `url(${destinations[4].image})` }}>
            <div className="destination-label">
              <span>{destinations[4].name}</span>
              <img src={destinations[4].icon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="destination-card large" style={{ backgroundImage: `url(${destinations[5].image})` }}>
          <div className="destination-label">
            <span>{destinations[5].name}</span>
            <img src={destinations[5].icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
