import React from "react";
import styles from "../styles/Navbar.module.css";
import { Animated } from "react-animated-css";

export const Navbar = () => {
  return (
    <nav className={styles.mainN}>
      <Animated animationInDelay={12000} animationIn="flash">
        <Animated animationInDelay={6000} animationIn="flash">
          <div className={styles.itemsN}>
            <a className={styles.itemN} href="#about">
              A B O U T
            </a>
            <a className={styles.itemN} href="#work">
              W O R K
            </a>
            <a className={styles.itemN} href="#contact">
              C O N T A C T
            </a>
          </div>
        </Animated>
      </Animated>
    </nav>
  );
};
