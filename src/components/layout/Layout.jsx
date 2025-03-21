"use client";

import React from "react";
import Navbar from "../navbar/Navbar.jsx";
 import FooterNavMenu from "../footerTabMenu/FooterNavMenu.jsx";
// import FooterNavMenu from "../footerTabMenu/FooterNavMenu";
import FooterLayout from "../../components/footer/FooterLayout";
import "./Layout.css";

const Layout = ({ bodyComponent}) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Navbar />
      </header>

      <main className="layout-middle">
        { bodyComponent}
      </main>

      <footer className="layout-footer">
        <div className="footer-nav desktop-footer">
          {/* <FooterLayout /> */}
        </div>
        <div className="layout-footer-forMobile mobile-only">
          <FooterNavMenu />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
