"use client";
import React from "react";
import Layout from "../layout/Layout";
import { useRouter } from "next/navigation";
import './AllHotelPage.css'
import AllHotelPageMiddle from './AllHotelPageMiddle'
const AllHotelPage = () => {


  return (
    <div className="allPackagesPage">
      <Layout bodyComponent={<AllHotelPageMiddle/>} />
    </div>
  );
};

export default AllHotelPage;
