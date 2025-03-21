
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "./Drawer";
import "./Navbar.css";
import logo from "@/assets/OffToHoloiday-Logo.png";
import loginIcon from "../assets/avatar-user-36.svg";
import { BsQuestionCircle } from "react-icons/bs";


function Navbar() {
  const data = {
    left: {
      siteLogo: logo,
      siteName: "Lazyatra",
      to: "/",
    },
    mid: [
      { id: 1, label: "Packages" },
      { id: 2, label: "Hotels" },
      { id: 3, label: "About Us" },
      { id: 4, label: "Testimonials" },
      { id: 5, label: "Contact Us" },
      { id: 6, label: "Blogs" },
    ],
    right: {
   
      loginIcon: loginIcon,
    },
  };

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    console.log("Drawer toggled");
    setShowDrawer(!showDrawer);
  };

  return (
    <nav className="navbar-main max-sm:bg-transparent   md:bg-zinc-100">
      <div className="navbar-left">
     {/* Left Section */}
  <Link href="/" className="navbar-left-logo">
    <Image src={data.left.siteLogo} alt={data.left.siteName}  width={60} height={60} />
  </Link>
</div>

{/* Middle Section */}
<div className="navbar-middle ">
  {data.mid.map((item) => (
    <Link
      key={item.id}
      href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="navbar-link  "
      onMouseOver={() => item.label === "Packages" && toggleDrawer()}
    >
     <span className="hover:underline text-md font-bold md:text-gray-900 "> {item.label}</span>
    </Link>
  ))}
</div>

{/* Drawer */}
{showDrawer && (
  <div className="drawer">
    <div className="drawer-content">
      <div className="column">
        <h3>All Destinations</h3>
        <h4>International Destinations</h4>
        <ul>
          {["Thailand", "Dubai", "Vietnam", "Bali", "Azerbaijan", "Sri Lanka", "Singapore"].map(
            (destination, index) => (
              <li key={index}>{destination}</li>
            )
          )}
        </ul>
      </div>
      <div className="column">
        <h3>Domestic Destinations</h3>
        <ul>
          {["Andaman", "Gujarat", "Kerala", "Meghalaya", "Kashmir", "Goa", "Sikkim", "Himachal Pradesh", "Ladakh", "Odisha"].map(
            (destination, index) => (
              <li key={index}>{destination}</li>
            )
          )}
        </ul>
      </div>
    </div>
  </div>
)}

{/* Right Section */}
<div className="navbar-right">
<BsQuestionCircle className="text-black text-2xl md:mt-3" />
  <Link href = "/auth">

  <div className="navbar-right-button  ">
    <span className="navbar-right-text text-black  text-md font-bold">Login</span>
    
    <Image
      src={data.right.loginIcon}
      alt="User Avatar"
      className="navbar-right-avatar"
      width={36}
      height={36}
    />
  </div>
  </Link>
</div>

{/* Drawer Menu */}
<div className="drawer-menu">
  <Drawer />
</div>
    </nav>
  );
}

export default Navbar;
