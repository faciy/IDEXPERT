import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';

const HomeComponent = () => {
    return (
        <View style={styles.container}>
            <Navbar />
        </View>
    )
}

export default HomeComponent;
