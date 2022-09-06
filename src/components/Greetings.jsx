import React from "react";
import styles from "../styles/Greetings.module.css";

export const Greetings = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <ul className={styles.content__container__list}>
          <li className={styles.content__container__list__item}>
            FULL-STACK DEVELOPER
          </li>
          <li className={styles.content__container__list__item}>
            FRONT-END DEVELOPER
          </li>
          <li className={styles.content__container__list__item}>
            BACK-END DEVELOPER
          </li>
          <li className={styles.content__container__list__item}>
            FULL-STACK DEVELOPER
          </li>
        </ul>
      </div>
    </div>
  );
};
