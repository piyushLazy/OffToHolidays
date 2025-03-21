import React, { useState } from 'react';
import LeftSection from '@/components/whyus/LeftSection';
import RightSection from '@/components/whyus/RightSection';

const MainWhyUS = () => {
  const [selectedTab, setSelectedTab] = useState("10K+ Happy Travellers");

  return (
    <div className="flex md:flex-row max-sm:flex-col max-sm:justify-center  max-sm:items-center items-stretch justify-center md:mt-24 max-sm:mt-8 h-[33rem] max-sm:h-auto md:gap-6 max-sm:gap-4 md:w-full">
      <div className="h-full flex-1">
        <LeftSection setSelectedTab={setSelectedTab} />
      </div>
      <div className="h-full flex-1">
        <RightSection selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default MainWhyUS;
