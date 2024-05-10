import React from "react";
import styles from "./projects.module.css";

import projectImg from "./../../assets/homePage/projects/projectImg.jpg";

export default function Projects() {
  return (
    <div className={`flex-row-center ${styles.Projects}`}>
      <div className={`flex-row-center ${styles.leftContainer}`}>
        <img src={projectImg} alt="project-img" />
      </div>
      <div className={`flex-row-center ${styles.rightContainer}`}>
        <h2 className={styles.heading}>Our Projects</h2>

        <ul className={`flex-col-center ${styles.allProjects}`}>
          <li className={`txt2`}>NTPC- 40 MW in Ayodya, U.P</li>
          <li className={`txt2`}>20.25 KWp On-Grid Roof mounted</li>
          <li className={`txt2`}>
            Capitive Solar Power Project in IOCL, UPSO II, Noida U.P
          </li>
          <li className={`txt2`}>
            60 KWp On-Grid Roof mounted Solar Power Project at IOCL, Barauni
          </li>
          <li className={`txt2`}>
            50 KWp On-Grid Roof Mounted Solar Power Project at IOCL, Patna
          </li>
        </ul>
      </div>
    </div>
  );
}
