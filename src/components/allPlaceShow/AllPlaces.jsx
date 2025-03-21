import React from "react";
import styles from "./AllPlaces.module.css"; // ✅ Import CSS Module

function AllPlaces({ selectedPlace, onPlaceSelect, places }) {
  return (
    <div className={styles.placesContainer}>
      {["All", ...places.map((place) => place.name)].map((place, index) => (
        <span
          key={`${place}-${index}`} // ✅ Ensures uniqueness
          onClick={() => onPlaceSelect(place)}
          className={`${styles.tabButton} h-auto ${selectedPlace === place ? styles.active : ""}`}
        >
          {place}
        </span>
      ))}
    </div>
  );
}

export default AllPlaces;
