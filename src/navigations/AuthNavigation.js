import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeNavigator from '../navigations/HomeNavigator';
import Verification from '../screens/Verification';


const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
