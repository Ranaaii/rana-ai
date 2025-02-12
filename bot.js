const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

// Predefined questions and answers
const answers = {
    "hello": "Hi! How can I help you today?",
    "how are you": "I'm doing great, thank you for asking!",
    "what is your name": "I am Rana AI, your friendly web bot.",
    "bye": "Goodbye! Have a great day!",
    "what is the time": "I don't know the exact time, but it's always a good time to chat!",
    "can you help me?": "Yes, of course! Ask me anything, and I'll try to assist.",
    "what is your purpose": "My purpose is to help answer questions and assist you in any way I can.",
    "what do you know": "I know a lot about different topics, ask me anything!",
    "who made you": "I was created by developers to assist and provide answers to your questions.",
    "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    "what is your favorite color": "I don't have a favorite color, but I like blue!",
    // Default response in case API also fails
    "default": "I couldn't find an answer. Please try rephrasing your question."
};

// Function to fetch answer from DuckDuckGo API
async function getDuckDuckGoAnswer(query) {
    try {
        const response = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json`);
        const data = await response.json();
        return data.AbstractText || null; // Return the abstract text if available
    } catch (error) {
        console.error("Error fetching answer:", error);
        return null;
    }
}

// Function to handle user input and return a response
async function askQuestion() {
    const userQuestion = userInput.value.toLowerCase();
    if (userQuestion) {
        messages.innerHTML += `<p><strong>You:</strong> ${userQuestion}</p>`;

        // Check predefined answers first
        let answer = answers[userQuestion];

        if (!answer) {
            // If not found, fetch from API
            answer = await getDuckDuckGoAnswer(userQuestion);
        }

        // If API also doesn't have an answer, use default response
        if (!answer) {
            answer = answers["default"];
        }

        messages.innerHTML += `<p><strong>Bot:</strong> ${answer}</p>`;
        userInput.value = "";
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}
