const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

// An example of adding many questions and answers
const answers = {
    "hello": "Hi! How can I help you today?",
    "how are you": "I'm doing great, thank you for asking!",
    "what is your name": "I am Rana AI, your friendly web bot.",
    "bye": "Goodbye!Useless Have a Bad day!",
    "what is the time": "I don't know the exact time, but it's always a good time to chat!",
    "can you help me?": "Yes, of course! Ask me anything, and I'll try to assist.",
    // Let's generate more questions and answers (this is just an example of how to add them)
    "what is your purpose": "My purpose is to help answer questions and assist you in any way I can.",
    "what do you know": "I know a lot about different topics, ask me anything!",
    "who made you": "I was created by developers to assist and provide answers to your questions.",
    "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    "what is your favorite color": "I don't have a favorite color, but I like blue!",
    // Add more questions and answers manually...
};

// Function to generate 1000 Q&A pairs for demonstration (this will auto-generate 1000 questions)
for (let i = 1; i <= 1000; i++) {
    answers[`question ${i}`] = `This is answer number ${i}`;
}

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
