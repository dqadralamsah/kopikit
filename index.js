// Mobile Navbar
const navMobileWrapper = document.querySelector(
  ".nav-mobile-wrapper"
);

document.querySelector(".nav-bars").onclick = () => {
  navMobileWrapper.classList.toggle("active");
};

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints
  breakpoints: {},
});
