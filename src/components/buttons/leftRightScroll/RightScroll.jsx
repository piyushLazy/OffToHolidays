import React from 'react';
import './Left&RightScroll.css';
import { FaArrowRight } from "react-icons/fa";

function RightScroll({ onClick }) {
  return (
 <FaArrowRight className='text-2xl' onClick={onClick}/>
  );
}

export default RightScroll;
