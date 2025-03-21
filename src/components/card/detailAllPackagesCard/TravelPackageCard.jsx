import React from 'react';
import './TravelPackageCard.css';  // Import the CSS file for the card
import ImageSection from './ImageSection';
import PackageDetails from './PackageDetails';
import HighlightsSection from './HighlightsSection';
import InclusionsSection from './InclusionsSection';
import PriceAndButtonSection from './PriceAndButtonSection';

const TravelPackageCard = ({ data }) => {
  console.log(data?.all_locations); // Add safe logging

  // Safeguard the access to the properties, with fallback values
  const title = data?.name || 'Not Available';
  const duration = data?.nights || 'Not Available';
  const locations = data?.all_locations || [];
  const price = data?.lp_cost || 'Not Available';

  return (
    <div className="cardContainer">
      <div className="imageSection">
        <ImageSection />
      </div>
      <div className="detailsSection">
        <PackageDetails title={title} duration={duration} />
        <HighlightsSection all_locations={locations} />
        <InclusionsSection />
        <PriceAndButtonSection price={price} />
      </div>
    </div>
  );
};

export default TravelPackageCard;
