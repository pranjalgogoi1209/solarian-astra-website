import React from "react";
import styles from "./homePage.module.css";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Services from "../../components/services/Services";

export default function HomePage() {
  return (
    <div className={`${styles.HomePage}`}>
      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />

      {/* projects section */}
      <Projects />

      {/* services section */}
      <Services />
    </div>
  );
}
