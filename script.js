const closeOpen = document.querySelector(".close_open");
const overlayElement = document.querySelector(".overlay2");
const navItems = document.querySelector(".nav_links");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

closeOpen.addEventListener("click", () => {
  navItems.classList.toggle("active");
  overlayElement.classList.toggle("active");

  close.style.display = "block";
  open.style.display = "none";
});

overlayElement.addEventListener("click", () => {
  navItems.classList.toggle("active");
  overlayElement.classList.toggle("active");

  close.style.display = "none";
  open.style.display = "block";
});
