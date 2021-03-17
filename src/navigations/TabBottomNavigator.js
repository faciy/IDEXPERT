import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmartCard from '../screens/SmartCard';
import Scan from '../screens/Scan';
import Evenement from '../screens/Evenement';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import lock from '../assets/icons/cloche.png';
import homeicon from '../assets/icons/home.png';
import { useNavigation } from '@react-navigation/native';

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
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {

                    switch (route.name) {
                        case "Home":
                            return (
                                <View style={{
                                    backgroundColor: '#1F4F4F',
                                    width: 60, height: 60, bottom: 20,
                                    borderRadius: 80
                                }}>
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
                                </View>
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
                                    source={lock}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Evenement":
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
                        case "Contact":
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
                    tabBarLabel: ''
                }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Evenement"
                component={Evenement}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
            />

        </Tab.Navigator>
    )
}

export default TabBottomNavigator;
