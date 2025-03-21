"use client";

import React, { useEffect, useState } from "react";
import "./DetailsHotelPage.css";
import DetailsTourPackagesLayout from "../../components/detailsHotelPackage/DetailsTourPackagesLayout";
import ReviewLayout from "../reviewComponentHotel/ReviewLayout";
import BackgroundSlider from "../../components/HomePageSlider/BackgroundSlider";
import SimilarPackages from "../../components/similarHotelsSwiper/SimilarPackages";
import CustomizeTripBanner from "../../components/detailsHotelPackage/CustomizeTripBanner";
import PackageFilterBar from "../../components/packageFilterBar/PackageFilterBar";
import api from "../data/APIHeader/ApiHeader";
import AccordionList from "../../components/faq/AccordionList";
import  FooterLayout  from '../footer/FooterLayout'





const DetailTourPageMiddle = ({ hotelId }) => {
  // console.log("heyy"+destination, hotelId);

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        console.log("api"+`${api}/api/hotels/${hotelId}/`);

        const response = await fetch(`${api}/api/hotels/${hotelId}/`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-Browser-Warning": "true",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch hotel data");

        const result = await response.json();
        console.log(result);
        console.log("hotes data is " ,hotel);

        setHotel(result);
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [hotelId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="detailsTourPage-body">
      <div className="detailsTourPage-top-desktop">
        <BackgroundSlider />
      </div>

      <div className="packagefilterbar">
        <PackageFilterBar />
      </div>

      <div className="detailsTourPage-mainbody">
        <div>
          <p className="detailsTourPage-title">
            {hotel?.name ? `${hotel.name} - ${hotel.nights + 1} Days / ${hotel.nights} Nights` : "Loading..."}
          </p>
        </div>

        <div className="detailsTourPage-body-content">
          <DetailsTourPackagesLayout hotel={hotel} />
        </div>
      </div>

      {hotel?.review && (
        <div className="review">
          <ReviewLayout hotel={hotel} />
        </div>
      )}

      {hotel?.similar_hotels?.length > 0 && (
        <div className="detailsTourPage-body-faq">
          <SimilarPackages similarThings={hotel.similar_hotels} />
        </div>
      )}

      <div>
        <AccordionList />
      </div>

      <div>
        <CustomizeTripBanner />
      </div>

      <div>
        < FooterLayout/>
      </div>
    </div>
  );
};

export default DetailTourPageMiddle;


