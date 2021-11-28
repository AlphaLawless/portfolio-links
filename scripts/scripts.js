// Animation hover
VanillaTilt.init(document.querySelectorAll(".container"), {
  max: 25,
  speed: 400,
});

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  cursor.setAttribute(
    "style",
    `top: ${event.pageY}px; left: ${event.pageX}px;`
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
