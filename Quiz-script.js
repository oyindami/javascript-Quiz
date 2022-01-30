var QuizQuestions = [
  {
    question: "Which of these is not a code language?",
    answers: ["1. Sequence", "2.  JavaScript", '3.  "HTML', '4.  "CSS'],
    correctAnswer: "1. Sequence",
  },
  {
    question: "Which of these is not CSS style?",
    answers: ["1. boxstyle", "2. color", "3. eventlistener", "4. wrap"],
    correctAnswer: "3. eventlistener",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. Java Script",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    correctAnswer: "4. Console.log",
  },

  {
    question: "The conditions in an if/else statement is enclosed within:",
    answers: [
      "1. quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    correctAnswer: "3. Parentheses",
  },
];

//CREATING VARIABLES
var timerRead = document.getElementById("time"); //variable for reading the time

var containerDIVEL = document.getElementById("containerID"); //main body div

var startBL = document.getElementById("startID"); //start div block
var startBTNEL = document.getElementById("startBtn"); //start button
var quizBL = document.getElementById("qandaDISID"); //quiz div
var questionEL = document.getElementById("questionID");
var answerULEL = document.getElementById("answersID");
var a1BtnEL = document.getElementById("a1Btn");
var a2BtnEL = document.getElementById("a2Btn");
var a3BtnEL = document.getElementById("a3Btn");
var a4BtnEL = document.getElementById("a4Btn");
var ansValP1EL = document.getElementById("answerVID");
var finalBL = document.getElementById("finalID");
var finalScoreP1EL = document.getElementById("finalScore");
var enterIntDivEL = document.getElementById("enterInt");
var initialINPEL = document.getElementById("initialID");
var submitIntBtnEL = document.getElementById("sumbitInt");

var questionNum = 0; //putting the questions in globals
var totalTime = 75; //setting the total amount of time allowed
var timeRemaining = 0; // score catcher

//create a time function to count the time up to 75 seconds
function timeCounter() {
  var timer = setInterval(function () {
    if (totalTime >= 5) {
      timerRead.textContent = "Time: " + totalTime;
      totalTime--;
      timeRemaining = totalTime;
    } else {
      console.log("Times Up!");
      final();
      timerRead.textContent = "Time: " + totalTime;
    }
  }, 1000);
  console.log(timer);
}
/// coulkd not get the timer to take out 5 seconds :(

function final() {
  containerDIVEL.removeChild(quizBL); //removing quiz
  containerDIVEL.appendChild(finalBL); //adding final message
  // Label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  finalBL.appendChild(createLabel);

  // input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  finalBL.appendChild(createInput);

  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  finalBL.appendChild(createSubmit);
  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;
    if (initials === null) {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore); //setting items for local storage
      // Travels to final page
      window.location.replace("scores.html"); //calling on seperate location to call highscore
    }
  });
}
//looping through the answers to check for right anser
function answerChecker(x) {
  if (
    QuizQuestions[questionNum].answers[x] === QuizQuestions[questionNum].correct
  ) {
    ansValP1EL.innerText = "Correct!";
  } //if statement close
  else {
    ansValP1EL.innerText = "Wrong!";
    totalTime = totalTime - 10;
  } //else statement close
}
//PROCESSES QUESTION AND ANSWER FIELDS
function quiz() {
  //changing the questions and answers
  if (questionNum <= 4) {
    console.log(questionNum);
    questionEL.innerHTML = QuizQuestions[questionNum].question;
    console.log(QuizQuestions[questionNum].question);

    a1BtnEL.innerText = QuizQuestions[questionNum].answers[0];
    a2BtnEL.innerText = QuizQuestions[questionNum].answers[1];
    a3BtnEL.innerText = QuizQuestions[questionNum].answers[2];
    a4BtnEL.innerText = QuizQuestions[questionNum].answers[3];

    a1BtnEL.addEventListener("click", function () {
      answerChecker(0);
      questionNum++;
      quiz();
    });
    a2BtnEL.addEventListener("click", function () {
      answerChecker(1);
      questionNum++;
      quiz();
    });
    a3BtnEL.addEventListener("click", function () {
      answerChecker(2);
      questionNum++;
      quiz();
    });
    a4BtnEL.addEventListener("click", function () {
      answerChecker(3);
      questionNum++;
      quiz();
    });
  } //if
  else if (questionNum == 5) {
    timeRemaining = totalTime;
    totalTime = 0;
    final();
  } else {
    console.log("Done");
    localStorage.setItem("Score", score);
  } //else
}
//DISPLAY FUNCTION
function start() {
  containerDIVEL.removeChild(quizBL); //removing the quiz
  containerDIVEL.removeChild(finalBL); //removing the final message
  //add even listener to the buttons
  startBTNEL.addEventListener("click", function () {
    containerDIVEL.removeChild(startBL);
    containerDIVEL.appendChild(quizBL);
    timeCounter();
    quiz();
  });
}
start();
