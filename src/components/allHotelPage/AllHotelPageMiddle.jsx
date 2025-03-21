import React, { useState, useEffect } from "react";
import HotelCard from "@/components/allHotelPage/HotelCard";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import api from "../data/APIHeader/ApiHeader";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function AppHotelPageMiddle() {
  const [hotelName, setHotelName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [rating, setRating] = useState("");
  const [typeOfStay, setTypeOfStay] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [showFilters, setShowFilters] = useState(false); // Toggle filters visibility



  // Fetch filtered hotels
  useEffect(() => {
    const fetchFilteredHotels = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (hotelName) queryParams.append("name", hotelName);
        if (state) queryParams.append("state_name", state);
        if (city) queryParams.append("city_name", city);
        if (priceRange[0] !== 0 || priceRange[1] !== 10000) {
          queryParams.append("min_price", priceRange[0]);
          queryParams.append("max_price", priceRange[1]);
        }
        if (rating) queryParams.append("rating", rating);
        if (typeOfStay) queryParams.append("type", typeOfStay);

        const url = `${api}/api/hotels/filter/?${queryParams.toString()}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-Browser-Warning": "true",
          },
        });
        const data = await response.json();
        setHotels(data.results);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(fetchFilteredHotels, 1000);
    setDebounceTimer(timer);

    return () => clearTimeout(timer);
  }, [hotelName, state, city, priceRange, rating, typeOfStay]);

  return (
    <div className="flex flex-col mt-12 md:flex-row md:mx-16 gap-4 p-4">
       <div className="sm:hidden flex justify-start p-1">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
         
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {/* Filters Section (Visible based on state) */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } md:block bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-80 transition-all duration-300`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Filters</h2>
          {/* Hide Button (Only for small screens) */}
    
        </div>

        {/* Hotel Name Filter */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hotel Name
          </label>
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            placeholder="Enter hotel name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* State Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter state"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              placeholder="Min price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              placeholder="Max price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="flex-1 mt-12">
        <p className="text-2xl font-bold mb-4">All Hotels</p>
        {loading ? (
          <div className="flex justify-center items-center">
            <Lottie
              animationData={LoadingAnimation}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        ) : hotels?.length > 0 ? (
          hotels?.map((hotel) => <HotelCard key={hotel?.id} data={hotel} />)
        ) : (
          <p className="text-center text-gray-500">No hotels found.</p>
        )}
      </div>
    </div>
  );
}

export default AppHotelPageMiddle;
