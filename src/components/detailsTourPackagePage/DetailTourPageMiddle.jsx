"use client";
import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
import "./DetailsTourPackage.css";
import apiHeader from "../data/APIHeader/ApiHeader.js"
import DetailsTourPackagesLayout from "../detailsTourPackage/DetailsTourPackagesLayout";
import ReviewLayout from "../riviewComponent/ReviewLayout";
// import BackgroundSlider from "../HomePageSlider/BackgroundSlider";
import BackgroundSlider from "../HomePageSlider/BackgroundSlider";
import SimilarPackages from "../similarPackagesSwiper/SimilarPackages";
import CustomizeTripBanner from "@/components/detailsTourPackage/CustomizeTripBanner";
import PackageFilterBar from "@/components/packageFilterBar/PackageFilterBar";
import AccordionList from "../faq/AccordionList";
import  FooterLayout  from '../footer/FooterLayout'
export default function DetailTourPageMiddle({ packageId }) {
  
  // const searchParams = useSearchParams();
  // const destination = "Rajasthan";
  // const packageId = 3;



  const [packages, setPackages] = useState([]);
  const [similarPackage, setSimilarPackage] = useState([]);

  const fetchPackage = async () => {
    console.log(  `${apiHeader}/api/packages/${packageId}/`);
    
    try {
      const response = await fetch(
        `${apiHeader}/api/packages/${packageId}/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-Browser-Warning": "true",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch package data");
      }
      const result = await response.json();
      setPackages(result);
    } catch (error) {
      console.error("Error fetching package:", error);
    }
  };

  const fetchSimilarPackage = async () => {
    try {
      const response = await fetch(
        `${apiHeader}/api/packages/similar-packages/${packageId}/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-Browser-Warning": "true",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSimilarPackage(data);
    } catch (error) {
      console.error("Error fetching similar packages:", error);
    }
  };

  useEffect(() => {
    if (packageId) {
      fetchPackage();
      fetchSimilarPackage();
    }
  }, [packageId]);

  return (
    <div className="detailsTourPage-body">
      <div className="detailsTourPage-top-desktop">
        <BackgroundSlider />
      </div>

      <div className="packagefilterbar">
        <PackageFilterBar />
      </div>

      <div className="detailsTourPage-mainbody">
        <p className="detailsTourPage-title">
          {packages?.package?.name
            ? `${packages.package.name} - ${(packages.package.nights + 1)} Days / ${packages.package.nights} Nights`
            : "Loading..."}
        </p>

        <div className="detailsTourPage-body-content">
          <DetailsTourPackagesLayout packages={packages} />
        </div>

      </div>

      <div className="review">
        <ReviewLayout packages={packages} />
      </div>

      <div className="detailsTourPage-body-faq">
        <SimilarPackages similarThings={similarPackage} />
      </div>

      <div>
        <AccordionList />
      </div>

      <div>
        <CustomizeTripBanner />
      </div>
      <div>
          <FooterLayout />   
        </div>
    </div>
  );
}
