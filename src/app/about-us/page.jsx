import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import FooterLayout from '@/components/footer/FooterLayout';
import Main from '@/app/about-us/componets/main';
const Page = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Navbar should be full width */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 w-full">
        <Main/>
        {/* Page content here */}
      </div>
      
      {/* Footer should be full width */}
      <FooterLayout />
    </div>
  );
};

export default Page;
