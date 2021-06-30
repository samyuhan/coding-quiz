// Create global variables 
var mainEl = document.querySelector("main");
var timerEl = document.querySelector("#timer");
var answerResponse = document.createElement("p");
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

    // Function for when user clicks wrong answer choice
    var wrongAnswer = function() {
        answerResponse.textContent = "Wrong!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ2();
    }

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
    a1.addEventListener("click", wrongAnswer);

    // Add a button for second answer choice
    a2.textContent = "2. booleans";
    answers.appendChild(a2);
    a2.addEventListener("click", wrongAnswer);

    // Add a button for third answer choice
    a3.textContent = "3. alerts";
    answers.appendChild(a3);
    a3.addEventListener("click", function() {
        answerResponse.textContent = "Correct!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ2();
    });

    // Add a button for fourth answer choice
    a4.textContent = "4. numbers";
    answers.appendChild(a4);
    a4.addEventListener("click", wrongAnswer);
}

var askQ2 = function() {
    // Create local variables
    var question = document.createElement("section");
    var q1 = document.createElement("h1");
    var answers = document.createElement("section");
    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    var a4 = document.createElement("button");

    // Function for when user clicks wrong answer choice
    var wrongAnswer = function() {
        answerResponse.textContent = "Wrong!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ3();
    }

    // Add a section for the second question
    question.className = "question";
    mainEl.appendChild(question);

    // Add a h1 element that shows the second question
    q1.textContent = "The condition in an if / else statement is enclosed within ____.";
    question.appendChild(q1);

    // Add a section for the answers
    answers.className = "answers";
    question.appendChild(answers);

    // Add a button for first answer choice
    a1.textContent = "1. quotes";
    answers.appendChild(a1);
    a1.addEventListener("click", wrongAnswer);

    // Add a button for second answer choice
    a2.textContent = "2. curly brackets";
    answers.appendChild(a2);
    a2.addEventListener("click", wrongAnswer);

    // Add a button for third answer choice
    a3.textContent = "3. parentheses";
    answers.appendChild(a3);
    a3.addEventListener("click", function() {
        answerResponse.textContent = "Correct!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ3();
    });

    // Add a button for fourth answer choice
    a4.textContent = "4. square brackets";
    answers.appendChild(a4);
    a4.addEventListener("click", wrongAnswer);
}

var askQ3 = function() {
    // Create local variables
    var question = document.createElement("section");
    var q1 = document.createElement("h1");
    var answers = document.createElement("section");
    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    var a4 = document.createElement("button");

    // Function for when user clicks wrong answer choice
    var wrongAnswer = function() {
        answerResponse.textContent = "Wrong!";
        mainEl.appendChild(answerResponse);
        question.remove();
        //askQ4();
    }

    // Add a section for the third question
    question.className = "question";
    mainEl.appendChild(question);

    // Add a h1 element that shows the third question
    q1.textContent = "Arrays in JavaScript can be used to store ____.";
    question.appendChild(q1);

    // Add a section for the answers
    answers.className = "answers";
    question.appendChild(answers);

    // Add a button for first answer choice
    a1.textContent = "1. numbers and strings";
    answers.appendChild(a1);
    a1.addEventListener("click", wrongAnswer);

    // Add a button for second answer choice
    a2.textContent = "2. other arrays";
    answers.appendChild(a2);
    a2.addEventListener("click", wrongAnswer);

    // Add a button for third answer choice
    a3.textContent = "3. booleans";
    answers.appendChild(a3);
    a3.addEventListener("click", wrongAnswer);

    // Add a button for fourth answer choice
    a4.textContent = "4. all of the above";
    answers.appendChild(a4);
    a4.addEventListener("click", function() {
        answerResponse.textContent = "Correct!";
        mainEl.appendChild(answerResponse);
        question.remove();
        //askQ4();
    });
}

startQuiz();