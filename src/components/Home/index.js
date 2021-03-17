import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import Header from '../common/Header';
import photo from '../../assets/images/photo.jpg';
import Body from '../common/Body';
import logo from '../../assets/icons/logoIdExpert.png';
import notification from '../../assets/icons/notification.png';

const HomeComponent = () => {

    const ButtonNotif = () => {
        console.log('notification')
    }

    return (
        <View style={styles.container}>
            <Navbar
                imageLogo={<Image 
                source={logo}
                />}
                imageOther={<Image
                    style={styles.notification} 
                    source={notification}
                    />}
                onPress={() => ButtonNotif()}
            />
            <Header
                textOne={<Text>BIENVENUE FRANCK BONI</Text>}
                textTwo={<Text>FullStack</Text>}
                image={<Image
                    style={styles.photo}
                    source={photo} />}
            />
            <Body />
        </View>
    )
}

export default HomeComponent;
