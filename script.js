// **Store your Gemini API Key (replace with your own)**
const API_KEY = "AIzaSyDVpGi0fmYlB6lx2nAlt7VJgL6aUS-Iu1g";

// Function to send user message
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; 

    // Display user message
    displayMessage(userInput, "user");

    // Make API call to Gemini
    fetch("https://ai.google.com/apis/gemini/v1/generateContent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "context": fetchChatHistory(), // Fetch previous conversation
            "prompt": userInput
        })
    })
    .then(response => response.json())
    .then(data => displayMessage(data.result.text, "bot"))
    .catch(error => console.error("Error:", error));
}

// Helper functions to display messages and handle chat history
function displayMessage(message, type) {
    // ... (code to create message elements and add to chat window)
}

function fetchChatHistory() {
    // ... (code to retrieve messages from chat window or storage)
}
