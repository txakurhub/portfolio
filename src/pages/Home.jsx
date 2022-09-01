import React from "react";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import styles from "../styles/Home.module.css";
import { Animated } from "react-animated-css";

export const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainH} id="home">
        <Animated animationIn="bounce">
          <h2 className={styles.h2U}>HI, I'M</h2>
          <h1 className={styles.h1U}>LEANDRO</h1>
          <h1 className={styles.h1D}>PEREYRA</h1>
        </Animated>
        <Animated animationIn="flash" animationInDelay={6000}
        animationInDuration={7500}>
          <h2 className={styles.h2D}>A FULL STACK DEVELOPER</h2>
        </Animated>
        <Animated
          animationInDelay={9000}
          animationIn="headShake"
        >
          <Animated animationInDelay={11000} animationIn="headShake" animationInDuration={2000}>
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
