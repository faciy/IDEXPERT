import React, { useState } from 'react'
import { View, ImageBackground, Text, TextInput } from 'react-native'
import fontH from '../../assets/images/fontH.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import CardActivateScreenOne from '../common/ActivateScreenOne';
import ButtonCustom from '../common/ButtonCustom';
import { useNavigation } from '@react-navigation/native';


const ActivateComponent = () => {

    const navigation = useNavigation();

    const Continued = () => {
        navigation.navigate('HomeNavigator')
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
                                <Text style={{ color: '#0E787EE0' }}>01:00</Text>
                            </View>
                            <View style={styles.input}>
                                <View style={{ bottom: 80 }} >
                                    <TextInput 
                                        placeholder='Saisir votre code de sécurité SMS'
                                        placeholderTextColor='#1F4F4F'
                                        style={{paddingHorizontal:20}}
                                    />
                            
                                    <View style={{borderBottomWidth:2,borderBottomColor:'#00000029',
                                    marginHorizontal:20}}>

                                    </View>
                                </View>
                                <View style={{ bottom: 80 }}>
                                    <TextInput 
                                        placeholder='Saisir votre code de sécurité MAIL'
                                        placeholderTextColor='#1F4F4F'
                                        style={{paddingHorizontal:20}}
                                    />
                                    <View style={{borderBottomWidth:2,borderBottomColor:'#00000029',
                                    marginHorizontal:20}}>
                                    </View>
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
                                    onPress={() => Continued()}
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
