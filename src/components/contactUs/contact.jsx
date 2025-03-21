"use client"; // Required for Framer Motion in Next.js App Router
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import first from "@/components/contactUs/assets/contactUs1.png";
import second from "@/components/contactUs/assets/contactUs2.png";
import third from "@/components/contactUs/assets/contactUs3.png";
import fourth from "@/components/contactUs/assets/contactUs4.png";

const images = [first, second, third, fourth]; // Image array

const ContactUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:max-w-6xl mx-4 sm:mx-8 max-sm:mx-6 md:mx-36 md:my-10">
      {/* Breadcrumb */}
      <div className="text-md text-gray-500 mb-4">
        Home &gt; <span className="text-blue-500">Contact Us</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 rounded-2xl shadow-lg">
        {/* Contact Form */}
        <div className="p-2 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mt-4">Hey! We would love to hear from you.</h3>
          <p className="text-gray-600 text-lg mt-4">
            Drop us a message below, and we&apos;ll get back to you soon!
          </p>

          <div className="space-y-4 mt-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Message Box */}
            <textarea
              rows="4"
              placeholder="Type your destination or query here"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>

            {/* Send Button */}
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              Send
            </button>
          </div>
        </div>

        {/* Image Section with Smooth Update */}
        <div className="relative w-full h-64 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
          <motion.div
            key={currentImage} // Only the image updates
            initial={{ opacity: 0, y: -20 }} // Start slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in & slide down
            exit={{ opacity: 0, y: 20 }} // Fade out while sliding down
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Rotating Contact Image"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;