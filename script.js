
// Para anaimation
var typed = new Typed('#element', {
    strings: ['Web Developer','Front-end Dev','Back-end Dev','Designer.'],
    typeSpeed:150,
  });

// Toggle-btn (light to dark mode)
let content = document.getElementsByTagName("body")[0];
let darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
