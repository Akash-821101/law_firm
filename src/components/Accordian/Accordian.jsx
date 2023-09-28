import React from "react";
import styles from "./Accordian.module.css";
import ProfileCard from "../Card/ProfileCard";
import leftArrow from "../../assets/Down 1.png";
import rightArrow from "../../assets/Vector.png";
import profilepic1 from "../../assets/profile2.png";
import profilepic2 from "../../assets/profile3.png";
import profilepic4 from "../../assets/profileimg.png";

const Accordian = () => {
  return (
    <div className={styles.accordianWrapper}>
      <div className={styles.accordianHeader}>
        <h1>
          What says our <br></br> happy Clients
        </h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={leftArrow} alt="" />
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#E3B748",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.profileCards}>
        <ProfileCard
          title="Jane Cooper"
          image={profilepic1}
          subTitle="Ceo of Hunt"
        />
        <ProfileCard
          title="Devon Lane"
          image={profilepic2}
          subTitle="Ceo of Hunt"
        />
        <ProfileCard
          title="Robert Fox"
          image={profilepic4}
          subTitle="Ceo of Hunt"
        />
      </div>
    </div>
  );
};

export default Accordian;
