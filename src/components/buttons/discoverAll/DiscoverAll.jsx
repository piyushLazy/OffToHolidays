
import React from "react";
import BtnSymbol from "../../../assets/down-20@3x.png";
import "./DiscoverAll.css";

function View({ onClick, label = "View" }) {
  const isMobile = window.innerWidth <= 750;
  return (
    <div className="discoverAll-container" onClick={onClick}>
      <p className={`discoverAll ${isMobile ? "MobileBodySmall-Bold" : "DesktopCaptionBold"
             }`}>Discover All</p>
      <img className="down" src={BtnSymbol} alt="Arrow Icon" />
    </div>
  );
}

export default View;
