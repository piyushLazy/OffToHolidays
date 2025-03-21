

"use client";

import { useState, useRef, useMemo, useCallback, Suspense } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import MostPopularPicksTop from "./MostPopularPicksTop";
import ApiHeader from "../data/APIHeader/ApiHeader";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import  "./MostPopularPicks.css";

// Lazy load the bottom section
const MostPopularPicksBottom = dynamic(() => import("./MostPopularPicksBottom"), {
  suspense: true,
  ssr: false,
});

export default function MostPopularPicks() {
  const [selectedPlaceTop, setSelectedPlaceTop] = useState("All");
  const [selectedPlaceBottom, setSelectedPlaceBottom] = useState("All");
  const [isDomestic, setIsDomestic] = useState(true);

  const swiperRefTop = useRef(null);
  const swiperRefBottom = useRef(null);

  // ✅ Fetch Top Data First
  const fetchTopData = async ({ pageParam = 1 }) => {
    const endpoint =
      selectedPlaceTop === "All"
        ? `${ApiHeader}/api/packages/most-popular-packages/?page=${pageParam}`
        : `${ApiHeader}/api/packages/most-popular-packages/?state=${selectedPlaceTop}`;
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-Browser-Warning": "true",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch top packages");
    const result = await response.json();
    return {
      data: result.results.results,
      nextPage: result.results.results.length ? pageParam + 1 : undefined,
    };
  };

  const {
    data: topData,
    isLoading: loadingTop,
    fetchNextPage: fetchNextPageTop,
    hasNextPage: hasMoreTop,
    isSuccess: isTopSuccess, // ✅ Only show bottom when top loads successfully
  } = useInfiniteQuery({
    queryKey: ["topPackages", selectedPlaceTop],
    queryFn: fetchTopData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    keepPreviousData: true,
  });

  const flatTopData = useMemo(() => topData?.pages.flatMap((page) => page.data) || [], [topData]);

  const filteredPackagesTop = useMemo(
    () =>
      selectedPlaceTop === "All"
        ? flatTopData
        : flatTopData.filter((pkg) => pkg.name.split(/\s|-/)[0] === selectedPlaceTop),
    [selectedPlaceTop, flatTopData]
  );

  // ✅ Fetch Bottom Data Only After Top Data is Ready
  const fetchBottomData = async ({ pageParam = 1 }) => {
    if (!isTopSuccess) return { data: [], nextPage: undefined }; // ✅ Prevents early fetch
    const endpoint = `${ApiHeader}/api/packages/${
      isDomestic ? "domestic-packages" : "international-packages"
    }/?${selectedPlaceBottom === "All" ? `page=${pageParam}` : `state=${selectedPlaceBottom}`}`;

    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-Browser-Warning": "true",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch bottom packages");
    const result = await response.json();
    return {
      data: result.results.results,
      nextPage: result.results.results.length ? pageParam + 1 : undefined,
    };
  };

  const {
    data: bottomData,
    isLoading: loadingBottom,
    fetchNextPage: fetchNextPageBottom,
    hasNextPage: hasMoreBottom,
  } = useInfiniteQuery({
    queryKey: ["bottomPackages", selectedPlaceBottom, isDomestic],
    queryFn: fetchBottomData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    keepPreviousData: true,
    enabled: isTopSuccess, // ✅ Only enable fetching after top section loads
  });

  const flatBottomData = useMemo(() => bottomData?.pages.flatMap((page) => page.data) || [], [bottomData]);

  const filteredPackagesBottom = useMemo(
    () =>
      selectedPlaceBottom === "All"
        ? flatBottomData
        : flatBottomData.filter(
            (pkg) => pkg.destination.split(/\s|-/)[0] === selectedPlaceBottom && pkg.is_domestic === isDomestic
          ),
    [selectedPlaceBottom, isDomestic, flatBottomData]
  );

  const handleToggle = useCallback((domestic) => {
    setIsDomestic(domestic);
    setSelectedPlaceBottom("All");
  }, []);

  return (
    <div className="mostPopularPicks">
      <p className="title">Our Most Popular Picks</p>

      {/* ✅ Top Section Always Loads First */}
      <div className="topSection">
        <MostPopularPicksTop
          selectedPlace={selectedPlaceTop}
          setSelectedPlace={setSelectedPlaceTop}
          dataSource={flatTopData}
          filteredPackages={filteredPackagesTop}
          swiperRef={swiperRefTop}
          fetchNextPage={fetchNextPageTop}
          hasMore={hasMoreTop}
          loading={loadingTop}
        />
      </div>

      {isTopSuccess && (
        <div className="bottomSection">
          <Suspense fallback={<Lottie animationData={LoadingAnimation} loop style={{ width: 200, height: 200 }} />}>
            <MostPopularPicksBottom
              selectedPlace={selectedPlaceBottom}
              setSelectedPlace={setSelectedPlaceBottom}
              dataSource={flatBottomData}
              handleToggle={handleToggle}
              isDomestic={isDomestic}
              filteredPackagesBasedOnDomestic={filteredPackagesBottom}
              swiperRef={swiperRefBottom}
              fetchNextPage={fetchNextPageBottom}
              hasMore={hasMoreBottom}
              loading={loadingBottom}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
