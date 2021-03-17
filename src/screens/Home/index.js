import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import HomeComponent from '../../components/Home'

const Home = () => {
    return (
        <View style={styles.container}>
            <HomeComponent />
        </View>
    )
}

export default Home;
