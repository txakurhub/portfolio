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
  window.onload = function(){
    letterAnim()
    hoverAnim()
  }
  console.log(document.getElementById("home"));
  return (
    <main className={styles.main}>
      <section className={styles.mainH} id="home">
        <Animated >
          <h2 className={styles.h2U}>HI, I'M</h2>
          <div className={styles.h1U}>
            <h1>LEANDRO</h1>
          </div>
          <h1 className={styles.h1D}>PEREYRA</h1>
        </Animated>
        <h2 className={styles.h2D}>A FULL STACK DEVELOPER</h2>
        {/* <Animated
          animationIn="flash"
          animationInDelay={6000}
          animationInDuration={7500}
        >
        </Animated> */}
        <Animated animationInDelay={9000} animationIn="headShake">
          <Animated
            animationInDelay={11000}
            animationIn="headShake"
            animationInDuration={2000}
          >
            <Animated
              animationInDelay={13500}
              animationInDuration={9000}
              animationIn="headShake"
            >
              <a href="#about" className={styles.h4H}>
                ᐁ
              </a>
            </Animated>
          </Animated>
        </Animated>
      </section>

      <About />
      <Work />
      <Contact />
      
    </main>
  );
};
