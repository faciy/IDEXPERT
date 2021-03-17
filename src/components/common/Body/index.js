import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles';
import contact from '../../../assets/images/contact.png';

const Body = () => {
    
    const ButtonSmart = () => {
        console.log('buttonsmart')
    }

    const ButtonScan = () => {
        console.log('buttonscan')
    }

    const ButtonEven = () => {
        console.log('buttonEven')
    }

    const ButtonContact = () => {
        console.log('buttonContact')
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardOne}>
                <TouchableOpacity
                onPress={() => ButtonSmart()}
                style={styles.card}>
                    <Image source={contact} />
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => ButtonScan()}
                style={styles.card}>
                    <Image source={contact} />
                </TouchableOpacity>   
            </View>
{/* card two  */}
            <View style={styles.cardTwo}>
                <TouchableOpacity
                onPress={() => ButtonEven()}
                style={styles.card}>
                    <Image source={contact} />
                    <Text style={styles.text} >EVENEMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => ButtonContact()}
                style={styles.card}>
                    <Image source={contact} />
                    <Text style={styles.text}>CONTACTS</Text>
                </TouchableOpacity>   
            </View>
            
        </View>
    )
}

export default Body;
