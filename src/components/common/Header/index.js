import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = ({textOne, textTwo,buttonDec, image}) => {
    return (
        <View style={styles.container}>
                <View style={styles.name}>
                    <Text style={styles.text}>{textOne}</Text>
                    <Text style={styles.text}>{textTwo}</Text>
                    <View>
                        {buttonDec}
                    </View>
                </View>
                <View style={styles.photoContainer}>
                    {image}
                </View>
        </View>
    )
}

export default Header;
