function home() {
  const element = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const a = document.createElement("a");
  const hero = document.createElement("div");
  
  hero.id = "hero";
  element.id = "element";
  element.style.backgroundImage = "url('https://images.pexels.com/photos/7234226/pexels-photo-7234226.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7234226.jpg&fm=jpg')"; 
  h1.innerHTML = "Gourmet Popcorn 🍿";
  p.innerHTML = "Popcorn with salt? What is this - 28 June 1914? Archdukes eat gourmet popcorn.";

  hero.appendChild(ul);

  hero.appendChild(h1);
  hero.appendChild(p);

  // const menu = ["Home", "Menu", "Contact"];
  // menu.forEach((link) => {
  //   let li = document.createElement("li");
  //   li.innerHTML = link;
  //   ul.appendChild(li);
  //   console.log(link);
  // });
  // const content = document.querySelector("#content");
  const content = document.querySelector("#content");
  element.appendChild(hero);
  content.appendChild(element);
  console.log("LOADED Home Page....");
  return element;
}


export default home;
