const navMobileWrapper = document.querySelector(
  ".nav-mobile-wrapper"
);

document.querySelector(".nav-bars").onclick = () => {
  navMobileWrapper.classList.toggle("active");
};
