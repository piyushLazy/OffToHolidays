"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ReactStars from "react-stars";
import { CgGym } from "react-icons/cg";
import { LuSquareParking } from "react-icons/lu";
import { FaSwimmer, FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import {useRouter} from "next/navigation"

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
  const router = useRouter()
 const handleBookNow = useCallback(
    (data: Hotel) => {
      router.push(`hotel/book/${data?.id}`);
    },
    [router]
  );
  return (
    <div className="max-w-6xl w-full bg-white mt-6 rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg sm:max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row p-3 max-sm:h-auto">
      {/* Image Section */}
      <div className="relative w-full sm:w-60 h-44 flex-shrink-0">
        {data.images.length > 0 ? (
          <Swiper
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {data.images.map((img, index) => (
              <SwiperSlide key={`${data.id}-${index}`}>
                <Image
                 // src={`${BASE_URL}${img.replace(/%20/g, " ")}`}
                 src = "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
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

      {/* Content Section */}
      <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
        {/* Hotel Name & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-lg max-sm:text-base">
            {data?.name} <span className="ml-2 font-bold"> {data?.located_in.toUpperCase()}</span>
          </p>
          <p className="text-sm text-gray-600 max-sm:mt-1">5 min away from city center</p>
        </div>

        {/* Star Rating */}
        <div className="flex items-center mt-2">
          <ReactStars count={data?.rating} size={18} edit={false} color2={"#ffd700"} />
        </div>

        {/* Check-in / Check-out */}
        <p className="text-gray-500 text-sm mt-2">Check-in: 12:00 PM | Check-out: 12:00 PM</p>

        {/* Amenities */}
        <div className="mt-2">
          <p className="font-semibold text-sm">Alternatives</p>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-1">
            <span className="flex items-center gap-1 text-gray-500"><FaWifi className="text-base text-black"/> Free WiFi</span>
            <span className="flex items-center gap-1 text-gray-500"><FaSwimmer className="text-base text-black"/> Swimming Pool</span>
            <span className="flex items-center gap-1 text-gray-500"><LuSquareParking className="text-base text-black"/> Parking</span>
            <span className="flex items-center gap-1 text-gray-500"><MdOutlinePets className="text-base text-black"/> Pet Friendly</span>
            <span className="flex items-center gap-1 text-gray-500"><CgGym className="text-base text-black"/> Gym/Spa</span>
          </div>
        </div>

        {/* Room Options */}
        <p className="text-gray-800 mt-2 text-sm font-semibold">Available Room Options</p>
        <div className="flex gap-2 text-xs sm:text-sm mt-1">
          <p>Deluxe</p>
          <p>Executive Rooms</p>
        </div>

        {/* Pricing & Booking Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3">
          <p className="font-semibold text-md max-sm:text-sm">
            {`${data?.tariff[0]} Rs./per night`} 
            <span className="pl-2 text-sm text-gray-600">Breakfast included</span>
          </p>
          <button  onClick={() => handleBookNow(data)}  className="bg-blue-500 text-white px-6 py-2 mt-2 sm:mt-0 rounded-full hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
