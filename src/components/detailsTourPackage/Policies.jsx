"use client";
import { useState } from "react";
import "./Policies.css";

const Policies = ({ policy = [] }) => {
  return (
    <div className="faq-container">
      {policy.map((item, index) => (
        <FAQItem key={index} question={item?.about} answer={item?.details} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question || "No question available"}
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer || "No details available"}</div>}
    </div>
  );
};

export default Policies;
