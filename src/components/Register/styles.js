import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    background: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    rectangle: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    trace: {
        resizeMode: "cover",
        height: SIZES.height,
        width: SIZES.width
    },
    logo:{
        alignSelf:'center',
        marginTop: 134
    },
    textConnexion:{
        marginTop:20,
        fontSize:30,
        color:'white',
        textAlign:'center'
    },
    registerButton:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    text:{
        color:'white'
    },
    textInput:{
        paddingLeft: 15,
    },
    img:{
        width:60,
        height:60,
        alignSelf:'center'
    }
   
})