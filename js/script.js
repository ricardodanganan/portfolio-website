document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    const musicControl = document.getElementById("musicControl");
    const musicIcon = document.querySelector(".music-icon");

    // Ensure autoplay on load
    const playMusic = () => {
        audio.play().catch((error) => {
            console.log("Autoplay failed due to browser restrictions:", error);
        });
    };

    playMusic(); // Try to play music on page load

    // Toggle play/pause on icon click
    musicControl.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            musicIcon.src = "img/on-music.gif"; // Change icon to indicate music is playing
        } else {
            audio.pause();
            musicIcon.src = "img/off-music-1.jpg"; // Change icon to indicate music is paused
        }
    });
});
