import React, { useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import event from '../../../assets/images/even.png';
import styles from './styles';
import lock from '../../../assets/icons/cloche.png';
// import { useNavigation } from '@react-navigation/native';


const ListInfoEven = () => {
    return (
        <View>
            <View>
                <Image
                    style={styles.image}
                    source={event}
                />
                <View style={styles.imageCard}>
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
                        <View style={{marginTop:10}}>
                            <Text style={{ overflow: 'hidden', color: 'white' }}>
                                <Text numberOfLines={1} style={styles.textColor}># TechMonday</Text> @Akil avec Omar Fall qui nous fait sa présentation sur <Text  style={styles.textColor}>React Native, Expo</Text> et le développement cross-plateform.
                            <Text style={styles.textColor}># civtech # civdev # 225tech # akiltech</Text>
                            </Text>
                        </View>

                        <View style={styles.iconText}>
                            <View>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40
                                    }}
                                    source={lock}
                                />
                            </View>
                            <View>
                                <Text numberOfLines={1} style={styles.text}>Lundi 13 janvier 2020
                                </Text>
                                <Text numberOfLines={1} style={styles.text}>17h24 GMT
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40
                                    }}
                                    source={lock}
                                />
                            </View>
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
        </View>
    )
}

export default ListInfoEven;