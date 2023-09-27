import React from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ title, color, image }) => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundColor: `${color}` }}>
      <div className={styles.cardImage}>
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p style={{ opacity: "30%" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <Button text="Read More" height="43px" />
    </div>
  );
};

export default Card;
