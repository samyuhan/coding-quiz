// Create global variables 
var mainEl = document.querySelector("main");
var timerEl = document.querySelector("#timer");
var score = 0;
var secondsLeft = 75;

// Function for start page
var startQuiz = function() {
    // Create a div element for the start page
    var startpage = document.createElement("div");
    startpage.className = "startpage"
    mainEl.appendChild(startpage);

    // Create a h1 element for the quiz title
    var title = document.createElement("h1");
    title.className = "quiz-title";
    title.textContent = "Coding Quiz Challenge";
    startpage.appendChild(title);

    // Create a p element for the quiz description
    var description = document.createElement("p");
    description.className = "quiz-description";
    description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalize your score/time by ten seconds!"
    startpage.appendChild(description);
}