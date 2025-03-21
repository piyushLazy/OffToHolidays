import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ onToggle }) => {
  const [selected, setSelected] = useState("Domestic");

  const handleToggle = () => {
    const newSelection = selected === "Domestic" ? "International" : "Domestic";
    setSelected(newSelection);
    if (onToggle) {
      onToggle(newSelection === "Domestic");
    }
  };

  return (
    <div className="toggle-container " onClick={handleToggle}>
      <div
        className="toggle-button"
        style={{ left: selected === "Domestic" ? "0" : "50%" }}
      ></div>
      <div className={`toggle-option ${selected === "Domestic" ? "active" : ""}`}>
        Domestic
      </div>
      <div className={`toggle-option ${selected === "International" ? "active" : ""}`}>
        International
      </div>
    </div>
  );
};

export default ToggleSwitch;
