import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';

const Input = ({
    placeholder,
    placeholderTextColor,
    onChangeText,
    icon,
    style,
    iconList,
    initial,
    value,
    securePass,
    iconRight
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                {/* image logo */}
                {icon} 
                {initial}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={style}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={securePass}
                />
                {iconRight}
                {iconList}
            </View>
        </View>
    )
}

export default Input;
