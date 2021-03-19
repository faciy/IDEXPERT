import React, { useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import event from '../../../assets/images/even.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const donnees = [
    {
        id: 1,
        image: event,
        part:'Participer'
    },
    {
        id: 2,
        image: event,
        part:'Participer plus'
    },
    {
        id: 3,
        image: event,
        part:'Participer'
    },
    {
        id: 4,
        image: event,
        part:'Participer plus'
    },
    {
        id: 5,
        image: event,
        part:'Participer'
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
            <View>
                <View>
                <TouchableOpacity
                onPress={() => EventButton()}
                >
                    <Image
                        style={styles.image}
                        source={item.image}
                    />
                </TouchableOpacity>
                    <View style={styles.imageCard}>
                        <View style={styles.containeDate}>
                            <Text style={styles.date}>10</Text>
                            <Text style={styles.date}>MARS</Text>
                        </View>
                        {/* bar  */}
                        <View style={styles.bar}></View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {}}
                            >
                                <Text style={styles.textButton}>{item.part}</Text>
                        </TouchableOpacity>

                        <View style={styles.infoEven}>
                            <Text numberOfLines={1} style={styles.infoText}>
                                Titre de l'évènement
                            </Text>
                            <Text numberOfLines={2} style={styles.infoText}>
                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification rgG
                           </Text>
                        </View>
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
            />
        </View>
    )
}

export default ListEven;
