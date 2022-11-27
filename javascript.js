function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function getPlayerChoice() {    
    let choice = Math.floor(Math.random() * 3);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
    //return "rock";
    //return prompt("Type your choice").toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    let result;

    switch (playerSelection) {

        case "rock" : switch (computerSelection) {
            case "rock" : result = "draw"; break;
            case "paper" : result = "lose"; break;
            case "scissors" : result = "win"; break;
        } break;

        case "paper" : switch (computerSelection) {
            case "rock" : result = "win"; break;
            case "paper" : result = "draw"; break;
            case "scissors" : result = "lose"; break;
        } break;

        case "scissors" : switch (computerSelection) {
            case "rock" : result = "lose"; break;
            case "paper" : result = "win"; break;
            case "scissors" : result = "draw"; break;
        } break;

    }    

    return result;
}

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;

    console.log("p = " + playerScore + "\nc = " + computerScore);

    for (let i = 0; i < rounds; i++) {
        switch (playRound(getPlayerChoice(), getComputerChoice())) {
            case "win" : playerScore++; break;
            case "lose" : computerScore++; break;
        };
        console.log("p = " + playerScore + "\nc = " + computerScore);
    }

    return playerScore > computerScore ? "You win" : playerScore === computerScore ? "It's a draw" : "You lose";
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('.result');

rockBtn.addEventListener('click', () => {
    result.textContent = playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click',  () => {
    result.textContent = playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click',  () => {
    result.textContent = playRound('scissors', getComputerChoice());
});