import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const LeftSection = ({ setSelectedTab }) => {
  const tabs = [
    "10K+ Happy Travellers",
    "Best Price Guarantee",
    "Passionate Service",
    "On Trip Fast Support 24/7",
  ];

  // State to track active tab
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="bg-gray-100 pt-10 flex flex-col max-sm:gap-16 h-full justify-between p-6 rounded-2xl shadow-lg max-w-sm">
      <div>
        <h3 className="md:text-xl font-bold mb-4">Why Choose Us?</h3>
        <p className="italic text-gray-700 mb-4">
          Founded by two avid travelers, <span className="font-bold">Lazy Yatra’s motto</span> is to make you feel lost—not on the road, but in the journey itself...
        </p>
      </div>
      <div>
        <div className="space-y-3">
          {tabs.map((text, index) => (
            <div
              key={index}
              className={`flex justify-between items-center font-semibold border-b pb-2 cursor-pointer transition-all duration-100 
              ${activeTab === text ? "text-zinc-950" : "text-gray-700"} hover:text-zinc-950`}
              onClick={() => {
                setSelectedTab(text);
                setActiveTab(text); // Set active tab
              }}
            >
              {text} <span className="text-lg"><FaArrowRight /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
