"use client";

import React, { useState } from "react";
import NavigationTabs from "./NavigationTabs";
import PriceCard_CustomizePackageButton from "./PriceCard_CustomizePackageButton";
import "./DetailsTourPackagesLayout.css";
import CardImageSlider from "../cardImageSlider/CardImageSlider";
import ImageNavigationTab from "./ImageNavigationTab";
import image from "../data/image/Hotel.avif";
import { IoCloseCircleOutline } from "react-icons/io5";

const Layout = ({ hotel }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  console.log("hotel data is ", hotel);

  const images = [
    { id: 1, src: image, alt: "Image 1" },
    { id: 2, src: image, alt: "Image 2" },
    { id: 3, src: image, alt: "Image 3" },
    { id: 4, src: image, alt: "Image 4" },
    { id: 5, src: image, alt: "Image 5" },
    { id: 6, src: image, alt: "Image 6" },
  ];

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  return (
    <div className="detailsTourlayout">
      <div className="detailsTourlayout-topcontainer-desktop">
        <ImageNavigationTab images={images} />
      </div>

      <div className="detailsTourlayout-topcontainer-mobile">
        <CardImageSlider />
      </div>

      <div className="detailsTourcontent-container">
        <div className="detailsTournavigation-container">
          <NavigationTabs hotel={hotel} />
        </div>
        <div className="flex flex-col items-center  gap-4 ">
        <PriceCard_CustomizePackageButton />
        <div
          className="mt-4 w-72 h-40 flex  cursor-pointer rounded-lg overflow-hidden shadow-lg"
          onClick={openMap}
        >
          <iframe
            src={`https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}&z=12&output=embed`}
            width="full"
            height="full"
            style={{ border: 0, pointerEvents: "none" }} // Prevents Google Maps from capturing clicks
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
    
      </div>
     
      {isMapOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]"
          onClick={closeMap}
        >
          <div
            className="bg-gray-50 p-6  rounded-lg w-11/12 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">  
            <h5 className="text-xl  text-black font-sans mb-4">{hotel?.name}</h5>
            <button
              className="text-4xl text-black"
              onClick={closeMap}
            >
              <IoCloseCircleOutline/>
            </button>
            </div>
            <div className="w-full h-96">
              <iframe
                src={`https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
