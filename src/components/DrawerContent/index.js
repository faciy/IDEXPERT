import React from 'react'
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import photo from '../../assets/images/photo.jpg';
import cloche from '../../assets/icons/cloche.png';
import phonescan from '../../assets/icons/phonescan.png';
import calendrier from '../../assets/icons/calendrier.png';
import contact from '../../assets/images/contact.png';
import SmartCard from '../../screens/SmartCard';
import page from '../../assets/icons/page.png';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {

    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props} style={styles.bg}>
            <View style={styles.photo}>
                <Image
                    style={styles.image}
                    source={photo}
                />
            </View>
            <View style={styles.name}>
                <Text style={styles.testName}>Franck Boni</Text>
                <Text style={styles.testName}>Nom du cabinet</Text>
            </View>

            <View style={styles.drawerElement}>
                <DrawerItem
                    icon={() => (
                        <Image
                            source={phonescan}
                            style={{
                                width: 20,
                                height: 20,
                                left: 20
                            }}
                        />
                    )}
                    iconRight={() => (
                        <Image
                            source={page}
                            style={{
                                width: 20,
                                height: 20,
                                left: 50
                            }}
                        />
                    )}
                    label={() => <Text style={{ color: 'white' }}>Code de sécurité</Text>}
                    onPress={() => navigation.navigate('Scan')}
                    
                />

                <DrawerItem
                    icon={() => (
                        <Image
                            source={calendrier}
                            style={{
                                width: 20,
                                height: 20,
                                left: 20
                            }}
                        />
                    )}
                    label={() => <Text style={{ color: 'white' }}>Evenements</Text>
                    
                    }
                    onPress={() => navigation.navigate('EvenementNavigation')}
                />
                <DrawerItem
                    icon={() => (
                        <Image
                            source={cloche}
                            style={{
                                width: 20,
                                height: 20,
                                left: 20
                            }}
                        />
                    )}
                    label={() => <Text style={{ color: 'white' }}>SmartCard</Text>}
                    onPress={() => navigation.navigate('SmartCard')}
                    
                />
                <DrawerItem
                    icon={() => (
                        <Image
                            source={contact}
                            style={{
                                width: 20,
                                height: 20,
                                left: 20
                            }}
                        />
                    )}
                    label={() => <Text style={{ color: 'white' }}>Contacts</Text>}
                    onPress={() => navigation.navigate('Contact')}
                />
            </View>

        </DrawerContentScrollView>
    )
}

export default DrawerContent;
