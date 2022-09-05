import React from "react";
import { Card } from "./Card";
import styles from "../styles/Work.module.css";
import { Slider } from "./Slider";


export const Work = () => {
  return (
    <section className={styles.mainW} id="work">
      <div className={styles.titleW}>
        <div className={styles.headtxt}>
          <button>
            <h3 className={styles.workh3}>SOME OF MY</h3>
          </button>
          <h2 className={styles.workh2}>WORK</h2>
        </div>
      </div>
      <div className={styles.cardsW}>
      <Slider/>
      </div>
      <a href="#contact" className={styles.h4H}>
        ᐁ
      </a>
    </section>
  );
};
