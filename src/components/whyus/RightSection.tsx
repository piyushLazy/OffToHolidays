import React from 'react'
import HappyTravelers from './HappyTravelers';
import BestPrice from './BestPrice';    
import PassionateService from './PassionateService';
import FastSupport from './FastSupport';


interface RightSectionProps {
  selectedTab: string;
}

const RightSection: React.FC<RightSectionProps> = ({ selectedTab }) => {
  return (
    <div className="flex-1  rounded-2xl shadow-lg text-black p-2  max-sm:p-2 md:w-[50rem] max-sm:w-auto bg-gray-100">

        {selectedTab === "10K+ Happy Travellers" && <HappyTravelers />}
        {selectedTab === "Best Price Guarantee" && <BestPrice />}
        {selectedTab === "Passionate Service" && <PassionateService />}
        {selectedTab === "On Trip Fast Support 24/7" && <FastSupport />}
      
    </div>
  );
};

export default RightSection;
