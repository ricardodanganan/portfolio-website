document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const isAboveViewport = (el) => {
        const elementBottom = el.getBoundingClientRect().bottom;
        return elementBottom < 0; // Checks if the element's bottom is above the viewport
    };

    const displayScrollElement = (element) => {
        element.classList.add('in-view');
        element.classList.remove('hidden-above'); // Ensure it's visible if it was hidden
    };

    const hideScrollElement = (element) => {
        element.classList.remove('in-view');
    };

    const hideAboveViewport = (element) => {
        element.classList.add('hidden-above'); // Add a class to hide elements above the viewport
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }

            // Check if the element is above the viewport and hide it
            if (isAboveViewport(el)) {
                hideAboveViewport(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check on page load
    handleScrollAnimation();
});
