import { useState } from "react";
import "./Navbar.scss"; // Import your Navbar styles
import searchPng from "../../assets/png/search.png"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className="search">
        <img src={searchPng} alt="Search" className="search-icon" />
        <input type="text" >
        </input>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "menu-open" : ""}`}>
        <li>Categories</li>
        <li>Website Builders</li>
         {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Today's deals</li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
