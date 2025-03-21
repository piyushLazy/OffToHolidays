import React from 'react';

const FooterLinks = ({ style = {} }) => {
  return (
    <div style={{ ...styles.container, ...style }}>
      {/* Company Column */}
      <div style={styles.column}>
        <h3 style={styles.title}>Company</h3>
        <div style={styles.linkGroup}>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact us</a>
          <a href="#" style={styles.link}>Blogs</a>
          <a href="#" style={styles.link}>Travelogues</a>
          <a href="#" style={styles.link}>Business Partners</a>
        </div>
      </div>

      {/* Destinations Column */}
      <div style={styles.column}>
        <h3 style={styles.title}>Destinations</h3>
        <div style={styles.linkGroup}>
          <a href="#" style={styles.link}>Andaman</a>
          <a href="#" style={styles.link}>Kashmir</a>
          <a href="#" style={styles.link}>Ladakh</a>
          <a href="#" style={styles.link}>Rajasthan</a>
          <a href="#" style={styles.link}>Himachal</a>
        </div>
      </div>

      {/* Support Column */}
      <div style={styles.column}>
        <h3 style={styles.title}>Support</h3>
        <div style={styles.linkGroup}>
          <a href="#" style={styles.link}>Getting started</a>
          <a href="#" style={styles.link}>Help center</a>
          <a href="#" style={styles.link}>Terms & Conditions</a>
          <a href="#" style={styles.link}>Privacy Policy</a>
        </div>
      </div>

      {/* Contact us Column */}
      <div style={styles.column}>
        <h3 style={styles.title}>Contact us</h3>
        <div style={styles.linkGroup}>
          <div style={styles.contactItem}>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z44_TnTr0Kgj1ucb" alt="Email" style={styles.icon} />
            <a href="mailto:team@lazyatra.com" style={styles.link}>team@lazyatra.com</a>
          </div>
          <div style={styles.contactItem}>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z44_TnTr0Kgj1ucc" alt="Phone" style={styles.icon} />
            <a href="tel:4146875892" style={styles.link}>(414) 687 - 5892</a>
          </div>
          <div style={styles.contactItem}>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z44_TnTr0Kgj1ucd" alt="Address" style={styles.icon} />
            <span style={styles.address}>
              E8, PM Paradise Siddharth Nagar, Jagatpura Jaipur, Rajasthan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '60px',
    minWidth: '387px',
    padding: '20px 10px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minWidth: '120px',
  },
  title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '22px',
    color: '#111111',
    margin: 0,
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  link: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    color: '#737373',
    textDecoration: 'none',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  address: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#737373',
  },
};

export default FooterLinks;
