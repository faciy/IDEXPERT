import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Register from './src/screens/Register';
// import Login from './src/screens/Login';


const App = () => {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
