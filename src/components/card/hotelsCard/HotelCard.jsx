"use client"; // ✅ Required for client-side interactivity

import React from "react";
import Image from "next/image"; 
import { useRouter } from "next/navigation"; 
import "./HotelCard.css";
import  starimg from '../../assets/starimage.png'
import  down from '../../assets/down.png'

const HotelCard = ({ 
  id,
  image , 
  name = "The Ritz Carlton", 
  location = "Jaipur, Rajasthan", 
  distance = "5 Kms from Hawa Mahal",
  rating = "4.91", 
  price = "Starting at ₹2,000 per night", 
  onBookNow = () => {}, 
  onViewDetails = () => {} 
}) => {
  const router = useRouter();

  return (
    <div className="hotel-card">
      {/* Image Container */}
      <div className="image-container">
        <Image src={ image } alt={name} className="hotel-image" width={300} height={200} priority /> {/* ✅ Next.js optimized */}
        
        <div className="rating">
          <Image 
            src={starimg }
            alt="star" 
            className="star-icon"
            width={20} height={20} // ✅ Set width & height for Next.js
          />
          <span>{rating}/5</span>
        </div>
      </div>

      {/* Hotel Info */}
      <div className="hotel-info">
        <h2>{name}</h2>
        <p className="location-text">{location}<br />{distance}</p>
        <p className="price-text">{price}</p>
      </div>

      {/* Action Buttons */}
      <div className="action-container">
        <button className="book-now" onClick={() => router.push(`/hotel/book/${id}`)}>Book Now</button> {/* ✅ Next.js routing */}
        
        <div className="view-more" onClick={() => router.push(`/hotel/view/${id}`)}>
          <span>View</span>
          <Image 
            src={down}
            alt="view more" 
            className="down-icon"
            style={{ "rotate":"270deg"} }
            width={15} height={15} 
          />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
