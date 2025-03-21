"use client";
import "./DayDetails.css";

const DayDetails = ({ itinerary = [] }) => {
  if (!itinerary.length) {
    return <p>No itinerary details available.</p>;
  }

  return (
    <div className="day-details-list">
      {itinerary.map((day, index) => (
        <div key={index} className="day-details">
          <div className="day-header">
            <div className="day-circle" />
            <div className="day-title">
              <span>Day {day.day}</span>
              <span>{day.associated_itinerary?.title || "No Title"}</span>
            </div>
          </div>

          <div className="day-highlights-section">
            <div className="day-highlights-title">Day Highlights</div>
            <div className="day-highlights-content">
              {day.associated_itinerary?.information || "No highlights available."}
            </div>
          </div>

          <div className="overnight-stay-section">
            <div className="overnight-stay-content">
              Overnight Stay in <strong>{day.associated_itinerary?.start_from?.name || "Not specified"}</strong>
            </div>
            <button className="change-hotel-button">Change Hotel</button>
          </div>

          <div className="inclusions-section">
            Inclusions: {day.inclusions || "No inclusions specified"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayDetails;
