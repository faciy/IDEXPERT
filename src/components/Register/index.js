import React, { useState, useEffect } from 'react'
import { View, Image, ImageBackground, Text, ScrollView } from 'react-native'
import Input from '../common/Input';
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/TraceOtherpng.png';
import logo from '../../assets/icons/logoIdExpert.png';
import logoEmail from '../../assets/icons/email.png';
import avatar from '../../assets/icons/avatar.png';
import drapeau from '../../assets/icons/drapeau.png';
import phone from '../../assets/icons/phone.png';
import ButtonCustom from '../common/ButtonCustom';
import { useNavigation } from '@react-navigation/native';
import ListPays from '../common/ListItem';


const RegisterComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState(false)
    const [number, setNumber] = useState('')
    const [register, setRegister] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
        return clearTimeout()
    })

    const colorText = () => {
        console.log('register',register)
        if(error){return 'red' }
        else if(register == '680609')
        { return 'green' }
        else{return 'white'}
    }
    const colorNumber = () => {
        const nu = typeof(Number(12))
        console.log('nu',nu)
        if(error){return 'red' }
        else if(number == '68060990'){ return 'green'  }
        else{ return 'white' }
    }
    


    const Regist = (register, number) => {
        // console.log('register',register)
        if(register !== ''){
            if(register == '680609' && number == '68060990'){
                setRegister('')
                setNumber('')
               navigation.navigate('Verification')
            }else{ setError(true)}    
        }else{setError(true)}
    }

    return ( 
    <ScrollView>
            <ImageBackground source={bg} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                    <ScrollView>
                        {/* logoIdExpert  */}
                        <View style={styles.logo} >
                            <Image 
                            style={styles.img}
                            source={logo} />
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
                            <View >
                                <ListPays 
                                num = {code}
                                setNum={setCode}
                                />
                            </View>
                            <Input
                                icon={<Image
                                    source={phone} />}
                                initial={<Text 
                                style={{color:'#FFFFFF9C',left:5}}
                                >{code}</Text>}
                                keyboardType="numeric"
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Numéro de téléphone"
                                onChangeText={(number) => setNumber(number)}
                                value={number}
                                style={[styles.textInput, {color:colorNumber()}]}
                            />
                            {error ? <Text style={{left:20, color:'red'}}>Entrez un numéro correct</Text> : null}
                            <Input
                                icon={<Image
                                    source={avatar} />}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Numéro d'inscription"
                                onChangeText={(register) => setRegister(register)}
                                value={register}
                                style={[styles.textInput, {color:colorText()}]}
                            />
                            {error ? <Text style={{left:20, color:'red'}}>Ce numéro d'inscription n'est pas reconnu</Text> : null}
                        </View>
                        {/* ButtonRegister  */}
                        <View>
                            <ButtonCustom
                                text={<Text>Valider</Text>}
                                onPress={() => Regist(register,number)} />
                        </View>
                    </ScrollView>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    )
}

export default RegisterComponent;
