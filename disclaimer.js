// Disclaimer modal functionality
const modal = document.getElementById('disclaimerModal');
const btn = document.getElementById('disclaimerBtn');

// Show modal on page load
window.addEventListener('load', function() {
    modal.style.display = 'flex';
});

// Hide modal when button is clicked
btn.addEventListener('click', function() {
    modal.style.display = 'none';
});
