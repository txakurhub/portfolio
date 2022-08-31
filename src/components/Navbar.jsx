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
              ABOUT
            </a>
            <a className={styles.itemN} href="#work">
              WORK
            </a>
            <a className={styles.itemN} href="#contact">
              CONTACT
            </a>
          </div>
        </Animated>
      </Animated>
    </nav>
  );
};
