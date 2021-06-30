// Create global variables 
var mainEl = document.querySelector("main");
var quizEl = document.querySelector("#quiz");
var timerEl = document.querySelector("#timer");
var answerResponse = document.createElement("p");
var score = 0;
var secondsLeft = 25;
var finished = false;

// Function for start page
var startQuiz = function() {
    // Create local variables to create the elements for start page
    var startpage = document.createElement("div");
    var title = document.createElement("h1");
    var description = document.createElement("p");
    var startBtn = document.createElement("button");
    
    // Add a div element for the start page
    startpage.id = "startpage"
    quizEl.appendChild(startpage);

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
        timer();
        title.remove();
        description.remove();
        startBtn.remove();
        // insert question function
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
        secondsLeft -= 10;
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ2();
    }

    // Add a section for the first question
    question.className = "question";
    quizEl.appendChild(question);

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
        score += 20;
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
        secondsLeft -= 10;
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ3();
    }

    // Add a section for the second question
    question.className = "question";
    quizEl.appendChild(question);

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
        score += 20;
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
        secondsLeft -= 10;
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ4();
    }

    // Add a section for the third question
    question.className = "question";
    quizEl.appendChild(question);

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
        score += 20;
        answerResponse.textContent = "Correct!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ4();
    });
}

var askQ4 = function() {
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
        secondsLeft -= 10;
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ5();
    }

    // Add a section for the fourth question
    question.className = "question";
    quizEl.appendChild(question);

    // Add a h1 element that shows the fourth question
    q1.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    question.appendChild(q1);

    // Add a section for the answers
    answers.className = "answers";
    question.appendChild(answers);

    // Add a button for first answer choice
    a1.textContent = "1. commas";
    answers.appendChild(a1);
    a1.addEventListener("click", wrongAnswer);

    // Add a button for second answer choice
    a2.textContent = "2. curly brackets";
    answers.appendChild(a2);
    a2.addEventListener("click", wrongAnswer);

    // Add a button for third answer choice
    a3.textContent = "3. quotes";
    answers.appendChild(a3);
    a3.addEventListener("click", function() {
        score += 20;
        answerResponse.textContent = "Correct!";
        mainEl.appendChild(answerResponse);
        question.remove();
        askQ5();
    });

    // Add a button for fourth answer choice
    a4.textContent = "4. parentheses";
    answers.appendChild(a4);
    a4.addEventListener("click", wrongAnswer);
}

var askQ5 = function() {
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
        finished = true;
        mainEl.appendChild(answerResponse);
        question.remove();
        complete();
    }

    // Add a section for the fifth question
    question.className = "question";
    quizEl.appendChild(question);

    // Add a h1 element that shows the fifth question
    q1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    question.appendChild(q1);

    // Add a section for the answers
    answers.className = "answers";
    question.appendChild(answers);

    // Add a button for first answer choice
    a1.textContent = "1. JavaScript";
    answers.appendChild(a1);
    a1.addEventListener("click", wrongAnswer);

    // Add a button for second answer choice
    a2.textContent = "2. terminal/bash";
    answers.appendChild(a2);
    a2.addEventListener("click", wrongAnswer);

    // Add a button for third answer choice
    a3.textContent = "3. for loops";
    answers.appendChild(a3);
    a3.addEventListener("click", wrongAnswer);

    // Add a button for fourth answer choice
    a4.textContent = "4. console.log";
    answers.appendChild(a4);
    a4.addEventListener("click", function() {
        score += 20;
        answerResponse.textContent = "Correct!";
        finished = true;
        mainEl.appendChild(answerResponse);
        question.remove();
        complete();
    });
}

var complete = function () {
    var completedPage = document.createElement("section");
    var allDone = document.createElement("h1");
    var finalScore = document.createElement("p");
    var askInitials = document.createElement("label");

    // Remove the answer response on the completed page
    answerResponse.remove();

    // Add completedPage to the main element
    mainEl.appendChild(completedPage);

    // Add h1 element
    allDone.textContent = "All done!";
    completedPage.appendChild(allDone);

    // Add p element to show final score
    finalScore.textContent = "Your final score is " + score;
    completedPage.appendChild(finalScore);

    // Add label to ask for initials
    askInitials.textContent = "Enter Initials:";
    askInitials.setAttribute("for", "input");
    completedPage.appendChild(askInitials);

    // Add input element to have user type initials
    var initalsInput = document.createElement("Input");
    initalsInput.setAttribute("id", "input")
    initalsInput.setAttribute("name", "input");
    initalsInput.setAttribute("type", "text");
    completedPage.appendChild(initalsInput);
    
    // Add submit button to save initials
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.id = "submit-btn";
    completedPage.appendChild(submitBtn);

    submitBtn.addEventListener("click", function() {
        var initals = initalsInput.value;

        // Store in local storage
        localStorage.setItem("initals", initals);
        localStorage.setItem("score", score);
        
        completedPage.remove();
        
        highscorePage();
    })
}

var highscorePage = function() {
    // Create local variables
    var highscores = document.createElement("section");
    var highscoresTitle = document.createElement("h1");
    var initals = localStorage.getItem("initals");
    var storedScore = localStorage.getItem("score");
    var leaderboard = document.createElement("p");
    var backBtn = document.createElement("button");
    var clearBtn = document.createElement("button");

    // Add highscores section
    highscores.id = "highscores";
    mainEl.appendChild(highscores);

    // Add h1 element to show Highscores title
    highscoresTitle.textContent = "Highscores";
    highscores.appendChild(highscoresTitle);

    // Add p element to show leaderboard
    leaderboard.textContent = "1. " + initals + " - " + storedScore;
    highscores.appendChild(leaderboard);

    // Add return button
    backBtn.id = "back-btn";
    backBtn.textContent = "Go Back";
    backBtn.addEventListener("click", function() {
        score = 0;
        secondsLeft = 75;
        highscores.remove();
        startQuiz();
    });
    leaderboard.appendChild(backBtn);
    
    // Add clear button
    clearBtn.id = "clear-btn";
    clearBtn.textContent = "Clear Highscores";
    clearBtn.addEventListener("click", function() {
        // Empty local storage
        localStorage.removeItem("initals")
        localStorage.removeItem("score")
        
        leaderboard.remove();
    })
    leaderboard.appendChild(clearBtn);
}

var timer = function() {
    var timeInterval = setInterval(() => {
        if (secondsLeft <= 0 || finished) {
            clearInterval(timeInterval);
            quizEl.remove();
            complete();
        } else {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
        }
    }, 1000);
    
}

startQuiz();