import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { navigationOptions } from 'react-navigation'

export default class CreateDeckView extends React.Component {

	render () {
		const { navigate } = this.props.navigation;
    return (
    	<Card
    		title='Create your own deck'
    		>
    		<FormLabel>Workout 1</FormLabel>
				<FormInput />
				<FormLabel>Workout 2</FormLabel>
				<FormInput />
				<FormLabel>Workout 3</FormLabel>
				<FormInput />
				<FormLabel>Workout 4</FormLabel>
				<FormInput />
				<Button
					title='Save Deck'
					onPress={() => navigate('SelectDeckView')}
					/>
	    </Card>
	  )
	}
}
