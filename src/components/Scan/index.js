import React from 'react'
import { View, Image, Text } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import scan from '../../assets/images/scan.png';

const ScanComponent = () => {
    return (
        <View>
            <View style={styles.header}>
                <Navbar
                    imageLogo={<Image 
                    style={styles.img}    
                    source={imageLogo} />}
                    imageOther={<Image
                        style={styles.menu}
                        source={Menu} />}
                />
                <View style={{marginTop:100}}>
                    <Text style={styles.text} >Nom du cabinet</Text>
                </View>
            </View>
            {/* code scan  */}
            <View style={styles.scan} >
                <Image 
                source={scan}
                />
            </View>
        </View>
    )
}

export default ScanComponent;
