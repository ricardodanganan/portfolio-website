const menuHolder = document.getElementById("menuHolder");
const menuDrawer = document.getElementById("menuDrawer");
const siteBrand = document.getElementById("siteBrand");

function navbarMenuToggle() {
  const menuDrawer = document.getElementById("navbar-menuDrawer");
  const overlay = document.getElementById("navbar-overlay");

  if (menuDrawer.style.transform === "translateX(0%)") {
      menuDrawer.style.transform = "translateX(-100%)";
      overlay.style.display = "none"; // Hide overlay
  } else {
      menuDrawer.style.transform = "translateX(0%)";
      overlay.style.display = "block"; // Show overlay
  }
}

function closeMenu() {
  const menuDrawer = document.getElementById("navbar-menuDrawer");
  const overlay = document.getElementById("navbar-overlay");

  menuDrawer.style.transform = "translateX(-100%)";
  overlay.style.display = "none"; // Hide overlay
}
