let threeLines = document.querySelector(".burger-resp");
let navList = document.querySelector(".left");
let search = document.querySelector(".right");
let navbar = document.querySelector(".container");

threeLines.addEventListener("click", () => {
  //   navList.classList.toggle("short");

  navList.classList.toggle("showHide-resp");
  search.classList.toggle("showHide-resp");
  navbar.classList.toggle("h-nav-resp");
});
