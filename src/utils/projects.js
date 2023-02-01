// IMAGES
import barkIMG from "../assets/homebark.jpg";
import movieIMG from "../assets/homemovies.jpg";
import sneakerIMG from "../assets/homesneakers.jpg";
import geosphereIMG from "../assets/geosphere.jpg";
import envitedIMG from "../assets/event1.jpg";
import gorentIMG from "../assets/gorent.jpg";
import gravityIMG from "../assets/gravity.PNG";

// VIDEOS
import barkV from "../assets/barkV.mp4";
import movV from "../assets/movV.mp4";
import sneakV from "../assets/ikomers.mp4";
import geosphereV from "../assets/geosphereV.mp4";
import gorentV from "../assets/gorent.mp4";
import gravityV from "../assets/gravityV.mp4";

// OBJ
let sneaker = {
  deployURL: "https://sneakers-xxre.vercel.app",
  repo: "https://github.com/txakurhub/pfinal_client",
  text: "Application for Sneaker Purchase. Supports QR, MercadoPago, and PayPal payments. Features a user panel to review profile, favorites, shopping cart, and purchase history, and an administrative panel with sales statistics, inventory, categories, and users, allowing you to create, search, edit, or delete any of the above.",
  video: sneakV,
  tech: [
    "Javascript",
    "React",
    "Redux",
    "Tailwind",
    "Node",
    "Express",
    "Firebase",
    "PostgreSQL",
    "Sequelize",
  ],
  snapshot: sneakerIMG,
  title: "Sneakers E-Commerce",
};

let bark = {
  deployURL: "https://barkleaks.vercel.app/",
  repo: "https://github.com/txakurhub/PI-Dogs",
  text: "Discover the world of canines like never before with BarkLeaks. Browse through information on over 500 breeds, including detailed descriptions, and easily view, search, sort, and filter through them. You can also create, edit, and delete your own breeds.",
  video: barkV,
  tech: [
    "Javascript",
    "React",
    "Redux",
    "CSS",
    "Node",
    "Express",
    "PostgreSQL",
    "Sequelize",
  ],
  snapshot: barkIMG,
  title: "BarkLeaks",
};
let movie = {
  deployURL: "https://moviesapp-one.vercel.app/",
  repo: "https://github.com/txakurhub/movie-app",
  text: "MovieApp displays title, genre, and description for over 500+ movies. A simple and straightforward interface for discovering movies.",
  video: movV,
  tech: ["Javascript", "React", "Redux", "CSS", "HTML"],
  snapshot: movieIMG,
  title: "MoviesApp",
};
let globe = {
  deployURL: "https://geosphere.vercel.app/",
  repo: "https://github.com/txakurhub/GeoSphere",
  text: "Experience data visualization like never before with our Geosphere projection. Explore the regions, economies, incomes, and populations of countries in an interactive and engaging manner.",
  video: geosphereV,
  tech: ["Javascript", "React", "D3", "CSS", "HTML"],
  snapshot: geosphereIMG,
  title: "GeoSphere",
};

let gorent = {
  deployURL:
    "https://expo.dev/@txakur/go-rent?serviceType=classic&distribution=expo-go",
  video: gorentV,
  repo: "https://github.com/txakurhub/GoRent",
  text: "GoRent streamlines the property buying, renting, and selling process. It offers a user-friendly interface with a vast selection of listings, complete with high-quality photos and detailed descriptions, and powerful search filters.",
  snapshot: gorentIMG,
  tech: [
    "React Native",
    "Redux",
    "Javascript",
    "Expo",
    "Figma",
    "Node",
    "Express",
    "JWT",
    "Sequelize",
    "PostgreSQL",
  ],
  title: "Go Rent",
};

let envited = {
  video: "",
  repo: "https://github.com/txakurhub/envited-technical-assessment",
  text: "The Technical Assessment aims to evaluate your front-end skills (including React.js, CSS, and HTML), creativity, ability to accurately recreate Figma designs within a web application, coding standards, and attention to detail, all within specified time constraints.",
  snapshot: envitedIMG,
  tech: ["Javascript", "React", "TailwindCSS", "Figma", "CSS", "HTML"],
  title: "Envited Challenge",
};

let gravity = {
  video: gravityV,
  repo: "Private",
  text: "Front-end development for the website, utilizing React to create Figma-based components and styling them with TailwindCSS. The result is a fully responsive website.",
  snapshot: gravityIMG,
  tech: ["Javascript", "React", "TailwindCSS", "Figma", "CSS", "HTML"],
  title: "Gravity Web Page",
};

let projects = [gravity, sneaker, gorent, globe, envited, movie, bark];

export default projects;
