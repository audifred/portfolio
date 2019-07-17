let nav = document.querySelector(".nav");
let navList = document.querySelectorAll(".menu-nav > li > a");
let topNav = nav.offsetTop;

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");

  document.querySelector(".menu-nav").classList.toggle("change");
}

function findTopNav() {
  if (window.scrollY >= topNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    // document.querySelector(".projects h2").classList.add("sticky");
    document.querySelector(".nav").classList.add("sticky");
  } else {
    document.body.style.paddingTop = 0;
    // document.querySelector(".projects h2").classList.remove("sticky");
    document.querySelector(".nav").classList.remove("sticky");
  }
}

function closeMenu() {
  document.getElementById("menu").classList.remove("change");

  document.querySelector(".menu-nav").classList.remove("change");
}

window.addEventListener("scroll", findTopNav);

const initialScroll = new SmoothScroll('.greet a[href*="#"]', {
  speed: 900,
  offset: 25
});

const scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 900,
  offset: 75
});
