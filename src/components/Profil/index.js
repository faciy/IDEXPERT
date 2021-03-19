import React from 'react'
import { View, Text } from 'react-native'
import ProfilHeader from '../common/ProfilHeader';
import ProfilBody from '../common/ProfilBody';
import styles from './styles';

const ProfilComponent = () => {
    return (
        <View style={styles.container}>
            <View>
                <ProfilHeader />
            </View>
            <View>
                <ProfilBody />
            </View>
        </View>
    )
}

export default ProfilComponent;
