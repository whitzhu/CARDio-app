import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

export default class CardEntry extends React.Component {
  render() {
    return (
      <Card
			  title={this.props.currentCard}
			  >
			  <Button
				  raised
				  title='NEXT' 
				  onPress={() => this.props.nextCard()} />
			</Card>
    )
  }
}
