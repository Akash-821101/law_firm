import React from "react";
import styles from "./Card.module.css";

const ProfileCard = ({ title, color, image, subTitle }) => {
  return (
    <div
      className={styles.profileWrapper}
      style={{ backgroundColor: `${color}` }}
    >
      <div className={styles.profileImage}>
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{subTitle}</p>
      <p style={{ opacity: "30%" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
    </div>
  );
};

export default ProfileCard;
