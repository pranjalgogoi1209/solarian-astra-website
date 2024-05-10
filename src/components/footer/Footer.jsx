import React from "react";
import styles from "./footer.module.css";

import footerImg from "./../../assets/footer/footerImg.jpg";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={`flex-row-center ${styles.imgcontainer}`}>
        <img src={footerImg} alt="footer-img" />
      </div>

      <div className={`flex-col-center ${styles.bottom}`}>
        <p className={`txt2`}>
          Ph: &nbsp; <a href="tel:+9821293600">+91 9821293600</a>
        </p>
        <p className={`txt2`}>
          Email: &nbsp;
          <a href="mailto:Sales@solarianastra.com">Sales@solarianastra.com</a>
        </p>

        <address className={`txt2`}>
          Address: &nbsp; S-2103, The Hyde Park, Sector 78, Noida, U.P 201301
        </address>

        <p className={`txt2`}>
          Web: &nbsp; <a href="www.solarianastra.com">www.solarianastra.com</a>
        </p>
      </div>
    </div>
  );
}
