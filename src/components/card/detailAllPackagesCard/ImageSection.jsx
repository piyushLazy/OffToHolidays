import React from 'react';
import './ImageSection.css'; // Import regular global CSS file
import Image from "next/image"; 
import image from  '../../data/image/Hotel.avif'

const ImageSection = ({ imageUrl, altText }) => {
  return (
    <div className="imageContainer">
      <Image 
        src={image} 
        alt={altText}
        className="image"
      />
    </div>
  );
};

ImageSection.defaultProps = {
  imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5M4BHhIZI-ZK8iu/rectangl.png',
  altText: 'Travel destination'
};

export default ImageSection;
