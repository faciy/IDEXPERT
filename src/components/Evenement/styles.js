import {
    StyleSheet
} from 'react-native';
import { SIZES } from '../../assets/theme';

export default StyleSheet.create({
    header: {
        backgroundColor: '#1F4F4F',
        width: SIZES.width,
        height: SIZES.height - 500,
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
    body:{
        backgroundColor:'#215D5D',
        width:SIZES.width,
        height:SIZES.height
    }
})