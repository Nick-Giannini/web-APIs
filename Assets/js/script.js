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
var ulEL= document.querySelectorAll('.answers');
var timerDisplay = document.getElementById('time');
var secondsLeft = 75;
var qcount = 0;

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startQuiz);


console.log(ulEL);

function startQuiz(){
    
    startTimer();
    startQuestions();

}




function startTimer() {
    var timerstart = setInterval(function () {

        if (secondsLeft > 1) {
            timerDisplay.textContent = secondsLeft;
            secondsLeft--;
            //call question function
        }
        else if(qcount == 5){
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

function highscore() {


}


function startQuestions(){
    h1EL.textContent ='';
    pEL.textContent =' ';
    
    //if time left > 0 prompt question
// adds the questions to the page
h1EL.textContent = questList[qcount].question;


//adds the answers to the page
for (var i = 0; i < ulEL.length; i++) {
    ulEL[i].addEventListener('click', function () {
        var answer=ulEL[i];
        answer=questList.posAns[i];
        correctAns: 0,
    });



// startButton.addEventListener("click", startQuiz);








}

//   create questionslist : question string, options, correct ans
//   create question counter = 0
//   Click on start button(attach event listener)
//      start timer from 75 secs
//           every sec time is going to decrement
//           display it on screen
//      show 1st question with options(function)
//   Clicking on the answer options (attach event listener)
//       check if ans click by user matches with correct ans for question
//          display correct msg
//          check if we have time
//            if question counter < length of question array
//               increment the question counter
//                    go to next question
//           else ||  if(timer === 0)
//           stop timer and grab the last sec left
//              display the score
//              form is going to take user initial and score and save it in local storage and display it on second html page.
//       if wrong ans
//          display wrong msg
//          decrement timer by 10
//          check if we have time
//          if question counter < length of question array
//               increment the question counter
//               go to next question
//           else || if(timer === 0)
//               stop timer and grab the last sec left
//              display the score
//              form is going to take user initial and score and save it in local storage and display it on second html page.