import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ul
          className={`${styles.navButtons} ${
            isMobileMenuOpen ? styles.mobileMenuActive : styles.mobileMenuInactive
          }`}
        >
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="classes" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Classes
            </Link>
          </li>
          <li>
            <Link to="about-us" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="our-team" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Our Team
            </Link>
          </li>
        </ul>
        <div className={styles.menuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
