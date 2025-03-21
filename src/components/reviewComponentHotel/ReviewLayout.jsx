'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReviewSummary from './ReviewSummary';
import TestimonialCard from './TestimonialCard';
import './ReviewLayout.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as CustomSwiper, SwiperSlide as CustomSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LeftScroll from '../buttons/leftRightScroll/LeftScroll';
import RightScroll from '../buttons/leftRightScroll/RightScroll';

const ReviewLayout = ({ hotel }) => {
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef1 = useRef(null);

  useEffect(() => {
    if (hotel?.reviews) {
      setReviews(hotel.reviews);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hotel]);

  return (
    <div className="review-layout">
      <div className="review-summary-container">
        <ReviewSummary />
      </div>

      {/* Desktop View: Show Testimonials as Cards */}
      {!isMobile && (
        <div className="testimonials-container">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              imageUrl={"https://dashboard.codeparrot.ai/api/image/Z5NbZ3hIZI-ZK8jw/ellipse.png"}
              rating={review.overall_rating}
              name={review.person_name || "Anonymous"}
              review={review.overall_review}
            />
          ))}
        </div>
      )}

      {/* Mobile View: Show Swiper */}
      {isMobile && (
        <div className="testimonial-container-mobile">
          <CustomSwiper
            ref={swiperRef1}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
            className="hotelsSwiper"
          >
            {reviews.map((review, index) => (
              <CustomSwiperSlide key={index}>
                <TestimonialCard
                  imageUrl={"https://dashboard.codeparrot.ai/api/image/Z5NbZ3hIZI-ZK8jw/ellipse.png"}
                  rating={review.overall_rating}
                  name={review.person_name || "Anonymous"}
                  review={review.overall_review}
                />
              </CustomSwiperSlide>
            ))}
          </CustomSwiper>

          <div className="Left-Right-Scroll">
            <LeftScroll onClick={() => swiperRef1.current?.swiper?.slidePrev()} />
            <RightScroll onClick={() => swiperRef1.current?.swiper?.slideNext()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewLayout;