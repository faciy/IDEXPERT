import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmartCard from '../screens/SmartCard';
import Scan from '../screens/Scan';
import EvenementNavigation from '../navigations/EvenementNavigation';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import lock from '../assets/icons/cloche.png';
import homeicon from '../assets/icons/home.png';
import calendar from '../assets/icons/calendar.png';
import contact from '../assets/images/contact.png';
import { useNavigation } from '@react-navigation/native';
import phonescan from '../assets/icons/phonescan.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {     
                    switch (route.name) {
                        case "Home":
                            return (
                               
                                    <TouchableOpacity style={{
                                    backgroundColor: '#1F4F4F',
                                    width: 60, height: 60, bottom: 20,
                                    borderRadius: 80
                                }}
                                onPress={() => navigation.reset({
                                    routes: [{ name: 'Home' }],
                                  })}>
                                   
                                    <View style={{
                                        backgroundColor: '#127171',
                                        borderRadius: 100, width: 40, height: 40, alignSelf: 'center',
                                        marginTop: 10
                                    }}>
                                        <Image
                                            source={homeicon}
                                            resizeMode="contain"
                                            style={{
                                                tintColor: 'white',
                                                width: 20,
                                                height: 20,
                                                alignSelf: 'center',
                                                top: 8
                                            }}
                                        />
                                    </View> 
                                </TouchableOpacity>
                    
                               
                            )
                        case "SmartCard":
                            return (
                                <Image
                                    source={lock}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Scan":
                            return (
                                <Image
                                    source={phonescan}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "EvenementNavigation":
                            return (
                                <Image
                                    source={calendar}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Contact":
                            return (
                                <Image
                                    source={contact}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        default:
                            break;
                    }
                }
            })}
        >

            <Tab.Screen
                name="SmartCard"
                component={SmartCard}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
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
                    tabBarLabel: 'Evenement',
                }}
                name="EvenementNavigation"
                component={EvenementNavigation}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
            />

        </Tab.Navigator>
    )
}

export default TabBottomNavigator;
