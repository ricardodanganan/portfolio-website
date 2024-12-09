const texts = ["4th Year Computing Student", "IT Management", "Future IT Professional"];
let index = 0;

const animatedText = document.getElementById("animated-text");

function changeText() {
    // Start fade-out
    animatedText.style.opacity = 0;
    
    setTimeout(() => {
        // Change the text after fade-out is complete
        index = (index + 1) % texts.length;
        animatedText.textContent = texts[index];

        // Start fade-in
        animatedText.style.opacity = 1;
    }, 1000); // Match the fade-out duration (1 second)
}

// Initialize the text
animatedText.textContent = texts[index];
animatedText.style.opacity = 1; // Start with the first text visible

// Run the function every 4 seconds (3 seconds visible + 1 second fade-out)
setInterval(changeText, 4000);


document.querySelector('.scroll-indicator a').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start' // Scrolls to the top of the section
    });
});
