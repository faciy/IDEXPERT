import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styles from './styles';
import drapeau from '../../../assets/icons/drapeau.png';
import bg from '../../../assets/images/DeutscheBank.png';
import axios from 'axios';

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
        const numero = filtre.map(i => i.callingCodes[0])
        console.log('numero',numero)
        setSelected(namePays)
        setExpanded(!expanded)
        setNum(numero) 
    }

    return (
        <View>
            {expanded ?
                <View style={styles.container}>
                    <List.Section
                        titleStyle={{ color: '#FFFFFF9C', top:50}}
                        title="Selectionner votre pays">
                        <List.Accordion
                            expanded={!expanded}
                            onPress={handlePress}
                            style={styles.accordionOne}
                            titleStyle={{ color: '#FFFFFF9C', right: 30, opacity: 0.8, fontSize: 14 }}
                            title={selected}
                            left={props => <List.Icon {...props} icon={() => <Image
                                style={{
                                    right:20
                                }}
                                source={drapeau}
                            />} 
                            color='white' />}>
                        </List.Accordion>
                    </List.Section>
                </View> : 
                <View>
                    <List.Section
                        titleStyle={styles.select}
                        title="Selectionner votre pays">
                        <List.Accordion
                            expanded={!expanded}
                            onPress={handlePress}
                            style={styles.accordion}
                            titleStyle={styles.barTwo}
                            title={selected}
                            left={props => <List.Icon {...props} icon={() => <Image
                                style={{
                                    right:20,
                                    top:15
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
