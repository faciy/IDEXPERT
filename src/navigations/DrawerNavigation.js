import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from '../navigations/HomeNavigator';
import TabBottomNavigator from '../navigations/TabBottomNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;