import React, { useState } from 'react'
import { View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import event from '../../../assets/images/even.png';
import styles from './styles';
// import lock from '../../../assets/icons/cloche.png';
// import { useNavigation } from '@react-navigation/native';
import calendrier from '../../../assets/icons/calendrier.png';
import localisation from '../../../assets/icons/localisation.png';
var SendIntentAndroid = require("react-native-send-intent");

const ListInfoEven = () => {


    const AddCalendar = () => {
        Alert.alert(
            "Agenda",
            "Pour accéder à votre agenda veuillez autoriser la demande",
            [
                {
                    text: "Refuser", 
                },
              {
                text: "Auoriser",
                onPress: () =>
                    SendIntentAndroid.addCalendarEvent({
                    title: "Tech Monday",
                    description: "Tech Monday React Native.",
                    startDate: "2020-01-13 10:00",
                    endDate: "2020-01-17 11:00",
                    recurrence: "weekly",
                    location: "Cocody 2 plateaux 8ème Tranche",
                  })   
              },
            ],
          );
    }

    const Localisation = () => {
        Alert.alert(
            "Activer la localisation",
            "Voulez vus activer la localisation?",
            [
                {
                    text:'Refuser'
                },
                {
                    text:'Autoriser',
                    onPress: () =>
                    SendIntentAndroid.openMaps("cite wedowell, angre 8eme tranche") 
                }
            ]
        )
    }


    return (
        <View>
            <Image
                style={styles.image}
                source={event}
            />
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('ok')}
                >
                    <Text style={styles.textButton}>Participer</Text>
                </TouchableOpacity>
                <View style={styles.infoText}>
                    <View>
                        <Text style={{ color: 'white' }}>Tech Monday</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>
                            <Text numberOfLines={1} style={styles.textColor}># TechMonday</Text> @Akil avec Omar Fall qui nous fait sa présentation sur <Text style={styles.textColor}>React Native, Expo</Text> et le développement cross-plateform.
                            <Text style={styles.textColor}># civtech # civdev # 225tech # akiltech</Text>
                        </Text>
                    </View>

                    <View style={styles.iconText}>
                        <TouchableOpacity
                        onPress={() => AddCalendar()}
                        >
                            <Image
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                                source={calendrier}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text numberOfLines={1} style={styles.text}>Lundi 13 janvier 2020
                                </Text>
                            <Text numberOfLines={1} style={styles.text}>17h24 GMT
                                </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity
                        onPress={() => Localisation()}
                        >
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40
                                    }}
                                    source={localisation}
                                />
                        </TouchableOpacity>
                            <View>
                                <Text numberOfLines={1} style={styles.text}>Cocody 2 Pltx,8ème tranche
                                </Text>
                                <Text numberOfLines={1} style={styles.text}>Cité Wedouwel, Abidjan
                                </Text>
                            </View>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default ListInfoEven;