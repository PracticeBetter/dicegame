// Generates Number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

//create variables that are tied up to dice images
var d1 = "images/dice1.png";
var d2 = "images/dice2.png";
var d3 = "images/dice3.png";
var d4 = "images/dice4.png";
var d5 = "images/dice5.png";
var d6 = "images/dice6.png";



// // put dice images in an array

var dice = [d1, d2, d3, d4, d5, d6];
randomDiceImg = dice[randomNumber1];
randomDiceImg2 = dice[randomNumber2];

// get random dice number

document.querySelector(".dice1").setAttribute("src", randomDiceImg);
document.querySelector(".dice2").setAttribute("src", randomDiceImg2);

// display winner

if (randomNumber1 > randomNumber2) {
    document.querySelector(".refresh").innerHTML = "<i class='fa-regular fa-flag flag' style='color: #db0a0a;'></i>  Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".refresh").innerHTML = "Player 2 wins!  <i class='fa-regular fa-flag flag' style='color: #db0a0a;'></i>";
} 
else {
    document.querySelector(".refresh").textContent = "Draw!";
}