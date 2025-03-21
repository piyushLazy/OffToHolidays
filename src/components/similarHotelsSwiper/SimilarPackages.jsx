"use client";

import React, { useState, useRef } from "react";
import "./MostPopularPicks.css";
import places from "../data/places/mostpopularPlaces";
import data from "../data/Packages/mostPopularPicks";
import MostPopularPicksTop from "./MostPopularPicksTop";

const SimilarPackages = ({ similarThings = [] }) => {
  const swiperRef = useRef(null);

  const [state, setState] = useState({
    selectedPlace: "All",
    selectedPlaceDomesticAndInternational: "All",
    dataSource: data,
    isDomestic: true,
  });

  const filteredPackages = state.selectedPlace === "All" ? state.dataSource : state.dataSource;

  return (
    <div className="Most-Popular-Picks">
      <span className="Most-Popular-Picks-title DesktopHeadingH4">Similar Hotels</span>
      <div className="Most-Popular-Picks-top">
        <MostPopularPicksTop
          dataSource={places}
          filteredPackages={filteredPackages}
          swiperRef={swiperRef}
          similarPackage={similarThings}
        />
      </div>
    </div>
  );
};

export default SimilarPackages;
