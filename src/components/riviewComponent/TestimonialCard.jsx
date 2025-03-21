"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "./TestimonialCard.css";

const CHARACTER_LIMIT = 200;

const TestimonialCard = ({ imageUrl, rating, name, review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongReview = review.length > CHARACTER_LIMIT;

  return (
    <div className={`testimonial-card ${isExpanded ? "expanded" : ""}`}>
      <div className="content-wrapper">
        <div className="user-info">
          <Image
            src={imageUrl || "https://dashboard.codeparrot.ai/api/image/Z5NbZ3hIZI-ZK8jw/ellipse.png"}
            alt="User"
            width={50} // Adjust size as needed
            height={50}
            className="user-image"
          />
          <div className="user-details">
            <h3 className="user-name">{name || "Anonymous"}</h3>
            <div className="rating-container">
              <span className="rating-label">Ratings </span>
              <span className="rating-value">{rating || "N/A"}/5</span>
            </div>
          </div>
        </div>
        <p className="review-text">
          {isExpanded ? review : `${review.substring(0, CHARACTER_LIMIT)}...`}
        </p>
        {isLongReview && (
          <p className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Read Less" : "Read More..."}
          </p>
        )}
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number, // Ensuring rating is a number
  review: PropTypes.string,
};

TestimonialCard.defaultProps = {
  imageUrl: "https://dashboard.codeparrot.ai/api/image/Z5NbZ3hIZI-ZK8jw/ellipse.png",
  name: "Anonymous",
  rating: 0,
  review: "No review provided.",
};

export default TestimonialCard;
