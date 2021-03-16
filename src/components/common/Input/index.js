import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';

const Input = ({
    placeholder,
    placeholderTextColor,
    onChangeText,
    icon,
    style,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                {/* image logo */}
                {icon} 
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={style}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default Input;
