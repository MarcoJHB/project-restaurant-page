console.log("💩");

//entrypoint for the app

import "./styles/home.css";
import "./styles/menu.css";
import "./styles/navbar.css";
import "./styles/pageLoad.css";
import "./styles/animations.css";
import "./styles/about.css";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import render from "./functions/render";
import pageLoad from "./functions/pageLoad";
import firstLoad from "./functions/firstLoad";

console.log("Loading firstLoad....");
firstLoad();

const homeButton = document.querySelector("#home-link");
const menuButton = document.querySelector("#menu-link");
const aboutButton = document.querySelector("#about-link");

homeButton.addEventListener("click", function () {
  console.log("Attempting to load Home Page....");
  render();
  home();
  pageLoad();
});

menuButton.addEventListener("click", function () {
  console.log("Attempting to load menu Page....");
  render();
  menu();
  pageLoad();
});

aboutButton.addEventListener("click", function () {
  console.log("Attempting to load About Page....");
  render();
  about();
  pageLoad();
});
