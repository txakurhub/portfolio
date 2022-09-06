// import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import React from "react";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import styles from "../styles/Home.module.css";

import { hoverAnim } from "../utils/hover.js";
import { Greetings } from "../components/Greetings";

export const Home = () => {
  
  // window.onload = hoverAnim;

  return (
    <main className={styles.main} id="home">
      <section className={styles.mainH}>
        <div className={styles.name} >
          <div className={styles.leandro}>
            <span className={styles.letter}>L</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>D</span>
            <span className={styles.r}>R</span>
            <span className={styles.letter}>O</span>
          </div>
          <div className={styles.pereyra}>
            <span className={styles.letter}>P</span>
            <span className={styles.letter}>E</span>
            <span className={styles.r}>R</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>Y</span>
            <span className={styles.r}>R</span>
            <span className={styles.letter}>A</span>
          </div>
        </div>
       <Greetings/>

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
