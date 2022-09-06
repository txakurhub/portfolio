import React from "react";
import styles from "../styles/About.module.css";
import { IconsAbout } from "./IconsAbout";

export const About = () => {
  return (
    <section className={styles.mainA} >
      <div id="about" >.</div>
      <div className={styles.titleA} >
        <h2>ABOUT</h2>
      </div>
      <div className={styles.textA}>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sunt
          distinctio sint molestias aspernatur voluptatem nemo, a tempore omnis
          dolorem voluptas dolorum vel quis voluptatum illo impedit eveniet
          dicta quas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi, eos dolorum accusamus unde asperiores mollitia deleniti
          incidunt tempora illum, tenetur odio explicabo velit quaerat assumenda
          saepe minus ratione quia pariatur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quasi, eos dolorum accusamus unde
          asperiores mollitia deleniti incidunt tempora illum, tenetur odio
          explicabo velit quaerat assumenda saepe minus ratione quia pariatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eos
          dolorum accusamus unde asperiores mollitia deleniti incidunt tempora
          illum, tenetur odio explicabo velit quaerat assumenda saepe minus
          ratione quia pariatur!
        </h4>
      </div>
      <div className={styles.techStack}>
        <button>SOME OF THE TECHNOLOGIES I WORK WITH ARE</button>
        <IconsAbout />
      </div>
      <a href="#work" className={styles.h4H}>
        ᐁ
      </a>
    </section>
  );
};
