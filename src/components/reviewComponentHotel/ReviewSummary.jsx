'use client';

import Image from 'next/image';
import './ReviewSummary.css'; // Using a global CSS file

const ReviewSummary = ({ rating = 4.8, reviewCount = 123 }) => {
  return (
    <div className="review-summary">
      <Image
        src="https://dashboard.codeparrot.ai/api/image/Z5NbZ3hIZI-ZK8jw/star.png"
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
