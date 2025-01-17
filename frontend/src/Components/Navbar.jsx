import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          className={`${styles.navButtons} ${isMobileMenuOpen ? styles.mobileMenuActive : styles.mobileMenuInactive}`}
        >
          <li>
            <Link to="/" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
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