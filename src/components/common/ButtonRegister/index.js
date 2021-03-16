import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonRegister = ({onPress}) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
            onPress={onPress}
            style={styles.btn}
            >
                <Text style={styles.text}>Valider</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRegister
