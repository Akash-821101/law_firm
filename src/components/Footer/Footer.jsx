import React from "react";
import styles from "./Footer.module.css";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import pinterest from "../../assets/pintrest.png";
import logo from "../../assets/Vector.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerlogo}>
          <img src={logo} alt="logo" />
          <h4>IGSTUDIO</h4>
        </div>
        <div className={styles.footerlinks}>
          <div>Home</div>
          <div>Attorneys</div>
          <div>Pratice Areas</div>
          <div>Contact Us</div>
          <div className={styles.footerSocialLinks}>
            <div>
              <img style={{ width: "30px" }} src={insta} alt="" />
            </div>
            <div>
              <img style={{ width: "30px" }} src={facebook} alt="" />
            </div>
            <div>
              <img style={{ width: "30px" }} src={twitter} alt="" />
            </div>
            <div>
              <img style={{ width: "30px" }} src={pinterest} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContent}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
