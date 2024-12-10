function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form input values
    const name = document.getElementById("contact-form-name").value.trim();
    const email = document.getElementById("contact-form-email").value.trim();
    const message = document.getElementById("contact-form-message").value.trim();
    const notificationBar = document.getElementById("contact-form-notification-bar");

    // Validate the form inputs
    if (!name || !email || !message) {
        // Display an error notification
        displayNotification("Please fill in all fields.", "error");
        return;
    }

    // Display a success notification
    displayNotification(`Thank you, ${name}! Your message has been sent successfully.`, "success");

    // Clear the form inputs
    document.getElementById("contact-form-name").value = "";
    document.getElementById("contact-form-email").value = "";
    document.getElementById("contact-form-message").value = "";
}

function displayNotification(message, type) {
    const notificationBar = document.getElementById("contact-form-notification-bar");
    notificationBar.textContent = message;

    // Set the notification type (success or error)
    if (type === "error") {
        notificationBar.classList.add("error");
    } else {
        notificationBar.classList.remove("error");
    }

    // Show the notification
    notificationBar.classList.add("show");

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notificationBar.classList.remove("show");
    }, 3000);
}
