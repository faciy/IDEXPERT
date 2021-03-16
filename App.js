import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Activate from './src/screens/Activate';
// import Verification from './src/screens/Verification';
// import Register from './src/screens/Register';

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
