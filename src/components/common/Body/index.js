import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles';
import contact from '../../../assets/images/contact.png';
import { useNavigation } from '@react-navigation/native';
import calendar from '../../../assets/icons/calendar.png';
import lock from '../../../assets/icons/cloche.png';
import phonescan from '../../../assets/icons/phonescan.png';

const Body = () => {
    const navigation = useNavigation();
    
    const ButtonSmart = () => {
        navigation.navigate('SmartCard')
    }

    const ButtonScan = () => {
        navigation.navigate('Scan')
    }

    const ButtonEven = () => {
        navigation.navigate('EvenementNavigation')
    }

    const ButtonContact = () => {
        navigation.navigate('Contact')
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardOne}>
                <TouchableOpacity
                onPress={() => ButtonSmart()}
                style={styles.card}>
                    <Image 
                    style={styles.img}
                    source={lock} />
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => ButtonScan()}
                style={styles.card}>
                    <Image 
                    style={styles.img}
                    source={phonescan} />
                </TouchableOpacity>   
            </View>
{/* card two  */}
            <View style={styles.cardTwo}>
                <TouchableOpacity
                onPress={() => ButtonEven()}
                style={styles.card}>
                    <Image 
                    style={styles.img}
                    source={calendar} />
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => ButtonContact()}
                style={styles.card}>
                    <Image 
                    style={styles.img}
                    source={contact} />
                </TouchableOpacity>   
            </View>
            
        </View>
    )
}

export default Body;
