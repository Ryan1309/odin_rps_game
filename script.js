game();

function computerPlay() {
    let choiceArray = [
        'rock', 'paper', 'scissors'
    ];
    let randomNumber = Math.floor(Math.random() * choiceArray.length);
    let computerAnswer = choiceArray[randomNumber];
    return computerAnswer;
}

function playerPrompt() {
    let playerAnswer = prompt("rock, paper, or scissors?");
    while (playerAnswer !== "rock" && playerAnswer !== "paper" && playerAnswer !== "scissors") {
        alert("Wrong entry, you entered: " + playerAnswer);
        let playerAnswer = prompt("rock, paper, or scissors?");
    }
    return playerAnswer;
}

function playRound(playerSelection, computerSelection) {
    let i = 0;
    let win = 0;
    if (playerSelection == computerSelection) {
        i = 1;
        console.log("Tie");
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                i = 2;
            }

        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                i = 2;
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper') {
                i = 2;

            }
        }
        if (i = 2) {
            console.log("You win!");
            win = 1;
        } else {
            console.log("Loser");
        }
    }
    return win;
}

function game() {
    let win = 0;
    for (let j = 0; j < 5; j++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPrompt();
        console.log("You played: " + playerSelection + ", computer played: " + computerSelection);
        win = win + playRound(computerSelection, playerSelection);
    }
    alert("You won " +win+ " times");
}

