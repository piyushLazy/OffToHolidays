"use client"; // ✅ Add this if using Next.js App Router

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation
import CardComponent from "./CardComponent";
import img from  '../../data/image/image3.avif'
const MostPopularPickCard = ({ item }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/package/view/${item.id}`);
  };

  const handleBookNow = () => {
    router.push(`/package/book/${item.id}`);
  };

  return (
    <CardComponent
      image={img}
      title={item.name || "Default Title"}
      description={
        item.all_locations
          ?.map(([nights, city]) => `${nights} in ${city}`)
          .join(", ") ||
        "Enjoy a private villa with stunning beach views and spend quality time with your loved one."
      }
      price={item.price || "Contact with us..."}
      duration={item.nights?.toString() || "0"}
      badge="Most Popular"
      onView={handleViewDetails}
      onBook={handleBookNow}
    />
  );
};

export default MostPopularPickCard;
