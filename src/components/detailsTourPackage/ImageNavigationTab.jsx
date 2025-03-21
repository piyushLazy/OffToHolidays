
// import React, { useState } from 'react';
// import './ImageNavigationTab.css';
// import ImageGallery from './ImageGallery';

// const ImageNavigationTab = ({images}) => {
//   const [activeTab, setActiveTab] = useState('All Images');

//   const tabs = [
//     'All Images',
//     'Traveler Capture'
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'All Images':
//         return (
//           <div>
//            <ImageGallery images={images}/>
//           </div>
//         );
//       case 'Traveler Capture':
//         return (
//           <div>
//             <h1> Coming Soon</h1>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="imgnavigation-tabs">
//         {tabs.map((tab) => (
//           <div
//             key={tab}
//             className={`imgtab ${activeTab === tab ? 'active' : ''}`}
//             onClick={() => setActiveTab(tab)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter' || e.key === ' ') {
//                 setActiveTab(tab);
//               }
//             }}
//             role="button"
//             tabIndex={0}
//           >
//             {tab}
//           </div>
//         ))}
//       </div>

//       <div className="imgtab-content">
//       {renderTabContent()}</div>
//     </div>
//   );
// };

// export default ImageNavigationTab;


import React, { useState } from "react";
import ImageGallery from "./ImageGallery";

const ImageNavigationTab = ({ images }) => {
  const [activeTab, setActiveTab] = useState("All Images");

  const tabs = ["All Images", "Traveler Capture"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "All Images":
        return <ImageGallery images={images} />;
      case "Traveler Capture":
        return <h1 className="text-gray-500">Coming Soon</h1>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveTab(tab);
              }
            }}
            role="button"
            tabIndex={0}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default ImageNavigationTab;