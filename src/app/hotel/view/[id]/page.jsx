"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import DetailsHotelPage from '../../../../components/detailsHotelPage/DetailsHotelPage';
function page() {
    const router = useRouter();
    const params = useParams();

  return (
    <>
     <p>{params.id}</p>
     <DetailsHotelPage hotelId={params.id} />
    </>
   
  )
}

export default page