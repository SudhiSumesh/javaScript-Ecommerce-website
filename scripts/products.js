//responsive-navbar
const homeburggerBtn = document.getElementById("homeburgger_btn");
const responsiveNavMenu = document.getElementById("nav_menu");
const navCloseBtn = document.getElementById("nav_close");

homeburggerBtn.addEventListener("click", () => {
  responsiveNavMenu.classList.remove("d-none");
  homeburggerBtn.classList.add("d-none");
});
navCloseBtn.addEventListener("click", () => {
  responsiveNavMenu.classList.add("d-none");
  homeburggerBtn.classList.remove("d-none");
});

//change navbarcolor when scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("bg-white");
  } else {
    document.getElementById("navbar").classList.remove("bg-white");
  }
  // scroll effect for card
  // if (document.documentElement.scrollTop > 350) {
  //   document.getElementById("card-2").classList.add("slideUp");
  // } else {
  //   document.getElementById("card-2").classList.remove("slideUp");
  // }
};
