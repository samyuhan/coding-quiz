// Create global variables 
var mainEl = document.querySelector("main");
var timerEl = document.querySelector("#timer");
var score = 0;
var secondsLeft = 75;

// Function for start page
var startQuiz = function() {
    // Create local variables to create the elements for start page
    var startpage = document.createElement("div");
    var title = document.createElement("h1");
    var description = document.createElement("p");
    var startBtn = document.createElement("button");
    
    // Add a div element for the start page
    startpage.className = "startpage"
    mainEl.appendChild(startpage);

    // Add a h1 element for the quiz title
    title.className = "quiz-title";
    title.textContent = "Coding Quiz Challenge";
    startpage.appendChild(title);

    // Add a p element for the quiz description
    description.className = "quiz-description";
    description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalize your score/time by ten seconds!"
    startpage.appendChild(description);

    // Add button to start quiz
    startBtn.className = "start-btn";
    startBtn.textContent = "Start Quiz";
    container.appendChild(startBtn);
}