const menuHolder = document.getElementById("menuHolder");
const menuDrawer = document.getElementById("menuDrawer");
const siteBrand = document.getElementById("siteBrand");

function navbarMenuToggle() {
  const menuDrawer = document.getElementById("navbar-menuDrawer");
  if (menuDrawer.style.transform === "translateX(0%)") {
      menuDrawer.style.transform = "translateX(-100%)";
  } else {
      menuDrawer.style.transform = "translateX(0%)";
  }
}
