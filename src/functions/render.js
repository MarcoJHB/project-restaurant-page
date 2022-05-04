// removes all content style attributes and removes all children until only header remains

const render = function() {
  console.log("Attempting to load render()....");
    const content = document.querySelector("#content");
    content.style="";
  console.log(content.children.length);
    
    while(content.children.length > 1) {
        content.children[1].remove();
  console.log("Removed all children....");

    }
}   

export default render;