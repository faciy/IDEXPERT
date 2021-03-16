import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const OtherButton = ({onPress,text}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OtherButton;
