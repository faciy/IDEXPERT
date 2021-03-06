import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import Input from '../Input';
import styles from './styles';
import edit from '../../../assets/icons/edit.png';

const ProfilBodyModified = () => {

    const [name, setName] = useState('')
    const [adresse, setAdresse] = useState('')
    const [ville, setVille] = useState('')
    const [genre, setGenre] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')


    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View>
                    <Text style={styles.text} >Nom et Prénoms</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="Franck Boni"
                            onChangeText={() => setName()}
                            style={styles.textInput}
                        />
                        <Image
                            style={{
                                tintColor: '#0E787E',
                                width: 15,
                                height: 15
                            }}
                            source={edit}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Adresse</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="Koumassi"
                            onChangeText={() => setAdresse()}
                            style={styles.textInput}
                        />
                        <Image
                            style={{
                                tintColor: '#0E787E',
                                width: 15,
                                height: 15
                            }}
                            source={edit}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Ville</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="Abidjan"
                            onChangeText={() => setVille()}
                            style={styles.textInput}
                        />
                        <Image 
                        style={{
                        tintColor:'#0E787E',
                        width:15,
                        height:15
                        }}
                        source={edit}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Genre</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="Masculin"
                            onChangeText={() => setGenre()}
                            style={styles.textInput}
                        />
                        <Image 
                        style={{
                        tintColor:'#0E787E',
                        width:15,
                        height:15
                        }}
                        source={edit}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="boni@gmail.com"
                            onChangeText={() => setEmail()}
                            style={styles.textInput}
                        />
                        <Image 
                        style={{
                        tintColor:'#0E787E',
                        width:15,
                        height:15
                        }}
                        source={edit}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Numéro</Text>
                    <View style={styles.input}>
                        <Input
                            placeholderTextColor='black'
                            placeholder="68060990"
                            onChangeText={() => setNumber()}
                            style={styles.textInput}
                        />
                        <Image 
                        style={{
                        tintColor:'#0E787E',
                        width:15,
                        height:15
                        }}
                        source={edit}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfilBodyModified;
