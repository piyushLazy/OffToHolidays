"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import FooterLayout from "../footer/FooterLayout";
import Head from "next/head";
import "./HomePage.css";
import BackgroundSlider from "@/components/HomePageSlider/BackgroundSlider";
import PopUp from "@/components/Pop-up"; 

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

  const onClose = () => setShowPopup(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrollThreshold = document.documentElement.scrollHeight * 0.5;

      if (scrollPosition >= scrollThreshold) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const timeout = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);

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
        <title>Off To Holidays</title>
        <meta name="description" content="A beautiful background slider with smooth transitions" />
      </Head>

      <div className="homePage-container overflow-y-hidden">
        <div className="homePage-body overflow-x-hidden">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="homePage-body-backgroundslider"
          >
            <BackgroundSlider />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="homePage-body-mostpopularpicks"
          >
            <MostPopularPicks />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-8"
          >
            <PopularHotels />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-8"
          >
            <Occasional />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-18"
          >
            <Destinations />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mx-16 md:mt-8"
          >
            <HomeWhyUs />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-16"
          >
            <VideoSection />
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-8"
          >
            <AccordionList />
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mt-8"
          >
            <HeroSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:mt-8"
          >
            <FooterLayout />
          </motion.div>
        </div>
      </div>

      {/* Popup and Clickable Overlay */}
      {showPopup && (
  <>
    {/* Background Overlay - Click to Close */}
    <div
      className="fixed inset-0   z-40 pointer-events-auto"
      onClick={onClose} // Closes when clicking outside the popup
    />

    {/* Popup Container */}
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white  rounded-t-lg z-50 pointer-events-auto"
    >
      <PopUp onClose={onClose} />
    </motion.div>
  </>
)}

    </>
  );
}

export default HomePageMiddle;
