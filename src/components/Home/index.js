import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import Header from '../common/Header';
import photo from '../../assets/images/photo.jpg';
import Body from '../common/Body';
import logo from '../../assets/icons/logoIdExpert.png';
import iconMail from '../../assets/icons/iconMail.png';
import { useNavigation } from '@react-navigation/native';
import bell from '../../assets/icons/bell.png';
import { Badge } from 'react-native-paper';
import power from '../../assets/icons/power-button.png';

const HomeComponent = () => {
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false)

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }

    const closeModal = (bool) => {
        changeModalVisible(bool)
        navigation.navigate('Login')
    }

    const ButtonNotif = () => {
        navigation.navigate('NotificationNavigation')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Navbar
                    imageLogo={<Image
                        style={styles.logo}
                        source={logo}
                    />}
                    imageOther={
                    <View style={styles.blocNotifAndPower}>
                        <TouchableOpacity
                            onPress={() => ButtonNotif()}
                            style={{alignSelf:'center'}}
                            >
                        <Image
                            style={styles.notification}
                            source={bell}
                        />
                            <Badge style={styles.badge}>3</Badge>
                        </TouchableOpacity>
                    </View>
                    }
                    power={
                        <TouchableOpacity
                        onPress={() => changeModalVisible(true)}
                        style={{alignSelf:'center'}}
                            >
                        <Image
                            style={styles.power}
                            source={power}
                        />
                        </TouchableOpacity>
                    }
                />
                <Header
                    textOne={<Text numberOfLines={1}>BIENVENUE <Text >FRANCK BONI</Text>
                    </Text>}
                    textTwo={<Text numberOfLines={1} >FullStack</Text>}
                    image={
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Profil')}>
                            <Image
                                style={styles.photo}
                                source={photo} />
                            <Modal
                                transparent={true}
                                animationType='fade'
                                visible={isModalVisible}
                                onRequestClose={() => changeModalVisible(false)}
                            >
                                <TouchableOpacity
                                    disabled={true}
                                    style={styles.touchableOpacity}
                                >
                                    <View style={styles.modal}>
                                        <View style={styles.textView}>
                    <View style={styles.containerOther}>
                        <View >
                            <View style={styles.green}>
                                <View style={styles.photoOther} >
                                    <View>
                                        <Image 
                                        style={styles.profilPhoto}
                                        source={photo}/>
                                    </View>
                                    <View style={styles.textMail}>
                                        <View style={styles.iconMail}>
                                            <Image 
                                            source={iconMail}
                                            />
                                        </View>
                                        <View style={styles.mail}>
                                            <Text>Mail</Text>
                                            <Text numberOfLines={1} >lorem@gmail.com</Text>
                                        </View>
                                        {/* bar  */}
                                    <View style={styles.bar}></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                                        </View>
                                        <View style={styles.buttonView}>
                                            <TouchableOpacity
                                                style={styles.btn}
                                                onPress={() => closeModal(false)}
                                            >
                                                <Text style={styles.text}>Se d??connecter</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                        </TouchableOpacity>
                    }
                />
                <Body />
            </View>
        </SafeAreaView>
    )
}

export default HomeComponent;
