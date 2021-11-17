function userPlays() {
	var userChoice =
	document.getElementById("userchoice").innerHTML
}

function computerPlays() {
  var compChoice = (Math.random()*3)+1;

  if (compChoice >1 && <2) {
    document.getElementById("computerchoice").innerHTML = "Rock"
  }
  else if (compChoice >2 && <3) {
	  document.getElementById("computerchoice").innerHTML = "Scissors"
  }
  else {
    document.getElementById("computerchoice").innerHTML = "Paper"
  }
}

function getResult() {
  if (compChoice == userChoice) {
    result = "Draw!"
  }
  if (compChoice == "Rock" && userChoice == "Paper") {
    result = 'You won!'
  }
  if (compChoice == "Rock" && userChoice == "Scissors") {
    result = "You lost!"
  }
  if (compChoice == "Paper" && userChoice == "Scissors") {
    result = "You won!"
  }
  if (compChoice == 'Paper' && userChoice == "Rock") {
    result = "You lost!"
  }
  if (compChoice == "Scissors" && userChoice == "Rock") {
    result = "You won!"
  }
  if (compChoice == "Scissors" && userChoice == "Paper") {
    result = "You lost!"
  }
  document.getElementById("Result").innerHTML = result;
}