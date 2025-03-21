"use client";

import React, { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";
import { PiCityBold } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";


const FilterComponent = () => {
  const [activeTab, setActiveTab] = useState("Packages");
  const [destination, setDestination] = useState("");
  const [nights, setNights] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
 const router  =  useRouter()
 
  const submenuItems = {
    mid: [
      { id: "all-packages", label: "All Packages", hasSubmenu: false },
      {
        id: "international-packages",
        label: "International Packages",
        hasSubmenu: true,
        subItems: ["Bali", "Singapore", "Dubai", "Vietnam", "Thailand"],
      },
      {
        id: "domestic-packages",
        label: "Domestic Packages",
        hasSubmenu: true,
        subItems: [
          "Andaman",
          "Himachal",
          "Rajasthan",
          "Gujarat",
          "Goa",
          "Assam",
          "Himachal Pradesh",
          "Tamil Nadu",
        ],
      },
    ],
  };


  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      destination,
      ...(activeTab === "Packages"
        ? { nights }
        : { checkIn: checkInDate?.toISOString().split("T")[0] || "", checkOut: checkOutDate?.toISOString().split("T")[0] || "" }),
    }).toString();
  
    const route = activeTab === "Packages" ? "/packages" : "/hotels";
    router.push(`${route}?${queryParams}`);
  };
  
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center z-50 px-4">
      <div className="relative text-center text-white mb-16 sm:mb-24">
        <p className="text-4xl sm:text-6xl font-bold font-serif">Rejuvenation & Peace</p>
        <p className="text-md sm:text-lg mt-4 font-serif">Find Peace, Adventure, and Everything in Between.</p>
      </div>

      <div className="relative bg-gray-100 shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center w-full max-w-5xl">
        <div className="absolute -top-10 max-sm:left-1/2 sm:left-1/2 md:left-[8.5rem] -translate-x-1/2 flex h-12 bg-gray-100 rounded-t-xl overflow-hidden shadow-md">
          <button
            className={`flex items-center gap-2 px-6 py-2 text-md font-serif transition-all duration-300 ${
              activeTab === "Packages" ? "bg-blue-500 text-white scale-105 shadow-md" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Packages")}
          >
            <FaUmbrellaBeach className="text-xl" /> Packages
          </button>

          <button
            className={`flex items-center gap-2 px-6 py-2 text-md font-serif transition-all duration-300 ${
              activeTab === "Hotels" ? "bg-blue-500 text-white scale-105 shadow-md" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Hotels")}
          >
            <FaHotel className="text-xl" /> Hotels
          </button>
        </div>

        <div className="flex-1 border-b md:border-r md:border-b-0 border-gray-400 px-4 py-3 w-full relative">
          <label className="flex items-center gap-2 text-gray-600 font-lg">
            {activeTab === "Packages" ? <FaMapLocationDot className="text-lg" /> : <PiCityBold className="text-lg" />}
            {activeTab === "Packages" ? `Destination` : `City`}
          </label>
          <div className="relative">
            <select
              className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans appearance-none bg-white border border-gray-300 shadow-sm hover:border-blue-400 focus:ring-blue-400"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="" disabled hidden>
                Where do you want to go?
              </option>
              {submenuItems.mid.map((item) =>
                item.hasSubmenu ? (
                  <optgroup key={item.id} label={item.label}>
                    {item.subItems.map((subItem) => (
                      <option key={subItem} value={subItem}>
                        {subItem}
                      </option>
                    ))}
                  </optgroup>
                ) : (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                )
              )}
            </select>
            <span className="absolute right-4 top-4 text-gray-600 pointer-events-none">▼</span>
          </div>
        </div>

        <div className="flex-1 px-4 py-3 w-full">
          <label className="flex items-center text-gray-600 font-lg gap-2">
            <HiCalendarDateRange className="text-lg" />
            {activeTab === "Packages" ? `Number of Nights` : `Check-in / Check-out Dates`}
          </label>
          <div className="relative">
            {activeTab === "Packages" ? (
              <select
                className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans appearance-none bg-white border border-gray-300 shadow-sm hover:border-blue-400 focus:ring-blue-400"
                value={nights}
                onChange={(e) => setNights(e.target.value)}
              >
                <option value="" disabled hidden>
                  Choose the trip duration
                </option>
                {[...Array(7)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} Night{index > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex gap-4">
                <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} selectsStart startDate={checkInDate} endDate={checkOutDate} placeholderText="Check-in Date" className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans" />
                <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} selectsEnd startDate={checkInDate} endDate={checkOutDate} minDate={checkInDate} placeholderText="Check-out Date" className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans" />
              </div>
            )}
            <span className="absolute right-4 top-4 text-gray-600 pointer-events-none">▼</span>
          </div>
        </div>
        <button onClick={handleSearch} className="mt-5 md:hidden w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold">
          { activeTab ===  "Packages" ? `Search Packages` : `Search Hotels`}     
        </button>
      </div>

      {/* Desktop Search Button */}
      <button onClick={handleSearch} className="absolute max-sm:hidden sm:hidden md:block -mb-[22.2rem] left-1/2 -translate-x-1/2 px-16 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-serif rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500">
      { activeTab ===  "Packages" ? `Search Packages` : `Search Hotels`}     
      </button>
    </div>
  );
};

export default FilterComponent;
