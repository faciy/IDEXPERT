import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import scan from '../../assets/images/scan.png';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const ScanComponent = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Navbar
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
                <View style={{marginTop:50}}>
                    <Text style={styles.text} >Nom du cabinet</Text>
                </View>
            </View>
            {/* code scan  */}
            <View style={styles.scan} >
                <Image 
                source={scan}
                />
            </View>
        </View>
    )
}

export default ScanComponent;
