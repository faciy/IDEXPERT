import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './src/screens/Login';


const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
