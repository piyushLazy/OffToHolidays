


import React, { useRef,useState,useEffect } from 'react';
import ExploreNow from '@/components/buttons/explorenow/Explorenow';
import data from '../../data/occasional/data';
import OccasionSwiper from './OccasionalSwiper';
import LeftScroll from '../buttons/leftRightScroll/LeftScroll';
import RightScroll from '../buttons/leftRightScroll/RightScroll';
import DiscoverAll from '../buttons/discoverAll/DiscoverAll';
import './Occasional.css';
import TravelPackage from '../card/travelPackagesLeftCard/TravelPackage';

function Occasional() {
  const swiperRef = useRef(null);  // Create the swiperRef here

  const [selectedPlace, setSelectedPlace] = React.useState("all");
  const [dataSource, setDataSource] = React.useState(data);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 750);
          };
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
  return (
    <div className="occasional-container">
      
      <div className="occasional-container-middle">
        <div className="occasional-container-left">

          <TravelPackage/>
          
            {/* <p className={`occasional-container-left-title ${
            isMobile ? " MobileHeadingH7" : "DesktopHeadingH4"
             }`}>
              Discover Packages Tailored to Your Travel Style.
            </p>
        
         
            <p className={`occasional-container-left-description ${
            isMobile ? "MobileBodySmall-Reg" : "DesktopBody16px-Reg"
             }`}>
              Whether you seek adventure, relaxation, or romance, we have the perfect getaway for every mood and occasion.
            </p> */}
         
          {/* <div className="occasional-container-left-bottom">
            <DiscoverAll/>
          </div> */}
        </div>

        <div className="occasional-container-right">
               <OccasionSwiper swiperRef={swiperRef} items={dataSource} />

             
        </div>
        
        
      </div>
     
   </div>
  );
}

export default Occasional;


