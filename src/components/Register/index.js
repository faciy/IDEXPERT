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
import { List } from 'react-native-paper';
import ListPays from '../common/ListItem';
import { color } from 'react-native-reanimated';

const RegisterComponent = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    // const [selection, setSelection] = useState('')
    const [error, setError] = useState(false)
    // const [color, setColor] = useState('white')
    const [number, setNumber] = useState('')
    const [register, setRegister] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
    })

    const colorText = () => {
        console.log('register',register)
        if(error){
            return 'red'
        }else if(register == '680609'){
            return 'green'
        }else{
            return 'white'
        }
    }
    


    const Regist = (register) => {
        // console.log('register',register)
        if(register !== ''){
            if(register == '680609'){
                setRegister('')
               navigation.navigate('Verification')
            }else{
                setError(true)
            }
            
        }else{
            setError(true)
        }
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
                                num = {number}
                                setNum={setNumber}
                                />
                            </View>
                            <Input
                                icon={<Image
                                    source={phone} />}
                                initial={<Text 
                                style={{color:'#FFFFFF9C',left:5}}
                                >{number}</Text>}
                                placeholderTextColor='#FFFFFF64'
                                placeholder="Numéro de téléphone"
                                onChangeText={() => setNumber(number)}
                                style={styles.textInput}
                            />
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
                                onPress={() => Regist(register)} />
                        </View>
                    </ScrollView>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    )
}

export default RegisterComponent;
