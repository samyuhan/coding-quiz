// Create global variables 
var mainEl = document.querySelector("main");
var timerEl = document.querySelector("#timer");
var footerEl = document.querySelector("#answer-response");
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
    startpage.id = "startpage"
    mainEl.appendChild(startpage);

    // Add a h1 element for the quiz title
    title.id = "quiz-title";
    title.textContent = "Coding Quiz Challenge";
    startpage.appendChild(title);

    // Add a p element for the quiz description
    description.id = "quiz-description";
    description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalize your score/time by ten seconds!"
    startpage.appendChild(description);

    // Add button to start quiz
    startBtn.id = "start-btn";
    startBtn.textContent = "Start Quiz";
    startpage.appendChild(startBtn);

    // Add an event listener to remove the content in startpage when the button is clicked
    startBtn.addEventListener("click", function() {
        // insert timer function
        title.remove();
        description.remove();
        startBtn.remove();
        // insert question functions
        askQ1();
    });
}

var askQ1 = function() {
    // Create local variables
    var question = document.createElement("section");
    var q1 = document.createElement("h1");
    var answers = document.createElement("section");
    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    var a4 = document.createElement("button");
    var answerResponse = document.createElement("p");

    // Add a section for the first question
    question.className = "question";
    mainEl.appendChild(question);

    // Add a h1 element that shows the first question
    q1.textContent = "Commonly used data types DO NOT include:";
    question.appendChild(q1);

    // Add a section for the answers
    answers.className = "answers";
    question.appendChild(answers);

    // Add a button for first answer choice
    a1.textContent = "1. strings";
    answers.appendChild(a1);
    a1.addEventListener("click", function() {
        answerResponse.textContent = "Wrong!"
        question.appendChild(answerResponse);

    })

  
}

startQuiz();