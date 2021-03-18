import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import styles from './styles';
import drapeau from '../../../assets/icons/drapeau.png';

const datas = [
    {
        id: 1,
        name: 'charles',
        numero:'+225'
    },
    {
        id: 2,
        name: 'jean',
        numero:'+325'
    },
    {
        id: 3,
        name: 'job',
        numero:'+200'
    },
    {
        id: 4,
        name: 'paul',
        numero:'+513'
    }
]


const ListPays = ({setNum}) => {

    const [data, setData] = useState(datas)
    const [selected, setSelected] = useState('choix de pays')
 
    const button = (id) => {
        const filtre = data.filter(i => i.id === id)
        const name = filtre.map(i => i.name)
        const numero = filtre.map(i => i.numero)
        setSelected(name)   
        setNum(numero) 
    }
    return (
        <View style={styles.container}>
            <List.Section
                titleStyle={{ color: '#FFFFFF9C', top: 40 }}
                title="Selectionner votre pays">
                <List.Accordion
                    style={styles.accordion}
                    titleStyle={{ color: '#FFFFFF9C', right: 15, opacity: 0.8, fontSize: 14 }}
                    title={selected}
                    left={props => <List.Icon {...props} icon={() =><Image 
                    source={drapeau}
                    /> } color='white' />}>
                    {data.map(i => (
                        <View key={i.id}>
                        <TouchableOpacity
                        style={styles.item}
                        onPress={() => button(i.id)}
                        >
                            <List.Item 
                            titleStyle={{ color: '#FFFFFF9C', right: 40, opacity: 0.8, fontSize: 14 }}
                            title={i.name} />
                        </TouchableOpacity>
                        </View>))
                    }
                </List.Accordion>
            </List.Section>
        </View>

    );
};


export default ListPays;
