import React from 'react'
import { View, Image } from 'react-native';
import styles from './styles';

const QrCode = ({ qrcodeImage }) => {
    return (
        <View style={styles.container}>
            {qrcodeImage}
        </View>
    )
}

export default QrCode;
