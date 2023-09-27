import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";
import gift from "../assets/Union.png";

const Cards = () => {
  return (
    <div className={styles.cardsWrapper}>
      <h1>Why Choose us?</h1>
      <div className={styles.cards}>
        <Card title="98% Success Rate" image={gift} />
        <Card title="100% Success Rate" image={gift} color="grey" />
        <Card title="100% Success Rate" image={gift} />
      </div>
    </div>
  );
};

export default Cards;
