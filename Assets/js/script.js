//Creating an array of object questions
var questList = [
    {
        question: " Javascript is an _______ language?",
        posAns: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above '],
        correctAns: 0,

    },
    {
        question: 'The "function" and "var" are known as:',
        posAns: ['Keywords', ' Data types', 'Declaration statements', 'Prototypes'],
        correctAns: 2,

    },
    {
        question: "In JavaScript the x===y statement implies that:",
        posAns: ['Both x and y are equal in value, type and reference address as well.', 'Both are x and y are equal in value only. ', 'Both are equal in the value and data type. ', 'Both are not same at all. '],
        correctAns: 2,

    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element? ",
        posAns: ['class ', ' id', 'type ', 'None of the above '],
        correctAns: 1,

    },
    {
        question: " How to create a checkbox in HTML? ",
        posAns: ['<input type = "checkbox"> ', '<input type = "button"> ', '<checkbox> ', '<input type = "check">'],
        correctAns: 0,

    },
    {
        question: "How to select the elements with the class name 'example'? ",
        posAns: ['example ', '#example ', '.example ', 'Class example '],
        correctAns: 2,

    },
    {
        question: "Which of the following number object function returns the value of the number? ",
        posAns: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
        correctAns: 1,

    },
    {
        question: "Which one of the following operator returns false if both values are equal? ",
        posAns: ['! ', '!== ', '!= ', 'All of the above '],
        correctAns: 2,

    },
];

var h1EL = document.getElementById('firstLine');
var pEL = document.getElementById('info');
var ulEL = document.querySelectorAll('.answers');
var optList = document.querySelector('.options');
var timerDisplay = document.getElementById('time');
var rw = document.getElementById('rw');
var secondsLeft = 75;
var qcount = 0;
var userScore = 0;

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    pEL.setAttribute('class', "hidden");
    startButton.setAttribute('class', "hidden");
    startTimer();
    startQuestions();

};



function startTimer() {
    var timerstart = setInterval(function () {

        if (secondsLeft > 1) {
            timerDisplay.textContent = secondsLeft;
            secondsLeft--;
            //call question function
        }
        else if (qcount == 8) {
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();

        }
        else {
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();
        }

    }, 1000);
}


function startQuestions() {

    console.log(secondsLeft);
    if (secondsLeft <= 0 || qcount == 8) {
        highscore();
    }
    else {
        // adds the questions to the page
        h1EL.textContent = questList[qcount].question;
        optList.setAttribute('class', "reveal");


        //adds the answers to the page
        for (var i = 0; i < ulEL.length; i++) {
            var answer = ulEL[i];
            answer.textContent = questList[qcount].posAns[i];

            //set attribute to true or false
            if (questList[qcount].correctAns == i) {
                answer.setAttribute("data-correct", "true");
            }
            else {
                answer.setAttribute("data-correct", "false");
            }

        };

        //add event listener to the optlist/ul element
        optList.addEventListener('click', userSelects);



    }





};

function highscore() {
    pEL.setAttribute('class', "reveal");
    startButton.setAttribute('class', "hidden");
    optList.setAttribute('class', "hidden");
    h1EL.textContent = "All Done!"
    pEL.textContent = "Your score is: " + userScore;


}

//all done!
//your score is
// user input add intinals
//submit
//highscores


function userSelects(event) {
    event.stopPropagation();
    if (event.target.matches(".answers")) {
        var userSelection = event.target.getAttribute("data-correct");

        if (userSelection === "true") {
            qcount++;
            userScore++;
            rw.setAttribute('class', 'right');
            rw.textContent = "CORRECT!";
            var messTime = setTimeout(() => {
                rw.setAttribute('class', 'hidden')
            }, 700);
            startQuestions();
        }
        else {
            qcount++;
            secondsLeft = secondsLeft - 15;
            rw.setAttribute('class', 'wrong');
            rw.textContent = "WRONG!";
            var messTime = setTimeout(() => {
                rw.setAttribute('class', 'hidden')
            }, 700);
            startQuestions();
        }
    }
};



