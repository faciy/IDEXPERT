import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import ContactList from '../common/ContactList';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const ContactComponent = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Navbar
                     imageLogo={<Image 
                    style={styles.img}
                    source={imageLogo} />}
                    imageLogo={<Image
                        style={styles.img}
                        source={imageLogo} />}
                    imageOther={
                        <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                        >
                            <Image
                                style={styles.menu}
                                source={Menu} />
                        </TouchableOpacity>}
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
