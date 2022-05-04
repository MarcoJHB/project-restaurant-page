
function about() {
  const element = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const hero = document.createElement("div");
  hero.id = "hero";
  h1.innerHTML = "Contact";
  p.innerHTML = "Contact us today";
  element.id = "about-container";
  element.style.backgroundImage = "url('https://images.pexels.com/photos/8263353/pexels-photo-8263353.jpeg?cs=srgb&dl=pexels-cottonbro-8263353.jpg&fm=jpg')";
  hero.appendChild(h1);
  hero.appendChild(p);
  const content = document.querySelector("#content");
  element.appendChild(hero);
  content.appendChild(element);
  return element;
}

export default about;
