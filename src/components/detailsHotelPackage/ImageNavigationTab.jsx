"use client";

import React, { useState } from "react";
import "./ImageNavigationTab.css";
import ImageGallery from "./ImageGallery";

const ImageNavigationTab = ({ images }) => {
  const [activeTab, setActiveTab] = useState("All Images");

  const tabs = ["All Images", "Traveler Capture"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "All Images":
        return (
          <div>
            <ImageGallery images={images} />
          </div>
        );
      case "Traveler Capture":
        return (
          <div>
            <h1>Coming Soon</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="imgnavigation-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`imgtab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveTab(tab);
              }
            }}
            role="button"
            tabIndex={0}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="imgtab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ImageNavigationTab;
