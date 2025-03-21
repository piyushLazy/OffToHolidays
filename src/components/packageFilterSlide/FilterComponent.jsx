import React, { useState, useEffect } from "react";
import "./FilterComponent.css";

const FilterComponent = ({
  destination,
  setDestination,
  duration,
  setDuration,
  priceRange,
  setPriceRange,
  themes,
  setThemes,
  season,
  setSeason,
  accommodationType,
  setAccommodationType,
  handleReset
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const destinationsList = ["All", "Rajasthan", "Kerala", "Goa", "Kashmir", "Ladakh", "Andaman"];

  const handleCheckboxChange = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredDestinations = destinationsList
    .filter((place) => place.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.toLowerCase().indexOf(searchTerm.toLowerCase()) - b.toLowerCase().indexOf(searchTerm.toLowerCase()));

  return (
    <div className="filter-component">
      <div className="filter-header">
        <span>Filter</span>
        <button onClick={handleReset}>Reset all</button>
      </div>

      {/* Destination Filter */}
      <div className="filter-section-1st">
        <p className="filter-section-1st-heading">Destination</p>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="place-checkboxes">
          {filteredDestinations.map((place) => (
            <label key={place} className="checkbox-label">
              <input
                type="checkbox"
                value={place}
                checked={destination.includes(place)}
                onChange={() => handleCheckboxChange(place, setDestination)}
              />
              {place}
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="filter-section">
        <h4>Duration (in nights)</h4>
        <div className="duration-inputs">
          <input
            type="text"
            value={duration[0]}
            onChange={(e) => setDuration([Math.max(1, Math.min(15, Number(e.target.value))), duration[1]])}
          />
          <input
            type="text"
            value={duration[1]}
            onChange={(e) => setDuration([duration[0], Math.max(1, Math.min(15, Number(e.target.value)))])}
          />
        </div>
        <input
          type="range"
          min="1"
          max="15"
          value={duration[1]}
          onChange={(e) => setDuration([duration[0], Number(e.target.value)])}
        />
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h4>Price range</h4>
        <div className="duration-inputs">
          <input
            type="text"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <input
            type="text"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
      </div>

      {/* Themes Filter */}
      <div className="filter-section">
        <h4>Themes</h4>
        <div className="tags">
          {["Adventure", "Beach", "Cultural", "Desert Safari", "Eco-friendly", "Family", "Food & Culinary", "Honeymoon", "Luxury", "Mountains", "Relaxation", "Road Trip", "Shopping"].map((theme) => (
            <button
              key={theme}
              className={themes.includes(theme) ? "selected" : ""}
              onClick={() => handleCheckboxChange(theme, setThemes)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* Accommodation Type Filter */}
      <div className="filter-section">
        <h4>Accommodation Type</h4>
        <div className="tags">
          {["Deluxe", "Luxury", "Camping"].map((type) => (
            <button
              key={type}
              className={accommodationType.includes(type) ? "selected" : ""}
              onClick={() => handleCheckboxChange(type, setAccommodationType)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;


