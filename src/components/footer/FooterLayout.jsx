'use client';

import React from 'react';
import FooterSocialMedia from './FooterSocialMedia';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';
import './FooterLayout.css';

const FooterLayout = () => {
  return (
    <div className="footer-container">
      <FooterSocialMedia className="footer-social-media" />
      <FooterLinks className="footer-links" />
      <FooterCopyright className="footer-copyright" />
    </div>
  );
};

export default FooterLayout;

