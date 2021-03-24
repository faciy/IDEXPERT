import React, { useState,useEffect,useRef } from 'react'
import { 
    Text,
    View,
    TouchableOpacity,
    Image,
    Linking } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
// import scan from '../../assets/images/scan.png';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import check from '../../assets/icons/check.png';
import ButtonCustom from '../common/ButtonCustom';
// import { RNCamera } from 'react-native-camera';


const  ScanComponent = () => {
    const scanner = useRef(null);
    const [scan, setScan] = useState(false);
    const [result, setResult] = useState(null)

    useEffect(() => {
        setResult(null)
    }, [])

    const onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
        setResult(e)
        setScan(true)
        if(e.data.substring === 'http'){
            alert(e.data)
        }

      };

    const navigation = useNavigation();
        return scan ? (
            <View style={styles.other}>
                 <View style={styles.header}>
                    <Navbar
                        imageLogo={<Image 
                        style={styles.img}    
                        source={imageLogo} />}
                        imageOther={
                            <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                            >
                                 <Image 
                                    style={styles.menu}
                                    source={Menu} />
                            </TouchableOpacity>}
                    />
                    <View style={{marginTop:50}}>
                        <Text style={styles.text} >SCAN</Text>
                    </View>
                </View>

                <View style={styles.correct}>
                    <View style={styles.ContainerCorrect}>
                        <View style={styles.iconValidate}>
                            <Image 
                            style={{
                                width:50,
                                height:50,
                                tintColor:'green',
                            }}
                            source={check}
                            />
                        </View>
                        <View style={styles.textCorrect}>
                            <Text style={{color:'white'}}>Le document que vous avez scanné a bien éte édité par le cabinet</Text>
                        </View>
                        <View >
                            <TouchableOpacity
                            onPress={() => {}}
                            style={styles.btn}
                            >
                                <Text style={styles.textRenvoyer}>Renvoyer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() => {}}
                            style={styles.btn}
                            >
                                <Text style={styles.textRenvoyer}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        ) : (
            <View>
                <View style={styles.header}>
                    <Navbar
                        imageLogo={<Image 
                        style={styles.img}    
                        source={imageLogo} />}
                        imageOther={
                            <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                            >
                                 <Image 
                                    style={styles.menu}
                                    source={Menu} />
                            </TouchableOpacity>}
                    />
                    <View style={{marginTop:30}}>
                        <Text style={styles.text} >Nom du cabinet</Text>
                    </View>
                </View>
                {/* code scan  */}
                    <View style={styles.scan} >
                        <View style={styles.qrScanner}>
                            <QRCodeScanner
                            onRead={onSuccess}
                            ref={scanner}
                            showMarker={true}
                            reactivate={true}
                            bottomViewStyle={{backgroundColor:'#1F4F4F',top:60}}
                            />
                        </View>
                    </View>
                </View>
        )
}

export default ScanComponent;