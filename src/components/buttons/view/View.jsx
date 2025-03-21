
import React from "react";
import BtnSymbol from "../../../assets/down-20@3x.png";
import "./View.css";

function View({ onClick, label = "View" }) {
  return (
    <div className="view-container" onClick={onClick}>
      <span className="view">{label}</span>
      <img className="down" src={BtnSymbol} alt="Arrow Icon" />
    </div>
  );
}

export default View;
