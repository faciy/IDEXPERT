import React from 'react'
import { View, Image, Text, FlatList } from 'react-native';
import Navbar from '../common/Navbar';
import styles from './styles';
import imageLogo from '../../assets/icons/logoIdExpert.png';
import Menu from '../../assets/icons/menu.png';
import NotificationList from '../../components/common/NotificationList';

const NotificationComponent = () => {

    return (
        <View>
            <View style={styles.header}>
                <Navbar
                    imageLogo={<Image source={imageLogo} />}
                    imageOther={<Image
                        style={styles.menu}
                        source={Menu} />}
                />
                <View style={{marginTop:50}}>
                    <Text style={styles.text} >NOTIFICATION</Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                    <View style={styles.body}>
                        <NotificationList />
                    </View>
            </View>
        </View>
    )
}

export default NotificationComponent;
