import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmartCard from '../screens/SmartCard';
import Scan from '../screens/Scan';
import Evenements from '../navigations/Evenements';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import lock from '../assets/icons/cloche.png';
import homeicon from '../assets/icons/home.png';
import calendar from '../assets/icons/calendar.png';
import contact from '../assets/images/contact.png';
import { useNavigation } from '@react-navigation/native';
import phonescan from '../assets/icons/phonescan.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTabBar from '../components/MyTabBar';



const Tab = createBottomTabNavigator();

const tabOptions = {
    style: {
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        position: 'absolute'
    }
}

const TabBottomNavigator = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
        initialRouteName='Home'
            tabBarOptions={tabOptions}
            tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name="SmartCard"
                component={SmartCard}
                initialParams={{icon : lock}}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
                initialParams={{icon : phonescan}}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Evenements',
                }}
                name="Evenements"
                component={Evenements}
                initialParams={{icon : calendar}}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
                initialParams={{icon : contact}}

            />

        </Tab.Navigator>
    )
}

export default TabBottomNavigator;