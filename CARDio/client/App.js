import React from 'react'
import { StyleSheet, View } from 'react-native'

import MainScreenTabNavigator from './components/navigator/MainScreenTabNavigator'


const App = () => (
  <View style={styles.container}>
    <MainScreenTabNavigator/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
