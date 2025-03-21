"use client";

import React from "react";
import "./Overview.css";

const Overview = ({ overview = {} }) => {
  console.log(overview);

  return (
    <div className="trip-details">
      <div className="detail-row">
        <span className="label">
          <b>Star Rating:</b> {overview.rating ? `${overview.rating}-Stars` : "4-Stars"}
        </span>
      </div>
      <div className="detail-row">
        <span className="label">
          <b>Guest Rating:</b>{" "}
          {overview.guest_ratings ? `${overview.guest_ratings}/5 by 10+ travelers` : "Not specified"}
        </span>
      </div>
      <p className="description">{overview.description || "Description not available."}</p>
    </div>
  );
};

export default Overview;
