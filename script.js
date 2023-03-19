// variables for storing scores
let playerWins = 0;
let computerWins = 0;

// computer choice function
function getComputerChoice() {
    let pickOne = ["rock", "paper", "scissors"];
    let randomOne = pickOne[Math.floor(Math.random() * pickOne.length)];
    return randomOne;
}

// global variables for both selections, no scope
let playerSelection;
let computerSelection;

// play round function, recording score and returning winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It is a tie! You both picked ${playerSelection}.`
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins++;
            return "You lose! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            playerWins++;
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            return "You win! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            computerWins++;
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWins++;
            return "You lose! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            playerWins++;
            return "You win! Scissors beats paper!";
        }
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

    humanScore.textContent = playerWins;
    robotScore.textContent = computerWins;

    if (playerWins == 5) {
        resultGame.textContent = "Victory is yours!";
        resultRound.textContent = ''
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
        rockBtn.className = "optionsAfterGame";
        paperBtn.className = "optionsAfterGame";
        scissorsBtn.className = "optionsAfterGame";
        playAgain.className = "optionsAgain"
    } else if (computerWins == 5) {
        resultGame.textContent = "You lost to a computer, noob!";
        resultRound.textContent = ''
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
        rockBtn.className = "optionsAfterGame";
        paperBtn.className = "optionsAfterGame";
        scissorsBtn.className = "optionsAfterGame";
        playAgain.className = "optionsAgain"
    }
}


// restart button
playAgain.addEventListener('click', function () {

    playerWins = 0;
    computerWins = 0;
    resultGame.textContent = ''
    resultRound.textContent = ''
    humanScore.textContent = playerWins;
    robotScore.textContent = computerWins;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playAgain.disabled = true;
    rockBtn.className = "options";
    paperBtn.className = "options";
    scissorsBtn.className = "options";
    playAgain.className = "optionsAfterGame"
})

// functioning the buttons

rockBtn.addEventListener("click", function () {
    playGame("rock");
});


paperBtn.addEventListener("click", function () {
    playGame("paper");
});


scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
});

console.log()