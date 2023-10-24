const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  btn.classList.toggle("slide");
  if (btn.classList.contains("slide")) video.pause();
  else video.play();
});

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
