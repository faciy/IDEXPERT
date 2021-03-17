import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TabBottomNavigator from '../navigations/TabBottomNavigator';


const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;
