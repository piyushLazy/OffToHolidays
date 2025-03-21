import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { MdPhoneCallback } from "react-icons/md";

const faqData = [
  { number: `01`, question: "What types of travel packages do you offer?", answer: "Booking with Lazy Yatra is easy! Simply choose your package, fill in your details, and make a secure payment. We’ll take care of the rest and confirm your booking." },
  { number: `02`, question: "How can I easily book a trip with Lazy Yatra?", answer: "Booking is simple! Select your package, fill out your details, and make a secure payment. Our team will handle the rest." },
  { number: `03`, question: "What are the payment options available for booking?", answer: "We accept major credit cards, debit cards, UPI, and online banking transfers." },
  { number: `04`, question: "Do you offer travel insurance?", answer: "Yes, we provide travel insurance options for additional safety and security during your trip." }
];

const AccordionList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center  md:mt-14 px-4">
      <div className="w-full max-w-full  mx-auto p-6 bg-white ">
        <div className="flex max-sm:flex-col max-sm:items-center justify-between m-6"> 
        <div>
        <h5 className="text-xl font-bold text-center mb-4">
          Got Questions? We've Got Answers!
        </h5>
        </div>
        <div>
        <p className="font-serif flex items-center gap-2">
  Got any questions? Contact Us. <MdPhoneCallback />
</p>

        </div>
        </div>
        {faqData.map((item, index) => (
          <AccordionItem
            key={item.number}
            number={item.number}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
