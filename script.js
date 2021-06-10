
let playerScore = 0;
let computerScore = 0;
let gameResult = document.getElementById("description");

function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)]
}

function playerSelection(clicked_id) {
   return playRound(clicked_id, computerPlay()), updateScore(), isGameOver();
}

function addRow(playerSelection, computerSelection) {
    let tableRef = document.getElementById("table");
    let newRow = tableRef.insertRow(-1);
  
    let newPlayerCell = newRow.insertCell(0);
    let newComputerCell = newRow.insertCell(1);
  
    newPlayerCell.innerHTML = `${playerSelection}`;
    newComputerCell.innerHTML = `${computerSelection}`;
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameResult.innerHTML = "It's a tie!"
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        gameResult.innerHTML = `Loser! ${computerSelection} beats ${playerSelection}.`
        computerScore++
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        gameResult.innerHTML = `Winner! ${playerSelection} beats ${computerSelection}.`
        playerScore++
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        gameResult.innerHTML = `Winner! ${playerSelection} beats ${computerSelection}.`
        playerScore++
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        gameResult.innerHTML = `Loser! ${computerSelection} beats ${playerSelection}.`
        computerScore++
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        gameResult.innerHTML = `Winner! ${playerSelection} beats ${computerSelection}.`
        playerScore++
    }  else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        gameResult.innerHTML = `Loser! ${computerSelection} beats ${playerSelection}.`
        computerScore++
    }
    return addRow(playerSelection, computerSelection);
  }

function updateScore() {
    document.getElementById("score").innerHTML = `${playerScore} - ${computerScore}`;
}

function isGameOver() {
    let buttons = document.getElementsByClassName("emoji");
    if (playerScore === 5) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.pointerEvents = "none";
        }
        gameResult.innerHTML = 'Game over! You win! Reload the page to play again.'
    } else if (computerScore === 5) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.pointerEvents = "none";
        }
        gameResult.innerHTML = 'Game over! You lose! Reload the page to play again.'
    }
}