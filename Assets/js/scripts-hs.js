var intialsInput = document.querySelector('#intials-input');
var saveButton = document.querySelector("#save");
var pEL=document.getElementById('usScore');
var userScore = localStorage.getItem("userScore");
var listHs = document.querySelector('#previousHS');
var highscores = [];


function saveHS(){
    var userHS = {
        user: intials.value,
        score: userScore.value,
    };
}

saveButton.addEventListener('click', function(event){
    event.preventDefault();
    var initial = document.querySelector('#initials').value;
    localStorage.setItem('Userinitials',initial)


});

function init(){
    var storedHS = JSON.parse(localStorage.getItem("highscores"));
};

function renderHighscore() {
    todoList.innerHTML = "";
  
    // Render a new li for each HS
    for (var i = 0; i < highscores.length; i++) {
      var score = highscores[i];
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
      listHs.appendChild(li);
    }
  }



// pEL.textContent = "Your score is: " + userScore;





//   function renderHighscores() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete ✔️";
  
//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }


// var startButton = document.querySelector("#startButton");
// var endButton = document.querySelector('#end-screen');
// var initials = document.querySelector('#initials');
// var initialsButton = document.querySelector('#initials-button');
// var hiscores = document.querySelector('#hiscores');
// // creating the array for the user data, and parsing thru JSON, and getting it via localstorage
// var userData = JSON.parse(localStorage.getItem("hiscores")) || [];

// initialsButton.addEventListener("click", function(){
//   // localStorage.setItem("Initials", initials);
//   // localStorage.setItem("recentScore", quizScore);
  
//   //this is object syntax, key value pairs
//   var Player = {
//     initials:initials.value, //the key goes to the left of the colon, and what you want to pair up the key with, goes to the right
//     score:quizScore,
    
//   }
//   console.log(Player);
//   userData.push(Player) //Push places the user data, within the userData array. Adds the item to the array
//   // here we are stringifying the userdata array so local storage will accept it. localstorage only accepts strings 
//   localStorage.setItem("hiscores", JSON.stringify(userData));
//   for (let i = 0; i < userData.length; i++) {
//     var p = document.createElement('p') //create the variable p, and then create the P tag, to the hiscores section
//     p.textContent = "Player: " + userData[i].initials + " Score: " + userData[i].score; //this adds the text content to the page, and organizes it by the information within the array, using initials and score
//     hiscores.append(p) //Append places the data on the page
    
//   }
// })

// startBtn.onclick = startQuiz;