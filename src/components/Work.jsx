import React from "react";
import { Card } from "./Card";
import styles from "../styles/Work.module.css"

import bark from "../assets/barkleakshome.jpg";
import movie from "../assets/movieshome.jpg";
import sneaker from "../assets/sneakershome.png";

const sneakerTXT =
  "Application for the purchase of sneakers. Supports payment with QR, MercadoPago and PayPal. It has both a user panel where you can review profile, favorites, shopping cart and purchase history, and an administrator panel with sales statistics, stock, categories and users where to create, search, edit or delete any of the above.";
const barkTXT =
  "Development of a SPA using React for the Front End and Redux as stage managment. The components were developed with CSS without the externals libraries. It consumes data from an API through a Back End developed in NodeJS using Express, Sequelize and PostgreSQL, adding new functionalities to the original API.";
const movieTXT =
  "Developed a web application for a movie catalog showing information on 500+ movies. The app works through an API and it was developed with Javascript, React, Redux and CSS.";

const sneakerURL = "https://sneakers-xxre.vercel.app";
const barkURL = "https://barkleaks.vercel.app/";
const movieURL = "";

const barkREPO = "https://github.com/txakurhub/PI-Dogs";
const sneakerREPO = "https://github.com/txakurhub/pfinal_client";
const movieREPO = "";

export const Work = () => {
  return (
    <section className={styles.mainW} id="work">
      
      <div className={styles.titleW}>
        <h3 className={styles.workh3}>SOME OF MY</h3>
        <h2 className={styles.workh2}>WORK</h2>
      </div>
      <div className={styles.cardsW}>
        <Card
          snapshot={bark}
          text={barkTXT}
          deployURL={barkURL}
          repo={barkREPO}
          title="BarkLeaks"
        />
        <Card
          snapshot={sneaker}
          text={sneakerTXT}
          deployURL={sneakerURL}
          repo={sneakerREPO}
          title="Sneakers E-Commerce"
        />
        <Card
          snapshot={movie}
          text={movieTXT}
          deployURL={movieURL}
          repo={movieREPO}
          title="Movies App"
        />
      </div>
      <a href="#contact" className={styles.h4H}>ᐁ</a>
    </section>
  );
};
