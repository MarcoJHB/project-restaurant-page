// import headerTotalLogoImage from "../assets/imgs/header-total-logo.png";
// import menuWebImage from "../assets/imgs/menu-web.png";
// import aboutWebImage from "../assets/imgs/about-web.png";

const headerDiv = function () {
  const header = document.createElement("header");
  header.id = "header";

  const menuLinks = document.createElement("div");
  menuLinks.id = "menuLinks";

  const homeLink = document.createElement("p");
  homeLink.innerHTML = "Home";
  homeLink.id = "home-link";
  menuLinks.appendChild(homeLink);

  const menuLink = document.createElement("p");
  menuLink.innerHTML = "Menu";
  menuLink.id = "menu-link";
  menuLinks.appendChild(menuLink);

  const aboutLink = document.createElement("p");
  aboutLink.innerHTML = "About";
  aboutLink.id = "about-link";
  menuLinks.appendChild(aboutLink);

  header.appendChild(menuLinks);

  const logo = document.createElement("p");
  logo.innerHTML = "🍿PopCap";
  logo.id = "logo";
  header.appendChild(logo);


  let today = new Date();
  let currTime = today.getHours() + ":" + today.getMinutes()
  const rightMenu = document.createElement("div");
  rightMenu.id = "rightMenu";
  const time = document.createElement("p");
  const booking = document.createElement("p");
  time.id = "time";
  booking.id = "booking";
  time.innerHTML = `${currTime} we're open`;
  booking.innerHTML = "Make a reservation";
  rightMenu.appendChild(time);
  rightMenu.appendChild(booking);
  header.appendChild(rightMenu);

  return header;
};

export default headerDiv;
