import barkIMG from "../assets/homebark.jpg";
import movieIMG from "../assets/homemovies.jpg";
import sneakerIMG from "../assets/homesneakers.jpg";
import geosphereIMG from "../assets/geosphere.jpg";
import envitedIMG from "../assets/event1.jpg"


import barkV from "../assets/barkV.mp4";
import movV from "../assets/movV.mp4";
import sneakV from "../assets/ikomers.mp4";
import geosphereV from "../assets/geosphereV.mp4";



let sneaker = {
  deployURL: "https://sneakers-xxre.vercel.app",
  repo: "https://github.com/txakurhub/pfinal_client",
  text: "Application for the purchase of sneakers. Supports payment with QR, MercadoPago and PayPal. It has both a user panel where you can review profile, favorites, shopping cart and purchase history, and an administrator panel with sales statistics, stock, categories and users where to create, search, edit or delete any of the above.",
  video: sneakV,
  tech: ["Javascript", "React", "Redux", "Tailwind", "Node", "Express", "Firebase", "PostgreSQL", "Sequelize"],
  snapshot: sneakerIMG,
  title: "Sneakers E-Commerce",
};

let bark = {
  deployURL: "https://barkleaks.vercel.app/",
  repo: "https://github.com/txakurhub/PI-Dogs",
  text: "A Single Page Application where you can view, search, sort, and filter between more than 500 dog breeds. You can also create, edit or delete your own breed!",
  video: barkV,
  tech: ["Javascript", "React", "Redux", "CSS", "Node", "Express", "PostgreSQL", "Sequelize"],
  snapshot: barkIMG,
  title: "BarkLeaks",
};
let movie = {
  deployURL: "https://moviesapp-one.vercel.app/",
  repo: "https://github.com/txakurhub/movie-app",
  text: "Web application for a movie catalog showing information on 500+ movies.",
  video: movV,
  tech: ["Javascript", "React", "Redux", "CSS", "HTML"],
  snapshot: movieIMG,
  title: "MoviesApp",
};
let globe = {
  deployURL: "https://geosphere.vercel.app/",
  repo: "https://github.com/txakurhub/GeoSphere",
  text: "Geosphere projection in which we can visualize the data of each country as region, economy, income and population in an interactive way.",
  video: geosphereV,
  tech:["Javascript", "React", "D3", "CSS", "HTML"],
  snapshot: geosphereIMG,
  title: "GeoSphere",
};

let envited = {
  video: "",
  repo: "https://github.com/txakurhub/envited-technical-assessment",
  text: "Technical Assessment to test front end skill (React js, CSS, HTML), creativity and ability to duplicate Figma designs in a web application, code quality, and attention to detail under time constraints.",
  snapshot: envitedIMG,
  tech: ["Javascript", "React", "TailwindCSS", "Figma", "CSS", "HTML"],
  title: "Envited Challenge"
}



let projects = [sneaker, globe, bark, movie, envited];

export default projects;
