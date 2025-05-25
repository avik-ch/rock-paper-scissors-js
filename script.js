let options = ["rock", "paper", "scissors"];

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
            return options.findIndex(userChoice);
        }
        console.log("Invalid choice, try again.");
    }
}

let humanScore = computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === (computerChoice + 1) % 3) {
        console.log(`You win! ${options[humanChoice]} beats ${options[computerChoice]}`);
        humanScore++;
    } else {
        console.log(`You lose! ${options[computerChoice]} beats ${options[humanChoice]}`);
        computerScore++;
    }
}



