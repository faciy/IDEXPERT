import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Text, TextInput, Image } from 'react-native'
import fontH from '../../assets/images/fontH.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import CardActivateScreenOne from '../common/ActivateScreenOne';
import ButtonCustom from '../common/ButtonCustom';
import { useNavigation } from '@react-navigation/native';
import block from '../../assets/icons/block.png';


const ActivateComponent = () => {

    const [sms, setSms] = useState('')
    const [mail, setMail] = useState('')
    const [error, setError] = useState(false)

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
    }, )

    const Colorsms = (sms) => {
        if(error){
            return 'red'
        }else if(sms == '68060990'){
            return 'green'
        }else{
            return 'black'
        }
    }


    const Colorsmail = (mail) => {
        if(error){
            return 'red'
        }else if(mail == '12345'){
            return 'green'
        }else{
            return 'black'
        }
    }

    const Continued = (sms, mail) => {
        console.log('sms',sms)
        if(sms != ''){
            if(sms == '68060990' && mail == '12345'){
                navigation.navigate('DrawerNavigation')
            }else{
                setError(true)
            }
        }else{
            setError(true)
        }
        // navigation.navigate('DrawerNavigation')
    }

    const Renvoyer = () => {
        console.log('Renvoyer')
    }

    return (
        <View >
            <ImageBackground source={fontH} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                        <CardActivateScreenOne />
                        <View style={styles.textInput}>
                            <View style={styles.minuter}>
                                {sms == '68060990' && mail== '12345' ? <Image
                                style={styles.block} source={block}/> : <Text style={styles.decompte}>01:00</Text>}
                            </View>
                            <View style={styles.input}>
                                <View style={{ bottom: 80 }} >
                                    <TextInput 
                                        placeholder='Saisir votre code de sécurité SMS'
                                        placeholderTextColor='#1F4F4F'
                                        onChangeText={(sms) => setSms(sms)}
                                        value={sms}
                                        style={{paddingHorizontal:20,textAlign:'center', color:Colorsms(sms)}}
                                    />
                                    <View style={{borderBottomWidth:2,borderBottomColor:'#00000029',
                                    marginHorizontal:20}}>

                                    </View>
                                    {error ? <Text style={{color:'red', paddingHorizontal:20}}>Le code de sécurité SMS est erroné</Text> : null}
                                </View>
                                <View style={{ bottom: 80 }}>
                                    <TextInput 
                                        placeholder='Saisir votre code de sécurité MAIL'
                                        placeholderTextColor='#1F4F4F'
                                        onChangeText={(mail) => setMail(mail)}
                                        value={mail}
                                        style={{paddingHorizontal:20,
                                        textAlign:'center',
                                        color:Colorsmail(mail)}}
                                    />
                                    <View style={{borderBottomWidth:2,borderBottomColor:'#00000029',
                                    marginHorizontal:20}}>
                                    </View>
                                    {error ? <Text style={{color:'red', paddingHorizontal:20}}>Le code de sécurité Mail est erroné</Text> : null}
                                </View>
                            </View>
                            <View>
                                <View style={{bottom:90}}>
                                    <ButtonCustom 
                                    onPress={() => Renvoyer()}
                                    text={<Text>Renvoyer</Text>}
                                    />
                                </View>
                                <View style={{bottom:110}}>
                                    <ButtonCustom 
                                    onPress={() => Continued(sms, mail)}
                                    text={<Text>Continuer</Text>}
                                    />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default ActivateComponent;
