// Scroll Animation for Timeline Items
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".education-timeline-item");

    // Function to add 'visible' class when the item comes into view
    const scrollAnimations = () => {
        const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% of the viewport is reached

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerPoint) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    };

    // Attach scroll listener
    window.addEventListener("scroll", scrollAnimations);

    // Run on page load to account for already visible items
    scrollAnimations();
});

// Open Modal with Fade-In Effect
function educationOpenModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Ensure it's visible
        modal.classList.add("fade-in");
        modal.classList.remove("fade-out");
    }
}

// Close Modal with Fade-Out Effect
function educationCloseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        setTimeout(() => {
            modal.style.display = "none"; // Hide modal after fade-out completes
        }, 300); // Match the transition duration in CSS
    }
}

// Close Modal When Clicking Outside
window.onclick = function (event) {
    const modals = document.querySelectorAll(".education-modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
};

// Key Escape to Close Modal
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll(".education-modal");
        modals.forEach(modal => {
            if (modal.style.display === "block") {
                modal.classList.remove("fade-in");
                modal.classList.add("fade-out");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    }
});
