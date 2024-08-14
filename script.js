// Specify the path to the main.js file
const filePath = 'day/main.js';

fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Get the code-content element
        const codeElement = document.getElementById('code-content');
        // Set the content of the code element
        codeElement.textContent = data;
    })
    .catch(error => {
        console.error('Error fetching the file:', error);
    });
