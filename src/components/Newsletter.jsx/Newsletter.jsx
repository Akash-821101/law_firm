import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsLetterWrapper}>
      <h1>Subscribe Our Newsletter</h1>
      <div className={styles.newsletterField}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Enter your Email" />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Newsletter;
