import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmartCard from '../screens/SmartCard';
import Scan from '../screens/Scan';
import Notification from '../screens/Notification';
import Contact from '../screens/Contact';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabBottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={'Home'}>
            <Tab.Screen 
            options={{
                tabBarVisible:false
            }}
            name="SmartCard" 
            component={SmartCard} />
            <Tab.Screen 
            options={{
                tabBarVisible:false
            }}
            name="Scan" 
            component={Scan} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
    )
}

export default TabBottomNavigator;
