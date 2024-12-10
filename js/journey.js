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

// Open Modal
function educationOpenModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Close Modal
function educationCloseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close Modal When Clicking Outside
window.onclick = function (event) {
    const modals = document.querySelectorAll(".education-modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

