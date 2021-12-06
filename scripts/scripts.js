// Variables
const container = document.querySelector(".container");
const section = document.querySelector("ul");

// Animation hover
VanillaTilt.init(container, {
  max: 25,
  speed: 400,
});

// Cursor
const divCursor = document.querySelector("div");
const links = document.querySelectorAll("a");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  cursor.setAttribute(
    "style",
    `top: ${event.pageY}px; left: ${event.pageX}px;`
  );
});

for (let link of links) {
  link.addEventListener("mouseover", (event) => {
    divCursor.classList.remove("cursor");
    event.target.style.cursor = "pointer";
  });
}

section.addEventListener("mouseleave", () => {
  divCursor.classList.add("cursor");
});

document.addEventListener("click", (event) => {
  if (!section.contains(event.target)) {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  }
});
