import React from 'react'
import { View, Image, Text } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import ContactList from '../common/ContactList';

const ContactComponent = () => {
    return (
        <View>
            <View style={styles.header}>
                <Navbar
                     imageLogo={<Image 
                    style={styles.img}
                    source={imageLogo} />}
                    imageOther={<Image
                        style={styles.menu}
                        source={Menu} />}
                />
                <View style={{marginTop:20}}>
                    <Text style={styles.text} >LISTE DES CONTACTS</Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                    <View style={styles.body}>
                        <ContactList />
                    </View>
            </View>
        </View>
    )
}

export default ContactComponent;
