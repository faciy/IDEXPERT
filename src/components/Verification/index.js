import React, { useState } from 'react'
import { View, ImageBackground,Text } from 'react-native'
import bg from '../../assets/images/DeutscheBank.png';
import styles from './styles';
import Rectangle from '../../assets/images/Rectangle.png';
import Trace from '../../assets/images/Trace.png';
import CardVerification from '../common/Verification';
import ButtonCustom from '../common/ButtonCustom';
import { useNavigation } from '@react-navigation/native';

const VerificationComponent = () => {
    const navigation = useNavigation();

    const Valider = () =>{
        navigation.navigate('ActivateNavigator')
    }
    
    return (
        <View >
            <ImageBackground source={bg} style={styles.background}>
                <ImageBackground source={Rectangle} style={styles.rectangle}>
                    <ImageBackground source={Trace} style={styles.trace}>
                        <CardVerification />
                        <View style={styles.button}>
                            <ButtonCustom 
                            onPress={() => Valider()}
                            text={<Text>Valider</Text>} />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </View>

    )
}

export default VerificationComponent;
