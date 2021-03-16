import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, Button } from 'react-native'
import Input from '../common/Input';
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import logo from '../../assets/icons/logoIdExpert.png';
import logoEmail from '../../assets/icons/email.png';
import logoLock from '../../assets/icons/lock.png';
import Checkbox from '../common/Checkbox';
import ForgetButton from '../common/ForgetButton';
import ButtonLogin from '../common/ButtonLogin';
import RegisterButton from '../common/RegisterButton';

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [pasword, setPassword] = useState('')
    const [isSelected, setSelection] = useState(true);

    const ButtonForget = () =>{
        console.log('ok')
    }

    const ButtonConnexion = () => {
        console.log('connexion')
    }

    const Register = () => {
        console.log("s'inscrire")
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
                        <View style={styles.checkboxAndForgetButton}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                             <Text style={styles.label}>Resté connecté</Text>
                            <ForgetButton onPress={() => ButtonForget()}/>
                        </View>
                        {/* ButtonLogin  */}
                        <View>
                            <ButtonLogin onPress={() => ButtonConnexion()}/>
                        </View>
                        {/* ButtonRegister */}
                        <View style={styles.registerButton}>
                            <Text style={styles.text}>Aucun Compte?</Text>
                            <RegisterButton onPress={() => Register()}/>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default LoginComponent;
