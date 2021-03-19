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
import ButtonCustom from '../common/ButtonCustom';
import OtherButton from '../common/OtherButton';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [pasword, setPassword] = useState('')
    const [isSelected, setSelection] = useState(true);

    const ButtonForget = () => {
        console.log('ok')
    }

    const ButtonConnexion = () => {
        navigation.navigate("DrawerNavigation")
    }

    const Register = () => {
        navigation.navigate("Register")
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
                                style={styles.textInput}
                            />
                            <Input
                                icon={<Image source={logoLock} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Mot de passe"
                                onChangeText={() => setPassword()}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.checkboxAndForgetButton}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setSelection}
                            />
                            <Text style={styles.label}>Resté connecté</Text>
                            <OtherButton
                                text={<Text>Mot de passe oublié?</Text>}
                                onPress={() => ButtonForget()} />
                        </View>
                        {/* ButtonLogin  */}
                        <View>
                            <ButtonCustom
                                text={<Text>Connexion</Text>}
                                onPress={() => ButtonConnexion()} />
                        </View>
                        {/* ButtonRegister */}
                        <View style={styles.registerButton}>
                            <Text style={styles.text}>Aucun Compte?</Text>
                            <OtherButton
                                text={<Text>S'inscrire</Text>}
                                onPress={Register} />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default LoginComponent;
