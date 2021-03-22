import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import Input from '../Input';
import styles from './styles';

const ProfilBody = () => {

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
                           <Text>Franck Boni</Text>
                        </View>
                </View>
                <View>
                    <Text style={styles.text}>Adresse</Text>
                <View style={styles.input}>
                    <Text>Koumassi</Text>
                </View>
                </View>
                <View>
                    <Text style={styles.text}>Ville</Text>
                <View style={styles.input}>
                    <Text>Abidjan</Text>
                </View>
                </View>
                <View>
                    <Text style={styles.text}>Genre</Text>
                <View style={styles.input}>
                    <Text>Masculin</Text>
                </View>
                </View>
                <View>
                    <Text style={styles.text}>Email</Text>
                <View style={styles.input}>
                    <Text>Boni@gmail.com</Text>
                </View>
                </View>
                <View>
                    <Text style={styles.text}>Numéro</Text>
                <View style={styles.input}>
                    <Text>68060990</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default ProfilBody;
