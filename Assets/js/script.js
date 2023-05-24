//Creating an array of object questions. correctAns is the index that the correct answer is in.
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

// variables and selecting the different elements from the document. By ID or Class.
var h1EL = document.getElementById('firstLine');
var pEL = document.getElementById('info');
var startButton = document.querySelector(".start-button");
var ulEL = document.querySelectorAll('.answers');
var optList = document.querySelector('.options');
var timerDisplay = document.getElementById('time');
var rw = document.getElementById('rw');


// Global varriables to keep track of the score and timeleft.
var secondsLeft = 75;
var qcount = 0;
var userScore = 0;

// event listener for the start button. When its click it call the startQuiz function
startButton.addEventListener("click", startQuiz);

//changes the class of the p and startbutton elements. To hide the elements on the html. Call 2 more functions. startTimer and startQUestions.
function startQuiz() {
    pEL.setAttribute('class', "hidden");
    startButton.setAttribute('class', "hidden");
    startTimer();
    startQuestions();

};


// When the function is called it starts a setInterval. 
function startTimer() {
    var timerstart = setInterval(function () {
        // if the secondsLeft hasnt reached 0. So still time left to take the quiz. It updates the time displayed and decramites the time left.
        if (secondsLeft > 1) {
            timerDisplay.textContent = secondsLeft;
            secondsLeft--;
        }
        // if the question count is equal to 8 do this. 8 is the total number of questions so got to the end of the array of questions/end of quiz
        else if (qcount == 8) {
            //resets the display to blank and clears the timer then calls the highscore function.
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();

        }
        // if the timer reaches 0 or lower this happens.
        else {
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();
        }

    }, 1000);
}

//Starts displaying questions to the page
function startQuestions() {

    // if we ran out of time or questions call the highscore function.
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

            //set attribute to true or false. the data-correct is how to determine if the user selected the right answer.
            if (questList[qcount].correctAns == i) {
                answer.setAttribute("data-correct", "true");
            }
            else {
                answer.setAttribute("data-correct", "false");
            }

        };

        //add event listener to the optlist/ul element. It covers all the buttons and shows which button the user selected. 
        optList.addEventListener('click', userSelects);



    }





};

//at the end of the quiz this function is called. Saves the score to local storage and opens the highscore page
function highscore() {

    localStorage.setItem('userScore', userScore);
    window.location = "./Assets/HTML/highscore.html";

}


// determines if user selected the correct answer or not. Take the return of the event listener,
function userSelects(event) {
    event.stopPropagation();

    //did the user click on a answer or somewhere else?
    if (event.target.matches(".answers")) {
        // gets the value of the class data-correct attribute.
        var userSelection = event.target.getAttribute("data-correct");

        // if the user selected the correct answer do this. Incriments the question,score, displays the correct message. To slow down the object from being hidden it starts a timer and calls the startQuestion function
        if (userSelection === "true") {
            qcount++;
            userScore++;
            rw.setAttribute('class', 'right');
            rw.textContent = "CORRECT!";
            setTimeout(() => {
                rw.setAttribute('class', 'hidden')
            }, 700);
            startQuestions();
        }
        // if the userselected the wrong answer. questions counts goes up but secondsLeft is reduced by 15 seconds.
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



