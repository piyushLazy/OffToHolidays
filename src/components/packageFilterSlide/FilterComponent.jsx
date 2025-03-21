"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";

const FilterComponent = ({
  destination,
  setDestination,
  duration,
  setDuration,
  priceRange,
  setPriceRange,
  themes,
  setThemes,
  season,
  setSeason,
  accommodationType,
  setAccommodationType,
  handleReset,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (destination) params.set("destination", destination);
    else params.delete("destination");

    if (season) params.set("season", season);
    else params.delete("season");

    router.push(`?${params.toString()}`, { scroll: false });
  }, [destination, season, themes, accommodationType, duration, priceRange]);

  const handleCheckboxChange = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const destinationsList = ["All", "Rajasthan", "Kerala", "Goa", "Kashmir", "Ladakh", "Andaman"];
  const themesList = ["Adventure", "Beach", "Cultural", "Desert Safari", "Eco-friendly", "Family", "Food & Culinary", "Honeymoon", "Luxury", "Mountains", "Relaxation", "Road Trip", "Shopping"];
  const seasonsList = ["Summer", "Winter", "Monsoon"];
  const accommodationList = ["Deluxe", "Luxury", "Camping"];

  return (
    <div>
      {/* Mobile Filter Toggle Button */}
      <div className="sm:hidden flex justify-start p-1">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-4 h-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <AnimatePresence>
        {(showFilters || typeof window !== "undefined" && window.innerWidth > 640) && (
          <motion.div
            key="filter-section"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-[19rem] p-4 bg-gray-100 shadow-lg rounded-lg space-y-4 sm:block"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Filter</p>
              <Button variant="outline" size="sm" onClick={handleReset}>
                Reset all
              </Button>
            </div>

            {/* Destination Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Destination</label>
              <Input
                type="text"
                placeholder="Search destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {destinationsList.map((place) => (
                  <Button
                    key={place}
                    variant={destination === place ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDestination(place)}
                  >
                    {place}
                  </Button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Duration (in nights)</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  className="w-1/2"
                  value={duration[0]}
                  onChange={(e) => setDuration([Math.max(1, Math.min(15, Number(e.target.value))), duration[1]])}
                />
                <Input
                  type="number"
                  className="w-1/2"
                  value={duration[1]}
                  onChange={(e) => setDuration([duration[0], Math.max(1, Math.min(15, Number(e.target.value)))])}
                />
              </div>
              <Slider min={1} max={15} value={duration} onValueChange={(value) => setDuration(value)} />
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Price Range</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  className="w-1/2"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <Input
                  type="number"
                  className="w-1/2"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
              </div>
              <Slider min={0} max={10000} value={priceRange} onValueChange={(value) => setPriceRange(value)} />
            </div>

            {/* Themes Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Themes</label>
              <div className="flex flex-wrap gap-2">
                {themesList.map((theme) => (
                  <Button
                    key={theme}
                    variant={themes?.includes(theme) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCheckboxChange(theme, setThemes)}
                  >
                    {theme}
                  </Button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Season</label>
              <div className="flex flex-wrap gap-2">
                {seasonsList.map((s) => (
                  <Button
                    key={s}
                    variant={season === s ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSeason(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>

            {/* Accommodation Type Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Accommodation Type</label>
              <div className="flex flex-wrap gap-2">
                {accommodationList.map((type) => (
                  <Button
                    key={type}
                    variant={accommodationType?.includes(type) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCheckboxChange(type, setAccommodationType)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterComponent;
