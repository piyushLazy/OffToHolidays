import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ number, question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={` mt-6   p-4  transition-all ${
        isOpen ? "bg-blue-50" : "bg-white"
      }`}
      style={{
        width: window.innerWidth < 450 ? "22rem" : "70rem",
      }} // Set width to 60rem (960px)
    >
      {/* Button to toggle accordion */}
      <button                                                                                                                                                                                                                                                                                                                                                                                                         
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-lg">  
          <span className="text-3xl text-gray-700 font-serif ">{number}   </span>     <span className="text-xl text-gray-900 font-sans pl-8">   {question}</span> </span>
        
        {/* Rotating arrow animation */}
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          ▼
        </motion.span>
      </button>

      {/* Animate the answer appearing downward */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-2 text-gray-600"
          >
            <div className="p-2">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
