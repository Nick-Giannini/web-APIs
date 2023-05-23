//Creating an array of object questions

var questList = [
    {
        question: " Javascript is an _______ language?",
        posAns: ['Object-Oriented','Object-Based','Procedural', 'None of the above '],
        correctAns: 0,

    },
    {
        question: 'The "function" and "var" are known as:',
        posAns: ['Keywords',' Data types','Declaration statements', 'Prototypes'],
        correctAns: 2,

    },   
    {
        question: "In JavaScript the x===y statement implies that:",
        posAns: ['Both x and y are equal in value, type and reference address as well.','Both are x and y are equal in value only. ','Both are equal in the value and data type. ', 'Both are not same at all. '],
        correctAns: 2 ,

    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element? ",
        posAns: ['class ',' id','type ', 'None of the above '],
        correctAns: 1,

    },
    {
        question: " How to create a checkbox in HTML? ",
        posAns: ['<input type = "checkbox"> ','<input type = "button"> ','<checkbox> ', '<input type = "check">'],
        correctAns: 0,

    },
    {
        question: "How to select the elements with the class name 'example'? ",
        posAns: ['example ','#example ','.example ', 'Class example '],
        correctAns: 2,

    },
    {
        question: "Which of the following number object function returns the value of the number? ",
        posAns: ['toString()','valueOf()','toLocaleString()', 'toPrecision()'],
        correctAns: 1 ,

    },
    {
        question: "Which one of the following operator returns false if both values are equal? ",
        posAns: ['! ','!== ','!= ', 'All of the above '],
        correctAns: 2 ,

    },
];

var timerDisplay = document.getElementById('timer');
var secondsLeft = 75;
var qcount = 0;


function startTimer() {

    var timerstart = setInterval(function() {
      secondsLeft--;

      if(secondsLeft > 1) {
        timerDisplay.textContent = "Time: "+ secondsLeft;
        //call question function
      }
      else if(secondsLeft === 1){
        clearInterval(timerstart);
      // Calls function to create and append the highscore page
      // highscore();)
      }
  
    }, 75000);
  };
