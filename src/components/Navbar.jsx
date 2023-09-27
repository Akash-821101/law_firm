import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/Vector.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarlogo}>
        <img src={logo} alt="logo" />
        <h4>IGSTUDIO</h4>
      </div>
      <div className={styles.navbarlinks}>
        <div>Home</div>
        <div>Attorneys</div>
        <div>Pratice Areas</div>
        <div>Contact Us</div>
      </div>
      <button>Contact Now</button>
    </div>
  );
};

export default Navbar;
