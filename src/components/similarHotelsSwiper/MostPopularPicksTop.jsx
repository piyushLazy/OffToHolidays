"use client";

import React, { useState, useEffect, useRef } from "react";
import MostPopularHotelCard from "../card/hotelsCard/MostPopularHotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ViewAll from "../buttons/viewAll/ViewAll";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import "swiper/css";
import "swiper/css/navigation";
import "./MostPopularPicks.css";
import { useRouter } from "next/navigation"; // Replacing useNavigate for Next.js
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/LoadingAnimation.json";

const MostPopularPicksTop = ({ similarPackage = [] }) => {
  const router = useRouter();
  const swiperRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="TopSection">
      {similarPackage.length === 0 ? (
        <Lottie animationData={LoadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
      ) : (
        <Swiper
          ref={swiperRef}
          slidesPerView={isMobile ? 2 : 4}
          spaceBetween={isMobile ? 5 : 10}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="PopularPicksSwiper"
        >
          {similarPackage.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <MostPopularHotelCard item={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="Most-Popular-Picks-footer">
        <ViewAll />
        <div className="Left-Right-Scroll">
          <LeftScroll onClick={() => swiperRef.current?.swiper.slidePrev()} />
          <RightScroll onClick={() => swiperRef.current?.swiper.slideNext()} />
        </div>
      </div>
    </div>
  );
};

export default MostPopularPicksTop;
