"use client"; // Required for using state, hooks & window in Next.js

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AllPlaces from "../allPlaceShow/AllPlaces";
import { Swiper as CustomSwiper, SwiperSlide as CustomSwiperSlide } from "swiper/react";
import MostPopularHotelCard from "../card/hotelsCard/MostPopularHotelCard";
import { Navigation, Pagination } from "swiper/modules";
import internationalPlaces from "../data/hotels/internationalplaces";
import domesticPlaces from "../data/hotels/domesticPlaces";
import "swiper/css";
import "./PopularHotels.css";
import "swiper/css/navigation";
import ViewAll from "../buttons/viewAll/ViewAll";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import { debounce } from "lodash";

function PopularHotelsTop({
  selectedPlace,
  setSelectedPlace,
  dataSource,
  isDomestic,
  filteredPackagesBasedOnDomestic,
  page,
  setPage,
  hasMore,
  loadingBottom,
}) {

   console.log("this was",filteredPackagesBasedOnDomestic)
  const swiperRef1 = useRef(null);
  const router = useRouter(); // ✅ Next.js router
   
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search functionality  
  const [isMobile, setIsMobile] = useState(false); // ✅ Fix `window` issue

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 750);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // ✅ Debounce inside `useEffect` to prevent re-renders
  useEffect(() => {
    const debouncedResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 300);

    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // ✅ Next.js routing
  const handleViewDetails = useCallback(
    (item) => {
      router.push(`/view/hotels/${item.destination}/${item.id}`);
    },
    [router]
  );

  const handleBookNow = useCallback(
    (item) => {
      router.push(`/book/hotels/${item.destination}/${item.id}`);
    },
    [router]
  );

  const oppositeDataSource = isDomestic ? domesticPlaces : internationalPlaces;

  // ✅ Adjust threshold for dynamic slides
  const threshold = Math.max(filteredPackagesBasedOnDomestic.length - 4, 0);

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex >= threshold && hasMore ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="BottomSection">
      <div className="PlaceSelection">
        <AllPlaces
          selectedPlace={selectedPlace}
          onPlaceSelect={setSelectedPlace}
          places={oppositeDataSource}
        />
      </div>

      {/* { loadingBottom && (
        <Lottie animationData={LoadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
      )} */}

      <CustomSwiper
        ref={swiperRef1}
        slidesPerView={isMobile ? 2 : 4}
        spaceBetween={isMobile ? 5 : 30}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="hotelsSwiper"
        onSlideChange={handleSlideChange}
      >
        {filteredPackagesBasedOnDomestic.map((pkg, index) => (
          <CustomSwiperSlide key={index}>
            <MostPopularHotelCard item={pkg} onViewDetails={() => handleViewDetails(pkg)} onBookNow={() => handleBookNow(pkg)} />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>

      <div className="Most-Popular-Hotels-footer">
        <ViewAll />
        <div className="flex gap-8 justify-end mt-2">
          <LeftScroll onClick={() => swiperRef1.current?.swiper.slidePrev()} />
          <RightScroll onClick={() => swiperRef1.current?.swiper.slideNext()} />
        </div>
      </div>
    </div>
  );
}

export default PopularHotelsTop;
