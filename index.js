let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let titleEl = document.getElementById("title-el");

let num1 =  getRandomCardFromDeck();
let num2 =  getRandomCardFromDeck();
let sum = num1 + num2;
let textSum = num1 + " " + num2;

function startGame() {
    cardEl.textContent = "Cards: " + textSum;    
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        titleEl.textContent = "You have chance to take a card!";
    } else if (sum === 21) {
        titleEl.textContent = "You are winner!";
    } else {
        titleEl.textContent = "You are lost";
    }
}

function newCard() {
    let num = getRandomCardFromDeck();
    console.log(num);
    textSum = textSum + " " + num;
    sum += num;
    startGame();
}

function getRandomCardFromDeck() {
    return Math.floor(Math.random() * 10) + 2;
}
