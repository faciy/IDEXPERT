import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import DrawerContent from '../components/DrawerContent';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
