// "use client";

// import React from "react";
// import Image from "next/image";
// import "./ImageGallery.css";

// const ImageGallery = ({ images }) => {
//   if (!images || images.length === 0) {
//     return <p>No images to display</p>;
//   }

//   return (
//     <div className="hotel-gallery-container">
//       <div className="hotel-gallery-grid">
//         {/* First Large Image (Left) */}
//         <div className="hotel-gallery-left">
//           {images[0] && (
//             <div className="hotel-gallery-item large">
//               <Image
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 width={500}
//                 height={500}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           )}
//         </div>

//         {/* Middle Images */}
//         <div className="hotel-gallery-middle">
//           {images.slice(1, 3).map((image) => (
//             <div key={image.id} className="hotel-gallery-item small">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={250}
//                 height={250}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Next Middle Images */}
//         <div className="hotel-gallery-middle">
//           {images.slice(3, 5).map((image) => (
//             <div key={image.id} className="hotel-gallery-item small">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={250}
//                 height={250}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Last Large Image (Right) */}
//         <div className="hotel-gallery-right">
//           {images[5] && (
//             <div className="hotel-gallery-item large">
//               <Image
//                 src={images[5].src}
//                 alt={images[5].alt}
//                 width={500}
//                 height={500}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

//=============================================
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageGallery = ({ images }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom state for single image
  const [sliderZoomLevel, setSliderZoomLevel] = useState(1); // Zoom state for slider images

  // Debugging: Log when slider opens/closes
  useEffect(() => {
    console.log("Slider Open:", isSliderOpen);
  }, [isSliderOpen]);

  // Hide navbar and disable body scroll when modal or slider is open
  useEffect(() => {
    if (isSliderOpen || selectedImage) {
      document.body.style.overflow = "hidden";
     
    } else {
      document.body.style.overflow = "auto";
   
    }
  }, [isSliderOpen, selectedImage]);

  if (!images || images.length === 0) {
    return <p className="text-gray-500">No images to display</p>;
  }

  const openSlider = () => {
    console.log("View Gallery Button Clicked"); // Debugging
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    console.log("Slider Closed"); // Debugging
    setIsSliderOpen(false);
  };

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  // Toggle zoom on double-click (for single image modal)
  const handleDoubleClick = () => {
    setZoomLevel((prev) => (prev === 1 ? 2 : 1)); // Toggle between 1x and 2x
  };

  // Toggle zoom on double-click (for slider images)
  const handleSliderDoubleClick = () => {
    setSliderZoomLevel((prev) => (prev === 1 ? 2 : 1)); // Toggle between 1x and 2x
  };

  return (
    <div className="gallery-container">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* First large image (left) */}
        <div className="col-span-1">
          {images[0] && (
            <div
              className="relative w-full h-64 cursor-pointer"
              onClick={() => openImage(images[0])}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Middle images */}
        <div className="col-span-1 space-y-4">
          {images.slice(1, 3).map((image) => (
            <div
              key={image.id}
              className="relative w-full h-32 cursor-pointer"
              onClick={() => openImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Next set of middle images */}
        <div className="col-span-1 space-y-4">
          {images.slice(3, 5).map((image) => (
            <div
              key={image.id}
              className="relative w-full h-32 cursor-pointer"
              onClick={() => openImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Last large image (right) */}
        <div className="col-span-1">
          {images[5] && (
            <div
              className="relative w-full h-64 cursor-pointer"
              onClick={() => openImage(images[5])}
            >
              <Image
                src={images[5].src}
                alt={images[5].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* View Gallery Button */}
      <button
        className="mt-4 px-4 py-2  text-blue-600 rounded-lg hover:text-blue-700 transition-colors"
        onClick={openSlider}
      >
        View Gallery
      </button>

      {/* Slider Modal */}
      {isSliderOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[2000]" // High z-index
          onClick={closeSlider} // Close slider on click outside
        >
          <div
            className=" p-6 rounded-lg w-11/12 max-w-6xl"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the slider from closing it
          >
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div
                    className="relative w-full h-[34rem] overflow-hidden"
                    onDoubleClick={handleSliderDoubleClick} // Double-click to zoom
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      style={{
                        transform: `scale(${sliderZoomLevel})`,
                        transformOrigin: "top left",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Single Image Modal with Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]" // High z-index
          onClick={closeImage} // Close modal on click outside the image
        >
          <div
            className="relative w-11/12 max-w-6xl"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the image from closing the modal
          >
            {/* Image with Zoom */}
            <div
              className="relative w-full h-[34rem] overflow-auto"
              onDoubleClick={handleDoubleClick} // Double-click to zoom
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover rounded-lg"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top left" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;