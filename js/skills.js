document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    // Animate progress bars on page load
    progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = `${progress}%`;
    });
});
