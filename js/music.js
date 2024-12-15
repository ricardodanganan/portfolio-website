document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    const musicControl = document.getElementById("musicControl");
    const musicIcon = document.querySelector(".music-icon");

    // Toggle play/pause on icon click
    musicControl.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.log("Playback failed:", error);
            });
            musicIcon.src = "img/on-music.gif"; // Change icon to indicate music is playing
        } else {
            audio.pause();
            musicIcon.src = "img/off-music-1.jpg"; // Change icon to indicate music is paused
        }
    });
});
