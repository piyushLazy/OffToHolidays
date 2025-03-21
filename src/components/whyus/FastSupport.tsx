"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  {
    title: "Unexpected Delays, Unexpected Help!",
    content:
      "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
  },
  {
    title: "Smooth Sailing During a Strike!",
    content:
      "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
  },
  {
    title: "Help When It Mattered Most",
    content:
      "During our trip, my partner fell ill. Lazy Yatra arranged a doctor and extended our stay without any hassle. Their care and promptness were unmatched.",
  },
  {
    title: "Unexpected Delays, Unexpected Help!",
    content:
      "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
  },
  {
    title: "Smooth Sailing During a Strike!",
    content:
      "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
  },
];

const testimonials2 = [
    {
      title: "Unexpected Delays, Unexpected Help!",
      content:
        "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
    },
    {
      title: "Smooth Sailing During a Strike!",
      content:
        "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
    },
    {
      title: "Help When It Mattered Most",
      content:
        "During our trip, my partner fell ill. Lazy Yatra arranged a doctor and extended our stay without any hassle. Their care and promptness were unmatched.",
    },
    {
      title: "Unexpected Delays, Unexpected Help!",
      content:
        "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
    },
    {
      title: "Smooth Sailing During a Strike!",
      content:
        "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
    },
  ];
  

  const FastSupport = () => {
    return (
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <h5 className="text-xl font-bold sm:text-2xl">What Our Travelers Say</h5>
          <p className="text-gray-600 text-sm sm:text-base">
            Real stories from our happy customers.
          </p>
        </div>
  {/* Swiper - Left to Right */}
<Swiper
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  className="w-full"
  breakpoints={{
    320: { slidesPerView: 3, spaceBetween: 15 },
    480: { slidesPerView: 3, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index} className="p-2">
      <motion.div
        className="bg-white p-4 max-sm:p-8 sm:p-6 w-full rounded-xl shadow-lg text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <p className="text-md text-gray-900 font-bold mb-2">
          {testimonial.title}
        </p>
        <p className="text-gray-600 text-[13px] leading-tight">
          {testimonial.content}
        </p>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Swiper - Right to Left */}
<Swiper
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  className="w-full mt-4"
  dir="rtl" // ✅ This ensures the second Swiper moves in the opposite direction
  breakpoints={{
    320: { slidesPerView: 3, spaceBetween: 15 },
    480: { slidesPerView: 3, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
>
  {testimonials2.map((testimonial, index) => (
    <SwiperSlide key={index} className="p-2">
      <motion.div
        className="bg-white p-4 sm:p-6 max-sm:p-8 md:w-full  rounded-xl shadow-lg text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <p className="text-md text-gray-900 font-bold mb-2">
          {testimonial.title}
        </p>
        <p className="text-gray-600 text-[13px] leading-tight">
          {testimonial.content}
        </p>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    );
  };
  
  
  export default FastSupport;
  