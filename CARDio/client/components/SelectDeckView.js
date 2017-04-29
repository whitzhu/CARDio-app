import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { navigationOptions } from 'react-navigation'

export default class SelectDeckView extends React.Component {

	static navigationOptions = {
    title: 'Decks'
  };

	render () {
		const { navigate } = this.props.navigation;
    return (
    	<Card
    		title='SELECT AN EXISTING DECK'
    		>
    		<Button
		      raised
	        title='Default deck'
	        onPress={() => navigate('PreviewDeckView')}
	      />
	    </Card>
	  )
	}
}
