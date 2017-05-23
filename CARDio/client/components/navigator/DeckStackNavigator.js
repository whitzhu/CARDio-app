import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../Home'
import SelectDeckView from '../SelectDeckView'
import CreateDeckView from '../CreateDeckView'
import WorkoutView from '../WorkoutView'
import PreviewDeckView from '../PreviewDeckView'

const DeckStackNavigator = StackNavigator({
  Home: { screen: Home },
  SelectDeckView: { screen: SelectDeckView },
  CreateDeckView: { screen: CreateDeckView },
  WorkoutView: { screen: WorkoutView },
  PreviewDeckView: { screen: PreviewDeckView }
})

export default DeckStackNavigator;