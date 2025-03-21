"use client";
import React from "react";
import "./Inclusion.css";

const InclusionExclusionCard = ({ inclusion, exclusion }) => {
  return (
    <div className="detailsTourPackage-inclusion-card">
      {/* Inclusions Section */}
      <div className="inclusion">
        <h3>Inclusions</h3>
        <ul>
          {inclusion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Exclusions Section */}
      <div className="exclusion">
        <h3>Exclusions</h3>
        <ul>
          {exclusion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Inclusion = () => {
  const inclusion = ["Accommodation", "Breakfast and dinner", "Local transportation"];
  const exclusion = ["Airfare", "Personal expenses"];

  return (
    <div className="detailsTourPackage-inclusion-container">
      <InclusionExclusionCard inclusion={inclusion} exclusion={exclusion} />
    </div>
  );
};

export default Inclusion;
