function openCVViewer() {
    const modal = document.getElementById("cvViewerModal");
    const iframe = document.getElementById("cvViewerIframe");

    // Set the iframe's source to the CV file
    iframe.src = "CV/Ricardo_Danganan_Jnr_CV.pdf";

    // Show the modal
    modal.style.display = "block";
    modal.classList.add("fade-in");
    modal.classList.remove("fade-out");
}

function closeCVViewer() {
    const modal = document.getElementById("cvViewerModal");
    const iframe = document.getElementById("cvViewerIframe");

    // Hide the modal
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal.style.display = "none";
        iframe.src = ""; // Clear the iframe source
    }, 300);
}

// Close the modal when clicking outside the content
window.addEventListener("click", (event) => {
    const modal = document.getElementById("cvViewerModal");
    if (event.target === modal) {
        closeCVViewer();
    }
});

// Close the modal with the Escape key
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modal = document.getElementById("cvViewerModal");
        if (modal.style.display === "block") {
            closeCVViewer();
        }
    }
});
