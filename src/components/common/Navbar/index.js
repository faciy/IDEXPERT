import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import notification from '../../../assets/icons/notification.png';

const Navbar = ({onPress,imageLogo, imageOther, power}) => {
    return (
        <View style={styles.navbar}>
            {/* logo button  */}
            <View>
                {imageLogo}
            </View>
            {/* notification button */}
            <View style={{flexDirection:'row'}}>
                        {imageOther}
                        {power}
            </View>
        </View>
    )
}

export default Navbar
