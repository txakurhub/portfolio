import React, { useState } from "react";
import styles from "../styles/Btn.module.css";

export const Btn = () => {
  const [state, setState] = useState(false);

  window.onscroll = () => {
    if (window.scrollY < 300) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <a
      href="#home"
      id="btnUp"
      className={state === true ? styles.up : styles.top}
    >
      ᐃ
    </a>
  );
};
