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


// Add a function that add a modal pop-up when the user sends a message
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !email || !message) {
      displayConfirmation("Please fill in all fields.", "error");
      return;
  }

  displayConfirmation(`Thank you, ${name}! Your message has been sent successfully.`, "success");

  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("messageInput").value = "";
}

function displayConfirmation(message, type) {
  const modal = document.getElementById("confirmationModal");
  const modalMessage = document.getElementById("confirmationMessage");

  modalMessage.textContent = message;
  modalMessage.className = `confirmation-message confirmation-${type}`;

  modal.style.display = "block";

  setTimeout(() => {
      modal.style.display = "none";
  }, 2000); // Automatically close after 2 seconds
}
