import React from "react";
import styles from "../styles/Navbar.module.css";
import { Animated } from "react-animated-css";

export const Navbar = () => {
  return (
    <nav className={styles.mainN}>
      <div className={styles.itemsN}>
        <a className={styles.itemN} href="#about">ABOUT</a>
        <a className={styles.itemN} href="#work">WORK</a>
        <a className={styles.itemN} href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};
