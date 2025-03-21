'use client'

import React, { useCallback } from "react";
import ImageSection from "./ImageSection";
import PackageDetails from "./PackageDetails";
import HighlightsSection from "./HighlightsSection";
import InclusionsSection from "./InclusionsSection";
import PriceAndButtonSection from "./PriceAndButtonSection";
import { useRouter } from "next/navigation";


const TravelPackageCard = ({ data }) => {
  const title = data?.name || "Not Available";
  const duration = data?.nights || "Not Available";
  const locations = data?.all_locations || [];
  const price = data?.lp_cost || "Not Available";
  const router = useRouter()

 const handleBookNow = useCallback(
    (data) => {
      router.push(`package/book/${data?.id}`);8
    },
    [router]
  )

  return (
    <div className="max-w-6xl max-sm:h-[38rem] p-2 w-full bg-white mt-6 rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg sm:max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row">
      {/* Image Section */}
      <div className="w-full sm:max-w-[20rem]">
        <ImageSection />
      </div>

{/* Details Section */}
<div className="w-full sm:w-2/3 p-5 flex flex-col gap-4">
        {/* Package Details */}
        <div className="mt-2">
          <PackageDetails title={title} duration={duration} />
        </div>

     

        {/* Highlights */}
        <div className="mt-2">
          <HighlightsSection all_locations={locations} />
        </div>


        {/* Inclusions */}
        <div className="mt-2">
          <InclusionsSection />
        </div>

        

        {/* Price & CTA Button */}
        <div className="mt-2">
          <PriceAndButtonSection price={price } handleBookNow = {handleBookNow} />
        </div>
      </div>
    </div>
  );
};

export default TravelPackageCard;
