var intialsInput = document.querySelector('#userINT');
var saveButton = document.querySelector("#save");
var pEL = document.getElementById('usScore');
var userScore = localStorage.getItem("userScore");
var listHs = document.querySelector('#previousHS');
var highscores = [];
var BackBut = document.querySelector('#to-start');
var clearBut = document.querySelector('#clear');




pEL.textContent="Your final score is "+userScore;


function init() {
    var storedHS = JSON.parse(localStorage.getItem("highscores"));

    if (storedHS !== null) {
        highscores = storedHS
    }
    renderHighscore();
};

function renderHighscore() {
    listHs.innerHTML = " ";

    // Render a new li for each HS
    for (var i = 0; i < highscores.length; i++) {
        var score = highscores[i];
        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
        listHs.appendChild(li);
    }
};


function storeScores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Add submit event to form
saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var hsText = intialsInput.value + "-" + userScore;
    console.log(hsText);

    // Return from function early if submitted todoText is blank
    if (hsText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    highscores.push(hsText);
    hsText.value = "";

    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderHighscore();
});
init()



BackBut.addEventListener('click', function(){
    window.location = "../../index.html";
});

clearBut.addEventListener('click', function(){
    localStorage.clear();
    window.location.reload();
});

