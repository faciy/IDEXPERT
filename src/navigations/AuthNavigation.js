import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import ActivateNavigator from '../navigations/ActivateNavigation';
import HomeNavigator from '../navigations/HomeNavigator';


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
            <Stack.Screen name="ActivateNavigator" component={ActivateNavigator} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
