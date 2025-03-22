"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import AllPlaces from "../allPlaceShow/AllPlaces";
import MostPopularPickCard from "../card/mostPopularPickCard/MostPopularPickCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ViewAll from "../buttons/viewAll/ViewAll";
// import ViewAll from  "../buttons/view/View"
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import mostpopularplacedata from "../data/places/mostpopularPlaces";
import "swiper/css";
import "swiper/css/navigation";
import "./MostPopularPicks.css";

// Dynamic Import for Lottie (fixes Next.js SSR issue)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Spinner from "../Spinner";
function MostPopularPicksTop({
  selectedPlace,
  setSelectedPlace,
  dataSource,
  filteredPackages,
  fetchNextPage,
  hasMore,
  loading,
  error
}) {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const router = useRouter();

  // Update mobile flag on mount & window resize.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 750);
      const handleResize = () => setIsMobile(window.innerWidth <= 750);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Handle infinite scroll in Swiper
  const handleSlideChange = useCallback(
    (swiper) => {
      if (swiper.activeIndex >= filteredPackages.length - 4 && hasMore && !loading) {
        fetchNextPage && fetchNextPage();
      }
    },
    [filteredPackages.length, hasMore, loading, fetchNextPage]
  );

  return (
    <div className="TopSection ">
      {/* Top Section - Place Selection */}
      <div className="TopSection-PlaceSelection ">
        <AllPlaces selectedPlace={selectedPlace} onPlaceSelect={setSelectedPlace} places={mostpopularplacedata} />
      </div>

      {loading && <div className="mt-6">
<Spinner />
 </div>}

      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 2 : 4}
        spaceBetween={isMobile ? 5 : 10}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="PopularPicksSwiper"
        onSlideChange={handleSlideChange}
      >
        {filteredPackages.map((pkg, index) => (
          <SwiperSlide key={`${pkg.id}-${index}`}>
            <MostPopularPickCard item={pkg} onBookNow={() => router.push(`/package/${pkg.location}`)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="Most-Popular-Picks-footer max-sm:m-4">
        <ViewAll />
        <div className="flex gap-8 ">
          <LeftScroll onClick={() => swiperRef.current?.swiper?.slidePrev()} />
          <RightScroll onClick={() => swiperRef.current?.swiper?.slideNext()} />
        </div>
      </div>
    </div>
  );
}

export default MostPopularPicksTop;
