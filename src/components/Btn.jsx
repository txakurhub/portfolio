import React, { useState } from "react";
import styles from "../styles/Btn.module.css";

export const Btn = () => {
  const btnUp = document.getElementById("btnUp");
  const [state, setState] = useState(false);

  window.onscroll = () => {
    if (window.scrollY < 300) {
      setState(false);
    } else {
      setState(true);
    }
  };

  console.log(btnUp);

  return (
    <a href="#home" id="btnUp" className={state === true ? styles.up : styles.top}>
      ᐃ
    </a>
  );
};
