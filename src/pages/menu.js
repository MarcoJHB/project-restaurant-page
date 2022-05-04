

function menu() {
  const element = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const hero = document.createElement("div");
  hero.id = "hero";
  h1.innerHTML = "PCP Menu";
  p.innerHTML = "Below is our menu";
  element.id = "element";
  element.style.backgroundImage = "url('https://images.pexels.com/photos/7234382/pexels-photo-7234382.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7234382.jpg&fm=jpg')";
  hero.appendChild(h1);
  hero.appendChild(p);
  const content = document.querySelector("#content");
  element.appendChild(hero);
  content.appendChild(element);
  return element;
}

export default menu;
