import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    header: {
        backgroundColor: '#1F4F4F',
        width: SIZES.width,
        height: SIZES.height - 550,
        paddingHorizontal:20
    },
    menu: {
        width: 30,
        height: 30
    },
    text:{
        color: 'white',
        textAlign:'center' 
    },
    containerBody:{
        backgroundColor:'#215D5D',
        width:SIZES.width,
        height:SIZES.height,
        paddingHorizontal:20,
    },
    body:{
        marginTop: 30,
        height: SIZES.height / 1.6,
        borderRadius: 20,
        backgroundColor: '#A6DBDB',
        paddingHorizontal:20,
        padding:10
    },
    img:{
        width:40,
        height:40,
        alignSelf:'center'
    }
})