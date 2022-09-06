import barkIMG from "../assets/homebark.jpg";
import movieIMG from "../assets/homemovies.jpg";
import sneakerIMG from "../assets/homesneakers.jpg";
import geosphereIMG from "../assets/geosphere.jpg";

import barkV from "../assets/barkV.mp4";
import movV from "../assets/movV.mp4";
import sneakV from "../assets/ikomers.mp4";
import geosphereV from "../assets/geosphereV.mp4";

let sneaker = {
  deployURL: "https://sneakers-xxre.vercel.app",
  repo: "https://github.com/txakurhub/pfinal_client",
  text: "Application for the purchase of sneakers. Supports payment with QR, MercadoPago and PayPal. It has both a user panel where you can review profile, favorites, shopping cart and purchase history, and an administrator panel with sales statistics, stock, categories and users where to create, search, edit or delete any of the above.",
  video: sneakV,
  snapshot: sneakerIMG,
  title: "E-Commerce",
};

let bark = {
  deployURL: "https://barkleaks.vercel.app/",
  repo: "https://github.com/txakurhub/PI-Dogs",
  text: "Development of a SPA using React for the Front End and Redux as stage managment. The components were developed with CSS without the externals libraries. It consumes data from an API through a Back End developed in NodeJS using Express, Sequelize and PostgreSQL, adding new functionalities to the original API.",
  video: barkV,
  snapshot: barkIMG,
  title: "BarkLeaks",
};
let movie = {
  deployURL: "https://moviesapp-one.vercel.app/",
  repo: "https://github.com/txakurhub/movie-app",
  text: "Developed a web application for a movie catalog showing information on 500+ movies. The app works through an API and it was developed with Javascript, React, Redux and CSS.",
  video: movV,
  snapshot: movieIMG,
  title: "MoviesApp",
};
let globe = {
  deployURL: "https://geosphere.vercel.app/",
  repo: "https://github.com/txakurhub/GeoSphere",
  text: "Geosphere projection in which we can visualize the data of each country as region, economy, income and population in an interactive way. It was developed with Javascript, CSS, HTML and D3 library.",
  video: geosphereV,
  snapshot: geosphereIMG,
  title: "GeoSphere",
};
let projects = [sneaker, globe, bark, movie];

export default projects;
