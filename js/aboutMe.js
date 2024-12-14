function openCVViewer() {
    const modal = document.getElementById("cvViewerModal");
    const iframe = document.getElementById("cvViewerIframe");
    const fallback = document.getElementById("cvFallback");

    // Detect if the user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Show fallback for mobile
        iframe.style.display = "none";
        fallback.style.display = "flex"; // Use flex for centering
    } else {
        // Show iframe for desktop
        iframe.src = "CV/Ricardo_Danganan_Jnr_CV.pdf";
        iframe.style.display = "block";
        fallback.style.display = "none";
    }

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
        iframe.src = ""; // Clear iframe src for performance
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
