import React from "react";
import styles from "./BusinessCard.module.css";
import img1 from "../../assets/Rectangle 3651.png";
import img2 from "../../assets/Rectangle 3652.png";
import img3 from "../../assets/Rectangle 3653.png";
import img4 from "../../assets/Rectangle 3654.png";
import img5 from "../../assets/Rectangle 3655.png";
import img6 from "../../assets/Rectangle 3656.png";

const BusinessCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <h1>Area of Practices</h1>
      <div className={styles.cardContent}>
        <div className={styles.businessCard}>
          <img src={img2} alt="img1" />
          <p>BUSINESS LAW</p>
        </div>
        <div className={styles.businessCard}>
          <img src={img1} alt="img2" />
          <p>Partnership LAW</p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.businessCard}>
          <img src={img3} alt="img3" />
          <p>REAL ESTATE LAW</p>
        </div>
        <div className={styles.businessCard}>
          <img src={img4} alt="img4" />
          <p>BUSINESS LAW</p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.businessCard}>
          <img src={img6} alt="img5" />
          <p>LANDLORD DISPUTES</p>
        </div>
        <div className={styles.businessCard}>
          <img src={img5} alt="img6" />
          <p>ELDER ABUSE</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
