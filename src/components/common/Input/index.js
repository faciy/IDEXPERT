import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
// import email from '../../../assets/icons/email.png'

const Input = ({
    placeholder,
    placeholderTextColor,
    onChangeText,
    icon
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.email}>
                {/* image logo */}
                {icon} 
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={styles.textInput}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default Input;
