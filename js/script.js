document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    alert("Thank you for your message! I'll get back to you soon.");
});
