import React from "react";
import styles from "./about.module.css";

import aboutImg01 from "./../../assets/homePage/about/aboutImg01.png";
import aboutImg02 from "./../../assets/homePage/about/aboutImg02.png";

export default function About() {
  return (
    <div className={`flex-row-center ${styles.About}`}>
      {/* left container */}
      <div className={`flex-col-center ${styles.leftContainer}`}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={`txt1 ${styles.description}`}>
          At Solarian Astra, our passion for a greener, more sustainable world
          drives everything we do. As a leading player in the solar industry,
          our goal is simple: to bring sustainable and green energy resources to
          every corner of India through large-scale solar panel integration.
          We're not just about distributing solar solutions - we're on a mission
          to shape a brighter future for generations to come. With our expertise
          and dedication, we're proud to be at the forefront of India's
          renewable energy revolution, one solar solution at a time.
        </p>
      </div>

      {/* right container */}
      <div className={`flex-col-center ${styles.rightContainer}`}>
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={aboutImg01} alt="about-img-1" />
        </div>
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={aboutImg02} alt="about-img-2" />
        </div>
      </div>
    </div>
  );
}
