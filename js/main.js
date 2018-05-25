// create an array to store all cards
var cards = ["queen", "queen", "king", "king"];

// create an array to store cards in play
var cardsInPlay = [];

// example cardOne and cardTwo
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

// check to see if two cards have been played
if (cardsInPlay.length === 2) {
	// check to see if two cards match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}