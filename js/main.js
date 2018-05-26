// create an array to store all cards
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamondss",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

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
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);

	//add card to array of cards in play
	cardsInPlay.push(cards[cardId].rank);	

	// check to see if two cards played
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);
