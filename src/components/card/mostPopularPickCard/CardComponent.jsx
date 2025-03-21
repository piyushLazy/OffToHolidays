import React from "react";
import PropTypes from "prop-types";
import Image from "next/image"; // ✅ Next.js Image optimization
import "./CardComponent.css";
import  picksimage from '../../data/image/image3.avif'
import downimg from  '../../assets/down-15.png';
const CardComponent = ({
  image = picksimage  ,
  title = "Kashmir – Paradise on Earth",
  description = "Houseboat stay on Dal Lake, Gulmarg skiing, Mughal Gardens, and Shikara ride.",
  price = "₹1,199 per person",
  duration = "3",
  badge = "Most Popular",
  onView = () => {},
  onBook = () => {},
}) => {
  return (
    <div className="card">
      {/* ✅ Use Next.js Image Component */}
      <div className="card-image">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className="card-badges">
          <div className="badge-popular">{badge}</div>
          <div className="badge-duration">{duration} Nights</div>
        </div>
      </div>

      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">
            {title.length > 25 ? `${title.substring(0, 20)}...` : title}
          </h3>
          <p className="card-description">
            {description.length >= 60 ? `${description.substring(0, 50)}...` : description}
          </p>
          <p className="card-price">{price}</p>
        </div>

        <div className="card-actions">
          <button className="btn-book" onClick={onBook}>
            Book Now
          </button>
          <button className="btn-view" onClick={onView}>
            View{" "}
            <Image
              src={ downimg}
              alt="view more"
              width={20}
              height={20}
            />
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
