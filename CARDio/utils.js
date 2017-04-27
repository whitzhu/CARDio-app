/* 
	These are the helper functions for:
	 - creating an unshuffled deck
	 - shuffling a deck
*/
var exports = module.exports = {

	// This function creates a new (un-shuffled) deck
	create: function() {
		var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
		var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King ']
		var deck = []
		suits.forEach(function(suit) {
			values.forEach(function(value) {
				deck.push(value + ' of ' + suit)
			})
		})
		return deck
	},

// This function shuffles a given deck
	shuffle: function(deck) {

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
}

// var test = createDeck()

// console.log('new deck: ', test)
// console.log('shuffled deck: ', shuffleDeck(test))