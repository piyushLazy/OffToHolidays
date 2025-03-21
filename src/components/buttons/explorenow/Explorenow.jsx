
import React from "react";
import BtnSymbol from "../../../assets/down-20@3x.png";
import "./Explorenow.css";

function View({ onClick, label = "View" }) {
  return (
    <div className="explorenow-container" onClick={onClick}>
      <p className="explorenow">Explore Now</p>
      <img className="down" src={BtnSymbol} alt="Arrow Icon" />
    </div>
  );
}

export default View;
