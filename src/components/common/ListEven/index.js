import React, { useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import event from '../../../assets/images/even.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const donnees = [
    {
        id: 1,
        image: event,
        part: 'Participer'
    },
    {
        id: 2,
        image: event,
        part: 'Je participe plus'
    },
    {
        id: 3,
        image: event,
        part: 'Participer'
    },
    {
        id: 4,
        image: event,
        part: 'Je participe plus'
    },
    {
        id: 5,
        image: event,
        part: 'Participer'
    }

]


const ListEven = () => {

    const navigation = useNavigation();

    const [data, setData] = useState(donnees)

    const EventButton = () => {
        navigation.navigate('EvenementInfo')
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.form}>
                <TouchableOpacity
                    onPress={() => EventButton()}
                >
                    <Image
                        style={styles.image}
                        source={item.image}
                    />
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={styles.containeDate}>
                        <Text style={styles.date}>10</Text>
                        <Text style={styles.date}>MARS</Text>
                    </View>
                    {/* bar  */}
                    <View style={styles.bar}></View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { }}
                    >
                        <Text style={styles.textButton}>{item.part}</Text>
                    </TouchableOpacity>

                    <View style={styles.infoEven}>
                        <Text numberOfLines={1} style={styles.infoText}>
                            Titre de l'évènement
                            </Text>
                        <Text numberOfLines={1} style={styles.infoText}>
                            Le lorem ipsum est, en imprimerie,une suite de mots sans signification rgG
                           </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    // padding: 6,
                    right: 6
                }}
            />
        </View>
    )
}

export default ListEven;
