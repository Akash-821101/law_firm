import React from "react";
import styles from "./Card.module.css";

const TeamCard = ({ title, image, subTitle }) => {
  return (
    <div className={styles.cardTeamWrapper}>
      <div>
        <img src={image} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{title}</h3>
        <p
          style={{
            fontWeight: "400px",
            fontSize: "14px",
            lineHeight: "24px",
            opacity: "30%",
          }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
