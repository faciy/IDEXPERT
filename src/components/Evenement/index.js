import React from 'react'
import { View, Image, Text } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';

const EvenementComponent = () => {
    return (
        <View>
            <View style={styles.header}>
                <Navbar
                    imageLogo={<Image source={imageLogo} />}
                    imageOther={<Image
                        style={styles.menu}
                        source={Menu} />}
                />
                <View style={{marginTop:50}}>
                    <Text style={styles.text} >EVENEMENT</Text>
                </View>
            </View>
            <View style={styles.body}>
                    <Text>ok</Text>
            </View>
        </View>
    )
}

export default EvenementComponent;
