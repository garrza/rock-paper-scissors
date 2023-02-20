function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    winner = null;
    if (playerSelection.charAt(0) === "r" && computerSelection.charAt(0) === "s") {
        return winner = "player";
    }
    else if (playerSelection.charAt(0) === "p" && computerSelection.charAt(0) === "r") {
        return winner = "player";
    }
    else if (playerSelection.charAt(0) === "s" && computerSelection.charAt(0) === "p") {
        return winner = "player";
    }
    else if (playerSelection.charAt(0) === computerSelection.charAt(0)) {
        return winner = "tie";
    }
    else {
        return winner = "computer";
    }
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 3 && computerWins < 3) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
        if (winner == "player") {
            console.log("You won!");
            playerWins += 1;
        }
        else if (winner == "computer") {
            console.log(`You lost, the computer chose ${computerSelection}!`);
            computerWins += 1;
        }
        else if (winner == "tie") {
            console.log("It is a tie!");
        }
    }
    finalWinner = (playerWins === 3) ? "player" : "computer";
    return `The final winner is the ${finalWinner}, with three wins!`;
}

console.log(playGame());