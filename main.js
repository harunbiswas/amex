import "./style.css";

// slick slider
$(".fade").slick({
  dots: true,
  infinite: true,
  speed: 5000,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
});

// scroll
const header = document.querySelector(".header");
const brandImg = document.querySelector(".brand img");
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("scroll");
    brandImg.src =
      "https://www.atmex.com.au/wp-content/uploads/2021/02/@mex-white-red-logo-220x84.png";
    scrollTop.classList.add("active");
  } else if (window.scrollY < 150) {
    header.classList.remove("scroll");
    brandImg.src =
      "https://www.atmex.com.au/wp-content/uploads/2021/03/logo-with-whitge-bg-120x91.png";
    scrollTop.classList.remove("active");
  }
});

scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
