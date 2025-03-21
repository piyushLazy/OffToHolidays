
import React from "react";
import Layout from "../layout/Layout";
import HomePageMiddle from "./HomePageMiddle";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page overflow-y-hidden">
      <title>Lazyatra - Plan Your Next Adventure</title>
      <meta name="description" content="Explore amazing travel destinations and holiday packages with Lazyatra. Book your perfect vacation today!" />
      <Layout bodyComponent={<HomePageMiddle />} />
    </div>
  );
}

export default HomePage;
