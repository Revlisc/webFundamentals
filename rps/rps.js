let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("playerScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
rock_div.addEventListener('click', game('r')); 
   
    
    paper_div.addEventListener('click', game('p'));
    
    
    scissor_div.addEventListener('click', game('s'));
    
//main();

/*
function main() {
    rock_div.addEventListener('click', game('r')); 
   
    
    paper_div.addEventListener('click', game('p'));
    
    
    scissor_div.addEventListener('click', game('s'));
    
}
*/
function game(userChoice) {
    let compChoice = getCompChoice();
    console.log("comp choice is: " + compChoice + " userchoice is " + userChoice);
    
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("User won");
            win(userChoice, compChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("User lost");
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Tie game");
            tie(userChoice, compChoice);
            break;
    }
}

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const pick = Math.floor(Math.random() * 3);
    console.log("CHOICE IS" + pick);
    return choices[pick];
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertWord(userChoice) + " beats " + convertWord(compChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('greenglow');
    setTimeout(document.getElementById(userChoice).classList.remove('greenglow'), 300);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertWord(userChoice) + " loses to " + convertWord(compChoice) + ". You lose!";
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(document.getElementById(userChoice).classList.remove('redglow'), 300);
}

function tie(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertWord(userChoice) + " equals " + convertWord(compChoice) + ". It's a tie!";
    document.getElementById(userChoice).classList.add('greyglow');
    setTimeout(document.getElementById(userChoice).classList.remove('greyglow'), 300);
}

function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}