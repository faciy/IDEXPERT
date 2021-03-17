import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

const ProfilPhoto = ({imageProfil, text, nameCabinet}) => {
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.green}>
                    <View style={styles.photo} >
                        {imageProfil}
                        <View style={styles.text}>
                            {text}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfilPhoto;
