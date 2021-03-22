import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TabBottomNavigator from '../navigations/TabBottomNavigator';
import NotificationNavigation from '../navigations/NotificationNavigation';
import Profil from '../screens/Profil';
import ProfilModified from '../screens/ProfilModified';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
            <Stack.Screen 
            options={{
                tabBarLabel: 'Notification'
            }}
            name="NotificationNavigation" 
            component={NotificationNavigation} />
            <Stack.Screen name="Profil" component={Profil} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="ProfilModified" component={ProfilModified} />

        </Stack.Navigator>
    )
}

export default HomeNavigator;
