import React from 'react';
import './PackageDetails.css';  // Importing the CSS file

const PackageDetails = ({ title, duration, onDownload }) => {
  
  // Fallback values if props are not provided
  const displayTitle = title || 'Not Available';
  const displayDuration = duration || 'Not Available';
  
  return (
    <div className="packageDetailsContainer">
      <div className="textContainer">
        <h2 className="title">{displayTitle}</h2>
        <span className="duration">{`${displayDuration+1} Day/${displayDuration} Nights`}</span>
      </div>
      <button onClick={onDownload} className="downloadButton">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z5M4BHhIZI-ZK8iu/download.png"
          alt="Download"
          className="downloadIcon"
        />
      </button>
    </div>
  );
};

PackageDetails.defaultProps = {
  title: 'Not Available',
  duration: 'Not Available',
  onDownload: () => {},
};

export default PackageDetails;
