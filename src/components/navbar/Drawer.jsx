"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Drawer.css";
import LoginButton from "./LoginButton";
import down from "../assets/down (1).svg";
import arrowleft from "../assets/arrow-left.svg";

function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const drawerRef = useRef(null); // Ref for drawer

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSubmenuOpen(false); // Close submenu when drawer toggles
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // 🔴 Close Drawer When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
        setIsSubmenuOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <div className="mobile-navbar">
      {/* Toggle Drawer Button */}
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? "" : "☰"}
      </button>

      {/* Main Drawer */}
      <div ref={drawerRef} className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={toggleDrawer}>
          <Image src={arrowleft} alt="Close" width={24} height={24} />
        </button>

        <div className="drawer-content">
          {["Packages", "Hotels", "About Us", "Testimonials", "Contact Us", "Blogs"].map((label, index) => (
            <Link
              key={index}
              href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="drawer-link"
              onClick={(e) => {
                if (label === "Packages") {
                  e.preventDefault(); // Prevent navigation for submenu
                  toggleSubmenu();
                }
              }}
            >
              {label}
              {label === "Packages" ? <Image src={down} alt="submenu" width={16} height={16} /> : ""}
            </Link>
          ))}
        </div>

        <Link href={`/auth`}>
          <div className="login-button">
            <LoginButton />
          </div>
        </Link>
      </div>

      {/* Submenu Drawer */}
      {isSubmenuOpen && (
        <div className="submenu-drawer">
          <button className="drawer-close" onClick={toggleSubmenu}>
            <Image src={arrowleft} alt="Back" width={24} height={24} />
          </button>
          <div className="drawer-content">
            {["All Packages", "International Packages", "Domestic Packages"].map((item, index) => (
              <Link key={index} href={`/packages/${item.toLowerCase().replace(/\s+/g, "-")}`} className="drawer-link">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
