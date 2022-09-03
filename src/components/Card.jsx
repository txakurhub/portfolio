import React from "react";
import styles from "../styles/Card.module.css";

export const Card = ({ snapshot, text, deployURL, repo, title, video }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfo}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardImg}>
          <video src={video} type="video/mp4" controls></video>
          {/* <img src={snapshot} alt="" /> */}
        </div>
        <h4 className={styles.cardText}>{text}</h4>
      </div>
      <div className={styles.cardLinks}>
        <a href={repo}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href={deployURL}>
          <ion-icon name="link-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};
