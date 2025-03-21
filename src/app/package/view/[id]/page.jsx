"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import DetailsTourPackage from '../../../../components/detailsTourPackagePage/DetailsTourPackage';
function page() {
    const router = useRouter();
    const params = useParams();

  return (
    <>
     <p>{params.id}</p>
     <DetailsTourPackage packageId={params.id} />
    </>
   
  )
}

export default page