import React, { useState } from 'react'
import { View, Image, ImageBackground, Text } from 'react-native'
import Input from '../common/Input';
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import logo from '../../assets/icons/logoIdExpert.png';
import logoEmail from '../../assets/icons/email.png';
import logoLock from '../../assets/icons/lock.png';

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [pasword, setPassword] = useState('')

    return (
        <View>
            <ImageBackground source={bg} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                        {/* logoIdExpert  */}
                        <View style={styles.logo} >
                            <Image source={logo} />
                        </View>
                        <Text style={styles.textConnexion}>Connexion</Text>
                        {/* Input */}
                        <View>
                            <Input
                                icon={<Image source={logoEmail} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="E-mail | Nom d'utilisateur"
                                onChangeText={() => setEmail()}
                            />
                            <Input
                                icon={<Image source={logoLock} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Mot de passe"
                                onChangeText={() => setPassword()}
                            />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default LoginComponent;
