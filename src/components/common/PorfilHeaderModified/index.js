import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/icons/arrow.png';
import photo from '../../../assets/images/photo.jpg';
import check from '../../../assets/icons/check.png';
import camera from '../../../assets/icons/camera.png';
import { useNavigation } from '@react-navigation/native';

const ProfilHeaderModified = () => {

    const navigation = useNavigation();

    const Validate = () => {
        // navigation.navigate('Profil')
    }

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity
                onPress={() => {}}
                >
                    <Image 
                        style={{
                            width:20,
                            height:20,
                            tintColor:'white'
                        }}
                        source={leftArrow}
                    />
                </TouchableOpacity>
                <View style={styles.textProfil}>
                    <Text style={{color:'white'}} >PROFIL</Text>
                </View>
                <TouchableOpacity
                onPress={() => {}}
                >
                    <View style={{height:30,backgroundColor:'red',width:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'#1F4F4F'}}>
                        
                            <Image
                            style={{width:20,height:20,tintColor:'white'}} 
                            source={check}
                            />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.profil}>
                <Image 
                style={styles.img}
                source={photo}
                />
                <View style={styles.camera}>
                <TouchableOpacity
                onPress={() => {}}
                >
                    <Image 
                    style={{
                        width:20,
                        height:20,
                        tintColor:'white'}}
                    source={camera}
                    />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfilHeaderModified;
