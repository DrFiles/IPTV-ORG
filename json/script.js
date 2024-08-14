// Load JSON into pre tag
document.getElementById('loadButton').addEventListener('click', () => {
    fetch('../api/channels.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jsonOutput').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('jsonOutput').textContent = 'Error loading JSON file.';
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadButton');
    const saveButton = document.getElementById('saveButton');
    const jsonOutput = document.getElementById('jsonOutput');

    // Function to load JSON data
    function loadJSON() {
        // Example JSON data
        const jsonData = {
            name: "John Doe",
            age: 30,
            city: "New York"
        };

        // Display JSON data in the content-editable element
        jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
    }

    // Function to save JSON data
    function saveJSON() {
        try {
            // Get the edited JSON from the content-editable element
            const editedContent = jsonOutput.textContent;

            // Parse the edited content to validate it as JSON
            JSON.parse(editedContent);

            // Save the valid JSON content (e.g., send it to a server or local storage)
            console.log("JSON saved:", editedContent);

            // Optionally, provide feedback to the user
            alert('JSON saved successfully!');
        } catch (e) {
            alert('Invalid JSON. Please correct the errors.');
        }
    }

    // Event listeners for buttons
    loadButton.addEventListener('click', loadJSON);
    saveButton.addEventListener('click', saveJSON);
});
