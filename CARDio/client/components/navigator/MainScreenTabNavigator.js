import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation';

import Profile from '../Profile';
import DeckStackNavigator from './DeckStackNavigator';

const MainScreenTabNavigator = TabNavigator({
  Cards: { 
    screen: DeckStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Cards',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
})

export default MainScreenTabNavigator;