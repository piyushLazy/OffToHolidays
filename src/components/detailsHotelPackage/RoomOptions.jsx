"use client";

import React from "react";
import Image from "next/image"; // Next.js optimized image handling
import "./RoomOptions.css";
import defaultImage from "../data/image/Hotel.avif";

const RoomOptions = ({ rooms = [], checkIn, checkOut }) => {
  return (
    <div className="hotel-rooms">
      {rooms.length === 0 ? (
        <p className="no-rooms">No rooms available</p>
      ) : (
        rooms.map((room, index) => (
          <div key={index} className="deluxe-room">
            <div className="room-content">
              {/* Optimized image rendering */}
              <div className="room-image">
                <Image 
                  src={room.roomImage || defaultImage} 
                  alt={room.name || "Hotel Room"} 
                  width={300} 
                  height={200} 
                  priority 
                />
                <div className="occupancy">
                  <p>Max {room.default_pax_allowed || 2} Adults, {room.max_foc_child_allowed || 0} Child</p>
                </div>
              </div>

              <div className="room-details">
                <div className="room-header">
                  <h2>{room.name || "Standard Room"}</h2>
                  <div className="check-times">
                    <span>Check In: {checkIn || room.checkIn || "12:00 PM"}</span>
                    <span>Check Out: {checkOut || room.checkOut || "11:00 AM"}</span>
                  </div>
                </div>

                <p className="description">{room.about || "No details available."}</p>

                {room.inclusions?.length > 0 && (
                  <div className="inclusions">
                    <p className="inclusions-title">Inclusions:</p>
                    <div className="inclusions-list">
                      {room.inclusions.map((item, idx) => (
                        <p key={idx} className="allinclusion">✓ {item}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="hotel-booking">
                  <span className="price">
                    {room.price ? `${room.price}/night` : "Contact Us"}
                  </span>
                  <button className="select-room">Select Room</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RoomOptions;
