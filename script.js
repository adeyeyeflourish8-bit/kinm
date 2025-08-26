// JavaScript for Kinmal Research Website

// Function to handle search input
document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Here you can implement the search functionality
    } else {
        alert('Please enter a search term.');
    }
});

// Function to handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});
