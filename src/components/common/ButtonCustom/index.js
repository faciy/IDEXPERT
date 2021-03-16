import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonCustom = ({onPress, text}) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
            onPress={onPress}
            style={styles.btn}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonCustom;
