import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TabBottomNavigator from '../navigations/TabBottomNavigator';
import NotificationNavigation from '../navigations/NotificationNavigation';
import DrawerNavigation from '../navigations/DrawerNavigation';


const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
            <Stack.Screen 
            options={{
                tabBarLabel: 'Notification'
            }}
            name="NotificationNavigation" 
            component={NotificationNavigation} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;
