"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ReactStars from "react-stars";
import { CgGym } from "react-icons/cg";
import { LuSquareParking } from "react-icons/lu";
import { FaSwimmer } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

const BASE_URL = "https://2b65-183-83-52-212.ngrok-free.app/"; // Backend API URL

interface Hotel {
  id: number;
  name: string;
  located_in: string;
  rating: number;
  destination: string;
  tariff: string[];
  images: string[];
}

const HotelCard = ({ data }: { data: Hotel }) => {
  return (
    <div className="flex gap-8 rounded-lg p-4 mt-8 shadow-xl   bg-white  max-w-11/12 mx-auto">
      <div className="relative w-60 h-44 flex-shrink-0">
      {data.images.length > 0 ? (
            <Swiper
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
              className="h-full w-full"
            >
       {data.images.map((img, index) => (
  <SwiperSlide key={`${data.id}-${index}`}> {/* Use a unique combination */}
    <Image
      src={`${BASE_URL}${img.replace(/%20/g, " ")}`}
      alt={`Hotel Image ${index + 1}`}
      layout="fill"
      className="rounded-lg object-cover"
      unoptimized
    />
  </SwiperSlide>
))}
            </Swiper>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
      </div>
      <div className="flex-1">
        <div className="flex gap-4 ">
        <p className="font-semibold text-md">{data?.name}    <span className="ml-2 font-bold"> {data?.located_in.toUpperCase()}</span> </p>  
        <p className="text-sm pt-1 text-gray-600"> 5 min away from city center</p>
        <div>
        <ReactStars
  count={data?.rating}
  size={18}
  edit={false}
  color2={'#ffd700'} />
        </div>
        </div>
        <div className="text-gray-500 text-sm pt-2">
          check in: 12:00 PM | check out: 12:00 PM
        </div>
        <div className="flex flex-col gap-2 mt-2"> 
          <div>
            Alternatives 
            </div>
            <div className="flex gap-4 text-sm">
               <span className="text-gray-500 flex  gap-2 "> <FaWifi className="text-lg text-black"/> Free wifi</span>
               <span className="text-gray-500 flex  gap-2"> <FaSwimmer className="text-lg text-black"/> Swiming pool</span>
               <span className="text-gray-500 flex  gap-2"> <LuSquareParking className="text-lg text-black"/> Parking</span>
               <span className="text-gray-500 flex  gap-2">  <MdOutlinePets className="text-lg text-black"/> Pet friendly </span>
               <span className="text-gray-500 flex  gap-2"> <CgGym className="text-lg text-black"/> Gym/ spa</span>
            
            </div>

        </div>
        <p className="text-gray-800 mt-2  text-sm"> Availble rooms options</p>
          <div className="flex gap-4 pt-2 text-sm">
          <p> Deluxe</p>
          <p> Exutive rooms</p>
          </div>
        <div className="flex justify-between items-center mt-3">
          <p className="font-semibold   text-md">{`${data?.tariff[0]} Rs./per night`} <span className="  pl-4 text-sm text-gray-600 ">Breakfast include</span></p> 
          <button className="bg-blue-400 text-white px-6 py-2  rounded-full hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
