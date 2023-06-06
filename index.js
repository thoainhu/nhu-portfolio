const headerWrap = document.querySelector(".header-wrap");
const education = document.querySelectorAll(".education .edu");
const barMenu = document.querySelector(".barMenu");
const menubarClick = document.querySelector(".header-wrap .header .menu");
window.onscroll = function () {
  let value = window.scrollY;
  if (value > 500) {
    headerWrap.classList.add("fixed");
  } else {
    headerWrap.classList.remove("fixed");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const linkScrolls = document.querySelectorAll(".header-wrap .header .menu .itemMenu");
  linkScrolls.forEach(function (linkScroll) {
    linkScroll.addEventListener("click", function (event) {
      event.preventDefault();
      const go = this.getAttribute("href");
      console.log(go);
      window.scrollTo({
        top: document.querySelector(go).offsetTop - 100,
        behavior: "smooth",
      });
    });
  });
  const boxScrolls = document.querySelectorAll(".boxScroll");
  boxScrolls.forEach(function (boxScroll) {
    boxScroll.addEventListener("click", function (event) {
      event.preventDefault();
      const go = this.getAttribute("href");
      console.log(go);
      window.scrollTo({
        top: document.querySelector(go).offsetTop - 100,
        behavior: "smooth",
      });
    });
  });
});
education.forEach((eduChoose) => {
  eduChoose.addEventListener("click", function () {
    education.forEach((element) => {
      element.classList.remove("showed");
    });
    eduChoose.classList.add("showed");
  });
});
barMenu.addEventListener("click", function () {
  barMenu.classList.toggle("active");
  menubarClick.classList.toggle("active");
});
let changeImgPj = document.querySelectorAll(".pjTravel .picLink .pjImg .pic");
let currentIndex = 0;
setInterval(() => {
  changeImgPj[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % changeImgPj.length;
  changeImgPj[currentIndex].classList.add("active");
}, 2000);
