// import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import React from "react";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import styles from "../styles/Home.module.css";
// import { Name } from "../components/Name";
import { Animated } from "react-animated-css";
import { letterAnim } from "../utils/letter";
import { hoverAnim } from "../utils/hover";
import anime from "animejs";
import Letterize from "letterizejs";

export const Home = () => {
  // window.onload = function () {
  //   letterAnim();
  //   hoverAnim();
  // };

  return (
    <main className={styles.main}>
      <section className={styles.mainH} id="home">
        <div className={styles.leandro}>
          <h1>L</h1>
          <h1>E</h1>
          <h1>A</h1>
          <h1>N</h1>
          <h1>D</h1>
          <h1 className={styles.r}>R</h1>
          <h1>O</h1>
        </div>
        <div className={styles.pereyra}>
          <h1>P</h1>
          <h1>E</h1>
          <h1 className={styles.r}>R</h1>
          <h1>E</h1>
          <h1>Y</h1>
          <h1 className={styles.r}>R</h1>
          <h1>A</h1>
        </div>
        <button className={styles.fulldiv}>
          <h2 className={styles.fullstack}>FULL STACK DEVELOPER</h2>
        </button>
        <a href="#about" className={styles.flecha}>
          ᐁ
        </a>
      </section>

      <About />
      <Work />
      <Contact />
    </main>
  );
};
