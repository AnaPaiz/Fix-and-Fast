/Código para e1 scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("fixed", window.scrollY > 0);
});

/*Código para el menu con responsive 800px */

