// Show the button when scrolling down
window.onscroll = function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
