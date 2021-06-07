function runGame(){
    const target = Math.floor(Math.random() * 100) + 1;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    do {
        let guessString = prompt("Pick a number between 1 and 100");
        if (guessString === null) {
            return;
        }
        ++numTries;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while (!correct);
    alert("you got the target number in" + numTries + " tries!");
}

function checkGuess(guessNumber, target) {
    let correct = false;
    if (isNaN(guessNumber)) {
        alert("You did not enter a number");
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert("Your guess is out of range!");
    } else if (guessNumber < target) {
        alert("Your guess is too low");
    } else if (guessNumber > target) {
        alert("Your guess is too high");
    } else {
        correct = true;

    }
    return correct;
}