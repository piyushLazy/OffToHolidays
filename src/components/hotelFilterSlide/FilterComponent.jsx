
"use client";

import {  useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Calendar } from "lucide-react";

const HotelFilter = ({
  hotels,
  setFilteredHotels ,
  destination,
  setDestination,
  hotelName,
  setHotelName,
  rating,
  setRating,
  priceRange,
  setPriceRange,
  typeOfStay,
  setTypeOfStay,
  locatedIn,
  setLocatedIn,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  handleReset,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (destination) params.set("destination", destination);
    else params.delete("destination");

    if (checkIn instanceof Date && !isNaN(checkIn)) {
      params.set("checkIn", checkIn.toISOString().split("T")[0]);
    } else {
      params.delete("checkIn");
    }
    if (checkOut instanceof Date && !isNaN(checkOut)) {
      params.set("checkOut", checkOut.toISOString().split("T")[0]);
    } else {
      params.delete("checkOut");
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  }, [
    destination,
    hotelName,
    rating,
    locatedIn,
    typeOfStay,
    priceRange,
    checkIn,
    checkOut,
  ]);

  // Filtering Logic
  useEffect(() => {
   let filtered = hotels || []; // Ensure it's an array



    if (destination) {
      filtered = filtered.filter((hotel) => hotel.location.includes(destination));
    }

    if (hotelName) {
      filtered = filtered.filter((hotel) => hotel.name.toLowerCase().includes(hotelName.toLowerCase()));
    }

    if (rating) {
      filtered = filtered.filter((hotel) => hotel.rating === Number(rating));
    }

    if (locatedIn) {
      filtered = filtered.filter((hotel) => hotel.area.includes(locatedIn));
    }

    if (typeOfStay.length) {
      filtered = filtered.filter((hotel) => typeOfStay.includes(hotel.type));
    }



if (priceRange[0] !== undefined && priceRange[1] !== undefined) {
  filtered = filtered.filter(
    (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
  );
}

setFilteredHotels(filtered);


  }, [destination, hotelName, rating, locatedIn, typeOfStay, priceRange, checkIn, checkOut]);

  return (
    <div className="max-w-[19rem] p-4 bg-gray-100 shadow-lg rounded-lg space-y-4 sm:block">
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-bold">Filter</p>
        <button onClick={handleReset} className="text-blue-500 text-sm">
          Reset all
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Check-in</label>
        <div className="relative mt-1">
          <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} className="w-full border rounded-3xl p-2 px-4 bg-white" placeholderText="Select check-in date" dateFormat="yyyy-MM-dd" />
          <Calendar className="absolute top-3 right-3 h-4 w-4 text-gray-500" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Destination</label>
        <input type="text" className="w-full border rounded-3xl p-2 px-4 bg-white" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Hotel Name</label>
        <input type="text" className="w-full border rounded-3xl p-2 px-4 bg-white" placeholder="Enter hotel name" value={hotelName} onChange={(e) => setHotelName(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Star Rating</label>
        <select className="w-full border rounded-3xl p-2 px-4 bg-white appearance-none pr-8" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>{star} Stars</option>
          ))}
        </select>
        <ChevronDown className="absolute top-3 right-3 h-4 w-4 text-gray-500" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Price Range</label>
        <div className="flex gap-2 mt-2">
          <input type="number" className="w-1/2 p-2 border rounded-lg" placeholder="Min" value={priceRange?.[0] || 0} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
          <input type="number" className="w-1/2 p-2 border rounded-lg" placeholder="Max" value={priceRange?.[1] || 10000} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
        </div>
        <Slider min={0} max={10000} value={priceRange} onValueChange={(value) => setPriceRange(value)} />
      </div>
    </div>
  );
};

export default HotelFilter;
