/* 
	These are the helper functions for:
	 - creating an unshuffled deck
	 - shuffling a deck
*/

// This function creates a new (un-shuffled) deck
var createDeck = function() {
	var suits = ['hearts', 'diamonds', 'spades', 'clubs']
	var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
	var deck = []
	suits.forEach(function(suit) {
		values.forEach(function(value) {
			deck.push(value + ' of ' + suit)
		})
	})
	return deck
}

// This function shuffles a given deck
var shuffleDeck = function(deck) {

	// This is a swap helper function
	// We will use it to swap two values in the deck
	var swap = function(a, b) {
		var temp = deck[a]
		deck[a] = deck [b]
		deck[b] = temp
	}

	deck.forEach(function(card, currIndex) {
		var randomIndex = Math.floor(Math.random() * (deck.length - 1))
		swap(currIndex, randomIndex)
	})

	return deck
}

var test = createDeck()

console.log('new deck: ', test)
console.log('shuffled deck: ', shuffleDeck(test))