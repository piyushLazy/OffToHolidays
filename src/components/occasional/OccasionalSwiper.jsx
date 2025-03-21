
import React, { useRef } from "react";
import { Swiper as OccasionSwiperComponent, SwiperSlide as OccasionSwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import OccasionalCard from "../card/occasionalCard/OccasionalCard";
// import AdventurousCard from "";
import './Occasional.css';

function OccasionSwiper({ items, swiperRef }) {
  const isMobile = window.innerWidth <= 750;
    return (
      <div className="swiper-container-wrapper">
        <OccasionSwiperComponent
          ref={swiperRef}
          slidesPerView={isMobile?2:4}
          spaceBetween={isMobile?5:10}
          pagination={{ clickable: true }}
          modules={[]}
          className="occasionalSwiper"
        >
          {items.map((pkg) => (
            <OccasionSwiperSlide key={pkg.id}>
              <OccasionalCard item={pkg} />
            </OccasionSwiperSlide>
          ))}
        </OccasionSwiperComponent>

        {/* Arrows below the swiper */}
        <div className="flex gap-8 justify-end mt-2">
          <LeftScroll onClick={() => swiperRef.current.swiper.slidePrev()} />
          <RightScroll onClick={() => swiperRef.current.swiper.slideNext()} />
        </div>
      </div>
    );
}

export default OccasionSwiper;

