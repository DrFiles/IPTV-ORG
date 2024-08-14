// Smooth scrolling for buttons
document.querySelector('.download-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#download').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.get-api-key-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#api-key').scrollIntoView({
        behavior: 'smooth'
    });
});

// Handle API key request form submission
document.querySelector('#api-key-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add AJAX or Fetch API code to submit the form data to your server
    alert('API Key requested successfully! Please check your email.');
});

// JavaScript code goes here
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Button was clicked!';
});
