import React, { useState } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import CardActivateScreenOne from '../common/ActivateScreenOne';
import ButtonCustom from '../common/ButtonCustom';
import Input from '../../components/common/Input';


const ActivateComponent = () => {

    const Continued = () => {
        console.log('continuer')
    }

    const Renvoyer = () => {
        console.log('Renvoyer')
    }

    return (
        <View >
            <ImageBackground source={bg} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                        <CardActivateScreenOne />
                        <View style={styles.textInput}>
                            <View style={styles.minuter}>
                                <Text style={{ color: '#0E787EE0' }}>01:00</Text>
                            </View>
                            <View style={styles.input}>
                                <View style={{ bottom: 60 }} >
                                    <Input
                                        placeholderTextColor='#1F4F4F'
                                        placeholder="Sasir votre code de sécurité SMS"
                                    //  onChangeText={() => setPassword()}
                                    />
                                </View>
                                <View style={{ bottom: 80 }}>
                                    <Input
                                        placeholderTextColor='#1F4F4F'
                                        placeholder="Sasir votre code de sécurité MAIL"
                                    //  onChangeText={() => setPassword()}
                                    
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{bottom:100}}>
                                    <ButtonCustom 
                                    onPress={() => Renvoyer()}
                                    text={<Text>Renvoyer</Text>}
                                    />
                                </View>
                                <View style={{bottom:130}}>
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
