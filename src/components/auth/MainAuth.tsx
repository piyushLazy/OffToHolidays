"use client";

import React, { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import Navbar from "../navbar/Navbar";
import FooterLayout from "../footer/FooterLayout";
import img from "./assets/sideAuthimage.png";
import Signin from "./Signin";
import Signup from "./Signup";

const MainAuth = () => {  // ✅ Renamed to uppercase
  const [signup, setSignup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="flex justify-around mx-6 mt-12 items-center">
        <div>
          {/* ✅ Replaced <img> with Next.js <Image /> */}
          <Image 
            src={img} 
            alt="Authentication" 
            width={560} 
            height={560} 
            className="md:h-[35rem] md:w-[35rem]" 
          />
        </div>
        <div>
          {signup ? <Signup setSignup={setSignup} /> : <Signin setSignup={setSignup} />}
        </div>
      </div>
      <div className="mx-36">
        <FooterLayout />
      </div>
    </div>
  );
};

export default MainAuth;  // ✅ Exporting correctly
