//set containers for the values of quiz, results and the submit//
//function for the quiz questions//
//functionn for the results//


var quizcontainer = document.getElementById ('quiz');
var answercontainer = document.getElementById ('answer');
var submitcontainer = document.getElementById ('submit');


var QuizQuestions = [
    {
        question: "Which of these is not a code language?",
        answers:{
            a: "Sequence",
            b: "JavaScript",
            c: "HTML",
            d: "CSS"
        },
        correctAnswer: "a"
    },
        {
            question: "Which of these is not CSS style?",
            answers:{
                a: "boxstyle",
                b: "color",
                c: "eventlistener",
                d: "wrap"  
        },
        correctAnswer: "c"
    },
        {
            question: "Which of these is not a code language?",
        answers:{
            a: "Sequence",
            b: "JavaScript",
            c: "HTML",
            d: "CSS"
        }
    }
]

function displayQuiz()
function displayResult()
//to display the result//



submitButton.addEventListener('click', displayResult)