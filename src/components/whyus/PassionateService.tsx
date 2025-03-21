"use client";

import React from "react";
import { motion } from "framer-motion";

const PassionateService = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:p-6 space-y-4">
      
      {/* Description */}
      <p className="text-zinc-600 font-sans text-center max-w-lg">
        Lazy Yatra offers personalized trip planning with expert advice, seamless hotel and car bookings, and a single point of contact for transparency and satisfaction.
      </p>

      {/* Tablet Frame */}
      <div className="relative md:w-[550px] md:h-[300px] max-sm:w-[20rem] max-sm:h-[22rem] bg-white rounded-xl p-4 shadow-2xl flex flex-col items-center border-[12px] border-zinc-600 overflow-hidden">
        
        {/* Chat Container */}
        <div className="mt-10 flex flex-col space-y-6 w-full md:px-6 overflow-hidden">
          
          {/* Bot Message - Properly Slides in from Left */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white text-black px-4 py-3 rounded-xl md:max-w-[75%] max-sm:max-w-full self-start border-2 border-black 
            before:content-[''] before:absolute before:-left-2 before:top-1/2 before:w-3 before:h-3 before:bg-white before:border-l-2 before:border-t-2 before:border-black before:rotate-315"
          >
            Hi there! I&apos;m Lazy Yatra. How can I help make your trip special today?
          </motion.div>

          {/* User Message - Properly Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="relative bg-white text-black px-4 py-3 rounded-xl md:max-w-[75%] max-sm:max-w-full self-end border-2 border-black 
            before:content-[''] before:absolute before:-right-2 before:top-1/2 before:w-3 before:h-3 before:bg-white before:border-r-2 before:border-t-2 before:border-black before:rotate-45"
          >
            I would like to plan my trip to Kashmir.
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PassionateService;
