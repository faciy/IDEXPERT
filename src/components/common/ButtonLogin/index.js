import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonLogin = ({onPress}) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
            onPress={onPress}
            style={styles.btn}
            >
                <Text style={styles.text}>Connexion</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonLogin
