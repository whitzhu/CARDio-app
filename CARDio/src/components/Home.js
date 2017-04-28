import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { navigationOptions } from 'react-navigation'

export default class Home extends React.Component {

	static navigationOptions = {
    title: 'Menu'
  };

	render () {
		const { navigate } = this.props.navigation;
    return (
	    	<Card
	    		title='OPTIONS'
	    		>
		      <Button
			      raised
		        title='Select a deck'
		        onPress={() => navigate('SelectDeckView')}
		      />
		      <Button
			      raised
		        title='Create a deck'
		        onPress={() => navigate('CreateDeckView')}
		      />
		    </Card>
	  )
	}
}
