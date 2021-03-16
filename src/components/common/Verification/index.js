import React from 'react'
import { View, Text } from 'react-native'
import ButtonCustom from '../ButtonCustom';
import styles from './styles';

const CardVerification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.texts}>
                    <Text style={[styles.TextVerificate, { color: '#1F4F4F' }]}>Vérification des coordonnées</Text>
                    <View style={styles.otherText}>
                        <Text style={styles.TextVerificate}>Est-ce votre numéro de téléphone?</Text>
                        <View style={styles.number}>
                            <Text style={styles.TextVerificate} >+225 00 00 00 00 00</Text>
                        </View>
                        <View style={styles.enoughText}>
                            <Text style={styles.TextVerificate} >Vous allez recevoir deux codes
                            d'authentification. Le premier par
                            SMS et le second sur ce mail
                            </Text>
                        </View>
                        <View style={styles.emailText}>
                            <Text style={styles.TextVerificate} >boni************@gmail.com
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardVerification;
