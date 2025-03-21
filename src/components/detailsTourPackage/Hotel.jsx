"use client";
import Image from "next/image";
import "./Hotel.css";
import defaultImage from "../data/image/Hotel.avif"; // Fallback image

const HotelCard = ({ hotel }) => {
  return (
    <div className="detailsTourPackage-hotel-card">
      <h3 className="hotel-title">Hotel Day {hotel.title}</h3>

      <div className="detailsTourPackage-hotel-card-content">
        <div className="detailsTourPackage-hotel-card-left">
          <Image
            src={hotel.image || defaultImage}
            alt={hotel.name || "Hotel"}
            className="hotel-image"
            width={200}
            height={150}
            priority
          />
        </div>

        <div className="detailsTourPackage-hotel-card-right">
          <div className="detailsTourPackage-hotel-card-right-left">
            <p className="hotel-name">{hotel.name || "Hotel Name Not Available"}</p>
            <p>Check In: {hotel.checkIn || "N/A"} | Check Out: {hotel.checkOut || "N/A"}</p>
            <p>Facilities Available:</p>
            <ul>
              {hotel.inclusions?.length ? (
                hotel.inclusions.map((inclusion, index) => <li key={index}>{inclusion}</li>)
              ) : (
                <li>No inclusions available</li>
              )}
            </ul>
          </div>

          <div className="detailsTourPackage-hotel-card-right-right">
            <span className="hotel-rating">{hotel.rating || "No Rating"}.5/5 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hotel = ({ hotels = [] }) => {
  if (!hotels.length) {
    return <p>No hotel details available.</p>;
  }

  return (
    <div className="detailsTourPackage-hotel-container">
      {hotels.map((hotelData, index) => {
        const hotelDetails = hotelData.hotel_details || {};

        return (
          <HotelCard
            key={index}
            hotel={{
              title: `${hotelData.all_hotel_details.staying_nights} ${hotelData.all_hotel_details.city_name}`,
              image: hotelDetails.image || defaultImage,
              name: hotelDetails.name || "Unknown Hotel",
              checkIn: hotelDetails.check_in_time || "N/A",
              checkOut: hotelDetails.check_out_time || "N/A",
              inclusions: hotelDetails.inclusions || [],
              rating: hotelDetails.rating || "No Rating",
            }}
          />
        );
      })}
    </div>
  );
};

export default Hotel;
