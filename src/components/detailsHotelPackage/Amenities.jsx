"use client";

import React from "react";
import "./Amenities.css";
import { CiWifiOn } from "react-icons/ci";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuParkingMeter } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { CiDumbbell } from "react-icons/ci";
import { LuWashingMachine } from "react-icons/lu";
import { MdLocalBar } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";

const iconMap = {
  "WiFi": <CiWifiOn />,
  "Swimming Pool": <LiaSwimmingPoolSolid />,
  "Parking": <LuParkingMeter />,
  "Pet-friendly": <MdOutlinePets />,
  "Gym": <CiDumbbell />,
  "Laundry Service": <LuWashingMachine />,
  "Bar": <MdLocalBar />,
  "Restaurant": <IoIosRestaurant />,
  "Room Service": <MdOutlineRoomService />
};

const Amenities = ({ amenities = [] }) => {
  return (
    <div className="amenities">
      <h3>Amenities</h3>
      <div className="amenities-list">
        {amenities.length > 0 ? (
          amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <span className="amenity-icon">{iconMap[amenity] || "🔹"}</span>
              <span className="amenity-label">{amenity}</span>
            </div>
          ))
        ) : (
          <p>No amenities available.</p>
        )}
      </div>
    </div>
  );
};

export default Amenities;
