import React, { useState, useEffect } from 'react'
import { View, Image, ImageBackground, Text, Button, TextInput, TouchableOpacity } from 'react-native'
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
import eye from '../../assets/icons/eye.png';
import invisible from '../../assets/icons/invisible.png';

const LoginComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [error, setError] = useState(false)
    const [isSelected, setSelection] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
    })

    const Colorsmail = () => {
        if(error){
            return 'red'
        }else if(email == 'charles'){
            return 'green'
        }else{
            return 'white'
        }
    }

    const ColorsPass = () => {
        if(error){
            return 'red'
        }else if(password == 'charles'){
            return 'green'
        }else{
            return 'white'
        }
    }

    const ButtonForget = () => {
        console.log('ok')
    }

    const ButtonConnexion = () => {
        if(email == 'charles' && password == 'charles'){
            setEmail('')
            setPassword('')
            navigation.navigate("DrawerNavigation")  
        }else{
            setError(true)
        }
        
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
                            <Image
                                style={styles.img}
                                source={logo} />
                        </View>
                        <Text style={styles.textConnexion}>Connexion</Text>
                        {error ? <Text style={styles.error}>Veuillez entrez vos informations</Text> : null}
                        {/* Input */}
                        <View>
                            <Input
                                icon={<Image source={logoEmail} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="E-mail | Nom d'utilisateur" onChangeText={(email) => setEmail(email)}
                                style={[styles.textInput, {color:Colorsmail()}]}
                                value={email}
                            />   
                            <Input
                                icon={<Image source={logoLock} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Mot de passe"
                                onChangeText={(password) => setPassword(password)}
                                style={[styles.textInput, {color:ColorsPass()}]}
                                value={password}
                                securePass={secureTextEntry}
                                iconRight={
                                <TouchableOpacity
                                style={styles.oeil}
                                onPress={() => secureTextEntry ? setSecureTextEntry(false) : setSecureTextEntry(true)}
                                >
                                    {secureTextEntry ? <Image 
                                    style={{tintColor:'white',width:20,height:20}}
                                    source={invisible}
                                    /> : <Image 
                                    style={{tintColor:'white',width:20,height:20,left:20}}
                                    source={eye} />}
                                    
                                </TouchableOpacity>}
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
                                onPress={() => ButtonConnexion(email, password)} />
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
