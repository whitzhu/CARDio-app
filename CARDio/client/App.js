import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Deck from './utils.js'

import CardEntry from './components/cardEntry'
import Home from './components/Home'
import SelectDeckView from './components/SelectDeckView'
import CreateDeckView from './components/CreateDeckView'
import WorkoutView from './components/WorkoutView'
import PreviewDeckView from './components/PreviewDeckView'

const App = StackNavigator({
  Home: { screen: Home },
  SelectDeckView: { screen: SelectDeckView },
  CreateDeckView: { screen: CreateDeckView },
  WorkoutView: { screen: WorkoutView },
  PreviewDeckView: { screen: PreviewDeckView }
})

export default App
