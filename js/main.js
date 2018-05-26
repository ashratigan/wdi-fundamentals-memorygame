// create an array to store all cards
var cards = ["queen", "queen", "king", "king"];

// create an array to store cards in play
var cardsInPlay = [];

// check to see if two cards match
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}

// function to store all steps when card is flipped
var flipCard = function(cardId){
	// display card user just flipped
	console.log("User flipped " + cards[cardId]);

	//add card to array of cards in play
	cardsInPlay.push(cards[cardId]);	

	// check to see if two cards played
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);