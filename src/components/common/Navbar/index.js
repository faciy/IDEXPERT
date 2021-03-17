import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import notification from '../../../assets/icons/notification.png';

const Navbar = ({onPress,imageLogo, imageOther}) => {
    return (
        <View style={styles.navbar}>
            {/* logo button  */}
            <View>
                {imageLogo}
            </View>
            {/* notification button */}
            <TouchableOpacity
            onPress={onPress}
            style={{alignSelf:'center'}}
            >
                <View>
                    {imageOther}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar
