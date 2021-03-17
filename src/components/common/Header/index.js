import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Header = ({textOne, textTwo, image}) => {
    return (
        <View style={styles.container}>
                <View style={styles.name}>
                    <Text style={styles.text}>{textOne}</Text>
                    <Text style={styles.text}>{textTwo}</Text>
                </View>
                <View style={styles.photoContainer}>
                    {image}
                </View>
        </View>
    )
}

export default Header;
