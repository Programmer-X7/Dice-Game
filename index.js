const title = document.querySelector("#title h1");
const diceP1 = document.querySelector(".child-1 img");
const diceP2 = document.querySelector(".child-2 img");
const diceImage = [
    "./assets/dice1.png",
    "./assets/dice2.png",
    "./assets/dice3.png",
    "./assets/dice4.png",
    "./assets/dice5.png",
    "./assets/dice6.png"
];

function play() {
    const randomNumberP1 = Math.floor(Math.random() * 6);
    const randomNumberP2 = Math.floor(Math.random() * 6);

    diceP1.setAttribute("src", diceImage[randomNumberP1]);
    diceP2.setAttribute("src", diceImage[randomNumberP2]);

    if (randomNumberP1 > randomNumberP2)
        title.innerHTML = "Player 1 Wins🎉!"
    else if (randomNumberP1 < randomNumberP2)
        title.innerHTML = "Player 2 Wins🎉!"
    else
        title.innerHTML = "Draw🥱!"
}

