// variables for storing scores
let playerWins = 0;
let computerWins = 0;

// computer choice function
function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * 3)];
}

// global variables for both selections, no scope
let playerSelection;
let computerSelection;

// play round function, recording score and returning winner
function playRound(playerSelection, computerSelection) {
    winner = null;
    if (playerSelection[0] === "r" && computerSelection[0] === "s") {
        return winner = "player";
    }
    else if (playerSelection[0] === "p" && computerSelection[0] === "r") {
        return winner = "player";
    }
    else if (playerSelection[0] === "s" && computerSelection[0] === "p") {
        return winner = "player";
    }
    else if (playerSelection[0] === computerSelection[0]) {
        return winner = "tie";
    }
    else {
        return winner = "computer";
    }
}

// selectors for different user action buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playAgain = document.querySelector('#playAgain');

playAgain.disabled = true;
function playGame(pick) {
    computerSelection = getComputerChoice();

    resultRound.textContent = playRound(pick, computerSelection);
}

console.log(playGame());