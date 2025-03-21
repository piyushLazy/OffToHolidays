'use client';
import React, { useState, useMemo } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Navbar from '@/components/navbar/Navbar';
import FooterLayout from '@/components/footer/FooterLayout';
import TestimonialBg from '@/app/testimonials/assets/tesimonial-bg.png';
import { reviews } from './data';
import {  FaSearch } from 'react-icons/fa';
import Image from "next/image"
import StarRatings from 'react-star-ratings';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface FilterSectionProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedDestination: string;
  setSelectedDestination: React.Dispatch<React.SetStateAction<string>>;
  selectedRating: number;
  setSelectedRating: React.Dispatch<React.SetStateAction<number>>;
  destinations: string[];
  starRatings: number[];
  handleResetFilters: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ search, setSearch, selectedDestination, setSelectedDestination, selectedRating, setSelectedRating, destinations, starRatings, handleResetFilters }) => (
  <div className="w-full max-sm:w-full md:w-1/4 p-4 rounded-lg shadow-md bg-white">
    <div className="flex justify-between items-center">
      <h5 className="font-semibold text-md">Filter</h5>
      <button onClick={handleResetFilters} className="text-blue-500 text-sm">Reset all</button>
    </div>
    <div className="mt-6">
      <p className="font-sans text-xl mb-2">Destination</p>
      <div className="relative mb-3">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 pl-9 border rounded-lg focus:outline-none"
        />
      </div>
      {destinations.map((destination) => (
        <label key={destination} className="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            checked={selectedDestination === destination}
            onChange={(e) => setSelectedDestination(e.target.checked ? destination : 'All')}
            className="accent-blue-500"
          />
          <span>{destination}</span>
        </label>
      ))}
    </div>
    <div className="mt-6">
      <p className="font-sans text-xl mb-2">Star Rating</p>
      <div className="relative">
        <select
          className="w-full p-2 border rounded-lg appearance-none focus:outline-none"
          value={selectedRating}
          onChange={(e) => setSelectedRating(Number(e.target.value))}
        >
          <option value="">Choose</option>
          <option value="All">All</option>
          {starRatings.map((rating) => (
            <option key={rating} value={rating}>{rating} Star</option>
          ))}
        </select>
        <IoIosArrowDown className="absolute top-3 right-3 text-gray-500" />
      </div>
    </div>
  </div>
);

interface Review {
  name: string;
  location: string;
  rating: number;
  review: string;
  support: number;
  hotels: number;
  drivers: number;
  experience: number;
}

const TestimonialCard: React.FC<{ review: Review }> = ({ review }) => (

          <div  className="p-4  rounded-xl shadow-md bg-white mb-4">
            <div className="flex items-center gap-4">
              <div className=" rounded-full bg-gray-300 flex items-center justify-center">
                 <Image height={100} width={100} alt='image ' className=' w-16 h-16 rounded-full object-fill' src='https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
               
              </div>
              <div>
                <p className="text-md font-sans text-gray-700">Visited {review.location}</p>
                <h4 className="text-md font-serif">{review.name}</h4>
                <p className='pl-2 font-sans'>{`Ratings ${review.rating}/5`}</p>

                {/* <StarRatings 
rating={review.rating}
starRatedColor="#000000"
numberOfStars={5}
starDimension="15px"
starSpacing="2px"
/> */}
              </div>
            </div>
            <p className="mt-4 font-serif text-lg">{` << ${review.review}`}</p>

            <div className="mt-6 text-md text-gray-800 flex flex-wrap gap-8 pl-2">
              <span>Support - ★ {review.support}/5</span>
              <span>Hotels - ★ {review.hotels}/5</span>
              <span>Drivers - ★ {review.drivers}/5</span>
              <span>Overall Experience - ★ {review.experience}/5</span>
            </div>
          </div>
      
);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-center items-center gap-4 mt-6">
    <button
      className={`p-2 rounded-full ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-100'}`}
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      <FaArrowLeft className="w-6 h-6" />
    </button>
    <span className="text-gray-700">
      {currentPage} / {totalPages}
    </span>
    <button
      className={`p-2 rounded-full ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-100'}`}
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      <FaArrowRight className="w-6 h-6" />
    </button>
  </div>
);

