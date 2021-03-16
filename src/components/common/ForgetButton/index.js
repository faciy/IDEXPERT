import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ForgetButton = ({onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>Mot de passe oublié?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgetButton
