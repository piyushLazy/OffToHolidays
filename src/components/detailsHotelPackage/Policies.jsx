"use client";

import { useState } from "react";
import "./Policies.css";

const Policies = ({ policy = [] }) => {
  const policyData = [
    {
      about: "Cancellation Policy",
      details: "Free cancellation up to 24 hours before check-in. After that, a one-night charge applies."
    },
    {
      about: "Terms & Conditions",
      details: "Guests must present a valid ID at check-in. No smoking in the rooms. Pets are allowed with an additional fee."
    },
    {
      about: "Payment Policy",
      details: "We accept major credit cards, debit cards, and digital payments. A deposit may be required at check-in."
    }
  ];

  return (
    <div className="faq-container">
      {policyData.map((item, index) => (
        <FAQItem key={index} question={item.about} answer={item.details} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default Policies;
