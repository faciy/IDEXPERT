import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// const donnees = [
//     {
//         id: 1,
//         contact: 'CONTACT 1',
//         sujet: 'Sujet du message',
//         lorem: 'Lorem ispum'
//     },
//     {
//         id: 2,
//         contact: 'CONTACT 2',
//         sujet: 'Sujet du message',
//         lorem: 'Lorem ispum'
//     },
//     {
//         id: 3,
//         contact: 'CONTACT 3',
//         sujet: 'Sujet du message',
//         lorem: 'Lorem ispum'
//     },
//     {
//         id: 4,
//         contact: 'CONTACT 4',
//         sujet: 'Sujet du message',
//         lorem: 'Lorem ispum'
//     },
//     {
//         id: 5,
//         contact: 'CONTACT 5',
//         sujet: 'Sujet du message',
//         lorem: 'Lorem ispum'
//     }

// ]


const ContactList = () => {
    // const [data, setData] = useState(donnees)


    // const renderItem = ({ item }) => {
    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.card}>
    //                 <View style={styles.cardOne}>
    //                     <View style={styles.containerText}>
    //                         <Text numberOfLines={1} style={styles.text}>{item.contact}</Text>
    //                     </View>
    //                     <View style={styles.bar}></View>
    //                     <View style={styles.containerSujet}>
    //                         <Text numberOfLines={1} style={styles.text}>{item.sujet}</Text>
    //                     </View>
    //                     <View style={styles.containerLorem}>
    //                         <Text numberOfLines={2} style={styles.text}>{item.lorem}</Text>
    //                     </View>
    //                 </View>

    //                 <View style={styles.cardTwo}>
    //                     <View style={styles.containerText}>
    //                         <Text numberOfLines={1} style={styles.text}>{item.contact}</Text>
    //                     </View>
    //                     <View style={styles.bar}></View>
    //                     <View style={styles.containerSujet}>
    //                         <Text numberOfLines={1} style={styles.text}>{item.sujet}</Text>
    //                     </View>
    //                     <View style={styles.containerLorem}>
    //                         <Text numberOfLines={2} style={styles.text}>{item.lorem}</Text>
    //                     </View>
    //                 </View>

                    
    //             </View>
    //         </View>
    //     )
    // }

    const navigation = useNavigation();
    return (
        <View>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    padding: 6,
                    right: 5
                }}
            /> */}
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    {/* card one  */}
                {/* <TouchableOpacity 
                onPress={() => navigation.navigate('Profil')}
                > */}
                <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardOne}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 1</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                        {/* card two  */}
                        <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardTwo}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                        {/* card three  */}
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                        {/* card four  */}
                        <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card five  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card six  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card seven  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card eight  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardThree}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card nine  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardNine}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    {/* card ten  */}
                    <TouchableOpacity 
            onPress={() => navigation.navigate('Profil')} 
            >
                    <View style={styles.cardTen}>
                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={styles.text}>CONTACT 2</Text>
                        </View>
                        <View style={styles.bar}></View>
                        <View style={styles.containerSujet}>
                            <Text numberOfLines={1} style={styles.text}>Sujet du message</Text>
                        </View>
                        <View style={styles.containerLorem}>
                            <Text numberOfLines={2} style={styles.text}>Lorem ispum note</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>     
            </ScrollView>
        </View>
    )
}

export default ContactList;
