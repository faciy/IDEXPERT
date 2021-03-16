import React from 'react'
import { View, Text } from 'react-native'
import ButtonCustom from '../ButtonCustom';
import styles from './styles';

const CardActivateScreenOne = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.texts}>
                    <Text style={[styles.TextVerificate, { color: '#1F4F4F' }]}>Activer votre compte</Text>
                    <View style={styles.otherText}>
                        <Text style={styles.TextVerificate}>Vos codes ont été envoyé avec succès</Text>
                        <View style={styles.enoughText}>
                            <Text style={styles.TextVerificate} >Vous allez recevoir deux codes
                            d'authentification. Le premier par
                            SMS et le second sur ce mail. Pour le saisir vous avez dès maintenant
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardActivateScreenOne;
