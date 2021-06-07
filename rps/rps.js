let wins = 0;
let losses = 0;
let ties = 0;

function runGame() {
    getPlay();
    getComputerMove();
    
}

function getPlay() {
    let play = prompt("What is your play?");
    if (play === null) {
        alert("Please close the tab");
    }
    play = play.toLowerCase();
    
    switch(play) {
        case "rock":
            play === "rock";
            break;
        case "paper":
            play === "paper";
            break;
        case "scissors":
            play === "scissors";
            break;
    }
    return play;
}
function getComputerMove() {
    let num = Math.random();
    let compMove = "";
    if (num <= 0.34) {
        compMove === "paper";
    } else if (num <= 0.67) {
        compMove === "rock";
    } else {
        compMove === "scissors"
    }
    return compMove;
}

function calculate(play, compMove) {
    if ((play === "scissors" && compMove === "scissors") || (play === "paper" && compMove === "paper") || (play === "rock" && compMove === "rock")) {
        alert("Tie game!");
        ties++;
        return ties;
    } else if ((play === "scissors" && compMove === "paper") || (play === "paper" && compMove === "rock") || (play === "rock" && compMove === "scissors")) {
        alert("You win!");
        wins++;
        return wins;
    } else {
        alert("You lost!");
        losses++;
        return losses;
    }   
}