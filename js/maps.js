// Map Modal Elements
const mapModal = document.getElementById('mapModal'); // The map modal
const closeMapModalBtn = document.getElementById('closeMapModal'); // The close button inside the modal
let map; // The Leaflet map instance
let currentMarker; // Current marker on the map

// Function to open the map modal and show the map
function openMapModal(lat, lng, description) {
    // Display the modal
    mapModal.style.display = 'block'; // Make the modal visible
    mapModal.classList.add('fade-in'); // Add fade-in animation
    mapModal.classList.remove('fade-out'); // Remove fade-out class if present

    // Initialize the map if it hasn't been created yet
    if (!map) {
        map = L.map('map').setView([lat, lng], 13); // Center the map on the given coordinates

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        // Update the map's view if it has already been created
        map.setView([lat, lng], 13);
    }

    // Add or update the marker
    if (currentMarker) {
        map.removeLayer(currentMarker); // Remove the previous marker if it exists
    }
    currentMarker = L.marker([lat, lng]).addTo(map); // Add a new marker
    currentMarker.bindPopup(description).openPopup(); // Attach a popup to the marker
}

// Function to close the map modal
function closeMapModal() {
    mapModal.classList.remove('fade-in'); // Remove fade-in class
    mapModal.classList.add('fade-out'); // Add fade-out animation
    setTimeout(() => {
        mapModal.style.display = 'none'; // Hide the modal after the animation
    }, 300); // Match the fade-out animation duration
}

// Event listener for the close button
closeMapModalBtn.addEventListener('click', closeMapModal);

// Event listener to close the modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === mapModal) {
        closeMapModal();
    }
});

// Event listener to close the modal with the Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mapModal.style.display === 'block') {
        closeMapModal();
    }
});
