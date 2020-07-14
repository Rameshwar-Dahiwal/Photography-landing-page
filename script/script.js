const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-items-container");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
