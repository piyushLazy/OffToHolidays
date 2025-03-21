"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../assets/home.svg";
import PackagesIcon from "../assets/beach-umbrella.svg";
import HotelIcon from "../assets/hotel.svg";
import ProfileIcon from "../assets/woman.svg";
import "./FooterNavMenu.css";

function FooterNavMenu() {
  const navItems = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/packages", label: "Packages", icon: PackagesIcon },
    { to: "/hotels", label: "Hotels", icon: HotelIcon },
    { to: "/profile", label: "Profile", icon: ProfileIcon },
  ];

  return (
    <div className="footerNavMenu-container">
      {navItems.map((item) => (
        <Link key={item.to} href={item.to} className={`footerNavMenu-${item.label}`}>
          <Image src={item.icon} alt={item.label} width={24} height={24} />
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
}

export default FooterNavMenu;
