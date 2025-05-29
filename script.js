let options = ["rock", "paper", "scissor"];

/**
 * Function to select choice for computer.
 * 
 * Generates a random number between 0 and 3 (exclusive) as index 
 * to used in options and returns it.
 */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


// Variables to store scores
let humanScore = computerScore = 0;

// Query Selectors
const gameButtons = document.querySelector(".img-container");
const resetButton = document.querySelector(".btn");
const gameOverSection = document.querySelector(".game-over-section")
const winnerDeclaration = document.querySelector("#winner-declaration")
const gameStatus = document.querySelector(".round-status")

function gameOver() {
    gameButtons.style.display = "none";
    let message = " win";
    if (humanScore == 5) {
        message = "You" + message + "!";
    } else message = "Computer" + message + "s!";
    winnerDeclaration.textContent = message;
    gameOverSection.style.display = "flex";
}



function updateScores() {
    const playerScore = document.querySelector("#player-score");
    const compScore = document.querySelector("#computer-score");
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    
    if (Math.max(humanScore, computerScore) == 5) {
        gameOver();
    }
}


/**
 * Function for playing out one round of game.
 * 
 * Checks for choices and outputs appropriate message.
 * 
 * First checks if both entered the same choice, resulting in draw.
 * Then checks for adjacent choices in options array. If element
 * is one higher in the index of the array, then it is a win, else 
 * loss.
 */
function playRound(humanChoice, computerChoice) {
    let humanChoiceWord = options[humanChoice].charAt(0).toUpperCase() + options[humanChoice].slice(1);
    let computerChoiceWord = options[computerChoice].charAt(0).toUpperCase() + options[computerChoice].slice(1);
    if (humanChoice === computerChoice) {
        gameStatus.textContent = `Tie! You both pick ${humanChoiceWord}!`;
    } else if (humanChoice === (computerChoice + 1) % 3) {
        gameStatus.textContent = `You win! ${humanChoiceWord} beats ${computerChoiceWord}!`;
        humanScore++;
    } else {
        gameStatus.textContent = `You lose! ${computerChoiceWord} beats ${humanChoiceWord}!`;
        computerScore++;
    }
    updateScores();
}


gameButtons.addEventListener("click", (event) => {
    const button = event.target.closest(".img-button");

    switch (button.id) {
        case "rock":
            playRound(0, getComputerChoice());
            break;
        case "paper":
            playRound(1, getComputerChoice());
            break;
        case "scissor":
            playRound(2, getComputerChoice());
            break;
    }
});


resetButton.addEventListener("click", () => {
    gameButtons.style.display = "flex";
    gameOverSection.style.display = "none";
    humanScore = computerScore = 0;
    gameStatus.textContent = "Choose your weapon!"
    updateScores();
})