import React from "react";
import styles from "../styles/About.module.css";

export const About = () => {
  return (
    <section className={styles.mainA} id="about">
      <p></p>
      <div className={styles.titleA}>
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
        <h4>SOME OF THE TECHNOLOGIES I WORK WITH ARE</h4>
        <a href="https://www.javascript.com/">
          <i class="devicon-javascript-plain"></i>
        </a>
        <a href="https://git-scm.com/">
          <i class="devicon-git-plain"></i>
        </a>
        <a href="https://lenguajehtml.com/">
          <i class="devicon-html5-plain"></i>
        </a>
        <a href="https://www.w3.org/Style/CSS/">
          <i class="devicon-css3-plain"></i>
        </a>
        <a href="https://github.com/">
          <i class="devicon-github-original"></i>
        </a>
        <a href="https://reactjs.org/">
          <i class="devicon-react-original"></i>
        </a>
        <a href="https://redux.js.org/">
          <i class="devicon-redux-original"></i>
        </a>
        <a href="https://www.npmjs.com/">
          <i class="devicon-npm-original-wordmark"></i>
        </a>
        <a href="https://nodejs.org/en/">
          <i class="devicon-nodejs-plain"></i>
        </a>
        <a href="http://expressjs.com/">
          <i class="devicon-express-original"></i>
        </a>
        <a href="https://trello.com/">
          <i class="devicon-trello-plain"></i>
        </a>
        <a href="https://sequelize.org/">
          <i class="devicon-sequelize-plain"></i>
        </a>
        <a href="https://www.postgresql.org/">
          <i class="devicon-postgresql-plain"></i>
        </a>
        <a href="https://code.visualstudio.com/">
          <i class="devicon-visualstudio-plain"></i>
        </a>
        <a href="https://firebase.google.com/">
          <i class="devicon-firebase-plain"></i>
        </a>
      </div>
      <a href="#work" className={styles.h4H}>
        ᐁ
      </a>
    </section>
  );
};
