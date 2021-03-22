import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ProfilHeaderModified from '../common/PorfilHeaderModified';
import ProfilBodyModified from '../common/ProfilBodyModified';
import styles from './styles';

const ProfilComponent = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <ProfilHeaderModified />
            </View>
            <ScrollView>
                <ProfilBodyModified />
            </ScrollView>
        </ScrollView>
    )
}

export default ProfilComponent;
