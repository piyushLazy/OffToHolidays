"use client";
import React from "react";
import Layout from "../layout/Layout";
import { useRouter } from "next/navigation";
import './AllPackagePage.css'
import AllPackagePageMiddle from './AllPackagePageMiddle'
const AllPackagePage = () => {


  return (
    <div className="allPackagesPage">
      <Layout bodyComponent={<AllPackagePageMiddle/>} />
    </div>
  );
};

export default AllPackagePage;
