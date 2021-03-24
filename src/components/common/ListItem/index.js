import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from './styles';
import drapeau from '../../../assets/icons/drapeau.png';
import bg from '../../../assets/images/DeutscheBank.png';
import axios from 'axios';

// const datas = [
//     {
//         id: 1,
//         name: 'charles',
//         numero: '+225'
//     },
//     {
//         id: 2,
//         name: 'jean',
//         numero: '+325'
//     },
//     {
//         id: 3,
//         name: 'job',
//         numero: '+200'
//     },
//     {
//         id: 4,
//         name: 'paul',
//         numero: '+513'
//     },
//     // {
//     //     id: 5,
//     //     name: 'mariam',
//     //     numero: '+808'
//     // },
//     // {
//     //     id: 6,
//     //     name: 'gilbert',
//     //     numero: '+632'
//     // }
// ]


const ListPays = ({ setNum }) => {

    const [data, setData] = useState([])
    // console.log('data',data)
    const [selected, setSelected] = useState('choix de pays')
    const [expanded, setExpanded] = React.useState(true);

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((res) => {
            setData(res.data)
            
        })
        .catch(err => console.log(err))
    }, [])

    const handlePress = () => setExpanded(!expanded);

    const button = (name) => {
        const filtre = data.filter(i => i.name === name)
        console.log('filtre',filtre)
        const namePays = filtre.map(i => i.name)
        console.log('name',namePays)
        const numero = filtre.map(i => i.numericCode)
        setSelected(namePays)
        setExpanded(!expanded)
        setNum(numero)
    }

    return (
        <View>
            {expanded ?
                <View style={styles.container}>
                    <List.Section
                        titleStyle={{ color: '#FFFFFF9C', top:40}}
                        title="Selectionner votre pays">
                        <List.Accordion
                            expanded={!expanded}
                            onPress={handlePress}
                            style={styles.accordion}
                            titleStyle={{ color: '#FFFFFF9C', right: 30, opacity: 0.8, fontSize: 14 }}
                            title={selected}
                            left={props => <List.Icon {...props} icon={() => <Image
                                style={{
                                    right:20
                                }}
                                source={drapeau}
                            />} 
                            color='white' />}>
        
                            {/* {data.map(i => (
                                <View key={i.name} style={{ paddingHorizontal: 100, paddingStart: 40 }}> 
                                     <TouchableOpacity
                                        expanded={expanded}
                                        style={styles.item}
                                        onPress={() => button()}
                                    >
                                        <List.Item
                                            style={{ left: 20 }}
                                            titleStyle={{ color: '#FFFFFF9C', right: 40, opacity: 0.8, fontSize: 14 }}
                                            title={i.name} /> 
                                    </TouchableOpacity> 
                                </View>))
                            } */}
                        </List.Accordion>
                    </List.Section>
                </View> : 
                <View style={styles.container}>
                    <List.Section
                        titleStyle={{ color: '#FFFFFF9C', top: 40 }}
                        title="Selectionner votre pays">
                        <List.Accordion
                            expanded={!expanded}
                            onPress={handlePress}
                            style={styles.accordion}
                            titleStyle={{ color: '#FFFFFF9C', right: 30, opacity: 0.8, fontSize: 14 }}
                            title={selected}
                            left={props => <List.Icon {...props} icon={() => <Image
                                style={{
                                    right:20
                                }}
                                source={drapeau}
                            />} color='white' />}>

                            {data.map(i => (
                                <View key={i.name} style={{ paddingHorizontal: 100, paddingStart: 40 }}>
                                    <TouchableOpacity
                                        style={styles.item}
                                        onPress={() => button(i.name)}
                                    >
                                        <List.Item
                                            style={{ left: 20 }}
                                            titleStyle={{ color: '#FFFFFF9C', right: 40, opacity: 0.8, fontSize: 14 }}
                                            title={i.name} />
                                    </TouchableOpacity>
                                </View>))
                            }
                        </List.Accordion>
                    </List.Section>
                </View>
            }
        </View>

    );
};


export default ListPays;
