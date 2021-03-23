import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import imagefond from '../../assets/images/imagefond.png';
import styles from './styles';
import Navbar from '../common/Navbar';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import ProfilPhoto from '../common/ProfilPhoto';
import photo from '../../assets/images/photo.jpg';
import QrCode from '../common/QrCode';
import Qrcode from '../../assets/images/Qrcode.png';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const SmartCardComponent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <ImageBackground source={imagefond} style={styles.background}>
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
                <ProfilPhoto 
                imageProfil={<Image
                style={styles.photo}
                source={photo}
                />}
                text={<Text numberOfLines={1} style={{color:'white', 
                textAlign:'center',
                }}>FRANCK BONI</Text>}
                />
                <Text style={styles.name} >Nom du cabinet</Text>
                <QrCode 
                qrcodeImage={<Image 
                source={Qrcode}
                />}
                />
            </ImageBackground>
        </View>
    )
}

export default SmartCardComponent;
