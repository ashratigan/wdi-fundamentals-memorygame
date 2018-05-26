// create an array to store all cards
var cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
	},
	{
	rank: 'queen',
	suit: 'diamondss',
	cardImage: 'images/queen-of-diamonds.png'
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
	}
];

// create an array to store cards in play
var cardsInPlay = [];

// function to see if two cards match
var checkForMatch = function(){
	// check to see if two cards match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match');
	} else {
		alert('Sorry, try again');
	}
};

// function to store all steps when card is flipped
var flipCard = function(){
	// get data-id of flipped card and cache
	cardId = this.getAttribute('data-id');
	console.log(cardId);

	// //add card to array of cards in play
  	cardsInPlay.push(cards[cardId].rank);

	// Display the card's image
  	this.setAttribute('src', cards[cardId].cardImage);

	// check to see if two cards played
	if (cardsInPlay.length === 2) {
		// if so check if match
		checkForMatch();
		//Empty cards in play for next array
		cardsInPlay = [];
	}
};

// function to create board
var createBoard = function () {
	// loop through cards for board
	for (var i = 0; i < cards.length; i++) {
		// create image used as card
		var cardElement = document.createElement('img');

		// set src to display card back
		cardElement.setAttribute('src', 'images/back.png');

		// set cards data-id to index of currnet element
		cardElement.setAttribute('data-id', i);

		// add event listener
		cardElement.addEventListener('click', flipCard);

		// add card to board
		document.getElementById('game-board').appendChild(cardElement);

	}
}

// Call createBoard to create board
createBoard();

