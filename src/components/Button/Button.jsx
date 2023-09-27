import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, width, height, radius }) => {
  return (
    <div>
      <button
        className={styles.button}
        style={{ width: `${width}`, height: `${height}`, borderRadius: `${radius}` }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
