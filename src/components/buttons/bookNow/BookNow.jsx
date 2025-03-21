

import React from "react";
import "./BookNow.css";

function BookNow({ onClick, label = "Book Now" }) {
  return (
    <button className="booknow-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default BookNow;
