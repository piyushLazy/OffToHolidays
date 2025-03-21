'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import AllPlaces from "../allPlaceShow/AllPlaces";
import ToggleSwitch from "../buttons/toggleSwitch/ToggleSwitch";
import { Swiper, SwiperSlide } from "swiper/react";
import MostPopularPickCard from "../card/mostPopularPickCard/MostPopularPickCard";
import { Navigation } from "swiper/modules";
import internationalPlaces from "../data/places/internationalPlaces";
import domesticPlaces from "../data/places/domesticPlaces";
import "swiper/css";
import "swiper/css/navigation";
import ViewAll from "../buttons/viewAll/ViewAll";
import LeftScroll from "../buttons/leftRightScroll/LeftScroll";
import RightScroll from "../buttons/leftRightScroll/RightScroll";
import LoadingAnimation from "../assets/LoadingAnimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function MostPopularPicksBottom({
  selectedPlace,
  setSelectedPlace,
  dataSource,
  handleToggle,
  isDomestic,
  filteredPackagesBasedOnDomestic,
  fetchNextPage: fetchNextPageBottom,
  hasMore,
  loading: loadingBottom
}) {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 750);
      const handleResize = () => setIsMobile(window.innerWidth <= 750);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleSlideChange = useCallback(
    (swiper) => {
      if (
        swiper.activeIndex >= filteredPackagesBasedOnDomestic.length - 4 &&
        hasMore &&
        !loadingBottom
      ) {
        console.log("Fetching more hotels...");
        fetchNextPageBottom && fetchNextPageBottom();
      }
    },
    [filteredPackagesBasedOnDomestic.length, hasMore, loadingBottom, fetchNextPageBottom]
  );

  return (
    <div className="BottomSection">
      <div className="toggleswitch mt-4">
        <ToggleSwitch onToggle={handleToggle} />
      </div>

      <div className="TopSection-PlaceSelection mt-4">
        <AllPlaces
          selectedPlace={selectedPlace}
          onPlaceSelect={setSelectedPlace}
          places={isDomestic ? domesticPlaces : internationalPlaces}
        />
      </div>

      {loadingBottom && (
        <Lottie animationData={LoadingAnimation} loop style={{ width: 200, height: 200 }} />
      )}

      <Swiper
        key={filteredPackagesBasedOnDomestic.length}
        ref={swiperRef}
        slidesPerView={isMobile ? 2 : 4}
        spaceBetween={isMobile ? 5 : 10}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="PopularPicksSwiper"
        onSlideChange={handleSlideChange}
      >
        {dataSource.map((pkg, index) => (
          <SwiperSlide key={`${pkg.id}-${index}`}>
            <MostPopularPickCard item={pkg} onBookNow={() => alert(`You selected: ${pkg.title}`)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="Most-Popular-Picks-footer">
        <ViewAll />
        <div className="flex justify-end gap-8">
          <LeftScroll onClick={() => swiperRef.current?.swiper?.slidePrev()} />
          <RightScroll onClick={() => swiperRef.current?.swiper?.slideNext()} />
        </div>
      </div>
    </div>
  );
}

export default MostPopularPicksBottom;
