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
    scan:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    img:{
        width:40,
        height:40,
        alignSelf:'center'
    }
})