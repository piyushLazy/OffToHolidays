"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import videoSectionImg from "@/assets/videoSectionImg.png"; // Replace with actual images
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  { id: 1, name: "Emma K.", location: "Dubai", rating: 4.5, imgUrl: videoSectionImg },
  { id: 2, name: "John D.", location: "New York", rating: 4.7, imgUrl: videoSectionImg },
  { id: 3, name: "Sophia L.", location: "Paris", rating: 4.8, imgUrl: videoSectionImg },
  { id: 4, name: "Michael B.", location: "London", rating: 4.6, imgUrl: videoSectionImg },
  { id: 5, name: "Olivia P.", location: "Berlin", rating: 4.9, imgUrl: videoSectionImg },
];

export default function ImageSwiper() {
  const [currentIndex, setCurrentIndex] = useState(2); // Center div opens by default

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center max-sm:my-12  md:my-24 px-4">
      <div className="relative flex justify-center items-center gap-x-1 max-sm:gap-x-2 sm:gap-x-4 w-full max-w-[1200px]">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isAdjacent = index === currentIndex - 1 || index === currentIndex + 1;

          return (
            <motion.div
              key={slide.id}
              onClick={() => handleClick(index)}
              initial={{ opacity: 0.8, scale: 0.9 }}
              animate={{
                opacity: isActive ? 1 : 0.85,
                scale: isActive ? 1 : 0.92,
                backgroundColor: "#000",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                stiffness: 120,
              }}
              className={`relative cursor-pointer rounded-lg overflow-hidden flex justify-center items-center transition-all duration-500 bg-black
                ${
                  isActive
                    ? "w-[70vw] h-[300px] max-sm:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]" // Active div size (responsive)
                    : isAdjacent
                    ? "w-[40px] max-sm:w-[60px] sm:w-[100px] md:w-[130px] lg:w-[150px] h-[220px] max-sm:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[500px]" // Adjacent div size
                    : "w-[35px] max-sm:w-[50px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-[180px] max-sm:h-[240px] sm:h-[280px] md:h-[300px] lg:h-[400px]" // Far div size
                }`}
            >
              {isActive ? (
                <Image src={slide.imgUrl.src} alt={slide.name} layout="fill"  objectFit="fill"  />
              ) : (
                <div className="absolute left-1/2 transform -translate-x-1/2 rotate-90 text-white text-xs max-sm:text-sm sm:text-base font-semibold whitespace-nowrap">
                  {slide.name}
                </div>
              )}

              {isAdjacent && (
                <button
                  onClick={() => setCurrentIndex(index)}
                  className="absolute bottom-2 max-sm:bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md p-2 max-sm:p-2.5 sm:p-3 rounded-full transition-all hover:bg-white/40 text-white text-sm max-sm:text-base sm:text-lg"
                >
                  {index < currentIndex ? <FaArrowLeft /> : <FaArrowRight />}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
