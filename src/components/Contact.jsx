import React from "react";
import { ContactCard } from "./ContactCard";
import cv from "../assets/CV - LEANDRO PEREYRA.pdf"
import styles from "../styles/Contact.module.css"

const githubProfile = "https://github.com/txakurhub";
const linkedinProfile = "https://www.linkedin.com/in/leandro-pereyra";
const email = "me.leandrop@gmail.com";

export const Contact = () => {
  return (
    <section className={styles.mainC} id="contact">
      <div className={styles.titleC}>
        <h2 className={styles.contacth2}>CONTACT</h2>

      </div>

      <div className={styles.cardsC}>
        <ContactCard
          img="logo-github"
          link={githubProfile}
          description="/txakurhub"
        />
        <ContactCard
          img="logo-linkedin"
          link={linkedinProfile}
          description="/leandro-pereyra"
        />
        <ContactCard
          img="mail-outline"
          link={`mailto:${email}`}
          description={email}
        />
        <ContactCard img="document-text-outline" link={cv} description="Resume" />
      </div>
    </section>
  );
};
