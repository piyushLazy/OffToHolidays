"use client";

import React from "react";
import "./PropertyRules.css";

const PropertyRules = ({ 
  rules = [
    "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
    "Smoking within the premises is not allowed.",
    "Unmarried couples/guests with Local IDs are allowed."
  ] 
}) => {
  return (
    <div className="property-rules">
      <h3>Property Rules</h3>
      <ul aria-label="List of property rules">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyRules;
