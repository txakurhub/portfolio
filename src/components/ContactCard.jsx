import React from "react";
import styles from "../styles/ContactCard.module.css"

export const ContactCard = ({img, link, description}) => {

  return (
    <div className={styles.mainCC}>
      <a href={link}>
        <img src={img} alt="contact by" className={styles.imgCC}/>
      </a>
      <div className={styles.textCC}>{description && description}</div>
    </div>
  );
};