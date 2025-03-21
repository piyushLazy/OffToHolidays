"use client";
import React from "react";
import "./DetailsHotelPage.css";
import DetailsHotelPageMiddle from "./DetailsHotelPageMiddle";
import Layout from "../layout/Layout";
import { useRouter } from "next/navigation";

const DetailsHotelPage = ({hotelId}) => {
  // const router = useRouter();
  // const params =  {"destination": "Delhi", "id": "1"};

  // const { destination, id } = params;
  console.log( hotelId);

  return (
    <div className="detailsTourPage-page">
      <Layout bodyComponent={<DetailsHotelPageMiddle  hotelId={hotelId} />} />
    </div>
  );
};

export default DetailsHotelPage;
