'use client';

import { useState } from 'react';
import Image from 'next/image';
import DropDown from '../buttons/dropDown/DropDown';
import localIcon from '../assets/local.svg';
import calendarIcon from '../assets/calendar.svg';
import beachUmbrellaIcon from '../assets/beach-umbrella.svg';
import hotelIcon from '../assets/hotel.svg';
import './PackageFilterBar.css'; // Global CSS

const PackageFilterBar = () => {
  const optionsForNoOfNight = [
    { value: "option 1", label: 1 },
    { value: "option 2", label: 2 },
    { value: "option 3", label: 3 },
  ];

  const optionsForDestinations = [
    { value: "option 1", label: 1 },
    { value: "option 2", label: 2 },
    { value: "option 3", label: 3 },
  ];

  const [isActive, setActiveTab] = useState(true);

  return (
    <div className="packagefilterbar-container">
      <div className="packagefilterbar-container-left">
        <div className="packagefilterbarcontainerleft-top">
          <div
            className={`package-btn ${isActive ? "active" : ""}`}
            onClick={() => setActiveTab(true)}
          >
            <Image src={beachUmbrellaIcon} alt="Packages" width={20} height={20} />
            <p>Packages</p>
          </div>
          <div
            className={`hotels-btn ${!isActive ? "active" : ""}`}
            onClick={() => setActiveTab(false)}
          >
            <Image src={hotelIcon} alt="Hotels" width={20} height={20} />
            <p>Hotels</p>
          </div>
        </div>

        <div className="dropdown">
          <div className="destination-dropdown">
            <DropDown defaultValue="Destination" options={optionsForDestinations} icon={localIcon} />
          </div>
          <div className="numberOfNight-dropdown">
            <DropDown defaultValue="Number Of Night" options={optionsForNoOfNight} icon={calendarIcon} />
          </div>
        </div>
      </div>

      <div className="packagefilterbar-container-right">
        <button>Search Packages</button>
      </div>
    </div>
  );
};

export default PackageFilterBar;



//=============================================================================

// import React, { useState } from 'react';
// import DropDown from '../buttons/dropDown/DropDown';
// import local from '../../assets/local.svg';
// import './PackageFilterBar.css';

// function PackageFilterBar() {
//   const options = [
//     { value: "option 1", label: 1 },
//     { value: "option 2", label: 2 },
//     { value: "option 3", label: 3 },
//   ];
//   const [isActive,setActiveTab]=useState(true)
//   const [defaultValue, setDefaultValue] = useState("Packages");

//   return (
//     <div className='packagefilterbar-container'>
//       <div className='packagefilterbar-container-left'>
//         <div className='packagefilterbarcontainerleft-top'>
     
//           <button className={`package-btn ${isActive ? "active" : ""}`}>Packages</button>

//           <button className={`hotels-btn ${isActive ? "active" : ""}`}>Hotels</button>
//         </div>
//         <div className='dropdown'>
//           <div className='destination-dropdown'>
//             <DropDown defaultValue={defaultValue} options={options} icon={local} />
//           </div>
//           <div className='numberOfNight-dropdown'>
//             <DropDown defaultValue={defaultValue} options={options} icon={local} />
//           </div>
//         </div>
//       </div>

//       <div className='packagefilterbar-container-right'>
//         <button>Search Packages</button>
//       </div>
//     </div>
//   );
// }

// export default PackageFilterBar;
