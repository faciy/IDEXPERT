import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Verification" component={Verification} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
