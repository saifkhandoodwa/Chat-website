// Get DOM elements
const sendButton = document.getElementById('send-button');
const userMessageInput = document.getElementById('user-message');
const chatBox = document.getElementById('chat-box');

// Function to send message
function sendMessage() {
    const userMessage = userMessageInput.value.trim();
    if (userMessage !== "") {
        // Display user's message
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.innerText = userMessage;
        chatBox.appendChild(userMessageElement);

        // Clear input field
        userMessageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom

        // Simulate bot reply
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot-message');
            botMessageElement.innerText = "Bot: " + userMessage; // Simple echo bot
            chatBox.appendChild(botMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
        }, 1000); // Simulate delay for bot response
    }
}

// Event listener for send button
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key to send message
userMessageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});