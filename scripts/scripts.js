// Variables
const section = document.querySelector(".container");

// Animation hover
VanillaTilt.init(section, {
  max: 25,
  speed: 400,
});

// Cursor
const divCursor = document.querySelector("div");
const linkable = document.querySelectorAll("a");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  cursor.setAttribute(
    "style",
    `top: ${event.pageY}px; left: ${event.pageX}px; display: block;`
  );
});

for (let link of linkable) {
  link.addEventListener("mouseover", (event) => {
    divCursor.classList.remove("cursor");
    event.target.style.cursor = "pointer";
  });
}

section.addEventListener("mouseleave", () => {
  divCursor.classList.add("cursor");
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
