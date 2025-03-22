"use client"; // ✅ Required for client-side interactivity

import React, { useState, useRef, useEffect } from "react";
import "./PopularHotels.css";
import domesticPlaces from "../data/places/domesticPlaces";
import internationalPlaces from "../data/places/internationalPlaces";
import mostpopularPlaces from "../data/places/mostpopularPlaces";
import PopularHotelsTop from "./PopularHotelsTop";
import data from "../data/hotels/data";
import ApiHeader from "../data/APIHeader/ApiHeader";
import ToggleSwitch from "../buttons/toggleSwitch/ToggleSwitch";

const PopularHotels = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("All");
  const [selectedPlaceDomesticAndInternational, setSelectedPlaceDomesticAndInternational] = useState("All");
  const [isDomestic, setIsDomestic] = useState(true);
  const swiperRef = useRef(null);
  const swiperRefDomesticAndInternational = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  const [errorBottom, setErrorBottom] = useState(null);
  const [loadingBottom, setLoadingBottom] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // To track if there are more pages

  // ✅ Handle window resize properly in Next.js
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Fetch Hotels API (Next.js optimized)
  const fetchHotels = async (pageNumber) => {
    try {
      setLoadingBottom(true);
      setErrorBottom(null);

      const queryParam = selectedPlaceDomesticAndInternational === "All"
        ? `page=${pageNumber}`
        : `state_name=${selectedPlaceDomesticAndInternational}`;

      console.log(`${ApiHeader}/api/hotels/${isDomestic ? "domestic" : "international"}/?${queryParam}`);
      
      const response = await fetch(`${ApiHeader}/api/hotels/${isDomestic ? "domestic" : "international"}/?${queryParam}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-Browser-Warning": "true",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch hotel data");

      const result = await response.json();

      if (result.results.length === 0) {
        setHasMore(false);
      } else {
        setDataSource((prevData) => [...prevData, ...result.results]);
        setHasMore(true);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setErrorBottom(err.message || "An error occurred");
    } finally {
      setLoadingBottom(false);
    }
  };

  // ✅ Fetch hotels when dependencies change
  useEffect(() => {
    fetchHotels(page);
  }, [page, isDomestic, selectedPlaceDomesticAndInternational]);

  // ✅ Filter logic (cleaned up)
  const filteredPackagesBasedOnDomestic = dataSource.filter((pkg) => {
    if (selectedPlaceDomesticAndInternational !== "All" && pkg.destination !== selectedPlaceDomesticAndInternational) {
      return false;
    }
    return isDomestic ? pkg.is_domestic : !pkg.is_domestic;
  });

  // ✅ Handle the toggle between domestic and international places
  const handleToggle = (isOn) => {
    setIsDomestic(isOn);
    setSelectedPlace("All");
  };

  return (
    <div className="Most-Popular-Hotels ">
      <div className="Most-Popular-Hotels-top">
        <div className={`Our-Most-Popular-Hotels max-sm:p-2 text-black max-sm:font-bold ${isMobile ? "MobileHeadingH7" : "DesktopHeadingH4"}`}>
          Popular Hotels To Check Out
        </div>
        <ToggleSwitch onToggle={handleToggle} />
      </div>

      {/* Bottom Section */}
      <PopularHotelsTop
        selectedPlace={selectedPlaceDomesticAndInternational}
        setSelectedPlace={setSelectedPlaceDomesticAndInternational}
        dataSource={dataSource}
        isDomestic={isDomestic}
        filteredPackagesBasedOnDomestic={filteredPackagesBasedOnDomestic}
        swiperRef={swiperRefDomesticAndInternational}
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        loadingBottom={loadingBottom}
      />
    </div>
  );
};

export default PopularHotels;
