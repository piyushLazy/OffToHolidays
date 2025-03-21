'use client';

import React from 'react';
import Image from 'next/image';
import AboutUsMainimg from "@/app/about-us/assets/AboutUsMainImg.png";
import WhatMattersTo from './whatMattersTo';
import MainWhyUS from '@/components/whyus/mainWhyUS';
import WhatWeExpect from './whatWeExpect';

const Main = () => {
  return (
    <div className="mx-auto  md:px-14 max-sm:px-8  p-6 w-full">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-4 md:mx-12 max-sm:mx-6 mt-6">
        <span>Home</span> &gt; <span className="text-blue-500">About Us</span>
      </nav>

      <section className="w-full flex flex-col md:flex-row items-center justify-evenly max-w-6xl mx-auto px-6 py-6">
        {/* Left Side (Heading) */}
        <div className="md:w-1/2 relative">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight relative">
            Crafting <span className="text-blue-500 relative">Unforgettable</span>{" "}
            <span className="text-blue-400 relative">Journeys</span> Since 2014
          </h3>

          {/* Underline - Adjusted for correct positioning */}
          <div className="absolute left-[5px] bottom-[-12px] md:w-[380px] max-sm:w-[200px] h-[6px] transform -rotate-5 bg-gradient-to-r from-[#56ccf2] to-[#266ac6] rounded-full"></div>          </div>
        {/* Right Side (Text) */}
        <div className="md:w-1/2 mt-6 max-sm:mt-10 md:mt-0 space-y-4 leading-relaxed text-gray-700">
  <p className="text-sm md:text-base">
    Founded by two passionate travelers, Lazy Yatra was born out of a love for 
    exploration and a desire to create experiences where you can truly feel lost. 
    Not lost in the chaos of travel, but immersed in the tranquility of untouched 
    nature, the melody of gushing waterfalls, or the peaceful hues of a golden sunset.
  </p>
  
  <p className="text-sm md:text-base">
    At Lazy Yatra, we plan. You choose. Together, we craft your perfect journey.
  </p>
</div>

      </section>

      <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src={AboutUsMainimg}
          alt="Mountains"
          width={1200} 
          height={600} 
          className="w-full h-96  object-cover"
        />
      </div>
      <WhatMattersTo/>
      <MainWhyUS/>
      <WhatWeExpect/>
      <div className=' mt-6  m-1'>
        <p className=''> At Lazy Yatra, we’re here to turn your travel dreams into reality, with relaxation, adventure, and memories that last a lifetime. Let’s begin your journey today!  </p>
      </div>
    </div>
  );
};

export default Main;
