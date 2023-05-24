var intialsInput = document.querySelector('#intials-input');
var saveButton = document.querySelector("#save");






var pEL=document.getElementById('usScore');

var userScore = localStorage.getItem("userScore");


pEL.textContent = "Your score is: " + userScore;





  function renderHighscores() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete ✔️";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }