let options = ["rock", "paper", "scissor"];

/***
 * Function to select choice for computer.
 * 
 * Generates a random number between 0 and 3 (exclusive) as index 
 * to used in options and returns it.
 */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


/***
 * Function to select choice for user
 * 
 * Prompts user for input and checks if it is valid
 * Returns index of that choice in options
 */
function getHumanChoice() {
    while (true) {
        let userChoice = prompt("Enter your choice: ").toLowerCase();
        if (options.includes(userChoice)) {
            return options.indexOf(userChoice);
        }
        console.log("Invalid choice, try again. Choices are 'rock', 'paper', and 'scissor'");
    }
}


// Variables to store scores
let humanScore = computerScore = 0;

function updateScores() {
    const playerScore = document.querySelector("#player-score");
    const compScore = document.querySelector("#computer-score");
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    if (Math.max(playerScore, compScore) === 5) {
        gameOver();
    }
}

/***
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
        console.log(`Tie! You both pick ${humanChoiceWord}`);
    } else if (humanChoice === (computerChoice + 1) % 3) {
        console.log(`You win! ${humanChoiceWord} beats ${computerChoiceWord}`);
        humanScore++;
    } else {
        console.log(`You lose! ${humanChoiceWord} beats ${computerChoiceWord}`);
        computerScore++;
    }
    updateScores();
}

const buttons = document.querySelector(".img-container");

buttons.addEventListener("click", (event) => {
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


/***
 * Function to run the game
 * 
 * Plays five rounds of the game by calling playRound and
 * then outputs an appropriate message based on who won.
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lost.");
    } else {
        console.log("Game ended in a draw.");
    }
}


// Runs the game
// playGame();

