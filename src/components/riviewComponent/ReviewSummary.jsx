"use client";

import React from "react";
import Image from "next/image";
import "./ReviewSummary.css";
import staricon from '../assets/starimage.png';
const ReviewSummary = ({ rating = 4.8, reviewCount = 123 }) => {
  return (
    <div className="review-summary">
      <Image 
        src={staricon }
        alt="Star" 
        width={20} 
        height={20} 
        className="star-icon"
      />
      <span className="summary-text">
        {rating} • {reviewCount} Reviews
      </span>
    </div>
  );
};

export default ReviewSummary;
