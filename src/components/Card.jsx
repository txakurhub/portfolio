import React from "react";
import github from "../assets/githublogo.png";
import link from "../assets/link.png";
import styles from "../styles/Card.module.css";

export const Card = ({ snapshot, text, deployURL, repo, title }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img src={snapshot} alt="" />
      </div>
      <h4 className={styles.cardText}>{text}</h4>
      <div className={styles.cardLinks}>
        <a href={repo}>
          <img width="60" src={github} alt="/txakurhub" />
        </a>
        <a href={deployURL}>
          <img width="60" src={link} alt="deploy" />
        </a>
      </div>
    </div>
  );
};
