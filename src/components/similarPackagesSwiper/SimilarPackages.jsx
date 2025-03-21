"use client";

import React, { useState, useRef } from "react";
import "./SimilarPackages.css"; // Updated CSS filename
import SimilarPackagesTop from "./SimilarPackagesTop";
import places from "../data/places/mostpopularPlaces";
import data from "../data/Packages/mostPopularPicks";

const SimilarPackages = ({ similarThings = [] }) => {
  const swiperRef = useRef(null);

  const [state, setState] = useState({
    selectedPlace: "All",
    dataSource: data,
  });

  const filteredPackages = state.selectedPlace === "All" ? state.dataSource : state.dataSource;

  return (
    <div className="similarpackages">
      <span className="similarpackages-title">Similar Packages</span>
      <div className="similarpackages-top">
        <SimilarPackagesTop
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
