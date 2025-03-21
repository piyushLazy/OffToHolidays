import React from 'react';
import './HighlightsSection.css'; // Import global CSS file (not a module)

const HighlightsSection = ({ all_locations }) => {
  // Ensure all_locations is an array (default to empty array if undefined or null)
  const safeLocations = Array.isArray(all_locations) ? all_locations : [];

  // Map through the locations to create highlights
  const highlights = safeLocations.map(location => `${location[0]} in ${location[1]}`).join(', ');

  return (
    <div className="highlightsContainer">
      <div className="highlightsTitle">Highlights:</div>
      <p className="highlightsText">
        {highlights.length > 0 ? highlights : 'No highlights available'}
      </p>
    </div>
  );
};

export default HighlightsSection;
