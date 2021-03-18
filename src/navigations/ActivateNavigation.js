import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Activate from '../screens/Activate';


const Stack = createStackNavigator();

const ActivateNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Activate" component={Activate} />
        </Stack.Navigator>
    )
}

export default ActivateNavigator;
