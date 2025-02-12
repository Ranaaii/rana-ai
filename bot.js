const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

const answers = {
    "hello": "Hi! How can I help you today?",
    "how are you": "I'm doing great, thank you for asking!",
    "what is your name": "I am Rana AI, your friendly web bot.",
    "bye": "Goodbye! Have a great day!"
};

function askQuestion() {
    const userQuestion = userInput.value.toLowerCase();
    if (userQuestion) {
        const answer = answers[userQuestion] || "Sorry, I don't understand that.";
        messages.innerHTML += `<p><strong>You:</strong> ${userQuestion}</p>`;
        messages.innerHTML += `<p><strong>Bot:</strong> ${answer}</p>`;
        userInput.value = "";
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}