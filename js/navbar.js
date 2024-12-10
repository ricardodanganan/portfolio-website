const menuHolder = document.getElementById("menuHolder");
const menuDrawer = document.getElementById("menuDrawer");
const siteBrand = document.getElementById("siteBrand");

function menuToggle() {
  if (menuDrawer.style.transform === "translateX(0%)") {
    menuDrawer.style.transform = "translateX(-100%)";
    menuHolder.classList.add("sticky-top");
  } else {
    menuDrawer.style.transform = "translateX(0%)";
    menuHolder.classList.remove("sticky-top");
  }
}



