import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { navigationOptions } from 'react-navigation'

export default class CreateDeckView extends React.Component {

	render () {
		const { navigate } = this.props.navigation;
    return (
    	<Card
    		title='Create your own deck'
    		>
	    </Card>
	  )
	}
}
