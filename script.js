const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Sample questions and answers
const medicalQA = {
    "What is diabetes?": "diabetes is a health condition that affects how your body uses a type of sugar called glucose. When you eat, your body turns the food into glucose, which provides energy. However, in diabetes, something goes wrong with this process.There are two common types of diabetes:Type 1 Diabetes: In this type, your body doesn't make insulin. Insulin is like a key that helps glucose enter your cells to provide energy. Without insulin, glucose can't get inside, and it builds up in your blood.Type 2 Diabetes: In this type, your body still makes insulin, but it doesn't work well. It's like having a damaged key – the insulin can't unlock the cells to let glucose in.",
    "How to manage high blood pressure?": "Managing high blood pressure involves a combination of medication, diet, and lifestyle changes.",
    "What are the common symptoms of COVID-19?": "Common symptoms of COVID-19 include fever, cough, and difficulty breathing.",
    "How can I prevent the spread of the flu?": "You can prevent the spread of the flu by getting a flu shot, practicing good hand hygiene, and avoiding close contact with sick individuals.",
    "What is the recommended daily water intake for adults?": "The recommended daily water intake for adults is about 8-10 cups (64-80 ounces) of water per day.",
    "How do I know if I have a food allergy?": "If you suspect a food allergy, consult a healthcare professional. Common symptoms include hives, difficulty breathing, and digestive issues.",
    "What's the difference between a virus and a bacteria?": "Viruses are smaller than bacteria and can only replicate within host cells. Bacteria are single-celled microorganisms that can replicate independently.",
    "How can I improve my mental health?": "Improving mental health involves seeking support, maintaining a healthy lifestyle, and engaging in activities you enjoy. You may also try Support groups",
    "Give me ambulance number": "The ambulance number is 112",
};

function askQuestion() {
    const question = userInput.value.trim();
    if (question === '') return;

    // User's question
    appendMessage(question, true);

    // Find the answer from the medicalQA object
    const answer = medicalQA[question];
    if (answer) {
        // Bot's answer
        appendMessage(answer, false);
    } else {
        // If no answer is found
        appendMessage("I'm sorry, I don't have an answer for that question.", false);
    }

    userInput.value = '';
}

function appendMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initial greeting message
appendMessage("Hello! How can I assist you today?", false);
