document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    // Function to animate progress bars
    const animateProgressBars = (entries, observer) => {
        entries.forEach((entry) => {
            const bar = entry.target;

            if (entry.isIntersecting) {
                const progress = bar.getAttribute("data-progress");
                let currentPercentage = 0;
                const skillPercentageElement = bar.parentElement.previousElementSibling.querySelector(".skill-percentage");

                // Incrementally fill progress bar
                const animate = setInterval(() => {
                    if (currentPercentage >= progress) {
                        clearInterval(animate);
                    } else {
                        currentPercentage++;
                        bar.style.width = `${currentPercentage}%`;
                        skillPercentageElement.textContent = `${currentPercentage}%`;
                    }
                }, 15); // Adjust speed here
            } else {
                // Reset progress bar when out of view
                bar.style.width = "0";
                bar.parentElement.previousElementSibling.querySelector(".skill-percentage").textContent = "0%";
            }
        });
    };

    // Intersection Observer to watch the progress bars
    const observer = new IntersectionObserver(animateProgressBars, {
        root: null, // Use viewport as root
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    progressBars.forEach((bar) => {
        observer.observe(bar);
    });
});
