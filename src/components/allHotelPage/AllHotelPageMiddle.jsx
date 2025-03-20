import React, { useState, useEffect } from "react";
import HotelCard from "@/components/allHotelPage/HotelCard";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import api from "../data/APIHeader/ApiHeader";
import dynamic from "next/dynamic";

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

  // Fetch filtered hotels
  useEffect(() => {
    const fetchFilteredHotels = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();

        // Add filters to query
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
        const response = await fetch(url, { method: "GET"
          ,  headers: {
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

    // Debounce API calls
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(fetchFilteredHotels, 1000);
    setDebounceTimer(timer);

    return () => clearTimeout(timer);
  }, [hotelName, state, city, priceRange, rating, typeOfStay]);

  return (
    <div className="flex justify-around mx-16 gap-4 p-4">
      {/* Filters Section */}
      <div className="bg-white p-6 rounded-lg mt-12 shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Hotel Name Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              placeholder="Min price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              placeholder="Max price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
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

        {/* Type of Stay Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type of Stay</label>
          <select
            value={typeOfStay}
            onChange={(e) => setTypeOfStay(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select type</option>
            <option value="Luxury">Luxury</option>
            <option value="Budget">Budget</option>
            <option value="Boutique">Boutique</option>
          </select>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="flex-1">
        <p className="text-2xl font-bold mb-4">All Hotels</p>
        {loading ? (
          <div className="flex justify-center items-center">
            <Lottie animationData={LoadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
          </div>
        ) : hotels.length > 0 ? (
          hotels.map((hotel) => <HotelCard key={hotel.id} data={hotel} />)
        ) : (
          <p className="text-center text-gray-500">No hotels found.</p>
        )}
      </div>
    </div>
  );
}

export default AppHotelPageMiddle;




































// import React, { useState, useEffect } from 'react';
// import FilterComponent from '../packageFilterSlide/FilterComponent';
// import './AllPackagePage.css';
// import dynamic from "next/dynamic";
// import apiHeader from '../data/APIHeader/ApiHeader.js'; 
// import TravelPackageCard from '../card/detailAllPackagesCard/TravelPackageCard';
// import LoadingSpinner from '../loadingSpinner/LoadingSpinner'; 
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import LoadingAnimation from "../assets/LoadingAnimation.json";
// function AppPackagePageMiddle() {
//   // State to manage the filters
//   const [destination, setDestination] = useState([]);
//   const [duration, setDuration] = useState([1, 15]);
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [themes, setThemes] = useState([]);
//   const [season, setSeason] = useState([]);
//   const [accommodationType, setAccommodationType] = useState([]);
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(false); // State to track loading status

//   // Debounce timer
//   const [debounceTimer, setDebounceTimer] = useState(null);

//   // Function to handle filter reset
//   const handleReset = () => {
//     setDestination([]);
//     setDuration([1, 15]);
//     setPriceRange([0, 100000]);
//     setThemes([]);
//     setSeason([]);
//     setAccommodationType([]);
//   };

//   useEffect(() => {
//     const fetchFilteredData = async () => {
//       setLoading(true); // Set loading to true when fetching data
//       try {
//         // Prepare query parameters for the GET request manually
//         const queryParams = new URLSearchParams();

//         // Add the destination states as separate state key-value pairs
//         destination.forEach(state => {
//           queryParams.append('state', state);  // This creates state=Goa&state=Kerala&state=Rajasthan
//         });

//         // Add other filters as query parameters
//         queryParams.append('nights', duration[1]);
//         queryParams.append('min_price', priceRange[0]);
//         queryParams.append('max_price', priceRange[1]);
//         queryParams.append('tag', themes.join(','));
//         queryParams.append('budget', accommodationType.join(','));

//         // Construct the full URL
//         const url = `${apiHeader}/api/packages/filter/?${queryParams.toString()}`;

//         // Send the GET request with the query parameters
//         const response = await fetch(url, {
//           method: "GET", // Ensure the method is GET, no body is sent
//         });

//         const data = await response.json();
//         setPackages(data?.results?.results); // Update the state with the fetched data
//       } catch (error) {
//         console.error("Error fetching filtered data:", error);
//       } finally {
//         setLoading(false); // Set loading to false once the data is fetched
//       }
//     };

//     // Debounce the API call
//     if (debounceTimer) {
//       clearTimeout(debounceTimer); // Clear the previous timeout
//     }

//     const timer = setTimeout(() => {
//       fetchFilteredData(); // Fetch data after delay
//     }, 1000); // Adjust delay time as per your requirement (1 second here)
    
//     setDebounceTimer(timer); // Store the timeout ID

//     // Cleanup: Clear the timer when component unmounts or on dependencies change
//     return () => clearTimeout(timer);

//   }, [destination, duration, priceRange, themes, season, accommodationType]);

//   console.log(packages);  // Safe access with optional chaining

//   return (
//     <div className="allPackagesPageMiddle">
//       <div className="filter-container">
//         <FilterComponent
//           destination={destination}
//           setDestination={setDestination}
//           duration={duration}
//           setDuration={setDuration}
//           priceRange={priceRange}
//           setPriceRange={setPriceRange}
//           themes={themes}
//           setThemes={setThemes}
//           season={season}
//           setSeason={setSeason}
//           accommodationType={accommodationType}
//           setAccommodationType={setAccommodationType}
//           handleReset={handleReset} // Pass reset function
//         />
//       </div>

//       <div className="current-filter-values">
//         {/* Show loading spinner while fetching data */}
//         {loading ? (
//           <div className="loading-container">
//            <Lottie animationData={LoadingAnimation } loop={true} style={{ width: 200, height: 200 }} />
//           </div>
//         ) : (
//           packages.map((pkg) => (<TravelPackageCard key={pkg.id} data={pkg} />))
//         )}
//       </div>
//     </div>
//   );
// }

// export default AppPackagePageMiddle;
