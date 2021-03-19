import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthNavigation from '../navigations/AuthNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AuthNavigation" component={AuthNavigation} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;