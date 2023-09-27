import React from "react";
import styles from "./HeroSection.module.css";
import shape from "../assets/Shape1.png";
import image from "../assets/Image12.png";
import Button from "./Button/Button";

// import { ReactComponent as Message } from "../assets/message.svg";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 style={{ fontWeight: "500px" }}>You don’t have to </h2>
        <h1>Fight them Alone.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.inputBox}>
          <div>
            {/* <Message /> */}

            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
          </div>
          <Button text="Let's Talk" />
        </div>
      </div>
      <div className={styles.heroContentImage}>
        <img src={shape} alt="shape" />
        <img
          src={image}
          alt="pic"
          style={{ position: "absolute", left: "0px", bottom: "5px" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
