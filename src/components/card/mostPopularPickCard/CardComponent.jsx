import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import picksimage from "../../data/image/image3.avif";
import downimg from "../../assets/down-15.png";

const CardComponent = ({
  image = picksimage,
  title = "Kashmir – Paradise on Earth",
  description = "Houseboat stay on Dal Lake, Gulmarg skiing, Mughal Gardens, and Shikara ride.",
  price = "₹1,199 per person",
  duration = "3",
  badge = "Most Popular",
  onView = () => {},
  onBook = () => {},
}) => {
  return (
    <div className="w-[300px] h-[420px]  flex flex-col bg-white rounded-xl overflow-hidden shadow-md">
      {/* Card Image */}
      <div className="relative w-full h-[180px]">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        {/* Badges */}
        <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
          <div className="bg-white px-2 py-1 rounded-md text-sm font-semibold text-gray-900">
            {badge}
          </div>
          <div className="bg-blue-200 bg-opacity-40 px-2 py-1 rounded-md text-xs font-semibold text-blue-900">
            {duration} Nights
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-sm font-semibold text-gray-900 mt-2">{price}</p>

        {/* Card Actions */}
        <div className="flex justify-between items-center gap-3 mt-auto">
          <button
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full  font-bold text-sm  transition-colors"
            onClick={onBook}
          >
            Book Now
          </button>
          <button
            className="flex items-center gap-1 text-blue-500 font-bold text-sm hover:text-blue-600 transition-colors"
            onClick={onView}
          >
            View{" "}
            <Image src={downimg} alt="view more" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  duration: PropTypes.string,
  badge: PropTypes.string,
  onView: PropTypes.func,
  onBook: PropTypes.func,
};

export default CardComponent;
