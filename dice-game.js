function rollDice() {
    let goldCoins = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert(roll);
        if (roll === 1) {
            alert("Game over, no more rolls");
            break;
        } else if (roll < 4) {
            continue;
        } else if (roll === 4) {
            goldCoins -= 1;
            alert("You lost one coin! You have " + goldCoins + " coins.");
        } else if (roll === 5) {
            goldCoins += 5;
            alert("You win five gold coins! You have " + goldCoins + " coins.");
        } else {
            goldCoins += 6;
            alert("You win six gold coins! You have " + goldCoins + " coins.");
        }
    }
    alert("You ended with " + goldCoins + " gold coins.");
}