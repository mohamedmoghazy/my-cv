import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () =>
{
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>
  {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ul
          className={`${styles.navButtons} ${isMobileMenuOpen ? styles.mobileMenuActive : styles.mobileMenuInactive
            }`}
        >
          <li>
            <Link to="Home" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="Resume" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="Projects" smooth={true} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : ""}>
              Projects
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