"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import FooterLayout from "../footer/FooterLayout";
import Head from "next/head";
import "./HomePage.css";
import BackgroundSlider from "@/components/HomePageSlider/BackgroundSlider";     
import PopUp from "@/components/Pop-up"; // Import the popup component

// Dynamically import components without inline loading placeholders
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const MostPopularPicks = dynamic(() => import("@/components/mostpopularPicks/MostPopularPicks"), { ssr: false });
const Occasional = dynamic(() => import("@/components/occasional/Occasional"), { ssr: false });
const PopularHotels = dynamic(() => import("@/components/popularHotels/PopularHotels"), { ssr: false });
const Destinations = dynamic(() => import("@/components/destinations/Destinations"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/bookNow/HeroSection"), { ssr: false });
const AccordionList = dynamic(() => import("@/components/faq/AccordionList"), { ssr: false });
const VideoSection = dynamic(() => import("@/components/videoSection"), { ssr: false });
const HomeWhyUs = dynamic(() => import("@/components/whyus/mainWhyUS"), { ssr: false });

function HomePageMiddle() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  // Simulate loading time
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrollThreshold = document.documentElement.scrollHeight * 0.5; // 50% of page height

      if (scrollPosition >= scrollThreshold) {
        setShowPopup(true);
        // Remove the scroll event listener after showing the popup
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add a slight delay to ensure the DOM is fully rendered
    const timeout = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000); // Adjust the delay as needed

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full mt-24">
        <Lottie animationData={LoadingAnimation} loop style={{ width: 450, height: 450 }} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="A beautiful background slider with smooth transitions" />
      </Head>

      <div className="homePage-container">
        <div className="homePage-body overflow-x-hidden">
          <div className="homePage-body-backgroundslider">
            <BackgroundSlider />
          </div>

          <div className="homePage-body-mostpopularpicks">
            <MostPopularPicks />
          </div>

    
          <div className="md:mt-8">
          <PopularHotels />
</div>

          <div className="md:mt-8">
          <Occasional/>
          </div>

         < div className="md:mt-18">
          <Destinations />
          </div>


          <div className="md:mx-16 md:mt-8">
          <HomeWhyUs />
          </div>
       
          <div className="md:mt-16">
            <VideoSection />
          </div>
          <div className="md:mt-8">
          <AccordionList />
          </div>
          <div className="md:mt-8">
          <HeroSection />
         </div>
         <div className="md:mt-8">
          <FooterLayout />
          </div>
          
        </div>
      </div>

      {/* Popup Component - Animated */}
      {showPopup && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white shadow-lg rounded-t-lg p-4 z-50"
        >
          <PopUp onClose={onClose} />
        </motion.div>
      )}
    </>
  );
}

export default HomePageMiddle;