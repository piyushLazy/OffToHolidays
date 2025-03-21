"use client"; 

import React from "react";
import { useRouter } from "next/navigation"; 
import HotelCard from "./HotelCard";
import image1 from "../../data/image/Hotel.avif";

const MostPopularHotelCard = ({ item }) => {
  console.log(item);
  
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/view/hotels/${item.destination}/${item.id}`);
  };

  const handleBookNow = () => {
    router.push(`/book/hotels/${item.destination}/${item.id}`);
  };

  return (
    <HotelCard
      id={item.id}
      image={image1} // ✅ Use fallback image
      name={item.name || "Default Name"}
      location={item.located_in|| "Default Location"}
      distance={item.located_in|| "Not Available"}
      rating={item.rating || "4.8"}
      onBookNow={handleBookNow}
      onViewDetails={handleViewDetails}
    />
  );
};

export default MostPopularHotelCard;
