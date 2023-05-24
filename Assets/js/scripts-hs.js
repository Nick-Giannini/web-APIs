//// variables and selecting the different elements from the document. By ID or Class.
var intialsInput = document.querySelector('#userINT');
var saveButton = document.querySelector("#save");
var pEL = document.getElementById('usScore');
var userScore = localStorage.getItem("userScore");
var listHs = document.querySelector('#previousHS');
var BackButton = document.querySelector('#to-start');
var clearButton = document.querySelector('#clear');

// stores the highscores
var highscores = [];

//displays user score on the page
pEL.textContent="Your final score is "+userScore;

// first function that is called when page is loaded. Takes the string array from storage and parses it into an actual array.
function init() {
    var storedHS = JSON.parse(localStorage.getItem("highscores"));
// if there are values in that array store it in highscores[];
    if (storedHS !== null) {
        highscores = storedHS
    }
    // calls functions
    renderHighscore();
};

// renders the hs to the page. Clears the display then goes through the array and for each element of the array it creates a li element and adds that to the page
function renderHighscore() {
    listHs.innerHTML = " ";

    // Render a new li for each HS
    for (var i = 0; i < highscores.length; i++) {
        var score = highscores[i];
        var li = document.createElement("li");
        li.textContent = score;
        listHs.appendChild(li);
    }
};


function storeScores() {
    // Stringify and set key in localStorage. Saves the array to local storage after turning it into a string
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Add submit event to form
saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var hsText = intialsInput.value + "-" + userScore;
   

    // Return from function early if submitted a blank text
    if (hsText === "") {
        return;
    }

    // Add new to element to the array, clear the input
    highscores.push(hsText);
    hsText.value = "";

    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderHighscore();
});

//when the page loads this function call starts it. 
init()


// add event listens to the back button. Goes to the quiz page
BackButton.addEventListener('click', function(){
    window.location = "../../index.html";
});

//clears the localstorge.
clearButton.addEventListener('click', function(){
    localStorage.clear();
    window.location.reload();
});

