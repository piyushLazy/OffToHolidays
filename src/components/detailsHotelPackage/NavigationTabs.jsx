"use client";

import React, { useState, useEffect } from "react";
import "./NavigationTabs.css";
import Overview from "./Overview";
import ScrollToTop from "../scrollTop/ScrollToTop";
import Amenities from "./Amenities";
import PropertyRules from "./PropertyRules";
import RoomOptions from "./RoomOptions";
import Policies from "./Policies";

const NavigationTabs = ({ hotel = {} }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [overview, setOverview] = useState({});
  const [policy, setPolicy] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [checkInTime, setCheckInTime] = useState();
  const [checkOutTime, setCheckOutTime] = useState();
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    if (hotel) {
      setOverview({
        description: hotel.about || "No description available",
        guest_ratings: hotel.guest_ratings || "No ratings available",
        rating: hotel.rating || "No rating available",
      });
      setRoomData(hotel.rooms || []);
      setCheckInTime(hotel.check_in_time);
      setCheckOutTime(hotel.check_out_time);
      setAmenities(hotel.amenities || []);
    }
  }, [hotel]);

  const tabs = ["Overview", "Room Options", "Amenities", "Property", "Rules Policies"];

  const renderTabContent = () => {
    return (
      <>
        <ScrollToTop />
        {activeTab === "Overview" && (
          <div className="overview-container">
            <Overview overview={overview} />
            <RoomOptions rooms={roomData} checkIn={checkInTime} checkOut={checkOutTime} />
            <Amenities amenities={amenities} />
            <PropertyRules />
          </div>
        )}
        {activeTab === "Room Options" && <RoomOptions rooms={roomData} checkIn={checkInTime} checkOut={checkOutTime} />}
        {activeTab === "Amenities" && <Amenities amenities={amenities} />}
        {activeTab === "Property" && <PropertyRules />}
        {activeTab === "Rules Policies" && <Policies policy={policy} />}
      </>
    );
  };

  return (
    <div className="navigationtabs-container">
      <div className="navigation-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
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
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default NavigationTabs;
