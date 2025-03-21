"use client";
import React, { useState, useEffect } from "react";
import "./NavigationTabs.css";
import Overview from "./Overview";
// import Itinerary from "./Itenary";
import Hotel from "./Hotel";
import Inclusion from "./Inclusion";
import Policies from "./Policies";
import DayDetails from "./DayDetails";
import ScrollToTop from "../scrollTop/ScrollToTop";

const NavigationTabs = ({ packages }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [overview, setOverview] = useState({});
  const [itinerary, setItinerary] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    if (packages?.package) {
      setOverview({
        description: packages.page_description || "No description available",
        destinations: packages.package.all_destinations || "Unknown destinations",
        nights: packages.package.nights ?? "5",
        slug: packages.package.slug || "No slug available",
        idealFor: packages.package.idealFor || "Families, Couples, Nature Lovers",
      });

      setItinerary(packages.package.quotes[0]?.itinerary?.itinerary_group_links || []);
      setHotel(packages.package.quotes[0]?.hotels || []);
      setPolicy(packages.package.terms_and_conditions?.information_groups[0]?.informations || []);
    }
  }, [packages]);

  const tabs = ["Overview", "Itinerary", "Hotels", "Inclusions & Exclusions", "Policies"];

  const renderTabContent = () => {
    return (
      <>
        <ScrollToTop />
        {activeTab === "Overview" && (
          <div className="overview-container">
            <Overview overview={overview} />
            <DayDetails itinerary={itinerary} />
            <Hotel hotels={hotel} />
            <Inclusion />
            <Policies policy={policy} />
          </div>
        )}
        {activeTab === "Itinerary" && <DayDetails itinerary={itinerary} />}
        {activeTab === "Hotels" && <Hotel hotels={hotel} />}
        {activeTab === "Inclusions & Exclusions" && <Inclusion />}
        {activeTab === "Policies" && <Policies policy={policy} />}
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
