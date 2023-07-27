let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let titleEl = document.getElementById("title-el");

let num1 =  getRandomCardFromDeck();
let num2 =  getRandomCardFromDeck();
let sum = num1 + num2;
let displayNumbers = num1 + " " + num2;

let isGameOver = false;


function startGame() {
    
    //if isgameover is true then 
    // 1. set to false
    // 2. set random numbers and sum
    if(isGameOver === true) {
        isGameOver = false;
        num1 = getRandomCardFromDeck();
        num2 = getRandomCardFromDeck();
        sum = num1 + num2;
        displayNumbers = num1 + " " + num2;

    }
    cardEl.textContent = "Cards: " + displayNumbers;    
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        titleEl.textContent = "You have chance to take a card!";
        isGameOver = false;
    } else if (sum === 21) {
        titleEl.textContent = "You are winner!";
        isGameOver = true;
    } else {
        titleEl.textContent = "You are lost";
        isGameOver = true;
    }
}

function newCard() {
    if(isGameOver === false) {
        let num = getRandomCardFromDeck();
        displayNumbers = displayNumbers + " " + num;
        sum += num; 
    startGame();

    }
}

function getRandomCardFromDeck() {
    return Math.floor(Math.random() * 10) + 2;
}