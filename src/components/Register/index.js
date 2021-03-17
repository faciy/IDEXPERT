import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, Button } from 'react-native'
import Input from '../common/Input';
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import logo from '../../assets/icons/logoIdExpert.png';
import logoEmail from '../../assets/icons/email.png';
import avatar from '../../assets/icons/avatar.png';
import drapeau from '../../assets/icons/drapeau.png';
import phone from '../../assets/icons/phone.png';
import ButtonCustom from '../common/ButtonCustom';
import { useNavigation } from '@react-navigation/native';

const RegisterComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [selection, setSelection] = useState('')
    const [number, setNumber] = useState('')
    const [register, setRegister] = useState('')


    const Regist = () => {
       navigation.navigate('Verification')
    }

    return (
        <View >
            <ImageBackground source={bg} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                        {/* logoIdExpert  */}
                        <View style={styles.logo} >
                            <Image source={logo} />
                        </View>
                        <Text style={styles.textConnexion}>Inscription</Text>
                        {/* Input */}
                        <View>
                            <Input
                                icon={<Image source={logoEmail} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="E-mail | Nom d'utilisateur"
                                onChangeText={() => setEmail()}
                                style={styles.textInput}
                            />
                            <Input
                                icon={<Image
                                    source={drapeau} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Choix du pays"
                                onChangeText={() => setSelection()}
                                style={styles.textInput}
                            />
                            <Input
                                icon={<Image
                                    source={phone} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Numéro de téléphone"
                                onChangeText={() => setNumber()}
                                style={styles.textInput}
                            />
                            <Input
                                icon={<Image
                                    source={avatar} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Numéro d'inscription"
                                onChangeText={() => setRegister()}
                                style={styles.textInput}
                            />
                        </View>

                        {/* ButtonRegister  */}
                        <View>
                            <ButtonCustom
                                text={<Text>Valider</Text>}
                                onPress={() => Regist()} />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default RegisterComponent;
