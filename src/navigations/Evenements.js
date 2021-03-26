import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Evenement from '../screens/Evenement';
import EvenementInfo from '../screens/EvenementInfo';

const Stack = createStackNavigator();

const Evenements = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Evenement" component={Evenement} />
            <Stack.Screen name="EvenementInfo" component={EvenementInfo} />
        </Stack.Navigator>
    )
}

export default Evenements;
