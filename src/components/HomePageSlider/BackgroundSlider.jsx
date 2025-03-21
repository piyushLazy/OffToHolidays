



import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./BackgroundSlider.css";
import cloud from "./images/cloud.png"; // Import cloud image
import Head from "next/head";
import FilterComponent from "@/components/mainPageFilter";  
// Web Images
import imageW1 from "./images/Background Slider Web _ 1.png";
import imageW2 from "./images/Background Slider Web _ 2.png";
import imageW3 from "./images/Background Slider Web _ 3.png";
import imageW4 from "./images/Background Slider Web _ 4.png";

// Mobile Images
import imageM1 from "./images/Background Slider- Mobile _ 1.png";
import imageM2 from "./images/Background Slider- Mobile _ 2.png";
import imageM3 from "./images/Background Slider- Mobile _ 3.png";
import imageM4 from "./images/Background Slider- Mobile _ 4.png";

const BackgroundSlider = ({ interval = 5000, transition = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Detect viewport size and update images accordingly
  useEffect(() => {
    const updateImages = () => {
      setImages(window.innerWidth <= 768 ? [imageM1, imageM2, imageM3, imageM4] : [imageW1, imageW2, imageW3, imageW4]);
    };

    updateImages(); // Initial check
    window.addEventListener("resize", updateImages); // Listen to window resize

    return () => window.removeEventListener("resize", updateImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="background-slider">

      <title>My Awesome Page</title>
      <meta name="description" content="A beautiful background slider with smooth transitions" />
     
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
          <Image src={image} alt={`Slide ${index + 1}`} fill priority className="slide-image" />
        </div>
      ))}
  <FilterComponent/>
      <div className="overlay">
        <div className="cloud-overlay">
          <Image src={cloud} alt="Cloud" className="cloud-1" priority />
          <Image src={cloud} alt="Cloud" className="cloud-2" priority />
        </div>
        <div className="cloud-overlaybelow"></div>
      </div>
    </div>
  );
};

export default BackgroundSlider;

