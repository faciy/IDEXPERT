import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SmartCard from '../screens/SmartCard';
import TabBottomNavigator from './TabBottomNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
