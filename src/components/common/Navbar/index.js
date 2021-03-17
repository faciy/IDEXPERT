import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            {/* logo button  */}
            <TouchableOpacity>
                <Text>Logo</Text>
            </TouchableOpacity>
            {/* notification button */}
            <TouchableOpacity>
                <Text>Logo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar
