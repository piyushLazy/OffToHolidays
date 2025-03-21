"use client";
import Image from "next/image";
import "./CustomizeTripBanner.css";
import bannerImg from '../data/image/bannerImage.png';

const CustomizeTripBanner = ({
  title = "Want to Customize Your Dream Trip?",
  subtitle = "We're here to make it perfect just for you!",
  email = "team@lazyatra.com",
  phone = "+91-1234567890",
  backgroundImage = bannerImg,
}) => {
  return (
    <div className="banner-container">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Customize Your Trip"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="banner-background"
      />

      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Text Content */}
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
        <p className="banner-contact">
          Leave a mail at{" "}
          <a href={`mailto:${email}`} className="banner-link">
            {email}
          </a>{" "}
          or call us at{" "}
          <a href={`tel:${phone}`} className="banner-link">
            {phone}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CustomizeTripBanner;
