import React from "react";
import styles from "./hero.module.css";

import logo from "./../../assets/logo.png";
import heroImg from "./../../assets/homePage/hero/heroImg.jpg";

export default function Hero() {
  return (
    <div className={`flex-row-center ${styles.Hero}`}>
      {/* left container */}
      <div className={`flex-col-center ${styles.leftContainer}`}>
        <div className={`flex-row-center ${styles.logoContainer}`}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.firstHeading}>
          <h2 className={`big-txt`}>Energize the</h2>
          <h1>Future</h1>
        </div>

        <h2 className={`big-txt ${styles.description}`}>
          Solarian Astra&apos;s Global Challenge for Affordable Clean Energy
        </h2>
      </div>

      {/* right container */}
      <div className={`flex-row-center ${styles.rightContainer}`}>
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
}
