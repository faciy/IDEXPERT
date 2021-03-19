import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from '../screens/Notification';


const Stack = createStackNavigator();

const NotificationNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

export default NotificationNavigation;
