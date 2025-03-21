'use client';

import React from 'react';
import './FooterCopyright.css'; // Move styles to a CSS file for better performance

function FooterCopyright({ year = new Date().getFullYear() }) {
  return (
    <div className="footer-copyright-container">
      <hr className="footer-divider" />
      <p className="footer-text">© {year} MyCompany</p>
    </div>
  );
}

export default FooterCopyright;