const Page = () => {
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [selectedRating, setSelectedRating] = useState(0);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  const starRatings = [1, 2, 3, 4, 5];
  const destinations = ['All', ...new Set(reviews.map((r) => r.location))];

  const filteredReviews = useMemo(() => reviews.filter((review) =>
    (selectedDestination === 'All' || review.location === selectedDestination) &&
    (selectedRating === 0 || review.rating === selectedRating) &&
    (search === '' || review.name.toLowerCase().includes(search.toLowerCase()) || review.review.toLowerCase().includes(search.toLowerCase()))
  ), [selectedDestination, selectedRating, search]);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const displayedReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedDestination('All');
    setSelectedRating(0);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10 text-gray-300">
        <Navbar />
      </div>
      <div 
        className="relative w-full h-[200px] max-sm:h-[150px] md:h-[250px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${TestimonialBg.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='h-full w-full flex items-end p-4 max-sm:p-2 md:pl-16 justify-start'>
          <h4 className="relative font-serif text-white text-2xl max-sm:text-xl md:text-4xl z-20">
            What Our Travelers Say
          </h4>
        </div>
      </div>
      <nav className="text-gray-600 text-md mb-4 mx-4 max-sm:mx-2 md:ml-18 md:mt-6">
        <span>Home</span> &gt; <span className="text-blue-500">Testimonials</span>
      </nav>
      <div className="p-4 mx-4 max-sm:mx-2 md:mx-14 md:m-4 flex flex-col max-sm:flex-col md:flex-row gap-6">
        <FilterSection
          search={search}
          setSearch={setSearch}
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          destinations={destinations}
          starRatings={starRatings}
          handleResetFilters={handleResetFilters}
        />
        <div className="w-full max-sm:w-full md:w-4/5 space-y-6">
          <div className="p-4 max-sm:p-2 md:p-6 bg-blue-50 rounded-lg justify-between shadow-md flex flex-col max-sm:flex-col md:flex-row md:gap-44">
            <div className="md:w-1/2">
              <h5 className="text-xl font-sans mb-2">Overall Rating</h5>
              <div className="flex items-center gap-2 mt-4">
                <StarRatings
                  rating={5}
                  starRatedColor="#000000"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                <span className="text-gray-700 font-serif pl-3">5/5 Based on 500+ Reviews</span>
              </div>
              <p className="text-gray-900 text-md leading-relaxed font-sans pt-4 max-sm:pt-2 md:pt-9">
                Real Stories. Real Journeys. Discover why Lazy Yatra is the go-to choice for travelers worldwide.
              </p>
            </div>
            <div className="md:w-1/2">
              <h5 className="text-xl font-sans mb-2">Rating Breakdown</h5>
              <div className="space-y-2 text-black mt-4">
                {[
                  { label: 'Support', rating: 5 },
                  { label: 'Hotels', rating: 5 },
                  { label: 'Drivers', rating: 5 },
                  { label: 'Overall Experience', rating: 5 },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-md">{item.label}</span>
                    <div className="flex items-center gap-1">
                      <StarRatings
                        rating={item.rating}
                        starRatedColor="#000000"
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="2px"
                      />
                    </div>
                    <span className="text-md font-medium">{item.rating}/5</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
    <div>
            {filteredReviews.length > 0 ? (
              displayedReviews.map((review, index) => (
                <TestimonialCard key={index} review={review} />
              ))
            ) : (
              <p className="text-center text-gray-500">No reviews match the selected filters.</p>
            )}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <div className="mt-12">
        <FooterLayout />
      </div>
    </>
  );
};

export default Page;