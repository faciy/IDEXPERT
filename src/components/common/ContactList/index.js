import React, {useState} from 'react'
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const donnees = [
    {
        id:1,
        contact:'CONTACT 1',
        sujet:'Sujet du message',
        lorem:'Lorem ispum'
    },
    {
        id:2,
        contact:'CONTACT 2',
        sujet:'Sujet du message',
        lorem:'Lorem ispum'
    },
    {
        id:3,
        contact:'CONTACT 3',
        sujet:'Sujet du message',
        lorem:'Lorem ispum'
    },
    {
        id:4,
        contact:'CONTACT 4',
        sujet:'Sujet du message',
        lorem:'Lorem ispum'
    },
    {
        id:5,
        contact:'CONTACT 5',
        sujet:'Sujet du message',
        lorem:'Lorem ispum'
    }
    
]

const ContactList = () => {

    const renderItem = ({item}) => {
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardOne}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>{item.contact}</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>{item.sujet}</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>{item.lorem}</Text>
                        </View>
                    </View>
                    <View style={styles.cardTwo}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>{item.contact}</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>{item.sujet}</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>{item.lorem}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const [data, setData] = useState(donnees)
    
    return (
        <View>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                padding:6,
                right:5
                }}
            />
        </View>
    )
}

export default ContactList
