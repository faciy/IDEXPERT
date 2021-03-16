import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './src/navigations/Navigation';
// import Activate from './src/screens/Activate';
// import Verification from './src/screens/Verification';
// import Register from './src/screens/Register';

// import Login from './src/screens/Login';


const App = () => {


  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
