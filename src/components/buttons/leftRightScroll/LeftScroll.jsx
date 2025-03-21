import React from 'react';
import leftArrow from '@/components/assets/navigate-next.svg';
import './Left&RightScroll.css';
import { FaArrowLeft } from "react-icons/fa";


function LeftScroll({ onClick }) {
  return (
      <FaArrowLeft className='text-2xl' onClick={onClick}/>
  );
}

export default LeftScroll;
