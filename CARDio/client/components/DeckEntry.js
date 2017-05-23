import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { navigationOptions } from 'react-navigation'

export default class PreviewDeck extends React.Component {

	render () {
		const { navigate } = this.props.navigation;
    return (
    	<Card
        title='BEGIN WORKOUT'
        >
    		<Button
		      raised
	        title='Start'
	        onPress={() => navigate('Workout')}
	      />
	    </Card>
	  )
	}
}

