"use client";

import React, { useState, useEffect, useRef } from "react";
import ReviewSummary from "./ReviewSummary";
import TestimonialCard from "./TestimonialCard";
import "./ReviewLayout.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as CustomSwiper, SwiperSlide as CustomSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import person from  '../data/image/person.png'
const ReviewLayout = ({ packages }) => {
  
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef1 = useRef(null);

  // Effect to set reviews and handle screen resizing
  useEffect(() => {
    if (packages?.package?.reviews) {
      setReviews(packages.package.reviews);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount to set initial state
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [packages]);

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
              imageUrl={review.images.length !== 0 ? review.images :  person}
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
            onSwiper={(swiper) => (swiperRef1.current = swiper)}
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
                  imageUrl={review.images.length !== 0 ? review.images :  person}
                  rating={review.overall_rating}
                  name={review.person_name || "Anonymous"}
                  review={review.overall_review}
                />
              </CustomSwiperSlide>
            ))}
          </CustomSwiper>

          {/* Scroll Buttons */}
          <div className="Left-Right-Scroll">
            <LeftScroll onClick={() => swiperRef1.current?.slidePrev()} />
            <RightScroll onClick={() => swiperRef1.current?.slideNext()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewLayout;
