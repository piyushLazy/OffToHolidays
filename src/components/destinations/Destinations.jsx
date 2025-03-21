"use client"; // ✅ Required for Next.js client components

import React, { useState, useEffect } from "react";
import "./Destinations.css";
import AllPlaces from "../allPlaceShow/AllPlaces";
import data from "../data/destinations/data";
import DestinationsCard from "../card/destinationsCard/DestinationsCard";
import image1 from "../data/image/tent.jpg";

const Destinations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize(); // ✅ Initialize state on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedPlace, setSelectedPlace] = useState("All");
  const [dataSource, setDataSource] = useState(data);

  const cards = [
    { name: "Tent Adventure", image: image1, width: isMobile ? "240px" : "379px" },
    { name: "Rajasthan", image: image1, width: isMobile ? "130px" : "318px" },
    { name: "Beach Paradise", image: image1, width: isMobile ? "390px" : "463px" },
    { name: "Tent Adventure", image: image1, width: isMobile ? "130px" : "250px" },
    { name: "Rajasthan", image: image1, width: isMobile ? "240px" : "578px" },
    { name: "Beach Paradise", image: image1, width: isMobile ? "390px" : "332px" },
  ];

  return (
    <div className="Destinations-container">
      <div className="text-center">
        <h1 className="title">Must-Visit Destinations for Your Next Adventure</h1>
      </div>

      <div className="Destinations-allplaces">
        <AllPlaces
          selectedPlace={selectedPlace}
          onPlaceSelect={(place) => setSelectedPlace(place)}
          places={dataSource}
        />
      </div>

      <DestinationsCard />
    </div>
  );
};

export default Destinations;
