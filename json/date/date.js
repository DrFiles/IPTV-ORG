// Call updateDate on page load to display the current date
function updateDate() {
    const today = new Date();
    const dateElement = document.getElementById('currentDate');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}

window.addEventListener('load', updateDate);