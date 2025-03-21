'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './FooterSocialMedia.module.css'; // Import CSS Module
import facebook from '../data/image/facebook.png';
import twitter from '../data/image/twitwer.png';
import instagram from '../data/image/insta.png';
import linkedin from '../data/image/in.png';
import youtube from '../data/image/yt.png';
import logo from '../data/image/logo.png';
const FooterSocialMedia = ({ className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {/* Logo Section */}
      <div className={styles.logoWrapper}>
        <Image src={logo} alt="Logo" width={120} height={50} className={styles.logo} />
      </div>

      {/* Tagline */}
      <p className={styles.tagline}>Rejuvenation & Peace</p>

      {/* Social Media Icons */}
      <div className={styles.socialMediaContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={facebook} alt="Facebook" width={30} height={30} className={styles.socialIcon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={twitter} alt="Twitter" width={30} height={30} className={styles.socialIcon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src={instagram} alt="Instagram" width={30} height={30} className={styles.socialIcon} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="LinkedIn" width={30} height={30} className={styles.socialIcon} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image src={youtube} alt="YouTube" width={30} height={30} className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

FooterSocialMedia.propTypes = {
  className: PropTypes.string,
};

export default FooterSocialMedia;
