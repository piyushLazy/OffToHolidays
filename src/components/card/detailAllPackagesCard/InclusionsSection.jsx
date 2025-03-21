"use client";
import React from 'react';
import Image from "next/image"; 
import './InclusionsSection.css'; // Regular CSS (not CSS modules)

// Import images directly from the assets folder
import hotelImage from "../../assets/hotel.png";
import carImage from "../../assets/car.svg";
import chopstickImage from "../../assets/chopsticks-fork.svg";
import mapImage from "../../assets/map-draw.svg";

const InclusionsSection = () => {
  const inclusions = [
    { icon: hotelImage, text: 'Hotels' },
    { icon: carImage, text: 'Transportation' },
    { icon: chopstickImage, text: 'Breakfast' },
    { icon: mapImage, text: 'Sight-Seeing' }
  ];

  return (
    <div className="inclusionsContainer">
      <h3 className="inclusionsTitle">Inclusions</h3>
      <div className="inclusionsItemsContainer">
        {inclusions.length > 0 ? (
          inclusions.map((item, index) => (
            <div key={index} className="inclusionItemWrapper">
              <Image
                src={item.icon}  // Use the imported image here
                alt={item.text}
                width={30}  // Specify width
                height={30}  // Specify height
                className="inclusionIcon"
              />
              <span className="inclusionText">{item.text}</span>
            </div>
          ))
        ) : (
          <div>No inclusions available</div> // Fallback in case of empty or undefined inclusions
        )}
      </div>
    </div>
  );
};

export default InclusionsSection;
