"use client";

import React, { useState, useEffect, useRef } from "react";
import MostPopularPickCard from "../card/mostPopularPickCard/MostPopularPickCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ViewAll from "../buttons/viewAll/ViewAll";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "./SimilarPackages.css";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SimilarPackagesTop = ({ similarPackage }) => {
  const router = useRouter();
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 750);

    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="similarpackages-top-section">
      {/* Loading Animation (Uncomment if needed) */}
      {/* <Lottie animationData={LoadingAnimation} loop={true} style={{ width: 200, height: 200 }} /> */}

      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 2 : 4}
        spaceBetween={isMobile ? 5 : 10}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="similarpackages-swiper"
      >
        {similarPackage.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <MostPopularPickCard item={pkg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="similarpackages-footer">
        <ViewAll />
        <div className="similarpackages-left-right-scroll">
          <LeftScroll onClick={() => swiperRef.current.swiper.slidePrev()} />
          <RightScroll onClick={() => swiperRef.current.swiper.slideNext()} />
        </div>
      </div>
    </div>
  );
};

export default SimilarPackagesTop;
