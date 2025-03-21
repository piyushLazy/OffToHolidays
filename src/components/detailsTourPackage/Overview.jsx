"use client";
import React from "react";
import "./Overview.css";

const Overview = ({ overview }) => {
  return (
    <div className="trip-details">
      <p className="description">{overview?.description || "Description not available."}</p>

      <div className="details-container">
        <div className="detail-row">
          <span className="label">
            <b>Destinations Covered:</b>{" "}
            {overview?.destinations?.length
              ? overview.destinations.map((dest, index) => (
                  <span key={index}>
                    {dest}
                    {index < overview.destinations.length - 1 ? ", " : ""}
                  </span>
                ))
              : "N/A"}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">
            <b>Duration:</b>{" "}
            {overview?.nights ? `${overview.nights + 1} Days / ${overview.nights} Nights` : "Not specified"}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">
            <b>Ideal For:</b> {overview?.idealFor || "Families, Couples, Nature Lovers"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
