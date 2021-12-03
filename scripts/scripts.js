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
    `top: ${event.pageY + 2}px; left: ${event.pageX - 2}px; display: block;`
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
