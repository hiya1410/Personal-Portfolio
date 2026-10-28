console.log("JavaScript connected");

/* Dark mode toggle */
var themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

/* Rule-based chatbot (no APIs, fetch, or libraries) */
var chatMessages = document.getElementById("chatMessages");
var chatInput = document.getElementById("chatInput");
var chatSend = document.getElementById("chatSend");

var chatbotRules = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    reply: "Hello! I am Hiya Jain's Portfolio Assistant. Ask about education, skills, projects, or contact details. Type help for ideas."
  },
  {
    keywords: ["who am i", "who are you", "about", "yourself", "your name", "name"],
    reply: "I am Hiya Jain, a 2nd year (3rd semester) BTech CSE (Core) student at JECRC University, Jaipur, and an aspiring AI Engineer."
  },
  {
    keywords: ["education", "college", "university", "course", "semester", "year", "btech", "cse", "jecrc"],
    reply: "Hiya Jain is a 2nd year (3rd semester) BTech CSE (Core) student at JECRC University, Jaipur."
  },
  {
    keywords: ["skill"],
    reply: "Skills: AI Engineering; Python Programming; HTML, CSS and JavaScript; Prompt Engineering; Data Structures and Algorithms; Git and GitHub."
  },
  {
    keywords: ["project"],
    reply: "Projects: Messy Python (Google Colab) https://github.com/hiya1410/MESSY-PYTHON ; Factorial Fibonacci Struct to Dict (Google Colab) https://github.com/hiya1410/factorial-Fibonacci-struct-2-dis ; Interactive Quiz Application https://github.com/hiya1410/quiz"
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github"],
    reply: "Email: hiya.25bcon2103@jecrcu.edu.in | Phone: 7850874096 | LinkedIn: https://www.linkedin.com/in/hiya-jain-86595531a?utm_source=share_via&utm_content=profile&utm_medium=member_ios | GitHub: https://github.com/hiya1410"
  },
  {
    keywords: ["help"],
    reply: "You can ask about greetings, who I am, education, college, course, skills, projects, or contact information."
  }
];

var defaultReply = "I am not sure about that yet. Try asking about education, skills, projects, contact, or type help.";

function addMessage(text, className) {
  var message = document.createElement("div");
  message.className = "chat-message " + className;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(userText) {
  var lower = userText.toLowerCase();
  var i;
  var j;
  for (i = 0; i < chatbotRules.length; i += 1) {
    for (j = 0; j < chatbotRules[i].keywords.length; j += 1) {
      if (lower.indexOf(chatbotRules[i].keywords[j]) !== -1) {
        return chatbotRules[i].reply;
      }
    }
  }
  return defaultReply;
}

function sendChatMessage() {
  var text = chatInput.value.trim();
  if (text === "") {
    return;
  }
  addMessage(text, "user-message");
  chatInput.value = "";
  addMessage(getBotReply(text), "bot-message");
}

chatSend.addEventListener("click", sendChatMessage);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
});

/* Welcome message on load */
addMessage("Hello! I am the Portfolio Assistant. Ask about Hiya Jain, education, skills, projects, or contact details. Type help to see topics.", "bot-message");
