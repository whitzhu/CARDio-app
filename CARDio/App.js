import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './utils.js'

import CardEntry from './components/cardEntry'

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      deck: null,
      currentCard: null,
      currentIndex: 0
    }

    this.nextCard = this.nextCard.bind(this)
  }

  nextCard = function() {
    var next = this.state.deck[this.state.currentIndex + 1]
    if (next) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentCard: this.state.deck[this.state.currentIndex + 1]
      })
    } else {
      this.setState({
        currentCard: 'You finished the deck!'
      })
    }
  }

  componentDidMount() {
    var newDeck = Deck.shuffle(Deck.create())
    this.setState({
      deck: newDeck,
      currentCard: newDeck[this.state.currentIndex]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>CARDio</Text>
        <CardEntry 
          currentCard={this.state.currentCard}
          nextCard={this.nextCard} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
